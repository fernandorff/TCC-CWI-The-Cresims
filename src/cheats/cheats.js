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
            let newEnergy = character.energy + 5;
            if (32 <= newEnergy) { newEnergy = 32 } 
            return {
                ...character,
                energy: newEnergy
            }
        case "JUNIM":
            console.clear()
            const ability = await menuAbilitys("Escolha uma das habilidades para aplicar o cheat:");
            const verify = character.ability.find(obj => obj.name == ability)

            if (!verify) {
                return character;
            }
            
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