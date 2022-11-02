import { useQuestion } from "../services/question/use-question.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import {
  setCharacter,
  getCharacter,
  getAllCharacters,
  deleteCharacters,
} from "../crud/character.js";

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
