function sum(a, b) {
  //se o tipo da parametro a não um numero ou do b
  if (typeof a !== 'number' || typeof b !== 'number') {
    //vai "chamar" um erro?
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;  // fazendo ligação com o outro arquivo onde fica os testes