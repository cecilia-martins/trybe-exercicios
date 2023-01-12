from datetime import date

ano_atual = date.today().year

maiores = 0
menores = 0

for cada in range(1, 7 + 1):
    ano = int(input('Ano de nascimento: '))
    if ano_atual - ano < 18:
        menores = menores + 1
    else:
        maiores = maiores + 1

print(f'{maiores} são maiores e {menores} são menores')
