# importa a biblioteca
import requests


# def fetch_content(url):
#     # retorna um text
#     return requests.get(url).text

# def fetch_content(url):
#     response = requests.get(url).text
#     response.status_code
#     response.raise_for_status()

def fetch_content(url):
    try:
        response = requests.get(url)  # faz um request
        # response.status_code
        response.raise_for_status()  # ver se esse status code é um erro/ gera uma exceção
    except requests.HTTPError:  # se eu tentar fazer uma requisição que não for nada, ele vai lançar um erro e tratar
        return ""

    else:
        # caso dê sucesso, retorna o text
        return response.text
