export const toSleep = async (character) => {
  const actingCharacter = character;
  let sleepTime = 0;

  if (actingCharacter.energy >= 32) {
    actingCharacter.energy = 32;
    console.clear;
    console.log(`
### The Cresims ###

- ${actingCharacter.name} -
 ,,,   ⏱   Tempo de jogo: ${actingCharacter.time}
(_oo   ✨  Energia: ${actingCharacter.energy}/32
<|>    🛁  Higiene: ${actingCharacter.hygiene}/28
 |     💵  Cresceleons: ${actingCharacter.cresceleons}
 LL    🎮  Pontos de ${actingCharacter.aspiration}: ${actingCharacter.skill}
    

${actingCharacter} está cheio de energia!
    

Pressione ENTER para voltar ao menu inicial...
    `);
  } else {
    console.clear();
    const input = await useQuestion(`
### The Cresims ###

- ${actingCharacter.name} -
 ,,,   ⏱   Tempo de jogo: ${actingCharacter.time}
(_oo   ✨  Energia: ${actingCharacter.energy}/32
<|>    🛁  Higiene: ${actingCharacter.hygiene}/28
 |     💵  Cresceleons: ${actingCharacter.cresceleons}
 LL    🎮  Pontos de ${actingCharacter.aspiration}: ${actingCharacter.skill}


Quanto tempo você quer dormir?

1. Até recuperar toda a energia9 (x ms)
2. 1 ciclo de sono (5000 ms) +4 energia
3. 2 ciclos de sono (10000 ms) +10 energia
4. 3 ciclos de sono (15000 ms) +18 energia
5. 4 ciclos de sono (20000 ms) +28 energia

X. Voltar ao menu de ações
`).toUpperCase();

    switch (input) {
      case 1:
        sleepTime = 0;
        break;

      case 2:
        sleepTime = 5;
        break;

      case 3:
        sleepTime = 10;
        break;

      case 4:
        sleepTime = 15;
        break;

      case 5:
        sleepTime = 20;
        break;

      case "X":
        break;

      default:
        break;
    }
  }

  async function calculateNecessaryTimeForFullEnergy(actingCharacter) {
    let timeForFullEnergy = 0;
    const energyForFull = 32 - actingCharacter.energy;
    let bonusSleep = 0;

    if (energyForFull <= 0) {
      return timeForFullEnergy;
    } else {
      while (energyForFull >= 0) {
        timeForFullEnergy += 5000;
        energyForFull -= 4;
        energyForFull -= bonusSleep;

        bonusSleep += 2;
      }
    }
    console.log("tempo para ficar com energia cheia ", timeForFullEnergy);
    return timeForFullEnergy;
  }

  async function sleepAction(actingCharacter, sleepTime) {
    for (let i = 0; i < sleepTime; ++i) {
      let reticencias = ".";
      for (let j = 0; j < i % 3; ++j) {
        reticencias += ".";
      }
      console.clear();
      console.log(`
### The Cresims ###

${actingCharacter.name} está dormindo${reticencias}
            
${i} / ${sleepTime}
            
`);
      actingCharacter.time -= 1000;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.clear();
    console.log(`
### The Cresims
        
${actingCharacter.name} terminou de dormir!
    
${sleepTime} / ${sleepTime}
    
`);
  }
};
