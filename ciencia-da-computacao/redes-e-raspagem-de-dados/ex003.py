import requests


site = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'

response = requests.get(site)

# print(response)
assert "bot detected" not in response.text
