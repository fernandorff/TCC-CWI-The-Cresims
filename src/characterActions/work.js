import { employeesDataApi } from "../services/api/api.js"
import { setEnergy, setTimeLife } from "./common.js"
import { checkLevelSkill } from "./skill-aspiration.js"

const POINT_ENERGY_MIN = 2
const POINT_ENERGY_DECREMENT = 10
const WORKING_DAY = 20000
const TEN_PERCENT = 0.10
const POINT_ENERGY_FOR_DISCOUNT = 5

export const work = async (character) => {
  const characterWork = { ...character }
  const levelSkillCharacter = checkLevelSkill(character.skill)

  if (character.energy < 4 || character.employee === undefined) {
    return undefined
  } else if (character.energy >= 4 && character.energy < 15) {
    const cresceleonsRecalculates = await recalculateCresceleons(character, WORKING_DAY)
    characterWork.cresceleons = characterWork.cresceleons + cresceleonsRecalculates.salary
    characterWork.time = cresceleonsRecalculates.time
    characterWork.energy = cresceleonsRecalculates.energyDecrement
    characterWork.employee.salary = cresceleonsRecalculates.salary
  } else if (character.energy >= 15) {
    characterWork.time = setTimeLife(character, WORKING_DAY)
    characterWork.energy = setEnergy(character, POINT_ENERGY_DECREMENT)
    characterWork.cresceleons = characterWork.cresceleons + character.employee.salary
    characterWork.employee.salary = await getSalary(levelSkillCharacter, character.employee.office)
  }

  return characterWork
}

export const recalculateCresceleons = async (character, workingDay) => {
  const salaryCresim = character.employee.salary
  const cresceleonForEachPointEnergy = salaryCresim / character.energy
  const cresceleonTenPercentForEachPointEnergy = cresceleonForEachPointEnergy - (cresceleonForEachPointEnergy * TEN_PERCENT)
  const pointEnergyCresimRested = character.energy - POINT_ENERGY_FOR_DISCOUNT
  const pointEnergyCresimTired = POINT_ENERGY_FOR_DISCOUNT - getPointEnergy(character.energy)
  const salaryCresimRested = pointEnergyCresimRested * cresceleonForEachPointEnergy
  const salaryCresimTired = pointEnergyCresimTired * cresceleonTenPercentForEachPointEnergy
  const maxTimeToWork = (workingDay / character.energy) * (character.energy - POINT_ENERGY_MIN)

  const time = character.time - maxTimeToWork
  const salary = salaryCresimRested + salaryCresimTired
  const energyDecrement = character.energy <= 11 ? POINT_ENERGY_MIN : character.energy - POINT_ENERGY_DECREMENT

  return { time, salary, energyDecrement }
}

const getPointEnergy = (energy) => {
  if (energy <= 14 && energy >= 13) return energy - POINT_ENERGY_DECREMENT

  return POINT_ENERGY_MIN
}

export const getSalary = async (levelSkill, employee) => {
  const response = await employeesDataApi()
  const salaryLevel = getEmployeesLevels(response, employee)

  const salary = salaryLevel.find(status => {
    if (status.nivel === levelSkill) return status
  })

  return salary.valor
}

const getEmployeesLevels = (response, employee) => {
  const salaryLevel = response.find(post => {
    if (post.cargo === employee) return post
  })

  return salaryLevel.salario
}

export const setEmployee = async (character, office) => {
  const levelSkillCharacter = checkLevelSkill(character.skill)
  const salary = await getSalary(levelSkillCharacter, office.cargo)

  const employee = {
    id: office.id,
    level: levelSkillCharacter,
    office: office.cargo,
    category: office.categoria,
    salary: salary
  }

  return { ...character, employee }
}