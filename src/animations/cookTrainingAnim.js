import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";

export const cookTrainingAnim = async (character, display) => {
  const f = ["₊", "｡"];
  const s = ["˙", "⋆", "ﾟ", "˖"];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  while (display == true) {
    console.clear();
    console.log(`
${await theCresimsLogo()}

   ,,,,          /¯¯¯ 
  (⚆_⚆    ${rnd(s)}${rnd(s)}${rnd(s)}${rnd(s)}  /  /¯  
   <|─/ _(${rnd(f)}${rnd(f)}${rnd(f)}${rnd(f)})_|  |.
    LL /------------|
  |'¯'||##|         |
  |   ||--'         |
  |   |'¯#¯#¯¯¯¯#¯#¯'

${character} esta fazendo uma sopa pra nois...
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();
    console.log(`
${await theCresimsLogo()}

   ,,,,          /¯¯¯
  (⚆_⚆    ${rnd(s)}${rnd(s)}${rnd(s)}${rnd(s)}  /  /¯  
   <|──/_(${rnd(f)}${rnd(f)}${rnd(f)}${rnd(f)})_|  |.
    LL /------------|
  |'¯'||##|         |
  |   ||--'         |
  |   |'¯#¯#¯¯¯¯#¯#¯'

${character} esta fazendo uma sopa pra nois...
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};

cookTrainingAnim("Fernando", true);
