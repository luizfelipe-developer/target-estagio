function fibonacci(numero) {

  let primeiroNum = 0;
  let  segundoNum = 1;
  let proxSequencia = 0;

  while (proxSequencia < numero) {
    proxSequencia = primeiroNum + segundoNum
    primeiroNum = segundoNum;
    segundoNum = proxSequencia;
  }

  let verificaFibonacci = (proxSequencia===numero) ? `O número ${numero} pertence à sequência de Fibonacci`:`O número ${numero} não pertence à sequência de Fibonacci.`;

  return console.log(verificaFibonacci);
}

 fibonacci(1)