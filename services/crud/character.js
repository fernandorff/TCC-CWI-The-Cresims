import { useQuestion } from "../question/use-question.js";
import { getStorage, updateStorage } from "./storage.js";
import { menuAbilitys } from "../../userInterface/menus/menuAbilitys.js";

export const setCharacter = async () => {
  const id = getId();
  const name = await useQuestion(`Qual o seu nome? `);
  const aspiration = await menuAbilitys("Qual a sua aspiração?");
  const cresceleons = 1500;
  const time = 3600000;
  const hygiene = 28;
  const energy = 32;
  const relationship = [];
  const employee = []
  const skill = 0;
  const items = [];
  let iconAspiration = "";

  switch (aspiration) {
    case "PINTURA":
      iconAspiration = "🎨";
      break;

    case "GASTRONOMIA":
      iconAspiration = "🥩";
      break;

    case "JOGOS":
      iconAspiration = "🎮";
      break;

    case "MUSICA":
      iconAspiration = "🎸";
      break;

    case "JARDINAGEM":
      iconAspiration = "🌱";
      break;
  }

  const character = {
    id,
    name,
    aspiration,
    cresceleons,
    time,
    hygiene,
    energy,
    employee,
    relationship,
    skill,
    items,
    iconAspiration,
  };

  updateStorage(...getStorage(), character);

  return character;
};

export const getCharacter = async (characterPrev) => {
  let warningMessage = `
### Escolha um personagem ###
`;

  const storage = getStorage();

  console.log(`${warningMessage}`);

  for (const obj of storage) {
    console.log(`${obj.id} - ${obj.name} (Tempo restante: ${obj.time})`);
  }
  console.log(`X - Retornar`);

  const input = await useQuestion(`
Sua escolha `);

  if (input.toUpperCase() == "X") {
    return characterPrev;
  }

  const character = storage.find((charac) => charac.id == input);

  if (character) {
    return character;
  }
  warningMessage = `
!!! Insira um ID valido !!!
`;
};

export const getAllCharacters = async () => {
  const storage = getStorage();

  console.log(`
### Lista de Personagens ###
`);
  for (const obj of storage) {
    console.log(`${obj.id} - ${obj.name} (Tempo restante: ${obj.time})`);
  }

  await useQuestion(`
Pressione ENTER para continuar...`);
};

export const deleteCharacters = (id) => {
  const storage = getStorage();

  const newStorage = storage.filter((charac) => charac.id != id);

  updateStorage(...newStorage);
};

const getId = () => {
  const storage = getStorage();

  for (let cont = 1; true; cont++) {
    const character = storage.find((charac) => charac.id == cont);

    if (!character) {
      return cont;
    }
  }
};

export const updateCharacterBD = (character) => {
  const listCharacter = getStorage();

  const newList = listCharacter.map((element) => {
    if (character.id == element.id) {
      return character;
    }
    return element;
  });

  updateStorage(...newList);
};
