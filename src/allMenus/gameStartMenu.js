import { useQuestion } from "../services/question/use-question.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import {
  setCharacter,
  getCharacter,
  getAllCharacters,
  deleteCharacters,
} from "../crud/character.js";
import { getStorage } from "../crud/storage.js";

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
        const id = await menuDelete()
        deleteCharacters(id);
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

const menuDelete = async () => {
  const storage = getStorage();

  console.log(`
### Delete um personagem ###
`);

  for (const obj of storage) {
    console.log(`${obj.id} - ${obj.name} (Tempo restante: ${obj.time})`);
  }
  console.log(`X - Retornar ao menu principal.`);

  return await useQuestion(`
Escolha o id do personagem: `);
}