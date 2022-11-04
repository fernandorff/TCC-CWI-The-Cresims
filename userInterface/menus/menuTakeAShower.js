import { takeAShower } from "../../src/characterActions/takeAShower.js";
import { takeAshowerAnim } from "../animations/takeAShowerAnim.js";

export const menuTakeAShower = async (character, showerTime) => {
    takeAShower(character);
    await takeAshowerAnim(character, showerTime)
}