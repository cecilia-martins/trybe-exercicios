//Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((names) => names.length === 5)
}

console.log(findNameWithFiveLetters());

//ESSE FOI ALELUIA
//PUTS NÃO FOI... EU TINHA COLOCADO >5 E DEU FERNANDO. MAS ERA PRA SER O PRIMEIRO COM 5 LETRAS E NÃO MAIS.
//FOI QUASE... SÓ TROCA O > POR ===