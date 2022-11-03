import { useQuestion } from "../services/question/use-question.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import {
  setCharacter,
  getCharacter,
  getAllCharacters,
  deleteCharacters,
} from "../crud/character.js";
import { getStorage, getStorageDead } from "../crud/storage.js";
import { characterDeath } from "../characterActions/characterDeath.js";

export const gameStartMenu = async () => {
  let warningMessage = ``;
  let gameStartMenu = true;

  while (gameStartMenu == true) {
    console.log('\x1Bc');;
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

5. Visualizar Tumulo de Personagem

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
        if (id) {
          deleteCharacters(id);
        }
        break;
      case "5":
        const charDead = await menuDead()
        if (charDead) {
          await characterDeath(charDead)
        }
        break;
      case "X":
        console.log("\nFinalizando Game");
        return "exit";
      default:
        console.log('\x1Bc');;
        warningMessage = `
### Escolha uma opção válida ###
`;
    }
  }
};

const menuDead = async () => {
  const storage = getStorageDead();
  console.log('\x1Bc');
  console.log(`
### Escolha um personagem para vizualizar tumulo ###
`);

  for (let cont = 0; cont < storage.length; cont++) {
    console.log(`${cont + 1} - ${storage[cont].name}`);
  }
  console.log(`X - Retornar ao menu principal.`);

  const id = await useQuestion(`Escolha o id do personagem: `);

  if (id != "X" || id != "x") {
    return storage[id - 1]
  }
}

const menuDelete = async () => {
  const storage = getStorage();

  console.log(`
### Delete um personagem ###
`);

  for (const obj of storage) {
    console.log(`${obj.id} - ${obj.name} (Tempo restante: ${obj.time})`);
  }
  console.log(`X - Retornar ao menu principal.`);

  const id = await useQuestion(`Escolha o id do personagem: `);

  if (id != "X" || id != "x") {
    return id
  }
}