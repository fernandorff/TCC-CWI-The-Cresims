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
        allChacteres();
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
        return "GASTRONOMIA";
      case "2":
        return "PINTURA";
      case "3":
        return "JOGOS";
      case "4":
        return "JARDINAGEM";
      case "5":
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
  const storage = useLocalStorage().getObject("inGameCharacters") || [];

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

  return {
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
};

const getCharacter = async () => {
  const storage = useLocalStorage().getObject("inGameCharacters") || [];
  const input = await useQuestion("Escolha o id do personagem: ");
  const character = storage.find(charac => charac.id == input)
  return character
}

const allChacteres = () => {
  const localStorage = useLocalStorage();
  console.log(localStorage.getObject("inGameCharacters"));
}