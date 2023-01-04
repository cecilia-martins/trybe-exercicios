r_1 = float(input('Comprimento da reta 1: '))
r_2 = float(input('Comprimento da reta 2: '))
r_3 = float(input('Comprimento da reta 3: '))

if r_1 < (r_2 + r_3) and r_2 < (r_1 + r_3) and r_3 < (r_1 + r_2):
    print('Podem formar um triangulo  ', end='')
    if r_1 == r_2 and r_2 == r_3:
        print('EQUILÁTERO')
    elif r_1 != r_2 != r_3 != r_1:
        print('ESCALENO')
    else:
        print('ISÓSCELES')
else:
    print('Não podem formar um triangulo')
