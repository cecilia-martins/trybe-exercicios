sexo = str(input('Informe seu sexo: [M/F] ')).strip().upper()


while sexo not in ['M', 'F']:
    sexo = str(input('DADOS INVALIDOS! Informe seu sexo: [M/F] ')).strip().upper()
print(f'{sexo} resgistrado com sucesso!')
