export const menuAbilitys = async () => {
    while (true) {
        const input = await useQuestion(`
    Escolha uma das habilidades a seguit:
    1.  Gastronomia
    2.  Pintura
    3.  Jogos
    4.  Jardinagem
    5.  Musica

    Sua escolha:`);

        switch (input) {
            case "1":
                console.clear();
                return "GASTRONOMIA";
            case "2":
                console.clear();
                return "PINTURA";
            case "3":
                console.clear();
                return "JOGOS";
            case "4":
                console.clear();
                return "JARDINAGEM";
            case "5":
                console.clear();
                return "MUSICA";
            default:
                console.clear();
                warningMessage = `
        ### Escolha uma opção válida ###
        `;
            break;
        }
    }
}