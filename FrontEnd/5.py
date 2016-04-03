import json
import os,sys
from pprint import pprint
x=0
a=list()
flair=dict()
k=0
author=""
with open('./AMA_main.jsons') as data_file:
    data = json.loads(data_file.readline())
    author = data["author"]

f=open("posts.txt","w")
with open('./posts.jsons') as data_file:
	for line in data_file:
		data = json.loads(line)
		if(data["link_id"]!=data["parent_id"] and data["author"]==author):
			f.write(data["body"].encode('ascii','ignore').replace('\n',' '))
			f.write("\n")
f.close()
		# if(flair.has_key(data["link_flair_text"])):
		# 	print "Present"
		# elif (data["link_flair_text"] is not None and data["link_flair_text"]!="") :
		# 	flair[data["link_flair_text"]]=k
		# 	k=k+1
		# 	print data["link_flair_text"]
		# 	print "/home/sayan/Desktop/IR/data/"+data["link_flair_text"]
		# 	if(data["link_flair_text"]!="Actor / Entertainer - Live" and  data["link_flair_text"]!="Crime / Justice" 
		# 		and data["link_flair_text"]!="Actor / Entertainer" and data["link_flair_text"]!="Director / Crew"
		# 		and data["link_flair_text"]!="Restaurant / Hospitality"):
		# 		os.mkdir("/home/sayan/Desktop/IR/data/"+data["link_flair_text"],0777)
		# if(data["link_flair_text"] =='Technology' and data["author"]!="[deleted]" and data["num_comments"]>=100):
		# 	x=x+1
		# 	print data["name"]
		# 	a.append(data["name"])
		#  	f=open("/home/sayan/Desktop/IR/data/tech2/"+data["name"]+".txt","a")
		#  	f.close()
# print x
# with open('/home/sayan/Downloads/comments.jsons') as data_file:
# 	for line in data_file:
# 		data = json.loads(line)
# 		if(data["link_id"] in a):
# 			f=open("/home/sayan/Desktop/IR/data/tech2/"+data["link_id"]+".txt","a")
# 			#print data["link_id"]+" DONE "+str(len(data["body"]))
# 			f.write(line)
# 			f.close()
# print flair
# for topic in flair:
# 	print topic
	