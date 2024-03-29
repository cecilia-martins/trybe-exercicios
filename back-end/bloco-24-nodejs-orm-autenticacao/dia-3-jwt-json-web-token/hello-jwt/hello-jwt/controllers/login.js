const router = require('express').Router();
// const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { createToken } = require('../helpers/token');

// const SECRET = process.env.JWT_SECRET;
// const CONFIG = { algorithm: 'HS256', expiresIn: '1d' };
// const PAYLOAD = { username: req.body.username, admin: false };
// const regexStr = '^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$'; // https://acervolima.com/como-verificar-se-a-string-e-alfanumerica-ou-nao-usa-expressao-regular/#:~:text=Uma%20string%20alfanum%C3%A9rica%20%C3%A9%20uma,alguns%20n%C3%BAmeros%20de%200%2D9.&text=Explica%C3%A7%C3%A3o%3A,Portanto%2C%20%C3%A9%20uma%20string%20alfanum%C3%A9rica.

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  /* Estamos usando o método messages() para customizar as mensagens de erro das validações */
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
    .messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

router.post('/', (req, res, next) => {
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
  const PAYLOAD = { username: req.body.username, admin };
  const { error } = validateBody(req.body);
  // console.log(admin);
  if (error) return next(error);

  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    /* Criamos um novo objeto de erro */
    const err = new Error('Invalid username or password');
    /* Adicionamos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* Passmos o erro para o express, para que seja tratado pelo middleware de erro */
    return next(err);
  }

  const token = createToken(PAYLOAD);
  
  return res.status(200).json({ token });
});

module.exports = router;
