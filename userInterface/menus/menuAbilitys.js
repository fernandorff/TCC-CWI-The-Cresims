import { useQuestion } from "../../services/question/use-question.js";

export const menuAbilitys = async (text) => {
  let menuAbilitysDisplay = true;
  while (menuAbilitysDisplay == true) {
    const input = await useQuestion(`
${text}
1.  Gastronomia
2.  Pintura
3.  Jogos
4.  Jardinagem
5.  Musica
X.  Voltar ao menu principal
Sua escolha:`);
    console.log("\x1Bc");

    switch (input) {
      case "1":
        return "GASTRONOMIA";
      case "2":
        return "PINTURA";
      case "3":
        return "JOGOS";
      case "4":
        return "JARDINAGEM";
      case "5":
        return "MUSICA";
      case "x":
        return "x";
      case "X":
        return "X";
      default:
        console.log("### Escolha uma opção válida ###");
    }
  }
};
