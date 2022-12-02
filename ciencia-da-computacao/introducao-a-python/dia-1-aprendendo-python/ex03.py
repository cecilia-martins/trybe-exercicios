# def imprime_asteriscos(n: int):
#     asteriscos = '*'
#     if n > 1:
#         return n * asteriscos


# print(imprime_asteriscos(7))

# solução do gabarito
def imprime_asteriscos(n: int):
    for row in range(n):
        print(n * '*')


imprime_asteriscos(7)
