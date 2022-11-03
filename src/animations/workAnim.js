import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";
import { useQuestion } from "../services/question/use-question.js";

export const workAnim = async (character, display) => {
  if (display == true) {
    console.clear();

    console.log(`
${await theCresimsLogo()} 

 ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ   

   ,,,,    
  (⚆_⚆  
   /|>   
    LL    

       1 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°
          
      ,,,,    
     (⚆_⚆  
      <|v   
      L L   
      
       2 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆  
          
         ,,,,    
        (⚆_⚆  
         /|>   
          LL    

       3 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ 
          
            ,,,,    
           (⚆_⚆  
            <|v   
            L L    

       4 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺
          
               ,,,,    
              (⚆_⚆  
               /|>   
                LL    

       5 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

 ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡
          
                  ,,,,    
                 (⚆_⚆  
                  <|v   
                  L L    

       6 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ
          
                     ,,,,    
                    (⚆_⚆  
                     /|>   
                      LL    

       7 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°
          
                        ,,    
                       (⚆  
                        <|   
                        L   
                        
       8 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

⁺₊⋆ ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆
          
                       
                     
                      
                          

       9 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.clear();

    console.log(`
${await theCresimsLogo()}

 ☀︎ ⋆⁺₊⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆
          
                       
                     
                      

 
       10 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺
          
                        ,,    
                        x.  
                        ~|   
                        ⅃     
                        
       11 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺
          
                     ,,,,    
                     x.x)  
                     ─|~   
                     ⅃⅃    
                     
       12 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎
          
                  ,,,,    
                  x.x)  
                  ~|─   
                  ⅃ ⅃     
                  
       13 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎
          
               ,,,,    
               x.x)  
               ─|~   
               ⅃⅃    
               
       14 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎
          
            ,,,,    
            x.x)  
            ~|─   
            ⅃ ⅃     
            
       15 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆
          
         ,,,,    
         x.x)  
         ─|~   
         ⅃⅃      

       16 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

 ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎
          
      ,,,,    
      x.x)  
      ~|─   
      ⅃ ⅃      

       17 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ
          
   ,,,,    
   x.x)  
   ─|~   
   ⅃⅃      

       18 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡
          
 ,,,,    
 x.x)  
 ~|─   
 ⅃ ⅃     
 
       19 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();

    console.log(`
${await theCresimsLogo()}

☁︎-₊⋆⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°
          
,,,    
.x)  
|~   
⅃     

       20 / 20

${character.name} está trabalhando.
`);
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.clear();
    await useQuestion(`
${await theCresimsLogo()}

⁺₊⋆ ☀︎ ⋆⁺⋆-ﾟ☁︎｡ﾟ☁︎｡ﾟ ﾟ☁︎｡ﾟ°☁︎-₊⋆
          
    
  
  
 

       20 / 20

${character.name} terminou de trabalhar!


Pressione ENTER para continuar...
`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};
