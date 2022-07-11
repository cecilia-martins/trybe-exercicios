const mysql = require('mysql2/promese');
const app = require('express')();

const book = require('./models/book.js');

app.get('/books', async (req, res) => {
  const books = await book.getAll();

  return res.status(200).json(books);
})

const connection = mysql.createPool({
  host: 'localhost',
	user: 'root',
	password: 'senha123',
	database: 'model_example' 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

module.exports = connection;


