//your code here
def sort_bands(band_names):

    articles = ['a', 'an', 'the']

    strip_articles = lambda name: ' '.join(word for word in name.split() if word.lower() not in articles)

    sorted_bands = sorted(band_names, key=strip_articles)

    return sorted_bands
band_names = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith', 'Anthrax']
sorted_bands = sort_bands(band_names)
print('<ul id="band">')
for band in sorted_bands:
    print(f'<li>{band}</li>')
print('</ul>')

