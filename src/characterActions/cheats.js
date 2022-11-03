import { cheatsDataApi } from '../services/api/api.js';

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
            return {
                ...character,
                skill: character.skill + 5
            }
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