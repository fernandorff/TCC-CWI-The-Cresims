import { setEnergy, setHygiene, setTimeLife } from "./common.js"

const TIME_CICLE_TRAINNING = 8000
const ENERGY_DECREMENT = 4
const HYGIENE_DECREMENT = 2

export const setSkill = (character, productChoice, skillChoice) => {
  if (character.aspiration === skillChoice) return character.skill + productChoice.pontos + 1
  else return character.skill + productChoice.pontos
}

export const cicleTrainCharacterProductPurchased = (character, productChoice, skillChoice) => {
  const characterTrainning = { ...character }

  if (!characterTrainning.ability) {
    characterTrainning.ability = []
  }

  const skill = setSkill(characterTrainning, productChoice, skillChoice)
  const time = setTimeLife(characterTrainning, TIME_CICLE_TRAINNING)
  const energy = setEnergy(characterTrainning, ENERGY_DECREMENT)
  const levelSkill = checkLevelSkill(skill)
  const employee = { ...characterTrainning.employee, level: levelSkill }
  const hygiene = setHygiene(characterTrainning, HYGIENE_DECREMENT)
  let ability = [...characterTrainning.ability]

  if (!containAbility(characterTrainning.ability, skillChoice)) {
    ability = [...characterTrainning.ability, { name: skillChoice, skill: productChoice.pontos }]
  }

  return { ...characterTrainning, skill, time, energy, employee, hygiene, ability }
}

export const buyProductItens = (character, productChoice) => {
  const characterBuys = { ...character }

  if (!character || !productChoice) {
    return character
  }

  if (isBuy(character.cresceleons, productChoice.preco)) {
    characterBuys.cresceleons = Number((characterBuys.cresceleons - productChoice.preco).toFixed(1))
    characterBuys.items.push(productChoice.nome)
    return characterBuys
  }

  return undefined
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


export const containAbility = (abilitys, newAbility) => {
  return abilitys.find(ability => {
    return ability.name === newAbility
  })
}
