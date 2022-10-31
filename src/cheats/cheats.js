import { menuAbilitys } from '../allMenus/menuAbilitys.js';
import { cheatsDataApi } from '../services/api/api.js';
import { cheatJunim } from './cheatJunim.js';

export const executeCheat = async (character, input) => {
    const listCheats = await cheatsDataApi();
    const code = input.toUpperCase();
    const cheat = listCheats.find(cheat => cheat.codigo == code);

    if (!cheat) {
        console.log("Este não é um dos cheats disponiveis");
        return character;
    }

    switch (cheat.codigo) {
        case "SORTENAVIDA":
            const salary = character.employee.salary;
            return {
                ...character,
                employee: {
                    ...character.employee,
                    salary: salary + (salary * cheat.valor / 100)
                }
            }
        case "DEITADONAREDE":
            return {
                ...character,
                energy: character.energy + 5
            }
        case "JUNIM":
            const ability = menuAbilitys();
            return cheatJunim(character, ability);
        case "CAROLINAS":
            return {
                ...character,
                time: character.time + 100000
            }
        case "SINUSITE":
            return {
                ...character,
                time: 0
            }
    }
 
    return character;
}