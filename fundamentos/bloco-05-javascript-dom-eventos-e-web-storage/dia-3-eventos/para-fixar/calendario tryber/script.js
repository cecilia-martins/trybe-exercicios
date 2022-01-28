function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//pegando a ul/Days
let dias = document.getElementById('days');
//FUNÇÃO QUE ADICIONA OS DIAS
function eachDay() {
//o for passa por cada dia do array. cada array na posição, cria uma li.. em cada um adiciona a classe day. e por ultimo, dias/ul recebe cada um. :)
for(let posi = 0; posi < dezDaysList.length; posi += 1) {
//variavel que recebe o dia[posi]
  let dia = dezDaysList[posi];
  dezDaysList[posi] = document.createElement('li');
  dezDaysList[posi].classList.add('day');
  //add a visão 
  dezDaysList[posi].innerHTML = dia;
  dias.appendChild(dezDaysList[posi]);

//se o dia for igual ao X, ele recebe + uma classe
  if (dia == 24 || dia == 25|| dia == 31) {
    dezDaysList[posi].classList.add('holiday');
  } else if (dia == 4 || dia == 11 || dia == 18 || dia == 25) {
    dezDaysList[posi].classList.add('friday');
  } 
}
  // console.log(dias);
}

eachDay();

//FUNÇÃO DO BOTÃO FERIADOS
//pegando a div que vai ser o pai do botão
let divBtnContainer = document.querySelector('.buttons-container');

function botaoFeriados(button) {
  //criando o botão
let botaoHoliday = document.createElement('button');
  //dando nome ao botão?
    botaoHoliday.innerHTML = "Feriados";
  //adicionando id ao botão?
    botaoHoliday.id = "btn-holiday";
  //adicionando o botão a div pai
  divBtnContainer.appendChild(botaoHoliday);

  // console.log(botaoHoliday);
}
botaoFeriados('Feriados');

//pegando o botão de feriado
let button = document.getElementById('btn-holiday');
//FUNÇÃO QUE MUDA A COR DOS FERIADOS

function corFeriado() {
  //pegando todos os feriados
  let feriado = document.querySelectorAll('.holiday');
  // for(let posi = 0; posi < feriado.length; posi += 1) {
  //   //volta a cor
  // feriado[posi].style.backgroundColor = "white";
  // }

  // event.target.backgroundColor = "deeppink";
  
  //mudar de cor
  // feriados.style.backgroundColor = "deeppink"
  console.log(feriado);
}
button.addEventListener('click', corFeriado);