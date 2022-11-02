export const setTimeLife = (character, timeDecrement) => {
    return (character.time - timeDecrement) < 0 ? 0 : character.time - timeDecrement
}

export const setEnergy = (character, energyDecrement) => {
    return (character.energy - energyDecrement) < 0 ? 2 : character.energy - energyDecrement
}

export const setHygiene = (character, hygieneDecrement) => {
    return (character.hygiene - hygieneDecrement) < 0 ? 0  : character.hygiene - hygieneDecrement
}
