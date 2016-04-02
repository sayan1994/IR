from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
import re


documents=[]
charctesToRemove=['"',"'"]
myfile=open('readd.txt','r')
for line in myfile:
    lineFile=line[:-1].translate(None, ''.join(charctesToRemove));
    documents.append(lineFile);
myfile.close()
true_k = 5
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(documents)
model = KMeans(n_clusters=true_k, init='k-means++', max_iter=100, n_init=1)
model.fit(X)

order_centroids = model.cluster_centers_.argsort()[:, ::-1]
terms = vectorizer.get_feature_names()
index=model.predict(X)
k=0
# print "Cluster ID      Sentence"
# print len(documents)
print '{ "message":[',
for i in index:
    if(k==len(documents)-1):
        print '{ "id":'+str(i)+', "text": "'+documents[k]+'"}',
    else:
        print '{ "id":'+str(i)+', "text": "'+documents[k]+'"},',
    k=k+1
print ' ]}',
# print("\n\n\n\nTop terms per cluster:")
# for i in range(true_k):
#     print "Cluster %d:" % i,
#     for ind in order_centroids[i, :10]:
#         print ' %s' % terms[ind],
#     print