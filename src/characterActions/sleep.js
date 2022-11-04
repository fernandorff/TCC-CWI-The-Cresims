import { sleepAnim } from "../../userInterface/animations/sleepAnim.js";

export const calculateNecessaryTimeForFullEnergy = async (character) => {
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
  if (animation) await sleepAnim(character, sleepTime, animation)
  let bonus = 0;
  for (let i = 0; i < sleepTime / 5; i++) {
    character.energy += 4;
    character.energy += bonus;
    bonus += 2;
  }
};
