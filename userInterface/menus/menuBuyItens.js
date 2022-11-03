import { animationBuyItens } from "../animations/animations.js";
import { animationTimeCount } from "../animations/animationTimeCount.js";
import { buyProductItens } from "../../src/characterActions/skillAspiration.js";
import { itensSkillDataApi } from "../../src/services/api/api.js";
import { menuAbilitys } from "./menuAbilitys.js";
import { useQuestion } from "../../src/services/question/use-question.js";

export const menuBuyItens = async (character) => {
  const TIME = 5000;
  const response = await itensSkillDataApi();
  const skillChoice = await skillChoiceProduct();

  if (skillChoice.toUpperCase() === "X") return character;

  const product = await productChoice(response, skillChoice);
  const characterBuys = buyProductItens(
    character,
    product,
    skillChoice.toUpperCase()
  );

  if (!characterBuys) {
    animationTimeCount(TIME, "Crescelons insufucientes");
    return character;
  }

  return characterBuys;
};

export const productChoice = async (response, skillChoice) => {
  const listItensSkill = response[skillChoice.toUpperCase()];

  listItensSkill.forEach((product) =>
    console.log(`${product.id}. ${product.nome}  $${product.preco}`)
  );

  console.log("X. Voltar ao menu principal \n");

  const choice = await useQuestion("Escolha uma produto");
  return listItensSkill[choice - 1];
};

export const skillChoiceProduct = async () => {
  await animationBuyItens();
  const choiceAspiration = menuAbilitys("Escolha um setor da loja: ");

  return choiceAspiration;
};
