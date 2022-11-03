import { gameStartMenu } from "./userInterface/menus/gameStartMenu.js";
import { characterActionMenu } from "./src/allMenus/characterActionMenu.js";

const main = async () => {
  while (true) {
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
