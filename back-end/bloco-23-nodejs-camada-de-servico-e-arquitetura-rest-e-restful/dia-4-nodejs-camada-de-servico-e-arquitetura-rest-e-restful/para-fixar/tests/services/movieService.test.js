const  { expect } = require('chai'); // importando o expect do chai
const sinon = require('sinon');

const movieServices = require('../../services/movieServices');
const movieModels = require('../../models/movieModels');

// const MoviesService = {
//   create: () => {}, // service fake
// };

/*
  Precisamos validar se estamos recebendo todos os campos
  necessários para a operação. Como trata-se de uma regra
  de negócio, validaremos na camada de serviços.
*/
describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {}; // obj vazio para inserir no banco

    it('retorna um boolean', async () => {
      const response = await movieServices.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await movieServices.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow', // obj que vou "inserir" no banco
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;
      sinon.stub(movieModels, 'create'). resolves({id: ID_EXAMPLE})
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      movieModels.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await movieServices.create(payloadMovie); // aqui manda

      expect(response).to.be.a('object'); // espera que o retorno seja um obj
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await movieServices.create(payloadMovie); 

      expect(response).to.have.a.property('id'); // e que posssua um id
    });

  });
});