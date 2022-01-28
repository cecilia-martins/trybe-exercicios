let testingScope = escopo =>{
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  ////////////////////////////////////////////////////////////////////////////////////
// ARRAY DE NUMEROS 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];  

//ARRAY FUNCTION
/////NOME DA FUNCTION
//////////////////////PARAMETRO DA FUNÇÃO
const sortOddsAndEvens = () => {
  //PEGANDO CADA POSIÇÃO DO ARRAY E ORDENANDO
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  //RETORNANDO 
  return oddsAndEvens;
}
//ATRIBUINDO A CHAMADA DA FUNÇÃO A UMA VARIAVEL-Q NA VDD É UMA CONSTANTE, MAS EU CHAMO DE VARIAVEL PQ SIM KK
const sortedArray = sortOddsAndEvens(); //NUMEROS TD ORDENADO
//"IMPRIMINDO" A FRASE PEDIDA, USANDO UM TAMPLATE LITERALS 
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
// arrow function
const numeroReturn = (numero) => {
  //o tal do fatorial começa do 1?
  let resultado = 1;
  //passa pelo parametro e...
  for (let i = 2; i <= numero; i += 1) {
  // resultado vezes o index
    resultado *= i;
  }
  return resultado;
}
console.log(numeroReturn(5));

////recursiva...
//arrow function recebe numero.. se o numero for maior q 1..
//vai retornar o numero vezes fatorial vezes (numero menos um)?????
//se não, retorna 1 :)
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); //imprime o fatorial de 5


//arrow function
///////////////////parametro
const longestWord = text => {
  //a variavel recebe o parametro - os espaços. ou seja, vai separar as palavras... vai virar um array
  let wordArray = text.split(' ');
  //a variavel tem o valor de 0/ta "vazia", aqui é number
  let maxLength = 0;
  //e o resultado tbm, mas é uma string
  let result = '';
  //for pra passar pelo array q o prametro virou depois do split
  for (const word of wordArray) {
    //se o tamanho da palhavra for maior que essa variavel
      if (word.length > maxLength) {
        //então a variavel recebe o tamanho da palavra
          maxLength = word.length;
          // e resultado recebe a palavra em si
          result = word;
      }
  }

  return result; //retornando
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));