import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";
import { useQuestion } from "../services/question/use-question.js";

export const paintTrainingAnim = async (character, display) => {
  const p = [" ̵͈͆͗ ̵̮͙̆̈́ ", " ̸͖̱̈́ ̴̞̬͂͑ ", " ̸͚̰̿̌ ̷̛̘͈̆ ", " ̷̰͐ ̶̲̉́ ", " ̷̦̰̌̈ ̴̥̈ "];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  if (display == true) {
    let count = 1;
    let reticencias = ".";
    for (let i = 0; i < 5; i++) {
      console.clear();
      console.log(`  
${await theCresimsLogo()}
      

             |¯¯¯¯| |¯¯¯¯|         
  ,,,,  |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
 (⚆_⚆=~${rnd(p)}|  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|┘  ${rnd(p)}|   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '   

${count} / 10    

${character.name} está praticando uns garranchos${reticencias}
`);
      count += 1;
      reticencias += ".";
      if (reticencias == "....") {
        reticencias = ".";
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.clear();
      console.log(` 
${await theCresimsLogo()}
      

             |¯¯¯¯| |¯¯¯¯|         
  ,,,,  |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
 (⚆_⚆  ${rnd(p)}|  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|─=~${rnd(p)}|   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '  

${count} / 10  

${character.name} está praticando uns garranchos${reticencias}

`);
      count += 1;
      reticencias += ".";
      if (reticencias == "....") {
        reticencias = ".";
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.clear();
  await useQuestion(` 
${await theCresimsLogo()}
  

             |¯¯¯¯| |¯¯¯¯|         
   ,,,, |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
  (⚆_⚆ ${rnd(p)}|  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|v=~${rnd(p)}|   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '  

10 / 10  

${character.name} olha muito tempo para a pintura... 
            ...e a pintura olha de volta para o ${character.name}...


Pressione ENTER para continuar...
`);
};
