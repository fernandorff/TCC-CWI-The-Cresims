import { toSleep } from "../characterActions/toSleep.js";
import { useQuestion } from "../services/question/use-question.js";

export const characterActionMenu = async (character) => {
  const actingCharacter = character;
  while (true) {
    console.log(`
- ${actingCharacter.name} -
 ,,,   ⏱   Tempo de jogo: ${actingCharacter.time}
(_oo   ✨  Energia: ${actingCharacter.energy}
<|>    🛁  Higiene: ${actingCharacter.hygiene}
 |     💵  Cresceleons: ${actingCharacter.cresceleons}
 LL    🎮  Pontos de ${actingCharacter.aspiration}: ${actingCharacter.skill}

Escolha uma ação para o(a) ${actingCharacter.name}:
1. 🚧 Trabalhar (Tempo gasto: 20000ms)
2. 🚧 Treinar habilidade (${actingCharacter.aspiration} - Tempo gasto: 8000ms)
3. ⚙️  Dormir (Tempo gasto: até recuperar toda a energia, recupera)
4. 🚧 Tomar banho (Tempo gasto: Não definido na documentação) 
5. 🚧 Comprar item
6. 🚧 Interagir com outro persongaem (Tempo: 2000ms | Disponíveis: a definir)
7. 🚧 Esperar personagem (Espera outro personagem ficar livre)
8. 🚧 Cheats
`);
    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      // Trabalhar
      case "1":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // Treinar habilidade
      case "2":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // Dormir
      case "3":
        console.clear();
        toSleep(actingCharacter);
        break;

      // Tomar banho
      case "4":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // Comprar item
      case "5":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // Interagir com outro personagem
      case "6":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // Esperar personagem
      case "7":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      case "8":
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;

      // OPÇÃO INVALIDA
      default:
        console.clear();
        console.log(`
        ### Escolha uma opção válida ###
        `);
        break;
    }
  }
};
