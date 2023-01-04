preco = float(input('Qual é o valor do produto? R$ '))

# minimo = salario_comprador * 30 // 100
dinheiro = preco - (preco * 10 // 100)

cartao = preco - (preco * 5 // 100)

dividido = preco

cartao_3 = preco + (preco * 20 // 100)


# print(f'''
# Valor R$:{preco}
# Dinheiro/Cheque com 10 % de desconto: R${dinheiro}
# Cartão com 5% de desconto: R${cartao}
# 2X no cartão - SEM DESCONTO: R${dividido}
# 3X ou mais no cartão - COM JUROS de 20%: R${cartao_3}
# ''')
