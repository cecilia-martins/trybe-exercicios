from datetime import date

ano = int(input('Ano de nascimento '))
ano_atual = date.today().year

idade = ano_atual - ano

print(f'Quem nasceu em {ano} tem/fará {idade} anos em {ano_atual}')

if idade == 18:
    print(f'Se você esta com {idade} anos. Vá se alistar rapaz, ta na hora')
elif idade > 18:
    passou = idade - 18
    if passou == 1:
        print(f'Você deveria ter se alistado há {passou} ano')
    else:
        print(f'Você deveria ter se alistado há {passou} anos')

elif idade < 18:
    falta = 18 - idade
    if falta == 1:
        print(f'Falta {falta} ano pro cê se alistar. ATENTE-SE!')
    else:
        print(f'Falta {falta} anos pro cê se alistar. ATENTE-SE!')
