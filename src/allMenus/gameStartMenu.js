import { useLocalStorage } from "../services/local-storage/use-local-storage.js";
import { useQuestion } from "../services/question/use-question.js";
import { theCresimsLogo } from "./theCresimsLogo.js";

export const gameStartMenu = async () => {
  let gameStartMenuRunning = true;
  let warningMessage = ``;
  while (gameStartMenuRunning == true) {
    console.clear();
    const input = await useQuestion(`
  ▀██ ▀██▀  ▀█▀         ▀██                                          ▄           
   ▀█▄ ▀█▄  ▄▀    ▄▄▄▄   ██    ▄▄▄▄    ▄▄▄   ▄▄ ▄▄ ▄▄     ▄▄▄▄     ▄██▄    ▄▄▄   
    ██  ██  █   ▄█▄▄▄██  ██  ▄█   ▀▀ ▄█  ▀█▄  ██ ██ ██  ▄█▄▄▄██     ██   ▄█  ▀█▄ 
     ███ ███    ██       ██  ██      ██   ██  ██ ██ ██  ██          ██   ██   ██ 
      █   █      ▀█▄▄▄▀ ▄██▄  ▀█▄▄▄▀  ▀█▄▄█▀ ▄██ ██ ██▄  ▀█▄▄▄▀     ▀█▄▀  ▀█▄▄█▀ 
${await theCresimsLogo()}
                                                                                          
Escolha uma das opções:
${warningMessage}
1 - Criar Personagem
2 - Escolher Personagem
3 - Listar Personagens

Sua escolha: `);

    switch (input) {
      case "1":
        return setCharacter();
      case "2":
        return getCharacter();
      case "3":
        await getAllCraracters();
        break;
      default:
        console.clear();
        warningMessage = `
### Escolha uma opção válida ###
`;
        break;
    }
  }
};

const setAspiration = async () => {
  let warningMessage = ``;
  while (true) {
    console.log();

    const input = await useQuestion(`
Qual a sua aspiração? 
${warningMessage}
1 - Gastronomia
2 - Pintura
3 - Jogos
4 - Jardinagem
5 - Música

Sua escolha: `);

    switch (input) {
      case "1":
        console.clear();
        return "GASTRONOMIA";
      case "2":
        console.clear();
        return "PINTURA";
      case "3":
        console.clear();
        return "JOGOS";
      case "4":
        console.clear();
        return "JARDINAGEM";
      case "5":
        console.clear();
        return "MUSICA";
      default:
        console.clear();
        warningMessage = `
### Escolha uma opção válida ###
`;
        break;
    }
  }
};

const setCharacter = async () => {
  const localStorage = useLocalStorage();
  const storage = localStorage.getObject("inGameCharacters.json") || [];

  const id = storage.length;
  const name = await useQuestion(`Qual o seu nome? `);
  const aspiration = await setAspiration();
  const cresceleons = 1500;
  const time = 3600000;
  const hygiene = 28;
  const energy = 32;
  const relationship = [];
  const skill = 0;
  const items = [];

  const character = {
    id,
    name,
    aspiration,
    cresceleons,
    time,
    hygiene,
    energy,
    relationship,
    skill,
    items,
  };

  localStorage.setObject("inGameCharacters.json", [...storage, character]);

  return character;
};

const getCharacter = async () => {
  const storage = useLocalStorage().getObject("inGameCharacters.json") || [];
  while (true) {
    const input = await useQuestion("Escolha o id do personagem: ");
    const character = storage.find((charac) => charac.id == input);

    if (character) {
      return character;
    }
    console.log("Escolha um id valido");
  }
};

const getAllCraracters = async () => {
  const localStorage = useLocalStorage();
  const storage = localStorage.getObject("inGameCharacters.json");

  for (const obj of storage) {
    console.table(obj);
  }
  let pressEnter = await useQuestion(`
Pressione ENTER para continuar...`);
  const input = await useQuestion();
};
