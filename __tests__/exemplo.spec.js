import {
  buyProductItens,
  checkLevelSkill,
  cicleTrainCharacterProductPurchased,
  isBuy,
} from "../src/characterActions/skillAspiration";
import {
  getLevelInteraction,
  interaction,
  listInteraction
} from "../src/characterActions/interaction";
import { isWork, work } from "../src/characterActions/work";
import { itensSkillDataApi } from "../services/api/api";
import { executeCheat } from "../src/characterActions/cheats";
import { takeAShower } from "../src/characterActions/takeAShower";
import { validateEnergyAndHygiene } from "../userInterface/menus/characterActionMenu";
import { sleepAction } from "../src/characterActions/sleepMenu";
import { setEnergy, setEnergyTwo, setHygiene, setTimeLife } from "../src/characterActions/common";

let character, character_02;
let itensSkill, product, productChoice;

beforeAll(async () => {
  itensSkill = await itensSkillDataApi();
});

beforeEach(() => {
  character = {
    id: 1,
    name: "Fulano",
    aspiration: "JOGOS",
    cresceleons: 1500,
    time: 3600000,
    hygiene: 28,
    energy: 32,
    relationship: [
      {
        id: 2,
        name: "Sicrano",
        level: 0,
      },
    ],
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

  character_02 = {
    ...character,
    id: 2,
    nome: "Sicrano",
    relationship: [
      {
        id: 1,
        name: "Fulano",
        level: 0,
      },
    ],
  };

  product = itensSkill[character.aspiration];
  productChoice = product[0];
});

describe("01 - Regras Gerais / Criação do Cresim", () => {
  it("Deve conseguir criar um novo Cresim com nome, pontos de higiene e energia carregados e 1500 Cresceleons", async () => {
    const dataExpected = ["Fulano", 28, 32, 1500];

    expect([
      character.name,
      character.hygiene,
      character.energy,
      character.cresceleons,
    ]).toMatchObject(dataExpected);
  });

  it("Deve conseguir atribuir uma aspiração ao Cresim  ", async () => {
    const dataExpected = "JOGOS";

    expect(character.aspiration).toBe(dataExpected);
  });

  it("Deve validar os pontos de energia do personagem para que não passem de 32 pontos", async () => {
    character.energy += 1000;

    await validateEnergyAndHygiene(character);

    const expectedData = 32;

    expect(character.energy).toBe(expectedData);
  });

  it("Deve validar os pontos de energia do personagem para que não fiquem negativados  ", async () => {
    character.energy -= 1000;

    await validateEnergyAndHygiene(character);

    const expectedData = 0;

    expect(character.energy).toBe(expectedData);
  });
});

describe("02 - Energia", () => {
  it("Deve conseguir dormir e receber seus pontos de energia", async () => {
    character.energy = 0;

    await sleepAction(character, 15, false);

    const expectedData = 18;

    expect(character.energy).toBe(expectedData);
  });
});

describe("3 - Habilidades e aspirações", () => {
  it("Deve conseguir comprar um item de habilidade", () => {
    character.cresceleons += 2000;
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

  it("Deve retornar um nível JUNIOR", () => {
    const levelSkill = checkLevelSkill(10)
    const levelSkillExpected = 'JUNIOR'

    expect(levelSkill).toBe(levelSkillExpected)
  })

  it("Deve retornar um nível PLENO", () => {
    const levelSkill = checkLevelSkill(17)
    const levelSkillExpected = 'PLENO'

    expect(levelSkill).toBe(levelSkillExpected)
  })

  it("Deve retornar um nível SENIOR", () => {
    const levelSkill = checkLevelSkill(28)
    const levelSkillExpected = 'SENIOR'

    expect(levelSkill).toBe(levelSkillExpected)
  })
});

describe("4 - Trabalho", () => {
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

describe("5 - Relacionamentos", () => {
  it("Deve evoluir o relacionamento de dois Cresims para AMIZADE", () => {
    const objInteraction = {
      id: 3,
      interacao: "Elogiar",
      pontos: 4,
      energia: 1,
    };

    let [newCharacter, newCharacter_02] = [character, character_02];
    for (let cont = 0; cont < 4; cont++) {
      [newCharacter, newCharacter_02] = interaction(
        newCharacter,
        newCharacter_02,
        objInteraction
      );
    }

    const pointsCharacter = newCharacter.relationship[0].level;
    const pointsCharacter_02 = newCharacter_02.relationship[0].level;

    const levelCharacter = getLevelInteraction(pointsCharacter);
    const levelCharacter_02 = getLevelInteraction(pointsCharacter_02);

    expect(levelCharacter).toBe("AMIZADE");
    expect(levelCharacter_02).toBe("AMIZADE");
  });

  it("Deve evoluir o relacionamento de dois Cresims para AMIZADE", () => {
    const objInteraction = {
      id: 3,
      interacao: "Elogiar",
      pontos: 4,
      energia: 1,
    };

    let [newCharacter, newCharacter_02] = [character, character_02];
    for (let cont = 0; cont < 10; cont++) {
      [newCharacter, newCharacter_02] = interaction(
        newCharacter,
        newCharacter_02,
        objInteraction
      );
    }

    const pointsCharacter = newCharacter.relationship[0].level;
    const pointsCharacter_02 = newCharacter_02.relationship[0].level;
    
    const levelCharacter = getLevelInteraction(pointsCharacter);
    const levelCharacter_02 = getLevelInteraction(pointsCharacter_02);
    
    expect(levelCharacter).toBe("AMOR");
    expect(levelCharacter_02).toBe("AMOR");
  });

  it("Deve evoluir o relacionamento de dois Cresims para AMOR", () => {
    const objInteraction = {
      id: 3,
      interacao: "Elogiar",
      pontos: 4,
      energia: 1,
    };

    let [newCharacter, newCharacter_02] = [character, character_02];
    for (let cont = 0; cont < 10; cont++) {
      [newCharacter, newCharacter_02] = interaction(
        newCharacter,
        newCharacter_02,
        objInteraction
      );
    }

    const pointsCharacter = newCharacter.relationship[0].level;
    const pointsCharacter_02 = newCharacter_02.relationship[0].level;
    
    const levelCharacter = getLevelInteraction(pointsCharacter);
    const levelCharacter_02 = getLevelInteraction(pointsCharacter_02);
    
    expect(levelCharacter).toBe("AMOR");
    expect(levelCharacter_02).toBe("AMOR");
  });

  it("Deve recuar o relacionamento de dois Cresims para INIMIZADE", () => {
    const objInteraction = {
      id: 6,
      interacao: "Criticar",
      pontos: -3,
      energia: 2,
    };

    const [newCharacter, newCharacter_02] = interaction(
      character,
      character_02,
      objInteraction
    );

    const pointsCharacter = newCharacter.relationship[0].level;
    const pointsCharacter_02 = newCharacter_02.relationship[0].level;

    const levelCharacter = getLevelInteraction(pointsCharacter);
    const levelCharacter_02 = getLevelInteraction(pointsCharacter_02);

    expect(levelCharacter).toBe("INIMIZADE");
    expect(levelCharacter_02).toBe("INIMIZADE");
  });

  it("Deve Retornar o relacionamento de dois cresim como NEUTRO", () => {
    const pointsCharacter = character.relationship[0].level;
    const pointsCharacter_02 = character_02.relationship[0].level;

    const levelCharacter = getLevelInteraction(pointsCharacter);
    const levelCharacter_02 = getLevelInteraction(pointsCharacter_02);
    
    expect(levelCharacter).toBe("NEUTRO");
    expect(levelCharacter_02).toBe("NEUTRO");
  })

  it("Deve retornar uma lista com todas as interações para INIMIZADE", async () => {
    const tamListExpect = 13;

    const level = "INIMIZADE";
    const list = await listInteraction(level);
    const tamList = list.length;

    expect(tamList).toBe(tamListExpect);
  })

  it("Deve retornar uma lista com todas as interações para NEUTRO", async () => {
    const tamListExpect = 9;

    const level = "NEUTRO";
    const list = await listInteraction(level);
    const tamList = list.length;

    expect(tamList).toBe(tamListExpect);
  })

  it("Deve retornar uma lista com todas as interações para AMIZADE", async () => {
    const tamListExpect = 13;

    const level = "AMIZADE";
    const list = await listInteraction(level);
    const tamList = list.length;

    expect(tamList).toBe(tamListExpect);
  })

  it("Deve retornar uma lista com todas as interações para AMOR", async () => {
    const tamListExpect = 16;

    const level = "AMOR";
    const list = await listInteraction(level);
    const tamList = list.length;

    expect(tamList).toBe(tamListExpect);
  })

  it("Deve descontar os pontos de energia em uma interação entre dois Cresims", () => {
    const objInteraction = {
      id: 4,
      interacao: "Conversar",
      pontos: 2,
      energia: 2,
    };

    const [newCharacter, newCharacter_02] = interaction(
      character,
      character_02,
      objInteraction
    );

    const energyCharacter = newCharacter.energy;
    const energyCharacter_02 = newCharacter_02.energy;

    const energyExpect = 30;
    const energyExpect_02 = 31;

    expect(energyCharacter).toBe(energyExpect);
    expect(energyCharacter_02).toBe(energyExpect_02);
  });

  it("Deve impedir interação quando um cresim tiver 0 de energia", () => {
    const objInteraction = {
      id: 6,
      interacao: "Criticar",
      pontos: -3,
      energia: 2,
    };
    
    const characterEnergy = {
      ...character,
      energy: 0
    }
    const [newCharacter, newCharacter_02] = interaction(
      characterEnergy,
      character_02,
      objInteraction
    );

    const pointsCharacter = newCharacter.relationship[0].level;
    const pointsCharacter_02 = newCharacter_02.relationship[0].level;

    const pointsExpect = character.relationship[0].level;
    const pointsExpect_02 = character_02.relationship[0].level;

    expect(pointsCharacter).toBe(pointsExpect)
    expect(pointsCharacter_02).toBe(pointsExpect_02)
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
    const newCharacter = await executeCheat(character, "JUNIM");
    const skillLevel = newCharacter.skill;
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

describe("7 - Higiene", () => {
  it("Deve descontar 10 Cresceleons ao tomar banho", async () => {
    const newCharacter = await takeAShower(character, 10, false);
    const numExpect = 1490;
    expect(newCharacter.cresceleons).toBe(numExpect);
  });
});

describe("Teste common.js", () => {
  it("Deve decrementar a vida de um personagem", () => {
    const lifeCharcter = setTimeLife(character, 1000)
    const lifeCharcterExpected = 3599000

    expect(lifeCharcter).toBe(lifeCharcterExpected)
  })

  it("Deve decrementar a vida de um personagem e morrer", () => {
    character.time = 10
    const lifeCharcter = setTimeLife(character, 1000)
    const lifeCharcterExpected = 0

    expect(lifeCharcter).toBe(lifeCharcterExpected)
  })

  it("Deve decrementar a energia de um personagem", () => {
    const energyCharcter = setEnergy(character, 4)
    const energyCharcterExpected = 28

    expect(energyCharcter).toBe(energyCharcterExpected)
  })

  it("Deve decrementar a energia de um personagem e retornar 0", () => {
    character.energy = 3
    const energyCharcter = setEnergy(character, 4)
    const energyCharcterExpected = 0

    expect(energyCharcter).toBe(energyCharcterExpected)
  })

  it("Deve decrementar a energia de um personagem", () => {
    const energyCharcter = setEnergyTwo(character, 4)
    const energyCharcterExpected = 28

    expect(energyCharcter).toBe(energyCharcterExpected)
  })

  it("Deve decrementar a energia de um personagem e retornar 2", () => {
    character.energy = 3
    const energyCharcter = setEnergyTwo(character, 4)
    const energyCharcterExpected = 2

    expect(energyCharcter).toBe(energyCharcterExpected)
  })

  it("Deve decrementar a higiene de um personagem", () => {
    const hygieneCharcter = setHygiene(character, 4)
    const hygieneCharcterExpected = 24

    expect(hygieneCharcter).toBe(hygieneCharcterExpected)
  })

  it("Deve decrementar a higiene de um personagem e retornar 0", () => {
    character.hygiene = 3
    const hygieneCharcter = setHygiene(character, 4)
    const hygieneCharcterExpected = 0

    expect(hygieneCharcter).toBe(hygieneCharcterExpected)
  })
})

