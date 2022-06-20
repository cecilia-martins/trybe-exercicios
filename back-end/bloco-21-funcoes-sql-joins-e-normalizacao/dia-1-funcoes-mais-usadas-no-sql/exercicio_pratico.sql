USE hr;
SELECT * FROM hr.employees;
SELECT MAX(salary) AS O_MAIOR FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS MEDIA FROM hr.employees
GROUP BY job_id
ORDER BY MEDIA DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT ROUND(MAX(salary),2) AS MAIOR_SALARIO, ROUND(MIN(salary),2) AS MENOR_SALARIO,
ROUND(SUM(salary),2) AS SOMA_TOTAL_SALARIOS, ROUND(AVG(salary),2) AS MEDIA_TOTAL_SALARIOS
FROM hr.employees;

SELECT job_id, COUNT(*) AS TOTAL_PROG FROM hr.employees
WHERE job_id = 'IT_PROG';

SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id; -- agrupando p mostrar cada um

SELECT job_id, SUM(salary) AS SALARY_TOTAL FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

SELECT job_id, AVG(salary) AS MEDIA_SALARIAL FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY salary DESC;

SELECT department_id, AVG(salary) AS MEDIA, COUNT(*) AS TOTAL_FUN FROM hr.employees
GROUP BY department_id
HAVING TOTAL_FUN > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number = 515;

SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8; -- Não precisava ser o char, só o length() já resolvia

SELECT employee_id AS id, first_name AS nome, YEAR(hire_date) AS contratacao_ano
FROM hr.employees;

SELECT employee_id AS id, first_name AS nome, DAY(hire_date) AS contratacao_dia
FROM hr.employees;

SELECT employee_id AS id, first_name AS nome, MONTH(hire_date) AS contratacao_mes
FROM hr.employees;

SELECT LCASE(first_name) FROM hr.employees;
SELECT UCASE(first_name) FROM hr.employees;

SELECT first_name AS nome, last_name AS sobrenome,
DATEDIFF(CURRENT_DATE(), hire_date) AS dias_trabalhados
FROM hr.employees;

