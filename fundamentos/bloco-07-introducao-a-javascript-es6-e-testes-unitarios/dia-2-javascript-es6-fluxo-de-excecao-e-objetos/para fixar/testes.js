// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2,3));
//arrow function com dois parametros
// const sum = (value1, value2) => {
//   //se o tipo do valor um for diferente do de number
//   //ou se o tipo do valor dois for diferente de number
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     return 'Os valores devem ser numéricos'; //esse vai ser o retorno
//   }
//   return value1 + value2; //se passar pelo if acima, esse é o retorno
// };

// console.log(sum(2, '3'));

//FUNÇÃO DO THROW

// const sum = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
//   return value1 + value2;
// };

// console.log(sum(2, '3'));

//função q verificar se é um número - com dois parametros
const verifyIsNumber = (value1, value2) => {
  //novamente se não forem numeros...
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    //lançando o erro..?
    throw new Error('Os valores devem ser numéricos');
  }
};

//função de soma - com dois parametros
const sum = (value1, value2) => {
  //tentando executar o codigo 
  try {
    //chamando a função criada acima
    verifyIsNumber(value1, value2);
    //retornando a soma dos parametros, pois essa era a função
    return value1 + value2;
    //esse catch "pega" o erro..caso ocorra
  } catch (error) {
    throw error.message; //acho que está chamando a msg lá de cima?
  }
};

console.log(sum(2, '3'));