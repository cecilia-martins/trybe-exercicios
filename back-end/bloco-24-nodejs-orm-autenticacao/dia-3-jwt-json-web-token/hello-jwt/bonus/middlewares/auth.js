const jwt = require("jsonwebtoken");
const tokenHelper = require("../helpers/token");

const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers; // na authorization ficar os dados enviados para gerar o token
    // nesse caso, o id
    try {
      // enviando o payload para verificação 
        const dataToken = tokenHelper.verifyToken(authorization);
        // se tudo certo, ele envia no req para usar depois
        req.userId = dataToken.id;
        // Caso o verifyToken não consiga decodificar o token, irá gerar um erro.
        // Em seguida, chamamos a função next que passa para o próximo estágio de execução das funções
        next();
    } catch (error) {
        res.status(401).json({message: 'Você não deveria estar aqui'});
    }
}

module.exports = tokenValidation;