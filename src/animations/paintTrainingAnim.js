export const paintTrainingAnim = async (character, display) => {
  const p = [" ̵͈͆͗ ̵̮͙̆̈́ ", " ̸͖̱̈́ ̴̞̬͂͑ ", " ̸͚̰̿̌ ̷̛̘͈̆ ", " ̷̰͐ ̶̲̉́ ", " ̷̦̰̌̈ ̴̥̈ "];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  if (display == true) {
    for (let i = 0; i < 5; i++) {
      console.clear();
      console.log(`        
             |¯¯¯¯| |¯¯¯¯|         
  ,,,,  |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
 (⚆_⚆=~${rnd(p)}|  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|┘  ${rnd(p)}|   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '     
`);
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.clear();
      console.log(`        
             |¯¯¯¯| |¯¯¯¯|         
  ,,,,  |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
 (⚆_⚆  ${rnd(p)}|  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|─=~${rnd(p)}|   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '     
`);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
};
