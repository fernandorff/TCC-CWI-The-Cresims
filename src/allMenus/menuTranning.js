import { cicleTrainCharacterProductPurchased } from "../characterActions/skillAspiration.js"
import { itensSkillDataApi } from "../services/api/api.js"
import { useQuestion } from "../services/question/use-question.js"

export const menuTrainning = async (character) => {
    if (character.items.length === 0) {
        console.log('Você não possui nenhuma ferramenta para realizar o treinamento')
        return character
    }

    if(character.energy <= 6) {
        console.log('Energia insuficiente para treinamento');
        return character
    }

    const choice = await choiceItensCresim(character.items)
    const response = await itensSkillDataApi()
    const choiceItem = getItemSkill(response, choice)

    return cicleTrainCharacterProductPurchased(character, choiceItem, choice)
}

export const choiceItensCresim = async (items) => {
    printItens(items)

    const input = await useQuestion('Escolha uma ferramenta para treinar')
    return items[input - 1]
}

export const printItens = async (items) => {
    items.forEach((item, index) => {
        console.log(`${index + 1} - ${item}`);
    })
}

export const getItemSkill = (response, choiceItem) => {
    let choice = {}

    Object.keys(response).forEach(key => {
        response[key].forEach(item => {
            if (item.nome === choiceItem) {
                choice = { ...item }
            }
        })
    })

    return choice
}