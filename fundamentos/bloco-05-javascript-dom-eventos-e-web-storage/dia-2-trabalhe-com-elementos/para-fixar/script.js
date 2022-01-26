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