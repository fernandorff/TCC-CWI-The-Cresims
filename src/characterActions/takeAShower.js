export const takeAShower = async (character) => {
  character.hygiene = 28;
  character.cresceleons -= 10;

  return character;
};
