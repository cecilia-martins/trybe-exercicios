import requests


site = 'https://api.github.com/users'

response = requests.get(site)

users = response.json()

for cada in users:
    # print(cada)
    print(f'{cada["login"]} - {cada["url"]}')
