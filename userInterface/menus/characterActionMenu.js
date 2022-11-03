import { sleepMenu } from "../../src/characterActions/sleepMenu.js";
import { takeAShower } from "../../src/characterActions/takeAShower.js";
import { useQuestion } from "../../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import { executeCheat } from "../../src/characterActions/cheats.js";
import { menuWork } from "./menuWork.js";
import { menuBuyItens } from "./menuBuyItens.js";
import { menuTrainning } from "./menuTranning.js";
import { menuInteraction } from "./menuInteraction.js";
import {
  deleteCharacters,
  updateCharacterBD,
} from "../../services/crud/character.js";
import { characterDeath } from "../../src/characterActions/characterDeath.js";
import { gameStartMenu } from "./gameStartMenu.js";
import {
  updateStorageDead,
  getStorageDead,
} from "../../services/crud/storage.js";
import { clearBash } from "../../src/characterActions/common.js";

export const validateEnergyAndHygiene = async (character) => {
  if (character.energy > 32) {
    character.energy = 32;
  }
  if (character.energy < 0) {
    character.energy = 0;
  }
  if (character.hygiene > 28) {
    character.hygiene = 28;
  }
  if (character.hygiene < 0) {
    character.hygiene = 0;
  }
};

export const characterActionMenu = async (character) => {
  let warningMessage = "";
  let status;

  while (true) {
    if (character == null) {
      return;
    }
    validateEnergyAndHygiene(character);
    if (character.time <= 0) {
      await characterDeath(character);
      await updateStorageDead(...getStorageDead(), character);
      deleteCharacters(character.id);
      console.log("delaçao premiada");
      return;
    }
    clearBash();
    const input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(character)}
${warningMessage}
Escolha uma ação para o(a) ${character.name}:

1. Trabalhar ⬇⌛️ ⬇🛁 ⬆💵

2. Treinar habilidade de ${character.aspiration} ⬇⌛️ ⬇🛁 ⬆🎮

3. Dormir ⬇⌛️ ⬆✨

4. Tomar banho ⬇⌛️ ⬇💵 ⬆🛁
 
5. Comprar item ⬇💵 ⬆🎮

6. Interagir com outro personagem ⬇⌛️ ⬆❤️

X. Voltar ao menu principal

Sua escolha:`);

    switch (input.toUpperCase()) {
      // Trabalhar
      case "1":
        if (character.energy <= 2) {
          warningMessage = `
- Opção ${input} escolhida
\x1b[33m !!! O personagem precisa de no mínimo 3 de energia para trabalhar !!! \x1b[0m
        `;
          break;
        }
        console.log("\x1Bc");
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuWork(character);
        break;

      // Treinar habilidade
      case "2":
        console.log("\x1Bc");
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuTrainning(character);
        break;

      // Dormir
      case "3":
        if (character.energy >= 32) {
          character.energy = 32;
          warningMessage = `
- Opção ${input} escolhida
\x1b[33m### O personagem está com a energia completa ###\x1b[0m
`;
          break;
        }
        warningMessage = ``;

        console.log("\x1Bc");
        character = await sleepMenu(character);
        break;

      // Tomar banho
      case "4":
        if (character.hygiene >= 28) {
          character.hygiene = 28;
          warningMessage = `
- Opção ${input} escolhida
\x1b[33m### O personagem está completamente limpo ###\x1b[0m
`;
          break;
        }
        if (character.cresceleons < 10) {
          warningMessage = `
- Opção ${input} escolhida
\x1b[33m!!! O personagem não tem 10 Cresceleons !!!\x1b[0m
`;
          break;
        }
        warningMessage = ``;
        console.log("\x1Bc");

        character = await takeAShower(character, 10, true);
        break;

      // Comprar item
      case "5":
        console.log("\x1Bc");
        warningMessage = `
- Opção ${input} escolhida
        `;
        character = await menuBuyItens(character);
        break;

      // Interagir com outro personagem
      case "6":
        console.log("\x1Bc");
        [character, status] = await menuInteraction(character);

        warningMessage = `
- Opção ${input} escolhida
\x1b[33m### Interação entre usuarios realizado com sucesso ###\x1b[0m`;
        if (!status) {
          warningMessage = `
- Opção ${input} escolhida
\x1b[33m!!! Interação não realizada !!!\x1b[0m`;
        }
        break;

      // Voltar para menu principal
      case "X":
        return gameStartMenu();

      // OPÇÃO INVALIDA e Cheat
      default:
        character = await executeCheat(character, input);

        warningMessage = `
- Opção ${input} escolhida
\x1b[33m!!! Opção Invalida! Escolha uma opção válida !!!\x1b[0m
`;
        if (verifyCheat(input)) {
          warningMessage = `
\x1b[33m### Cheat aplicado com sucesso ###\x1b[0m
`;
        }

        console.log("\x1Bc");
        break;
    }

    updateCharacterBD(character);
  }
};

const verifyCheat = (input) => {
  const inputUpper = input.toUpperCase();
  return (
    inputUpper == "SORTENAVIDA" ||
    inputUpper == "DEITADONAREDE" ||
    inputUpper == "JUNIM" ||
    inputUpper == "SINUSITE"
  );
};
