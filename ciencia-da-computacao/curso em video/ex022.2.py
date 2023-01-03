nome = input('Digite seu nome completo: ')
maiusculo = nome.upper()
minusculo = nome.lower()
ao_todo = len(nome)
primeiro = nome.split()[0]

print(f'''
Analizando seu nome...
Seu nome em maiúsculas é {maiusculo}
Seu nome em minúsculas é {minusculo}
Seu nome tem ao todo {ao_todo} letras
Seu primeiro nome é {primeiro} e ele tem {len(primeiro)} letras
''')
