import { getCharacter } from "../crud/character.js"
import { useQuestion } from "../services/question/use-question.js";
import { updateStorage } from "../crud/storage.js";
import { 
    getLevelInteraction,
    listInteraction,
    interaction
} from "../characterActions/interaction.js";

export const menuInteraction = async (character) => {
    while (true) {
        console.clear();
        console.log(`Para interagir com algum personagem é nescessario 
            informar-lo primeiro`)
        const characterInteraction = await getCharacter();

        if (characterInteraction.id != character.id) {
            const newCharacter = createRelation(character, characterInteraction)
            const characterSecond = createRelation(characterInteraction, character)

            return await selectInteraction(newCharacter, characterSecond);
        } else {
            console.log("Informe um id de personagem diferente do seu")
        }
    }
}

const selectInteraction = async (character, characterSecond) => {
    while (true) {
        console.log(`Escolha uma das opções de interação abaixo:`)

        const points = pointsInteraction(character, characterSecond.id);
        const level = getLevelInteraction(points);
        const list = await listInteraction(level);

        while (true) {
            showInteractions(list)
            const input = await useQuestion(`Id da interação escolhida: `)

            if (Number(input)) {
                const [ newCharacter, newCharacterSecond ] = await interaction(
                    character, characterSecond, list[input - 1]
                )
                await updateStorage([newCharacterSecond])
                return newCharacter;
            }
        }
    }
}

const createRelation = (character, characterSecondary) => {
    const relation = getRelation(character, characterSecondary.id)

    if (!relation) {
        character.relationship.push({
            id: characterSecondary.id,
            name: characterSecondary.name,
            level: 0
        })
    }

    return character
}

const getRelation = (character, idCharacter) => {
    const listRelation = character.relationship;
    return listRelation.find((charac) => 
        charac.id == idCharacter
    );
}

const pointsInteraction = (character, idCharacter) => {
    const relation = getRelation(character, idCharacter)
    return relation.level
}

const showInteractions = (list) => {
    let cont = 1;
    for (const interaction of list) {
        console.table({
            ...interaction,
            id: cont
        })
        cont++;
    }
}