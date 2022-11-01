import { cicleTrainCharacterProductPurchased } from "../characterActions/skillAspiration.js"

export const menuTrainning = (character) => {
    if(character.items.length === 0) {
        console.log('Você não possui nenhuma ferramenta para realizar o treinamento')
    }

    choiceItensCresim(character.items)
    cicleTrainCharacterProductPurchased(character)
}

export const choiceItensCresim = async (items) => {
    printItens(items)
    const input = await useQuestion(``)
}

export const printItens = (items) => {
    items.forEach(item => {
        
    })
}