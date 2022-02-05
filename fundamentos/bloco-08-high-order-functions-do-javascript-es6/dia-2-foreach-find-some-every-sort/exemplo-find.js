const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0; //funçãoo

const isEven = numbers.find(verifyEven); //chamando a função para cada elemento. Vai pegar o primeiro elemento q for divisivel por 2 e atribuir ao isEven

console.log(isEven); // 30 é primeiro elemento da lista q é divisivl por 2.


// testando com outros numeros
console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0); //fica menos confuso fazendo como está lá em cima

console.log(isEven2); // 30