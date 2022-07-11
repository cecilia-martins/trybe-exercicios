const mysql = require('mysql2/promise'); 

const connection = mysql.createPool({ // criando uma conexão :)))))
	host: 'localhost',
	user: 'root',
	password: '44fb288c',
	database: 'model_example' }); // nome do banco a conectar

module.exports = connection;