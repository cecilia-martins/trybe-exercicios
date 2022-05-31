SELECT ucase('Oie, eu sou uma string!');

SELECT lcase('OLA, EU SOU UMA STRING EM CAIXA BAIXA :)');

SELECT replace('Oi, eu sou uma string', 'string', 'cadeia de caracteres');

SELECT left('Oi, eu sou uma string',10);

SELECT right('Oi, eu sou uma string', 6);

SELECT char_length('Oi, eu sou uma string');

SELECT substring('Oi, eu sou uma string', 7, 4); -- a partir do caractere 7, ele pega 4 caracteres

SELECT substring('Oi, eu sou uma string',5); -- se não definir uma quantidade, então ele vem cm q quantidade inicial

-- Strings no SQL são indexadas a partir do indice 1

SELECT UCASE(title) FROM sakila.film LIMIT 10;

SELECT LCASE(title) FROM sakila.film LIMIT 10;

SELECT REPLACE(title, 'ACADEMY', 'SECOND') FROM sakila.film WHERE film_id = 1; -- texto, oqVouSubstituirNoTexto, novoTexo -- 'parametros' do replace

SELECT LEFT(title, 5) FROM sakila.film WHERE film_id = 1; -- só pega os 5 primeiros caracteres.. --eu defino a quantidade

SELECT RIGHT(title, 4) FROM sakila.film WHERE film_id = 1;

SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1; -- tamanho do titulo onde o id é 1

SELECT SUBSTRING(title, 4,8) FROM sakila.film WHERE film_id = 1;

SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
