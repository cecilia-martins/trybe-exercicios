import requests
import parsel


base = 'http://books.toscrape.com/catalogue'
response = requests.get(base + '/the-grand-design_405/index.html')
# response = requests.get(site)
# print(response.text)
selector = parsel.Selector(response.text)

title = selector.css('h1::text').get()  # pegando o titulo

# print(title)

price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}") # pegando o preço

description = selector.css("#product_description ~ p::text").get()  # descrição
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = base + selector.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")
