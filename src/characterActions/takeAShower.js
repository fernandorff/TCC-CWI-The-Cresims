import { characterActionMenu } from "../allMenus/characterActionMenu.js";
import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";
import { useQuestion } from "../services/question/use-question.js";

export const takeAShower = async (actingCharacter, showerTime) => {
  for (let i = 0; i < showerTime; ++i) {
    let waitingDots = ".";
    for (let j = 0; j < i % 3; ++j) {
      waitingDots += ".";
    }
    console.clear();
    console.log(`
${await theCresimsLogo()}

${actingCharacter.name} está tomando banho${waitingDots}
            
${i} / ${showerTime}
`);
    actingCharacter.time -= 1000;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  console.clear();
  console.log(`
${await theCresimsLogo()}
        
${actingCharacter.name} terminou de tomar banho!
    
${showerTime} / ${showerTime}
`);
  let pressEnter = await useQuestion(`Pressione ENTER para continuar...`);

  await characterActionMenu(actingCharacter);
};
