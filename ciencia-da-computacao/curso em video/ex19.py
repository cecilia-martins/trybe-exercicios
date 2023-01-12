import random
from math import ceil, floor, sqrt

primeiro = str(print('Primeiro aluno: '))
segundo = str(print('Segundo aluno: '))
terceiro = str(print('Terceiro aluno: '))
quarto = str(print('Quarto aluno: '))

lista = [primeiro, segundo, terceiro, quarto]
escolhido = random.choice(lista)
print(f'Aluno sorteado {escolhido}')
