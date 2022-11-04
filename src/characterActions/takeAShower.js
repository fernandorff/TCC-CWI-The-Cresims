import { takeAshowerAnim } from "../../userInterface/animations/takeAShowerAnim.js";

export const takeAShower = async (character, showerTime, animation) => {
  if (animation) {
    takeAshowerAnim(character, showerTime)
  }

  character.hygiene = 28;
  character.cresceleons -= 10;

  return character;
};
