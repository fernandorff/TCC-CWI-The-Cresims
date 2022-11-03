export const setTimeLife = (character, timeDecrement) => {
    return (character.time - timeDecrement) < 0 ? character.time : character.time - timeDecrement
}

export const setEnergyTwo = (character, energyDecrement) => {
    return (character.energy - energyDecrement) < 2 ? character.energy : character.energy - energyDecrement
}

export const setHygiene = (character, hygieneDecrement) => {
    return (character.hygiene - hygieneDecrement) < 0 ? character.hygiene : character.hygiene - hygieneDecrement
}

export const clearCustomConsoleLog = () => {
    console.log('\x1Bc');
}

export const clearConsoleStandart = () => {
    console.clear()
}
