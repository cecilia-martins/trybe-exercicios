from time import sleep

termo = int(input('Digite um termo '))
razao = int(input('Digite a razao '))

# decimo = termo + (10 - 1) * razao

t = termo
contador = 1
mais = 10
total = 0
while mais != 0:
    total = total + mais
    while contador <= total:
        print(f'{t} -> ', end='')
        t = t + razao
        contador = contador + 1
    print('PAUSA')
    sleep(1.4)
    mais = int(input('Quantos termos vc quer a mais? '))

print('FIM! :)')
