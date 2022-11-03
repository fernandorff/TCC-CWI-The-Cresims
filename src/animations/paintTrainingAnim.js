console.log(`        
             |¯¯¯¯| |¯¯¯¯|         
  ,,,,  |¯|  | ̵͗̄̿̚͜ |¯¯¯¯|   |       
 (⚆_⚆  ̴̰̄ ̸̟̾ |  |__| ̴̠̀͋ ̶̧̢̻̹͇̝̙̉̏ ̵̮̭̗͛́̍͝ͅ |___|
  <|─=~ ̴̰̄ ̸̟̾ |   ' |____|  '       
   LL   |_|      '  '     
  '¯¯'  ' '     
`);

export const paintTrainingAnim = async (character, display) => {
  const p = [" ̵͈͆͗ ̵̮͙̆̈́ ", " ̸͖̱̈́ ̴̞̬͂͑ ", " ̸͚̰̿̌ ̷̛̘͈̆ ", " ̷̰͐ ̶̲̉́ ", " ̷̦̰̌̈ ̴̥̈ "];

  function rnd(randomImages) {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }
  while (display == true) {
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
};

paintTrainingAnim("Fernando", true);
