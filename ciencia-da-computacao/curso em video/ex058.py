from random import randint

aleatorio = randint(0, 10)  # gera um número "aleatorio" entre 0 e 5

# numero = int(input('Digite um número entre 0 e 10: '))
# contador = 1

# while numero != aleatorio:
#     # print('Você venceu!!')
#     contador += 1
#     numero = int(input('Digite um número entre 0 e 10: '))
# else:
#     print('Você acertou!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

# if contador == 1:
#     print(f'Acertou depois de {contador} tentativa')
# else:
#     print(f'Acertou depois de {contador} tentativas')

acertou = False
palpite = 0

while not acertou:
    palpite += 1
    jogador = int(input('Digite seu palpite entre 0 e 10: '))
    if jogador == aleatorio:
        acertou = True
    else:
        if jogador < aleatorio:
            print('Mais...')
        elif jogador > aleatorio:
            print('Menos...')

if palpite == 1:
    print(f'Acertou depois de {palpite} tentativa')
else:
    print(f'Acertou depois de {palpite} tentativas')

print('AÊ!!')
