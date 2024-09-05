function checkFibonacci() {
  const input = document.getElementById('fibonacciInput').value;
  const number = parseInt(input);
  let a = 0,
    b = 1;

  while (a <= number) {
    if (a === number) {
      document.getElementById(
        'fibonacciResult',
      ).innerText = `O número ${number} pertence à sequência de Fibonacci.`;
      return;
    }
    [a, b] = [b, a + b];
  }
  document.getElementById(
    'fibonacciResult',
  ).innerText = `O número ${number} não pertence à sequência de Fibonacci.`;
}

function countA() {
  const input = document.getElementById('stringInput').value.toLowerCase();
  const count = (input.match(/a/g) || []).length;
  document.getElementById('stringResult').innerText =
    count > 0
      ? `A letra 'a' aparece ${count} vezes na string.`
      : "A letra 'a' não aparece na string.";
}

function calculateSoma() {
  let INDICE = 12,
    SOMA = 0,
    K = 1;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  document.getElementById(
    'somaResult',
  ).innerText = `O valor da variável SOMA é: ${SOMA}`;
}

function completeSequences() {
  document.getElementById('seqA').innerText = 9;
  document.getElementById('seqB').innerText = 128;
  document.getElementById('seqC').innerText = 49;
  document.getElementById('seqD').innerText = 100;
  document.getElementById('seqE').innerText = 13;
  document.getElementById('seqF').innerText = 200;
}

function solveSwitchProblem() {
  const solution = `
      Para descobrir qual interruptor controla qual lâmpada, faça o seguinte:
      1. Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
      2. Desligue o primeiro interruptor e ligue o segundo.
      3. Vá até a sala das lâmpadas.
      - A lâmpada que está acesa pertence ao segundo interruptor.
      - A lâmpada que estiver quente, mas apagada, pertence ao primeiro interruptor.
      - A lâmpada fria e apagada pertence ao terceiro interruptor.
  `;
  document.getElementById('switchProblemResult').innerText = solution;
}
