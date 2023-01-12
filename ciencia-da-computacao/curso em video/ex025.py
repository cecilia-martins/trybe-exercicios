nome = str(input('Digite nome ')).strip()

# response = nome.lower().count('silva') == True
response = 'silva' in nome.lower()
# in é operador e não um metodo

print(f'Seu nome tem silva? {response}')
