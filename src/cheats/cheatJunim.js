export const cheatJunim = (character, ability) => {
    const listAbility = character.ability;
    
    listAbility.map(obj => {
        if (obj.name == ability) {
            obj.skill += 5
        }
    });

    return {
        ...character,
        ability: listAbility
    }
}