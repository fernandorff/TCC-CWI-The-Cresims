import { cicleTrainCharacterProductPurchased } from "../characterActions/skillAspiration.js"

export const menuTrainning = (character) => {
    if(character.items.length === 0) {
        console.log('Você não possui nenhuma ferramenta para realizar o treinamento')
    }
    cicleTrainCharacterProductPurchased(character)
}