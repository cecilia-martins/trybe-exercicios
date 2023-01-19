# class Cubo:
#     '''classe teste'''
#     def __init__(self, valor):
#         self.x = valor
#         print(f'Objeto criado, valor = {self.x}')


# # print(type(Cubo))

# ttt = Cubo('ttt')

# class Gato:
#     def __init__(self, nome) -> None:  # chamado automaticamente
#         self.tipo_animal = nome
#         print(f'Seu gato se chama {self.tipo_animal}')


# nome_gato = str(input('Digite o nome do seu gato '))


# g1 = Gato(nome_gato)

class Gato:
    tipo_animal = 'Feline'

    def __init__(self, nome) -> None:
        self.nome = nome


Gato.tipo_animal = 'Pet'

g1 = Gato('Klaus')
g2 = Gato('Olly')

print(g1.tipo_animal)
print(g2.tipo_animal)

print(g1.nome)
print(g2.nome)



