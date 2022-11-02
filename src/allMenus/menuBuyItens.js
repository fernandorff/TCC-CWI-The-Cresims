import { animationBuyItens } from "../animations/animationBuyItens.js";
import { animationTimeCount } from "../animations/animationTimeCount.js";
import { buyProductItens } from "../characterActions/skillAspiration.js";
import { itensSkillDataApi } from "../services/api/api.js";
import { useQuestion } from "../services/question/use-question.js";
import { menuAbilitys } from "./menuAbilitys.js";

export const menuBuyItens = async (character) => {
  const TIME = 3000;
  const response = await itensSkillDataApi();
  const skillChoice = await skillChoiceProduct();
  const product = await productChoice(response, skillChoice);
  const characterBuys = buyProductItens( character, product, skillChoice.toUpperCase());

  if(!characterBuys) {
    animationTimeCount(TIME, "Crescelons insufucientes");
    return character
  }

  if (characterBuys) {
    return characterBuys;
  }

  return characterBuys;
};

export const productChoice = async (response, skillChoice) => {
  const listItensSkill = response[skillChoice.toUpperCase()];

  listItensSkill.forEach((product) => {
    console.log(`${product.id}. ${product.nome}  $${product.preco}`);
  });

  console.log('X. Voltar ao menu principal \n')

  const choice = await useQuestion("Escolha uma produto");
  return listItensSkill[choice - 1];
};

export const skillChoiceProduct = async () => {
  await animationBuyItens()
  const choiceAspiration = menuAbilitys("Escolha um setor da loja: ");

  return choiceAspiration;
};
