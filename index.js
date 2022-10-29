import { useQuestion } from './src/services/question/use-question'
import { useLocalStorage } from './src/services/local-storage/use-local-storage'

const setAspiration = async () => {
  while (true) {
    console.log("Qual a sua aspiração? ")
    
    console.log("1 - Gastronomia")
    console.log("2 - Pintura")
    console.log("3 - Jogos")
    console.log("4 - Jardinagem")
    console.log("5 - Música")

    const input = await useQuestion("Sua escolha: ")

    switch (input) {
      case "1":
        return "GASTRONOMIA"
      case "2": 
        return "PINTURA"
      case "3":
        return "JOGOS"
      case "4":
        return "JARDINAGEM" 
      case "5":
        return "MUSICA"
      default:
        console.log("Escolha uma das opções dadas acima")
    }
  }
}

const setCharacter = async () => {
  const name = await useQuestion("Qual o seu nome? ")
  const aspiration = await setAspiration()
  const cresceleons =  1.500
  const time = 3600000
  const hygiene = 28
  const energy = 32
  const relationship = []
  const skill = 0
  const items = []

  return {
    name, aspiration, cresceleons, time, 
    hygiene, energy, relationship, skill, items
  }
}

const menu = async () => {
  while (true) {
    console.log("Escolha uma das opções: ")
    console.log("1 - Criar Personagem")
    console.log("2 - Configurações")

    const input = await useQuestion("Sua escolha: ")

    switch (input) {
      case "1":
        return setCharacter()
      default:
          console.log("Escolha uma das opções dadas acima")
    }
  }
}

const main = async () => {
  const localStorage = useLocalStorage()
  
  const obj = await menu()
  
  const estorage = localStorage.getObject('nome-array') || []
  localStorage.setObject('caracteres', [ ...estorage, obj])
  
  console.log(localStorage.getObject('caracteres'))
}

main()