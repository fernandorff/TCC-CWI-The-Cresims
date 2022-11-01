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
${a(r())}${a(r())}${a(r())}${a(r())}${a(r())}${a(r())}
${a(r())}${a(r())},,,${a(r())}${a(r())}
${a(r())}<(u_u)>${a(r())}
${a(r())}${a(r())} |${a(r())}${a(r())}
${a(r())}${a(r())} LL ${a(r())}${a(r())}
`);

  await new Promise((resolve) => setTimeout(resolve, 500));
  console.clear();
}
