import { setTimeLife } from "./common.js"

export const setSkill = (character, productChoice, aspiration) => {
  if (isBuy(character.cresceleons, productChoice.preco)) {
    if (character.aspiration === aspiration) {
      return character.skill + productChoice.pontos + 1
    } else {
      return character.skill + productChoice.pontos
    }
  }
}

export const cicleTrainCharacterProductPurchased = (character, productChoice, skillChoice) => {
  const TIME_CICLE_TRAINNING = 8000

  return {
    ...character,
    skill: setSkill(character, productChoice, skillChoice),
    time: setTimeLife(character, TIME_CICLE_TRAINNING)
  }
}

export const buyProductItens = (character, productChoice, skillChoice) => {
  const characterTrained = cicleTrainCharacterProductPurchased(character, productChoice, skillChoice)

  if (isBuy(character.cresceleons, productChoice.preco)) {
    characterTrained.cresceleons = characterTrained.cresceleons - productChoice.preco
    characterTrained.items.push(productChoice.nome)
  }

  return characterTrained
}

export const isBuy = (cresceleons, priceProductChoice) => {
  if (cresceleons >= priceProductChoice) {
    return true
  }

  return false
}

export const checkLevelSkill = (points) => {
  if (points >= 0 && points <= 16) {
    return 'JUNIOR'
  } else if (points >= 17 && points <= 26) {
    return 'PLENO'
  } else if (points >= 27) {
    return 'SENIOR'
  }

  return ''
}