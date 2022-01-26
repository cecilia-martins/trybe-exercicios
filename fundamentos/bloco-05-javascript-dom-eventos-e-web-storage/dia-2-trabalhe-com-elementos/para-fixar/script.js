// arquivo script.js

console.log(document.getElementById('start').nextSibling); // nó

console.log(document.getElementById('start').nextElementSibling); // <p>elemento</p>

// ACESSANDO ELEMENTO ONDE VC ESTÁ
console.log(document.getElementById('primeiroFilho').nextElementSibling);

//ACESSANDO O PAI DE ONDE VC ESTA E ADD UMA COR A ELE

let pai = document.getElementById('elementoOndeVoceEsta').parentElement;
  pai.style.color = "red";
console.log(pai);

//ACESSANDO O PRIMEIRO FILHO DO FILHO E ADD TEXTO

let filhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
  filhoDoFilho.innerText = "Adicionado um texto a ele";
console.log(filhoDoFilho);

//ACESSE O PRIMEIRO FILHO A PARTI DE PAI

let firstSon = document.getElementById('pai').firstElementChild;

console.log(firstSon);

//ACESSANDO PRIMEIRO FILHO A PARTIR DE ONDE VC ESTA

console.log(document.getElementById('elementoOndeVoceEsta').previousSibling);
//ACESSANDO O TEXTO ATENÇÃO A PARTIR DE ONDE VC ESTÁ

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

//ACESSANDO TERCEIRO FILHO A PARTIR DE ONDE VC ESTA

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

//ACESSANDO CERTCEIRO FILHO A PARTIR DE PAI

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);

//CRIE UM IRMÃO PARA ONDE VC ESTÁ
//primeiro pego o elemento em q vou add um elemento filho
let ondeVcEsta = document.getElementById('elementoOndeVoceEsta').parentElement;
//crio o elemento que vou add
let ondeEstaIrmao = document.createElement('p');
//aqui add o elemento criado ao elemento ondeVcEsta
ondeVcEsta.appendChild(ondeEstaIrmao);
//aqui add texto ao elemento criado
ondeEstaIrmao.innerText = "paragrafo irmão do ONDE VC ESTA"
//imprime o elemento criado no console
console.log(ondeEstaIrmao);

//CRIANDO UM FILHO PARA O ONDE VC ESTA
let ondeCeTa = document.getElementById('elementoOndeVoceEsta');

let ondeTafilho = document.createElement('p');

ondeTafilho.innerText = "add filho pro onde ce ta";

ondeCeTa.appendChild(ondeTafilho);

console.log(ondeTafilho);
//CRIANDO FILHO PARA O FILHO DO FILHO KKKKKKK Q CONFUSO MDS
let fiDoFiEl = document.getElementById('primeiroFilhoDoFilho');

let fiDoFiCriado = document.createElement('p');

fiDoFiCriado.innerText = "filho do primeiro filho do filho kkkkkkkkkkkkkk";

fiDoFiEl.appendChild(fiDoFiCriado);

console.log(fiDoFiCriado);

//A PARTIR DO FILHO CRIADO... ACESSE O TERCEIRO FILHO?
console.log(fiDoFiCriado.parentElement.parentElement.nextElementSibling) ///com ajuda + foi. Mas a logica tava certa

//remover todos os filhos do paidopai, menos o pai, onde vc esta e primeirofidofi

//pegando o pai
let pai = document.getElementById('pai');

for(let i = pai.childNodes.length -1; i += 0; i +=1) {
  let filhoAtual = pai.childNodes[i];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
let ultimoFi = document.getElementById('segundoEUltimoFilhoDoFilho');
  ultimoFi.remove();