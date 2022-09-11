function sendSpaceship(spaceship: { piloto: string, copilot?: string}) { // ? - o torna opcional ou seja, pode esta presente......ou não
  //...
}

sendSpaceship({ piloto: 'piloto', copilot: 'copito' });

sendSpaceship({ piloto: 'piloto' }); // reclamando pois um segundo argumento é obrigatorio

sendSpaceship({ piloto: 'piloto' }); // parou pois agr o segundo argumento é opcional


let input: unknown // tipo desconhecido 
// se eu tentar atribuir string, number e etc, ele vai aceitar
input = 'ttt';
input = 9;
input = true;

let exemplo2: any // qualquer tipo // não é recomendado... 


// retorno do tipo never?
// serve pra indicar que o valor ta errado/não deveria existir



