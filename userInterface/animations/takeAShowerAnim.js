import { clearBash } from "../../src/characterActions/common.js";
import { theCresimsLogo } from "../menus/theCresimsLogo.js";
import { useQuestion } from "../../services/question/use-question.js";

export const takeAshowerAnim = async (character, showerTime) => {
    for (let i = 0; i < showerTime; ++i) {
        let waitingDots = ".";
        for (let j = 0; j < i % 3; ++j) {
            waitingDots += ".";
        }

        character.time -= 1000;
        await printCresimShower(character, waitingDots, showerTime, i)
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    printCresim(character, showerTime)
}

const printCresimShower = async (character, waitingDots, showerTime, i) => {
    clearBash()
    console.log(`${await theCresimsLogo()}`)
    console.log(`
    _ꓕ_
   ${a(r())}${a(r())}${a(r())} 
 ${a(r())}${a(r())}${a(r())}${a(r())}        _
${a(r())}<(u_u)>${a(r())}   ___| |
${a(r())}${a(r())} | ${a(r())}${a(r())}  (    .'
${a(r())}${a(r())} LL ${a(r())}${a(r())}  )  (    
`);

    console.log(`${i} / ${showerTime}`);
    console.log(`${character.name} está tomando banho${waitingDots}`);
}

const printCresim = async (character, showerTime) => {
    clearBash()
    console.log(` ${await theCresimsLogo()}`)
    console.log(`
    _ꓕ_

    ,,,,          _
  <(O_O)>     ___| |
     |       (    .'
.....LL.....  )  (     
`);
    console.log(`${showerTime} / ${showerTime} `);
    console.log(`${character.name} terminou de tomar banho!`);
    await useQuestion(`Pressione ENTER para continuar...`);
}

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