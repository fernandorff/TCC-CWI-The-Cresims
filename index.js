import { gameStartMenu } from "./userInterface/menus/gameStartMenu.js";
import { characterActionMenu } from "./userInterface/menus/characterActionMenu.js";

const main = async () => {
  while (true) {
    console.log("oi")
    const obj = await gameStartMenu();

    if (obj == "exit") {
      return;
    }
    
    if (typeof obj == "object") {
      console.clear();
      await characterActionMenu(obj);
    }
  }
};

main();
