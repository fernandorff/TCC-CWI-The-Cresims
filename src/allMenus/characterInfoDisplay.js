export const characterInfoDisplay = async (character) => {
  return `
- ${character.name} -
 ,,,,  ⌛️   Tempo de jogo: ${character.time}
(⚆_⚆   ✨  Energia: ${character.energy}/32
 <|>   🛁  Higiene: ${character.hygiene}/28
  LL   💵  Cresceleons: ${character.cresceleons}
       🎮  Pontos de ${character.aspiration}: ${character.skill}`;
};
