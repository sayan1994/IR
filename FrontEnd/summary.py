import nltk, string
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy
import sumy
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
import sys
import glob
import re
import htmlentitydefs
import summpy1
from nltk.tokenize import RegexpTokenizer
from stop_words import get_stop_words
from nltk.stem.porter import PorterStemmer
from summpy1.lexrank import summarize
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import getopt
import codecs
import collections
import numpy
import networkx
from sklearn.feature_extraction import DictVectorizer
from sklearn.metrics import pairwise_distances

map_string=dict()


emoticon_string = r"""
    (?:
      [<>]?
      [:;=8]                     # eyes
      [\-o\*\']?                 # optional nose
      [\)\]\(\[dDpP/\:\}\{@\|\\] # mouth      
      |
      [\)\]\(\[dDpP/\:\}\{@\|\\] # mouth
      [\-o\*\']?                 # optional nose
      [:;=8]                     # eyes
      [<>]?
    )"""

# The components of the tokenizer:
regex_strings = (
    # Phone numbers:
    r"""
    (?:
      (?:            # (international)
        \+?[01]
        [\-\s.]*
      )?            
      (?:            # (area code)
        [\(]?
        \d{3}
        [\-\s.\)]*
      )?    
      \d{3}          # exchange
      [\-\s.]*   
      \d{4}          # base
    )"""
    ,
    # Emoticons:
    emoticon_string
    ,    
    # HTML tags:
     r"""<[^>]+>"""
    ,
    # Twitter username:
    r"""(?:@[\w_]+)"""
    ,
    # Twitter hashtags:
    r"""(?:\#+[\w_]+[\w\'_\-]*[\w_]+)"""
    ,
    # Remaining word types:
    r"""
    (?:[a-z][a-z'\-_]+[a-z])       # Words with apostrophes or dashes.
    |
    (?:[+\-]?\d+[,/.:-]\d+[+\-]?)  # Numbers, including fractions, decimals.
    |
    (?:[\w_]+)                     # Words without apostrophes or dashes.
    |
    (?:\.(?:\s*\.){1,})            # Ellipsis dots. 
    |
    (?:\S)                         # Everything else that isn't whitespace.
    """
    )

######################################################################
# This is the core tokenizing regex:
    
word_re = re.compile(r"""(%s)""" % "|".join(regex_strings), re.VERBOSE | re.I | re.UNICODE)

# The emoticon string gets its own regex so that we can preserve case for them as needed:
emoticon_re = re.compile(regex_strings[1], re.VERBOSE | re.I | re.UNICODE)

# These are for regularizing HTML entities to Unicode:
html_entity_digit_re = re.compile(r"&#\d+;")
html_entity_alpha_re = re.compile(r"&\w+;")
amp = "&amp;"

######################################################################

class Tokenizer1:
    def __init__(self, preserve_case=False):
        self.preserve_case = preserve_case

    def tokenize(self, s):
        """
        Argument: s -- any string or unicode object
        Value: a tokenize list of strings; conatenating this list returns the original string if preserve_case=False
        """        
        # Try to ensure unicode:
        try:
            s = unicode(s)
        except UnicodeDecodeError:
            s = str(s).encode('string_escape')
            s = unicode(s)
        # Fix HTML character entitites:
        s = self.__html2unicode(s)
        # Tokenize:
        words = word_re.findall(s)
        # Possible alter the case, but avoid changing emoticons like :D into :d:
        if not self.preserve_case:            
            words = map((lambda x : x if emoticon_re.search(x) else x.lower()), words)
        return words

    def tokenize_random_tweet(self):
        """
        If the twitter library is installed and a twitter connection
        can be established, then tokenize a random tweet.
        """
        try:
            import twitter
        except ImportError:
            print "Apologies. The random tweet functionality requires the Python twitter library: http://code.google.com/p/python-twitter/"
        from random import shuffle
        api = twitter.Api()
        tweets = api.GetPublicTimeline()
        if tweets:
            for tweet in tweets:
                if tweet.user.lang == 'en':            
                    return self.tokenize(tweet.text)
        else:
            raise Exception("Apologies. I couldn't get Twitter to give me a public English-language tweet. Perhaps try again")

    def __html2unicode(self, s):
        """
        Internal metod that seeks to replace all the HTML entities in
        s with their corresponding unicode characters.
        """
        # First the digits:
        ents = set(html_entity_digit_re.findall(s))
        if len(ents) > 0:
            for ent in ents:
                entnum = ent[2:-1]
                try:
                    entnum = int(entnum)
                    s = s.replace(ent, unichr(entnum))  
                except:
                    pass
        # Now the alpha versions:
        ents = set(html_entity_alpha_re.findall(s))
        ents = filter((lambda x : x != amp), ents)
        for ent in ents:
            entname = ent[1:-1]
            try:            
                s = s.replace(ent, unichr(htmlentitydefs.name2codepoint[entname]))
            except:
                pass                    
            s = s.replace(amp, " and ")
        return s
tok = Tokenizer1(preserve_case=False)
en_stop = get_stop_words('en')
p_stemmer = PorterStemmer()
numpy.set_printoptions(threshold=numpy.nan)

stemmer = nltk.stem.porter.PorterStemmer()
remove_punctuation_map = dict((ord(char), None) for char in string.punctuation)

def stem_tokens(tokens):
    return [stemmer.stem(item) for item in tokens]

'''remove punctuation, lowercase, stem'''
def normalize(text):
    tokens = tok.tokenize(text.lower())
    stopped_tokens = [i for i in tokens if not i in en_stop]
    stemmed_tokens = [p_stemmer.stem(i) for i in stopped_tokens]
    stemmed_tokens= [j for j in stemmed_tokens if len(j)>4]
    return stemmed_tokens

vectorizer = TfidfVectorizer(tokenizer=normalize, stop_words='english')

def cosine_sim(text):
	tfidf = vectorizer.fit_transform(text)
	#fea=vectorizer.get_feature_names()
	#matrix=tfidf.todense()
	#print len(matrix)
	# k=0
	# for i in matrix:
	# 	i=i.tolist()[0]
	# 	i=[pair for pair in zip(range(0,len(i)),i)]
	# 	i = list(sorted(i, key=lambda x: x[1]))
	# 	print k
	# 	print fea[i[-1][0]]
	# 	k=k+1
	# 	print "################"
	return ((tfidf * tfidf.T).A)


# print cosine_sim('a little bird', 'a little bird', 'a little bird chirps')
# print cosine_sim('a little bird', 'a little bird chirps')
# print cosine_sim('a little bird', 'a big dog barks')

# Open the file with read only permit
f = open('clusterData.txt')
text = ""
s = ""
line = f.readline()
while line:
    line = f.readline()
    if not line[0:-1].isdigit():
        s = s + line
    else:
        # tokens=tok.tokenize(s.lower())
        # stopped_tokens = [i for i in tokens if not i in en_stop]
        # stemmed_tokens= [j for j in stopped_tokens if len(j)>2]
        # y=""
        # for j in stemmed_tokens:
        #     y=y+j+" "
        # map_string[y+". \n\n"]=s;
        # text=text+y+". \n\n"
        text=text+s
        s = ""
f.close()
# text='''Variables are names (identifiers) that map to objects. A namespace is a dictionary of variable names (keys) and their corresponding objects (values).

# A Python statement can access variables in a local namespace and in the global namespace. If a local and a global variable have the same name, the local variable shadows the global variable.

# Each function has its own local namespace. Class methods follow the same scoping rule as ordinary functions.

# Python makes educated guesses on whether variables are local or global. It assumes that any variable assigned a value in a function is local.'''
f=open('temp.txt','w')
f.write(text)
f.close()
file = "temp.txt" #name of the plain-text file
# parser = PlaintextParser.from_file(file,Tokenizer("english"))
# summarizer = LexRankSummarizer()
# summary=summarizer(parser.document,40)
# print len(summary)
# for sentence in summary:
#         print sentence
#         print "#############"
sentences, debug_info = summarize(text, sent_limit=5,  debug=True )
#print sentences
for sent in sentences:
    print sent
    print "#############"