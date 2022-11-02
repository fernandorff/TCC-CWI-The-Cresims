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
  let gameStartMenu = true;

  while (gameStartMenu == true) {
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
1. Criar Personagem

2. Escolher Personagem

3. Listar Personagens

4. Deletar Personagem

X. Finalizar jogo

Sua escolha: `);

    switch (input.toUpperCase()) {
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
      case "X":
        console.log("\nFinalizando Game");
        return "exit";
      default:
        console.clear();
        warningMessage = `
### Escolha uma opção válida ###
`;
    }
  }
};
