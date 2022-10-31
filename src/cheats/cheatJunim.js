export default cheatJunim = (character, ability) => {
    const code = ability.toUpperCase();
    const listAbility = character.ability;
    
    listAbility.map(obj => {
        if (obj.name == code) {
            obj.skill += 5
        }
    });

    return {
        ...character,
        ability: listAbility
    }
}