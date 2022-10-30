import { useLocalStorage } from "../services/local-storage/use-local-storage.js";
import { useQuestion } from "../services/question/use-question.js";

export const gameStartMenu = async () => {
  while (true) {
    console.clear();
    console.log(`
####################################
###                              ###
###   BEM VINDO AO THE CRESIMS   ###
###                              ###
####################################

Escolha uma das opções:

1 - Criar Personagem
2 - Escolher Personagem
3 - Listar Personagens
`);

    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      case "1":
        return setCharacter();
      case "2":
        return getCharacter();
      case "3":
        await allChacteres();
        break;
      default:
        console.clear();
        console.log(`
        ### Escolha uma opção válida ###
        `);
        break;
    }
  }
};

const setAspiration = async () => {
  while (true) {
    console.log(`
Qual a sua aspiração? 

1 - Gastronomia
2 - Pintura
3 - Jogos
4 - Jardinagem
5 - Música
`);

    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      case "1":
        console.clear();
        return "GASTRONOMIA";
      case "2":
        console.clear();
        return "PINTURA";
      case "3":
        console.clear();
        return "JOGOS";
      case "4":
        console.clear();
        return "JARDINAGEM";
      case "5":
        console.clear();
        return "MUSICA";
      default:
        console.clear();
        console.log(`
### Escolha uma opção válida ###
        `);
        break;
    }
  }
};

const setCharacter = async () => {
  const localStorage = useLocalStorage();
  const storage = localStorage.getObject("inGameCharacters") || [];

  const id = storage.length
  const name = await useQuestion(`Qual o seu nome? `);
  const aspiration = await setAspiration();
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

  localStorage.setObject("inGameCharacters", [...storage, character]);

  return character
};

const getCharacter = async () => {
  const storage = useLocalStorage().getObject("inGameCharacters") || [];
  while (true) {
    const input = await useQuestion("Escolha o id do personagem: ");
    const character = storage.find(charac => charac.id == input)
    if (character) {
      return character
    }
    console.log("Escolha um id valido")
  }
}

const allChacteres = async () => {
  const localStorage = useLocalStorage();
  const storage = localStorage.getObject("inGameCharacters");

  for (const obj of storage) {
    console.table(obj)
  }

  const input = await useQuestion();

}