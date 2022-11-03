export const animationTimeCount = async (time, text) => {
    let count = 0;
    while (count <= time / 1000) {
      console.clear();
      console.log(`\x1b[33m${text} --> ${count} | ${time / 1000}\x1b[0m`);
      count = timeCount(count);
    }
  };
  
  const timeCount = (count) => {
    for (let index = 0; index < 1000000000; index++) { }
  
    return ++count;
  };