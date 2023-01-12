from datetime import date

ano_nascimento = int(input('Ano de nascimento do atleta: '))

idade = date.today().year - ano_nascimento

if idade <= 9:
    print(f'Sua idade é {idade} e sua categoria é MIRIM')
elif idade <= 14:
    print(f'Sua idade é {idade} e sua categoria é INFANTIL')
elif idade <= 19:
    print(f'Sua idade é {idade} e sua categoria é JÚNIOR')
elif idade <= 25:
    print(f'Sua idade é {idade} e sua categoria é SÊNIOR')
else:
    print(f'Sua idade é {idade} e sua categoria é MASTER')
