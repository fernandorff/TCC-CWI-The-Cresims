import { animationTimeCount } from "../animations/animationTimeCount.js";
import { setEmployee, work } from "../characterActions/work.js";
import { employeesDataApi } from "../services/api/api.js";
import { useQuestion } from "../services/question/use-question.js";
import { characterInfoDisplay } from "./characterInfoDisplay.js";
import { theCresimsLogo } from "./theCresimsLogo.js";

const TIME_CICLE_TRAINNING = 20000
const TIME = 3000


export const menuWork = async (character) => {
  let characterWork = await work(character);

  if (!characterWork.employee) {
    console.log(
      `
${await theCresimsLogo()}

${await characterInfoDisplay(character)}

O personagem ${character.name} não possui um emprego, escolha um:
`
    );
    const response = await employeesDataApi();
    const choice = await choiceEmployee(response);

    characterWork = {
      ...(await setEmployee(character, response[choice - 1])),
    };

    characterWork = await work(characterWork);
  }

<<<<<<< HEAD
  if (characterWork.energy <= 2) {
    animationTimeCount(TIME, 'Energias insuficiente')
  } else {
    animationTimeCount(TIME_CICLE_TRAINNING, 'Trabalhando')
  }

  return characterWork
=======
  animationTimeCount(TIME_CICLE_TRAINNING, "Trabalhando");
  return characterWork;
>>>>>>> 5cd9393336723e7372c42b31b9030b874703bb8c
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
