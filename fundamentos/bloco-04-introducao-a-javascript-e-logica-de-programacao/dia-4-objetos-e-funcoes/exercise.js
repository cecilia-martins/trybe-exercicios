//let diasDaSemana = {
//    : 'domingo',
//    : 'segunda',
//    : 'terça',
//    : 'quarta',
//    : 'quinta',
//    : 'sexta',
//    : 'sábado',
//    };
//    
//  diasDaSemana.3; // SyntaxError: Unexpected number
//    console.log(diasDaSemana['3']); // domingo

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4