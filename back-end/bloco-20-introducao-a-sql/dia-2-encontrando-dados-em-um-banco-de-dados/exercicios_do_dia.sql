SELECT 'Olá, bem-vindo ao SQL';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvimento Web' AS profissao;

SELECT 'Cecília' AS meu_nome;
SELECT 'Cecília' AS nome, 'Martins' AS sobrenome, 'Brasilia' AS cidade_natal, 25 AS idade;

SELECT 13 * 8 AS resultado;
SELECT now() AS data_atual;


--

USE sakila;
SELECT * FROM sakila.film;
SELECT * FROM sakila.city;
SELECT first_name, last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title AS titulo, description AS descricao ,release_year AS data_lancamento FROM sakila.film;

-- CONCAT()
SELECT CONCAT(first_name, ' ', last_name) AS nome_completo FROM sakila.actor;

SELECT CONCAT(title, ' ', release_year) AS lancamento_do_filme FROM sakila.film;
SELECT CONCAT(title, ' ', rating) AS classificacao FROM sakila.film;

SELECT * FROM sakila.address;
SELECT CONCAT(address, ' ', district) AS endereco FROM sakila.address;
-- DISTINCT

SELECT * FROM sakila.actor;

SELECT DISTINCT first_name, last_name FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;

CREATE DATABASE Escola;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    nome VARCHAR(7) CHARACTER SET utf8,
    idade INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
USE Escola;
SELECT * FROM Estudantes;

SELECT DISTINCT nome, idade FROM Escola.Estudantes;
SELECT DISTINCT * FROM Escola.Estudantes;
SELECT DISTINCT nome FROM Escola.Estudantes;
SELECT DISTINCT idade FROM Escola.Estudantes;

-- COUNT()
SELECT COUNT(*) FROM sakila.actor;
SELECT COUNT(first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name) FROM sakila.actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor;

SELECT COUNT(DISTINCT address) FROM sakila.address;
SELECT COUNT(*) FROM sakila.address;

SELECT COUNT(district) FROM sakila.address
WHERE district = 'Alberta';

SELECT COUNT(district) FROM sakila.address
WHERE address2 = '';

SELECT * FROM sakila.staff;
SELECT COUNT(password) FROM sakila.staff;
SELECT COUNT(first_name != '') AS qnt_trabalhadores FROM sakila.staff;
SELECT COUNT(email != '') AS email FROM sakila.staff;

-- LIMIT OFF SET
SELECT first_name FROM sakila.actor LIMIT 10 OFFSET 5;

-- ORDER BY
SELECT * FROM sakila.address;
SELECT * FROM sakila.address ORDER BY address;
SELECT * FROM sakila.address ORDER BY address DESC, district;

-- montagem de bolo com tudo que vimos até aqui
SELECT * FROM sakila.film;
SELECT title FROM sakila.film;
SELECT title AS nome, release_year AS lancamento, rating AS classificacao
FROM sakila.film;
SELECT COUNT(film_id) FROM sakila.film;

SELECT * FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
SELECT first_name AS nome, last_name AS sobrenome
FROM sakila.actor ORDER BY nome DESC, sobrenome ASC;

SELECT * FROM sakila.language;
SELECT name FROM sakila.language LIMIT 5 OFFSET 1;

SELECT * FROM sakila.film;
SELECT title AS nome, release_year AS lancamento, rental_duration AS duracao, rating AS classificacao, replacement_cost as custo_de_substituicao
FROM sakila.film ORDER BY duracao DESC, custo_de_substituicao ASC;





