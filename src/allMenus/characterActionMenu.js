import { sleepMenu } from "../characterActions/sleepMenu.js";
import { takeAShower } from "../characterActions/takeAShower.js";
import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import { executeCheat } from "../cheats/cheats.js";

export const characterActionMenu = async (character) => {
  let showMenu = true;
  const actingCharacter = character;
  let warningMessage = "";
  while (showMenu == true) {
    console.clear();
    const input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(actingCharacter)}
${warningMessage}
Escolha uma ação para o(a) ${actingCharacter.name}:

1.  ❌ Trabalhar ( -20000⌛️  -🛁  +💵 )

2.  ❌ Treinar habilidade de ${actingCharacter.aspiration} ( -8000⌛️  +🎮 )

3.  ✅ Dormir ( -⌛️  +✨ )

4.  ✅ Tomar banho ( -2000⌛️  -10💵  +100%🛁 )
 
5.  ❌ Comprar item

6.  ❌ Interagir com outro persongaem ( -2000⌛️  +❤️ )

7.  ✅ Aplicar cheat

8.  ✅ ( -10✨ )

9.  ✅ ( -10🛁 )

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
        showMenu = false;
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
        if (actingCharacter.cresceleons < 10) {
          warningMessage = `
- Opção ${input} escolhida
!!! O personagem não tem 10 Cresceleons !!!
`;
          break;
        }
        console.clear();
        showMenu = false;
        actingCharacter.hygiene = 28;
        actingCharacter.cresceleons -= 10;
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

      // Aplicar cheats
      case "7":
        const inputCheat = await useQuestion("Escreva seu cheat: ");
        await executeCheat(actingCharacter, inputCheat);
        warningMessage = `
- Opção ${input} escolhida
### Cheat aplicado com sucesso ###
`;
        break;

      // Perder 10 energia
      case "8":
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### ${actingCharacter.name} perde 10 de energia ###
`;
        actingCharacter.energy -= 10;
        break;

      // Perder 10 higiene
      case "9":
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
