import { toSleep } from "../characterActions/toSleep.js";
import { useQuestion } from "../services/question/use-question.js";

export async function characterActionMenu(character) {
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
`);
    const input = await useQuestion("Sua escolha: ");

    switch (input) {
      case "1": // Trabalhar
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);

        break;
      case "2": // Treinar habilidade
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;
      case "3": // Dormir
        console.clear();
        toSleep(actingCharacter);
        break;
      case "4": // Tomar banho
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;
      case "5": // Comprar item
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;
      case "6": // Interagir com outro personagem
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;
      case "7": // Esperar personagem
        console.clear();
        console.log(`
        - Opção ${input} escolhida
        !!! Essa opção se encontra em implementação !!!
        `);
        break;
      default:
        console.clear();
        console.log(`
        ### Escolha uma opção válida ###
        `);
        break;
    }
  }
}
