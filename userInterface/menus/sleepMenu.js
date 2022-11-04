import { 
  calculateNecessaryTimeForFullEnergy,
  sleepAction
} from "../../src/characterActions/sleep.js"
import { useQuestion } from "../../services/question/use-question.js";
import { characterInfoDisplay } from "../../userInterface/menus/characterInfoDisplay.js";
import { theCresimsLogo } from "../../userInterface/menus/theCresimsLogo.js";
import { sleepAction } from "../../src/characterActions/sleepMenu.js";

export const sleepMenu = async (character) => {
    console.clear();
    let sleepTime = 0;
    let warningMessage = ``;
  
    while (true) {
      console.clear();
      let input = await useQuestion(`
  ${await theCresimsLogo()}
  
  ${await characterInfoDisplay(character)}
  
  Quanto tempo você quer dormir?
  ${warningMessage}
  1. 1 ciclo de sono  ( -5000⌛️  +4✨ )
  2. 2 ciclos de sono ( -10000⌛️  +10✨ )
  3. 3 ciclos de sono ( -15000⌛️  +18✨ )
  4. 4 ciclos de sono ( -20000⌛️  +28✨ )
  5. Até recuperar toda a energia ( -${await calculateNecessaryTimeForFullEnergy(
        character
      )}⌛️  +100%✨ )
  
  X. Voltar ao menu de ações
  
  Sua escolha:`);
      input = input.toUpperCase();
  
      switch (input) {
        case "5":
          await sleepAction(
            character,
            (await calculateNecessaryTimeForFullEnergy(character)) / 1000,
            true
          );
  
          return character;
  
        case "1":
          sleepTime = 5;
          await sleepAction(character, sleepTime, true);
  
          return character;
  
        case "2":
          sleepTime = 10;
          await sleepAction(character, sleepTime, true);
  
          return character;
  
        case "3":
          sleepTime = 15;
          await sleepAction(character, sleepTime, true);
  
          return character;
  
        case "4":
          sleepTime = 20;
          await sleepAction(character, sleepTime, true);
  
          return character;
  
        case "X":
          return character;
  
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