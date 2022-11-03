import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";
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
  while (display == true) {
    console.clear();

    console.log(`
${await theCresimsLogo()}  
                     
            _______  .--.
           |.-----.| |=.| 
   ,,,,    |${rnd(r)}
  (⚆_⚆     |'-----'|~|  | 
   <|─()~~~'¯)___(¯' |__|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

${character} esta jogando um dotinha.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}  
                     
            _______  .--.
           |.-----.| |=.| 
   ,,,,    |${rnd(r)}
  (⚆_⚆     |'-----'|~|  | 
   <|──()~~'¯)___(¯' |__|
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

${character} esta jogando um dotinha.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

playAnim("Fernando", true);
