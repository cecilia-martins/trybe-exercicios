numero_1 = int(input('Digite um numero qualquer '))
numero_2 = int(input('Digite mais um numero qualquer '))

maior = ''
if numero_1 > numero_2:
    maior = 'PRIMEIRO'
    print(f'O {maior} é maior')
elif numero_2 > numero_1:
    maior = 'SEGUNDO'
    print(f'O {maior} é maior')
else:
    print('Não existe valor maior, os dois são iguais :)')
