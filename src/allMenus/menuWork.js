import { setEmployee, work } from "../characterActions/work.js";
import { employeesDataApi } from "../services/api/api.js";
import { useQuestion } from "../services/question/use-question.js";

export const menuWork = async (character) => {
  let characterWork = await work(character);

  if (!characterWork.employee) {
    console.log(`O personagem ${character.name} não possui um emprego, escolha um: \n`);
    const response = await employeesDataApi();
    const choice = await choiceEmployee(response);

    characterWork = {
      ...(await setEmployee(character, response[choice - 1])),
    };

    characterWork = await work(characterWork)
  }

  return characterWork
};

export const choiceEmployee = async (response) => {
  printEmployes(response);
  const choice = await useQuestion("\nEscolha um cargo");

  return choice;
};

export const printEmployes = (employees) => {
  employees.forEach((employee) => {
    console.log(employee.id + " - " + employee.cargo);
  });
};
