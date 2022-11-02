import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";
import { useQuestion } from "../services/question/use-question.js";

function a(x) {
  switch (x) {
    case 1:
      return `、`;
    case 2:
      return `ヽ`;
    case 3:
      return `｀`;
  }
}

function r() {
  return Math.ceil(Math.random() * 3);
}

export const takeAShower = async (actingCharacter, showerTime) => {
  for (let i = 0; i < showerTime; ++i) {
    let waitingDots = ".";
    for (let j = 0; j < i % 3; ++j) {
      waitingDots += ".";
    }
    console.clear();
    console.log(`
${await theCresimsLogo()}

    _ꓕ_
   ${a(r())}${a(r())}${a(r())} 
 ${a(r())}${a(r())}${a(r())}${a(r())}        _
${a(r())}<(u_u)>${a(r())}   ___| |
${a(r())}${a(r())} | ${a(r())}${a(r())}  (    .'
${a(r())}${a(r())} LL ${a(r())}${a(r())}  )  (    

${actingCharacter.name} está tomando banho${waitingDots}


            
${i} / ${showerTime}
`);
    actingCharacter.time -= 1000;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  console.clear();
  console.log(`
${await theCresimsLogo()}

    _ꓕ_

    ,,,,          _
  <(O_O)>     ___| |
     |       (    .'
.....LL.....  )  (     
        
${actingCharacter.name} terminou de tomar banho!
    
${showerTime} / ${showerTime}
`);
  await useQuestion(`Pressione ENTER para continuar...`);

  return actingCharacter;
};
