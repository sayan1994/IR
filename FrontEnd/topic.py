
import os
from nltk.tokenize import RegexpTokenizer
from stop_words import get_stop_words
from nltk.stem.porter import PorterStemmer
from gensim import corpora, models
import gensim
import re
import math
import pickle
#######################

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

###################

class Tokenizer:
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

tokenizer = RegexpTokenizer(r'\w+')
tok = Tokenizer(preserve_case=False)
# create English stop words list
en_stop = get_stop_words('en')

# Create p_stemmer of class PorterStemmer
p_stemmer = PorterStemmer()

texts=[]
#docset will contain the quetions

doc_f=""
f=open("./posts.txt",'r')
for line in f:
    doc_f=doc_f+line
# print doc_f
# compile sample documents into a list
doc_set = [doc_f]

for i in doc_set:

      # clean and tokenize document string
	raw = i.lower()
	tokens = tok.tokenize(raw)

	# remove stop words from tokens
	stopped_tokens = [i for i in tokens if not i in en_stop]

	# stem tokens
	stemmed_tokens = [p_stemmer.stem(i) for i in stopped_tokens]
	stemmed_tokens= [j for j in stemmed_tokens if len(j)>2]
	# add tokens to list
	texts.append(stemmed_tokens)

      # turn our tokenized documents into a id <-> term dictionary
dictionary = corpora.Dictionary(texts)

# convert tokenized documents into a document-term matrix
corpus = [dictionary.doc2bow(text) for text in texts]

# generate LDA model
ldamodel=gensim.models.ldamodel.LdaModel.load('lda_finaltrain_vikas200.model')
#print ldamodel.get_document_topics(corpus[0],minimum_probability=0)
# a=list((ldamodel[corpus[0]]))
# print a

name=[]
vec=[]
k=0;
for filename in os.listdir('/home/shubham/Desktop/avg1/'):
    name.append(filename)
    f=open('avg1/'+filename,'r')
    vec.append(pickle.load(f))
    k=k+1
    f.close()

lda_vector=ldamodel.get_document_topics(corpus[0],minimum_probability=0)
k=0;
sqr_arr=[]
for i in vec:
    sqr_sum=0.0
    for j in i:
        sqr_sum=sqr_sum+j*j
    k=k+1
    sqr_arr.append(math.sqrt(sqr_sum))
k=0
max_sum=0
max_index=0
for i in vec:
    m=0
    sqr_sum=0.0
    cosine_sum=0.0;
    for j in i:
        cosine_sum=cosine_sum+j*lda_vector[m][1]
        sqr_sum=sqr_sum+lda_vector[m][1]*lda_vector[m][1]
        m=m+1
    sqr_sum=math.sqrt(sqr_sum)
    cosine_sum=cosine_sum/(sqr_sum*sqr_arr[k])
    if (max_sum<cosine_sum):
        max_sum=cosine_sum
        max_index=k
    k=k+1
print name[max_index]
print max_sum