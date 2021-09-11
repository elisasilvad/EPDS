# HOW MUCH IS IT POSSIBLE TO ANALYSE PROVENANCE THROUGH ZERI CATALOGUE DATA
# As one of the first things in our research, we are interested in understanding how much it is possible to
# analyse provenance with the data available into the Zeri Catalogue. Consulting its LOD, we discover that
# there is a specific entry related to the provenance acts referred to each painting. Working with the data
# provided by Giulia, we are able to conduct some analysis on  items in the collection are described through
# their provenance and, thanks to this, recover an historical of which has been in time their
# the giving city or institution - which is the entity that gave away the painting during that act - and the
# acquiring city or institution - which is the entity that acquired that painting during that act.
# All the analysis here reported are conducted on data stored in a .json file
# named 'provenance.json' where each painting and its related exchanging acts are organized in the following format:
#
#       {
#         "art_item": { "type": "uri" , "value": "https://w3id.org/zericatalog/artwork/16528/item" } ,
#         "provenance": { "type": "uri" , "value": "https://w3id.org/zericatalog/artwork/16528/provenance-1" } ,
#         "acquiring_city": { "type": "uri" , "value": "https://w3id.org/zericatalog/place/firenze" } ,
#         "acquiring_inst": { "type": "uri" , "value": "https://w3id.org/zericatalog/palazzo-degli-uffizi-galleria-degli-uffizi-firenze" } ,
#         "giving_city": { "type": "uri" , "value": "https://w3id.org/zericatalog/place/firenze" } ,
#         "giving_inst": { "type": "uri" , "value": "https://w3id.org/zericatalog/palazzo-uguccioni-firenze" }
#       }
#
# Firstly, we import the data such stored in a .py file:
# Import the json file with information about provenance

import json
with open('provenance.json', encoding='utf-8') as fh:
    data = json.load(fh)

# Then, we create a default dictionary where each key has as value a list. Dictionary keys are the URIs of the items
# in the catalogue, while dictionary values are lists where to append each provenance act related to a certain
# item. In this way, we manage to gather together all the act of provenances referred to a certain item through its ID.
#

# Giulia's function (TOGLIERE SE C'E' GIA' NEL JUPYTER?)
from urllib.parse import urlparse

def url_strip(url):
    """
    function to retrieve the last piece of an url (path)
    """
    url_path = urlparse(url).path  # retrieve path
    last_piece = url_path.split('/')[-1]  # separate by '/'' and keep only the last part
    return last_piece

# We clean the outcoming dictionary by assigning at each item the higher value of provenance elaborated
# in order to have only the numerical value of the act of provenance. In this way we manage to store the
# number of act of provenance referred to a single item.

from collections import defaultdict
import pprint

paintings_dict = defaultdict(list)
for i in data['results']['bindings']:
    art_item = i['art_item']['value']
    provenances = i['provenance']['value']
    provenance_num = url_strip(provenances).split('-')[-1]  # to retrieve only the number
    paintings_dict[art_item].append(int(provenance_num))
#print(paintings_dict)

# We use only the maximum value present in each list

paintings_provenance_dict = dict()
for k, v in paintings_dict.items():
    max_value = max(v)
    paintings_provenance_dict[k] = max_value
#print(paintings_provenance_dict)

# And we visualize the outcoming results in a pandas dataframe with item IDs and number of exchanging acts related to them.

import pandas as pd
df = pd.DataFrame.from_dict(paintings_provenance_dict, orient='index', columns=['provenance nr'])
print(df)

# Finally, we count how many items in the collections have been subjected to at least an act of exchange described
# through provenance
print('Nr of paintings having at least one provenance', len(paintings_provenance_dict))

# and then the average amount of exchanging acts computed on the overall number of paintings
print('Average provenance of Italian paintings', df.mean())


# ACQUISITIONS AND GIVING AWAY
# In order to inspect Italian painting provenance, we decide to move on two layers different for the
# granularity of the information: cities on the one hand and institutions on the other one. Each act
# of exchange indeed necessarily involve two entities: an acquiring one and a giving one. In this part
# we are interest in understanding which are the entities which most acquire or give Italian paintings
# in the world.

# CITIES
# Firstly, we realize a pandas table with clean data referred to each act of exchange present in the
# collection, where we have a column for the painting ID, a column for the number of each act of exchange
# referred to it and other two columns respectively for the acquiring city and the giving one.

# Giulia
def district_strip(last_piece):
    """
    strip the district portion from the remaining part of the url
    """
    if 'district' in last_piece:
        no_district = last_piece.split('-')  # separate by '-'
        no_district.pop()  # remove last part (district)
        return ' '.join(no_district)  # join again with space as separator
    else:
        return last_piece


paintings_list = list()
provenance_list = list()
acquiring_city_list = list()
giving_city_list = list()
for i in data['results']['bindings']:
    paintings_list.append(i['art_item']['value'])
    provenance_list.append(url_strip(provenances).split('-')[-1])
    acquiring_city_list.append(district_strip(url_strip(i['acquiring_city']['value'])))
    giving_city_list.append(district_strip(url_strip(i['giving_city']['value'])))

df = pd.DataFrame(list(zip(paintings_list, provenance_list, acquiring_city_list, giving_city_list)),
                  columns =['painting', 'provenance_nr', 'acquiring_city', 'giving_city'])
print(df)


# ACQUIRING CITIES
# In this first section we analyse cities from the point of view of their acquisitions of Italian paintings.
# In doing that, we are interested in how many time a city has acquired and given an Italian painting.
# It is possible to count how many acquisitions have been recorded in relation to a city by using
# the Counter container from collections module, that allows to count the items in an iterable list storing them
# into a dictionary-like format where elements are the keys and the number of times they appear in the list
# is their value.

from collections import Counter
acquiring_city_dict = Counter(acquiring_city_list)
print('Times a city acquired an Italian Paintings:', acquiring_city_dict)

# We sort the result
sorted_acquiring_city_dict = dict()
sorted_acquiring_city = sorted(acquiring_city_dict.items(), key=lambda x: x[1], reverse=True)
for i in sorted_acquiring_city:
    sorted_acquiring_city_dict[i[0]] = i[1]
print(sorted_acquiring_city_dict)

# We transform the result into a pandas dataframe
df = pd.DataFrame.from_dict(sorted_acquiring_city_dict, orient='index')
print(df)

# We visualize the result as a pie plot
import matplotlib.pyplot as plt
df.plot.pie(subplots=True, legend=False, autopct='%.1f%%', counterclock=False, figsize=(7,5))
plt.title('Italian paintings acquiring cities')
plt.show()

# We adjust the result in order to visualize only the most relevant cities
most_relevant_acquiring_cities = dict()
others = list()
for k,v in sorted_acquiring_city_dict.items():
    if v >= 270:
        most_relevant_acquiring_cities[k] = v
    else:
        others.append(v)

most_relevant_acquiring_cities['others'] = sum(others)
print(most_relevant_acquiring_cities)

df = pd.DataFrame.from_dict(most_relevant_acquiring_cities, orient='index')

df.plot.pie(subplots=True, legend=False, autopct='%.1f%%', counterclock=False, figsize=(7,5))
plt.title('Italian paintings most acquiring cities')
plt.show()

# We Format the data in a format compliant with our Javascript libraries for the website visualizations
cities = list()
for k,v in most_relevant_acquiring_cities.items():
    cities.append('{\n "city"' + ':' + '"' + k[0].upper() + k[1:] + '"' + ',' +
                '\n"paintings"' + ':' + str(v) +'\n}')

viz_data = "[" + ",".join(cities) + "]"
print(viz_data)

# GIVING CITIES
# In this second section, we analyse the cities from the point of view of their giving away of Italian paintings.
# The process is exactly the same as above, with the only modification of the data variable we apply it.

giving_city_dict = Counter(giving_city_list)
print('Times a city gave an Italian Paintings:', giving_city_dict)

# We sort the result
sorted_giving_city_dict = dict()
sorted_giving_city = sorted(giving_city_dict.items(), key=lambda x: x[1], reverse=True)
for i in sorted_giving_city:
    sorted_giving_city_dict[i[0]] = i[1]
print(sorted_giving_city_dict)

# We adjust the result in order to visualize only the most relevant cities
most_relevant_giving_cities = dict()
others = list()
for k,v in sorted_giving_city_dict.items():
    if v >= 150:
        most_relevant_giving_cities[k] = v
    else:
        others.append(v)

most_relevant_giving_cities['others'] = sum(others)
print(most_relevant_giving_cities)

df = pd.DataFrame.from_dict(most_relevant_giving_cities, orient='index')

df.plot.pie(subplots=True, legend=False, autopct='%.1f%%', counterclock=False, figsize=(7,5))
plt.title('Italian paintings most giving cities')
plt.show()

# We format the data in a Javascript readable format
cities = list()
for k,v in most_relevant_giving_cities.items():
    cities.append('{\n "city"' + ':' + '"' + k[0].upper() + k[1:] + '"' + ',' +
                '\n"paintings"' + ':' + str(v) +'\n}')

viz_data = "[" + ",".join(cities) + "]"
print(viz_data)

# Visualization
index = list()
acquired_paintings = list()
given_paintings = list()
for k,v in most_relevant_acquiring_cities.items():
    index.append(k)
    acquired_paintings.append(v)

for city in index:
    if city in giving_city_dict.keys():
        given_paintings.append(giving_city_dict[city])
while len(acquired_paintings) != len(given_paintings):
    given_paintings.append(0) # Here we put a random number in order to have same lenght lists for the visualizations,
                              # but we will adjust the exact data in a secondary moment.

print(index)
print(acquired_paintings)
print(given_paintings)

acq_cities_dict = dict(zip(index, acquired_paintings))
print(acq_cities_dict)
giv_cities_dict = dict(zip(index, given_paintings))
print(giv_cities_dict)

# We format data in a Javascript readable format.
# Here we have data formatted in order to visualize the amount of paintings acquired and given by each institution.
ag_cities = list()
for k,v in acq_cities_dict.items():
    ag_cities.append('{\n "city"' + ':' + '"' + k[0].upper() + k[1:] + '"' + ',' +
                        '\n"acq_paintings"' + ':' + str(v) + ',' + '\n"giv_paintings"' + ':' + str(giv_cities_dict[k]) +'\n}')

ag_data = "[" + ",".join(ag_cities) + "]"
print(ag_data)

# We format data in a Javascript readable format.
# Here we have data formatted in order to visualize the amount of exchangings acts recorded by each institution.
ag_cities = list()
for k,v in acq_cities_dict.items():
    ag_cities.append('{\n "city"' + ':' + '"' + k[0].upper() + k[1:] + '"' + ',' +
                        '\n"exhcangings"' + ':' + str(v + giv_cities_dict[k]) + '\n}')

ag_data = "[" + ",".join(ag_cities) + "]"
print(ag_data)

# RELATIONSHIPS AMONG CITIES
# Then, in order to inspect the relationships between different cities in exchanging Italian paintings,
# we use the same method to count the how many times they appear together in an exchanging act.

acquiring_giving_cities = list()
for i in data['results']['bindings']:
    tuple = (district_strip(url_strip(i['acquiring_city']['value'])), district_strip(url_strip(i['giving_city']['value'])))
    acquiring_giving_cities.append(tuple)

cities_relationship = Counter(acquiring_giving_cities)
print('Times two cities exchanged Italian paintings', cities_relationship)

#Visualize the relationship as a Python graph
import networkx as nx
G = nx.Graph()

for k,v in cities_relationship.items():
    G.add_nodes_from(k)
    G.add_edge(k[0], k[1], weight=v)
print(G.edges(data=True))
#nx.draw(G) # Mine is not working due to installation problems. Check if it works.



# INSTITUTIONS
# After having inspected exchanging acts from the point of view of cities, we want to analyse provenance
# from a more detailed perspective: the one regarding institutions.

import re


paintings_list = list()
provenance_list = list()
acquiring_inst_list = list()
giving_inst_list = list()
for i in data['results']['bindings']:
    paintings_list.append(i['art_item']['value'])
    provenance_list.append(re.split("/", i['provenance']['value'])[-1])
    acquiring_inst_list.append(re.split("/", i['acquiring_inst']['value'])[-1])
    giving_inst_list.append(re.split("/", i['giving_inst']['value'])[-1])

df = pd.DataFrame(list(zip(paintings_list, provenance_list, acquiring_inst_list, giving_inst_list)),
                  columns =['painting', 'provenance_nr', 'acquiring_inst', 'giving_inst'])
print(df)

# ACQUIRING INSTITUTIONS
# Counting how many times an institution has acquired and given away an Italian painting

acquiring_inst = Counter(acquiring_inst_list)
#print('Times an institution acquired an Italian Paintings:', acquiring_inst)

sorted_acquiring_inst = dict()
sorted_inst = sorted(acquiring_inst.items(), key=lambda x: x[1], reverse=True)
for i in sorted_inst:
    sorted_acquiring_inst[i[0]] = i[1]
#print(sorted_acquiring_inst)

df = pd.DataFrame.from_dict(sorted_acquiring_inst, orient='index')
print(df)

import matplotlib.pyplot as plt
df.plot.bar()
plt.show()

# Adjust the graph to make it visually understandable
import operator
most_relevant_acquiring_inst = dict(sorted(acquiring_inst.items(), key=operator.itemgetter(1), reverse=True)[:20])

df = pd.DataFrame.from_dict(most_relevant_acquiring_inst, orient='index')
print(df)

# Visualize most relevant institutions for acquired Italian paintings
# Functions to add value to each bar
x = list()
y = list()
for k,v in most_relevant_acquiring_inst.items():
    x.append(k)
    y.append(v)

def addlabels(x,y):
    for i in range(len(x)):
        plt.text(i, y[i], y[i], ha = 'center')

df.plot.bar(legend=None)
addlabels(x, y)
plt.xlabel('Institutions')
plt.ylabel('Number of acquired Italian paintings')
plt.title('Institutions that have acquired most Italian paintings in the world')
plt.legend('Painting')
plt.show()

# Formatting data in a Javascript-readable format
institutions = list()
for k,v in most_relevant_acquiring_inst.items():
    inst = re.sub("\-", " ", k).title()
    institutions.append('{\n "inst"' + ':' + '"' + inst + '"' + ',' +
                '\n"paintings"' + ':' + str(v) +'\n}')

viz_data = "[" + ",".join(institutions) + "]"
print(viz_data)


# GIVING
giving_inst = Counter(giving_inst_list)
#print('Times an institution gave an Italian Paintings:', giving_inst)

sorted_giving_inst = dict()
sorted_inst = sorted(giving_inst.items(), key=lambda x: x[1], reverse=True)
for i in sorted_inst:
    sorted_giving_inst[i[0]] = i[1]
#print(sorted_giving_inst)

df = pd.DataFrame.from_dict(sorted_giving_inst, orient='index')
print(df)

#df.plot.bar()
#plt.show()

# Adjust the graph to make it visually understandable
most_relevant_giving_inst = dict(sorted(giving_inst.items(), key=operator.itemgetter(1), reverse=True)[:20])

df = pd.DataFrame.from_dict(most_relevant_giving_inst, orient='index')
print(df)

# Visualize most relevant institutions for given Italian paintings
# Functions to add value to each bar
x = list()
y = list()
for k,v in most_relevant_giving_inst.items():
    x.append(k)
    y.append(v)

def addlabels(x,y):
    for i in range(len(x)):
        plt.text(i, y[i], y[i], ha = 'center')

df.plot.bar(legend=None)
addlabels(x, y)
plt.xlabel('Institutions')
plt.ylabel('Number of gave Italian paintings')
plt.title('Institutions that have given most Italian paintings in the world')
plt.show()

# Formatting data in a Javascript-readable format
institutions = list()
for k,v in most_relevant_giving_inst.items():
    inst = re.sub("\-", " ", k).title()
    institutions.append('{\n "inst"' + ':' + '"' + inst + '"' + ',' +
                '\n"paintings"' + ':' + str(v) +'\n}')

viz_data = "[" + ",".join(institutions) + "]"
print(viz_data)

#Visualize differences in acquiring and giving paintings among most relevan institutions
index = list()
acquired_paintings = list()
given_paintings = list()
for k,v in most_relevant_acquiring_inst.items():
    index.append(k)
    acquired_paintings.append(v)

for inst in index:
    if inst in giving_inst.keys():
        given_paintings.append(giving_inst[inst])

print(index)
print(acquired_paintings)
print(given_paintings)

while len(acquired_paintings) != len(given_paintings):
    given_paintings.append(0)

df = pd.DataFrame({'acquired': acquired_paintings,
                   'given': given_paintings}, index=index)
df.plot.bar()
plt.xlabel('Institutions')
plt.ylabel('Number of Italian paintings')
plt.title('Differences in acquisitions and giving of Italian paintings among world institutions')
plt.show()


# Data related to acquisition and givings:
acq_inst_dict = dict(zip(index, acquired_paintings))
print(acq_inst_dict)
giv_inst_dict = dict(zip(index, given_paintings))
print(giv_inst_dict)

ag_inst = list()
for k,v in acq_inst_dict.items():
    inst = re.sub("\-", " ", k).title()
    ag_inst.append('{\n "institution"' + ':' + '"' + inst + '"' + ',' +
                        '\n"acq_paintings"' + ':' + str(v) + ',' + '\n"giv_paintings"' + ':' + str(giv_inst_dict[k]) +'\n}')

ag_data = "[" + ",".join(ag_inst) + "]"
print(ag_data)
#
#
# Counting how many times two institutions appear together in an act of provenance
import networkx as nx

acquiring_giving_institutions = list()
for i in data['results']['bindings']:
    tuple = (re.split("/", i['acquiring_inst']['value'])[-1], re.split("/", i['giving_inst']['value'])[-1])
    acquiring_giving_institutions.append(tuple)

institutions_relationship = Counter(acquiring_giving_institutions)
#print('Times two institutions exchanged Italian paintings', institutions_relationship)

#Visualize the relationship as a Python graph

G = nx.Graph()

for k,v in institutions_relationship.items():
    G.add_nodes_from(k)
    G.add_edge(k[0], k[1], weight=v)
#print(G.edges(data=True))

restricted_G = nx.Graph()

for k,v in institutions_relationship.items():
    if v > 80:
        restricted_G.add_nodes_from(k)
        restricted_G.add_edge(k[0], k[1], weight=v)
print(restricted_G.edges(data=True))


direct_tree = list()

for n in restricted_G.nodes():
    for m in restricted_G.nodes():
        if restricted_G.has_edge(n,m):
            #children = list()
            w = str(restricted_G.get_edge_data(n,m)['weight'])
            inst1 = re.sub("\-", " ", n).title()
            inst2 = re.sub("\-", " ", m).title()
            #children.append("{name: " + "'" + inst2 + "'" + ", value: " + w + "}")
            direct_tree.append("{"+ '"from":' + '"' + inst1 + '", ' + '"to":' + '"' + inst2 + '", ' + '"value":' + w + "}")

viz_data = ",\n".join(direct_tree)
print(viz_data)
#nx.draw(G)