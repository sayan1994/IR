import json
import sys
from collections import OrderedDict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
import summpy1
from summpy1.lexrank import summarize
import re


filename = "posts.jsons"
author = ""

with open('./AMA_main.jsons') as data_file:
    data = json.loads(data_file.readline())
    author = data["author"]

question_dict = OrderedDict()
comment_dict = OrderedDict()


class QnA:

    def __init__(self, ques, ans):
        self.ques = ques
        self.ans = list()

    def addAnswer(self, ans):
        self.ans.append(ans)


with open("answer_thread.txt") as files:
    for line in files:
        words = line.split()
        comment_dict["t1_" + words[0]] = "t1_" + words[1]

with open(filename) as data_file:
    for line in data_file:
        data = json.loads(line)
        if data["link_id"] == data["parent_id"] and data["body"] != "[deleted]":
            tmp = QnA(data["body"], "")
            question_dict[data["name"]] = tmp

with open(filename) as data_file:
    for line in data_file:
        data = json.loads(line)
        if data["link_id"] != data["parent_id"] and data["author"] == author and data["body"] != "[deleted]":
            if question_dict.has_key(str(comment_dict[data["name"]])):
                tmp = question_dict[comment_dict[data["name"]]]
                tmp.addAnswer(data["body"])
                question_dict[comment_dict[data["name"]]] = tmp

for q in question_dict:
    if len(question_dict[q].ans) == 0:
        question_dict.pop(q, None)

# print "SIZE", len(question_dict)

# tot = 0
# for i in question_dict:
#     tot = tot + len(question_dict[i].ans)

# print tot
# print len(question_dict)

cluster_docs = [""] * 5
documents = []
charctesToRemove = ['"', "'"]
# myfile = open('readd.txt', 'r')
for line in question_dict:
    lines = question_dict[line].ques.encode('ascii', 'ignore')
    lineFile = lines.translate(None, ''.join(charctesToRemove))
    documents.append(lineFile)

# myfile.close()
true_k = 5
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(documents)
model = KMeans(n_clusters=true_k, init='k-means++', max_iter=100, n_init=1)
model.fit(X)

order_centroids = model.cluster_centers_.argsort()[:, ::-1]
terms = vectorizer.get_feature_names()
index = model.predict(X)

k = 0
for q in question_dict:
    for answers in question_dict[q].ans:
        cluster_docs[index[k]] = cluster_docs[index[k]] + answers
    k = k + 1


# print("\n\n\n\nTop terms per cluster:")
# for i in range(true_k):
#     print "Cluster %d:" % i,
#     for ind in order_centroids[i, :10]:
#         print ' %s' % terms[ind],
#     print


json_data_all = []
# print cluster_docs
# print len(index)
# print "Cluster ID      Sentence"
# print len(documents)

for x in xrange(5):
    # sentences, debug_info = summarize(cluster_docs[x], sent_limit=10, continuous=False, debug=True, use_divrank=False)
    # # print sentences
    # line = ""
    # for sent in sentences:
    #     line = line + sent
    json_data = {}
    json_data["id"] = str(x)
    json_data["text"] = cluster_docs[x]
    # print "---->>>>"+cluster_docs[x]
    json_data_all.append(json_data)

# k = 0
# for q in question_dict:
#     line = ""
#     for answers in question_dict[q].ans:
#         line = line + answers
#     json_data = {}
#     json_data["id"] = str(index[k])
#     json_data["text"] = line
#     json_data_all.append(json_data)
#     k = k + 1

json_final_data = {}
json_final_data["message"] = json_data_all

print json.dumps(json_final_data)

# print '{ "message":[',
# for i in index:
#     if(k == len(documents) - 1):
#         print '{ "id":' + str(i) + ', "text": "' + documents[k] + '"}',
#     else:
#         print '{ "id":' + str(i) + ', "text": "' + documents[k] + '"},',
#     k = k + 1
# print ' ]}',
