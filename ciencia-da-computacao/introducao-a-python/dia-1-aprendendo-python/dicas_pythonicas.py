frase = "O modulo de CS é bom demais e blah, blah, blah..."
vogais = "aeiou"


lista_v = []
lista_c = []
for letra in frase:
    if letra in vogais:
        lista_v.append(letra)

# for letra in frase:
#     if letra not in vogais:
#         lista_c.append(letra)

print(lista_v)
# print(lista_c)


