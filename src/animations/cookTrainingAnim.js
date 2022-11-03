import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";

export const cookTrainingAnim = async (character, display) => {
  const f = ["₊", "｡"];
  const s = ["˙", "⋆", "ﾟ", "˖"];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  if (display == true) {
    for (let i = 0; i < 5; i++) {
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
  }
};
