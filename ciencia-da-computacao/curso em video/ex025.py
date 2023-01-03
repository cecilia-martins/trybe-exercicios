nome = str(input('Digite nome ')).strip()

# response = nome.lower().count('silva') == True
response = 'silva' in nome.lower()

print(f'Seu nome tem silva? {response}')
