const operations = require('./operacoes');
const readline = require('readline-sync');

console.log("Calculadora simples");

const num1 = readline.questionInt("Digite um número: ");
const oper = readline.question("Digite a operação ( +, -, * ou /)");
const num2 = readline.questionInt("Digite mais um número: ");

switch (oper) {
  case '+':
      operations.sum(num1, num2)
    break;
  case '-':
      operations.sub(num1, num2)
    break;
  case '*':
      operations.mul(num1, num2)
    break;
  case '/':
      operations.div(num1, num2)
    break;
  default:
      console.log("Opaa! á operação é desconhecida ou não foi implementada.");
    break;
}
