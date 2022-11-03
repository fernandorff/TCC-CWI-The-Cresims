import { animationTimeCount } from "../animations/animations.js"
import { cicleTrainCharacterProductPurchased } from "../characterActions/skillAspiration.js"
import { itensSkillDataApi } from "../services/api/api.js"
import { useQuestion } from "../services/question/use-question.js"

const TIME_CICLE_TRAINNING = 8000
const TIME = 3000

export const menuTrainning = async (character) => {
    if (character.items.length === 0) {
        animationTimeCount(TIME, 'Você não possui nenhuma ferramenta para realizar o treinamento')
        return character
    }

    if(character.energy <= 6) {
        animationTimeCount(TIME, 'Energia insuficiente para treinamento')
        return character
    }

    const choice = await choiceItensCresim(character.items)
    const response = await itensSkillDataApi()
    const choiceItem = getChoiceItem(response, choice)
    animationTimeCount(TIME_CICLE_TRAINNING, 'Treinando')

    return cicleTrainCharacterProductPurchased(character, choiceItem, choiceItem.skillName)
}

export const choiceItensCresim = async (items) => {
    printItens(items)

    const input = await useQuestion('\nEscolha uma ferramenta para treinar: ')
    return items[input - 1]
}

export const printItens = async (items) => {
    items.forEach((item, index) => {
        console.log(`${index + 1} - ${item}`);
    })
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