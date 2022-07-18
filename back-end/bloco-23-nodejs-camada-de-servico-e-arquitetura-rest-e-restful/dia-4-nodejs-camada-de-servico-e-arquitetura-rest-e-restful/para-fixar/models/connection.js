const mysql = require('mysql2/promise'); // importando o mysql2 - com promise

const connection = mysql.createPool({ // creando a conexão
  host: 'localhost',
  user: 'root',
  password: '44fb288c',
  database: 'model_example'});

module.exports = connection;