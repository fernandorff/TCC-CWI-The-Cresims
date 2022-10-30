export const setTimeLife = (character, timeDecrement) => {
    return character.time - timeDecrement
}

export const setEnergy = (character, energyDecrement) => {
    return character.energy - energyDecrement
}