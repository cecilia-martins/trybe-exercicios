largura = float(input('Largura da parede '))
altura = float(input('Altura da parede '))

area = largura * altura

litros = area / 2

print('Sua parede tem a dimenção de {} X {}\nSua area é de {}m²\nVocê precisa de {:.1f} litros de tinta'
      .format(largura, altura, area, litros))

