// type Exemplo = {
//   name: string;
//   ttt: string;
//   outroExemplo: number;
//   // ... e por ai vai
// }

interface Exemplo {
  name: string;
  massa: number;
  ttt: boolean;
  outraCoisa: string;
}

interface OutroExemplo extends Exemplo {
  //..
}

let tttt: Exemplo;

tttt.massa = 90;


class NomeDaClasse implements UmaInterface {
  // ...
}

