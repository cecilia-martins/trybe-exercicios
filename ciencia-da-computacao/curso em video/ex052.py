numero = int(input('Digite um numero '))

total = 0

for cada in range(1, numero + 1):
    # se o numero for difisivel pelo contador
    if numero % cada == 0:
        total = total + 1
        # print('{}'.format(cada), end=' ')
    else:
        pass

if total == 2:
    print('Primos')
else:
    print('Não é primo :(((((((')
