import { theCresimsLogo } from "../menus/theCresimsLogo.js";

export const gameTrainingAnim = async (character, display) => {
  const r = [
    " ̵͕̉ ̴̰̄ ̸̟̾ ̷̥̐ ̴̞̀  | |=.| ",
    " ̴̡͊ ̴̗̽ ̷̹̐ ̵̞͆ ̷͉̀  | |=.| ",
    " ̸̜̋ ̵͉̂ ̵̭͊ ̷̛̞ ̴̛̱  | |=.| ",
    " ̸͈̇ ̵̨̌ ̷̭̿ ̶̫̉ ̸́ͅ  | |=.| ",
    " ̵̫̈́ ̸̨̕ ̸̼̐ ̷͉̆ ̷͓̅  | |=.| ",
    " ̵͖̍ ̶͇̽ ̵͉̅ ̴͉̒   | |=.| ",
    " ̴̱̓ ̸̘̫̈̕ ̷̘̀ ̴͈̽ ̷̙̠͛  | |=.| ",
    " ̷̱̝̏͝ ̴̣́ ̴͔͊ ̵͍̅̿ ̵̹̓  | |=.| ",
  ];
  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  let count = 1;
  let reticencias = ".";
  if (display == true) {
    for (let i = 0; i < 5; i++) {
      console.clear();

      console.log(`
${await theCresimsLogo()}  
                     
            _______  .--.
           |.-----.| |=.| 
   ,,,,    |${rnd(r)}
  (⚆_⚆     |'-----'|~|  | 
   <|─()~~~'¯)___(¯' |__|
¯¯[::::]¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

${count} / 10

${character.name} esta jogando um dotinha${reticencias}
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
                     
            _______  .--.
           |.-----.| |=.| 
   ,,,,    |${rnd(r)}
  (⚆_⚆     |'-----'|~|  | 
   <|──()~~'¯)___(¯' |__|
¯¯[::::]¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

${count} / 10

${character.name} esta jogando um dotinha${reticencias}
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
  console.log(`
${await theCresimsLogo()}  
                       
            _______  .--.
           |.-----.| |=.| 
   ,,,,    |${rnd(r)}
 <(⚆_⚆>    |'-----'|~|  | 
    |   ()~'¯)___(¯' |__|
¯¯[::::]¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  
10 / 10
  
${character.name} perdeu de novo! (-25 mmr)


Aperte ENTER para continuar... 
  `);
};
