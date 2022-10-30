import { useLocalStorage } from "./src/services/local-storage/use-local-storage.js";
import { gameStartMenu } from "./src/allMenus/gameStartMenu.js";
import { characterActionMenu } from "./src/allMenus/characterActionMenu.js";

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

const mock = {
  name: 'Fulano',
  aspiration: 'JOGOS',
  cresceleons: 10500,
  time: 3600000,
  hygiene: 28,
  energy: 32,
  relationship: [],
  skill: 0,
  items: []
}
characterActionMenu(mock)
