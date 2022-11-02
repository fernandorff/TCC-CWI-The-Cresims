function a(x) {
  switch (x) {
    case 1:
      return `、`;
    case 2:
      return `ヽ`;
    case 3:
      return `｀`;
  }
}

function r() {
  return Math.ceil(Math.random() * 3);
}

while (true) {
  console.log(`
${a(r())}${a(r())}${a(r())}${a(r())}${a(r())}${a(r())}__|__|     _
${a(r())}${a(r())},,,${a(r())}${a(r())}_|__|_    | |
${a(r())}<(u_u)>${a(r())}__|__| ___| |
${a(r())}${a(r())} |${a(r())}${a(r())}_|__|_(    .'
${a(r())}${a(r())} LL ${a(r())}${a(r())}__|__| )  (  
`);

  await new Promise((resolve) => setTimeout(resolve, 500));
  console.clear();
}
