import { cheatsDataApi } from '../services/api/api'

export default executeCheat = async (character, input) => {
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
            const porcentage = cheat.valor;
            character.employee.salary += (salary * porcentage / 100);
            console.log(character.salary)
            break;
        case "DEITADONAREDE":
            character.energy += 5;
            break;
        case "JUNIM":
            character.skill += 5;
            break;
        case "CAROLINAS":
            character.time += 100000;
            break; 
        case "SINUSITE":
            character.time = 0;
            break;
    }
 
    return character;
}