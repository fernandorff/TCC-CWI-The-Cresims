import { sleepMenu } from "../characterActions/sleepMenu.js";
import { takeAShower } from "../characterActions/takeAShower.js";
import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import { executeCheat } from "../cheats/cheats.js";
import { menuWork } from "./menuWork.js";
import { menuBuyItens } from "./menuBuyItens.js";
import { menuTrainning } from "./menuTranning.js";
import { menuInteraction } from "./menuInteraction.js";
import { updateCharacterBD } from "../crud/character.js";

export const characterActionMenu = async (character) => {
  let actingCharacter = character;
  let warningMessage = "";
  let status;

  while (true) {
    console.clear();
    const input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(actingCharacter)}
${warningMessage}
Escolha uma ação para o(a) ${actingCharacter.name}:

1.  ✅ Trabalhar ⬇⌛️ ⬇🛁 ⬆💵

2.  ✅ Treinar habilidade de ${actingCharacter.aspiration} ⬇⌛️ ⬇🛁 ⬆🎮

3.  ✅ Dormir ⬇⌛️ ⬆✨

4.  ✅ Tomar banho ⬇⌛️ ⬇💵 ⬆🛁
 
5.  ✅ Comprar item ⬇💵 ⬆🎮

6.  ✅ Interagir com outro persongaem ⬇⌛️ ⬆❤️

7.  ✅ ⬇10✨

8.  ✅ ⬇10🛁

X.  ✅ Voltar ao menu principal

Sua escolha:`);

    switch (input) {
      // Trabalhar
      case "1":
        if (actingCharacter.energy <= 2) {
          warningMessage = `
- Opção ${input} escolhida
!!! O personagem precisa de no mínimo 3 de energia para trabalhar !!!
        `;
          break;
        }
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        actingCharacter = await menuWork(actingCharacter);
        break;

      // Treinar habilidade
      case "2":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        actingCharacter = await menuTrainning(actingCharacter);
        break;

      // Dormir
      case "3":
        if (actingCharacter.energy >= 32) {
          actingCharacter.energy = 32;
          warningMessage = `
- Opção ${input} escolhida
### O personagem está com a energia completa ###
`;
          break;
        }
        warningMessage = ``;

        console.clear();
        actingCharacter = await sleepMenu(actingCharacter);
        break;

      // Tomar banho
      case "4":
        if (actingCharacter.hygiene >= 28) {
          actingCharacter.hygiene = 28;
          warningMessage = `
- Opção ${input} escolhida
### O personagem está completamente limpo ###
`;
          break;
        }
        if (actingCharacter.cresceleons < 10) {
          warningMessage = `
- Opção ${input} escolhida
!!! O personagem não tem 10 Cresceleons !!!
`;
          break;
        }
        warningMessage = ``;
        console.clear();
        actingCharacter.hygiene = 28;
        actingCharacter.cresceleons -= 10;
        actingCharacter = await takeAShower(actingCharacter, 5);
        break;

      // Comprar item
      case "5":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
        `;
        actingCharacter = await menuBuyItens(actingCharacter);
        break;

      // Interagir com outro personagem
      case "6":
        console.clear();
        [actingCharacter, status] = await menuInteraction(actingCharacter);

        warningMessage = `
- Opção ${input} escolhida
  ### Interação entre usuarios realizado com sucesso ###`;
        if (!status) {
          warningMessage = `
- Opção ${input} escolhida
  !!! Energia insuficiente para realizar interação !!!`;
        }
        break;

      // Voltar para menu principal
      case "X":
        return;

      case "x":
        return;

      // Perder 10 energia
      case "7":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${actingCharacter.name} perde 10 de energia ###
`;
        actingCharacter.energy -= 10;
        break;

      // Perder 10 higiene
      case "8":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${actingCharacter.name} perde 10 de energia ###
`;
        actingCharacter.hygiene -= 10;
        break;

      // OPÇÃO INVALIDA e Cheat
      default:
        const characterTemp = { ...actingCharacter };
        actingCharacter = await executeCheat(actingCharacter, input);
        if (characterTemp != actingCharacter) {
          warningMessage = `
- Opção ${input} escolhida
### Cheat aplicado com sucesso ###
`;
        } else {
          warningMessage = `
- Opção ${input} escolhida
### Escolha uma opção válida ###
`;
        }

        console.clear();
        break;
    }

    updateCharacterBD(actingCharacter);
  }
};
