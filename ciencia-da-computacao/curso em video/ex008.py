medida = int(input('Uma distancia em: '))

km = medida / 1000
hm = medida / 100
dam = medida / 10
cm = medida * 100
mm = medida * 1000
dm = medida * 10

print(f'A medida corresponde a\n{km}km\n{hm}hm\n{dam}dam\n{dm}dm\n{cm}cm\n{mm}mm')
