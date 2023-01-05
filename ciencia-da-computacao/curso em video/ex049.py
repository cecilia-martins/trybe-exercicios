numero = int(input('Digite um número para ver sua tabuada: '))

for cada in range(0, 11):
    # print(cada)
    total = numero * cada
    print(f'{numero} X {cada} = {total}')
