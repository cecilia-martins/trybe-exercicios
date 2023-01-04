nome = str(input('Qual é seu nome? ')).lower()

if nome == 'liah':
    print(f'{nome} é um nome curto, não é bonito e nem feio')
elif nome == '':
    print('Cê esqueceu de escrever seu nome')

elif nome == 'nome':
    print('Muito engraçado, estou rindo horrores :/')
else:
    print('Só pra ter um else msm, segue o baile :)')

print(f'Tenha um bom dia {nome}')
