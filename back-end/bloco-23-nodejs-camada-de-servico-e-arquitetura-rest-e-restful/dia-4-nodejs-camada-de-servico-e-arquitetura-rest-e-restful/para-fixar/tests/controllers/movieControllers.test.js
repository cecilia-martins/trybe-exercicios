const sinon = require('sinon'); // importando o sinon
const { expect } = require('chai'); // eo expect do chai

const movieController = require('../../controllers/movieController'); // importa o controller original
const movieService = require('../../services/movieServices');

// const MoviesController = {
//   create: () => {} // fakeando o controller
// };

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {}; // criando res como obj vazio
    const request = {}; // eo req tbm

    before(() => {
      request.body = {};

      response.status = sinon.stub() // simulando o res
        .returns(response);
      response.send = sinon.stub() // simulando o res
        .returns();

      /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `false`.
      */
      sinon.stub(movieService, 'create').resolves(false);
    });

    // Restauraremos a função `create` original após os testes.
    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await movieController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie', // inserindo no corpo da requisição o obj que quero fakear/pegar
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      /*
        Aqui, todos os testes que requisitarem o serviço, devem receber
        retorno `true`.
      */
        sinon.stub(movieService, 'create')
        .resolves(true);      
    });

    after(() => {
      movieService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await movieController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await movieController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});