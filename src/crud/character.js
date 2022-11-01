import { useQuestion } from "../services/question/use-question.js";
import { getStorage, updateStorage } from "./storage.js"
import { menuAbilitys } from "../allMenus/menuAbilitys.js";

export const setCharacter = async () => {
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

export const getCharacter = async () => {
    const storage = getStorage();
  
    while (true) {
        const input = await useQuestion("Escolha o id do personagem: ");
        const character = storage.find((charac) => charac.id == input);
        console.log(character)
  
        if (character) {
            return character;
        }
  
        console.log("Escolha um id valido");
    }
};
  
export const getAllCharacters = async () => {
    const storage = getStorage()
  
    for (const obj of storage) {
        console.table(obj);
    }
    
    await useQuestion(`
  Pressione ENTER para continuar...`);
};

export const deleteCharacters = async () => {
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