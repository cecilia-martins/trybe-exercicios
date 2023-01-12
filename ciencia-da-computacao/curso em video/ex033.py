numero_1 = int(input('Digite um numero: '))
numero_2 = int(input('Digite outro um numero: '))
numero_3 = int(input('Digite só mais um numero: '))

menor = numero_1
maior = numero_1
#  quem é maior
if numero_2 > maior and numero_2 > numero_3:
    maior = numero_2
if numero_3 > maior and numero_3 > numero_2:
    maior = numero_3
#  quem é menor
if numero_2 < menor and numero_2 < numero_3:
    menor = numero_2
if numero_3 < menor and numero_3 < numero_2:
    menor = numero_3
print(f'O menor número é: {menor}')
print(f'O maior número é: {maior}')
