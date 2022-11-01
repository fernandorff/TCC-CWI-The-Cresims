import { getStorage } from "../crud/storage.js"
import { interactionsDataApi } from "../services/api/api.js"

export const interaction = async (character, idCharacter, interaction) => {
    const list = await getStorage()
    const characterSecondary = list.find(char => char.id == idCharacter)
    console.log(`A interação "${interaction.interacao}" foi realada com sucesso`)
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