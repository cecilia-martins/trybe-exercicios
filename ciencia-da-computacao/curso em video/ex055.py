
pesadao = 0
pesadin = 0

#  O QUE EU FIZ
# for cada in range(1, 5 + 1):
#     peso = float(input('Digite seu peso: Kg '))
#     if peso > pesadao:
#         pesadao = peso
#     elif peso < pesadin:
#         pesadin = peso
# print('{:.2f} foi o maior e {:.2f} foi o menor peso lido :)'.format(pesadao, pesadin))

# O QUE O GUANABARA FEZ
for cada in range(1, 5 + 1):
    peso = float(input('Digite seu peso: Kg '))
    if cada == 1:
        pesadao = peso
        pesadin = peso
    else:
        if peso > pesadao:
            pesadao = peso
        if peso < pesadin:
            pesadin = peso
print('{:.2f} foi o maior e {:.2f} foi o menor peso lido :)'.format(pesadao, pesadin))
