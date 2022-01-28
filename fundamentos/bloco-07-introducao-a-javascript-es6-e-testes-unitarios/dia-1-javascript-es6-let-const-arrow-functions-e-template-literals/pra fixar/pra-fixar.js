const produto = { id : 1, nome : 'Grampo', preco : 34.6 }

const descricao = `${produto.nome} por apenas R$ ${produto.preco}`

console.log(descricao); // Grampo por apenas R$ 34.6
// console.log(produto);

const texto = `Amor é fogo que arde sem se ver
É ferida que dói e não se sente`
console.log(texto);

const data = new Date(1534342979126) // 15/08/2018 as 11:22:59

const mensagem = `O sistema foi iniciado as ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

console.log(mensagem) // O sistema foi iniciado as 11:22:59 

minhaFunction = (arrayDeStrings, palavra) =>{
  console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
}

const palavra = 'alura';

minhaFunction`Eu estudo na ${palavra} todos os dias`;