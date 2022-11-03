import {
    getLevelInteraction,
    interaction,
} from "../src/characterActions/interaction";

let character, character_02

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
      ability: [],
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
});

describe("1 - Testar level de amizade dos personagens", () => {
    it("Deve evoluir o relacionamento de dois Cresims para AMIZADE", () => {
        
    })
})