const readline = require("readline-sync");

const PESO_PADRAO_EM_KG = readline.questionFloat("Quanto cê pesa? ");
const ALTURA_PADRAO_EM_CM = readline.questionFloat("Qual é a sua altura? "); 

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}


function main() {
  const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

// module.exports = {
//   main
// }