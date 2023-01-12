import random
from math import ceil, floor, sqrt

primeiro = str(input('Primeiro aluno: '))
segundo = str(input('Segundo aluno: '))
terceiro = str(input('Terceiro aluno: '))
quarto = str(input('Quarto aluno: '))

lista = [primeiro, segundo, terceiro, quarto]

random.choice(lista)

print(f'Aluno sorteado {lista}')
