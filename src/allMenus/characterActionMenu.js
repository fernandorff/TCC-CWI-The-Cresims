import { sleepMenu } from "../characterActions/sleepMenu.js";
import { takeAShower } from "../characterActions/takeAShower.js";
import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";

export const characterActionMenu = async (character) => {
  let characterActionMenuRunning = true;
  const actingCharacter = character;
  let warningMessage = "";
  while (characterActionMenuRunning == true) {
    console.clear();
    const input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(actingCharacter)}

${warningMessage}

Escolha uma ação para o(a) ${actingCharacter.name}:
1.  ❌ Trabalhar (Tempo gasto: 20000ms)
2.  ❌ Treinar habilidade (${actingCharacter.aspiration} - Tempo gasto: 8000ms)
3.  ✅ Dormir (Tempo gasto: até recuperar toda a energia, recupera)
4.  ✅ Tomar banho { -2000 ⏱ | -10 💵 | + 100% 🛁 }
5.  ❌ Comprar item
6.  ❌ Interagir com outro persongaem (Tempo: 2000ms | Disponíveis: a definir)
7.  ❌ Esperar personagem (Espera outro personagem ficar livre)
8.  ❌ Cheats
9.  ✅ Perder 10 energia
10. ✅ Perder 10 higiene

Sua escolha:`);

    switch (input) {
      // Trabalhar
      case "1":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
        break;

      // Treinar habilidade
      case "2":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
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
        console.clear();
        characterActionMenuRunning = false;
        await sleepMenu(actingCharacter);
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
        console.clear();
        characterActionMenuRunning = false;
        actingCharacter.hygiene = 28;
        await takeAShower(actingCharacter, 5);
        break;

      // Comprar item
      case "5":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
        break;

      // Interagir com outro personagem
      case "6":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
        break;

      // Esperar personagem
      case "7":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
        break;

      // Aplicar cheats
      case "8":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
!!! Essa opção se encontra em implementação !!!
        `;
        break;

      // Perder 10 energia
      case "9":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${actingCharacter.name} perde 10 de energia ###
`;
        actingCharacter.energy -= 10;
        break;

      // Perder 10 higiene
      case "10":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${actingCharacter.name} perde 10 de energia ###
`;
        actingCharacter.hygiene -= 10;
        break;

      // OPÇÃO INVALIDA
      default:
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### Escolha uma opção válida ###
`;
        break;
    }
  }
};
