dinheiro = float(input('Quanto dinheiro você tem na carteira? '))
conversao = dinheiro / 5.26

print('Com RS${:.2f} você pode comprar US${:.2f}'.format(dinheiro, conversao))
