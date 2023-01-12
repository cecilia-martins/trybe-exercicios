salario = float(input('Digite seu salario R$ '))

if salario > 1250:
    salario = salario + (salario * 10) // 100
    print(f'Seu novo salario com aumento de 10% é R${salario}')
else:
    salario = salario + (salario * 15) // 100
    print(f'Seu novo salario com aumento de 15% é de R${salario}')
