export const toSleep = async (actingCharacter) => {
  if (actingCharacter.energy >= 32) {
    actingCharacter.energy = 32;
    console.clear;
    console.log(`
### The Cresims ###
    
${actingCharacter} está cheio de energia!
    


Pressione ENTER coisa para voltar ao menu inicial...
    `);
  } else {
    const input = await useQuestion(`
### The Cresims ###

${actingCharacter.name}

Quanto tempo você quer dormir?

1. Até recuperar toda a energia (x ms)
2. 1 ciclo de sono (5000 ms) +4 energia
3. 2 ciclos de sono (10000 ms) +10 energia
4. 3 ciclos de sono (15000 ms) +18 energia
5. 4 ciclos de sono (20000 ms) +28 energia
`);
  }
  let sleepTime = 10;
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
};
