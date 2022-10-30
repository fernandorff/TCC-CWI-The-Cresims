import { useQuestion } from "./src/services/question/use-question.js";
import { useLocalStorage } from "./src/services/local-storage/use-local-storage.js";

const setAspiration = async () => {
  while (true) {
    console.log("Qual a sua aspiração? ");

    console.log("1 - Gastronomia");
    console.log("2 - Pintura");
    console.log("3 - Jogos");
    console.log("4 - Jardinagem");
    console.log("5 - Música");

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
        console.log("Escolha uma das opções dadas acima");
    }
  }
};

const setCharacter = async () => {
  const name = await useQuestion("Qual o seu nome? ");
  const aspiration = await setAspiration();
  const cresceleons = 1500;
  const time = 3600000;
  const hygiene = 28;
  const energy = 32;
  const relationship = [];
  const skill = 0;
  const items = [];

  return {
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

const gameStartMenu = async () => {
  while (true) {
    console.log("Escolha uma das opções: ");
    console.log("1 - Criar Personagem");
    console.log("2 - Configurações");

    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      case "1":
        return setCharacter();
      default:
        console.log("Escolha uma das opções dadas acima");
    }
  }
};

//                                 actingCharacter = personagem que está agindo nesse menu
const inGameMenuCharacter = async (actingCharacter) => {
  while (true) {
    console.log(`
       - ${actingCharacter.name} -
 ,,,   Tempo de jogo: ${actingCharacter.time}
(_oo   Energia: ${actingCharacter.energy}
/|\    Higiene: ${actingCharacter.hygiene}
 |     Cresceleons: ${actingCharacter.cresceleons}
 LL    Pontos de ${actingCharacter.aspiration}: ${skill}

Escolha uma ação para o(a) ${actingCharacter.name}:
1. Trabalhar (Tempo gasto: 20000ms)
2. Treinar habilidade (${personagem.aspiration} - Tempo gasto: 8000ms)
3. Dormir (Tempo gasto: até recuperar toda a energia, recupera)
4. Tomar banho (Tempo gasto: Não definido na documentação) 
5. Comprar item
6. Interagir com outro persongaem (Tempo: 2000ms | Disponíveis: a definir)
7. Esperar personagem (Espera outro personagem ficar livre)`);
    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      case "1":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "2":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "3":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "4":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "5":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "6":
        console.log("!!! Essa opção se encontra em implementação !!!");
      case "7":
        console.log("!!! Essa opção se encontra em implementação !!!");
      default:
        console.log("Escolha uma das opções dadas acima");
    }
  }
};

const main = async () => {
  const localStorage = useLocalStorage();

  const obj = await gameStartMenu();

  const storage = localStorage.getObject("nome-array") || [];
  localStorage.setObject("inGameCharacters", [...storage, obj]);

  console.log(localStorage.getObject("inGameCharacters"));
};

main();
