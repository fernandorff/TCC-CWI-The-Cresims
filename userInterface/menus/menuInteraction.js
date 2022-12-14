import {
  getCharacter,
  updateCharacterBD,
} from "../../services/crud/character.js";
import { useQuestion } from "../../services/question/use-question.js";
import {
  getLevelInteraction,
  listInteraction,
  interaction,
} from "../../src/characterActions/interaction.js";
import { theCresimsLogo } from "./theCresimsLogo.js";
import { clearBash } from "../../src/characterActions/common.js";

const interactionAnimation = async (character1, character2, display) => {
  if (display == true) {
    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆    ̴̡̨̟̝̮̳̿̌̋  ⚆.⚆)  
     <|>       ─|> 
      LL       ⅃⅃ 
     ${character1.name}  

        1 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆    ̸̳̱̈́̍͒  ⚆_⚆)  
     <|>       v|> 
      LL       ⅃⅃ 
     ${character1.name}  

        2 / 10
`);

    await new Promise((resolve) => setTimeout(resolve, 500));
    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆    ̶̟̩́̚  ⚆.⚆)  
     <|>       ─|> 
      LL       ⅃⅃ 
     ${character1.name}  

        3 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆    ̸̛͎͍̈́̏͊̆̈̂͜  ⚆_⚆)  
     <|>       v|> 
      LL       ⅃⅃ 
     ${character1.name}  

        4 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆      ⚆_⚆)  
     <|>       <|> 
      LL       ⅃⅃ 
     ${character1.name}  

        5 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆.⚆  ̶͇̣̏͑    ⚆_⚆)  
     <|v       <|> 
      LL       ⅃⅃ 
     ${character1.name}  

        6 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆  ̴̛̮̖̘̿͐͜    ⚆_⚆)  
     <|─       <|> 
      LL       ⅃⅃ 
     ${character1.name}  

        7 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆.⚆  ̶̢̛̱̝̫̪̌̅͌͑̕    ⚆_⚆)  
     <|v       <|> 
      LL       ⅃⅃ 
     ${character1.name} 
     
        8 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆  ̸̝̗͈̀͜͝    ⚆_⚆)  
     <|─       <|> 
      LL       ⅃⅃ 
     ${character1.name}  

        9 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    clearBash();

    console.log(`
${await theCresimsLogo()}

              ${character2.name}
     ,,,,     ,,,,
    (⚆_⚆      ⚆_⚆)  
     <|>       <|> 
      LL       ⅃⅃ 
     ${character1.name}  

        10 / 10
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

export const menuInteraction = async (character) => {
  let menuInteractionDisplay = true;
  while ((menuInteractionDisplay = true)) {
    clearBash();
    console.log(`
${await theCresimsLogo()}

Para interagir com algum personagem é nescessario informar-lo primeiro`);
    const characterInteraction = await getCharacter(character);

    if (characterInteraction == character) {
      return [character, false];
    }

    try {
      if (characterInteraction.id != character.id) {
        const newCharacter = createRelation(character, characterInteraction);
        const characterSecond = createRelation(characterInteraction, character);

        return await selectInteraction(newCharacter, characterSecond);
      } else {
        console.log("Informe um id de personagem diferente do seu");
      }
    } catch {
      console.log("Informe um id valido");
    }
  }
};

const selectInteraction = async (character, characterSecond) => {
  let selectInteractionDisplay = true;
  while ((selectInteractionDisplay = true)) {
    console.log(`
${await theCresimsLogo()}
Escolha uma das opções de interação abaixo:`);

    const points = pointsInteraction(character, characterSecond.id);
    const level = getLevelInteraction(points);
    const list = await listInteraction(level);

    while (true) {
      await showInteractions(list);
      const input = await useQuestion(`
Seu level de relacionamento 
com "${characterSecond.name}" é "${level}" com ${points} pontos

Id da interação escolhida: `);

      try {
        const objInterection = list[input - 1];

        const [newCharacter, newCharacterSecond] = await interaction(
          character,
          characterSecond,
          objInterection
        );

        if (newCharacter.energy < 0 || newCharacterSecond.energy < 0) {
          clearBash();
          console.log(
            `
${await theCresimsLogo()}
Pontos de energia insuficiente para realizar a interação`
          );
          await useQuestion(`Pressione ENTER para continuar...`);
          return [character, false];
        }

        await updateCharacterBD([newCharacterSecond]);

        clearBash();
        await interactionAnimation(character, characterSecond, true);
        clearBash();
        console.log(
          `
${await theCresimsLogo()}

              ${characterSecond.name}
     ,,,,     ,,,,
    (⚆_⚆      ⚆_⚆)  
     <|>       <|> 
      LL       ⅃⅃ 
     ${character.name}  

Interação "${objInterection.interacao}" realizada com sucesso
`
        );
        await useQuestion(`Pressione ENTER para continuar...`);
        return [newCharacter, true];
      } catch {
        console.log("Adicione um id de interação possivel");
      }
    }
  }
};

const createRelation = (character, characterSecondary) => {
  const relation = getRelation(character, characterSecondary.id);

  if (!relation) {
    character.relationship.push({
      id: characterSecondary.id,
      name: characterSecondary.name,
      level: 0,
    });
  }

  return character;
};

const getRelation = (character, idCharacter) => {
  const listRelation = character.relationship;
  return listRelation.find((charac) => charac.id == idCharacter);
};

const pointsInteraction = (character, idCharacter) => {
  const relation = getRelation(character, idCharacter);
  return relation.level;
};

const showInteractions = async (list) => {
  let cont = 1;
  clearBash();
  console.log(`
${await theCresimsLogo()}

Escolha uma das Interações a seguir:
  `);

  for (const obj of list) {
    console.log(
      `${cont} - ${obj.interacao} (pontos: ${obj.pontos}, energia: ${obj.energia})`
    );
    cont++;
  }

  console.log("");
};
