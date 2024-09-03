function verificarLetraA(str) {
  let contagem = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === 'A') {
      contagem++;
    }
  }
  if (contagem > 0) {
    return `A letra "a" aparece ${ contagem } vezes em "${texto}" `;
  } else {
    return `A letra "a" não aparece em "${texto}"`;
  }
}

let texto = "Target SISTEMAS";
console.log(verificarLetraA(texto));