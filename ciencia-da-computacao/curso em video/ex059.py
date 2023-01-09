valor_1 = int(input('Digite um valor: '))
valor_2 = int(input('Digite um valor: '))


opcao = 0

while opcao != 5:
    menu = int(input('''
[ 1 ] somar
[ 2 ] multiplicar
[ 3 ] maior
[ 4 ] novos números
[ 5 ] sair do programa
Escolha sua opção:
'''))
    if menu == 1:
        opcao = 1
        print(f'O resultado é {valor_1 + valor_2}')
    if menu == 2:
        opcao = 2
        print(f'O resultado é {valor_1 * valor_2}')
    if menu == 3:
        opcao = 3
        if valor_1 > valor_2:
            print(f'{valor_1} é maior que {valor_2}')
        if valor_1 < valor_2:
            print(f'{valor_2} é maior que {valor_1}')
        else: 
            print('Valores iguais')
    if menu == 4:
        opcao = 4
        valor_1 = int(input('Digite um valor: '))
        valor_2 = int(input('Digite um valor: '))
    if menu == 5:
        opcao = 5
        print('Bye, bye! :)')

    if menu > 5:
        print('Opção não disponível')
