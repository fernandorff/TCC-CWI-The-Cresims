import { employeesDataApi } from "../services/api/app.js"
import { setEnergy, setTimeLife } from "./common.js"
import { checkLevelSkill } from "./skill-aspiration.js"

export const work = async (character) => {
  const characterWork = { ...character }
  const ENERGY_DECREMENT = 10
  const WORKING_DAY = 20000

  const levelSkillCharacter = checkLevelSkill(character.skill)

  if (character.energy < 15) {
    const cresceleonsRecalculates = await recalculateCresceleons(character, levelSkillCharacter, WORKING_DAY)
    characterWork.cresceleons = characterWork.cresceleons + cresceleonsRecalculates.salary
    characterWork.time = cresceleonsRecalculates.time
    characterWork.energy = cresceleonsRecalculates.energyDecrement
  } else {
    characterWork.time = setTimeLife(character, WORKING_DAY)
    characterWork.energy = setEnergy(character, ENERGY_DECREMENT)
  }

  return characterWork
}

export const recalculateCresceleons = async (character, levelSkill, workingDay) => {
  const POINT_ENERGY_MIN = 2
  const TEN_PERCENT = 0.10
  const POINT_ENERGY_FOR_DISCOUNT = 5

  const salaryCresim = await getSalary(levelSkill, character.employee)
  const msForEachPointEnergy = workingDay / character.energy
  const pointEnergyForSpend = (character.energy - POINT_ENERGY_MIN)
  const maxTimeToWork = pointEnergyForSpend * workingDay
  const timeInMsForEachCresceleon = workingDay / salaryCresim
  const cresceleonForEachPointEnergy = msForEachPointEnergy / timeInMsForEachCresceleon
  const pointEnergyForRecalculate = POINT_ENERGY_FOR_DISCOUNT - getPointEnergy(character.energy)
  const recalculateSalaryCresimTired = pointEnergyForRecalculate * (cresceleonForEachPointEnergy - (cresceleonForEachPointEnergy * TEN_PERCENT))
  const pointsEnergyCurrent = character.energy - POINT_ENERGY_FOR_DISCOUNT
  const salaryCresimRested = pointsEnergyCurrent * cresceleonForEachPointEnergy

  return {
    time: character.time - maxTimeToWork,
    salary: recalculateSalaryCresimTired + salaryCresimRested,
    energyDecrement: character.energy - pointEnergyForSpend
  }
}

const getPointEnergy = (energy) => {
  if (energy <= 14 && energy >= 13) {
    return energy - 10
  }

  return 2
}

export const getSalary = async (levelSkill, employee) => {
  const response = await employeesDataApi()
  const salaryLevel = getEmployeesLevels(response, employee)

  const salary = salaryLevel.find(status => {
    if (status.nivel === levelSkill) {
      return status
    }
  })

  return salary.valor
}

const getEmployeesLevels = (response, employee) => {
  const salaryLevel = response.find(post => {
    if (post.cargo === employee) {
      return post
    }
  })

  return salaryLevel.salario
}

export const setEmployee = async (character, employee) => {
  return {
    ...character,
    employee: employee
  }
}