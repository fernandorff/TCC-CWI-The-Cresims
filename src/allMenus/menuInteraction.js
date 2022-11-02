import { getCharacter, updateCharacterBD } from "../crud/character.js"
import { useQuestion } from "../services/question/use-question.js";
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

        try {
            if (characterInteraction.id != character.id) {
                const newCharacter = createRelation(character, characterInteraction)
                const characterSecond = createRelation(characterInteraction, character)
    
                return await selectInteraction(newCharacter, characterSecond);
            } else {
                console.log("Informe um id de personagem diferente do seu")
            }
        } catch {
            console.log("Informe um id valido")
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
            const input = await useQuestion(`Seu level de relacionamento 
com "${characterSecond.name}" é "${level}" com ${points} pontos

Id da interação escolhida: `)

            try {
                const objInterection = list[input - 1];

                const [ newCharacter, newCharacterSecond ] = await interaction(
                    character, characterSecond, objInterection
                )

                if (newCharacter.energy < 0 || newCharacterSecond.energy < 0) {
                    console.clear()
                    console.log("Pontos de energia insuficiente para realizar a interação")
                    await useQuestion("Pressione enter para continuar")
                    return [character, false]
                }

                await updateCharacterBD([newCharacterSecond])

                console.clear()
                console.log(`Interação "${objInterection.interacao}" realizada com sucesso`)
                await useQuestion("Pressione enter para continuar")
                return [newCharacter, true];
            } catch {
                console.log("Adicione um id de interação possivel")
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
    console.clear()
    console.log("Escolha uma das Interações a seguir:\n")

    for (const e of list) {
        console.log(`${cont} - ${e.interacao} (pontos: ${e.pontos}, energia: ${e.energia})`)
        cont++;
    }

    console.log("")
}