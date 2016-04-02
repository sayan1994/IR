f = open('details.txt', 'w')
with open('./posts.jsons') as data_file:
    for line in data_file:
        data = json.loads(line)
        f.write(data['id'] + " " + data['parent_id'] + " " + data['author'])
f.close()
