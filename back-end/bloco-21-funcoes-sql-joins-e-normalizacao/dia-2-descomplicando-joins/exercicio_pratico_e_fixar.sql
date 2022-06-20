USE sakila;
SELECT * FROM sakila.country;
SELECT * FROM sakila.city;

SELECT CITY.city, CITY.country_id, COUNTRY.country FROM sakila.city AS CITY
JOIN sakila.country AS COUNTRY ON CITY.country_id = COUNTRY.country_id;

SELECT filme.title, filme.language_id, lang.name FROM sakila.film AS filme
JOIN sakila.language AS lang
ON filme.language_id = lang.language_id;

-- fixar
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT act.actor_id, act.first_name, fac.film_id FROM sakila.actor AS act
JOIN sakila.film_actor AS fac ON act.actor_id = fac.actor_id;

SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT taff.first_name, taff.last_name, ad.address FROM sakila.staff AS taff
JOIN sakila.address AS ad ON taff.address_id = ad.address_id;

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT cliente.customer_id, cliente.first_name, cliente.email, 
ad.address_id 
FROM sakila.customer AS cliente
JOIN sakila.address AS ad ON cliente.address_id = ad.address_id
ORDER BY cliente.first_name LIMIT 100;

SELECT C.first_name, C.email, C.address_id, A.address, A.district FROM sakila.customer AS C
JOIN sakila.address AS A ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%RENE%';

SELECT C.first_name, COUNT(address) FROM sakila.customer AS C
JOIN sakila.address AS A ON C.address_id = A.address_id
WHERE C.active = 1
ORDER BY C.first_name DESC;

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT S.first_name, S.last_name, AVG(P.amount) FROM sakila.staff AS S
JOIN sakila.payment AS P ON S.staff_id = P.staff_id
GROUP BY S.first_name, S.last_name;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT actor.actor_id, actor.first_name, fact.film_id, fil.title FROM sakila.actor AS actor
JOIN sakila.film_actor AS fact ON actor.actor_id = fact.actor_id
JOIN sakila.film AS fil ON fact.film_id = fil.film_id;

-- LEFT - RIGHT

SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;


SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;
-- praticando

USE pixar;


SELECT box.domestic_sales, box.international_sales, mov.id FROM pixar.box_office AS box
JOIN pixar.movies AS mov ON mov.id = box.movie_id;

SELECT mov.title, (box.domestic_sales + box.international_sales) FROM pixar.movies AS mov
JOIN pixar.box_office AS box ON box.movie_id = mov.id;

SELECT mov.title, box.rating FROM pixar.movies AS mov
JOIN pixar.box_office AS box ON box.movie_id = mov.id
ORDER BY mov.title DESC;

SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;
SELECT * FROM pixar.theater;

SELECT th.id, th.name, mov.theater_id FROM pixar.theater AS th
LEFT JOIN pixar.movies AS mov ON th.id = mov.theater_id
ORDER BY th.name ASC;


SELECT th.id, th.name, mov.theater_id FROM pixar.theater AS th
RIGHT JOIN pixar.movies AS mov ON th.id = mov.theater_id
ORDER BY th.name ASC;

SELECT th.id, th.name, mov.theater_id, box.rating FROM pixar.theater AS th
JOIN pixar.movies AS mov ON th.id = mov.theater_id
join pixar.box_office AS box ON mov.id = box.movie_id
WHERE rating > 8 AND mov.theater_id IS NOT NULL
ORDER BY th.name ASC;

USE pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    movies m
        INNER JOIN
    box_office b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;
