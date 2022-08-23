const jwt = require("jsonwebtoken"); // importando o jwt

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET; // senha no .env
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' }; // options para criação/config do token

// recebendo o id como payload
const createToken = (payload) => {
  // a função sign, faz uma assinatura. E para gerar essa assinatura, precisamos do payload, senha e das options
    const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);
    // retorna token criado
    return token;
}

const verifyToken = (token) => {
  // verifica se o JWT é válido
  // faz a decodificação do token com base na senha,
    const payload = jwt.verify(token, JWT_SECRET);
  // retornando
    return payload;
}

module.exports = {createToken, verifyToken};