export const menuProductItens = async (character) => {
    const response = await itensSkillDataApi()
    const skillChoice = await skillChoiceProduct(response)
    const product = await productChoice(response, skillChoice)
  
    character = {
      ... await buyProductItens(character, product, skillChoice.toUpperCase())
    }
  
    console.log(character);
  }
  
  export const productChoice = async (response, skillChoice) => {
    const listItensSkill = response[skillChoice.toUpperCase()]
  
    listItensSkill.forEach(product => {
      console.log(product.id + " - " + product.nome)
    })
  
    const choice = await useQuestion('Escolha uma produto')
    return listItensSkill[choice - 1]
  }
  
  export const skillChoiceProduct = async (skills) => {
    const choiceAspiration = setAspiration('Escolha uma área de habilidade')
  
    return choiceAspiration
  }