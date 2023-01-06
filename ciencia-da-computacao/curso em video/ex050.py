

soma = 0

for cada in range(0, 6):
    numero = int(input('Digite um numero ai meu chapa '))
    if numero % 2 == 0:
        soma = soma + numero

print(f'Soma total é {soma}')
