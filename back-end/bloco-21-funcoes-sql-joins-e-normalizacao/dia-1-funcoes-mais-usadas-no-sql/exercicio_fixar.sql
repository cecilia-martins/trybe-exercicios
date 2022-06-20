-- IF/CASE
USE sakila;
SELECT * FROM sakila.film;
SELECT film_id, title, 
IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS conheco_o_filme
FROM sakila.film;

SELECT title, rating,
CASE
	WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS `público-alvo`
FROM sakila.film;

-- DATEDIFF E ETC
SELECT IF(15 MOD 2 = 0, 'PAR', 'IMPAR');
SELECT 220 DIV 12;

SELECT ROUND(6 + (RAND() * 9));
SELECT FLOOR(15 + (RAND() * 5));
SELECT FLOOR(39.494);

SELECT YEAR(CURRENT_DATE());
SELECT HOUR(NOW());

SELECT DATEDIFF('2030-01-20', NOW());
SELECT TIMEDIFF('11:00:00', '10:25:45');
SELECT TIMEDIFF('10:25:45', '11:00:00');

-- MAX, AVG, MIN, SUM, COUNT

SELECT * FROM sakila.film;
SELECT AVG(rental_duration) AS media_de_duracao FROM sakila.film;
SELECT MIN(rental_duration) AS duracao_minima FROM sakila.film;
SELECT MAX(rental_duration) AS duracao_maxima FROM sakila.film;
SELECT SUM(rental_duration) AS duracao_total FROM sakila.film;
SELECT COUNT(title) AS total FROM sakila.film;

-- GROUP BY, HAVING 
SELECT title FROM sakila.film
GROUP BY title, rental_duration;
SELECT first_name FROM sakila.actor
GROUP BY first_name;
SELECT first_name FROM sakila.actor;

SELECT first_name, COUNT(*) AS qnts_de_Cada FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length) AS media_length FROM sakila.film
GROUP BY rating; -- mostrando o rating e a media, agrupando por rating

SELECT rating, MIN(replacement_cost) AS min FROM sakila.film
GROUP BY rating; -- mostrando o rating e o custo MINIMO, agrupando por rating

SELECT rating, MAX(replacement_cost) AS MAX FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost) AS TOTAL FROM sakila.film
GROUP BY rating; -- mostrando o rating e a soma total do replacement, agrupando por rating

SELECT * FROM sakila.customer;

SELECT first_name, COUNT(active = 1) AS TOTAL_ATIVOS, COUNT(active = 0) AS TOTAL_INATIVOS FROM sakila.customer
GROUP BY first_name; -- WRONGGGG

SELECT active, COUNT(*) AS TOTAL FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) AS total FROM sakila.customer
GROUP BY store_id, active; -- mostra id, ativo e depois a quantidade.. agrupando por id e active

SELECT * FROM sakila.address;

SELECT district, COUNT(*) AS TOTAL_REGISTRADO FROM sakila.address
GROUP BY district -- agrupar por distritos..
HAVING COUNT(*) > 6; -- q tenha a quantidade maior que 6

SELECT rating, AVG(length) AS apelido
FROM sakila.film
GROUP BY rating
HAVING apelido BETWEEN 115.0 AND 121.50;

SELECT rating, SUM(replacement_cost) AS valor_total
FROM sakila.film
GROUP by rating
HAVING valor_total > 3950.50;




