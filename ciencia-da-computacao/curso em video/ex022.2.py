nome = str(input('Digite seu nome completo: ')).strip()
maiusculo = nome.upper()
minusculo = nome.lower()

# retirando os espaços para não interferir na contagem
ao_todo = len(nome) - nome.count(' ')
primeiro = nome.split()[0]

print(f'''
Analizando seu nome...
Seu nome em maiúsculas é {maiusculo}
Seu nome em minúsculas é {minusculo}
Seu nome tem ao todo {ao_todo} letras
Seu primeiro nome é {primeiro} e ele tem {len(primeiro)} letras
''')
