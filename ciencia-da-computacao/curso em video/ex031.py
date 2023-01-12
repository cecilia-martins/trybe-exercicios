distancia = float(input('Qual a distancia da viajem em km? '))

valor_200k = distancia * 0.50
valor_mais_longas = distancia * 0.45

if distancia <= 200:
    print(f'O valor da passagem é de R${valor_200k}')
elif distancia > 200:
    print(f'O valor da passagem é de R${valor_mais_longas}')
