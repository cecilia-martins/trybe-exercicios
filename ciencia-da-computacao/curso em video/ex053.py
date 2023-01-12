frase = str(input('Escreva uma frase: ')).strip().upper()

palavras = frase.split()
junto = ''.join(palavras)

inverso = ''

for cada in range(len(junto) - 1, -1, -1):
    # print(f'{junto[cada]}', end=' ')
    inverso = inverso + junto[cada]

if inverso == junto:
    print(f'\nA frase "{frase}" É UM PALÍNDROMO')
else:
    print(f'\n A frase "{frase}" NÃO É UM PALÍNDROMO')
