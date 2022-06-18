USE sakila;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.actor
WHERE last_name = 'Davis';
SELECT * FROM sakila.film;
SELECT * FROM sakila.film WHERE length > 50 ORDER BY length;
SELECT * FROM sakila.film WHERE title <> 'Alien Center'
AND replacement_cost > 20;

SELECT * FROM sakila.film WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13';

SELECT * FROM sakila.film WHERE title IS NOT NULL;
SELECT * FROM sakila.staff; 
SELECT * FROM sakila.staff WHERE active IS FALSE;
SELECT * FROM sakila.staff WHERE active IS TRUE;

-- LIKE
SELECT * FROM sakila.film WHERE title NOT LIKE 'Academy%';

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.film
WHERE title LIKE '%don';
SELECT * FROM sakila.film WHERE title LIKE 'plu%';
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

SELECT * FROM sakila.film WHERE title LIKE '%ACE';
SELECT * FROM sakila.film WHERE description LIKE '%china';
SELECT * FROM sakila.film WHERE description LIKE '%girl%'
AND title LIKE '%lord';
SELECT * FROM sakila.film WHERE title LIKE '___gon%';
SELECT * FROM sakila.film WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';
SELECT * FROM sakila.film WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
SELECT * FROM sakila.film WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';

-- IN BETWEEN
SELECT * FROM sakila.payment;
SELECT * FROM sakila.payment WHERE payment_id IN (269,239,126,399,142);

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address 
WHERE district IN ('QLS', 'Nagasaki', 'Attika', 'Mandalay', 'Nantou', 'Texas');

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
SELECT * FROM sakila.payment;
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM sakila.customer 
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email ASC;

SELECT * FROM sakila.payment;
SELECT COUNT(payment_id) FROM sakila.payment
WHERE payment_date BETWEEN 2005-05-01 AND 2005-08-01;
SELECT * FROM sakila.film;

SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title LIMIT 500;

-- DATAS E AFINS

SELECT * FROM sakila.payment;
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

SELECT * FROM sakila.payment;
SELECT COUNT(payment_id) FROM sakila.payment
WHERE payment_date LIKE '%2005-05-25%';

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT * FROM sakila.payment;

SELECT rental_date FROM sakila.rental
WHERE rental_id = 10330;
USE sakila;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;








