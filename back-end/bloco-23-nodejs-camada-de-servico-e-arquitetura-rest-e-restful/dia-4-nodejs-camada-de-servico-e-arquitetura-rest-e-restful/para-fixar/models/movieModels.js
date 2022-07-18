const connection = require('./connection'); // importando a conexão criada

const create = async ({ title, directedBy, releaseYear }) => { //
  const [result] = await connection // executa a conexão passando a query de insert 
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId, // retorna um obj com id
  };
};

module.exports = {
  create,
};