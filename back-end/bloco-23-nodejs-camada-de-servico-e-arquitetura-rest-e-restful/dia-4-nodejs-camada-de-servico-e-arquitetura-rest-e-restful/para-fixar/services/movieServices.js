const moviesModels = require('../models/movieModels'); // importando o model

const isValid = (title, directedBy, releaseYear) => { // validações
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear); // validando

  if (!isMovieValid) return false;

  const { id } = await moviesModels
    .create({ title, directedBy, releaseYear }); // mandando pro model inserir

  return {
    id,
  };
};

module.exports = {
  create,
};