lista_de_nomes = [
    "José",
    "Lucas",
    "Nádia",
    "Fernanda",
    "Cairo",
    "Joana",
    "Ana Carolina",
]


def maior_qnt_caracteres(nomes: list):
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maior_qnt_caracteres(lista_de_nomes))
