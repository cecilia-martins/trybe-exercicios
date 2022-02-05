// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];


// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// //NÃO SEI O QUE ESTÁ ACONTECENDO AAAAAAAAAAAAAAAAAAAAAAAAAAAA :(

  const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).some((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

  //continuo sem entender :((((((( AAAAAAAAAAAAAAAAAAAAAAAAAA 
  //SÓ ENTENDI DE TROCANDO O EVERY PELO SOME DÁ VERDADEIRO.. PQ O EVERY PRECISA Q TODOS SEJAM TRUE...ACHO... E O SOME SÓ PRECISA DE UM 