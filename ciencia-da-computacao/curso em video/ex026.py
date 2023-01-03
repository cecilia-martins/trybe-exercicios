frase = str(input('Digite uma frase ')).strip().lower()


qnts_a = frase.count('a')

# print(f'A frase {frase} tem {qnts_a} "a"')
print(f'''
A frase {frase} tem {qnts_a} "a"
A primeira letra "A" apareceu na posição {frase.find('a') + 1}
A última letra "A" apareceu na posição {frase.rfind('a') + 1}
''')
# rfind - procurando do lado direito/right
