import { buyProductItens, cicleTrainCharacterProductPurchased, isBuy } from "../src/characterActions/skill-aspiration"
import { itensSkillDataApi } from "../src/services/api/app"

let character, itensSkill

beforeAll(async () => {
  itensSkill = await itensSkillDataApi()
})

beforeEach(() => {
  character = {
    name: 'Fulano',
    aspiration: 'JOGOS',
    cresceleons: 10500,
    time: 3600000,
    hygiene: 28,
    energy: 32,
    relationship: [],
    skill: 0,
    items: []
  }
})

describe('Exemplo teste suite', () => {
  it('Exemplo', () => {
    expect(true).toBeTruthy()
  })
}
)

describe('5 - Habilidades e aspirações', () => {
  it('Deve conseguir comprar um item de habilidade', () => {
    const product = itensSkill[character.aspiration]
    const productChoice = product[0]

    const characterBuys = buyProductItens(character, productChoice)

    const itemPurchased = characterBuys.items
    const itemPurchasedExpected = ['Mouse com led']


    expect(itemPurchased).toEqual(itemPurchasedExpected)
  })

  it('Deve validar ao tentar comprar um item de habilidade sem Cresceleons suficientes', () => {
    const product = itensSkill[character.aspiration]
    const productChoice = product[0]

    const cresceleons = 1500
    const boolean = isBuy(cresceleons, productChoice.preco)

    expect(boolean).not.toBeTruthy()
  })

  it('Deve conseguir concluir um ciclo de treino com habilidade que não é aspiração e receber os pontos corretamente', () => {
    const product = itensSkill['GASTRONOMIA']
    const productChoice = product[1]

    const characterBuys = buyProductItens(character, productChoice)

    const pointSkill = characterBuys.skill
    const pointSkillExpected = 5

    expect(pointSkill).toBe(pointSkillExpected)

  })

  it('Deve conseguir concluir um ciclo de treino com habilidade que é sua aspiração e receber os pontos corretamente', () => {
    const product = itensSkill[character.aspiration]
    const productChoice = product[0]

    const characterBuys = buyProductItens(character, productChoice, 'JOGOS')

    const pointSkill = characterBuys.skill
    const pointSkillExpected = 3

    expect(pointSkill).toBe(pointSkillExpected)
  })

  it('Deve perder pontos de energia ao terminar um ciclo de treino', () => {

  })

  it('Deve perder pontos de higiene ao terminar um ciclo de treino', () => {

  })

  it('Deve avançar o nivel de habilidade quando completar os pontos necessarios', () => {

  })
})








