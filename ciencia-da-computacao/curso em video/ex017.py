from math import hypot

oposto = float(input('Comprimento do cateto oposto: '))
adjacente = float(input('Comprimento do cateto adjacente: '))
# inteiro = floor(valor)
# eleva os catetos
# raiz = sqrt((oposto ** 2) + (adjacente ** 2))
# print('A hipotenusa vai medir {:.2f}'.format(raiz))

 # o math tem o hypot que já faz o calculo direto
hipotenusa = hypot(oposto, adjacente)

print(f'A hipotenusa é {hipotenusa}')
