import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "../allMenus/characterInfoDisplay.js";
import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";

//
// calcula o tempo necessário para preencher energia completamente segundo as regras de negocio
//

const clouds = async (cloudId) => {
  switch (cloudId) {
    case 1:
      return `˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡`;

    case 2:
      return `⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚`;

    case 3:
      return `｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆`;

    case 4:
      return `｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆`;

    case 5:
      return `｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ`;

    case 6:
      return `˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧`;

    case 7:
      return `ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ`;
  }
};

const zZz = async (zZzId) => {
  switch (zZzId) {
    case 1:
      return `z  `;
    case 2:
      return `zZ `;
    case 3:
      return `zZz`;
    case 4:
      return `!!!`;
  }
};

const calculateNecessaryTimeForFullEnergy = async (character) => {
  let timeForFullEnergy = 0;
  let energyForFull = 32 - character.energy;
  let bonus = 0;

  while (energyForFull > 0) {
    timeForFullEnergy += 5000;
    energyForFull -= 4;
    energyForFull -= bonus;
    bonus += 2;
  }

  return timeForFullEnergy;
};

//
// Executa ação de dormir
//

export const sleepAction = async (character, sleepTime, animation) => {
  let cloudId = 1;
  let zZzId = 1;
  for (let i = 0; i < sleepTime; ++i) {
    character.time -= 1000;
    if (animation) {
      let waitingDots = ".";
      for (let j = 0; j < i % 3; ++j) {
        waitingDots += ".";
      }
      if (cloudId > 6) {
        cloudId = 1;
      }
      if (zZzId > 3) {
        zZzId = 1;
      }
      console.clear();
      console.log(`
${await theCresimsLogo()}

${await clouds(cloudId)}
         .           .
      .  |,,,_______/|
  ${await zZz(zZzId)} | (u_u)/    .//| ${await zZz(zZzId)}
      |/___/______|//! 
      |___________|/
      !           !

        ${i} / ${sleepTime}

${character.name} está dormindo${waitingDots}
            

`);

      cloudId += 1;
      zZzId += 1;
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  if (animation) {
    console.clear();
    zZzId = 4;
    cloudId = 7;
    console.log(`
${await theCresimsLogo()}

${await clouds(cloudId)}
         .           .
      .  |,,,_______/|
  ${await zZz(zZzId)} | (O_O)/    .//| WAKE ME UP
      |/___/______|//! 
      |___________|/
      !           !

        ${sleepTime} / ${sleepTime}

${character.name} terminou de dormir!
`);
    await useQuestion(`Pressione ENTER para continuar...`);
  }
  let bonus = 0;
  for (let i = 0; i < sleepTime / 5; i++) {
    character.energy += 4;
    character.energy += bonus;
    bonus += 2;
  }
};

//
// Exibe o menu de opções de dormir
//

export const sleepMenu = async (character) => {
  console.clear();
  let sleepTime = 0;
  let warningMessage = ``;

  while (true) {
    console.clear();
    let input = await useQuestion(`
${await theCresimsLogo()}

${await characterInfoDisplay(character)}

Quanto tempo você quer dormir?
${warningMessage}
1. 1 ciclo de sono  ( -5000⌛️  +4✨ )
2. 2 ciclos de sono ( -10000⌛️  +10✨ )
3. 3 ciclos de sono ( -15000⌛️  +18✨ )
4. 4 ciclos de sono ( -20000⌛️  +28✨ )
5. Até recuperar toda a energia ( -${await calculateNecessaryTimeForFullEnergy(
      character
    )}⌛️  +100%✨ )

X. Voltar ao menu de ações

Sua escolha:`);
    input = input.toUpperCase();

    switch (input) {
      case "5":
        await sleepAction(
          character,
          (await calculateNecessaryTimeForFullEnergy(character)) / 1000,
          true
        );

        return character;

      case "1":
        sleepTime = 5;
        await sleepAction(character, sleepTime, true);

        return character;

      case "2":
        sleepTime = 10;
        await sleepAction(character, sleepTime, true);

        return character;

      case "3":
        sleepTime = 15;
        await sleepAction(character, sleepTime, true);

        return character;

      case "4":
        sleepTime = 20;
        await sleepAction(character, sleepTime, true);

        return character;

      case "X":
        return character;

      default:
        console.clear();
        warningMessage = `
- Opção ${input} escolhida
### Escolha uma opção válida ###
`;
        break;
    }
  }
};
