nome = str(input('Digite seu nome completo: '))

primeiro = nome.split()[0]
ultimo = nome.split()[-1]

print(f'''
Analisando o nome: {nome}
Seu primeiro nome é: {primeiro}
Seu último nome é: {ultimo}
''')
