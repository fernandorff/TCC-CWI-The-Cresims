import { useQuestion } from "../../services/question/use-question.js";
import { theCresimsLogo } from "../../userInterface/menus/theCresimsLogo.js";
import { clouds, zZz } from "../../userInterface/animations/sleepAnim.js"

//
// calcula o tempo necessário para preencher energia completamente segundo as regras de negocio
//

const calculateNecessaryTimeForFullEnergy = async (character) => {
  let timeForFullEnergy = 0;
  let energyForFull = 32 - character.energy;
  let bonus = 0;

  while (energyForFull > 0) {
    timeForFullEnergy += 5000;
    energyForFull -= 4;
    energyForFull -= bonus;
    bonus += 2;
  }

  return timeForFullEnergy;
};

export const sleepAction = async (character, sleepTime, animation) => {
  let cloudId = 1;
  let zZzId = 1;
  for (let i = 0; i < sleepTime; ++i) {
    character.time -= 1000;
    if (animation) {
      let waitingDots = ".";
      for (let j = 0; j < i % 3; ++j) {
        waitingDots += ".";
      }
      if (cloudId > 6) {
        cloudId = 1;
      }
      if (zZzId > 3) {
        zZzId = 1;
      }
      console.clear();
      console.log(`
${await theCresimsLogo()}

${await clouds(cloudId)}
         .           .
      .  |,,,_______/|
  ${await zZz(zZzId)} | (u_u)/    .//| ${await zZz(zZzId)}
      |/___/______|//! 
      |___________|/
      !           !

        ${i} / ${sleepTime}

${character.name} está dormindo${waitingDots}
            

`);

      cloudId += 1;
      zZzId += 1;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  if (animation) {
    console.clear();
    zZzId = 4;
    cloudId = 7;
    console.log(`
${await theCresimsLogo()}

${await clouds(cloudId)}
         .           .
      .  |,,,_______/|
  ${await zZz(zZzId)} | (O_O)/    .//| WAKE ME UP
      |/___/______|//! 
      |___________|/
      !           !

        ${sleepTime} / ${sleepTime}

${character.name} terminou de dormir!
`);
    await useQuestion(`Pressione ENTER para continuar...`);
  }
  let bonus = 0;
  for (let i = 0; i < sleepTime / 5; i++) {
    character.energy += 4;
    character.energy += bonus;
    bonus += 2;
  }
};


