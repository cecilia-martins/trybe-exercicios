# termo = int(input('Digite um termo '))
# razao = int(input('Digite a razao '))

# decimo = termo + (10 - 1) * razao

# for cada in range(termo, decimo, razao):  # vai do primeiro ao decimo, pulando a razão.....
#     print('{}'.format(cada), end=" => ")

termo = int(input('Digite um termo '))
razao = int(input('Digite a razao '))

decimo = termo + (10 - 1) * razao

t = termo
contador = 1

while contador <= 10:
    print(f'{t} -> ', end='')
    t = t + razao
    contador = contador + 1
print('Final')
