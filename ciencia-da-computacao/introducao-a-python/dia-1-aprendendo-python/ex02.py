lista = [2, 3, 4, 5, 6, 7, 8, 9, 10]


def media_aritmetica(param: list):
    total = 0
    for x in param:
        total += x
    resultado = total / len(param)
    return resultado


print(media_aritmetica(lista))
