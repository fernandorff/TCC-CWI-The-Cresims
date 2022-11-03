import { interactionsDataApi } from "../services/api/api.js"
import { setTimeLife, setEnergy } from "./common.js"

export const interaction = (character, characterSecondary, interaction) => {    
    const energy = interaction.energia;
    const points = interaction.pontos;
    const time = energy * 2000;

    const newEnergy = setEnergy(character, energy);
    const newEnergySec = setEnergy(character, (energy / 2));

    if (newEnergy <= 0 || newEnergySec <= 0) return [character, characterSecondary]

    const newCharacter = {
        ...character,
        time: setTimeLife(character, time),
        energy: newEnergy,
        relationship: remapRelations(character, characterSecondary.id, points)
    }

    const newCharacterSecond = {
        ...characterSecondary,
        time: setTimeLife(characterSecondary, time),
        energy: newEnergySec,
        relationship: remapRelations(characterSecondary, character.id, points)
    }

    return [ newCharacter, newCharacterSecond ]
}

export const listInteraction = async (level) => {
    const list = await interactionsDataApi();

    switch (level) {
        case "INIMIZADE":
            return [...list.INIMIZADE, ...list.NEUTRO];
        case "NEUTRO":
            return [...list.NEUTRO];
        case "AMIZADE":
            return [...list.AMIZADE, ...list.NEUTRO]
        default:
            return [...list.AMOR, ...list.AMIZADE, ...list.NEUTRO]
    }
}

export const getLevelInteraction = (points) => {
    if (points < 0) return "INIMIZADE";
    else if (points < 10) return "NEUTRO";
    else if (points < 25) return "AMIZADE";
    return "AMOR";
}

const remapRelations = (character, idCharSecond, points) => { 
    const list = character.relationship;
    return list.map(relation => {
        if (relation.id == idCharSecond) {
            const level = relation.level + points
            return { ...relation, level }
        }
        return { ...relation }
    })
}