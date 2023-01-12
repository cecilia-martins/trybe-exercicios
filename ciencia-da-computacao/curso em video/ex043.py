peso = float(input('Qual seu peso? '))
altura = float(input('Qual sua altura? '))

imc = peso / (altura * altura)

print('Seu imc é de {:.1f}'.format(imc))
if imc < 18.5:
    print('ABAIXO DO PESO')
elif 18.5 < imc < 25:
    print('PESO IDEAL')
elif 25 < imc < 30:
    print('SOBREPESO')
elif 30 < imc < 40:
    print('OBESIDADE')
else:
    print('OBESIDADE MÓRBIDA')
