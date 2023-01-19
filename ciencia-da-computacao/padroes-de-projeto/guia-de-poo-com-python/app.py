
class Usuario:  # classe
    cargo = 'usuario'  # atributo da classe

    def logar(self):  # método
        print('Ação')

# o self - próprio - sempre remete a própria instância

    def __init__(self, altura) -> None:  # método especial
        self.altura = altura  # cada usuario vai ter sua propria altura


usuario_1 = Usuario()  # instanciando o obj/class

usuario_1.logar()
