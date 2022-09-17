const Joi = require('joi');

const obj = {
  name: 'Klaus',
  age: 26,
  email: 'klausgato@gato.com',
  password: 'klauseumgato',
  // color: 'black'
};

// const schemaUser = Joi.object({
//   name: Joi.string().min(3).max(30).required(), // propiedade name do meu obj, tem que ser uma string, com no minimo 3 caracteres e no maximo 30, é obrigatoria
//   age: Joi.number().min(18).max(30).required(),// same de cima - mas esse sendo um number
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).max(12).required(), // dá pra usar regex
// }).required({
//   'any.require': 'O campo {#label}',
// });

// persaonalizando msg de erro usando o messages *no plural
const schemaUser = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.empty': 'Não pode está vazio',
    'string.min': 'No minimo 3',
    'string.max': 'No maximo 30',
  }),
  age: Joi.number().min(18).max(30).required(),// 
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(), //
}).required({
  'any.require': 'O campo {#label}',
});

const { error } = schemaUser.validate(obj); // valide o obj criado


console.log(error.details[0].message);