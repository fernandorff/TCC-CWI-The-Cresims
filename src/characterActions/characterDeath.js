import { useQuestion } from "../../services/question/use-question.js";

const epitafios = [
  "Aqueles que amamos nunca morrem, apenas partem antes de nós...",
  "Quando morreres, só levarás aquilo que tiveres dado...",
  "A saudade é o que faz as coisas pararem no tempo...",
  "Saudade: presença dos ausentes...",
  "Os teus dias duram por todas as gerações...",
  "Bem-aventurados os puros de coração, porque eles verão a Deus...",
  "O melhor ainda está por vir...",
  "Nunca foi um bom exemplo, mas era gente fina...",
];

export const characterDeath = async (character) => {
  console.clear();
  console.log(`



          -|-
           |             Aqui jaz ${character.name}...
       .-¯¯¯¯¯-.
     .'         '.    “${epitafios[Math.floor(Math.random() * 7)]}”
     |  R  I  P  |    
     |           |
     |           |  
     |           |  
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


`);
  await useQuestion(`Pressione ENTER para continuar...`);

  return character;
};
