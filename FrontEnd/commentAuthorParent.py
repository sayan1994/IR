import json
f = open('details.txt', 'w')
with open('./posts.jsons') as data_file:
    i = 0
    for line in data_file:
        data = json.loads(line)
        i=i+1
        f.write(data['id'] + " " + data['parent_id'] + " " + data['author']+"\n")
f.close()
