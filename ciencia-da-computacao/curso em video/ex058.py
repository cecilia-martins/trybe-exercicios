from random import randint

aleatorio = randint(0, 10)  # gera um número "aleatorio" entre 0 e 5

numero = int(input('Digite um número entre 0 e 10: '))
contador = 1

while numero != aleatorio:
    # print('Você venceu!!')
    contador += 1
    numero = int(input('Digite um número entre 0 e 10: '))
else:
    print('Você acertou!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

if contador == 1:
    print(f'Acertou depois de {contador} tentativa')
else:
    print(f'Acertou depois de {contador} tentativas')
