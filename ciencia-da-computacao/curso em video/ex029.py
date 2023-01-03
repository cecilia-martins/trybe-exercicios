

velocidade_atual = float(input('Qual é a velocidade atual do carro Km? '))

multa = (velocidade_atual - 80) * 7

if velocidade_atual > 80:
    print(f'MULTADO!!! PAGUE A MULTA NO VALOR DE R${multa}')

print('Tenha um bom dia, dirija com segurança!')
