from datetime import date

ano = int(input('Ano de nascimento '))
ano_atual = date.today().year

idade = date.today().year - ano

print(f'Quem nasceu em {ano} tem/fará {idade} anos em {ano_atual}')

if idade == 18:
    print(f'Se você esta com {idade} anos. Vá se alistar rapaz, ta na hora')
elif idade > 18:
    passou = idade - 18
    if passou == 1:
        print(f'Você deveria ter se alistado há {passou} ano')
    else:
        print(f'Você deveria ter se alistado há {passou} anos')
