import {
  buyProductItens,
  cicleTrainCharacterProductPurchased,
  isBuy,
} from "../src/characterActions/skillAspiration";
import { isWork, work } from "../src/characterActions/work";
import { itensSkillDataApi } from "../src/services/api/api";
import { executeCheat } from "../src/cheats/cheats";
import { cheatJunim } from "../src/cheats/cheatJunim";
import { takeAShower } from "../src/characterActions/takeAShower";

let character, itensSkill, product, productChoice;

beforeAll(async () => {
  itensSkill = await itensSkillDataApi();
});

beforeEach(() => {
  character = {
    name: "Fulano",
    aspiration: "JOGOS",
    cresceleons: 10500,
    time: 3600000,
    hygiene: 28,
    energy: 32,
    relationship: [],
    skill: 0,
    items: [],
    employee: {
      id: 1,
      office: "Jogador de Dota",
      category: "JOGOS",
      salary: 160,
    },
    ability: [
      {
        name: "CULINARIA",
        skill: 0,
      },
      {
        name: "JOGOS",
        skill: 0,
        aspiration: true,
      },
    ],
  };

  product = itensSkill[character.aspiration];
  productChoice = product[0];
});

describe("04 - Trabalho", () => {
  it("Deve perder os pontos de energia ao trabalhar uma jornada padrão", async () => {
    const characterWork = await work(character);

    const energy = characterWork.energy;
    const energyExpected = 22;

    expect(energy).toBe(energyExpected);
  });

  it("Deve receber o salario do dia ao trabalhar uma jornda padrão", async () => {
    const characterWork = await work(character);

    const salary = characterWork.employee.salary;
    const salaryExpected = 160.0;

    expect(salary).toBe(salaryExpected);
  });

  it("Deve receber o salario equivalente quando começar a trabalhar com os pontos de energia menores que 10", async () => {
    character.energy = 9;
    const characterWork = await work(character);

    const salary = characterWork.employee.salary;
    const salaryExpected = 107.2;

    expect(salary.toFixed(1)).toBe(salaryExpected.toFixed(1));
  });

  it("Deve receber o salario equivalente quando começar a trabalhar com os pontos de energia menores que 10 e pontos de higiene menores que 4", async () => {
    const characterCopy = { ...character };

    characterCopy.energy = 10;
    characterCopy.hygiene = 3;

    const characterWork = await work(characterCopy);

    const salary = characterWork.employee.salary;
    const salaryExpected = 110.9;

    expect(salary).toBe(salaryExpected);
  });

  it("Deve validar para que o Cresim não consiga começar a trabalhar com os pontos de energia menores que 4", async () => {
    const ENERGY_CRESIM = 3;

    const boolWork = isWork(ENERGY_CRESIM, character.employee);
    const boolWorkExpected = false;

    expect(boolWork).toBe(boolWorkExpected);
  });
});

describe("5 - Habilidades e aspirações", () => {
  it("Deve conseguir comprar um item de habilidade", () => {
    const characterBuys = buyProductItens(character, productChoice);

    const itemPurchased = characterBuys.items;
    const itemPurchasedExpected = ["Mouse com led"];

    expect(itemPurchased).toEqual(itemPurchasedExpected);
  });

  it("Deve validar ao tentar comprar um item de habilidade sem Cresceleons suficientes", () => {
    const cresceleons = 1500;
    const boolean = isBuy(cresceleons, productChoice.preco);

    expect(boolean).not.toBeTruthy();
  });

  it("Deve conseguir concluir um ciclo de treino com habilidade que não é aspiração e receber os pontos corretamente", () => {
    const product = itensSkill["GASTRONOMIA"];
    const productChoice = product[1];

    const characterBuys = cicleTrainCharacterProductPurchased(
      character,
      productChoice,
      "GASTRONOMIA"
    );

    const pointSkill = characterBuys.skill;
    const pointSkillExpected = 5;

    expect(pointSkill).toBe(pointSkillExpected);
  });

  it("Deve conseguir concluir um ciclo de treino com habilidade que é sua aspiração e receber os pontos corretamente", () => {
    const characterBuys = cicleTrainCharacterProductPurchased(
      character,
      productChoice,
      "JOGOS"
    );

    const pointSkill = characterBuys.skill;
    const pointSkillExpected = 3;

    expect(pointSkill).toBe(pointSkillExpected);
  });

  it("Deve perder pontos de energia ao terminar um ciclo de treino", () => {
    const characterBuys = cicleTrainCharacterProductPurchased(
      character,
      productChoice
    );

    const pointEnergy = characterBuys.energy;
    const pointEnergyExpected = 28;

    expect(pointEnergy).toBe(pointEnergyExpected);
  });

  it("Deve perder pontos de higiene ao terminar um ciclo de treino", () => {
    const characterBuys = cicleTrainCharacterProductPurchased(
      character,
      productChoice
    );

    const pointHygiene = characterBuys.hygiene;
    const pointHygieneExpected = 26;

    expect(pointHygiene).toBe(pointHygieneExpected);
  });

  it("Deve avançar o nivel de habilidade quando completar os pontos necessarios", () => {
    const characterLevelSkill = { ...character };
    characterLevelSkill.skill = 26;

    const characterTrainning = cicleTrainCharacterProductPurchased(
      characterLevelSkill,
      productChoice,
      characterLevelSkill.aspiration
    );

    const levelSkill = characterTrainning.employee.level;
    const levelSkillExpected = "SENIOR";

    expect(levelSkill).toBe(levelSkillExpected);
  });
});

describe("6 - Cheats", () => {
  it("Deve conseguir aplicar o cheat SORTENAVIDA e receber as recompensas", async () => {
    const newCharacter = await executeCheat(character, "SORTENAVIDA");
    const numExpect = 176;
    expect(newCharacter.employee.salary).toBe(numExpect);
  });

  it("Deve conseguir aplicar o cheat DEITADONAREDE e receber as recompensas", async () => {
    const newCharacter = { ...character, energy: 27 };
    const characterTest = await executeCheat(newCharacter, "DEITADONAREDE");
    const numExpect = 32;
    expect(characterTest.energy).toBe(numExpect);
  });

  it("Deve conseguir aplicar o cheat JUNIM e receber as recompensas para a habilidade escolhida", async () => {
    const newCharacter = await cheatJunim(character, "CULINARIA");
    const skillLevel = newCharacter.ability[0].skill;
    const numExpect = 5;
    expect(skillLevel).toBe(numExpect);
  });

  it("Deve conseguir aplicar o cheat CAROLINAS e receber as recompensas", async () => {
    const newCharacter = await executeCheat(character, "CAROLINAS");
    const numExpect = 3700000;
    expect(newCharacter.time).toBe(numExpect);
  });

  it("Deve conseguir aplicar o cheat SINUSITE ter a vida zerada", async () => {
    const newCharacter = await executeCheat(character, "SINUSITE");
    const numExpect = 0;
    expect(newCharacter.time).toBe(numExpect);
  });
});

describe("7 - Higience", () => {
  it("Deve descontar 10 Cresceleons ao tomar banho", async () => {
    const newCharacter = await takeAShower(character, 10, false);
    const numExpect = 10490;
    expect(newCharacter.cresceleons).toBe(numExpect);
  });
});
