import { animationMenuWork } from "../../userInterface/animations/animations.js";
import { workAnim } from "../../userInterface/animations/workAnim.js";
import { setEmployee, work } from "../characterActions/work.js";
import { employeesDataApi } from "../services/api/api.js";
import { useQuestion } from "../services/question/use-question.js";

export const menuWork = async (character) => {
  let characterWork = await work(character);

  if (!characterWork.employee) {
    animationMenuWork(character);
    characterWork = await work(await addEmployee(characterWork));
  }

  await workAnim(character, true);

  return characterWork;
};

export const choiceEmployee = async (response) => {
  printEmployes(response);
  const choice = await useQuestion("\nEscolha um cargo");

  return choice;
};

export const printEmployes = (employees) => {
  employees.forEach((employee) =>
    console.log(employee.id + ". " + employee.cargo)
  );
};

export const addEmployee = async (character) => {
  const response = await employeesDataApi();
  const choice = await choiceEmployee(response);

  return { ...(await setEmployee(character, response[choice - 1])) };
};
