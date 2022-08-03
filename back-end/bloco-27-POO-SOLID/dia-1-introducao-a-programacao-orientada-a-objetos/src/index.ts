import Conta from "./class/Conta";
import Pagamento from "./class/Pagamento";

const conta: Conta = new Conta(150);
// conta._saldo = 160 // eu poderia fazer isso, se o atributo q quero não fosse privado
// mas isso não seria uma boa pratica

const today: Date = new Date();
///////////////////////////// aqui recebe um obj do tipo conta
const pagamentoCartao = new Pagamento(conta, 100, 'Cartão', today);
pagamentoCartao.valor = 300; // assim é set - é set qnd tem parametro
pagamentoCartao.descricao = 'testando' // set
console.log('-------------------------------------------------');
console.log('O valor do pagamaneto é ', pagamentoCartao.valor); // get
console.log('Amulta é ', pagamentoCartao.multa); // get
console.log('O vencimento é ', pagamentoCartao.vencimento); // get
console.log('A descrição ', pagamentoCartao.descricao); // get
console.log('O tipo é ', pagamentoCartao.tipo); // get

// pagamentoCartao.valor = 300; //  set
