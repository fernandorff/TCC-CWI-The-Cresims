export const toSleep = async (actingCharacter) => {
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
