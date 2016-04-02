import sys,os
import json
with open('./posts.jsons') as data_file:
        data = json.loads(data_file.readline())
        print data["link_id"]
os.system('./graph '+data["link_id"]+" > answer_thread.txt")