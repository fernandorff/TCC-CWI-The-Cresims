import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "../allMenus/characterInfoDisplay.js";
import { characterActionMenu } from "../allMenus/characterActionMenu.js";

// calcula o tempo necessário para preencher energia completamente segundo as regras de negocio
const calculateNecessaryTimeForFullEnergy = async (actingCharacter) => {
  let timeForFullEnergy = 0;
  let energyForFull = 32 - actingCharacter.energy;
  let bonus = 0;
  if (energyForFull <= 0) {
    return timeForFullEnergy;
  } else {
    while (energyForFull >= 0) {
      timeForFullEnergy += 5000;
      energyForFull -= 4;
      energyForFull -= bonus;
      bonus += 2;
    }
  }
  return timeForFullEnergy;
};

const sleepAction = async (actingCharacter, sleepTime) => {
  for (let i = 0; i < sleepTime; ++i) {
    let waitingDots = ".";
    for (let j = 0; j < i % 3; ++j) {
      waitingDots += ".";
    }
    console.clear();
    console.log(`
### The Cresims ###

${actingCharacter.name} está dormindo${waitingDots}
            
${i} / ${sleepTime}
            
`);
    actingCharacter.time -= 1000;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  console.clear();
  console.log(`
### The Cresims
        
${actingCharacter.name} terminou de dormir!
    
${sleepTime} / ${sleepTime}
`);
};

export const sleepMenu = async (character) => {
  console.clear();
  const actingCharacter = character;
  let sleepTime = 0;
  let warningMessage = ``;

  while (true) {
    console.clear();
    let input = await useQuestion(`
### The Cresims ###

${await characterInfoDisplay(actingCharacter)}

Quanto tempo você quer dormir?

${warningMessage}

1. Até recuperar toda a energia (${await calculateNecessaryTimeForFullEnergy(
      actingCharacter
    )} ms)
2. 1 ciclo de sono (5000 ms) +4 energia
3. 2 ciclos de sono (10000 ms) +10 energia
4. 3 ciclos de sono (15000 ms) +18 energia
5. 4 ciclos de sono (20000 ms) +28 energia

X. Voltar ao menu de ações
`);

    switch (input) {
      case 1:
        sleepTime = calculateNecessaryTimeForFullEnergy / 1000;
        await sleepAction(actingCharacter, sleepTime);
        break;

      case 2:
        sleepTime = 5;
        await sleepAction(actingCharacter, sleepTime);
        break;

      case 3:
        sleepTime = 10;
        await sleepAction(actingCharacter, sleepTime);
        break;

      case 4:
        sleepTime = 15;
        await sleepAction(actingCharacter, sleepTime);
        break;

      case 5:
        sleepTime = 20;
        await sleepAction(actingCharacter, sleepTime);
        break;

      case "X":
        characterActionMenu(actingCharacter);
        break;
    }
  }
};
