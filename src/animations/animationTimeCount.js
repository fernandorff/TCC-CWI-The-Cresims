import { theCresimsLogo } from "../allMenus/theCresimsLogo.js";

export const animationTimeCount = async (time, text) => {
  let count = 0;
  while (count <= time / 1000) {
    console.clear();
    console.log(`${await theCresimsLogo()}

${text}

${count} / ${time / 1000}
`);

    count = timeCount(count);
  }
};

const vstimeCount = (count) => {
  for (let index = 0; index < 1000000000; index++) {}

  return ++count;
};
