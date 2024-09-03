const faturamentoMensal = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

function calcularPercentual(faturamento) {
  const faturamentoTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  let percentual = {};

  for (let estado in faturamento) {
    percentual[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2);
  }

  return percentual;
}

const percentual = calcularPercentual(faturamentoMensal);

for (let estado in percentual) {
  console.log(`O percentual de representação de ${estado} é: ${percentual[estado]}%`);
}