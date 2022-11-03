import { theCresimsLogo } from "../menus/theCresimsLogo.js";

export const cookTrainingAnim = async (character, display) => {
  const f = ["₊", "｡"];
  const s = ["˙", "⋆", "ﾟ", "˖"];

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


   ,,,,          /¯¯¯ 
  (⚆_⚆    ${rnd(s)}${rnd(s)}${rnd(s)}${rnd(s)}  /  /¯  
   <|─/ _(${rnd(f)}${rnd(f)}${rnd(f)}${rnd(f)})_|  |.
    LL /------------|
  |'¯'||##|         |
  |   ||--'         |
  |   |'¯#¯#¯¯¯¯#¯#¯'

${count} / 10

${character.name} esta fazendo uma sopa pra nois${reticencias}
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


   ,,,,          /¯¯¯
  (⚆_⚆    ${rnd(s)}${rnd(s)}${rnd(s)}${rnd(s)}  /  /¯  
   <|──/_(${rnd(f)}${rnd(f)}${rnd(f)}${rnd(f)})_|  |.
    LL /------------|
  |'¯'||##|         |
  |   ||--'         |
  |   |'¯#¯#¯¯¯¯#¯#¯'

${count} / 10

${character.name} esta fazendo uma sopa pra nois${reticencias}
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

  
   ,,,,          /¯¯¯
  (⚆_⚆    ${rnd(s)}${rnd(s)}${rnd(s)}${rnd(s)}  /  /¯  
   <|─┘ _(${rnd(f)}${rnd(f)}${rnd(f)}${rnd(f)})_|  |.
    LL /------------|
  |'¯'||##|         |
  |   ||--'         |
  |   |'¯#¯#¯¯¯¯#¯#¯'
  
10 / 10
  
Ihh ${character.name}... Faltou tompero...


Pressione ENTER para continuar...
  `);
};
