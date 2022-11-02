import { setEnergy, setHygiene, setTimeLife } from "./common.js"

export const setSkill = (character, productChoice, skillChoice) => {
  if (character.aspiration === skillChoice) return character.skill + productChoice.pontos + 1
  else return character.skill + productChoice.pontos
}

export const cicleTrainCharacterProductPurchased = (character, productChoice, skillChoice) => {
  const TIME_CICLE_TRAINNING = 8000
  const ENERGY_DECREMENT = 4
  const HYGIENE_DECREMENT = 2

  const skill = setSkill(character, productChoice, skillChoice)
  const time = setTimeLife(character, TIME_CICLE_TRAINNING)
  const energy = setEnergy(character, ENERGY_DECREMENT)
  const levelSkill = checkLevelSkill(skill)
  const employee = { ...character.employee, level: levelSkill }
  const hygiene = setHygiene(character, HYGIENE_DECREMENT)
  const ability = { name: skillChoice, skill: productChoice.pontos }

  return { ...character, skill, time, energy, employee, hygiene, ability }
}

export const buyProductItens = (character, productChoice) => {
  const characterBuys = { ...character }

  if (isBuy(character.cresceleons, productChoice.preco)) {
    characterBuys.cresceleons = Number((characterBuys.cresceleons - productChoice.preco).toFixed(1))
    characterBuys.items.push(productChoice.nome)
  }

  return characterBuys
}

export const isBuy = (cresceleons, priceProductChoice) => {
  if (cresceleons >= priceProductChoice) return true

  return false
}

export const checkLevelSkill = (points) => {
  if (points >= 0 && points <= 16) return 'JUNIOR'
  else if (points >= 17 && points <= 26) return 'PLENO'
  else if (points >= 27) return 'SENIOR'
}
