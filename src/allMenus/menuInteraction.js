import { getCharacter } from "../crud/character.js"

export const menuInteraction = async (character) => {
    while (true) {
        console.clear();
        console.log(`Para interagir com algum personagem é nescessario 
            informar-lo primeiro`)
        const characterInteraction = await getCharacter();

        if (characterInteraction.id != character.id) {
            const relation = getRelation(character, characterInteraction)
            const relationSecond = getRelation(characterInteraction, character)

            if (!relation) {
                character.relationship.push({
                    id: characterInteraction.id,
                    name: characterInteraction.name,
                    pontos: 0
                })
            }

            if (!relationSecond) {
                characterInteraction.relationship.push({
                    id: character.id,
                    name: character.name,
                    pontos: 0
                })
            }

            return selectInteraction(character, characterInteraction);
        } else {
            console.log("Informe um id de personagem diferente do seu")
        }
    }
}

const selectInteraction = (character, characterInterac) => {
    console.table(character)
    console.table(characterInterac)
}

const createRelation = (character, characterSecondary) => {
    
}

const getRelation = (character, characterSecondary) => {
    const listRelation = character.relationship;
    return listRelation.find((charac) => 
        charac.id == characterSecondary.id
    );
}

menuInteraction({
    name: 'Fulano',
    aspiration: 'JOGOS',
    cresceleons: 10500,
    time: 3600000,
    hygiene: 28,
    energy: 32,
    relationship: [],
    skill: 0,
    items: [],
    employee: {
      id: 1,
      office: 'Jogador de Dota', 
      category: 'JOGOS',
      salary: 160
    },
    ability: [
      {
        name: 'CULINARIA',
        skill: 0
      },
      {
        name: 'JOGOS',
        skill: 0,
        aspiration: true
      }
    ]
})