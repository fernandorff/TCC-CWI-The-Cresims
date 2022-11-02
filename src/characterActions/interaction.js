import { interactionsDataApi } from "../services/api/api.js"

export const interaction = (character, characterSecondary, interaction) => {    
    const energy = interaction.energia
    const time = energy * 2000

    character.energy -= energy
    characterSecondary.energy -= (energy / 2)

    if (character.energy < 0 || characterSecondary.energy < 0) {
        character.energy += energy
        characterSecondary.energy += (energy / 2)
        return [character, characterSecondary]
    }

    character.time -= time
    characterSecondary.time -= time

    character.relationship.forEach(char => {
        if (char.id == characterSecondary.id) {
            char.level += interaction.pontos
        }
    })

    characterSecondary.relationship.forEach(char => {
        if (char.id == character.id) {
            char.level += interaction.pontos
        }
    })


    return [ character, characterSecondary ]
}

export const listInteraction = async (level) => {
    const list = await interactionsDataApi();

    switch (level) {
        case "INIMIZADE":
            return [...list.INIMIZADE, ...list.NEUTRO];
        case "NEUTRO":
            return [...list.NEUTRO];
        case "AMIZADE":
            return [...list.AMIZADE, list.NEUTRO]
        default:
            return [...list.AMOR, ...list.AMIZADE, list.NEUTRO]
    }
}

export const getLevelInteraction = (points) => {
    if (points < 0) {
        return "INIMIZADE";
    } else if (points < 10) {
        return "NEUTRO";
    } else if (points < 25) {
        return "AMIZADE";
    }
    return "AMOR";
}