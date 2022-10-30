export const menuEmployee = async (character) => {
    const response = await employeesDataApi()
    printEmployes(response)
    const choice = await useQuestion('Escolha um cargo')
  
    character = {
      ... await setEmployee(character, response[choice - 1].cargo)
    }
  
    console.log(character);
  }
  
  export const printEmployes = (employees) => {
    employees.forEach(employee => {
      console.log(employee.id + ' - ' + employee.cargo);
    })
  }