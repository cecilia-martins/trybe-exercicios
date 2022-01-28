const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
//pegando o input
const input = document.getElementById('input');
//pegando o h3
const myWebpage = document.getElementById('my-spotrybefy');
//pegando a ul com o id container
const ul = document.getElementById('container'); //nem precisava kkkkkk


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//ISSO AQUI FAZ TOTAL SENTIDO NO PIXELS ART KKKKKKKK MDS
function addTech(event) {
//pega a class el
let classTech = document.querySelector('.tech'); //pegando a classe numa variavel
    classTech.classList.remove('tech'); //removendo a classe
    event.target.classList.add('tech'); //add a classe qnd ocorrer o evento
    // console.log(classTech);
    input.value = '';
} firstLi.addEventListener('click', addTech);
  secondLi.addEventListener('click', addTech);
  thirdLi.addEventListener('click', addTech);
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function alteraText(event) {
  let classTech = document.querySelector('.tech'); //pegando a classe de novo
  //o tech muda o texto pelo texto/valor do alvo do evento
  classTech.innerText = event.target.value; //valor do evento no input
} input.addEventListener('input', alteraText); //aqui add o escutado do evento input

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
function top3() {
// console.log('não reprovei carai');
location.assign("https://www.w3schools.com"); //assign é melhor que replace, pois dá pra voltar a pag anterior
}
myWebpage.addEventListener('dblclick', top3);
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function alteraCor() {

  myWebpage.style.color = "yellowgreen"; //alterou a cor ao passar com o mouse, porem não sai a cor com a saida do mouse...
}
myWebpage.addEventListener('mouseover', alteraCor);
//VOLTA A COR
function  voltarCor() {
  myWebpage.style.color = "unset"; //AGORA SIIMMMMMM <333
} myWebpage.addEventListener('mouseout', voltarCor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.