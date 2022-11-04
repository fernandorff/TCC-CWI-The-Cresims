import { useQuestion } from "../../services/question/use-question.js";
import { theCresimsLogo } from "../../userInterface/menus/theCresimsLogo.js";

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

export const sleepAnim = async (character, sleepTime, animation) => {
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
}