nota_1 = float(input('Digite a primeira nota: '))
nota_2 = float(input('Digite a segunda nota: '))

media = (nota_1 + nota_2) / 2

if media < 5:
    print('REPROVADO!')
elif media == 5 or media < 6.9:
    print('RECUPERAÇÃO!')
elif media >= 7:
    print('APROVADO!!!!!')
else:
    print('SE NÃO É ISSO :)')

print(f'Amédia do aluno foi {media}')
