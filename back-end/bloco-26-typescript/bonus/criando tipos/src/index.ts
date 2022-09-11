let literal: "Hellou uordi";
let pi: 3.14159;

literal = "blablabla"; // não pode ser atribuido... não pode receber nenhum outro valor
pi = 87; // idem

const ttt = 5;

// tipo literal não pode ser reatribuido?

let option: "yes" | "no"; // union types.. option recebe esse valor OU esse valor

let option2: number | boolean; // 

option2 = 8; // aceita
option2 = true; // aceita
option2 = "qualquer coisa"; // não aceita.. pois tipei com number OU boolean?

// reutilizar tipos? 

// ALIAS
// dá pra criar alias em funções

type GreetingCallback = (name: string) => void;

function greet(callbackfn: GreetingCallback) {
  callbackfn("string esperada :)");
}