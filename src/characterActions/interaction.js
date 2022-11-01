import { interactionsDataApi } from "../services/api/api.js"

export const interaction = async (character, characterSecondary, interaction) => {
    console.log(`A interação "${interaction.interacao}" foi realizada com sucesso`)
    
    const energy = interaction.energia
    const time = energy * 2000

    character.energy -= energy
    characterSecondary.energy -= (energy / 2)

    character.time -= time
    characterSecondary.time -= time

    character.relationship.forEach(char => {
        if (char.id == characterSecondary.id) {
            char.level += interaction.pontos
        }
    })

    characterSecondary.relationship.forEach(char => {
        if (char.id == characterSecondary.id) {
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