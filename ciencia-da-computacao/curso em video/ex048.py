soma = 0
contador = 0

for cada in range(1, 501, 2):
    if cada % 3 == 0:
        soma = soma + cada
        contador = contador + 1
    # print(cada, end=' ')
print(f'Soma de tds é igual a: {soma}')
print(f'Quantas voltas? {contador}')
