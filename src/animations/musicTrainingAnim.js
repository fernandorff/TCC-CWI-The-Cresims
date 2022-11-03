export const musicTrainingAnim = async (character, display) => {
  const n = [
    "♪",
    "♩",
    "♫",
    "♬",
    "𝅗𝅥",
    "♮",
    "♭",
    "୭",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  if (display == true) {
    for (let i = 0; i < 5; i++) {
      console.clear();
      console.log(`
      ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    _____________________
   /  o   ooo ooo ooo   /|
  /  _____,,,,______   / /
 /  / // (⚆_⚆  // //  / /
/__////// ~|─ /////__/ /
|  |       LL     |  |/

`);
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.clear();
      console.log(`
    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}   ${rnd(n)}
    _____________________
   /  o   ooo ooo ooo   /|
  /  _____,,,,______   / /
 /  / // (⚆_⚆  // //  / /
/__////// ─|~ /////__/ /
|  |       LL     |  |/

`);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
};
