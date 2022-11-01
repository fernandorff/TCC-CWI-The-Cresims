import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "../allMenus/characterInfoDisplay.js";
import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";

//
// calcula o tempo necessário para preencher energia completamente segundo as regras de negocio
//

const calculateNecessaryTimeForFullEnergy = async (actingCharacter) => {
  let timeForFullEnergy = 0;
  let energyForFull = 32 - actingCharacter.energy;
  let bonus = 0;

  while (energyForFull > 0) {
    timeForFullEnergy += 5000;
    energyForFull -= 4;
    energyForFull -= bonus;
    bonus += 2;
  }

  return timeForFullEnergy;
};

//
// Executa ação de dormir
//

const sleepAction = async (actingCharacter, sleepTime) => {
  for (let i = 0; i < sleepTime; ++i) {
    let waitingDots = ".";
    for (let j = 0; j < i % 3; ++j) {
      waitingDots += ".";
    }
    console.clear();
    console.log(`
${await theCresimsLogo()}

${actingCharacter.name} está dormindo${waitingDots}
            
${i} / ${sleepTime}
`);
    actingCharacter.time -= 1000;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  console.clear();
  console.log(`
${await theCresimsLogo()}
        
${actingCharacter.name} terminou de dormir!
    
${sleepTime} / ${sleepTime}
`);
  await useQuestion(`Pressione ENTER para continuar...`);
};

//
// Exibe o menu de opções de dormir
//

export const sleepMenu = async (character) => {
  console.clear();
  const actingCharacter = character;
  let sleepTime = 0;
  let warningMessage = ``;

  while (true) {
    console.clear();
    let input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(actingCharacter)}

Quanto tempo você quer dormir?
${warningMessage}
1. Até recuperar toda a energia ( -${await calculateNecessaryTimeForFullEnergy(
      actingCharacter
    )}⌛️  +100%✨ )
2. 1 ciclo de sono  ( -5000⌛️  +4✨ )
3. 2 ciclos de sono ( -10000⌛️  +10✨ )
4. 3 ciclos de sono ( -15000⌛️  +18✨ )
5. 4 ciclos de sono ( -20000⌛️  +28✨ )

X. Voltar ao menu de ações

Sua escolha:`);
    input = input.toUpperCase();

    switch (input) {
      case "1":
        await sleepAction(
          actingCharacter,
          (await calculateNecessaryTimeForFullEnergy(actingCharacter)) / 1000
        );

        actingCharacter.energy = 32
        return actingCharacter;

      case "2":
        sleepTime = 5;
        await sleepAction(actingCharacter, sleepTime);
        actingCharacter.energy += 4;

        if (actingCharacter.energy > 32) {
          actingCharacter.energy = 32;
        }

        return actingCharacter;

      case "3":
        sleepTime = 10;
        await sleepAction(actingCharacter, sleepTime);
        actingCharacter.energy += 10;

        if (actingCharacter.energy > 32) {
          actingCharacter.energy = 32;
        }
        
        return actingCharacter;

      case "4":
        sleepTime = 15;
        await sleepAction(actingCharacter, sleepTime);
        actingCharacter.energy += 18;

        if (actingcharacter.energy > 32) {
          actingCharacter.energy = 32;
        }

        return actingCharacter;

      case "5":
        sleepTime = 20;
        await sleepAction(actingCharacter, sleepTime);
        actingCharacter.energy += 28;

        if (actingCharacter.energy > 32) {
          actingCharacter.energy = 32;
        }

        return actingCharacter;

      case "X":
        return actingCharacter;

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
