const clouds = async (cloudId) => {
  switch (cloudId) {
    case 1:
      return `˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡`;

    case 2:
      return `⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚`;

    case 3:
      return `｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆`;

    case 4:
      return `｡ ﾟ☾ ﾟ｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆`;

    case 5:
      return `｡⋆*✧˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ`;

    case 6:
      return `˖°☁︎｡˖⁺｡˚⋆˙♥️⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆*✧`;
  }
};

const zZz = async (zZzId) => {
  switch (zZzId) {
    case 1:
      return `z  `;
    case 2:
      return `zZ `;
    case 3:
      return `zZz`;
  }
};

export const sleepAnimation = async () => {
  for (let i = 1; i < 7; i++) {
    for (let j = 1; j < 4; j++) {
      console.log(`
${clouds(i)}
         .           .
      .  |,,,_______/|
  ${zZz(j)}   | (u_u)/    .//| ${zZz(j)}
      |/___/______|//! 
      |___________|/
      !           !
`);
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.clear();
    }
  }
};
