import { useLocalStorage } from "./src/services/local-storage/use-local-storage.js";
import { gameStartMenu } from "./src/allMenus/gameStartMenu.js";
import { characterActionMenu } from "./src/allMenus/characterActionMenu.js";

//    menu do personagem           actingCharacter = personagem que está agindo nesse menu

const main = async () => {
  const localStorage = useLocalStorage();

  const obj = await gameStartMenu();

  const storage = localStorage.getObject("nome-array") || [];
  localStorage.setObject("inGameCharacters", [...storage, obj]);

  console.log(localStorage.getObject("inGameCharacters"));

  console.clear();

  characterActionMenu(obj);
};

main();
