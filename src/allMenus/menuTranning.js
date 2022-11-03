
import { animationTimeCount } from "../animations/animationTimeCount.js"
import { cookTrainingAnim } from "../animations/cookTrainingAnim.js"
import { gameTrainingAnim } from "../animations/gameTrainingAnim.js"
import { gardenTrainingAnim } from "../animations/gardenTrainingAnim.js"
import { musicTrainingAnim } from "../animations/musicTrainingAnim.js"
import { paintTrainingAnim } from "../animations/paintTrainingAnim.js"
import { cicleTrainCharacterProductPurchased } from "../characterActions/skillAspiration.js"
import { itensSkillDataApi } from "../services/api/api.js"
import { useQuestion } from "../services/question/use-question.js"

const TIME = 3000

export const menuTrainning = async (character) => {
    if (character.items.length === 0) {
        animationTimeCount(TIME, 'Você não possui nenhuma ferramenta para realizar o treinamento')
        return character
    }

    if (character.energy <= 6) {
        animationTimeCount(TIME, 'Energia insuficiente para treinamento')
        return character
    }

    const choice = await choiceItensCresim(character.items)
    const response = await itensSkillDataApi()
    const choiceItem = getChoiceItem(response, choice)

    printAnimateTranning(character, choiceItem.skillName)

    return cicleTrainCharacterProductPurchased(character, choiceItem, choiceItem.skillName)
}

export const choiceItensCresim = async (items) => {
    printItens(items)

    const input = await useQuestion('\nEscolha uma ferramenta para treinar: ')
    return items[input - 1]
}

export const printItens = async (items) => {
    items.forEach((item, index) => console.log(`${index + 1} - ${item}`))
}

export const getChoiceItem = (response, choiceItem) => {
    let choice = {}

    Object.keys(response).forEach(key => {
        response[key].forEach(item => {
            if (item.nome === choiceItem) {
                choice = { ...item }
                choice.skillName = key
            }
        })
    })

    return choice
}

const printAnimateTranning = (character, skillName) => {
    switch (skillName) {
        case 'GASTRONOMIA':
            cookTrainingAnim(character, true)
            break
        case 'PINTURA':
            paintTrainingAnim(character, true)
            break
        case 'JOGOS':
            gameTrainingAnim(character, true)
            break
        case 'JARDINAGEM':
            gardenTrainingAnim(character, true)
            break
        case 'MUSICA':
            musicTrainingAnim(character, true)
            break
    }
}