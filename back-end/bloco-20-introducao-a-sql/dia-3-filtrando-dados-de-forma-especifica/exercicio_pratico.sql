USE PecasFornecedores;

SELECT * FROM PecasFornecedores.Pecas;
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'gr%';

SELECT * FROM PecasFornecedores.Fornecimentos;
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE code = 2 ORDER BY Fornecedor;

SELECT * FROM PecasFornecedores.Fornecimentos;
SELECT peca, preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';







