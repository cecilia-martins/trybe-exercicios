import requests


site = 'https://httpbin.org/encoding/utf8'

response = requests.get(site)
print(response.text)
