# from math import factorial

# condicao = False

# while not condicao:
#     n = int(input('Digite um número qualquer: '))
#     f = factorial(n)
#     continuar = str(input('Quer continuar? [S/N] ')).upper()
#     if continuar == 'N':
#         condicao = True

# print(f'O fatorial de {n} = {f}')
n = int(input('Digite um número qualquer: '))
condicao = n
fatorial = 1
print(f'Calculando {n}!')
while condicao > 0:
    print(f'{condicao}', end='')
    print(' x ' if condicao > 1 else ' = ', end='')
    fatorial = fatorial * condicao
    condicao = condicao - 1
print(f'{fatorial}')

# print(f'O fatorial de {n} = {f}')
