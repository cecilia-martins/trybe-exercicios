numero = int(input('Digite um numero qualquer: '))

base = int(input('1- binario, 2- octal ou 3- hexadecimal '))

if base == 1:
    print(f'{numero} convertido pra BINARIO é igual a {bin(numero)[2:]}')
elif base == 2:
    print(f'{numero} convertido pra OCTAL é igual a {oct(numero)[2:]}')
elif base == 3:
    print(f'{numero} convertido pra HEXADECIMAL é igual a {hex(numero)[2:]}')
else:
    print('Digite um número válido')
