
type Bird = {
  wings: 1;
  beaks: 2;
  biped: 3;
}

type DoisGenerics = {
  a: number;
  b: number;
}

function soma(ttt: DoisGenerics) {
  return ttt.a + ttt.b;
}

type Soma = (a: number, b: number) => number; // gabarito


type Address = {
  Street: number;
  House: number;
  ttt: string;
  city: string;
  state: string;
}

