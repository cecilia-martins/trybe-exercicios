-- SELECT 5 + 5;
-- SELECT 5 - 5;
-- SELECT 5 * 5;
-- SELECT 5 / 5; --DIV retorna o inteiro - ignorando as casas decimais
-- SELECT 5 % 2; --MOD retorna o resto da divisão

-- SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
-- SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- Desafios com DIV e MOD

SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Impar'; -- o resto de 15/2 é impar ou par

SELECT 220 DIV 12;

SELECT IF(220 DIV 12 = 0, 'NÃO', concat('SIM, ', 220 MOD 12));
