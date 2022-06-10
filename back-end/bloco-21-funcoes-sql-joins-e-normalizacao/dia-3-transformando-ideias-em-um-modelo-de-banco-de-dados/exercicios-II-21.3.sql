CREATE DATABASE exercicioBloco21;

CREATE TABLE residencia(
	residencia_id INT AUTO_INCREMENT PRIMARY KEY,
    residencia_locador VARCHAR(30),
    endereco VARCHAR(30),
    numero INT,
    cidade VARCHAR(30),
    estado VARCHAR(20)
);

SELECT * FROM residencia;

CREATE TABLE inquilino(
	inquilino_id INT,
    residencia_id INT AUTO_INCREMENT PRIMARY KEY,
    inquilino_nome VARCHAR(30),
    FOREIGN KEY (residencia_id) REFERENCES residencia(residencia_id)
);
SELECT * FROM inquilino;
