interface ICalcularIdade {
  nome: string,
  nascimento: number,
  profissao?: string, // parametro opcional - add interrogação
}


// function somar(num: number) {
//   return num + 1;
// };

// console.log(somar(6));


// function calcularIdade(nome: string, nascimento: number): string {
//   const idade: number = 2022 - nascimento;
//   return `Seu nome é ${nome} e você tem ${idade} anos de idade`;
// };

function calcularIdade({ nome, nascimento, profissao }: ICalcularIdade): string {
  const idade: number = 2022 - nascimento;
  return `Seu nome é ${nome} e você tem ${idade} anos de idade`;
};

console.log(calcularIdade({ nome: 'fulano', nascimento: 1996 }));


// function exemplo(): boolean { // tipando o retorno da função como um boleano
//  return true; // só aceitará retornar booleanos
// }

