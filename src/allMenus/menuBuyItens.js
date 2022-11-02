import { animationBuyItens } from "../animations/animationBuyItens.js";
import { animationTimeCount } from "../animations/animationTimeCount.js";
import { buyProductItens } from "../characterActions/skillAspiration.js";
import { itensSkillDataApi } from "../services/api/api.js";
import { useQuestion } from "../services/question/use-question.js";
import { menuAbilitys } from "./menuAbilitys.js";
import { theCresimsLogo } from "./theCresimsLogo.js";

export const menuBuyItens = async (character) => {
  const TIME = 3000;
  const response = await itensSkillDataApi();
  const skillChoice = await skillChoiceProduct();
  const product = await productChoice(response, skillChoice);
  const characterBuys = buyProductItens(
    character,
    product,
    skillChoice.toUpperCase()
  );

  if (characterBuys) {
    return characterBuys;
  }

  animationTimeCount(TIME, "Crescelons insufucientes");

  return characterBuys;
};

export const productChoice = async (response, skillChoice, character) => {
  const listItensSkill = response[skillChoice.toUpperCase()];
  console.log(`
${await theCresimsLogo()}
  
   ___________________________________________________________
  | : : : : : : : : : : : : : : : : : : : : : : : : : : : : : |
  |: : : : : : : : :_________________________: : : : : : : : :|
  | : : : : : : : _)  :                   :  (_ : : : : : : : |
  |: : : : : : : )_ :   $ Lojas CWIanas $   : _( : : : : : : :|
  | : : :__________)_________________________(__________  : : |
  | /_/  '---------------------------------------------'  /_/ |
  |: | : |Música * Games * Jardinagem * Cozinha * Artes| : | :|
  | : : :|   ______    _    _________         ______   |: : : |
  |======| .' ,|,  '. /_/ .'         '. /_/ .'  ,|, '. |======|
  |      | |_';;;'__|  |  |   ,,,,    |  |  |__';;;'_| |      |
  |      | |_|-;-|__|     |  (⚆_⚆     |     |__|-;-|_| |      |
  |      | |________|     |   /|-$    |     |________| |      |
  |      |                |    LL     |                |      |
  l______|________________|           |________________|______|
`);

  listItensSkill.forEach((product) => {
    console.log(product.id + ". " + product.nome);
  });
  console.log(`X. Retornar`);

  const choice = await useQuestion("Escolha uma produto");

  if (choice.toUpperCase() == "X") {
    return character;
  }
  return listItensSkill[choice - 1];
};

export const skillChoiceProduct = async () => {
  await animationBuyItens();
  const choiceAspiration = menuAbilitys("Escolha um setor da loja: ");

  return choiceAspiration;
};
