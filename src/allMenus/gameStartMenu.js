import { useLocalStorage } from "../services/local-storage/use-local-storage.js";
import { useQuestion } from "../services/question/use-question.js";
import { menuAbilitys } from "./menuAbilitys.js";
import { theCresimsLogo } from "./theCresimsLogo.js";

export const gameStartMenu = async () => {
  let warningMessage = ``;
  while (true) {
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
4 - Deletar Personagem

Sua escolha: `);

    switch (input) {
      case "1":
        return setCharacter();
      case "2":
        return getCharacter();
      case "3":
        await getAllCharacters();
        break;
      case "4":
        await deleteCharacters();
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

const setCharacter = async () => {
  const id = getId();
  const name = await useQuestion(`Qual o seu nome? `);
  const aspiration = await menuAbilitys("Qual a sua aspiração?");
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

  updateStorage([ ...getStorage(), character ]);

  return character;
};

const getCharacter = async () => {
  const storage = getStorage();

  while (true) {
    const input = await useQuestion("Escolha o id do personagem: ");
    const character = storage.find((charac) => charac.id == input);

    if (character) {
      return character;
    }

    console.log("Escolha um id valido");
  }
};

const getAllCharacters = async () => {
  const storage = getStorage()

  for (const obj of storage) {
    console.table(obj);
  }
  
  await useQuestion(`
Pressione ENTER para continuar...`);
};

const deleteCharacters = async () => {
  const storage = getStorage();

  const input = await useQuestion("Escolha o id do personagem: ");
  const newStorage = storage.filter((charac) => charac.id != input);

  updateStorage([ ...newStorage ]);
}

const getId = () => {
  const storage = getStorage()

  for (let cont = 1; true; cont++) {
    const character = storage.find((charac) => charac.id == cont);

    if (!character) {
      return cont;
    }
  }
}

const updateStorage = (newStorage) => {
  const localStorage = useLocalStorage();
  localStorage.setObject("inGameCharacters.json", [...newStorage]);
}

const getStorage = () => {
  const localStorage = useLocalStorage();
  const storage = localStorage.getObject("inGameCharacters.json") || [];
  return storage
}