import axios from "axios.js";

export const itensSkillDataApi = async () => {
  try {
    const response = await axios.get(
      "https://emilyspecht.github.io/the-cresim/itens-habilidades.json"
    );
    return response.data;
  } catch {
    console.error("Ocorreu um error ao acessar a API de itens")
  }
};

export const employeesDataApi = async () => {
  try {
    const response = await axios.get(
      "https://emilyspecht.github.io/the-cresim/empregos.json"
    );
    return response.data;
  } catch {
    console.error("Ocorreu um error ao acessar a API de empregos")
  }
};

export const interactionsDataApi = async () => {
  try {
    const response = await axios.get(
      "https://emilyspecht.github.io/the-cresim/interacoes.json"
    );
    return response.data;
  } catch {
    console.error("Ocorreu um error ao acessar a API de interações")
  }
};

export const cheatsDataApi = async () => {
  try {
    const response = await axios.get(
      "https://emilyspecht.github.io/the-cresim/cheats.json"
    );
    return response.data;
  } catch {
    console.error("Ocorreu um error ao acessar a API de cheats")
  }
};
