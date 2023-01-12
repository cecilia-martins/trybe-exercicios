valor_casa = float(input('Qual é o valor da casa? R$ '))

salario_comprador = float(input('Qual é o seu salario? R$ '))

anos = int(input('Em quantos anos planeja pagar? '))

prestacao_mensal = valor_casa // (anos * 12)

minimo = salario_comprador * 30 // 100

decisao_final = '...'

if prestacao_mensal > minimo:
    decisao_final = 'NEGADO'

if prestacao_mensal <= minimo:
    decisao_final = 'APROVADO'

print('''
Para pagar uma casa de R${:.3f} em {} anos
A prestação seria de {:.3f}
Seu empréstimo foi {}
'''.format(valor_casa, anos, prestacao_mensal, decisao_final))
