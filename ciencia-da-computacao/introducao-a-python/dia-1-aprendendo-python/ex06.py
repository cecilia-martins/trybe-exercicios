# def tipo_de_triangulo(a, b, c):
#     if a < b and a > (b - c):
#         return 'triangulo'
#     else:
#         return 'não é um triangulo'


# print(tipo_de_triangulo(25, 45, 34))

# gabarito
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


print(type_of_triangle(24, 56, 44))
