
qnt_mulieres = 0
media_idade = 0
mais_vei = 0
his_name = ''

for person in range(1, 4 + 1):
    nome = str(input('Digite seu nome: '))
    idade = int(input('Digite sua idade: '))
    sexo = str(input('Digite seu sexo (feminino/masculino)')).lower()

    media_idade += idade

    if sexo == 'feminino' and idade < 20:
        qnt_mulieres += 1
    if sexo == 'masculino' and idade > mais_vei:
        mais_vei = idade
        his_name = nome

print(f'A média das idades é {media_idade//4}')
print(f'O total de mulheres com menos de 20 anos é {qnt_mulieres}')
print(f'O homem mais velho se chama {his_name} e tem {mais_vei} idade')
