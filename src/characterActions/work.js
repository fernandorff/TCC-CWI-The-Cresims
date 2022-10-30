import { employeesDataApi } from "../services/api/app.js"
import { setEnergy, setTimeLife } from "./common.js"
import { checkLevelSkill } from "./skill-aspiration.js"

export const work = (character) => {
  const characterWork = { ...character }
  const ENERGY_DECREMENT = 10
  const WORKING_DAY = 20000

  const levelSkillCharacter = checkLevelSkill(character.skill)

  if (character.energy < 15) {
    const obj = recalculateCresceleons(character, levelSkillCharacter, WORKING_DAY)
    characterWork.cresceleons = characterWork.cresceleons + obj.salary
    characterWork.time = obj.time
    characterWork.energy = obj.energyDecrement
  } else {
    characterWork.time = setTimeLife(character, WORKING_DAY)
    characterWork.energy = setEnergy(character, ENERGY_DECREMENT)
  }

  return characterWork
}

export const recalculateCresceleons = (character, levelSkill, workingDay) => {
  const POINT_ENERGY_MIN = 2
  const TEN_PERCENT = 0.10
  const POINT_ENERGY_FOR_DISCOUNT = 5

  const salaryCresim = getSalary(levelSkill, character.employee)
  const msForEachPointEnergy = workingDay / character.energy
  const pointEnergyForSpend = (character.energy - POINT_ENERGY_MIN)
  const maxTimeToWork = pointEnergyForSpend * workingDay
  const timeInMsForEachCresceleon = workingDay / salaryCresim
  const cresceleonForEachPointEnergy = msForEachPointEnergy / timeInMsForEachCresceleon
  const pointEnergyForRecalculate = character.energy ////////
  const recalculateSalaryCresimTired = pointEnergyForRecalculate * (cresceleonForEachPointEnergy - (cresceleonForEachPointEnergy * TEN_PERCENT))
  const pointsEnergyCurrent = character.energy - POINT_ENERGY_FOR_DISCOUNT
  const salaryCresimRested = pointsEnergyCurrent * cresceleonForEachPointEnergy

  return {
    time: character.time - maxTimeToWork,
    salary: recalculateSalaryCresimTired + salaryCresimRested,
    energyDecrement: character.energy - pointEnergyForSpend
  }
}

export const getSalary = async (levelSkill, employee) => {
  const response = await employeesDataApi()
  let salaryLevel, salary

  response.forEach(post => {
    if (post.cargo === employee) {
      salaryLevel = post.salario
      return
    }
  })

  salaryLevel.forEach(status => {
    if (status.nivel === levelSkill) {
      salary = status.valor
      return
    }
  })

  return salary
}

export const setEmployee = async (character, employee) => {
  return {
    ...character,
    employee: employee
  }
}