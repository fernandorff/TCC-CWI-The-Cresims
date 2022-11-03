import { checkLevelSkill } from "../../src/characterActions/skillAspiration.js";

const getItemList = async (character) => {
  let str = "";
  character.items.forEach((i) => {
    str += i + ", ";
  });
  return str;
};

export const characterInfoDisplay = async (character) => {
  return `
 ~ Olá! Meu nome é ${character.name} ~

 ,,,,  ⌛️  Tempo de jogo: ${character.time}
(⚆_⚆   ✨  Energia: ${character.energy}/32
 <|>   🛁  Higiene: ${character.hygiene}/28
  LL   💵  Cresceleons: ${character.cresceleons}
       ${character.iconAspiration}  Pontos de ${character.aspiration}: ${
    character.skill
  } (${checkLevelSkill(character.skill)})
       📦  Itens: ${await getItemList(character)}`;
};
