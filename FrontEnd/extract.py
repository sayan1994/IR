import requests
import json
import re
import os
import time

headers = {
            'User-Agent': "'Reddit Summariser for IR Project"
          }

cwd = os.getcwd() #"current working directory"

def SaveToJSON(link):
    starttime = time.time()
    url = r'http://www.reddit.com%s.json' % (link[:-1])
    raw = requests.get(url, headers=headers)
    data = raw.json()
    subreddit = data[0]["data"]["children"][0]["data"]["subreddit"]
    title = data[0]["data"]["children"][0]["data"]["permalink"]
    m = re.search('comments/([\w\d]+/[\w+]+)', title) 
    title = m.group(1)
    title = re.sub('/', ':', title)
    filename = "data/" + subreddit + "/" + title + ".json"
    if not os.path.isdir(cwd + "/" + subreddit):
        try:
            os.makedirs("data/" + subreddit + "/")
        except OSError, e:
            if e.errno != 17: # This error is simply signalling that the directories exist already. Therefore, ignore it
                raise #if it's a different error, "raise" another error
    f = open(filename, "w")
    f.write(json.dumps(data))
    f.close()
    endtime = time.time()
    if endtime - starttime < 2:
        time.sleep(2 - (endtime - starttime))

loopstart = time.time()
r = requests.get(r'https://www.reddit.com/r/IAmA/comments/4cloig/.json', headers = headers)
data = r.json()
SaveToJSON(data[0]["data"]["children"][0]["data"]["permalink"])
loopend = time.time()

print str(loopend - loopstart) + " seconds elapsed, total"