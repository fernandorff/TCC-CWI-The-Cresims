import { characterInfoDisplay } from "../allMenus/characterInfoDisplay.js";
import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";


export const animationMenuWork = async (character) => {
    console.log(`${await theCresimsLogo()}`)
    console.log(`${await characterInfoDisplay(character)}\n`);
    console.log(`O personagem ${character.name} não possui um emprego, escolha um:`);
}

export const animationBuyItens = async () => {
    console.log(`${await theCresimsLogo()}`);
    console.log(`
     ___________________________________________________________
    | : : : : : : : : : : : : : : : : : : : : : : : : : : : : : |
    |: : : : : : : : :_________________________: : : : : : : : :|
    | : : : : : : : _)  :                   :  (_ : : : : : : : |
    |: : : : : : : )_ :   $ Lojas CWIanas $   : _( : : : : : : :|
    | : : :__________)_________________________(__________  : : |
    | /_/  '---------------------------------------------'  /_/ |
    |: | : |Música * Games * Jardinagem * Cozinha * Artes| : | :|
    | : : :|   ______    _    _________         ______   |: : : |
    |======| .' ,|,  '. /_/ .'         '. /_/ .'  ,|, '. |======|
    |      | |_';;;'__|  |  |   ,,,,    |  |  |__';;;'_| |      |
    |      | |_|-;-|__|     |  (⚆_⚆     |     |__|-;-|_| |      |
    |      | |________|     |   /|-$    |     |________| |      |
    |      |                |    LL     |                |      |
    l______|________________|           |________________|______|
    `);
}

export const animationTimeCount = async (time, text) => {
    let count = 0;

    while (count <= time / 1000) {
      console.clear();

      console.log(`${text} --> ${count} | ${time / 1000}`);
  
      count = timeCount(count);
    }
  };
  
  const timeCount = (count) => {
    for (let index = 0; index < 1000000000; index++) { }
  
    return ++count;
  };