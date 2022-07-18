const { expect } = require('chai'); // importando o expect
const sinon = require('sinon'); // importando o sinon
const moviesModel = require('../../models/movieModels');
const connection = require('../..//models/connection');


/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {} // fakeando um Model
// };

describe('Insere um novo filme no BD', () => { // iniciando teste - DESCRIBE principal
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow', // obj mockado - que espero de retorno
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute); // stab executando a conexão e resolvendo o obj-mock que passei
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {  // testando função de add algo ao db

    it('retorna um objeto', async () => {
      const response = await moviesModel.create(payloadMovie); // chamando a Model fake e passando o obj mockado

      expect(response).to.be.a('object'); // se a função retorna um obj
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await moviesModel.create(payloadMovie); // mesma coisa aqui... 

      expect(response).to.have.a.property('id'); // espera que o retorno tenha a um id :)
    });

  });
});