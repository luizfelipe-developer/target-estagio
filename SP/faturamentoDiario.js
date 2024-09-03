const faturamentoMensal = [
  {"dia": 1, "valor": 0},
  {"dia": 2, "valor": 120},
  {"dia": 3, "valor": 543},
  {"dia": 4, "valor": 0},
  {"dia": 5, "valor": 210},
  {"dia": 6, "valor": 800},
  {"dia": 7, "valor": 0},
  {"dia": 8, "valor": 258},
  {"dia": 9, "valor": 0},
  {"dia": 10, "valor": 0},
  {"dia": 11, "valor": 790},
  {"dia": 12, "valor": 0},
  {"dia": 13, "valor": 1000},
  {"dia": 14, "valor": 0},
  {"dia": 15, "valor": 0}
];

function calcularFaturamento(faturamento) {
  let valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0);
  let menorFaturamento = Math.min(...valores);
  let maiorFaturamento = Math.max(...valores);
  
  let somaFaturamento = valores.reduce((acc, val) => acc + val, 0);
  let mediaMensal = somaFaturamento / valores.length;

  let diasAcimaDaMedia = valores.filter(val => val > mediaMensal).length;

  return {
      menorFaturamento: menorFaturamento,
      maiorFaturamento: maiorFaturamento,
      diasAcimaDaMedia: diasAcimaDaMedia
  };
}

let resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);