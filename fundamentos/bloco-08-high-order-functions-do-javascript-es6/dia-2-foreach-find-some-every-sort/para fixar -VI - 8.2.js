// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },

//   { name: 'Bruna', age: 19 },
// ]
// people.age.sort((a, b) => people.age - personB);
// console.log(people);
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((personA, personB) => personA.age - personB.age);

console.log(people);

//finalmente.. por algum motivo nem meu codigo nem o do course estava funcionando