import json
import requests

alldata = {
  "type":"FeatureCollection",
  "features": []
}

for num in range(1,99):
  url="https://septaweb.cartodb.com:443/api/v2/sql?format=geojson&q=select * from public.untitled_table_" + str(num)
  print "downloading from mars", url
  response = requests.get(url)
  print response.status_code, response.content
  data = response.json()
  alldata["features"].extend(data["features"])
  
with open("septa-stations.geojson", "w") as outfile:
  json.dump(alldata, outfile)
# print json.dumps(alldata)



# sample urls
# https://septaweb.cartodb.com:443/api/v2/sql?format=geojson&q=select * from public.untitled_table
# https://septaweb.cartodb.com:443/api/v2/sql?format=geojson&q=select * from public.untitled_table_1