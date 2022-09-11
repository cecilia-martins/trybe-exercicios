// function losangoCalc(diagonalMaior: number, diagonalMenor: number): number {
//   return (diagonalMaior * diagonalMenor) / 2
// }

// gabarito
export function rhombus(D:number, d:number):number {
  return (d * D) / 2
}

function trapezio(altura: number, baseMaior: number, baseMenor: number): number {
  return ((baseMaior + baseMenor) * altura) / 2;
}


// function circulo(raio:number, n: number = 3.14) {
//   return raio  n;
// } // na minha cabeça fez sentido AAAAAAAAAAAAAAAA

// gabarito 
export function circle(radius:number):number {
  const PI:number = 3.14;
  return PI * radius ** 2
}