var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);
myApp.controller('inputCtrl', ['$scope', '$http', '$window', '$log', '$location', function($scope, $http, $window, $log, $location, $q) {
    console.log('Hello World from inputCtrl');

    $scope.AlchemyArray = [];
    $scope.nameList = "";
    $scope.list = [];

    var self = this;
    self.value = {};
    self.simulateQuery = false;
    self.isDisabled = false;
    self.states = loadAll();
    self.selectedItem = {};
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    self.noCache=false;

    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function() { deferred.resolve(results); },10, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        // $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        // $log.info('Item changed to ' + JSON.stringify(item));
        self.selectedItem = item;
        $scope.amaUrl1 = item;
        // console.log($scope.amaUrl1);
    }

    $scope.send = function() {
        console.log($scope.amaUrl1);
        $http.post('api/v1/createFile',{fileName:$scope.amaUrl1.url}).success(function(response){
          if(response.status=='200'){
            $http.post('api/v1/extractJSON',{link:$scope.amaUrl}).success(function(response){
                var responseData=response;
                console.log(response.status);
                if(responseData.status=='200'){
                    $http.post('api/v1/commentAuthorParent').success(function(response){
                        if(response.status=='200'){
                            console.log('Till Here');
                            $http.post('api/v1/treeCreation').success(function(response){
                                if(response.status=='200'){
                                    console.log('Over Here');
                                    $http.post('api/v1/cluster').success(function(response){
                                        console.log('Now here');
                                        console.log(response);
                                        $scope.AlchemyArray=response.message;
                                    })
                                }
                            })
                        }
                    })
                }
            })
          }
        });
        console.log('here->'+$scope.amaUrl);
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }

    function loadAll() {
        var allStates = [
  {
    "url": "t3_904bj",
    "name": "I am a prosecutor. AMA."
  },
  {
    "url": "t3_9228r",
    "name": "I am a 14-year-old girl who is starting as a full-time college student this upcoming Fall. AMA. "
  },
  {
    "url": "t3_931j8",
    "name": "I am the other woman in an adulterous relationship, AMA."
  },
  {
    "url": "t3_9366p",
    "name": "I am from an incredibly rich but mostly unhappy family, AMA."
  },
  {
    "url": "t3_96d2i",
    "name": "I am a dentist.  AMA"
  },
  {
    "url": "t3_96nej",
    "name": "I am a Cop"
  },
  {
    "url": "t3_97js8",
    "name": "I am a Mormon. AMA"
  },
  {
    "url": "t3_98iej",
    "name": "I am a teenager with more than 100 sexual partners and counting. AM absolutely A."
  },
  {
    "url": "t3_991kc",
    "name": "My 2009 adjusted gross income will be in the 8 figures.  Ask me anything.  "
  },
  {
    "url": "t3_998iq",
    "name": "I am still married despite the fact that my wife had an affair with her boss for over a year. AMA."
  },
  {
    "url": "t3_99kw6",
    "name": "I am a US soldier in Iraq on my third tour.  AMA."
  },
  {
    "url": "t3_9ahek",
    "name": "I have synesthesia, ask me anything!"
  },
  {
    "url": "t3_9b1ip",
    "name": "I met a girl for the first time on August 2nd and we decided on August 12th that we wanted to be married.  AMA"
  },
  {
    "url": "t3_9b7mj",
    "name": "I was born right handed - with no right hand.  AMA"
  },
  {
    "url": "t3_9bdh4",
    "name": "I am an Ultra-Orthodox Jew. Ask me anything"
  },
  {
    "url": "t3_9dicl",
    "name": "I started the Church of the Flying Spaghetti Monster. AMA"
  },
  {
    "url": "t3_9dw73",
    "name": "I am a spammer.  AMA."
  },
  {
    "url": "t3_9e22s",
    "name": "My girlfriend and I broke up and I just went and fucked a craigslist hooker for the first time on my lunch break AMA"
  },
  {
    "url": "t3_9e2q0",
    "name": "I want Quebec to be an independent country, AMA."
  },
  {
    "url": "t3_9ebku",
    "name": "I Was also an Illegal E-Mail Spammer for 5 Years. I got Caught. AMA"
  },
  {
    "url": "t3_9ebol",
    "name": "I am in full control of my actions when I dream, and can change my dream universe to whatever I want. AMA."
  },
  {
    "url": "t3_9f8vg",
    "name": "I need to be an amputee - yes I am a genuine 'wannabe' AMA."
  },
  {
    "url": "t3_9g2cs",
    "name": "IAmA 24 y/o homeless, anarchist tramp and rainbow kid who lives off trash and donations and has hitchhiked and rode freight all over the U.S for four years, and I've never been happier.  AMA!"
  },
  {
    "url": "t3_9g9nt",
    "name": "I'm 36, hetero, and am a virgin not only with sex, but with foreplay or even relationships.  AMA."
  },
  {
    "url": "t3_9gu5y",
    "name": "I'm 30 yr old Indian male looking for a wife through arranged marriage AMA."
  },
  {
    "url": "t3_9h3dv",
    "name": "I am a 22 y/o man that is secretly friends with a stuffed animal and blanket. Fire away."
  },
  {
    "url": "t3_9h7u5",
    "name": "My grandfather is one of the 300 richest people in America. AMA."
  },
  {
    "url": "t3_9hvf1",
    "name": "I am a security guard in a Las Vegas casino. AMA"
  },
  {
    "url": "t3_9i8sj",
    "name": "I am a gay Republican. AMA"
  },
  {
    "url": "t3_9ik8r",
    "name": "I am a Muslim woman. AMA."
  },
  {
    "url": "t3_9ilzv",
    "name": "Been married 4 years to a woman who cant have sex. AMA"
  },
  {
    "url": "t3_9iw2r",
    "name": "I am an assistant to a producer. Ask me anything you ever wanted to know about Hollywood, the entertainment industry or film/tv in general."
  },
  {
    "url": "t3_9izgk",
    "name": "I am a sometimes solo sailor trying to sail around the world (slowly) on a small sail boat.  AMA."
  },
  {
    "url": "t3_9j94p",
    "name": "I am a 19 year old Palestinian living in the West Bank. AMA."
  },
  {
    "url": "t3_9jj9l",
    "name": "I broke up with my girlfriend after cheating on her. She started stalking me, leading to me going to the police twice. She eventually committed suicide. I cant help but blame myself. AMA."
  },
  {
    "url": "t3_9jmp7",
    "name": "One night my mother tried to kill me. She then shot herself. AMA"
  },
  {
    "url": "t3_9jo27",
    "name": "I work for Microsoft as a developer, and worked on Vista and Windows 7. AMA."
  },
  {
    "url": "t3_9k6vs",
    "name": "I paid for my university education by working as a gay male prostitute. Ask me anything."
  },
  {
    "url": "t3_9k7nh",
    "name": "I am a modern day Raver, I spent every weekend this summer at a rave and know a lot of people behind the scenes in my area (AMA)"
  },
  {
    "url": "t3_9k9s2",
    "name": "I had a Psychotic Break and Thought I was Christ Reborn.  AMA"
  },
  {
    "url": "t3_9kdlx",
    "name": "I am a convicted hacker. AMA."
  },
  {
    "url": "t3_9ke63",
    "name": "I did Heroin yesterday. I am not a drug user and have never done anything besides pot back when I was a teen, AMA"
  },
  {
    "url": "t3_9ki85",
    "name": "I lost 100 pounds by dieting and exercising.  I am a 24 year old male.  Ask me anything."
  },
  {
    "url": "t3_9ks5j",
    "name": "I also did Heroin yesterday. And today, and every day  before that for months. I'm addicted to Heroin. AMA"
  },
  {
    "url": "t3_9kv3l",
    "name": "IamA a guy who is not particularly interesting, but who would like to feel special by having strangers ask me questions.  AMA"
  },
  {
    "url": "t3_9kvtd",
    "name": "I am signed up to have my head cryogenically frozen when I die.  AMA"
  },
  {
    "url": "t3_9kykq",
    "name": "IAmA female who can ejaculate, AMA."
  },
  {
    "url": "t3_9l7wd",
    "name": "I Am Blind. AMA"
  },
  {
    "url": "t3_9l9th",
    "name": "I worked at an abortion clinic for three years. AMA"
  },
  {
    "url": "t3_9lbzy",
    "name": "I am an authour of a book that has hit the NYT Best Seller List. AMAA"
  },
  {
    "url": "t3_9lju1",
    "name": "I am a Police Officer, ask me anything"
  },
  {
    "url": "t3_9lzuw",
    "name": "I just got back from North Korea.  AmA."
  },
  {
    "url": "t3_9m593",
    "name": "I am an operator at a large telescope in Hawaii.  AMAA."
  },
  {
    "url": "t3_9mbnz",
    "name": "I Am 20 years old and have had synesthesia all my life. AMA."
  },
  {
    "url": "t3_9mfop",
    "name": "I am am 27 year old man with achondroplastic dwarfism: I am just under 4'5 tall.  Ask me anything."
  },
  {
    "url": "t3_9mjf1",
    "name": "I am a Pastor of a small congregation. I am also an atheist. No one except my closest friends know. AMAA."
  },
  {
    "url": "t3_9mopv",
    "name": "I'm 26, and I used to be a manager at a GameStop...You know there's things you want to know...AMA."
  },
  {
    "url": "t3_9n470",
    "name": "I am a man who was given up for adoption, found his birth family at 18, and fell in love with the sister he never knew he had.  AMA."
  },
  {
    "url": "t3_9nii9",
    "name": "Im on acid AMA"
  },
  {
    "url": "t3_9nt8c",
    "name": "I am in my final year of my PhD studying entomology (yep, bugs). AMA (even off-topic)!"
  },
  {
    "url": "t3_9nyf8",
    "name": "I entered university at age 13.  AMA."
  },
  {
    "url": "t3_9o5z5",
    "name": "I am a cop. AMA"
  },
  {
    "url": "t3_9ohdc",
    "name": "2 weeks ago I tried heroin 'once for fun' and made an AMA, I have been using since and shot up for the first time today, AMA"
  },
  {
    "url": "t3_9opj7",
    "name": "I help build LAN Gaming centers for a living. I own one and have worked at 2 others in the last 5 years. AMA"
  },
  {
    "url": "t3_9oufs",
    "name": "I am a full swap swinger with my wife, AMA"
  },
  {
    "url": "t3_9ov8y",
    "name": "I am, you guessed it, a lion tamer."
  },
  {
    "url": "t3_9ox75",
    "name": "I found and wrote the exploit which crashed reddit yesterday. AmA"
  },
  {
    "url": "t3_9p87z",
    "name": "I have been a glassblower since 1998. AMA."
  },
  {
    "url": "t3_9p9o2",
    "name": "I am a male stripper. AMA"
  },
  {
    "url": "t3_9pasm",
    "name": "My blog is my principal source of income.  AMA."
  },
  {
    "url": "t3_9pc1k",
    "name": "I like turning my boyfriend into my girlfriend. He likes it, too. AMA."
  },
  {
    "url": "t3_9pf0l",
    "name": "I was declared 'clinically dead' for four minutes after being T-Boned by a drunk driver (pics) [AMA]"
  },
  {
    "url": "t3_9piy8",
    "name": "I'm an American that moved to Norway with nothing more than a passport and a few suitcases. AMA "
  },
  {
    "url": "t3_9pqg2",
    "name": "I served 96 months in state prison for murder. During that time I was also able to get a Bachelor's in CS free of charge. AMA."
  },
  {
    "url": "t3_9pqjl",
    "name": "I Am Justin from shitmydadsays"
  },
  {
    "url": "t3_9q7pp",
    "name": "For my fellow geeks: I am a video codec hardware engineer. AMA"
  },
  {
    "url": "t3_9q82d",
    "name": "I am a hardcore videogame programmer"
  },
  {
    "url": "t3_9qir3",
    "name": "I am a Disability Claims Analyst for an evil insurance company. I decide who gets paid. AMA."
  },
  {
    "url": "t3_9qm5k",
    "name": "I work for Apple Inc. AmA"
  },
  {
    "url": "t3_9qqdg",
    "name": "IAmA Psychologist in a state prison, AMA"
  },
  {
    "url": "t3_9qqxq",
    "name": "I am an Icelander. I'm not bankrupt, I do not live in an igloo. AMA."
  },
  {
    "url": "t3_9qrr3",
    "name": "I am a professional card counter.  AMAA."
  },
  {
    "url": "t3_9r07e",
    "name": "I am a woman in a completely submissive relationship, not just in bed. AMA"
  },
  {
    "url": "t3_9r1fc",
    "name": "I was a [M] Gold digger for half a decade.  AMAA"
  },
  {
    "url": "t3_9r1lv",
    "name": "I'm a dentist. AMA."
  },
  {
    "url": "t3_9r585",
    "name": "I am a garbage man AMA"
  },
  {
    "url": "t3_9rddm",
    "name": "I was in a sub/dom relationship for 4 years since I was 17, AMA."
  },
  {
    "url": "t3_9rjdu",
    "name": "I am a McDonalds store manager. AMA"
  },
  {
    "url": "t3_9rpa3",
    "name": "For my fellow geeks: IAm finishing my PhD in compilers. I wrote a PHP compiler. AMA"
  },
  {
    "url": "t3_9rs9s",
    "name": "IAMA (was a) Counselor at an Abortion Clinic - AMA "
  },
  {
    "url": "t3_9s93l",
    "name": "I am illiterate. AMA"
  },
  {
    "url": "t3_9s9d7",
    "name": "IAMA 100% automated independent retail trader. I trade around 800k to 1.5 million shares a day and make 2cents/trade on average. AMAA"
  },
  {
    "url": "t3_9shi9",
    "name": "I am the editor of The Big Picture blog on boston.com. AMA"
  },
  {
    "url": "t3_9sr8x",
    "name": "I am a High School Math / Computer Science teacher (NY, US).  AMA"
  },
  {
    "url": "t3_9sszo",
    "name": "IAMA Captain of an oil tanker. AMAA"
  },
  {
    "url": "t3_9su4o",
    "name": "I make my living off of Facebook.  AMA"
  },
  {
    "url": "t3_9sw2l",
    "name": "IAMA medical student who I lost nearly 100 pounds in about 8 months. AMA"
  },
  {
    "url": "t3_9t05i",
    "name": "I am a former executive of a large famous company in the computer industry. AMaA"
  },
  {
    "url": "t3_9t273",
    "name": "IAmA grand-son of a Nazi SS Officer and spy, who is now 95. AHimA"
  },
  {
    "url": "t3_9t7ye",
    "name": "IAmA ex worshipful master of a masonic lodge. I quit the lodge several years ago after my term as master was over. I performed most of the ritual work from memory and could recite an entire 45 minute lecture from memory. AMA"
  },
  {
    "url": "t3_9tkyk",
    "name": "IAMA mind reader/behavioural expression expert. AMAA"
  },
  {
    "url": "t3_9tlwi",
    "name": "I'm the Imgur guy, AMA!"
  },
  {
    "url": "t3_9trd4",
    "name": "I get paid to get naked... on the internet. IAMA Cam girl. AMA"
  },
  {
    "url": "t3_9tz66",
    "name": "I am a Flash game developer who has experienced reasonable success, even though this is just a spare-time hobby.  AMA."
  },
  {
    "url": "t3_9u11p",
    "name": "IAmA non-Christian who has had a NDE (Near Death Experience). Actually I died. I don't think you can get nearer than that. AMA"
  },
  {
    "url": "t3_9u9tm",
    "name": "IAmA animator with a reasonably popular website who has done a few bits and bobs for TV."
  },
  {
    "url": "t3_9uigj",
    "name": "IAMA director who has worked with one of reddit's favorite females. You have seen my most famous movie. AMAA"
  },
  {
    "url": "t3_9ulmj",
    "name": "I killed a man for hire sixteen years ago. Now, after serving my time in prison, I'm a happy family man. AMA."
  },
  {
    "url": "t3_9umtf",
    "name": "IAmA white South African, AMA"
  },
  {
    "url": "t3_9uqhh",
    "name": "I am a thirty year old male virgin."
  },
  {
    "url": "t3_9utfc",
    "name": "I know more about bubbles than most people on the planet. AMA (about bubbles)"
  },
  {
    "url": "t3_9uwa3",
    "name": "IAmA pizza delivery driver and have been for 5+years. AMA"
  },
  {
    "url": "t3_9uzn1",
    "name": "I hitchhiked across Africa by myself. I am a white guy, I was 25 (2001)... AMA"
  },
  {
    "url": "t3_9v044",
    "name": "I am former atheist who is now a theist. AMA [By request]"
  },
  {
    "url": "t3_9v5bl",
    "name": "IAMA married stay at home mom/student by day and stripper by night. AMA! "
  },
  {
    "url": "t3_9va2y",
    "name": "IAMA 22 year old girl in a poly relationship. I just met my husband's girlfriend 2 days ago. AMA"
  },
  {
    "url": "t3_9vd71",
    "name": "My wife's life was saved twice by the medical system in the US.  Our insurance worked beautifully, and I believe in the status quo.  AMA."
  },
  {
    "url": "t3_9vi9d",
    "name": "(By Request) IAmA Professional Philosopher.  AMA."
  },
  {
    "url": "t3_9vj9w",
    "name": "I run a very large supercomputer (with many co-workers of course). AMA."
  },
  {
    "url": "t3_9vksz",
    "name": "IAmA woman preparing to be a priest.  AMAA."
  },
  {
    "url": "t3_9vl04",
    "name": "IamA microbiologist by day, psychedelic fungus farmer by night. AMAA"
  },
  {
    "url": "t3_9vmjj",
    "name": "IAmA faithful, believing Mormon. AMAA"
  },
  {
    "url": "t3_9vrj3",
    "name": "IAmA former homosexual who is happily getting married to a woman next year. AMA"
  },
  {
    "url": "t3_9vv1r",
    "name": "I designed a board game that provoked death threats, was seized by the police and is still banned in many places. AMA."
  },
  {
    "url": "t3_9vweb",
    "name": "IAMA professional Christian evangelist. AMA."
  },
  {
    "url": "t3_9vy94",
    "name": "(By request) IAMA University Professor AMA"
  },
  {
    "url": "t3_9w4s3",
    "name": "BY REQUEST: New York City Yellow Taxi Driver"
  },
  {
    "url": "t3_9wdxm",
    "name": "I memorized the Quran in less than 3 years (over 600 pages). AMA."
  },
  {
    "url": "t3_9wfxs",
    "name": "I watch people sleep. IAMA sleep tech AMA."
  },
  {
    "url": "t3_9wnaq",
    "name": "My Jesus Camp experiences make the movie look pedestrian. AMA (by popular atheist request)"
  },
  {
    "url": "t3_9wp8s",
    "name": "I have multiple personality disorder, amaa."
  },
  {
    "url": "t3_9wqtu",
    "name": "IAmA Has-been rock star who sold 5 million+ records and lost twice at the Grammys AMA"
  },
  {
    "url": "t3_9wrr1",
    "name": "I am a professional model, AMA."
  },
  {
    "url": "t3_9x2dz",
    "name": "IAmA retired car thief and commercial/residential burglar. Always ballsy ways and never caught. AMA"
  },
  {
    "url": "t3_9x5dh",
    "name": "I am Raiden from the Mortal Kombat video games. - AMAA"
  },
  {
    "url": "t3_9xbff",
    "name": "After five years working behind a desk in IT, I learned to ride a motorbike and set off on my own on a 16,000 mile adventure from the UK to India. AMA."
  },
  {
    "url": "t3_9xea8",
    "name": "I am unable to feel most emotion: I have alexithymia. AMA"
  },
  {
    "url": "t3_9xgnd",
    "name": "IAmA little difficult to describe. Designed part of the Space Shuttle, wrote Apple Writer, retired at 35, sailed solo around the world.  AMAA"
  },
  {
    "url": "t3_9xolh",
    "name": "I am a former Cirque Du Soleil Acrobat. AMAA"
  },
  {
    "url": "t3_9xq75",
    "name": "I catch shoplifters for a living, and am pretty good at it. AMA"
  },
  {
    "url": "t3_9xrn1",
    "name": "IAMA person who sends spam email for a living. AMA"
  },
  {
    "url": "t3_9xtid",
    "name": "A Russian software-developer from Moscow. AMA about life in Russia."
  },
  {
    "url": "t3_9xuxa",
    "name": "I am a Mennonite, AMA."
  },
  {
    "url": "t3_9y1bt",
    "name": "I used to be an assistant teacher at seduction bootcamps where men paid $3000 for a weekend of advice and coaching on how to pick up women. AMAA"
  },
  {
    "url": "t3_9y3v4",
    "name": "I have been living out of my car for the past year. AMA"
  },
  {
    "url": "t3_9ya7d",
    "name": "I work in the corporate office for a national fast food restaurant company, AMAA"
  },
  {
    "url": "t3_9yd9e",
    "name": "I was blind for two years. AMA"
  },
  {
    "url": "t3_9ygcy",
    "name": "I'm a former Disneyland cast member. I was Alice in Wonderland. AMA."
  },
  {
    "url": "t3_9yo0t",
    "name": "I am hearing and was raised by two deaf parents. AMA"
  },
  {
    "url": "t3_9z226",
    "name": "I am Tom Fulp, creator of Newgrounds.com and co-founder of the Behemoth."
  },
  {
    "url": "t3_9zaf3",
    "name": "I Draw Saturday Morning Breakfast Cereal. AMA"
  },
  {
    "url": "t3_9zeyu",
    "name": "I am the mother of 14 year old autistic triplets. AMA"
  },
  {
    "url": "t3_9zgag",
    "name": "I used to be a penguin keeper at a large, popular marine-animal zoological park. I've worked with almost every animal there. AMA!"
  },
  {
    "url": "t3_9zj7z",
    "name": "I'm a 23-year-old truck driver. AMAA"
  },
  {
    "url": "t3_9zllp",
    "name": "I was left at the altar. AMA"
  },
  {
    "url": "t3_9zqge",
    "name": "I am a Private Island Caretaker, "
  },
  {
    "url": "t3_9zsar",
    "name": "IAmA 29 year old guy who's been f*%king up his life with weed, alcohol and laziness for 10 years. Today I've been clean 13 days, I'm changing my life and I'm blogging about my experience. AMA."
  },
  {
    "url": "t3_9ztmw",
    "name": "IAMA quadriplegic. My accident occurred when I was 16. AMA. [By request.]"
  },
  {
    "url": "t3_9zysp",
    "name": "I am a major character in The Game, a NYT bestselling book on Pickup Artists. AMAA"
  },
  {
    "url": "t3_a00dn",
    "name": "I am totally blind. AMA"
  },
  {
    "url": "t3_a06ij",
    "name": "I am a Research Scientists at a major university. I study Interstellar Dust Clouds and the Origins of Life."
  },
  {
    "url": "t3_a09e4",
    "name": "I used to live on Svalbard for four years. AmA"
  },
  {
    "url": "t3_a0j0t",
    "name": "I have autism, AMA"
  },
  {
    "url": "t3_a0jv2",
    "name": "IAMA US Army Officer -- a great post-undergrad job during a bad economy. AMAA"
  },
  {
    "url": "t3_a0k1o",
    "name": "I grew up a mormon in Utah, attended BYU, served a mission (foreign), Attend the temple, Served in the leadership, saw someone raised from the dead, AMA"
  },
  {
    "url": "t3_a0x2b",
    "name": "IAMA guy that has had 31 dates recently via online dating AMA"
  },
  {
    "url": "t3_a1hcg",
    "name": "Reddit, IAMA Native American Indian who lives on the reservation, or the U.S's third world."
  },
  {
    "url": "t3_a1y0v",
    "name": "IAMA 25yr old male who lives in/runs a backpackers hostel. Ive been bitten, thrown up on and  one of my guests tried to stab with a pool cue last week. Ive seen to much sex,drugs &amp; violence.  AmA"
  },
  {
    "url": "t3_a2biw",
    "name": "I'm missing three fingers on my right hand. Chopped them off when I was three years old. Looks pretty awesome [pic] AMA!"
  },
  {
    "url": "t3_a2zte",
    "name": "I run reddit's servers (and do a bunch of other stuff too).  AMA."
  },
  {
    "url": "t3_a2zyy",
    "name": "I am Kiowa Winans, Executive Producer of the movie, Ink, which was bit torrented by pirates and consequently became one of the top 20 most popular movies online. AMA."
  },
  {
    "url": "t3_a3hmd",
    "name": "My wife and I own a medicinal marijuana edibles bakery in San Francisco  AMA"
  },
  {
    "url": "t3_a3l92",
    "name": "Dear reddit: I love animals. Yes, in that way. AMAA"
  },
  {
    "url": "t3_a3qom",
    "name": "I lost 95 lbs and my wife lost 125 lbs since February of 2008.  AUA"
  },
  {
    "url": "t3_a433q",
    "name": "I'm a woman who led a top 200 World of Warcraft raiding guild, AMA"
  },
  {
    "url": "t3_a4c2z",
    "name": "I am a 28 year old Danish student living in the mythical Scandinavia. A place where healthcare is free, education is paid for and if you mention God people think you're crazy. Ask Me and Any Other Scandinavian Anything."
  },
  {
    "url": "t3_a4jou",
    "name": "I'm a 29 year old Boy Scout escaping to the wilderness for an indefinite time. -AmA"
  },
  {
    "url": "t3_a4qpq",
    "name": "IAMA hitchhiker, even though everybody says nobody does it anymore. AMAA"
  },
  {
    "url": "t3_a4vqx",
    "name": "I am 30, an international consultant who has travelled to over 50 countries. I investigate corruption and conflict and have worked in a number of dangerous countries. I am currently writing this from Mongolia. AMAA. "
  },
  {
    "url": "t3_a4zd9",
    "name": "I am a female psychopath. AMA."
  },
  {
    "url": "t3_a5czb",
    "name": "I make maps for a living. AMA"
  },
  {
    "url": "t3_a5mju",
    "name": "I am Scott Meyer, Creator of Basic Instructions, Walt Disney World Cast member and former Stand-up comic. AMA"
  },
  {
    "url": "t3_a5qwc",
    "name": "IAmA Automotive Mechanic who hates how fraudulent the industry is. AMA"
  },
  {
    "url": "t3_a5sez",
    "name": "IAmA Dumpster Diver, gathering $500 a week in groceries."
  },
  {
    "url": "t3_a5sf1",
    "name": "IAmA girl who was disowned for refusing an arranged marriage.  AMA"
  },
  {
    "url": "t3_a5xvv",
    "name": "IAmA diagnosed sociopath.  AMA."
  },
  {
    "url": "t3_a630v",
    "name": "IAm Joe Lauzon, current UFC Lightweight Fighter"
  },
  {
    "url": "t3_a6fke",
    "name": "I'm a Young Earth Creationist. AMA!"
  },
  {
    "url": "t3_a6fmg",
    "name": "By Request: IAMA person (woman) who genuinely regrets having kids."
  },
  {
    "url": "t3_a717q",
    "name": "IAMA volunteer patient escort at a women's health (abortion) clinic - AMA"
  },
  {
    "url": "t3_a71zz",
    "name": "IAmA 13 year old redditor. AMA"
  },
  {
    "url": "t3_a74ba",
    "name": "Not an adsense millionaire, but I make upwards of $2,000 per week through internet advertising. "
  },
  {
    "url": "t3_a7nc5",
    "name": "I'm the guy who does Dinosaur Comics.  AMA"
  },
  {
    "url": "t3_a7omn",
    "name": "IamA hippie.  White guy dreads, music festivals, love of nature, drum circles, the whole 9.  AMA."
  },
  {
    "url": "t3_a7w8a",
    "name": "IamA person who lost both their parents in a car crash. Now its just me and my two brothers. AMA"
  },
  {
    "url": "t3_a8an1",
    "name": "I was part of the product design team for Apple during the iMac, iPod and iPhone releases. IAmAA"
  },
  {
    "url": "t3_a8epy",
    "name": "I worked as an agent for the Chinese Public Safety department (Police and Intelligence) doing domestic surveillance. AMAA"
  },
  {
    "url": "t3_a8ez5",
    "name": "IAmA Brit that was at the Taj hotel in Mumbai, exactly one year ago during the terrorist attacks. I could have died in the all night siege but escaped with my life thanks to brave Indian police and commandos. AMA."
  },
  {
    "url": "t3_a8j7c",
    "name": "IAmA 19 yo girl who has been diagnosed with Lupus. AMAA"
  },
  {
    "url": "t3_a9b9z",
    "name": "I have Pica, AMA. "
  },
  {
    "url": "t3_a9hnt",
    "name": "I just got (gay) married in Iowa, I live in Texas.  AMA"
  },
  {
    "url": "t3_a9ogx",
    "name": "I only have one testicle. AMA"
  },
  {
    "url": "t3_a9xb1",
    "name": "IAmA Climber. Rock, ice, mountains, bouldering, bigwall, roped, solo, you name it I do it. AMA"
  },
  {
    "url": "t3_a9z4k",
    "name": "Could be boring, but here goes: I am a used and rare bookseller. AMA"
  },
  {
    "url": "t3_aade8",
    "name": "I am an air traffic controller in one of the busiest airspace's in the world. AMAA"
  },
  {
    "url": "t3_aaf52",
    "name": "IAMA bona fide Saudi Arabian. I'm well-informed about Saudi Arabia (politics, oil market, social scene, religious establishment, royal family, reform movement, etc.) but I'm not an apologist for the regime. AMA."
  },
  {
    "url": "t3_aauah",
    "name": "IAMA alcoholic who has been drinking every day for 12 years except for a 30 day aborted attempt to quit 3 months ago. Today I have 4 days sober. AMA."
  },
  {
    "url": "t3_abmr9",
    "name": "I am an astrophysicist, ask me anything!"
  },
  {
    "url": "t3_abqyk",
    "name": "IAMA Flight Attendant.  AMA."
  },
  {
    "url": "t3_achli",
    "name": "I am lonely and just want answer your questions.  AMA."
  },
  {
    "url": "t3_ackao",
    "name": "IAMA US Army Recruiter. AMA"
  },
  {
    "url": "t3_acz69",
    "name": "When I was 13, I came out as gay to my Fundamentalist parents and spent the next 5 years in conversion therapy. AMA."
  },
  {
    "url": "t3_ad1le",
    "name": "IAMA Cook in a fine dining restaurant.  AMA."
  },
  {
    "url": "t3_ad6wm",
    "name": "IAmA white IT dude working in China... as a consultant for an MMO gold farm. AMA"
  },
  {
    "url": "t3_adots",
    "name": "IAmA Honda Mechanic AMA"
  },
  {
    "url": "t3_aejc4",
    "name": "I work through a laptop &amp; travel 365 days/year (to wherever looks interesting). AMA"
  },
  {
    "url": "t3_aeyts",
    "name": "I am a woman who used to be a man, AMA"
  },
  {
    "url": "t3_afdjp",
    "name": "I am a PRACTICING American Muslim who is well-informed about Islam.  AMA"
  },
  {
    "url": "t3_ag25q",
    "name": "IAmA 18 y/o girl, just finished my suicide letters. AMA"
  },
  {
    "url": "t3_ag6id",
    "name": "IAMA 32 year-old female Dwarf and stand 4'4 tall. AMA."
  },
  {
    "url": "t3_ag6n9",
    "name": "I am a college professor. AMA"
  },
  {
    "url": "t3_agl28",
    "name": "IAMA former Disneyland Employee who worked most of the rides in Tommorowland and seen some interesting stuff. AMA"
  },
  {
    "url": "t3_agukj",
    "name": "IAMA Sikh, who wears a turban. AMA"
  },
  {
    "url": "t3_agvo6",
    "name": "IAMA synesthete.  AMA."
  },
  {
    "url": "t3_agzi9",
    "name": "IAmA 22 year-old, married, successful software engineer/IT guy who is very far along on a quest to (legitimately) catch all 493 Pokemon. AMA."
  },
  {
    "url": "t3_ah457",
    "name": "By request: I am an Islamic scholar who studied in Mecca. I also happen to be an atheist. AMA."
  },
  {
    "url": "t3_ahb2j",
    "name": "I've lost over 125 lbs. in 9 months. AMA"
  },
  {
    "url": "t3_ahnth",
    "name": "The Fed. Govt. paid me to live in remote mountain wilderness areas for 5 months at a time. AMA."
  },
  {
    "url": "t3_ahw4m",
    "name": "IAMAn Evolutionary Psychologist AMA"
  },
  {
    "url": "t3_ai988",
    "name": "My dad is a theoretical nuclear physicist and a physics professor. AHAA"
  },
  {
    "url": "t3_aic3j",
    "name": "I am a former debt collector licensed in 48 states, collected over $5m from regular working class Americans in just under 2 years. Ask me anything."
  },
  {
    "url": "t3_aijqe",
    "name": "I am sapphireblue, AMAA"
  },
  {
    "url": "t3_aikse",
    "name": "I worked in college admissions. AMAA. "
  },
  {
    "url": "t3_aip1g",
    "name": "IAmA former TSA Employee; Ask Me (almost) Anything"
  },
  {
    "url": "t3_ait0x",
    "name": "I am a girl who has had her first threesome.  Ask me anything. "
  },
  {
    "url": "t3_aitye",
    "name": "I am a former Hooters girl.  AMA!"
  },
  {
    "url": "t3_aiwrc",
    "name": "IAmA Computer Forensic Professional (+10 years) AMA."
  },
  {
    "url": "t3_aj0m2",
    "name": "I have an undiagnosed illness under study at a major university for over a year. AMA"
  },
  {
    "url": "t3_aj2pl",
    "name": "I'm an American Muslim.  And I don't want to kill you. Ask me stuff (I can't bring myself to type in AMA). "
  },
  {
    "url": "t3_aj2qb",
    "name": "IAmA guy with a Philosophy degree. AMA"
  },
  {
    "url": "t3_ajdt1",
    "name": "I pickup free stuff online from kijiji, craigslist, etc... Fix it, and sell it. AMA"
  },
  {
    "url": "t3_ajm2v",
    "name": "My wife had total global amnesia (all long and short term memory gone) and still hasn't fully recovered AMA"
  },
  {
    "url": "t3_ajpl8",
    "name": "As Requested: I AMA Visual Effects proffesional for Movies, TV, Music videos and more! AMAA"
  },
  {
    "url": "t3_ak0cd",
    "name": "IAmA girl who is 6ft 2in tall.... AMA"
  },
  {
    "url": "t3_ak30q",
    "name": "Iama person who showers with cold water. Every day. AMA"
  },
  {
    "url": "t3_ak4h7",
    "name": "IAMA recovering member of the erotic financial domination circuit. I would pay women on cam to take from me. It nearly destroyed my  life. AMA"
  },
  {
    "url": "t3_ak5n9",
    "name": "I was a male porn actor AMA"
  },
  {
    "url": "t3_ak5xg",
    "name": "(Per request) I am a much more Obese man than the one doing the AMA."
  },
  {
    "url": "t3_ak9ne",
    "name": "I am a neuropsychologist. Ask me (almost) anything."
  },
  {
    "url": "t3_akbxw",
    "name": "I was a bully.  AMA"
  },
  {
    "url": "t3_akh4i",
    "name": "I am a porn store clerk/janitor. AMAA"
  },
  {
    "url": "t3_akhan",
    "name": "I am an Indian computer professional working in USA. I find USA to be an amazing country where a person can realize his full potential. I know that it sounds like a fairytale but that is how I see it. AMAA (Ask Me Absolutely Anything). India, Religion, Culture whatever..."
  },
  {
    "url": "t3_akljw",
    "name": "I am a 17 year old girl who gets to 'look forward' to an arranged marriage. AMA."
  },
  {
    "url": "t3_akofs",
    "name": "IAmA Submariner who served on SSBNs AMAA"
  },
  {
    "url": "t3_akrna",
    "name": "I am a debunker of 9/11 conspiracy theories. AMA."
  },
  {
    "url": "t3_al1ik",
    "name": "I am a Bi-Polar sufferer, who works and is a single Mum. Ask me anything."
  },
  {
    "url": "t3_al2v3",
    "name": "IAmA:  I live in a trailer, in a trailer park in East Coast Canada.  I love it.  AMA."
  },
  {
    "url": "t3_al3qz",
    "name": "IAmA *New York Times* Bestselling Novelist.  AMA"
  },
  {
    "url": "t3_al5b2",
    "name": "I just spent 2.5 years sailing solo from the UK to Australia in a 26ft boat - Ask me anything."
  },
  {
    "url": "t3_al7vs",
    "name": "IAmA recovering heroin addict, clean and sober for 8 years, AMA"
  },
  {
    "url": "t3_albax",
    "name": "IAmA weird type of OCD - I have to watch movies hundreds of times - AMA"
  },
  {
    "url": "t3_alf6y",
    "name": "I am a music video Director and Producer who directed Lady GaGa's first video. AMA."
  },
  {
    "url": "t3_alful",
    "name": "IAmA Kona coffee farmer.  I used to be a computer game programmer until I quit and bought a Kona coffee farm."
  },
  {
    "url": "t3_almtg",
    "name": "Official Request List: The Fifth Element"
  },
  {
    "url": "t3_amt0d",
    "name": "IAmA middle-class private pilot with my own plane"
  },
  {
    "url": "t3_amx1o",
    "name": "I am an American expat living in New Zealand. AMA."
  },
  {
    "url": "t3_anfgj",
    "name": "I'm a cam girl... and I love it! AMA"
  },
  {
    "url": "t3_anm6r",
    "name": "IAmA Paramedic in a busy metropolitan EMS system..."
  },
  {
    "url": "t3_anvux",
    "name": "IAmA 21 year old girl who is getting labiaplasty.  AMA."
  },
  {
    "url": "t3_anz2d",
    "name": "By Request: I'm a wingwoman. I can help my guy friends pick up almost any girl they want. AMA"
  },
  {
    "url": "t3_aocjg",
    "name": "IAMA:JohnK Ren and Stimpy Creator"
  },
  {
    "url": "t3_aod2e",
    "name": "IAMA Wall St. lawyer who helped put together some of the mortgage-backed security deals that brought our economy to its knees."
  },
  {
    "url": "t3_aoox9",
    "name": "I am a culinary student at Le Cordon Bleu Atlanta. AMA"
  },
  {
    "url": "t3_aoq5u",
    "name": "IamA Falconer."
  },
  {
    "url": "t3_aostt",
    "name": "Watched Up In The Air? I travel almost as much as Clooney does in the movie. AMAA"
  },
  {
    "url": "t3_aowcd",
    "name": "MyDadIsAwesome. A(Him)A"
  },
  {
    "url": "t3_aozho",
    "name": "Born into LDS/Mormon church, did secret Masonic ceremony, served mission, resigned, forced to leave BYU. AMA"
  },
  {
    "url": "t3_ap6gv",
    "name": "I am a married mother of 2 who suffers from DID one of my alters is a lesbian. AMA"
  },
  {
    "url": "t3_apfr9",
    "name": "I am a NBC insider sick of the illogical group mind pro-Conan anti-Leno support on Reddit."
  },
  {
    "url": "t3_apmsw",
    "name": "By Request, IamA Tesla Owner. AMA."
  },
  {
    "url": "t3_aqabu",
    "name": "I am asexual. AMA."
  },
  {
    "url": "t3_aqd9r",
    "name": "IAMA Kierkegaard scholar, ask me anything."
  },
  {
    "url": "t3_aqj0f",
    "name": "IAMA Christian working on a degree in Biblical and Theological Studies. You may AMA."
  },
  {
    "url": "t3_aqpph",
    "name": "I flew to London to meet a girl I met on Omegle. AMAA"
  },
  {
    "url": "t3_aqs36",
    "name": "I am a world barista champion, and run a coffee roastery in London.  AMA"
  },
  {
    "url": "t3_ar46d",
    "name": "I AmA paraplegic 19 year old with too much free time. Ask me anything! IAmA"
  },
  {
    "url": "t3_ar8jk",
    "name": "IAmAn NBA official. AMAA"
  },
  {
    "url": "t3_arj1l",
    "name": "I am a functional alcoholic, 29/M. AMA."
  },
  {
    "url": "t3_arttp",
    "name": "Iama soldier in Iraq. I will be home in less then a month. AMA"
  },
  {
    "url": "t3_arxxl",
    "name": "I am a retained recruiter in New York. AMA, including resume advice and interviewing tips."
  },
  {
    "url": "t3_as1mx",
    "name": "By Request: I am from Iceland. AMA"
  },
  {
    "url": "t3_as6r2",
    "name": "IAMA FTM (female to male transgendered person) that just had lower surgery.  AMA"
  },
  {
    "url": "t3_aswak",
    "name": "I have just been kissed for the first time, less than 3 hours ago. AMA"
  },
  {
    "url": "t3_at1cx",
    "name": "I've been abused, been in and out of foster homes, juvi, and psych wards, been homeless, and now I'm a dying hermit. AMA."
  },
  {
    "url": "t3_atcpw",
    "name": "I am a Mormon.  I guess that makes me an illegal Reddit alien."
  },
  {
    "url": "t3_atg8p",
    "name": "I am a traditionalist Catholic, a creationist &amp; a long-time Reddit reader/user.  AMAA."
  },
  {
    "url": "t3_atnsb",
    "name": "I am in the casino industry, AMA."
  },
  {
    "url": "t3_atpgb",
    "name": "I am a auto mechanic of 13 years, worked for both after market as well as dealers, import and domestic. "
  },
  {
    "url": "t3_atyr9",
    "name": "I'm taking the Jeopardy! Online Test tomorrow night, so help me prepare by hitting me with your trivia questions!  AMA!"
  },
  {
    "url": "t3_au5jh",
    "name": "I was a cop, until I quit my job and sold my belongings to roam the earth. AMA."
  },
  {
    "url": "t3_au805",
    "name": "By Request : IAMA ?Ex Senior Executive/OT VI Ex-Scientologist"
  },
  {
    "url": "t3_auj9t",
    "name": "I am the dinosaur palaeontologist who wrote the long comments in the recent article on whale size.  Ask me anything."
  },
  {
    "url": "t3_ausxv",
    "name": "I'm Drew Curtis of Fark.  AMA."
  },
  {
    "url": "t3_av2pn",
    "name": "I broke my neck and have been paralysed ever since. AMA"
  },
  {
    "url": "t3_avkcv",
    "name": "I am Maddox, AMA."
  },
  {
    "url": "t3_avspf",
    "name": "I've heard voices in my head most of my life. AMA"
  },
  {
    "url": "t3_avug5",
    "name": "My wife and I thru-hiked the Appalachian Trail (2,176 miles) in 2008.  AMA."
  },
  {
    "url": "t3_aw1wd",
    "name": "I'm 3 years old.  AMAA"
  },
  {
    "url": "t3_aw7vl",
    "name": "IAMA Foreskin Restoration Device Tech (former) - I have helped create about 1000 ft. of foreskin worldwide. "
  },
  {
    "url": "t3_aw8f1",
    "name": "I am a black man that lives in the hood"
  },
  {
    "url": "t3_awgfw",
    "name": "I worked at a nudist resort for 2 years. AMA"
  },
  {
    "url": "t3_awos6",
    "name": "IAmA Pickup artist AMA"
  },
  {
    "url": "t3_aws4z",
    "name": "I am The Oatmeal.  AMA"
  },
  {
    "url": "t3_ax6gk",
    "name": "I am a gas station owner and am willing to give away our deepest, darkest secrets. AMA."
  },
  {
    "url": "t3_axdk9",
    "name": "I am a 911 dispatcher in an extremely busy, overworked system. Busting mine saving yours. AMA."
  },
  {
    "url": "t3_axo4e",
    "name": "IAMA guy who uses Couchsurfing exclusively to get sex. AMA."
  },
  {
    "url": "t3_axq6m",
    "name": "IAmA female who's active in the PUA/Seduction community.  I read the literature, coach guy friends, and act as a wingwoman.  AMA."
  },
  {
    "url": "t3_ay1fm",
    "name": "IAMA pregnant woman. AMA."
  },
  {
    "url": "t3_ay2jb",
    "name": "Per Request: A Jehovah Witness that does door to door preaching. AMA."
  },
  {
    "url": "t3_ay3mu",
    "name": "I just gave birth. AMA."
  },
  {
    "url": "t3_ayhac",
    "name": "I was in solitary confinement for about a year, AMA."
  },
  {
    "url": "t3_ayo1b",
    "name": "I have Synesthesia -- I can taste music. AMA"
  },
  {
    "url": "t3_ayoqx",
    "name": "IAmA - American Indian (well versed in Indian Law and the goings on of Indian Country). AMA"
  },
  {
    "url": "t3_azcni",
    "name": "I made $622,322.96 in 2009 from affiliate marketing. AMA."
  },
  {
    "url": "t3_azgs6",
    "name": "IAMA guy who sold his startup and I have like $20M in the bank.  AMA - Also, I have a question for reddit."
  },
  {
    "url": "t3_azixj",
    "name": "By Request: IAmA Brain Surgeon: AmA"
  },
  {
    "url": "t3_azlyx",
    "name": "I am a retained recruiter in New York who did a resume/interview advice AMA with 700 comments. Ready to help people get jobs - let's do round two!"
  },
  {
    "url": "t3_azw7l",
    "name": "By request: I lived in a Zen monastery for a year. AMA"
  },
  {
    "url": "t3_b08x3",
    "name": "I am a guy who's experienced the calm acceptance of death after being told I was going to die with a pistol in my face (IAMA requested by fellow redditors)."
  },
  {
    "url": "t3_b0l4m",
    "name": "IAMA person that went to a high school that was very ghetto. Pic for proof inside. AMA"
  },
  {
    "url": "t3_b10vm",
    "name": "IAMA: member of a household with a Nielsen ratings box. AMA"
  },
  {
    "url": "t3_b1bpp",
    "name": "I program elevators for a living. AMA"
  },
  {
    "url": "t3_b1dx5",
    "name": "I work for Apple. AMAA"
  },
  {
    "url": "t3_b1ql3",
    "name": "I am a stapler. AMA"
  },
  {
    "url": "t3_b1s9a",
    "name": "I work for ESPN - AMA!"
  },
  {
    "url": "t3_b20sx",
    "name": "By request: I'm a girl who used to eat toilet paper. AMA"
  },
  {
    "url": "t3_b2jet",
    "name": "I live with a craigslist prostitute. AMA"
  },
  {
    "url": "t3_b2lmh",
    "name": "IAMA deaf teenager boy"
  },
  {
    "url": "t3_b2se7",
    "name": "Every year I go to Germany to experience the rush on the Autobahn. AMAA"
  },
  {
    "url": "t3_b2tzz",
    "name": "I am the guy that runs Improv Everywhere AMA"
  },
  {
    "url": "t3_b3a1u",
    "name": "IAmA professional (American) distance runner...Have any questions?"
  },
  {
    "url": "t3_b4e9v",
    "name": "IAmA fat chick.  AMA"
  },
  {
    "url": "t3_b4tml",
    "name": "I just got breast implants two weeks ago. AMA"
  },
  {
    "url": "t3_b4y1k",
    "name": "IAmAn ex-Pen Shop Sales Advisor and frequently sold pens worth over $1000. AMA. "
  },
  {
    "url": "t3_b5455",
    "name": "IAmA paranoid schizophrenic. AMA"
  },
  {
    "url": "t3_b5984",
    "name": "IAMA guy who works in my families' porn business with both my parents. AMA"
  },
  {
    "url": "t3_b5oeg",
    "name": "IAMA cosmetic surgeon working in Los Angeles, CA."
  },
  {
    "url": "t3_b67c4",
    "name": "IAmA person who lived through the L.A. riots and saw people accosted, burned and murdered. AMA. "
  },
  {
    "url": "t3_b6glq",
    "name": "I am a Closed Captioning Editor for the hearing impaired,  AMA."
  },
  {
    "url": "t3_b6o4i",
    "name": "I am a female physicist.  AmA."
  },
  {
    "url": "t3_b78ta",
    "name": "IamA Australian Girl who met a Canadian boy on WoW, we now live together in Canada. AMA."
  },
  {
    "url": "t3_b7hpb",
    "name": "Re: the alleged 'conflict of interest' on Reddit about the moderating situation. Ask Mods Anything."
  },
  {
    "url": "t3_b7m9m",
    "name": "IAMA Health Insurance Lobbyist, AMA"
  },
  {
    "url": "t3_b83sh",
    "name": "By request, IAMA husband and father of a 15mo boy and another child on the way.  I found out a month ago that my wife has been having an affair for over a year, and I plan to tell her I know tomorrow night. AMA."
  },
  {
    "url": "t3_b8cq8",
    "name": "I am co-owner of an Exotic Car Rental Company. AMAA"
  },
  {
    "url": "t3_b9be6",
    "name": "I used to be a professional stage hypnotist and hypnotherapist AMA "
  },
  {
    "url": "t3_b9f7d",
    "name": "I used to work as a gunsmith. AMA!"
  },
  {
    "url": "t3_b9gct",
    "name": "IAmA UK bar owner. AMA"
  },
  {
    "url": "t3_b9no5",
    "name": "By Request, somebody who has participated in a Fight Club. AMA "
  },
  {
    "url": "t3_b9vav",
    "name": "IamA United States Marine.  AMA."
  },
  {
    "url": "t3_b9w6f",
    "name": "By Request:  IAMA High School Teacher"
  },
  {
    "url": "t3_ba0qw",
    "name": "I work in a Burn Center.  AMAA"
  },
  {
    "url": "t3_ba2g1",
    "name": "IAmA U.S. Marine recruiter AMA."
  },
  {
    "url": "t3_ba5t0",
    "name": "IAmA Person Who Has Been Badly Harassed By 4chan. AMA."
  },
  {
    "url": "t3_ba81r",
    "name": "I live in the most congested city in the world. IAMA."
  },
  {
    "url": "t3_ba8uo",
    "name": "I write custom essays for students who can't be bothered to write their own. AMA"
  },
  {
    "url": "t3_batuj",
    "name": "I have poorly thought out opinions. AMA"
  },
  {
    "url": "t3_bawsg",
    "name": "IAMA Pathological Liar. AMA."
  },
  {
    "url": "t3_bay2d",
    "name": "I am a Freemason. AMAA"
  },
  {
    "url": "t3_bb2k5",
    "name": "I am one of the guys who makes Cyanide &amp; Happiness. AMA"
  },
  {
    "url": "t3_bbfdg",
    "name": "I discovered my father's body moments after he committed suicide by shooting himself in the head. AMAA"
  },
  {
    "url": "t3_bbmkn",
    "name": "i just dunked a biscuit in my tea and lost half of it.AMA"
  },
  {
    "url": "t3_bbq47",
    "name": "IAmA Wiccan and practicing witch, AMAA"
  },
  {
    "url": "t3_bbqw7",
    "name": "I am the founder of a search engine (Duck Duck Go) that I run by myself, AMA"
  },
  {
    "url": "t3_bbxzx",
    "name": "I keep kosher. AMA."
  },
  {
    "url": "t3_bcauf",
    "name": "I am a 26 year old chef/owner of an upscale steak house in Texas. AMA."
  },
  {
    "url": "t3_bccmd",
    "name": "I am an Indian grad student in the US, and I thought Reddit might be interested in an outsider's perspective of life here. AMA. "
  },
  {
    "url": "t3_bd92y",
    "name": "IAmA Butcher AMA."
  },
  {
    "url": "t3_bdbh8",
    "name": "I am a (student) Machinist. I cut big bits of metal into very precisely shaped smaller bits of metal. AMA"
  },
  {
    "url": "t3_bdc0z",
    "name": "IAmA Cuckold Husband.   I Let My Wife Have Sex With Other Men AMA"
  },
  {
    "url": "t3_bdxzx",
    "name": "I'm the guy who replied to the 'Anyone ever dream about leaving civilization' post with a short tutorial on how I've lived in a cabin for 3 years. AMAA."
  },
  {
    "url": "t3_be6kn",
    "name": "IAmA world record holder on six classic arcade video games. AMA"
  },
  {
    "url": "t3_be900",
    "name": "IAmA 20 year old college student who was diagnosed with life-threatening food allergies when I was 9 months old (Or: Normal people food kills me). AMA."
  },
  {
    "url": "t3_belh5",
    "name": "IAmA Owner of a float/isolation tank (sensory deprivation) that I use for meditative and recreational purposes AMA. "
  },
  {
    "url": "t3_beqwf",
    "name": "I am an American born Jew who volunteered for the Israeli army. Was drafted, served in a combat unit and eventually absconded back to the USA. AMA"
  },
  {
    "url": "t3_bf87g",
    "name": "IAMA Lotto winner who's life wasn't fucked up with my win. AMA"
  },
  {
    "url": "t3_bfmzj",
    "name": "I am a crack addict.  AMA"
  },
  {
    "url": "t3_bg6c1",
    "name": "IAMA Swedish muslim who has experienced a lot of racism, AMA."
  },
  {
    "url": "t3_bg7oh",
    "name": "I work at a Frito Lay factory. AMA."
  },
  {
    "url": "t3_bgeiz",
    "name": "I am a 19 year old stripper. AMA."
  },
  {
    "url": "t3_bgp37",
    "name": "I get rid of phobias for a living. AMA"
  },
  {
    "url": "t3_bgw2r",
    "name": "IAmA Black American living in Tokyo. AMA!"
  },
  {
    "url": "t3_bgw9a",
    "name": "I am going through the drug war in Mexico --and it's not pretty. AMA."
  },
  {
    "url": "t3_bh21z",
    "name": "IAMA Indian who feels disenchanted and disenfranchised in the country I love. AMA"
  },
  {
    "url": "t3_bh4ie",
    "name": "I graded standardized high school exams. AMA."
  },
  {
    "url": "t3_bh63z",
    "name": "I have helped countless students cheat their way through college and graduate school. AMAA"
  },
  {
    "url": "t3_bhcjj",
    "name": "IAmA Sextoy saleswoman. AMA"
  },
  {
    "url": "t3_bi4tn",
    "name": "I was on Legends of the Hidden Temple.  Orange Iguanas FTW :) - AMA"
  },
  {
    "url": "t3_bi4ye",
    "name": "I've grown my own cannabis for four years, AMA."
  },
  {
    "url": "t3_bi8df",
    "name": "I am one of Jehovah's Witnesses.  Ill most likely be dissfellowshipped within the next month.  AMA"
  },
  {
    "url": "t3_bi8ff",
    "name": "IAMAn Upgrading Soccer Ref: Try to Stump Me! (AMA)"
  },
  {
    "url": "t3_bicoz",
    "name": "I am an Australian exchange student studying in the USA. AMA"
  },
  {
    "url": "t3_bigq0",
    "name": "I just got my doctorate in physics, AMA."
  },
  {
    "url": "t3_biuto",
    "name": "IAmA 23-year-old, married, successful software engineer/IT guy who has just finished a quest to (legitimately) catch all 493 Pokemon. AMA."
  },
  {
    "url": "t3_biv3x",
    "name": "I Am a Man Who Had to Spend a Full Month in Jail for Failure to Pay Child Support. Ask me Anything"
  },
  {
    "url": "t3_bj3l9",
    "name": "I was diagnosed with Stage IV cancer, and am currently undergoing chemotherapy.  AMA"
  },
  {
    "url": "t3_bjez1",
    "name": "By request: IWasA prep cook/dishwasher in Antarctica for 6 months"
  },
  {
    "url": "t3_bji1h",
    "name": "IAmA first-generation Chinese immigrant in Canada. I will try not to avoid sensitive topics.  Ask me about culture, politics, religion, nationalism, racism, sexism, philosophy, history, food, art, anything at all, just keep it civil please."
  },
  {
    "url": "t3_bjz74",
    "name": "I am an asexual who just 'came out' to his girlfriend. AMA."
  },
  {
    "url": "t3_bkhei",
    "name": "I am a former National Public Radio employee. AMA."
  },
  {
    "url": "t3_bkln0",
    "name": "IAMA IKEA Store Manager. AMA"
  },
  {
    "url": "t3_bkpwt",
    "name": "In the past month, I have given up cigarettes, weed, and video games in my quest for self improvement. AMA"
  },
  {
    "url": "t3_bkvqf",
    "name": "IAMA father of a 1 year old and have regrets about having a child. AMAA"
  },
  {
    "url": "t3_blc1t",
    "name": "IAmA former housekeeper at a 4-star hotel. AMA"
  },
  {
    "url": "t3_blj6v",
    "name": "IAm asexual. AMA"
  },
  {
    "url": "t3_blzgb",
    "name": "I was an internet meme: the Hello My Future Girlfriend kid. AMA."
  },
  {
    "url": "t3_bn9an",
    "name": "IAmA geeky, skeptical hypnotherapist. AMA."
  },
  {
    "url": "t3_bnr4r",
    "name": "I have a game site called Kongregate. Ask me anything."
  },
  {
    "url": "t3_bo3kt",
    "name": "IAMA 26 y/o male who was raised by lesbians AMA"
  },
  {
    "url": "t3_bof3k",
    "name": "I am an American podiatrist.  Ask me anything."
  },
  {
    "url": "t3_bopgq",
    "name": "IAMA Dunkin Donuts employee. AMA."
  },
  {
    "url": "t3_bqdjc",
    "name": "I have about $140,000 of unsecured debt with no real plan to pay it off. AmA"
  },
  {
    "url": "t3_bqfae",
    "name": "IAmA guy who was married, and will soon divorce a compulsive hoarder.  AMA"
  },
  {
    "url": "t3_br2a9",
    "name": "IAMA Professional recording artist, thanks to reddit. OR Reddit made my dream come true. OR I am proof that hard work andperseverance can pay off in the pursuit oyourdream. AMA"
  },
  {
    "url": "t3_bs1i9",
    "name": "As requested, IAmA Onion writer. AMA."
  },
  {
    "url": "t3_bs8bs",
    "name": "IAmA professional Concealment Designer. I make hidden compartments that are virtually undetectable. AMAA. "
  },
  {
    "url": "t3_bsdac",
    "name": "I traveled the world on a shoestring for 18 months AMA"
  },
  {
    "url": "t3_btbzm",
    "name": "I am a housewife, AMA"
  },
  {
    "url": "t3_buggt",
    "name": "Okay Reddit, here it goes. A little more than a year ago, I weighed 422lbs. As of today, I weigh 186 lbs. AMA."
  },
  {
    "url": "t3_buw5m",
    "name": "I am a college aged woman who has had an abortion. AMA"
  },
  {
    "url": "t3_bvd76",
    "name": "I am a career restaurant waiter (10 years in, six with the same company, have continually declined any sort of management role). AMA"
  },
  {
    "url": "t3_bvsqn",
    "name": "I'm a US citizen living in Sweden AMA"
  },
  {
    "url": "t3_bvx4e",
    "name": "IAMA an Irishwoman AMA"
  },
  {
    "url": "t3_bwumt",
    "name": "IAMA Casting Assistant at One of the Most Established and Respected Agencies in L.A., AMA"
  },
  {
    "url": "t3_bwze7",
    "name": "IAmA doctor who let a man die despite my legal obligations. AMA"
  },
  {
    "url": "t3_bxc6j",
    "name": "By Request: IAMA Disneyland engineer!"
  },
  {
    "url": "t3_bxy7x",
    "name": "Per request: IAMA pickpocket. AMA."
  },
  {
    "url": "t3_byblb",
    "name": "IAMA Adult Store Owner AMA"
  },
  {
    "url": "t3_bylar",
    "name": "As Requested: I come from Old Money. "
  },
  {
    "url": "t3_bylek",
    "name": "By request: someone who is in contact with Extraterrestrials."
  },
  {
    "url": "t3_bz92l",
    "name": "i REALLY am a baker. ama."
  },
  {
    "url": "t3_bzny9",
    "name": "By Request: I am a lucid dreamer.  AMA."
  },
  {
    "url": "t3_c0lpj",
    "name": "By request: I hire IT staff.  AMA"
  },
  {
    "url": "t3_c0o4b",
    "name": "I am Smile Lines girl. AMA"
  },
  {
    "url": "t3_c10jk",
    "name": "IAmA mother to a daughter who was sexually abused as a toddler. AMA."
  },
  {
    "url": "t3_c1610",
    "name": "After 8 years at Electronic Arts, today is my last day as a game programmer. AMAA*"
  },
  {
    "url": "t3_c1e2p",
    "name": "IAmA Professional Tattooist and Piercer AMA(by request)"
  },
  {
    "url": "t3_c1v56",
    "name": "I am a Subway sandwich artist. AMA."
  },
  {
    "url": "t3_c28od",
    "name": "I started Credit Karma. We provide Free Credit Scores. We sell advertising instead of using hidden fees. AMA"
  },
  {
    "url": "t3_c2nx9",
    "name": "I worked at the Geek Squad for 3.5 years.  AMA."
  },
  {
    "url": "t3_c2udg",
    "name": "IAmA Grooveshark Developer. AMA"
  },
  {
    "url": "t3_c2wnj",
    "name": "I will answer ANYTHING. AMA"
  },
  {
    "url": "t3_c36sn",
    "name": "I work for a mail order bride site. AMAA"
  },
  {
    "url": "t3_c3b7j",
    "name": "IAMA Stripper. AMA"
  },
  {
    "url": "t3_c3dt5",
    "name": "IAmA very sexually open female with a lot of experience.  AMA"
  },
  {
    "url": "t3_c42tg",
    "name": "IamA Woman Who is Married to a MTF Transgender Woman, AMAA. "
  },
  {
    "url": "t3_c42x0",
    "name": "I used to be a liberal, but now I'm a conservative. AMA."
  },
  {
    "url": "t3_c4et2",
    "name": "IamA 34 year old mother of a 3 year old little girl...I was diagnosed with cancer, lost my job, lost my health insurance and told my daughter was autistic...all in the last 2 years...AMA"
  },
  {
    "url": "t3_c5m2c",
    "name": "I am a guy who was abandoned by his father at age 5 and asked for child support. Now that I'm grown up the son of a bitch sued me in revenge. AMA."
  },
  {
    "url": "t3_c5z0n",
    "name": "I'm an Air Traffic Controller, at a busy center AMA!"
  },
  {
    "url": "t3_c6b6m",
    "name": "IAmA LARPer (Live Action Role Play). One weekend a month, I dress up as a medieval character, and fight people with foam weapons and pretend magical spells. AMA."
  },
  {
    "url": "t3_c6l57",
    "name": "IAMA Police Officer. AMA. "
  },
  {
    "url": "t3_c72vb",
    "name": "IAmA registered Libertarian, who is actively involved with the party and would like it  if you AMA. "
  },
  {
    "url": "t3_c79ix",
    "name": "By request:  I was a homeless gay teenager after being outed to my family and school when I was 16.  AMA"
  },
  {
    "url": "t3_c7jlx",
    "name": "IAmA fluent Welsh speaker, AMA"
  },
  {
    "url": "t3_c7jst",
    "name": "IamA retained recruiter in New York. This is my fourth AMA and I want to help more people land great jobs. "
  },
  {
    "url": "t3_c7lrc",
    "name": "I was blind for two years, made an AMA about it a few months ago, and now I'm dating a blind girl. AMAA"
  },
  {
    "url": "t3_c7maz",
    "name": "I drive a $500 car in a 24-hour endurance race (the 24 Hours of LeMons). AMA!"
  },
  {
    "url": "t3_c7snk",
    "name": "IamA Chef. AMA"
  },
  {
    "url": "t3_c8570",
    "name": "IAmA employee at a pawn shop in a shady part of town AMA."
  },
  {
    "url": "t3_c89wh",
    "name": "IAmA former military member that was That Guy"
  },
  {
    "url": "t3_c8bjl",
    "name": "I am an Orthodox Jew. AMA"
  },
  {
    "url": "t3_c8h4b",
    "name": "I work in tourism in Iceland. Ask me about the volcano, snow, Sigur Ros, snow or Bjrk."
  },
  {
    "url": "t3_c8uo4",
    "name": "I work at a spa AMA."
  },
  {
    "url": "t3_c91hx",
    "name": "By request - I am Warlizard, AMA"
  },
  {
    "url": "t3_c9823",
    "name": "I work at Taco Bell. AMA"
  },
  {
    "url": "t3_c9gtt",
    "name": "I worked at an xbox call center - AMA. "
  },
  {
    "url": "t3_c9iq1",
    "name": "I am a failed entrepreneur.  A little guy who lost to the big corporate bullies of the free market.  Ask Me Anything."
  },
  {
    "url": "t3_c9lch",
    "name": "I am the soon to be lineage holder of a very esoteric style of kungfu designed to mimic the duck. AMA"
  },
  {
    "url": "t3_c9mx6",
    "name": "[By Request] I am an experienced Startup CEO. AMA "
  },
  {
    "url": "t3_c9odc",
    "name": "I'm Jay Pavlina, creator of Super Mario Bros. Crossover. AMA"
  },
  {
    "url": "t3_ca331",
    "name": "I'm a black girl AMA"
  },
  {
    "url": "t3_ca3az",
    "name": "I am Zionist.  AMA."
  },
  {
    "url": "t3_ca9bm",
    "name": "IAMA Very Different Black Girl from the Other One. AMA."
  },
  {
    "url": "t3_cacno",
    "name": "IAmA 17-year-old lesbian. AMA."
  },
  {
    "url": "t3_car9s",
    "name": "I work in the porn industry. AMAA."
  },
  {
    "url": "t3_cax5f",
    "name": "I've had pet rats almost all my life. I have 7 of them now and I want to let people know how great they are because they are so misunderstood. AMA about rats! "
  },
  {
    "url": "t3_cb97b",
    "name": "IAmA vegan. It's been two and a half years and I quit animal products cold turkey. AMA."
  },
  {
    "url": "t3_cbcz5",
    "name": "IAMA 25 year old Israeli. I served in the IDF for three years, some of that time in the Gaza strip. AMA"
  },
  {
    "url": "t3_cc3fg",
    "name": "IAMA competitive chess player, AMA"
  },
  {
    "url": "t3_cd02l",
    "name": "IAmA 4chan/7chan/420chan/99chan/*chan oldfag. Ask me anything.."
  },
  {
    "url": "t3_cddw2",
    "name": "I just passed my U.S. history PhD exams (writtens &amp; orals), AMA."
  },
  {
    "url": "t3_ce01l",
    "name": "IAMA VIP Host in Vegas. AMA"
  },
  {
    "url": "t3_ce0r1",
    "name": "Per Request: I had an out of body experience. AMA"
  },
  {
    "url": "t3_ce6vn",
    "name": "I was raised my whole life in a cult, I participated in a mass wedding, as did my brother, sister, and parents.  iama former moonie, and their beliefs are much stranger than the public knows."
  },
  {
    "url": "t3_ce8ml",
    "name": "IAMA 26yr old Former Mormon (6 years free). Raised LDS, but used church sources to learn the truth at a young age. AMA"
  },
  {
    "url": "t3_ceeb5",
    "name": "I'm a Rental car agent at a major international airport.AMA"
  },
  {
    "url": "t3_ceyg3",
    "name": "I am a low/mid level Cannabis dealer in Canada; long-ish term"
  },
  {
    "url": "t3_cf9vn",
    "name": "I am a regular steroid user.  AMA"
  },
  {
    "url": "t3_cfbht",
    "name": "I just finished reading the Bible AMA!"
  },
  {
    "url": "t3_cfcbq",
    "name": "IAmA Chipotle Grill Guy, AMA"
  },
  {
    "url": "t3_cffor",
    "name": "IAMA By Request: I work in an abortion clinic in a major Canadian city. I do pre/post counseling. AMA. "
  },
  {
    "url": "t3_cfncw",
    "name": "I co-own two McDonald's franchises in the Eastern US. AMA."
  },
  {
    "url": "t3_cfug1",
    "name": "Just a guy that wants answer your questions and give you advice.  I cannot promise correct answers.  AMA."
  },
  {
    "url": "t3_cfzq2",
    "name": "IAmA card magician. I spent 10 years learning card tricks. AMAA."
  },
  {
    "url": "t3_cg60e",
    "name": "As a 20-year-old female, I spent 4 months wandering through Indonesia. I went alone, without a plan or a guidebook, and with only $1500 and 5lbs of gear. AMA."
  },
  {
    "url": "t3_cgeln",
    "name": "IAmA French woman from France. AMA"
  },
  {
    "url": "t3_cgw3g",
    "name": "IAmA 6'1 13 year old. AMA!"
  },
  {
    "url": "t3_ch8t5",
    "name": "I have Antisocial Personality Disorder, it's probably not what you think. AMA."
  },
  {
    "url": "t3_chc3k",
    "name": "IAmA fella getting sentenced to Federal Prison in less than 48 Hrs. I am facing 10 years. AMA."
  },
  {
    "url": "t3_ci6z9",
    "name": "I was a stripclub DJ for 5 years. Ask me anything. "
  },
  {
    "url": "t3_ci9qy",
    "name": "I am a Tea Connoisseur, AMA about tea!"
  },
  {
    "url": "t3_cikqi",
    "name": "I'm the girl from CollegeHumor.com AMA"
  },
  {
    "url": "t3_cixr4",
    "name": "IAmA about to be a father. My wife is in labor next to me doing a natural homebirth in our bedroom. Midwife and doulas are sleeping in the guest room."
  },
  {
    "url": "t3_cj2mn",
    "name": "IAmA Native American taking advantage of my free shit. AMA!"
  },
  {
    "url": "t3_cj35e",
    "name": "I hire prostitutes.  AMA"
  },
  {
    "url": "t3_cjbm5",
    "name": "IAMA person who makes $55K/year playing Second Life, AMAA."
  },
  {
    "url": "t3_cjbtb",
    "name": "I am married to a Crazy Cat Lady. Ask Me Anything!"
  },
  {
    "url": "t3_cjfe4",
    "name": "I'm a pro-gamer that has competed in Quake and CS for 5+ years, AMA"
  },
  {
    "url": "t3_cjmme",
    "name": "IAmA Card Counter and serious casino advantage player.  AMA."
  },
  {
    "url": "t3_cjwxd",
    "name": "IAMA RPG addict. I've played damn near every console RPG and PC RPG, and I can't stop. AMA"
  },
  {
    "url": "t3_cjx2i",
    "name": "IAmA Non-24. I sleep every 26 hours, no matter what the sun says. AMA."
  },
  {
    "url": "t3_ck5co",
    "name": "IAmA happy Fleshlight owner.  AMA"
  },
  {
    "url": "t3_ckiab",
    "name": "I just quit smoking.  AMA to keep my mind off of it."
  },
  {
    "url": "t3_cl17z",
    "name": "I got a job doing erotic massage. AMA"
  },
  {
    "url": "t3_cl5w8",
    "name": "Hey Reddit. It's my birthday in a few hours. I have no family, very few friends (business people I know who seem to care about me). AMAA"
  },
  {
    "url": "t3_clins",
    "name": "My job is writing software for slot machines and casino systems."
  },
  {
    "url": "t3_cm391",
    "name": "IAmA pizza delivery guy who has had some crazy experiences over many years. AMA"
  },
  {
    "url": "t3_cmh0l",
    "name": "I have one eye. AMA"
  },
  {
    "url": "t3_cmht0",
    "name": "IMA former Entrepreneur who started a company in 2002 based on software I wrote, and got it to the point of making nearly $50,000 a month when I was 22 years old. AMA"
  },
  {
    "url": "t3_cmngq",
    "name": "I worked for Big Tobacco, AMA."
  },
  {
    "url": "t3_cmqko",
    "name": "IAmA eunuch. AMA."
  },
  {
    "url": "t3_cmqos",
    "name": "As Requested: A Cuddle Party Attendee"
  },
  {
    "url": "t3_cmwnv",
    "name": "As requested: My family is Old Money, AMA"
  },
  {
    "url": "t3_cmxua",
    "name": "IAmA a black woman. Ask me anything about my hair."
  },
  {
    "url": "t3_cmy3y",
    "name": "As requested: IMA bankrobber"
  },
  {
    "url": "t3_cn9ig",
    "name": "I am a U.S. Marine, a veteran of the latter portion of the Iraq conflict. Ask me anything."
  },
  {
    "url": "t3_cnj4f",
    "name": "By request : IAMA woman who wears hijab AMA"
  },
  {
    "url": "t3_cnsx9",
    "name": "I was a high school prostitute. AMAA"
  },
  {
    "url": "t3_coe45",
    "name": "I smoked meth amphetamine for the first and last time yesterday and haven't slept since. AMA"
  },
  {
    "url": "t3_cohl7",
    "name": "IAmA Casino Surveillance Director, AMA."
  },
  {
    "url": "t3_coiry",
    "name": "IAmA 22y/o female who has never been on a date or in a relationship. AMA"
  },
  {
    "url": "t3_coo0b",
    "name": "IAmA Front Desk Agent at a 5 Diamond/4 Star hotel and casino in Las Vegas. AMA. "
  },
  {
    "url": "t3_copqt",
    "name": "IAmA Butcher, AMA"
  },
  {
    "url": "t3_cp0fu",
    "name": "iama man married since 1972 who knows the secrets of a happy marriage and a happy life ama"
  },
  {
    "url": "t3_cpip6",
    "name": "I married a MTF transsexual, she was my best friend as a child. AMA."
  },
  {
    "url": "t3_cppdf",
    "name": "IAmA Blind person (from birth) who has used Psychedelics (Entheogens) - Ask Me Anything!"
  },
  {
    "url": "t3_cps5l",
    "name": "I'm a 20/yo female on a Greyhound Bus for the next eleven hours.  I have wifi and an outlet.  AMA"
  },
  {
    "url": "t3_cpysq",
    "name": "Reddit, I am a 22y/o guy who graduated high school at 15 and college at 19. AMA"
  },
  {
    "url": "t3_cq2kq",
    "name": "When I was born, the doctors removed my testicles because they were strangulated. AMA."
  },
  {
    "url": "t3_cq50z",
    "name": "IAMA 23yo dad with a 9yo daughter."
  },
  {
    "url": "t3_cqtow",
    "name": "IAMA Chef de Partie at a two Michelin starred restaurant in NYC, AMA!"
  },
  {
    "url": "t3_cr1mm",
    "name": "By Request: I am a FTM transsexual."
  },
  {
    "url": "t3_crb5d",
    "name": "IAMA Long Haul Trucker. AMA."
  },
  {
    "url": "t3_crfe3",
    "name": "I let my wife give our friend a BJ, AMA."
  },
  {
    "url": "t3_crko6",
    "name": "I've worked at Apple Store Retail in Silicon Valley for over 3 years. AMA."
  },
  {
    "url": "t3_crmk2",
    "name": "I am a 23 year old guy in the middle of a 2 month solo motorcycle trip around America, camping every night. AMA"
  },
  {
    "url": "t3_crvcv",
    "name": "IAMA California Highway Patrol Officer..."
  },
  {
    "url": "t3_crx7n",
    "name": "I am a Ukrainian girl, AMA"
  },
  {
    "url": "t3_cs1wt",
    "name": "Iama guy that once killed a moose with my bare hands.... or my unlikely path to becoming a vegan."
  },
  {
    "url": "t3_cs6ac",
    "name": "IAmA Dad who has been asked to let people know that I was tour manager for Metallica through late 80's and 90's... will that do son?"
  },
  {
    "url": "t3_csgn9",
    "name": "IAmA  Computer Games programmer (15+ years) AMA"
  },
  {
    "url": "t3_csj2i",
    "name": "I am a phone sex operator. AMA"
  },
  {
    "url": "t3_cslsp",
    "name": "My very Chinese dad is a Traditional Chinese doctor (Herbs, acupuncture, massage, acupressure, Tai Chi, Qi, etcetc.) He is also a survivor of the Cultural Revolution. Double AHA."
  },
  {
    "url": "t3_cszx0",
    "name": "IAmA Raver. AMA."
  },
  {
    "url": "t3_ct9d8",
    "name": "IAmA Gay man in the United States military. AMA"
  },
  {
    "url": "t3_ctak9",
    "name": "IAMA Catholic who A) actually knows some theology but prefers rational discourse over, it's just faith, B) Is probably considered not in communion with the Church, C) Has no problems challenging his wavering faith, and D) Has 2 Calvinists and an Atheist as best friends. AMA"
  },
  {
    "url": "t3_ctb40",
    "name": "IAmA sudden single father. AMA"
  },
  {
    "url": "t3_cteho",
    "name": "IAmA Conservative who believes marijuana should be legal and that America should end its overseas empire. AMAA"
  },
  {
    "url": "t3_ctfz4",
    "name": "Not a troll. In exactly 4 hours and 45 minutes I am ending my own life. AMAA"
  },
  {
    "url": "t3_cthyf",
    "name": "BY REQUEST: Somebody who is a hoarder"
  },
  {
    "url": "t3_ctixw",
    "name": "I'm 21 years old with a 56 year old sugar daddy...AMA"
  },
  {
    "url": "t3_ctkvp",
    "name": "IAmA The Vice President of Operations for Redux Beverages makers of Cocaine Energy Drink."
  },
  {
    "url": "t3_ctoex",
    "name": "IAMA an Caucasian-American convert to Islam."
  },
  {
    "url": "t3_cu1m1",
    "name": "IAmA 25 yo graduate student in the physical sciences. I am alone and just ate two hits of acid. AMA"
  },
  {
    "url": "t3_cu1vz",
    "name": "IAmA community college professor AMA"
  },
  {
    "url": "t3_cu2x1",
    "name": "I was a stripper until the beginning of this year. AMA"
  },
  {
    "url": "t3_cu3dw",
    "name": "IAmA Hipster.  Ask me anything.  Also, answer the question Why do you hate hipsters?.  Don't hate."
  },
  {
    "url": "t3_cuaz4",
    "name": "IAMA person that just finished a 10 day water only fast. AMAA"
  },
  {
    "url": "t3_cuc07",
    "name": "IAMA wildly incompetent network security admin and have no business in my job. AMA.  "
  },
  {
    "url": "t3_cux6y",
    "name": "I'm a trader"
  },
  {
    "url": "t3_cv5an",
    "name": "IAmA VMware Technical Support Engineer. AMAA."
  },
  {
    "url": "t3_cvc1v",
    "name": "IAmA woman who was sexually abused for my whole childhood by my older brothers.  AMA."
  },
  {
    "url": "t3_cvnpa",
    "name": "IAmA malware coder. AMA"
  },
  {
    "url": "t3_cvqc5",
    "name": "IAmA Mormon.  AMA."
  },
  {
    "url": "t3_cvyrd",
    "name": "IAmA Driving instructor. AMA. Sounds boring, but I have interesting stories/insight"
  },
  {
    "url": "t3_cw0a0",
    "name": "I'm on house arrest AMAA"
  },
  {
    "url": "t3_cwbwt",
    "name": "IAmA slave in a 24/7 BDSM relationship. We have two children. AMA"
  },
  {
    "url": "t3_cwipy",
    "name": "IAMA Master living in a 24/7 BDSM Relationship. We are getting married in 3 months."
  },
  {
    "url": "t3_cwm8x",
    "name": "By Request: I worked in a chicken plant (slaughterhouse) for eight months. AMA."
  },
  {
    "url": "t3_cxfdw",
    "name": "IAm the daughter of Pharyngula's PZ Myers. AMA."
  },
  {
    "url": "t3_cxokl",
    "name": "IAmA Salt Miner 1700 feet below ground surface in New Mexico. AMA"
  },
  {
    "url": "t3_cxqzb",
    "name": "As requested: IAmA very early 4chan user. "
  },
  {
    "url": "t3_cxtz0",
    "name": "IamA Former WWE Employee. AMA "
  },
  {
    "url": "t3_cy2nu",
    "name": "IAMA Netflix employee. AMA."
  },
  {
    "url": "t3_cyctd",
    "name": "I am a Ticketmaster Employee. AMA"
  },
  {
    "url": "t3_cyidf",
    "name": "I am a very patient person who has had the hiccups for over a year.  Ask me anything."
  },
  {
    "url": "t3_cyiyd",
    "name": "I am what most of you would consider a stereotypical redneck. AMA."
  },
  {
    "url": "t3_cz468",
    "name": "By Request: I am a PETA supporter, AMAA."
  },
  {
    "url": "t3_cz867",
    "name": "I know all about how to learn languages. AMA especially if you would like some advice on how to or which language to learn."
  },
  {
    "url": "t3_czi0u",
    "name": "I am a college female who gets paid for sexual favors...AMA"
  },
  {
    "url": "t3_cziow",
    "name": "I am raising free-range children. AMA"
  },
  {
    "url": "t3_czofx",
    "name": "I am An Australian who was so annoyed with his country he moved to Canada. AMA"
  },
  {
    "url": "t3_czok1",
    "name": "IAmA Dinosaur AMA"
  },
  {
    "url": "t3_czt0l",
    "name": "I was diagnosed a Psychopath AMA"
  },
  {
    "url": "t3_czzdu",
    "name": "IAmA Commercial Airplane Pilot, AMA!"
  },
  {
    "url": "t3_d006u",
    "name": "I was born with one hand.  AMA"
  },
  {
    "url": "t3_d03op",
    "name": "I am a Hooters girl. AMA"
  },
  {
    "url": "t3_d05te",
    "name": "IAmA porn actress, AMA (by request)."
  },
  {
    "url": "t3_d0fg6",
    "name": "[By Request] IAM Flossdaily.  Answer Me Anything."
  },
  {
    "url": "t3_d0t1k",
    "name": "IAMA heroin addict. AMA"
  },
  {
    "url": "t3_d160d",
    "name": "I worked at Wal-Mart for almost five years (at two different stores in different states).  AMA."
  },
  {
    "url": "t3_d19eq",
    "name": "IAmA corporate strategist for a major arms manufacturer."
  },
  {
    "url": "t3_d1fp4",
    "name": "I ama fat chick. AMA."
  },
  {
    "url": "t3_d1pme",
    "name": "IAMA married man who has been having a secret, regular affair with another woman for 2.5 years.  AMAA"
  },
  {
    "url": "t3_d1qie",
    "name": "IamA Full-Time PETA Employee. AMA."
  },
  {
    "url": "t3_d27oc",
    "name": "IAMA manager of a movie theatre, and have worked in the biz for 10+ years. Ask me anything!"
  },
  {
    "url": "t3_d2alg",
    "name": "I work for reddit. AMA"
  },
  {
    "url": "t3_d2jtu",
    "name": "[By request] IAM the guy who brought Reddit discount Beef Jerky. We're a 78-year family business, I'm 4th generation. AMAA!"
  },
  {
    "url": "t3_d2lt4",
    "name": "Iama Pakistani living in Karachi. AMA."
  },
  {
    "url": "t3_d2mon",
    "name": "I Am a Wedding DJ, Ask Me Anything"
  },
  {
    "url": "t3_d2p3x",
    "name": "I Am A former debt collector, ask me your legal or random questions."
  },
  {
    "url": "t3_d338d",
    "name": "I had the police called on me for child abuse the other night at the grocery store.   Here's my story.  AMAA"
  },
  {
    "url": "t3_d3as7",
    "name": "IAmA Furry and a Scalie. AMAbsolutelyA. "
  },
  {
    "url": "t3_d3fvc",
    "name": "IAmA Rennie. AMA."
  },
  {
    "url": "t3_d3n2j",
    "name": "By Request: IAmA master coupon clipper. (I also live on approx. $7,000/yr.) AMA."
  },
  {
    "url": "t3_d3n73",
    "name": "I am a convicted rapist, released one year ago today AMA"
  },
  {
    "url": "t3_d44l5",
    "name": "I'm a cop. AMA"
  },
  {
    "url": "t3_d46s8",
    "name": "By request: someone related to the modern day mafia. AMAA."
  },
  {
    "url": "t3_d4aay",
    "name": "IAMA person who lived in a Buddhist monastery for 8 years.  "
  },
  {
    "url": "t3_d4cd0",
    "name": "I am married twenty years and regularly seeing an escort.  AMA."
  },
  {
    "url": "t3_d4it7",
    "name": "IAMA Traffic Engineer, AMA. [as requested]"
  },
  {
    "url": "t3_d4lrh",
    "name": "I went whale hunting with Eskimos in Alaska. Pictures included. AMA"
  },
  {
    "url": "t3_d4r6t",
    "name": "I was born without both hands, AMA."
  },
  {
    "url": "t3_d53w4",
    "name": "IAmA a survivalist/prepper, who can't wait for the SHTF, AMA."
  },
  {
    "url": "t3_d5ahg",
    "name": "Iama girl who is obsessed with rape."
  },
  {
    "url": "t3_d5dhh",
    "name": "IAm not your typical fat girl having weight loss surgery in about 6 weeks... AMA"
  },
  {
    "url": "t3_d5g8k",
    "name": "I lied about having a college degree. And now have a career. AMA"
  },
  {
    "url": "t3_d5hgn",
    "name": "IAmA prostitute AMAA"
  },
  {
    "url": "t3_d5osn",
    "name": "IAmA 17 year old atheist attending a Saudi public school, AMA"
  },
  {
    "url": "t3_d658q",
    "name": "IAmA rave DJ who spun at a party raided by 75 ATF/DEA agents (+ helicopters) - AMA "
  },
  {
    "url": "t3_d6d0m",
    "name": "Im the girl in the picture with the monistat box AMA!"
  },
  {
    "url": "t3_d6dzt",
    "name": "IAmA Public Defender.  AMAA."
  },
  {
    "url": "t3_d6n9k",
    "name": "I made $60,000 last year.  I am a professional waiter.  AMA"
  },
  {
    "url": "t3_d7e24",
    "name": "My job was to game Digg using infographics, voting networks, and bait-and-switch. It was the company's core business, and it was sleazy as hell. AMA."
  },
  {
    "url": "t3_d7qf9",
    "name": "[By request] IAMA ITT Tech graduate... AMA"
  },
  {
    "url": "t3_d7qzn",
    "name": "IAma minimalist and am happy as a result."
  },
  {
    "url": "t3_d7rxm",
    "name": "IAmA Martial Artist of 14 years and an instructor. AMA about self-defense, how to fight, body mechanics, experiences, etc."
  },
  {
    "url": "t3_d7xst",
    "name": "IAMA corrections officer (prison guard) at a supermax state prison. AMA."
  },
  {
    "url": "t3_d8b4d",
    "name": "IAmA resume screener for a company.  AMAA."
  },
  {
    "url": "t3_d8qbd",
    "name": "IAMA: Employee at a Drug Screening Facility"
  },
  {
    "url": "t3_d9o9d",
    "name": "I work as a nude maid. AMA"
  },
  {
    "url": "t3_d9tfp",
    "name": "IAmA deaf girl that uses ASL and went to a deaf academy K-12 AMA"
  },
  {
    "url": "t3_d9yqi",
    "name": "IAMA meteorologist on TV at the same station for 26 years. AMA."
  },
  {
    "url": "t3_da1nn",
    "name": "IAmA professional magician. AMA"
  },
  {
    "url": "t3_da3ji",
    "name": "IAmA 3,000,000 to 1 Nickelodeon contest winner.  AMA."
  },
  {
    "url": "t3_da6sa",
    "name": "IamA single dad of two boys - one who has extreme ADHD and an IQ of 140, the othe has Down Syndrome and an IQ of 50 - AMA"
  },
  {
    "url": "t3_dalcv",
    "name": "I'm (Female) Sex Worker who does Full-Service and BDSM AMA"
  },
  {
    "url": "t3_danfd",
    "name": "IAmA Redditor and member of the Mormon Church who will never be an atheist.  AMA."
  },
  {
    "url": "t3_dap5y",
    "name": "by request: IAMA Barber."
  },
  {
    "url": "t3_dates",
    "name": "IAmA gay guy who married a straight girl. AMA."
  },
  {
    "url": "t3_daypi",
    "name": "AMA I am a straight male working as a gay porn actor"
  },
  {
    "url": "t3_db830",
    "name": "IAMA Luckily married man who recently had a threesome with his wife and his high school crush AMaA"
  },
  {
    "url": "t3_dbclp",
    "name": "IamA 39 year old terminal cancer patient. AMA."
  },
  {
    "url": "t3_dbmnv",
    "name": "IAmA leukemia (CML) survivor who was told I only had two to three weeks left to live. I survived that shit!"
  },
  {
    "url": "t3_dbnoh",
    "name": "IAMA doctor who responded to is there a doctor on board? (by request)"
  },
  {
    "url": "t3_dbp99",
    "name": "IAMA retired narcotics cop. AMAA"
  },
  {
    "url": "t3_dbuk4",
    "name": "IAMA - a 38 yr old male who recently quit a multi-million dollar job because of boredom.  AMA."
  },
  {
    "url": "t3_dbuw5",
    "name": "By Request, I am Allie Brosh of Hyperbole and a Half. AMA."
  },
  {
    "url": "t3_dbv7u",
    "name": "IAmA Professional Thief. AMA"
  },
  {
    "url": "t3_dce3e",
    "name": "IAMA Woman with severe Body Dysmorphic Disorder"
  },
  {
    "url": "t3_dcgcq",
    "name": "Tomorrow (9/12), my gf and I are going to travel out-of-state to be gay-married. AmA!"
  },
  {
    "url": "t3_dcm31",
    "name": "IAMA ASE Master Tech.  What car problem can I help you with?"
  },
  {
    "url": "t3_dcthg",
    "name": "IAmA former heroin addict sober for seven years. AMA."
  },
  {
    "url": "t3_dctho",
    "name": "IAmA a Drainer.  I explore sewers, storm drains, and underground creeks.  AMA."
  },
  {
    "url": "t3_dddez",
    "name": "IAmA person whose income falls under the Canadian poverty line, yet I have more things than I need and money in the bank; AMA."
  },
  {
    "url": "t3_de04y",
    "name": "IAmA (was) a private investigator for a pre-employment background screening company. I have found that most people are woefully misinformed about the process. AMA"
  },
  {
    "url": "t3_de5yo",
    "name": "I am a Peace Corps volunteer in West Africa. IAMA"
  },
  {
    "url": "t3_de6jm",
    "name": "I am A 24 year old female who has had sex with between 500 - 1,000 men. Ask me anything about sex, the male anatomy, my experiences, etc..."
  },
  {
    "url": "t3_de93d",
    "name": "IAMA Guy who is just going to make up answers to questions you ask."
  },
  {
    "url": "t3_dedyb",
    "name": "I had the hiccups for 459 days straight.  It completely changed my life.  I tried EVERYTHING!  Nothing worked.  So I asked Reddit.  One of you changed my life.  "
  },
  {
    "url": "t3_deep0",
    "name": "IAmA 13 year old web dev and son of K.A. Applegate. AMA"
  },
  {
    "url": "t3_dejx3",
    "name": "I can prove beyond a reasonable doubt that the Holocaust is a myth.  AMA."
  },
  {
    "url": "t3_dewhy",
    "name": "DON'T EVEN THINK ABOUT DOWNVOTING THIS.  We have to finish.  I can prove beyond a reasonable doubt that the Holocaust is a myth. AMA. [Part III]"
  },
  {
    "url": "t3_dexdv",
    "name": "I shed a 170-lb monkey off my back in 1.5 years using hardcore prescription drugs (380 --&gt; 210). AMA."
  },
  {
    "url": "t3_df1r9",
    "name": "I am a 23y/o housewife.."
  },
  {
    "url": "t3_dfwnx",
    "name": "IAmA Swedish doctor who works in a socialized healthcare system. AMA"
  },
  {
    "url": "t3_dfzyb",
    "name": "IAMA guy who quit alcohol cold turkey after years of very heavy drinking - and woke up with paramedics over me on day four. Going through the first few days? AMA!"
  },
  {
    "url": "t3_dg014",
    "name": "I'm a girl and I was my college town's biggest drug dealer  AMA"
  },
  {
    "url": "t3_dg2en",
    "name": "IAMA victim of mother/daughter incest. AMA"
  },
  {
    "url": "t3_dgh5q",
    "name": "IAmA life long Christian and church leader who is on the verge of atheism. AMA."
  },
  {
    "url": "t3_dghle",
    "name": "I am a nerd. I am also a police officer. AMA"
  },
  {
    "url": "t3_dgk9a",
    "name": "IAM Professional Thief, AMA"
  },
  {
    "url": "t3_dgsw3",
    "name": "IAMa 60 year old father of 2 great kids. For many of you  I am old enough to be your father or even grandfather.  Ask me anything about being a parent.  I hope I can give you some insight into your folks."
  },
  {
    "url": "t3_dgv01",
    "name": "IAmA DonorsChoose.org executive, blown away by the ridiculous generosity of you Redditors. AMA."
  },
  {
    "url": "t3_dgwgh",
    "name": "I am sleeping with my biological brother AMAA"
  },
  {
    "url": "t3_dh3xa",
    "name": "IAMA Seven foot tall person AMA"
  },
  {
    "url": "t3_dh66u",
    "name": "IAMA Ex-Disneyland Character...Ready to tell you whatever you want to know. AMA"
  },
  {
    "url": "t3_di5to",
    "name": "I was just exonerated from a sexual harassment lawsuit at my workplace / university SOLELY due to gmail chat transcripts from Android phones, AMA"
  },
  {
    "url": "t3_dic9u",
    "name": "IAmA Emergency Room Nurse at a level one trauma center in worst neighborhoods in the US, AMA."
  },
  {
    "url": "t3_dijjf",
    "name": "By request, IAmA gang member (international motorcycle club). "
  },
  {
    "url": "t3_dijw7",
    "name": "IamA Loser.  I'm a mid-twenties male staying home on a Friday night (and probably tomorrow night, too) because I don't really have any friends.  I'll be around to answer questions!"
  },
  {
    "url": "t3_djddf",
    "name": "I recently spent some time in North Korea, AMA."
  },
  {
    "url": "t3_djore",
    "name": "By request: I lived in an actual police state. AMA about 80s Romania, bread lines, censorship, officially sanctioned atheism, etc. Fellow police state survivors, feel free to join it."
  },
  {
    "url": "t3_dk4ok",
    "name": "IAmA former atheist who converted to Catholicism. AMA."
  },
  {
    "url": "t3_dk7bb",
    "name": "I legally carry a concealed handgun. AMA."
  },
  {
    "url": "t3_dk8yp",
    "name": "IAmA HS teacher. This is a list of suggestions we got in our mailboxes today on how to dumb-down our classes even more than they already are. I'm so angry I can hardly see straight. AMAA"
  },
  {
    "url": "t3_dkdgh",
    "name": "IAmA Christian pastor, progressive, intellectual, pro-choice, pro-gay rights (and a woman). AMA"
  },
  {
    "url": "t3_dkjuk",
    "name": "I Am An Original Member of the Tea Party Before It Was Hijacked by the GOP and Misrepresented by the Media"
  },
  {
    "url": "t3_dlc4a",
    "name": "IAmA very bored human wanting conversation. Ask me a question, I may not be spectacular, but I'll answer it honestly."
  },
  {
    "url": "t3_dlles",
    "name": "IAmA 25y/o virgin who would be a total slut if not for Catholicism. AMA. "
  },
  {
    "url": "t3_dllht",
    "name": "IAMA founder of SuicideGirls.com AMAA"
  },
  {
    "url": "t3_dm198",
    "name": "I own a dive bar. AMA"
  },
  {
    "url": "t3_dmc4f",
    "name": "IAmA homeless singer/songwriter living in NYC known as homeless mustard but actually called daniel mustard who was recently seen on youtube via sirius XM satellite radio's opie and anthony. AMA "
  },
  {
    "url": "t3_dmg9n",
    "name": "I'm an atheist Palestinian whose name is Jehad, lived in Palestine for most of my life and ready to share my experience. AMA"
  },
  {
    "url": "t3_dmgvd",
    "name": "I work the graveyard shift at a very skeezy 24/7 Porn Shop. AMA."
  },
  {
    "url": "t3_dmv5o",
    "name": "I am a 20 year old male currently dating a Trap. AMA."
  },
  {
    "url": "t3_dn0x9",
    "name": "I get paid a lot of money to do nothing. AMA"
  },
  {
    "url": "t3_dn66r",
    "name": "I am a day trader who is up 35% over the past 12mos. AMA"
  },
  {
    "url": "t3_dnb01",
    "name": "IAmA 16 Year Old Orthodox Jewish Girl Going to An All Girls Private School. AMA"
  },
  {
    "url": "t3_dnbbg",
    "name": "IAmA person currently working on The Hobbit. "
  },
  {
    "url": "t3_dngag",
    "name": "IAmA son of Michael Behe, the Catholic biochemist who coined the term Irreducible Complexity.  I turned away from my family's Catholic faith two years ago and am now an outspoken atheist.  AMA."
  },
  {
    "url": "t3_dny2f",
    "name": "IAmA Saudi Arabian AMA"
  },
  {
    "url": "t3_do6ci",
    "name": "IAm Kenneth Grayson The Phone Booth Owner"
  },
  {
    "url": "t3_do7s4",
    "name": "IAma Skincare expert/formulator and would like to answer your questions about taking care of your skin!"
  },
  {
    "url": "t3_docwz",
    "name": "IAmA Radical Feminist. AMA."
  },
  {
    "url": "t3_doqmt",
    "name": "IAmA Zookeeper who has worked with over 300 species of animals. AMA"
  },
  {
    "url": "t3_dots4",
    "name": "I Just backpacked 2650 Miles on the Pacific Crest Trail, over 175 days. AMA"
  },
  {
    "url": "t3_doybm",
    "name": "I am an email spammer. Ask me anything."
  },
  {
    "url": "t3_dp483",
    "name": "IAmA girl that works in a butcher shop.  I sell bacon for a living.  AMA."
  },
  {
    "url": "t3_dp53l",
    "name": "My family was upper middle class in Soviet Union...AMA"
  },
  {
    "url": "t3_dpbfz",
    "name": "As requested, IAmA Detective"
  },
  {
    "url": "t3_dpg9c",
    "name": "I am a 22yo male who's been in a steady romantic relationship with a lesbian for over 3 years, AMA."
  },
  {
    "url": "t3_dpndp",
    "name": "I run one of those god damned awful music lyrics websites. AMA."
  },
  {
    "url": "t3_dpnxe",
    "name": "IamA college admissions officer. AMA"
  },
  {
    "url": "t3_dqkio",
    "name": "I Am A voice actor AMA"
  },
  {
    "url": "t3_dqq2o",
    "name": "IAmA guy who owns a website publishing business, works from home, and earns $600,000 - $900,000 per year.  AMAA about online business.  "
  },
  {
    "url": "t3_dqsf4",
    "name": "IAmA nude model for art classes. AMA"
  },
  {
    "url": "t3_dr6wu",
    "name": "I work for a local Homeland Security department, and it's all run by cronies. We're not ready for a disaster. AMAA"
  },
  {
    "url": "t3_dr7zp",
    "name": "IAMA Guy who is going to compliment you. AMA"
  },
  {
    "url": "t3_drex9",
    "name": "IAmA medium between the supernatural and natural world (so to speak)"
  },
  {
    "url": "t3_drlf3",
    "name": "IAmA girl with thick hair growing all over my body."
  },
  {
    "url": "t3_droit",
    "name": "IAMA Paranormal investigator AMA"
  },
  {
    "url": "t3_drouh",
    "name": "I am Cyriak, AMA"
  },
  {
    "url": "t3_dt3lg",
    "name": "My dad was a radio intercept operator for the NSA during the Cold War. He's 77 years old. AMA, and I will forward your questions to him--He's right here."
  },
  {
    "url": "t3_dta55",
    "name": "I'm a retired French riot police captain. AMA."
  },
  {
    "url": "t3_dtw03",
    "name": "IAmA weev AMAA"
  },
  {
    "url": "t3_dtzzn",
    "name": "IAMA Brothel Keeper AMA"
  },
  {
    "url": "t3_dufqf",
    "name": "IAmA pedestrian who was hit by a bicyclist."
  },
  {
    "url": "t3_dukkl",
    "name": "IAMA person who has totally changed my life for the better and guess what? It's not worth it. AMA"
  },
  {
    "url": "t3_dum9k",
    "name": "IAmA musician touring with a multi-platinum band rocking out tens of thousands every week...but really a complete nerd. AMA"
  },
  {
    "url": "t3_duw9p",
    "name": "IAmA (used to be a) baggage handler for a major US air carrier. Ever wanted to know what happens your bag? AMA"
  },
  {
    "url": "t3_duyca",
    "name": "IAmA Co-founder of Ninite.com - the easiest way to get software. The site just turned one! AMA"
  },
  {
    "url": "t3_dv05n",
    "name": "I'm that crazy girlfriend everyone warns you about. AMA."
  },
  {
    "url": "t3_dv22y",
    "name": "I AM stuck in hospital tonight alone, frightened and bored. AMA to help me pass the time?"
  },
  {
    "url": "t3_dvixa",
    "name": "IAMA 3rd year medical student who is on the admissions committee"
  },
  {
    "url": "t3_dvq8u",
    "name": "I spent 5 years thinking I was being haunted. It turned out I was just schizophrenic. AMA."
  },
  {
    "url": "t3_dvwkb",
    "name": "IAMA  white South Africa male who grew up during apartheid. I am happy to answer any questions Reddit has to ask about life during (and after) apartheid in South Africa. AMA"
  },
  {
    "url": "t3_dwakh",
    "name": "IAmA For 5 years, I was a member for one of the largest movie piracy groups in the world. AmA"
  },
  {
    "url": "t3_dwd3y",
    "name": "IAMA Guy who has slept with hundreds of prostitutes.  AMA"
  },
  {
    "url": "t3_dwe4i",
    "name": "I use scanning electron microscopes as part of my graduate work. Request a photo or AMA"
  },
  {
    "url": "t3_dwrpj",
    "name": "I live my life barefoot and believe shoes are not only uncomfortable, but unhealthy. AMA"
  },
  {
    "url": "t3_dwuhu",
    "name": "IAmA Domain Name Buyer/Seller AMA"
  },
  {
    "url": "t3_dx1r5",
    "name": "IAmA living in the Middle East for the last 20 years. Ground realities are different from what the media says. AMA"
  },
  {
    "url": "t3_dx60w",
    "name": "I suffer from ichthyophobia (fear of fish). AMA"
  },
  {
    "url": "t3_dx9h5",
    "name": "IAmA Cop.  AMAA."
  },
  {
    "url": "t3_dxu0a",
    "name": "IAmA Guy who works at the wheel of an $800 million cruise ship. AMA"
  },
  {
    "url": "t3_dxym5",
    "name": "IAmA Mountie. AMA."
  },
  {
    "url": "t3_dyak2",
    "name": "I just finished riding my bicycle 4000 miles from DC to LA. AMA."
  },
  {
    "url": "t3_dykeu",
    "name": "IAMA 39 y.o. guy recovering from emergency penis surgery last night. My injury occurred during vigorous sex with my wife. AMA and yes, prepare for TMI."
  },
  {
    "url": "t3_dyt6w",
    "name": "IAMA For 9 years I was a member in some of the largest software piracy groups in the world. AMA"
  },
  {
    "url": "t3_dyvhp",
    "name": "IAmA 26 year old American who quit his job, left his family and friends, and moved to Australia. AMA."
  },
  {
    "url": "t3_dz5lp",
    "name": "Per Request - IAmA phone sex therapist/financial dominatrix. AMA"
  },
  {
    "url": "t3_dz6pm",
    "name": "By Request: IAMA Freemason. AM(A)A"
  },
  {
    "url": "t3_dzi75",
    "name": "I worked a year as TSA passenger screener.  Let me have it."
  },
  {
    "url": "t3_dzjul",
    "name": "IAmA Optician here with an Optometrist - Ask us Anything!"
  },
  {
    "url": "t3_dzm83",
    "name": "By Request: IAmA person with HIV "
  },
  {
    "url": "t3_dznv4",
    "name": "By Request: IAmA Freemason, have traveled the world studying the esoteric symbolism contained therein... and would like to offer a more esoteric perspective. AMAnything. "
  },
  {
    "url": "t3_dzray",
    "name": "IAMA(n) atheist working at a creationist museum in Texas. AMA. "
  },
  {
    "url": "t3_dzt47",
    "name": "IAmA 18 year old female to male transsexual. AMA "
  },
  {
    "url": "t3_dztoi",
    "name": "IAmA Auto Mechanic - AMA"
  },
  {
    "url": "t3_e03n2",
    "name": "IAmA(n) IT guy who works for the police and feels like I am on the wrong side"
  },
  {
    "url": "t3_e04ex",
    "name": "IAmA 25/f who just left an abusive husband after only 4 months of marriage.  AMA"
  },
  {
    "url": "t3_e0dmz",
    "name": "I'm Anthony Burch, co-creator of Hey Ash, Whatcha Playin'. AMA."
  },
  {
    "url": "t3_e13ca",
    "name": "IAmA Buddhist, AM(a)A"
  },
  {
    "url": "t3_e17vr",
    "name": "IAmA sound to color synesthete and can tell when people are lying.  AMA"
  },
  {
    "url": "t3_e1poh",
    "name": "Hi Reddit! Im a 26 year old female who works in CTS-DECON which basically means that I clean up crime scenes."
  },
  {
    "url": "t3_e1q2l",
    "name": "IAmA member and volunteer for an organization that supports and encourages the extinction of the human race. AMA"
  },
  {
    "url": "t3_e24ek",
    "name": "IAMA Cop in an wealthy suburban city.  AMAA."
  },
  {
    "url": "t3_e2cxa",
    "name": "IAMA coloured South African who used to have some pretty crazy ideas about the world. AMA"
  },
  {
    "url": "t3_e2jwt",
    "name": "I never wanted to have kids and now my girlfriend is pregnant. My head is so heavy right now..."
  },
  {
    "url": "t3_e3899",
    "name": "IAmA hooker AMA"
  },
  {
    "url": "t3_e3gtw",
    "name": "IAmA 17 year old guy with two moms. I was concieved via sperm donor. AMA."
  },
  {
    "url": "t3_e3iwx",
    "name": "IAMA American guy living in Ethiopia trying to make the world a better place. AMA."
  },
  {
    "url": "t3_e3nvp",
    "name": "I got motherfucking Bell's Palsy on Sunday. Let's do an AMA before I turn to a life of crime under the moniker Two Face."
  },
  {
    "url": "t3_e3wlm",
    "name": "IAmA personal stylist for men. I teach men how to dress, how to present themselves and how to take pride in their appearance. AMA."
  },
  {
    "url": "t3_e40xd",
    "name": "IAmA 37-year old woman with a 20-year old boyfriend. AMA."
  },
  {
    "url": "t3_e41ia",
    "name": "I was sexually, physically, and emotionally tortured for 8 years by my mother and her boyfriend, AMA."
  },
  {
    "url": "t3_e47ic",
    "name": "IAma vintage girl. AMA"
  },
  {
    "url": "t3_e49v8",
    "name": "By Request, IAMA TSA Supervisor. AMAA"
  },
  {
    "url": "t3_e4bsb",
    "name": "IAMA ex cutter celebrating one year without hurting herself. "
  },
  {
    "url": "t3_e4l39",
    "name": "I used to work in a Pawn Shop, AMA!!"
  },
  {
    "url": "t3_e4n07",
    "name": "IAmA 97lb. Female Powerlifter. AMA. "
  },
  {
    "url": "t3_e4w4d",
    "name": "IAMA a Canadian Chinese who found some Redditors' ignorance of China sad and hilarious. AMA "
  },
  {
    "url": "t3_e5buf",
    "name": "IAMA owner of a Subway restaurant"
  },
  {
    "url": "t3_e5kef",
    "name": "IAmA Best Man in two weeks for the marriage between my girlfriend and her fiance AMA."
  },
  {
    "url": "t3_e5olu",
    "name": "IAMA Tattoo Artist With 40+ Years, Ask Me Anything"
  },
  {
    "url": "t3_e5x5c",
    "name": "AMA I outran the 2004 tsunami [by request]"
  },
  {
    "url": "t3_e5xi9",
    "name": "So this guy (me) lives in the woods, and is video blogging building a 12ft spider mech. Seriously. AMA"
  },
  {
    "url": "t3_e64fx",
    "name": "I was a manager of a porn shop for two years. AMA"
  },
  {
    "url": "t3_e6a2e",
    "name": "IAmA fairly liberal Christian, who doesn't like the intolerant stereotype."
  },
  {
    "url": "t3_e6ct2",
    "name": "I trolled my 10 year-old daughter this weekend. AMA"
  },
  {
    "url": "t3_e6gf9",
    "name": "IAmA career line cook with almost 20 years experience, mostly in fine dining... ask me anything."
  },
  {
    "url": "t3_e72nr",
    "name": "12 years working on bikes in an LBS. AMA"
  },
  {
    "url": "t3_e7mx3",
    "name": "IAMA philosopher. Ask me what I think about things, I will do my best to evaluate the situation and be open to new ideas. AMA"
  },
  {
    "url": "t3_e7pru",
    "name": "IMA TSA Transportation Security Officer, AMA"
  },
  {
    "url": "t3_e7q3m",
    "name": "By request: IAm the creator of the Prey Project. We help catch the bad guys and recover your stolen laptop/phone. AMA."
  },
  {
    "url": "t3_e88at",
    "name": "IAmA documentarian who spent 8 months in Transylvania investigating vampires and the supernatural, AMA."
  },
  {
    "url": "t3_e8f50",
    "name": "IAmA Guy who has smoked K2 for the last year AMA"
  },
  {
    "url": "t3_e8od3",
    "name": "IAmA Pubcrawl Leader, living in Key West. I take tourists to bars and drink with them for a living. AMA"
  },
  {
    "url": "t3_e8re6",
    "name": "IAmA Video Game Business Wonk, the Project Lead from Costume Quest, and Tim Schafer -- AUA"
  },
  {
    "url": "t3_e8zb0",
    "name": "Depressed, burnt out and bored in medical school, don't want to be a doctor anymore.  AMAA."
  },
  {
    "url": "t3_e93b4",
    "name": "I AMA person who has never lived in the same place for more than ten months since I was 18.  In the last ten years I've had twenty-three jobs and lived on four continents AMA. "
  },
  {
    "url": "t3_e96e5",
    "name": "IAMA Mall Santa"
  },
  {
    "url": "t3_e99nk",
    "name": "I was raised in a cult.  AMA."
  },
  {
    "url": "t3_ea09c",
    "name": "I worked for Limewire for 5 years, AMAA"
  },
  {
    "url": "t3_eav6c",
    "name": "IAmA certified BMW technician. AMA"
  },
  {
    "url": "t3_ebjbe",
    "name": "IAmA survivor of sexual abuse by a Catholic priest, and have successfully sued the diocese that hired my molester AMA"
  },
  {
    "url": "t3_ebp84",
    "name": "I am in the dorm of my community college. I am the only person here, possibly the only person on campus. AMA"
  },
  {
    "url": "t3_ebt26",
    "name": "IAmA garbage collector 50 hours a week. AMA."
  },
  {
    "url": "t3_ebuw9",
    "name": "I agreed with my girlfriend to 40 days of no masturbation or sex and am currently 3 weeks in. AMA."
  },
  {
    "url": "t3_ec7l1",
    "name": "IAmA 32 year old who earns between $300k -500k/year.  AMA"
  },
  {
    "url": "t3_ec7qd",
    "name": "IAMA 27yo M who is dedicating his life to preparing for the Zombie Apocalypse.  As it turns out, this is a profitable, practical career path."
  },
  {
    "url": "t3_ecbg7",
    "name": "IAMA lady who enjoys wearing a butt-plug in public, AMA"
  },
  {
    "url": "t3_ecnhb",
    "name": "IAmA Fully Sick Rapper. AMA."
  },
  {
    "url": "t3_ed0pn",
    "name": "IAmA Freemason.  I am to be installed as Worshipful Master of my Lodge in about a week and a half.  AMA."
  },
  {
    "url": "t3_edbme",
    "name": "IAmA YouTube Star. I make $2000 - $3000 a month. AMA"
  },
  {
    "url": "t3_edmux",
    "name": "(by request) I am dating a man who has been in porn. AMA"
  },
  {
    "url": "t3_edvd4",
    "name": "IAmA Middle-aged Guy With Useful Middle-aged Guy Knowledge. AMA"
  },
  {
    "url": "t3_edyoz",
    "name": "IAMA HR manager.  I have interviewed and hired hundreds of candidates in both large and small companies.  AMA."
  },
  {
    "url": "t3_edzcy",
    "name": "IAmA believing and active Mormon.  AMA."
  },
  {
    "url": "t3_ee0b9",
    "name": "IAmA inner city school teacher. AMA"
  },
  {
    "url": "t3_ee0hc",
    "name": "IAmA segment producer, anchor, and writer for the internet and television program Naked News.  AMA"
  },
  {
    "url": "t3_eeqf9",
    "name": "IAmA former smoker, quit one year ago today, and YOU SHOULD QUIT SMOKING TODAY!"
  },
  {
    "url": "t3_eewou",
    "name": "IAmA (Retired) Cat Burglar - AMA"
  },
  {
    "url": "t3_ef6gv",
    "name": "IAmA also a guy in his 20s who went through the Kosovo war, witnessed atrocities, but I was on the other side... "
  },
  {
    "url": "t3_ef6o5",
    "name": "IAmA: Editor and Columnist for Cracked.com, and just had my first book published this year. AMAA"
  },
  {
    "url": "t3_efdc9",
    "name": "IAmA pharmacist in a relatively large metropolitan area. AMA"
  },
  {
    "url": "t3_efl7g",
    "name": "IAmA phone sex operator with an IQ of 142 - AMA"
  },
  {
    "url": "t3_efvf2",
    "name": "IAmA Wall Street Investment Banker. AMA."
  },
  {
    "url": "t3_egbqy",
    "name": "I impaled my head on a spike. AMA"
  },
  {
    "url": "t3_egjgw",
    "name": "IAmA girl who was raped &amp; reported it to police who then refused to file charges."
  },
  {
    "url": "t3_egor1",
    "name": "I was the lead singer of Black Sabbath for a day, and one of the founding/touring singers of Trans-Siberian Orchestra. AMA"
  },
  {
    "url": "t3_egq6h",
    "name": "I am a Professor of Mathematics in Vanderbilt University. Ask me questions."
  },
  {
    "url": "t3_egspn",
    "name": "IAmA Video Game Composer.  AMA."
  },
  {
    "url": "t3_egyxo",
    "name": "IAmA Owner of the Mana Bar - the video game cocktail bar. AMA."
  },
  {
    "url": "t3_eh76d",
    "name": "IAmA Raver &amp; Ecstasy Dealer. AMA."
  },
  {
    "url": "t3_eh7fw",
    "name": "My secret santa gift is being held hostage unless I do an AMA.  But the demands were vague, so I'm not sure what this AMA should be in regards to... AMA."
  },
  {
    "url": "t3_ehvgd",
    "name": "My dad has climbed Everest six times (and other such adventurous things). AM/HimAA."
  },
  {
    "url": "t3_eicjf",
    "name": "I'm the Imgur guy, AMA (part two)."
  },
  {
    "url": "t3_eiysc",
    "name": "IAmA reddit co-founder who started a company (breadpig) where we give away all of the profits ($160,000+ so far!). AMA"
  },
  {
    "url": "t3_ej32l",
    "name": "We are the Hotmail development team. Lets talk email. AUsA"
  },
  {
    "url": "t3_ejl9o",
    "name": "IAmA restaurant owner, one of the few who actually makes money. Always dreamed of opening your own restaurant or nice cosy cafe? Ask me anything..."
  },
  {
    "url": "t3_ejs3r",
    "name": "I am Deaf. AMA"
  },
  {
    "url": "t3_ekd1o",
    "name": "IAM my own OKCupid wingman. I have a fake profile much better looking than me who chats up girls so my real profile can approach them smarter"
  },
  {
    "url": "t3_ekq87",
    "name": "I'm Japanese finishing English study in a week. Like to share or answer questions and opinions."
  },
  {
    "url": "t3_eku7r",
    "name": "I'm the biggest Simpsons fan I know. AMA about the Simpsons!"
  },
  {
    "url": "t3_ekvmm",
    "name": "IAMA Normal person, like you, who manufactures and distributes small amounts of DMT. AMA"
  },
  {
    "url": "t3_el5qs",
    "name": "By request: I am English 'old money'. AMA."
  },
  {
    "url": "t3_elryj",
    "name": "IAmA Conservative, Christian, Non-Redneck, Reddit user. "
  },
  {
    "url": "t3_elt8w",
    "name": "We are Machinae Supremacy, AMA."
  },
  {
    "url": "t3_eltuw",
    "name": "IAmA female Soldier in the US Army. AMA."
  },
  {
    "url": "t3_elui1",
    "name": "I'm the guy who traded a red paperclip for a house.  AMA"
  },
  {
    "url": "t3_em7of",
    "name": "I am an American Girl living in Japan. AMA"
  },
  {
    "url": "t3_em9m8",
    "name": "IAmA black woman who WAS married to a white redditor...He changed my life. AMA!"
  },
  {
    "url": "t3_emkbj",
    "name": "I make more in 2 weeks than most people do in a year.  AMA"
  },
  {
    "url": "t3_emv3d",
    "name": "I really am a Catholic priest, and I love being a priest and love the Church.  AMAA"
  },
  {
    "url": "t3_en0ti",
    "name": "I am an Ubuntu Unity Developer, AMA"
  },
  {
    "url": "t3_en1o7",
    "name": "I am a Correctional Officer AMA"
  },
  {
    "url": "t3_en4ft",
    "name": "By Request: Iam Old Asian Money AMA"
  },
  {
    "url": "t3_en7em",
    "name": "IAmA LAPD officer, AMA, (by request)"
  },
  {
    "url": "t3_ena36",
    "name": "By Request: IAmA woman who was born to atheist parents but is now a strong Christian. AMA"
  },
  {
    "url": "t3_enese",
    "name": "I look at your colon. I'm a GI doctor. AMAA (by request)"
  },
  {
    "url": "t3_ensga",
    "name": "I am from a no money family. AMA."
  },
  {
    "url": "t3_eo3da",
    "name": "IAmA Former Police Dog Trainer"
  },
  {
    "url": "t3_eoez6",
    "name": "IAmA 22 year old chemistry student who just sold his first patent for over $250k, AMA"
  },
  {
    "url": "t3_eokjq",
    "name": "IAMAN engineer that makes sure the power grid in the U.S. stays up and running AMA"
  },
  {
    "url": "t3_eouhk",
    "name": "I work at a chain buffet. Over half our clientele is overweight, the other half is old. I see wolf shirts every single day. AMA "
  },
  {
    "url": "t3_ep839",
    "name": "IAmA Master Mechanic. AMA."
  },
  {
    "url": "t3_epev4",
    "name": "Update on 'I'm gay and my family are probably going to disown me tomorrow'"
  },
  {
    "url": "t3_epfmk",
    "name": "IAmA woman who was pregnant with twins, but both died in utero - I have to carry them for 2 more days. AMA"
  },
  {
    "url": "t3_epo4u",
    "name": "IAmA - Barefoot Runner. Here's why I ditched my shoes, and you should too."
  },
  {
    "url": "t3_eqc5c",
    "name": "I am Benn Jordan, the founder of non-profit label Alphabasic and musician known as The Flashbulb. AMA"
  },
  {
    "url": "t3_eronk",
    "name": "I delivered our baby daughter about 10 minutes after Google taught me how to. On Christmas day. AMA."
  },
  {
    "url": "t3_erxyf",
    "name": "IAMA person that sold everything I owned and traveled around the world. AMA"
  },
  {
    "url": "t3_eskjf",
    "name": "I am phone girl (answers phones/book calls) for an Escort Agency.. AM(almost)A"
  },
  {
    "url": "t3_esuta",
    "name": "IAmA chauffeur with 25 years experience behind the wheel (and behind the divider, hehe). AMA "
  },
  {
    "url": "t3_esw9n",
    "name": "I work at Medieval Times. AMA"
  },
  {
    "url": "t3_et2lb",
    "name": "I am a American Paramedic, and am eager to share my hot medical opinions. Ask me anything!"
  },
  {
    "url": "t3_et7vu",
    "name": "By Request: I wrote Reddit Enhancement Suite - AMA"
  },
  {
    "url": "t3_et9kq",
    "name": "IAmA person that hit and killed a pedstrian."
  },
  {
    "url": "t3_ete2c",
    "name": "IAmA college admissions professional who decides who gets into the school and who gets scholarships AMA"
  },
  {
    "url": "t3_etg09",
    "name": "I got threatened by Gary Larson, Blizzard Entertainment, Corona Beer, Krispy Kreme and others because of photoshop contests I run on my site, Worth1000. AMA"
  },
  {
    "url": "t3_etmyn",
    "name": "IAmA New York Times bestselling novelist. AMA."
  },
  {
    "url": "t3_eumgo",
    "name": "I went to Jesus camp every year of my life from age 7 to 16. AMA."
  },
  {
    "url": "t3_eur5d",
    "name": "IWA Extra in Lord of the Rings. Mostly an Elf but also played a Rohan, Uruk-Hai and Wildman."
  },
  {
    "url": "t3_euthv",
    "name": "IAmA Night Shift Waffle House Waitress...AMA"
  },
  {
    "url": "t3_ev2zb",
    "name": "I run ThatHigh.com and it pays my rent in San Francisco.  AMA."
  },
  {
    "url": "t3_ewtb2",
    "name": "I spent the summer living with the Maya in a small village in Belize, total immersion. AMA. "
  },
  {
    "url": "t3_ex8dc",
    "name": "IAmA a former lonely father, I was bringing up my daughter since she was 3 months old until she became 18 month old. Happily married then to a former lonely mother, her daughter is 9 month older than mine. We made a nice family out of the mess each of us was in. We're in Russia. AMAA."
  },
  {
    "url": "t3_eyk5n",
    "name": "IAmA girl who regrets my abortion. AMA"
  },
  {
    "url": "t3_eykz5",
    "name": "::: don hertzfeldt, filmmaker:  AMA"
  },
  {
    "url": "t3_ezbdu",
    "name": "As Requested: I am an American MD, AMAA."
  },
  {
    "url": "t3_ezgm1",
    "name": "IAmA Chinese girl with cup D. AMA"
  },
  {
    "url": "t3_ezp99",
    "name": "IAm the national coordinator of OpenMedia.ca, the organization behind the campaign to stop usage-based billing in Canada (www.StopTheMeter.ca). AMA!"
  },
  {
    "url": "t3_ezwc5",
    "name": "IAmA British Muslim, born and brought up in the UK here to answer question on my life and views - and combat misconceptions. "
  },
  {
    "url": "t3_f09rk",
    "name": "IAMA Myspace employee about to be laid off today"
  },
  {
    "url": "t3_f0avf",
    "name": "We are four Microsoft Lync Systems Engineers here to talk about our product, Lync, Ask Us Anything"
  },
  {
    "url": "t3_f0cr2",
    "name": "I was a Minuteman Combat Crew Member in the 70s, sharing the power to destroy the earth. AMA"
  },
  {
    "url": "t3_f0ezk",
    "name": "IAmA Exotic Dancer,AMAA"
  },
  {
    "url": "t3_f11yq",
    "name": "By request: I am a psychoanalyst"
  },
  {
    "url": "t3_f13js",
    "name": "Ask a Stripper anything!"
  },
  {
    "url": "t3_f1gfl",
    "name": "IAmA 28-yr-old female virgin. AMA."
  },
  {
    "url": "t3_f1j6u",
    "name": "I am a NASA Bioengineer, and my story was picked up by the awesome people at vbs.tv. I am constructing an Undersea Colony, and was told there was some interest, so ask away!"
  },
  {
    "url": "t3_f1khe",
    "name": "I live in the 3rd biggest city in Mexico and the way of life here has changed drastically here in the past 4 years because of Drug Traffic and Cartels. AMAA."
  },
  {
    "url": "t3_f307l",
    "name": "I am a straight man who received free rent and other consideration from a gay man in exchange for oral sex"
  },
  {
    "url": "t3_f30y9",
    "name": "IAmA Police Officer. I've created an account on reddit specifically to be able to contribute to conversation regarding the Police. AMA."
  },
  {
    "url": "t3_f4e94",
    "name": "IAmA medically transitioned 18 year old (female-to-male). "
  },
  {
    "url": "t3_f4mxs",
    "name": "I briefly worked with Thierry/Mr. Brainwash (from Banksy's 'Exit Through The Gift Shop'). AMA"
  },
  {
    "url": "t3_f4nmx",
    "name": "I am a psychologically disabled 21 year old college student with a psychiatric service dog."
  },
  {
    "url": "t3_f562r",
    "name": "IAmA YouTube insider. I can tell you all about YouTubers, YouTube politics, adsense, YouTube's role as a company, etc. AMA"
  },
  {
    "url": "t3_f5gcl",
    "name": "IAmA person who has hired a lot of people. If you want to maximize your chances, ask me anything."
  },
  {
    "url": "t3_f5qjy",
    "name": "IAMA girl who spent roughly 16 months as a full time BDSM slave a few years ago"
  },
  {
    "url": "t3_f5w7i",
    "name": "I Am a Master in a 24/7 BDSM Relationship AMA"
  },
  {
    "url": "t3_f60pj",
    "name": "I'm 23 and have been homeless off and on for the last 6 years. In that time I've hitchhiked and ridden freight trains across this continent more times than I can remember. AMA"
  },
  {
    "url": "t3_f66zc",
    "name": "I run CollegeHumor Originals. AMA"
  },
  {
    "url": "t3_f6vli",
    "name": "IAmA a 42 year old man who has been drinking a dozen 16-oz beers and a mickey of whiskey every night for six years and am, so far as I know, still gainfully employed. "
  },
  {
    "url": "t3_f73ma",
    "name": "Iama 5 time NYT best selling novelist, author of 'Revenge of the Sith', and am now working on a fan created project to turn my Caine novels into a comic series. AMA."
  },
  {
    "url": "t3_f7c6n",
    "name": "I have been a professional dominatrix for ten years. Ask me (almost) anything. "
  },
  {
    "url": "t3_f7qth",
    "name": "I weight 600lbs plus and will have bariatric surgery in a month...AMA"
  },
  {
    "url": "t3_f7squ",
    "name": "I am proficient in wilderness survival skills. AMA"
  },
  {
    "url": "t3_f89jr",
    "name": "Six years ago my wife and I sold everything and bought a 90ft tunnel oven to make cookies. We're now shipping between 1 and 4 thousand pounds per week.  AMA"
  },
  {
    "url": "t3_f8fii",
    "name": "As Requested: WeAreA Three Person Relationship - AUA"
  },
  {
    "url": "t3_f91js",
    "name": "I've worked with Taylor Lautner and Russell Crowe. I work in the film industry."
  },
  {
    "url": "t3_f9agl",
    "name": "I just worked on an episode of Castle, where I got to do a scene with Nathan Fillion &amp; Stana Katic. AMA"
  },
  {
    "url": "t3_f9nhq",
    "name": "Hey Reddit.  Masuka here.  This is my buddy's iama page.  Let's get it to Front Page.  He is one funny mofo."
  },
  {
    "url": "t3_f9q79",
    "name": "IAmA synesthete who tastes words. AMA"
  },
  {
    "url": "t3_f9rpi",
    "name": "I thru-hiked the Appalachian Trail - AMAA"
  },
  {
    "url": "t3_fa3cm",
    "name": "IAmA professional *male* model. AMA"
  },
  {
    "url": "t3_far1w",
    "name": "IAMA 32 year old, non-traditional college student.  My school newspaper did a story about me because I am completing a B.A. in two years while working as a full-time employee."
  },
  {
    "url": "t3_farit",
    "name": "I am a Park Ranger; AMA"
  },
  {
    "url": "t3_fasrs",
    "name": "IAmA deaf girl. AMA."
  },
  {
    "url": "t3_fatpc",
    "name": "I'm a schizophrenic"
  },
  {
    "url": "t3_fb1cn",
    "name": "IAmA small animal ER and general practice veterinarian.  AMA"
  },
  {
    "url": "t3_fb6a6",
    "name": "For two years, Noam Chomsky was my academic mentor.  He later disowned me for becoming a propagandist. AMA."
  },
  {
    "url": "t3_fbdj3",
    "name": "IAmA young women who recently became an escort"
  },
  {
    "url": "t3_fbg47",
    "name": "IAmA someone who is already dead  or at least I think I am (Cotard delusion). AMA."
  },
  {
    "url": "t3_fbptr",
    "name": "I am a 20 year-old comedian and redditor. My name is Bo Burnham. AMA"
  },
  {
    "url": "t3_fc40s",
    "name": "IAmA person who drops coins in parking meters just so the revenue generators (meter maids/kops) don't win ... "
  },
  {
    "url": "t3_fc5k2",
    "name": " IAmA Knowledgeable car guy AMA"
  },
  {
    "url": "t3_fd90a",
    "name": "I am a 6 ft tall girl who towers over most guys, ask me anything."
  },
  {
    "url": "t3_fdlh4",
    "name": "I serve Costco samples. AMA."
  },
  {
    "url": "t3_fe3m5",
    "name": "I AM the AT&amp;T Guy that you bitch to when your cellphone doesn't work, when you ask for credits or request to get a different type of phone. AMA AND YES ILL TELL YOU EVERYTHING!"
  },
  {
    "url": "t3_feeme",
    "name": "I work at H&amp;R Block (and have for years).  Got tax questions?"
  },
  {
    "url": "t3_fejt1",
    "name": "I Am a ten digit lottery winner.   Ask me (almost( anything."
  },
  {
    "url": "t3_feoat",
    "name": "IAmA support agent for the XBox360 that is going to quit soon. AMA"
  },
  {
    "url": "t3_fetl0",
    "name": "IAmA professional chef. "
  },
  {
    "url": "t3_fewax",
    "name": "I was wrongly convicted of sexual assault on a minor, spent 3 years in jail and was a registered sex offender. Just recently cleared. AMA"
  },
  {
    "url": "t3_fexrv",
    "name": "I work in a gunshop, AMA"
  },
  {
    "url": "t3_ffb5x",
    "name": "I was a backline tech for a bunch of metal bands, AMAA"
  },
  {
    "url": "t3_ffepc",
    "name": "IAmA 16 year old boy with severe OCD. I count everything, slice my feet, and can hardly hold a conversation anymore. AMA."
  },
  {
    "url": "t3_fflw0",
    "name": "IAmA software developer at Microsoft. AMAA"
  },
  {
    "url": "t3_ffxuk",
    "name": "IAmA very good lucid dreamer who has managed to lucid dream every night for years while examining the dreamscapes with the eye of a scientist gauging using them as proof of the calculating abilities of the human mind."
  },
  {
    "url": "t3_fgeko",
    "name": "I just went 96 hours without heroin for the first time in five years. AMA."
  },
  {
    "url": "t3_fghv6",
    "name": "My father is 67 and my stepmother is 19. They got together 3 years ago. AMA."
  },
  {
    "url": "t3_fgnyv",
    "name": "I was raped, got pregnant but my boyfriend still married me. AMA "
  },
  {
    "url": "t3_fgpss",
    "name": "I'm an ex-Scientologist, AMA"
  },
  {
    "url": "t3_fh3mg",
    "name": "IAmA man who was repeatedly raped in prison. AMA"
  },
  {
    "url": "t3_fhjpz",
    "name": "By Request: I was sent to remuda ranch when i was very young, i've been on a reality television show, and apparently I have been a meme since I was 16 AMA"
  },
  {
    "url": "t3_fhufo",
    "name": "IAMA Chief Information Officer (CIO) for a company with 15,000 employees."
  },
  {
    "url": "t3_fi50j",
    "name": "IAMA former Catholic priest who left the church (and faith) after discovering the extend of sexual abuse corruption."
  },
  {
    "url": "t3_fi7w2",
    "name": "When I was 17, I came home with my boyfriend to lose my virginity.  I found my dead mother instead. AMA."
  },
  {
    "url": "t3_fidr6",
    "name": "IAmA Producer for APB Reloaded, the most anticipated Free2Play game of 2011!"
  },
  {
    "url": "t3_fii0u",
    "name": "I drive an emergency vehicle in the US. I just wanted to clarify to others about emergency vehicles in traffic."
  },
  {
    "url": "t3_fj9o7",
    "name": "IAmA C6/C7 quadriplegic that just happened to wake up this way about four years ago. I am 30 years old now. AMA {4}"
  },
  {
    "url": "t3_fjay1",
    "name": "IAMA LDS (Mormon) teen about to go to BYU next year, then I'll be on my mission for two years. Then I'm looking to get married after my mission. AMA."
  },
  {
    "url": "t3_fjfby",
    "name": "IAmA Director of an ISP who was the first person to ever challenge the constitutionality of the USA PATRIOT Act's National Security Letter provision.  AMA. "
  },
  {
    "url": "t3_fk1qn",
    "name": "I am a TV news reporter. (by request)"
  },
  {
    "url": "t3_fkpdf",
    "name": "IAmA registered sex offender, and have been since I was 15. AMA."
  },
  {
    "url": "t3_fkvsc",
    "name": "I am a 19 year old Phone Sex Operator, AMA! "
  },
  {
    "url": "t3_fkw37",
    "name": "Physician... AMA"
  },
  {
    "url": "t3_fldd1",
    "name": "IAmA: Geek Squad in store repair agent who actually knows how to fix things, AMA."
  },
  {
    "url": "t3_flf4d",
    "name": "I am an Optician. I deal with glasses and contacts all day almost every day.  AMA"
  },
  {
    "url": "t3_flp9d",
    "name": "I am a Dominant in a 24/7 BDSM relationship AMA (NSFW)"
  },
  {
    "url": "t3_flpwl",
    "name": "By request - I(was)A Private Eye. AMA."
  },
  {
    "url": "t3_fm8s5",
    "name": "By Request: I was a freight train hopper. AMA"
  },
  {
    "url": "t3_fmja0",
    "name": "By Request:  IAmA (retired) FBI Agent"
  },
  {
    "url": "t3_fmxco",
    "name": "IAmA Yeshivish Jew From NYC Willing To Reveal All Secrets"
  },
  {
    "url": "t3_fnr2i",
    "name": "IAmA Vegas casino security guard. The TV show Las Vegas is *nothing at all* how casinos are run currently. "
  },
  {
    "url": "t3_fo285",
    "name": "IAmA typical Tea Party member if you would like to have a civil discussion, AMA?"
  },
  {
    "url": "t3_fog9d",
    "name": "AMAA.. IAM the girl who Something Awful used to refer to as 'Lobster Girl'(aka Rachbaby) here's my story. 8 fingers, no thumbs. [reposted from r/self]"
  },
  {
    "url": "t3_foid8",
    "name": "IAmA licensed, practicing psychotherapist with 18+ years experience.  AMA."
  },
  {
    "url": "t3_fopdl",
    "name": "IAmA waitress at a strip club. AMA"
  },
  {
    "url": "t3_fouhg",
    "name": "IAm A Roman Catholic priest.  AMA."
  },
  {
    "url": "t3_foyt2",
    "name": "IamA Beekeeper,AMA"
  },
  {
    "url": "t3_fp046",
    "name": "IAMA - Wisconsin protest organizer who has been helping since Tuesday"
  },
  {
    "url": "t3_fp2wl",
    "name": "IAmA person who sometimes spends up to 6 hours pooing AMA."
  },
  {
    "url": "t3_fp4wn",
    "name": "IAM in a long term relationship with a heroin addict. AMA. "
  },
  {
    "url": "t3_fp805",
    "name": "IAmA Female with Faceblindness and Aspergers AMA"
  },
  {
    "url": "t3_fp9a8",
    "name": "I work in the game industry for one of the largest video game studios in the world. AMA"
  },
  {
    "url": "t3_fpkf4",
    "name": "IAmAn Imam"
  },
  {
    "url": "t3_fpkzw",
    "name": "IAmA WWI scholar.  Ask me anything."
  },
  {
    "url": "t3_fpp8v",
    "name": "IAmA Bahraini Citizen, and I will tell you what's REALLY going on in Bahrain."
  },
  {
    "url": "t3_fpxzk",
    "name": "Blind since the day I was born and lovin' almost every minute of it. AMA"
  },
  {
    "url": "t3_fqcrw",
    "name": "I am a recently diagnosed Psychopath."
  },
  {
    "url": "t3_fqcu9",
    "name": "IAmAn Achromat. I don't see colors. Ask away."
  },
  {
    "url": "t3_fqo5z",
    "name": "I've had a headache every single day for the last 3 years. AMA"
  },
  {
    "url": "t3_fqowm",
    "name": "I own a Ferrari F430 - AMA (xpost from /r/cars)"
  },
  {
    "url": "t3_fqvru",
    "name": "I am a female wheat farmer, AMA"
  },
  {
    "url": "t3_fr1z6",
    "name": "IAMA 23 year old woman stuck in her office today, and I think it's going to be a slow day.  AMA. And I mean Anything."
  },
  {
    "url": "t3_fri2a",
    "name": "IAmA 23 year old male high school teacher. AMA"
  },
  {
    "url": "t3_frizo",
    "name": "I visited North Korea in 2008, AMA"
  },
  {
    "url": "t3_frsah",
    "name": "I got drunk one night, came back to my hotel and booked flights to the North pole.....the next day I was in Svalbard.....AmA"
  },
  {
    "url": "t3_frxmc",
    "name": "One of my friends apparently encountered someone with more Seinfeld trivia knowledge than myself. I am here to prove him wrong. AMA"
  },
  {
    "url": "t3_fs4ea",
    "name": "IAmA 19yr old girl who's entire family is on the run and in hiding from my sociopathic, homicidal 22yr old sister. AMA"
  },
  {
    "url": "t3_fsa63",
    "name": "IAmA Past Master of a Masonic Lodge AMA!"
  },
  {
    "url": "t3_fsjh7",
    "name": "2 years ago I left my American geek life in New York  to build a green ecohouse in Sweden. With no experience. Ask me anything."
  },
  {
    "url": "t3_fsm45",
    "name": "I am 30 and have won $500 000 playing cards, I work 15hours a week : I am an online poker pro AMAA."
  },
  {
    "url": "t3_fspnh",
    "name": "I am a  7 foot tall individual who never hears the end of it. "
  },
  {
    "url": "t3_fsv9j",
    "name": "IAmA teenager who lost both of my parents in a crash and became a parent over night"
  },
  {
    "url": "t3_ft8iy",
    "name": "I grew up on sailboat on the Caribbean, AMA"
  },
  {
    "url": "t3_ft9ic",
    "name": "IAmA 21 year old guy who sleeps in the same bed as his mom.  "
  },
  {
    "url": "t3_ftejb",
    "name": "I pick up dead bodies. AMA."
  },
  {
    "url": "t3_fu755",
    "name": "I disarmed IEDs in Afghanistan. AMA"
  },
  {
    "url": "t3_fuh7m",
    "name": "IAMA Ultrarunner and just completed my 2nd 100 mile 30 hour event.  AMA."
  },
  {
    "url": "t3_fuhxi",
    "name": "IAMA 22 year old male who suffers from PERMANENT low libido (sex drive) because I took Propecia (hair loss prescription drug) for less than one month AMA"
  },
  {
    "url": "t3_fv356",
    "name": "IAMA former strip club DJ... AMA"
  },
  {
    "url": "t3_fvucp",
    "name": "Soap Opera Cameraman for over 30 years"
  },
  {
    "url": "t3_fvyjk",
    "name": "I am somebody who fell in love with someone my mind invented, who then killed herself. AMA"
  },
  {
    "url": "t3_fw1wf",
    "name": "IAmA hypnotist willing to discuss any and all details of the trade. AMA. "
  },
  {
    "url": "t3_fw5tu",
    "name": "I was raised vegetarian and have never eaten meat in my life. AMA"
  },
  {
    "url": "t3_fwi60",
    "name": "IAmA 23 year old Venezuelan/American living in Hong Kong. In November I was almost murdered by a mob/gang in China after defending a girl from abuse and now have a 7 inch scar on my face. Photos inside. AMA"
  },
  {
    "url": "t3_fwker",
    "name": "IAmA Detective Sergeant at a mid-size police agency, specializing in computer crimes, computer forensics, and cell phone forensics.  AMAA."
  },
  {
    "url": "t3_fwpzj",
    "name": "IAmA 74-time Jeopardy! champion, Ken Jennings.  I will not be answering in the form of a question."
  },
  {
    "url": "t3_fxagd",
    "name": "IAmA owner and director of one of the largest adult (ie porn) conventions in the United States... AMA... "
  },
  {
    "url": "t3_fxhsu",
    "name": "I'm 4 years old.  AMAA."
  },
  {
    "url": "t3_fxtnm",
    "name": "I have Xeroderma Pigmentosum. I am 22 years old, and I am not going to live much longer.. AMA"
  },
  {
    "url": "t3_fylso",
    "name": "IAmA firstborn male child of the super-rich. AMA"
  },
  {
    "url": "t3_fyoyg",
    "name": "IAmA 17 year old female heroin addict that's been hiding my problem from family and friends for years. AMA"
  },
  {
    "url": "t3_fypjj",
    "name": "By Request: IAMA Former Inmate at a Supermax facility. AMA"
  },
  {
    "url": "t3_fysin",
    "name": "IAmA female involved in a 24/7 BDSM relationship. AMA"
  },
  {
    "url": "t3_fz0tt",
    "name": "IAmA US Federal Gov't Economist"
  },
  {
    "url": "t3_fz3a0",
    "name": "IAmA French Pastry Chef, AMA."
  },
  {
    "url": "t3_fz7e7",
    "name": "IAmA Russian ex-convict Spent 5 years in Juvenile Prison and 10 Years in an Adult Prison (Been Through Hell and Back) AMA"
  },
  {
    "url": "t3_fzan2",
    "name": "IAmA Scientologist. AMA"
  },
  {
    "url": "t3_fzd4g",
    "name": "a reality TV executive producer who has shot over 20 different reality and doc series. Nothing you see is what you think it is. AMA"
  },
  {
    "url": "t3_fzg6m",
    "name": "[IAmA] I've hitch-hiked coast to coast across the United States AMAA"
  },
  {
    "url": "t3_fzgmj",
    "name": "IAmA (successful) evolutionary biologist and I am not an atheist.  AMA, about evolutionary theory, biology, or how they work with religion."
  },
  {
    "url": "t3_fzjwo",
    "name": "IAmA Brazillian Waxer"
  },
  {
    "url": "t3_fzr6z",
    "name": "IAmA Airline Pilot, AMA."
  },
  {
    "url": "t3_fzt8m",
    "name": "IAmA Massage Therapist who often provides happy endings, AMA."
  },
  {
    "url": "t3_fzte7",
    "name": "I Am a US Diplomat Serving Overseas, AMA"
  },
  {
    "url": "t3_fzyj0",
    "name": "IAmA professional day trader."
  },
  {
    "url": "t3_g08mg",
    "name": "IAmA Texas Police Officer AMAA"
  },
  {
    "url": "t3_g0jn7",
    "name": "IAmA scientist working on discovering new drugs in the pharma industry. AMA."
  },
  {
    "url": "t3_g197r",
    "name": "[IAmA] We're on the Firefox development team, and yesterday we shipped the Firefox 4 Release Candidate."
  },
  {
    "url": "t3_g1asn",
    "name": "Kind of by request: I was raised Christian and converted to Islam at 19. AMA"
  },
  {
    "url": "t3_g1cie",
    "name": "[IAMA] UW-Wisconsin student who supports Governor Walker's proposal [AMA] "
  },
  {
    "url": "t3_g1y0z",
    "name": "IAmA owner of a personal storage facility AmA"
  },
  {
    "url": "t3_g1z9x",
    "name": "IAmA former female-to-male transsexual who quit testosterone before any surgeries and began life as a woman for the first time at the age of 22"
  },
  {
    "url": "t3_g2dmw",
    "name": "IAMA Buddhist with a degree in philosophy and a good understanding and acceptance of modern science. AMA"
  },
  {
    "url": "t3_g2lsx",
    "name": "Hey Reddit, I've just returned from North Korea, and I met Matt Harding on the way. AMA!"
  },
  {
    "url": "t3_g2mv1",
    "name": "IAmA Nuclear Engineer, AM(almost)A"
  },
  {
    "url": "t3_g2wex",
    "name": "IAmA 25 Year Old Hugless Virgin."
  },
  {
    "url": "t3_g2y85",
    "name": "IAmA I've Made Over $1 Million...I'm 19 AMA"
  },
  {
    "url": "t3_g2zbx",
    "name": "IAmA Religious (Orthodox) Jew. AMA"
  },
  {
    "url": "t3_g398y",
    "name": "IAmA former competitive Scrabble(R) player who played at the (English) Scrabble world championships twice.  AMA"
  },
  {
    "url": "t3_g3qaa",
    "name": "IAmA relative of two murderers, one of which is a serial killer. AMA."
  },
  {
    "url": "t3_g41ik",
    "name": "I am a Christian who was against gay marriage. I decided today that I support it. Here's why."
  },
  {
    "url": "t3_g4lsw",
    "name": "(by request) I made the game QWOP. AMA."
  },
  {
    "url": "t3_g4nui",
    "name": "IAmA camera operator who filmed two To Catch a Predator stings. AMA! "
  },
  {
    "url": "t3_g4qie",
    "name": "IAmA female police officer who mainly arrests child predators"
  },
  {
    "url": "t3_g4tkb",
    "name": "As promised, American McGee here for my AMA. "
  },
  {
    "url": "t3_g5dpk",
    "name": "IAmA Brazilian Jiu Jitsu Instructor, AMA!"
  },
  {
    "url": "t3_g5gj3",
    "name": "IAm 96 years old. AMA."
  },
  {
    "url": "t3_g5ngf",
    "name": "IAmA gynecologist - AMA. "
  },
  {
    "url": "t3_g5tjx",
    "name": "My name is Myq Kaplan. I am a stand-up comedian. I have been on Last Comic Standing, Conan's Tonight Show, Comedy Central Presents, and now Reddit for the first time. Ask me anything, if that's how this works. (PS Sorry for the weird spelling, I know. Or you're welcome for it, I know!)"
  },
  {
    "url": "t3_g5uu0",
    "name": "IAmA Conservative Redditor. AMA"
  },
  {
    "url": "t3_g66ek",
    "name": "IAmA drummer in a worldwide touring band, called All Time Low.  AMA"
  },
  {
    "url": "t3_g685v",
    "name": "By request: Someone who has served time on a submarine.  AMA"
  },
  {
    "url": "t3_g687x",
    "name": "IAmA guy who just kicked Heroin.. This was the hardest thing that I have ever done in my life."
  },
  {
    "url": "t3_g69hj",
    "name": "I Am An ex - Casino Surveillance Manager. "
  },
  {
    "url": "t3_g6cqr",
    "name": "IAmA VLC media player developer. AMA"
  },
  {
    "url": "t3_g6ycc",
    "name": "IAmA Egyptian who just voted for the first time in my life. Egypt won. "
  },
  {
    "url": "t3_g74yg",
    "name": "IAMA living in the deadliest city on earth (AKA Juarez, Mexico)AMA"
  },
  {
    "url": "t3_g78vv",
    "name": "IAmA Young man about to enter Seminary this Fall for the Catholic Priesthood. AMA."
  },
  {
    "url": "t3_g7ft4",
    "name": "Post a question get a response 1/2 off. I'm drunk AMA"
  },
  {
    "url": "t3_g7gmn",
    "name": "I have been off heroin (and other drugs) for over 5 years. Did a total 180-went from being a useless gutter junkie to a college student working 2 jobs. AMA."
  },
  {
    "url": "t3_g7l01",
    "name": "IAmA Professional Body Piercer AMA"
  },
  {
    "url": "t3_g7lmp",
    "name": "IAmA woman that moved to the other side of the world to marry a man she met on the internet. AMA."
  },
  {
    "url": "t3_g7lom",
    "name": "IAmA 24 year old with a magnet implanted in my finger. AMA"
  },
  {
    "url": "t3_g7m67",
    "name": "I am adopting a child - AMA!"
  },
  {
    "url": "t3_g7q91",
    "name": "IAm Destiny.  I quit my job to play Starcraft 2 for a living.  I also hate Terran.  AMA."
  },
  {
    "url": "t3_g7r3t",
    "name": "BY REQUEST: I am a male who at age 13 had a long-term sexual relationship with a woman in her 20s (statutory rape). She is now a registered sex offender. "
  },
  {
    "url": "t3_g86k1",
    "name": "My wife and I started dating during our senior year of high school. This past October we've been together for 21 years and are still madly in love with each other. AMA"
  },
  {
    "url": "t3_g87uh",
    "name": "IAMA sufferer of Alice in Wonderland Syndrome. AMA"
  },
  {
    "url": "t3_g88x5",
    "name": "IamA high functioning autistic, who has recently started to integrate with normal society AMA."
  },
  {
    "url": "t3_g8jny",
    "name": "IAmA former Blizzard Entertainment customer service employee AMA"
  },
  {
    "url": "t3_g8pxw",
    "name": "I burned Margie Phelps of Westboro Baptist Church at a Q &amp; A panel in NYC. Everybody went nuts. AMA"
  },
  {
    "url": "t3_g8usl",
    "name": "IAmA ex sex text girl. AMA... But I'll only answer you in 160 characters."
  },
  {
    "url": "t3_g8zox",
    "name": "I was a lead singer for Zero 7, and am now a solo artist, AMA. "
  },
  {
    "url": "t3_g8zu6",
    "name": "Left my DoD Counterterrorism Analysis job, took on $87,932 in debt, and put my Harvard degree to use writing a book about how the social and economic inequalities created by the War on Drugs will be the most likely cause of terrorism. Had an agent for a bit but now its up online for free, AMA"
  },
  {
    "url": "t3_g8zwo",
    "name": "IAmA undercover police officer.  AMA."
  },
  {
    "url": "t3_g96eq",
    "name": "IAmA writer and actor, founder of RiffTrax.com, former host and head-writer of Mystery Science Theater 3000"
  },
  {
    "url": "t3_ga3gk",
    "name": "Thank you Reddit.  You helped shut down the Elan School.  I'm deeply thankful to this entire community.  If you want to know more about this place, AMA.    "
  },
  {
    "url": "t3_gas1k",
    "name": "IAMA 25 year old guy who was on the cheer team in HS, and ended up knocking up 2 of the girls on the same night. AMA"
  },
  {
    "url": "t3_gb6hj",
    "name": "I was a licensed Private Investigator for three years - AMA"
  },
  {
    "url": "t3_gbbxm",
    "name": "IAmA a 22-year-old Russian girl living in America. AMA"
  },
  {
    "url": "t3_gbfx0",
    "name": "IamA Prostitute, AMA"
  },
  {
    "url": "t3_gc5lb",
    "name": "IAMA ex military whistleblower who turned in most of his squad for the rape and murder of a civilian family in Iraq. Ask me anything."
  },
  {
    "url": "t3_gcbnb",
    "name": "Per request; I've had several 'missing time' incidences in my life. AMA"
  },
  {
    "url": "t3_gcm63",
    "name": "As Requested, IAM someone who has witnessed an atomic bomb test...I've seen 18 or 20 upclose and personal...my job was to fly thru the mushroom clouds and collect air samples"
  },
  {
    "url": "t3_gcnv4",
    "name": "IAmA Optometrist, AMA"
  },
  {
    "url": "t3_gd533",
    "name": "IAMA survivor of a horrific self inflicted point-blank shot to the face. AMA."
  },
  {
    "url": "t3_gd7uo",
    "name": "I am a person who is intentionally infected by a parasite. AMA"
  },
  {
    "url": "t3_gd9ob",
    "name": "I own a gas station and boat boat rental. AMA about either one. I know I didn't watch a nuclear bomb go off and I'm not Ken Jennings, but I do sell Beef Jerky and bacon."
  },
  {
    "url": "t3_gdyun",
    "name": "[IAmA] We are three members of the Google Chrome team. We &lt;3 the web. AMA"
  },
  {
    "url": "t3_gdzfi",
    "name": "IAM Christopher Poole, aka moot, founder of 4chan &amp; Canvas. AMA!"
  },
  {
    "url": "t3_ges0i",
    "name": "IAMA guy with prune belly syndrome.  One kidney, no abdominal muscles, massive reconstructive surgery scar, literally have never done a situp, and other issues as well.  AMA."
  },
  {
    "url": "t3_ges15",
    "name": "IAmA 19 year old lupus patient and kidney transplant recipient. AMA about my 10+ years growing up in the hospital.  "
  },
  {
    "url": "t3_gf4ni",
    "name": "IAmA convicted Drug Dealer AM(Almost)A"
  },
  {
    "url": "t3_gf9nx",
    "name": "IAmA garbage woman. AMA."
  },
  {
    "url": "t3_gfl42",
    "name": "I am the guy behind dontevenreply.com. AMA"
  },
  {
    "url": "t3_gg02d",
    "name": "By Request:  IAMA drummer for a touring progressive metal band.  I am Blake Richardson."
  },
  {
    "url": "t3_ggowd",
    "name": "IAmA former student at Columbine High School, and was at school on 4/20/1999.  AMA."
  },
  {
    "url": "t3_ggxd5",
    "name": "IAMA redditor who thinks banning DUCKBILLEDDUCK was stupid"
  },
  {
    "url": "t3_ggz40",
    "name": "I am the mother of a 14 year old boy who was attacked, stripped, and drowned in the  men's sauna room of the Royal Hawaiian Sauna Gyeongsan South Korea (sauna has since changed name to Onsan sauna). Ask Me Anything."
  },
  {
    "url": "t3_gh3fd",
    "name": "I am a working pastor and have, basically, lost my faith.  AMA and help?"
  },
  {
    "url": "t3_gh6p0",
    "name": "IAmA person living with synesthesia. AMA"
  },
  {
    "url": "t3_ghf9k",
    "name": "I was born with ambiguous genitalia (intersexed). AMA. "
  },
  {
    "url": "t3_ghjgt",
    "name": "IAMA person who gave a complete stranger CPR.  This is what happened after . . ."
  },
  {
    "url": "t3_ghm2r",
    "name": "I AMA salesperson in a high fashion store that sells $1,500 shirts. AMA."
  },
  {
    "url": "t3_ghpx6",
    "name": "IAMA person who grew up poor, became a millionaire, and am now poor again. AMA about how I made it and blew it and what it was like to be rich for a while."
  },
  {
    "url": "t3_ghrrm",
    "name": "IAMA rich man. AMA."
  },
  {
    "url": "t3_gidju",
    "name": "IAmA 21-year-old female who hitchhiked across the USA last fall AMA"
  },
  {
    "url": "t3_gj2id",
    "name": "IAmA male who will be changing his surname to the surname of his fiance. AMA"
  },
  {
    "url": "t3_gj41b",
    "name": "IAmA woman who just had her 8th miscarriage. It's really shitty. AMA. "
  },
  {
    "url": "t3_gj5lm",
    "name": "IAM the Editor-in-Chief of PC Gamer. AMA"
  },
  {
    "url": "t3_gjr7g",
    "name": "I am a Black Person that does not like other black people."
  },
  {
    "url": "t3_gjrf4",
    "name": "IAmA indie game developer who made a commercially successful game. AMAA"
  },
  {
    "url": "t3_gjyne",
    "name": "IAmA Director of the feature film Hobo With a Shotgun AMA"
  },
  {
    "url": "t3_gk2v8",
    "name": "IAm riding my bicycle 4000 miles from Austin, Texas to Anchorage, Alaska to raise money for cancer research. AMA"
  },
  {
    "url": "t3_gk97o",
    "name": "IAmA recording studio audio engineer who has worked with just about every modern top 40 pop artist  (Madonna, Timbaland, T-Pain, Lil Wayne, Justin Bieber, Drake, Busta Rhymes, Usher, Diddy, bla bla bla the list goes on forever), but really I'm an indie-rock nerd who hates most major label music. AMA"
  },
  {
    "url": "t3_gkb5m",
    "name": "IAmA Urologist. AMA. (Disclaimer: Answers may end in Please seek the care of a physician.)"
  },
  {
    "url": "t3_gkc5w",
    "name": "IAmA 26 year old man who sued McDonalds at age 7 (with the help of my parents) and won."
  },
  {
    "url": "t3_gkqe9",
    "name": "IAmA CEO of Cheezburger, Ben Huh"
  },
  {
    "url": "t3_gkvuw",
    "name": "IAmAn Expert in Kazakh eagle hunting. AMA. "
  },
  {
    "url": "t3_gl4dv",
    "name": "IAmA Formula 1 Engineer (For real this time). AM(nearly)A"
  },
  {
    "url": "t3_globr",
    "name": "IAm Francesca Marie Smith, and I was the voice of Helga on Hey Arnold! AMA. :)"
  },
  {
    "url": "t3_glpjg",
    "name": "I am an arcade game expert; I've earned over 2,500,000 tickets at Dave &amp; Buster's.  AMA about beating arcade games and turning a profit from them."
  },
  {
    "url": "t3_glt5k",
    "name": "IAM Yahtzee Croshaw off of the Escapist's Zero Punctuation, AMAA"
  },
  {
    "url": "t3_gm8rh",
    "name": "IAmAn Astronaut who has been to space twice and will be commanding the I.S.S. on Expedition 35. AMA. "
  },
  {
    "url": "t3_gmb5z",
    "name": "I am Harley from EpicMealTime aka DrunkBeard AmA"
  },
  {
    "url": "t3_gmjlh",
    "name": "IAmA woman who had a surgical abortion three days ago and fails to feel anything but relief. AMA."
  },
  {
    "url": "t3_gmmgp",
    "name": "IAmA Millionaire college student who inherited their money from their parents at age 21"
  },
  {
    "url": "t3_gnk9u",
    "name": "Iama ER/Trauma doc at a knife and gun club"
  },
  {
    "url": "t3_gnuuu",
    "name": "IAmA College English Teacher"
  },
  {
    "url": "t3_gnwa1",
    "name": "IAmA World Champion Debater AMA"
  },
  {
    "url": "t3_go7qc",
    "name": "I'm Bruce Campbell: AMA"
  },
  {
    "url": "t3_goa26",
    "name": "IAmA Freemason (32nd Degree Scottish Rite) AMA"
  },
  {
    "url": "t3_gob2l",
    "name": "Hi Reddit!  Last year, a friend and I buried ten grand somewhere in New York and gave clues to where it's hidden.  Nobody has found it yet. "
  },
  {
    "url": "t3_gobla",
    "name": "IAMA guy who works in the television and movie industry. AMA"
  },
  {
    "url": "t3_goxrm",
    "name": "IAMA guy who survived being nearly smothered to death while sleeping and stabbed over 48 times by best friend. AMA"
  },
  {
    "url": "t3_gp4yv",
    "name": "I work at Six Flags, AMA"
  },
  {
    "url": "t3_gp8f5",
    "name": "IAMA White guy who successfully integrated into a Punjabi family without a swordfight. AMA"
  },
  {
    "url": "t3_gphlt",
    "name": "IAMA guy who hitch-hiked around the world for 3 years, on $14,500. AMA"
  },
  {
    "url": "t3_gptvj",
    "name": "IAMA LEGO Master Model Builder. AMA"
  },
  {
    "url": "t3_gpxa4",
    "name": "As per Request: IAMA person who said Fuck it and left everything behind to pursue a more ideal life and failed.  AMA"
  },
  {
    "url": "t3_gpxy8",
    "name": "IaMa gay male escort who doesn't mind answering honestly any questions you might have. "
  },
  {
    "url": "t3_gq03c",
    "name": "We are a group of designers, programmers, artists and producers who work at Maxis on the Darkspore team. AUA."
  },
  {
    "url": "t3_gq6fi",
    "name": "IAMA 20 year old female who spent 4 months as a Hooker- AMA."
  },
  {
    "url": "t3_gqqbo",
    "name": "I am I Camgirl"
  },
  {
    "url": "t3_gr0k4",
    "name": "IAmA Austrian economist.  For the love of god, ask me anything.  Reddit needs one of these."
  },
  {
    "url": "t3_gr2la",
    "name": "I am a disabled pro-gamer that plays with his face.  I am Broly.  AMA."
  },
  {
    "url": "t3_gr7lj",
    "name": "IAmA cop &amp; a Redditor.  AMA.  (Throw away for a reason - no I won't verify this account.  Too much at stake)"
  },
  {
    "url": "t3_grgk3",
    "name": "I am A Wall Steet Banker AMA"
  },
  {
    "url": "t3_grjm9",
    "name": "IAmA furry who recently spent over 1000 dollars on a fursuit. AMA"
  },
  {
    "url": "t3_gru9b",
    "name": "IAmA female zoophile. AMA."
  },
  {
    "url": "t3_gruwk",
    "name": "IAMA pawn shop manager of five years. AMA"
  },
  {
    "url": "t3_grvsr",
    "name": "IAmA Former Area 51 Intelligence Officer AMA"
  },
  {
    "url": "t3_gs2gm",
    "name": "IAmA Police Officer, AMA"
  },
  {
    "url": "t3_gs3mj",
    "name": "IAMA young French woman. AMA about stereotypes and let me confirm/deny the myths."
  },
  {
    "url": "t3_gs4am",
    "name": "IAmA manager of a new / used video game store...like Gamestop but locally owned. AMA"
  },
  {
    "url": "t3_gscv3",
    "name": "IAmA Former D.A.R.E. Officer. AMA"
  },
  {
    "url": "t3_gsdgn",
    "name": "Hey Reddit! I'm a guy born with audio-to-sight synaesthesia, AMA!"
  },
  {
    "url": "t3_gsla8",
    "name": "By Request:  IAmA former Knight at Medieval Times.  AMA"
  },
  {
    "url": "t3_gss85",
    "name": "I did the moves (motion capture) for the latest Mortal Kombat video game (MK9). AMA"
  },
  {
    "url": "t3_gsx5p",
    "name": "IAmA Math tutor who was a prostitute in her spare time. AMA"
  },
  {
    "url": "t3_gt0l1",
    "name": "I have a CS degree from Harvard... and I run a porn site.  AMA"
  },
  {
    "url": "t3_gt2gx",
    "name": "Im an employee of one of the largest hedge funds in the world that had a serious hand in the financial crisis of 2008"
  },
  {
    "url": "t3_gt8sl",
    "name": "r/guns AMA - Open discussion about guns, we are here to answer your questions. No politics, please."
  },
  {
    "url": "t3_gtk6m",
    "name": "IAmA New Zealand Maori. AMA.. Anything! Don't hold back. Go."
  },
  {
    "url": "t3_gtrdr",
    "name": "IAMA 'survivor' of WWASP schools Tranquility Bay and Cross Creek Academy. AMA."
  },
  {
    "url": "t3_gu46b",
    "name": "I am blind. AMA."
  },
  {
    "url": "t3_gulaf",
    "name": "IAmA Columbine survivor named Brooks Brown. I was friends with the killers, a few victims, was scapegoated by the police as being involved, went on to do lots of anti-bullying activism for many years before I gave it up. AMA"
  },
  {
    "url": "t3_gvdqs",
    "name": "I Was A Writer's Assistant on Arrested Development AMA"
  },
  {
    "url": "t3_gvm1w",
    "name": "I work in a brothel (Photo validation) AMA"
  },
  {
    "url": "t3_gvyjo",
    "name": "I am wealthy and unapologetically and totally against having my taxes raised in America. Here's why... AMA"
  },
  {
    "url": "t3_gvyp4",
    "name": "IAMA Clinical Sexologist, AMA (Queer Friendly, as well)"
  },
  {
    "url": "t3_gw4gv",
    "name": "IAmA hydroponic gardener at McMurdo Station, Antarctica for the winter season AMA"
  },
  {
    "url": "t3_gw5pb",
    "name": "Iama U.S. Army ranger who served in the 75th Ranger Regiment for 4 years AMA almost Repost because I failed at reddit"
  },
  {
    "url": "t3_gwala",
    "name": "IAmA 20 year old Gay male who was coerced into Ex-Gay, Reparative therapy by my mother and pastor. I emerged stronger in my identity."
  },
  {
    "url": "t3_gwau9",
    "name": "IAmA Emergency Room Doctor in the United States.  AMA."
  },
  {
    "url": "t3_gwdcg",
    "name": "IAMA Gypsy from the USA, AMA."
  },
  {
    "url": "t3_gwl0i",
    "name": "I was a pickpocket. AMA."
  },
  {
    "url": "t3_gwlbi",
    "name": "I have used every common illegal drug and many obscure ones. AMA."
  },
  {
    "url": "t3_gwskm",
    "name": "IAMA ACTUAL deaf girl. "
  },
  {
    "url": "t3_gx0j9",
    "name": "I am Zach Weiner, creator of Saturday Morning Breakfast Cereal. I just launched a new book via kn0thing's company, Breadpig. AMA"
  },
  {
    "url": "t3_gx2v0",
    "name": "IAmA Verizon employee, ask me how to save money. AMA"
  },
  {
    "url": "t3_gx93j",
    "name": "Founder of once biggest torrent website, SuprNova.org. AMA"
  },
  {
    "url": "t3_gxgoz",
    "name": "IAmA Black woman that is going natural. AMA"
  },
  {
    "url": "t3_gxqs7",
    "name": "IAMA DJ for a Classic Rock station"
  },
  {
    "url": "t3_gxuvn",
    "name": "IAmA former Maury Show intern! AMA!"
  },
  {
    "url": "t3_gxz4x",
    "name": "IamA Hiker who completed the Appalachian Trail (2178 miles) in under 100 days, AMA."
  },
  {
    "url": "t3_gy2rn",
    "name": "IAMA Lifeguard who has worked at surf beaches, ponds, free lance, and a college pool. I've also saved a few lives. AMAA. "
  },
  {
    "url": "t3_gyqyy",
    "name": "IAmA ex-Disneyland Character who worked in Disneyland for one year, AMA"
  },
  {
    "url": "t3_gysv1",
    "name": "IAmA(n) Editor-in-chief of Engadget, Tim Stevens -- ask me anything and the beard will answer"
  },
  {
    "url": "t3_gyvyo",
    "name": "Sexy Sax Man Sergio Flores"
  },
  {
    "url": "t3_gyxqf",
    "name": "IAMAn Atheist that has been married to a Mormon for ten years. We have two kids and would considered ourselves as happily married as any other couple. AMA."
  },
  {
    "url": "t3_gz8rv",
    "name": "IAmA Regular Ordinary Swedish Meal Time Co-founder"
  },
  {
    "url": "t3_gzaoi",
    "name": "IAmA treeplanter in the summer - between my brothers and I, we've planted over 1.5 million trees! AMA!"
  },
  {
    "url": "t3_gzh4y",
    "name": "IAmA Regular guy that quit my Engineering job and spent two years driving 65,000kms (40,000mi.) from Alaska to Argentina. AM(a)A."
  },
  {
    "url": "t3_gzhau",
    "name": "IAm K.A. Applegate, author of Animorphs and many other books. AMA"
  },
  {
    "url": "t3_gziz1",
    "name": "IAmA Starbucks Barista! What would you like to know? "
  },
  {
    "url": "t3_h0dd5",
    "name": "IAmA man who received 100% custody of his young daughter and was a single dad for several years, AMA!"
  },
  {
    "url": "t3_h0jj4",
    "name": "IAmA School Psychologist - I evaluate students for Learning, Intellectual, Emotional/Behavioral, Autism Spectrum, and other disabilities. AMA"
  },
  {
    "url": "t3_h0jr0",
    "name": "My mother sodomized my infant sister and then framed me. For attention... AMAA"
  },
  {
    "url": "t3_h0wyx",
    "name": "IAmA Christian who is sick of ignorant Christians giving religion a bad name. AMA"
  },
  {
    "url": "t3_h16dh",
    "name": "IAmA 26 year old Father who converted a school bus into a house, and will be taking my family of five on a 28 state tour around the USA."
  },
  {
    "url": "t3_h1nj7",
    "name": "IAmA physicist AMA."
  },
  {
    "url": "t3_h234s",
    "name": "IAmA supervisor for a callcenter that bills for over 100,000 porn sites..AMA"
  },
  {
    "url": "t3_h29gn",
    "name": "I was a cook at Applebees for over a year.  AMA."
  },
  {
    "url": "t3_h2bfn",
    "name": "I live in a Hotel. AMA"
  },
  {
    "url": "t3_h2p11",
    "name": "IAmA 16 year old who hasn't had a single friend (in person) in over six years. AMA."
  },
  {
    "url": "t3_h2ylq",
    "name": "IAMA 911 operator for an urban area of over 1 million people. AMA"
  },
  {
    "url": "t3_h3700",
    "name": "I am David Firth, creator of Salad Fingers AMA"
  },
  {
    "url": "t3_h3nmm",
    "name": "IAmA New and Used Car Salesman AMA (and I mean anything)"
  },
  {
    "url": "t3_h3s13",
    "name": "IAmA former Marine One Crew Chief. I flew both President Obama and President Bush. AMA"
  },
  {
    "url": "t3_h42ak",
    "name": "I am John Resig, creator of jQuery, AMA."
  },
  {
    "url": "t3_h4i64",
    "name": "I am a Black Mesa Level Designer AMAA"
  },
  {
    "url": "t3_h4pko",
    "name": "Ask Red Dragon, a Real Life Superhero, Anything - AMA"
  },
  {
    "url": "t3_h4va2",
    "name": "IAmA guy who quit his job and moved to Rwanda to volunteer for Kiva.org. In a week, I start some other world-exploration adventures, described inside. AMA"
  },
  {
    "url": "t3_h4x1v",
    "name": "IAmA person who successfully got into college by misrepresenting my race.  AMA.  "
  },
  {
    "url": "t3_h59u0",
    "name": "IAmA 21yo who spent 7 years in a mental institution. AMA"
  },
  {
    "url": "t3_h5b6n",
    "name": "By Request: IAmA Jehovah's Witness. AMA (politely, please)"
  },
  {
    "url": "t3_h60xh",
    "name": "I am a funeral director at a low-cost alternative funeral home. We just started offering green burials. AMA"
  },
  {
    "url": "t3_h6345",
    "name": "I work with the long-term homeless, helping them transition into housing. AMA"
  },
  {
    "url": "t3_h6hvo",
    "name": "I...know that May 21st will be the Rapture."
  },
  {
    "url": "t3_h6mvj",
    "name": "IAMA BritishEnglishPolice ama"
  },
  {
    "url": "t3_h6t6f",
    "name": "I am Hemant Mehta, blogger at FriendlyAtheist.com, author of I Sold My Soul on eBay, and high school math teacher. AMA."
  },
  {
    "url": "t3_h6wq3",
    "name": "IAmA protistologist  I study the 99% of eukaryotes that are not plants, animals or fungi  AMA"
  },
  {
    "url": "t3_h6wqy",
    "name": "I biked across the United States last summer. AMA"
  },
  {
    "url": "t3_h72ek",
    "name": "IAmA Freemason. I was raised to the Sublime Degree of Master Mason precisely two weeks ago."
  },
  {
    "url": "t3_h7chp",
    "name": "IAMA man who lives on an island in the Caribbean that is 3 square miles. AMA"
  },
  {
    "url": "t3_h7q2t",
    "name": "IAmA Neuroscientist studying drugs of abuse and the ways they change your brain."
  },
  {
    "url": "t3_h7yxi",
    "name": "As Requested, IAmA Person Who Lucidly Dreams Often. AMA"
  },
  {
    "url": "t3_h88ny",
    "name": "IAmA Maid in a Hotel. AMA"
  },
  {
    "url": "t3_h8h0s",
    "name": "IAMA woman who was sent away to a program for 'at risk teenage girls' because I did not share my parents Christian beliefs. AMA"
  },
  {
    "url": "t3_h8xqd",
    "name": "IAmAn husband who doesn' t sleep in the same bed with his wife, as a matter of fact not even the same room."
  },
  {
    "url": "t3_h9r4l",
    "name": "IAMA 25-year-old girl who spent the first 21 years of my life as an active member of an Independant Fundamental Bible-believing Baptist Church. I am now agnostic. AMA."
  },
  {
    "url": "t3_h9svn",
    "name": "IAmA former debt collector AMA"
  },
  {
    "url": "t3_h9x61",
    "name": "By Request: We are the Woot Writers. AMAA"
  },
  {
    "url": "t3_h9yx3",
    "name": "IAmA voiceover actor.  My name's Ben Diskin.  AMA!"
  },
  {
    "url": "t3_hacao",
    "name": "IAMA guy who has a crippling addiction to frugality. AMA"
  },
  {
    "url": "t3_hacfz",
    "name": "IAmA Pedophile with self-control. AMA."
  },
  {
    "url": "t3_hat9o",
    "name": "IamA Commercial Pilot flying for easyJet on the Airbus. AMA"
  },
  {
    "url": "t3_hausb",
    "name": "IAmA soldier who spent last year training and mentoring a front line Afghan National Army battallion at platoon level. AMA"
  },
  {
    "url": "t3_hbhu5",
    "name": "I am 37, I haven't aged in 17 years (apparently)"
  },
  {
    "url": "t3_hbrpv",
    "name": "For a year, I dated a girl for the money. AMA"
  },
  {
    "url": "t3_hbyjm",
    "name": "I am Dave, one of the creators of Cyanide &amp; Happiness. I am also a north Irish native who had an online petition secure me a US visa. AMA."
  },
  {
    "url": "t3_hcjdd",
    "name": "IAmA 5 year McDonald's employee. FML AMA"
  },
  {
    "url": "t3_hd0mj",
    "name": "IAMA person born with Perfect Pitch and Synaesthesia who does a lot of music. AMA"
  },
  {
    "url": "t3_hdds0",
    "name": "I work in the Adult Film industry.  AMA."
  },
  {
    "url": "t3_hdezr",
    "name": "IAMA guy who uses a Metal Detector to find old coins, jewelry, civil war relics &amp; misc. sought after metal items.... and a LOT of trash metal. "
  },
  {
    "url": "t3_hdjd0",
    "name": "IAMA bus driver for King County Metro in Seattle.  I have been shot at twice, threatened with a knife, been puked on, ect ect.  Stories will be told.  AMA"
  },
  {
    "url": "t3_he3fp",
    "name": "IAmA Norwegian, ask me anything."
  },
  {
    "url": "t3_hed0k",
    "name": "IAMA former professional card counter.  AMA"
  },
  {
    "url": "t3_hef0q",
    "name": "IAmA Swede who emigrated to Texas. AMA y'all!"
  },
  {
    "url": "t3_hf4w2",
    "name": "IAMA Moderate Christian, who would like to -actually- have an honest conversation with you guys. AMA"
  },
  {
    "url": "t3_hfiu8",
    "name": "I was on Pimp My Ride. AMA"
  },
  {
    "url": "t3_hfw2p",
    "name": "I am violentacrez teenage son, AMA."
  },
  {
    "url": "t3_hgsgr",
    "name": "I own a dive bar. AMA (2nd time around)"
  },
  {
    "url": "t3_hgze6",
    "name": "I am a Host of My Drunk Kitchen"
  },
  {
    "url": "t3_hh2cz",
    "name": "I work at Goldman Sachs, AMAA"
  },
  {
    "url": "t3_hhcuy",
    "name": "By request, AMA, I am the beekeeper who's not paying for your damn bees."
  },
  {
    "url": "t3_hhwes",
    "name": "IAmA Heroin Addict, AMA"
  },
  {
    "url": "t3_hi5ol",
    "name": "IAmA car shop owner, AMA"
  },
  {
    "url": "t3_hiaro",
    "name": "IamA cop in the city of angels. AMA"
  },
  {
    "url": "t3_hijrl",
    "name": "IAmA a teen father, now in my 30s.  I think I've done a pretty damn good job, and have beaten many odds. AMA"
  },
  {
    "url": "t3_hiuwo",
    "name": "IAmA person who was raised mostly secular, and converted to Christianity in my 30s after spending a lot of time studying many religions. AMA"
  },
  {
    "url": "t3_hixmj",
    "name": "I am a tornado scientist, ask me anything"
  },
  {
    "url": "t3_hiyrx",
    "name": "By Request:  IAmA man who has been married for over 16 years to a paraplegic.  AMA"
  },
  {
    "url": "t3_hiyzl",
    "name": "24 year old who suffered social anxiety his entire life. I finally conquered it. IAmA"
  },
  {
    "url": "t3_hj60l",
    "name": "IAmA battery engineer. AMA about batteries or energy storage."
  },
  {
    "url": "t3_hjc3j",
    "name": "IAmA Biblical Scholar and also an Atheist. AMA"
  },
  {
    "url": "t3_hjqjq",
    "name": "IAmA Recovering Alcoholic Celebrating 25 Years of Continuous Sobriety Today.  AMA."
  },
  {
    "url": "t3_hjt87",
    "name": "I was in the Joplin, MO Walmart that was levelled by the tornado, while it was destroyed around me. AMA"
  },
  {
    "url": "t3_hjx1y",
    "name": "IAMA guy who drove an Ice Cream van for 5 years. AMA."
  },
  {
    "url": "t3_hk656",
    "name": "I am a data recovery technician. AMAA"
  },
  {
    "url": "t3_hkcpl",
    "name": "By Request:  I am part of a millionaire family.  AMAA"
  },
  {
    "url": "t3_hkr3f",
    "name": "IAmA 3rd Degree Master Mason who is very active in his local Freemasonry (F&amp;AM) Lodge. AMA!"
  },
  {
    "url": "t3_hlfso",
    "name": "IAmA Female, Triple Amputee. 2 Limbs By Choice.  AMA"
  },
  {
    "url": "t3_hlgtb",
    "name": "IAmA 24 y/o girl who has lost 137lbs and changed her life in several ways! It was suggested I do an AMA from /r/fitness so I can tell how I did it!"
  },
  {
    "url": "t3_hlr0b",
    "name": "IAmA UPS Driver, AMA"
  },
  {
    "url": "t3_hm7dr",
    "name": "IAMA Apple Retail employee, AMA"
  },
  {
    "url": "t3_hm7zk",
    "name": "IAMA guy who for ~3 years made a living of exploiting online casino promotions."
  },
  {
    "url": "t3_hm9rx",
    "name": "IAmA wildlife cameraman who has worked on Human Planet, Planet Earth and Life and worked with David Attenborough on 12 of his series"
  },
  {
    "url": "t3_hmd9j",
    "name": "IAMA Mother who had her son escorted to two WWASP schools. AMA."
  },
  {
    "url": "t3_hmm0l",
    "name": "IAmA guy passing a kidney stone as I type. AmA. "
  },
  {
    "url": "t3_hmonn",
    "name": "IAMA part of a commited M/F/F relationship, AMA"
  },
  {
    "url": "t3_hn3s4",
    "name": "I was a ripper for aPc and got busted by the FBI. AM(almost)A"
  },
  {
    "url": "t3_hn8bq",
    "name": "IAMA 17 Year Old Jewish Orthodox Girl. AMA."
  },
  {
    "url": "t3_hn8eg",
    "name": "IAMA convicted rapist, here's my sob story, AMA"
  },
  {
    "url": "t3_hnanv",
    "name": "I died today from carbon monoxide poisoning but somehow my body fought back to live long enough to rescue my father and call 911. AMA."
  },
  {
    "url": "t3_hnhia",
    "name": "IAmA attorney (and professor too) who thinks that reddit's perception of the law is actually fairly accurate, AMA"
  },
  {
    "url": "t3_hnmo1",
    "name": "IAmA 30 year old virgin. AMA."
  },
  {
    "url": "t3_hnr9w",
    "name": "IAMA teacher for a Relationship/Sex Ed class for people with developmental disabilities AM[A]A"
  },
  {
    "url": "t3_hnshq",
    "name": "IAmA Disney World Cast Member. AMA."
  },
  {
    "url": "t3_hodm3",
    "name": "IAMA Editor-in-Chief of Ars Technica, sister site to Reddit, underling to the almighty Conde Nast: AMA!"
  },
  {
    "url": "t3_hofvw",
    "name": "IAM Andrewsmith1986 AMA"
  },
  {
    "url": "t3_hooys",
    "name": "IAMA Trigender Aromantic Asexual. AMA."
  },
  {
    "url": "t3_hp4ba",
    "name": "As Requested. IWasA Zombie in Shaun of the Dead"
  },
  {
    "url": "t3_hp8t5",
    "name": "IAmA Hibachi (Teppanyaki) Chef AMA"
  },
  {
    "url": "t3_hpazm",
    "name": "My family owns an island. AMA"
  },
  {
    "url": "t3_hphpd",
    "name": "I browse the deep web AMA"
  },
  {
    "url": "t3_hppim",
    "name": "IAMA, Nearly 7 foot tall man, AMA."
  },
  {
    "url": "t3_hpyhw",
    "name": "I am a girl with Bipolar Type 2, with my symptoms fully under control after several years of erratic, unstable and hypersexual behaviour. AMA"
  },
  {
    "url": "t3_hpzcx",
    "name": "I was one of the kids on Bill Nye the Science Guy and the son of one of the executive producers. AMA"
  },
  {
    "url": "t3_hq90a",
    "name": "IAMA GeekSquad Agent (May not be after this).. AMA"
  },
  {
    "url": "t3_hqccr",
    "name": "I met my fianc 1500 miles away through an accidental text message and we are now under the same roof. AMA."
  },
  {
    "url": "t3_hqro1",
    "name": "IAmA linguist specializing in the history of the English language. AMA"
  },
  {
    "url": "t3_hqvat",
    "name": "IAMA Cuckold. Meaning, my girlfriend has sex with other men (and I like it)"
  },
  {
    "url": "t3_hr7c7",
    "name": "By Request: I am the guy who ran the marathon without training to win a bet... and tweeted the whole, AMA"
  },
  {
    "url": "t3_hrc6i",
    "name": "IAmA 25 year old female who was homeless and lived in a shack in the woods for several months. AMA."
  },
  {
    "url": "t3_hrl79",
    "name": "IamA former Carnival Cruise Lines employee, AMA"
  },
  {
    "url": "t3_hrte6",
    "name": "IAMA 24 year old who just received a death sentence."
  },
  {
    "url": "t3_hrthb",
    "name": "I Am A kid who got slimed at Nickelodeon Studios."
  },
  {
    "url": "t3_hs9vm",
    "name": "I have Synesthesia: I see colors in music. AMA"
  },
  {
    "url": "t3_hshf1",
    "name": "IAMA Escort"
  },
  {
    "url": "t3_hsicp",
    "name": "IAmA random stranger of little importance, I want you to ask me the most deeply personal, random or intrusive questions you can think of. AMA"
  },
  {
    "url": "t3_htbub",
    "name": "IAMA TV Exec who handles programming at a cable network, with 10+ years experience.  AM(almost)A"
  },
  {
    "url": "t3_htdf9",
    "name": "I am a 24 year old who was unschooled since the 4th grade. AMA"
  },
  {
    "url": "t3_htn7x",
    "name": "I run PornTube.com &amp; 4Tube.com (among others) - AMA!!"
  },
  {
    "url": "t3_hto1x",
    "name": "As Requested: IAmA Buddhist who knows his religion well. AMA"
  },
  {
    "url": "t3_htuqk",
    "name": "We are Crunchyroll, the biggest legit anime streaming site. AUA!"
  },
  {
    "url": "t3_htuyx",
    "name": "IAmA Professional Ultimate Frisbee Player. AMA"
  },
  {
    "url": "t3_htvfi",
    "name": "IAMA 23 year old guy who graduated from High School at 15 and college at 19."
  },
  {
    "url": "t3_htzfz",
    "name": "I am a woman who recently got an abortion. AMA."
  },
  {
    "url": "t3_hufzi",
    "name": "IAmA girl who was raised on an Indian Reservation. AMA."
  },
  {
    "url": "t3_hv6mb",
    "name": "IAmA White Guy (ask what youre uncomfortable asking IRL)"
  },
  {
    "url": "t3_hv8nw",
    "name": "IAMA deaf guy. AMA"
  },
  {
    "url": "t3_hvgdr",
    "name": "IAmA white guy married to a black woman. Ask away..."
  },
  {
    "url": "t3_hvj21",
    "name": "Quit my DoD Counterterrorism Analysis job, took on $87,932 in debt, and wrote a book about how the social and economic inequalities created by the War on Drugs will be the most likely cause of terrorism. Had an agent for a bit but now its up online for free, AMA [print-on-demand update]."
  },
  {
    "url": "t3_hvpvj",
    "name": "IAmA man who married someone by if we're both single and thirty agreement. It's going okay. AMA."
  },
  {
    "url": "t3_hwer6",
    "name": "IAmA Crohn's sufferer since 1983, AMA."
  },
  {
    "url": "t3_hwfep",
    "name": "IAmAn Arab/MiddleEastern/Egyptian, AMA (you're not comfortable asking IRL)"
  },
  {
    "url": "t3_hwkjy",
    "name": "IAm Robert Bowling, Creative Strategist on Modern Warfare 3 AMA"
  },
  {
    "url": "t3_hwspj",
    "name": "As Requested: IAmA Person with a Schizophrenic Wife. "
  },
  {
    "url": "t3_hx6q6",
    "name": "I used to work for the largest online porn (DVD, VOD, and sex toys) retailer. Ask away!"
  },
  {
    "url": "t3_hxhck",
    "name": "IAmA small town Canadian pharmacist...anyone have any questions."
  },
  {
    "url": "t3_hxidu",
    "name": "We are 18 year old identical twin girls, Ask Us Anything!"
  },
  {
    "url": "t3_hxs77",
    "name": "IAMA Convicted Felon. I just recently got done serving 6 months in jail. Ask me anything."
  },
  {
    "url": "t3_hxuvx",
    "name": "IAMA Honeydew of the Yogscast AMA"
  },
  {
    "url": "t3_hxxyc",
    "name": "IAmA Person who was born without thumbs, AMA [by request]"
  },
  {
    "url": "t3_hy52o",
    "name": "By Request, IAMA former Ice Cream Truck owner, AMA."
  },
  {
    "url": "t3_hy63j",
    "name": "I'm a guy who decided at 21 to never get married, and never have kids.  I'm about to turn 38.  So far, so good.  AMA."
  },
  {
    "url": "t3_hynsb",
    "name": "IAMA Jeopardy champion. AMA."
  },
  {
    "url": "t3_hyxcs",
    "name": "As requested: IAMA Creationist. AMA"
  },
  {
    "url": "t3_hz313",
    "name": "We're Dr. Drew and Mike Catherwood, hosts of the radio show Loveline, Ask Us Anything!"
  },
  {
    "url": "t3_hzftf",
    "name": "IAmA Mountain man, who lived in a shack alone for six months, AMA."
  },
  {
    "url": "t3_hzinb",
    "name": "IAMA Female-to-Male transgendered guy, I don't mind intrusive questions. AMA."
  },
  {
    "url": "t3_hzkes",
    "name": "I teach American History to high schoolers. AMA (about the job or about American History)!"
  },
  {
    "url": "t3_hzwr1",
    "name": "As Requested: I am the girl from the stories you've been waiting to tell thread who made up imaginary friends and had to spend years taking my life back after it got out of control. As requested, AMA. "
  },
  {
    "url": "t3_i0d28",
    "name": "IAmA South Korean who moved to the US alone at age 15. AMA"
  },
  {
    "url": "t3_i0fvg",
    "name": "As requested, I was adopted and found my biological parents. AMA."
  },
  {
    "url": "t3_i0gvi",
    "name": "IAmA high school science teacher. I'm sick of the misconceptions about teachers. Ask me anything..."
  },
  {
    "url": "t3_i0i44",
    "name": "IAmA MTF transgender woman who regrets it. AMA."
  },
  {
    "url": "t3_i0j4u",
    "name": "IAMA pharmacist bored at work who will actually answer questions unlike the pharmacy student who just did an AMA, AMA"
  },
  {
    "url": "t3_i12dx",
    "name": "World War Z starring Brad Pitt is being filmed from my balcony on saturday. AMA."
  },
  {
    "url": "t3_i17zj",
    "name": "IAmA Chiropractor, taking questions on the profession."
  },
  {
    "url": "t3_i18qw",
    "name": "IAmA Real life mutant. When I get cut, my body does not stop healing itself. AMA"
  },
  {
    "url": "t3_i1lsf",
    "name": "IAmA former meth addict, clean for six years. AMA"
  },
  {
    "url": "t3_i1s4x",
    "name": "IAMA Space Lawyer, as in a lawyer specializing in laws and treaties that pertain to space. AMA."
  },
  {
    "url": "t3_i2nyc",
    "name": "IAMA Straight Guy That Worked At A Gay Bar...AMA!"
  },
  {
    "url": "t3_i3l3c",
    "name": "I am an assistant at a mental hospital on a locked down block with mostly psychotic schizophrenics.  AMA."
  },
  {
    "url": "t3_i3s61",
    "name": "IAMA Former Navy SEAL"
  },
  {
    "url": "t3_i4azp",
    "name": "IAmA Someone who worked for Investment Banks developing automated trading systems AMA"
  },
  {
    "url": "t3_i4b52",
    "name": "IAmA Batman fan who made an academic career out of it AMA"
  },
  {
    "url": "t3_i4fb5",
    "name": "IAMA person who lost friends after turning people in for being pedophiles. AMA"
  },
  {
    "url": "t3_i51ap",
    "name": "IAmA guy who has freely walked around Chernobyl/Pripyat, dived into a sunken battleship in Egypt, snuck into Petra past armed guards and dogs, and just got back from Kashmir, 100 miles from where bin Laden was killed. AMA"
  },
  {
    "url": "t3_i5908",
    "name": "IAmA farmer. AMA."
  },
  {
    "url": "t3_i5bgw",
    "name": "IAMA Christian, AMA (and I mean ANYTHING)"
  },
  {
    "url": "t3_i5l51",
    "name": "Per request, I am a former All That cast member (Lisa Foiles). AMA"
  },
  {
    "url": "t3_i5wlz",
    "name": "IAmA man who has quietly abandoned the use soap and shampoo for nearly a year. AmA."
  },
  {
    "url": "t3_i6b1o",
    "name": "UPDATE: I'm the guy who took 3 days off of work in an attempt to crack the Zodiac serial killer's last remaining undeciphered message. I'm still at it. However, I could use some help from my fellow Redditors."
  },
  {
    "url": "t3_i6k98",
    "name": "I am from a dying Russian industrial town."
  },
  {
    "url": "t3_i6yj2",
    "name": "IAmA reddit admin - AMA!"
  },
  {
    "url": "t3_i7hk8",
    "name": "IAmA 32 yearold female with multiple sclerosis. I was also a camgirl so I could afford meds."
  },
  {
    "url": "t3_i7tmd",
    "name": "IAmA Survivor of the Nazi POW Death March of 1944-45(Told through my grandson)"
  },
  {
    "url": "t3_i8j9p",
    "name": "IAMA recent/former Best Buy employee who worked in both the Best Buy Mobile and Geek Squad, willing to divulge the best and worst. AMA."
  },
  {
    "url": "t3_i8u5d",
    "name": "IAMA English police officer, AMA"
  },
  {
    "url": "t3_i8wdo",
    "name": "Hi Reddit! My name is Mike. I'm part of the Top Gear film crew. AMA"
  },
  {
    "url": "t3_i93ki",
    "name": "IAMA ex-World of Warcraft Game Master - AMA"
  },
  {
    "url": "t3_i93ky",
    "name": "IAmA female taxi cab driver."
  },
  {
    "url": "t3_i9a2g",
    "name": "IAmA rep for Verizon Wireless AMA (with knowledge of the upcoming data price plan changes)"
  },
  {
    "url": "t3_i9c5f",
    "name": "IAMA Father of two sets of twins... AMA."
  },
  {
    "url": "t3_i9j9k",
    "name": "IAMA Federal Police Officer"
  },
  {
    "url": "t3_i9jai",
    "name": "As Requested: IAmA Master Freemason, AMA"
  },
  {
    "url": "t3_iabcx",
    "name": "IAMA Person (old man) who thinks my purpose in life is to make all people smile inside.  amaaa"
  },
  {
    "url": "t3_ib92f",
    "name": "eldest of 14 ama"
  },
  {
    "url": "t3_ib9fo",
    "name": "I am a 15 year old Chinese Girl from Kunming AMA"
  },
  {
    "url": "t3_ibiz9",
    "name": "AMA Locksmith of 5+ years"
  },
  {
    "url": "t3_iboyj",
    "name": "I work at Facebook. AMA (Take 2)"
  },
  {
    "url": "t3_icarb",
    "name": "IAmA 16 yr old boy with vision in only 1 eye for the past 5 years. AMA"
  },
  {
    "url": "t3_id89f",
    "name": "IAmA completely un-ghetto black guy living in a very ghetto neighborhood. AMA"
  },
  {
    "url": "t3_idhig",
    "name": "IAmA bored to death receptionist and illustrator. I will answer all questions with a drawing until 5:00 EST. AMA"
  },
  {
    "url": "t3_idony",
    "name": "IAMA Anesthesiology resident starting my 4th year of postgraduate training. AMA."
  },
  {
    "url": "t3_idp2g",
    "name": "IAMA professional liar. Give me a situation and I will come up with a masterful lie for you. "
  },
  {
    "url": "t3_ieb51",
    "name": "I painted my car with a roller (PICS!) AMA"
  },
  {
    "url": "t3_ieztx",
    "name": "IAmA Norwegian. Ask me anything."
  },
  {
    "url": "t3_ifwpc",
    "name": "IAMA drunk reddit admin, AMA!"
  },
  {
    "url": "t3_ig85i",
    "name": "I'm a Mormon about to leave on my mission. AMA. be nice"
  },
  {
    "url": "t3_ig9ia",
    "name": "I am a bored 17 year old female staying up all night for no good reason. (stole this ama from someone else)"
  },
  {
    "url": "t3_igdej",
    "name": "IAmA ER doc at a level I trauma center. I treat mass casualties, poisonings, and heart attacks every day.  AMA."
  },
  {
    "url": "t3_igo7v",
    "name": "IAmA person raised by a same sex couple... AMA"
  },
  {
    "url": "t3_igqyb",
    "name": "I've worked overnights at a 7-11 for 5 years.  AMA."
  },
  {
    "url": "t3_igsw6",
    "name": "IAMA 22 year old recovering heroin addict. I will literally answer any question you have about that type of life. Fire away!"
  },
  {
    "url": "t3_igyf3",
    "name": "I am asexual, AMA besides sex tips"
  },
  {
    "url": "t3_ih3ng",
    "name": "I am Shaun Attwood. I survived the jail with the highest rate of death in America, attracted international media attention to the conditions via a blog and now a book, Hard Time."
  },
  {
    "url": "t3_ih81l",
    "name": "By Request: I have gotten back on my feet after begging for money on the street. AMA."
  },
  {
    "url": "t3_ih91o",
    "name": "I am an experienced lucid dreamer. AMA"
  },
  {
    "url": "t3_ihc8m",
    "name": "I ruined TF2 at least twice and am now IAmA developer working on it, AMA"
  },
  {
    "url": "t3_ihp73",
    "name": "I have an interview tomorrow at a wine shop. To help me practice AMA about wine."
  },
  {
    "url": "t3_ii56o",
    "name": "IamA person that is going to say something nice to you.  AMA."
  },
  {
    "url": "t3_ii6h6",
    "name": "IamAn American diplomat's son, and grew up in third world countries my whole life, and recently went through culture shock in the US. AMA"
  },
  {
    "url": "t3_iihxj",
    "name": "IAmA Research Associate in a Cancer Research Lab. AMA."
  },
  {
    "url": "t3_ij7a8",
    "name": "IAmA guy who goes by the name Chris Pirillo - AMA."
  },
  {
    "url": "t3_ij8ry",
    "name": "IAmA Sikh "
  },
  {
    "url": "t3_ijeor",
    "name": "We are an interracial couple (Black female/Asian male) - Ask us anything!"
  },
  {
    "url": "t3_ik5mk",
    "name": "[IAmA] co-author of the first widely used Web browser, an early owner/evangelist/investor for Tesla Motors, and the guy who ran the launch of OnLive (a Reddit trifecta?) AMAA"
  },
  {
    "url": "t3_ik9rg",
    "name": "IAmA Career Waiter (Seen it all) AMA"
  },
  {
    "url": "t3_ikjrh",
    "name": "IAmA 19 year old FtM transsexual, AMA"
  },
  {
    "url": "t3_ikmyl",
    "name": "I am the guy in the Master Troll vs. Orlando Police Dept. video AMA"
  },
  {
    "url": "t3_il2il",
    "name": "I'm a male Kindergarten teacher, ask me anything!"
  },
  {
    "url": "t3_il895",
    "name": "IAMA Guy who just finished his first steroid cycle"
  },
  {
    "url": "t3_il9b6",
    "name": "IAmA ex drug dealer, AMA."
  },
  {
    "url": "t3_il9c6",
    "name": "IAmA Tim Hortons employee in Canada. AMA."
  },
  {
    "url": "t3_im133",
    "name": "IAmA 21 yr old guy who had a toe amputated as a result of being an inebriated moron. AMA!"
  },
  {
    "url": "t3_imp9j",
    "name": "I quit my job, ended a 4yr relationship, and then traveled for 61 days around the US by myself via train living out of a suitcase and couchsurfing the entire way through.  I just got back. AMA"
  },
  {
    "url": "t3_imrao",
    "name": "IAmA Fetish model and cam whore"
  },
  {
    "url": "t3_imxsj",
    "name": "IAmA Conspiracy Theorist.  AMA."
  },
  {
    "url": "t3_in1iu",
    "name": "IAmA Beard Competitor."
  },
  {
    "url": "t3_injpp",
    "name": "I am the guy from Joe Goes To London. AMA."
  },
  {
    "url": "t3_inks9",
    "name": "YouAreA Reddit user. I'll AYA."
  },
  {
    "url": "t3_innb0",
    "name": "IAmA 23 year old female amputee who almost burned to death. AMA."
  },
  {
    "url": "t3_inzbm",
    "name": "I am a former 2nd Generation member of the Unification church who had an arranged marriage. AMA"
  },
  {
    "url": "t3_io2nk",
    "name": "IAmA(n) ex-Muslim woman, AMA"
  },
  {
    "url": "t3_iokbm",
    "name": "IAmA guy whose marriage was arranged and I met my wife only once before the wedding. AMA"
  },
  {
    "url": "t3_iolik",
    "name": "I am a Pakistani who is actually living in Pakistan. AMA"
  },
  {
    "url": "t3_iopfz",
    "name": "IAMA embittered personal trainer, AMA"
  },
  {
    "url": "t3_iow9d",
    "name": "IAma escort driver AMA"
  },
  {
    "url": "t3_ip8wv",
    "name": "IAmA former Cirque du Soleil acrobat who will actually answer your questions."
  },
  {
    "url": "t3_ipeuq",
    "name": "IamA registered Republican who has never voted for a Democrat in his life.  I have decided to quit the party and vote Democrat in 2012.  AMA."
  },
  {
    "url": "t3_ipnci",
    "name": "IAmThe servier engineering lead at foursquare. Ask Me Anything."
  },
  {
    "url": "t3_ipvbd",
    "name": "I am currently holed up in an apartment complex where in the building not 50 feet from my bedroom window is a man with a high powered rifle who has murdered one man, and is currently holding a hostage, AmA! (I need distractions, so literally, ask me ANYTHING)"
  },
  {
    "url": "t3_ipzdl",
    "name": "IAMA Master Freemason AMA"
  },
  {
    "url": "t3_iq00t",
    "name": "IAmA happy, medicated *exceptionally* bipolar redditor who is just now entering into what looks to be a pretty severe manic episode.  AMA! :)"
  },
  {
    "url": "t3_iqdgg",
    "name": "IAmA 27 year old who lost his virginity last night to an escort. AMA"
  },
  {
    "url": "t3_iqyk1",
    "name": "IAMA forever alone who for the past year has been seeing the same prostitute/escort/hooker regularly. "
  },
  {
    "url": "t3_iqzg8",
    "name": "There seems to be a hatred for cops here on Reddit so, IAmA Deputy Sheriff, AMA."
  },
  {
    "url": "t3_irfw6",
    "name": "IAMA A UROLOGIST...ASK ME ANYTHING"
  },
  {
    "url": "t3_is2ah",
    "name": "IAMA forensic psychologist, AMA"
  },
  {
    "url": "t3_it9jd",
    "name": "IAMA American/Libyan in Benghazi Libya, I hear unbelievable stories everyday. Thought some people might want to hear what life is like in a country fighting for it's freedom from a ruthless dictator. "
  },
  {
    "url": "t3_itf77",
    "name": "IAmA Forester. I work to preserve and restore forests in my state. AMA about trees!"
  },
  {
    "url": "t3_ithta",
    "name": "IAmAn Ex-Stripper AMA"
  },
  {
    "url": "t3_itk9o",
    "name": "IAMA real-life George Costanza.  I have not worked a serious day in the last 9 years, but earn &gt;$90k"
  },
  {
    "url": "t3_itopv",
    "name": "IAMA Ex Armed Robber. Sentenced to 15 years in a British Jail. Did my time late 70's mid 80's. AMA - About Prison (Not The Crime)"
  },
  {
    "url": "t3_itvu5",
    "name": "My TED Talk has just been published. AMA."
  },
  {
    "url": "t3_itwoz",
    "name": "I AMA Woman who experiences spontaneous orgasms"
  },
  {
    "url": "t3_iu205",
    "name": "I am a board certified urologist who performs vasectomies.  I am here to anwer any questions you might have "
  },
  {
    "url": "t3_iut89",
    "name": "IAmA Man that Owned a Sex Slave AMA"
  },
  {
    "url": "t3_iuybu",
    "name": "IAmA: US Navy enlisted member AMA"
  },
  {
    "url": "t3_iuz8a",
    "name": "IAMA reddit General Manager. AMA."
  },
  {
    "url": "t3_iv1je",
    "name": "As requested, top 1%-er answering your questions!"
  },
  {
    "url": "t3_iv4cx",
    "name": "IAmA 23 yr old female software engineer who just moved across the world to the US. AMA"
  },
  {
    "url": "t3_iv5bj",
    "name": "IAmA someone that will answer *every* single question in this thread, fabricated answers or not."
  },
  {
    "url": "t3_ivt0u",
    "name": "IAmA son of a Mortician who grew up playing in funeral homes. AMA"
  },
  {
    "url": "t3_iw2zy",
    "name": "IAmA- Jenna Marbles AMA"
  },
  {
    "url": "t3_iw35e",
    "name": "I stole an air plane AMA"
  },
  {
    "url": "t3_iwf42",
    "name": "IAmA 25 YO male who spent 16 years of his life as part of an Older Amish Community. AMA"
  },
  {
    "url": "t3_iwrjc",
    "name": "We Are Scientists and Engineers at NASA's Jet Propulsion Laboratory. Ask Us Anything. -AMA"
  },
  {
    "url": "t3_iwzxh",
    "name": "I've had sustained sexual relationships with both of my sisters, AMA."
  },
  {
    "url": "t3_ix7ak",
    "name": "IAMA son of NASA astronaut Mike Fossum, who is currently on the space station. Anyone interested in asking him some question?"
  },
  {
    "url": "t3_ixc7g",
    "name": "I am Yukari Miyamae, and this is how I really look. "
  },
  {
    "url": "t3_ixngm",
    "name": "IAm the creator of nine extensions for Google Chrome for redditors, including Mostly Harmless, Open Reddit NSFW Links in Incognito Window, R Navigation, and Don't go, reddit loves you! AMA"
  },
  {
    "url": "t3_iydbk",
    "name": "IAmA Encyclopedia Dramatica Admin, AMA"
  },
  {
    "url": "t3_iygl4",
    "name": "IAMA super mario 64 speedrunner"
  },
  {
    "url": "t3_iyoun",
    "name": "IAmA 20 year old with Avoidant personality disorder who has successfully pushed away almost everyone I've ever known and loved."
  },
  {
    "url": "t3_iz75k",
    "name": "IAmA assistant property manager for 400 apartments - AMA"
  },
  {
    "url": "t3_izb07",
    "name": "I used to work for the Bank selling REO (foreclosed) properties, and in the 11 years I've been in the business, I've dealt with 4 mummified bodies, 2 suicides, 3 murders (one attempted murder), and an exploding house.  AMA"
  },
  {
    "url": "t3_izc04",
    "name": "IAMA Former Stripper. AMA"
  },
  {
    "url": "t3_izpf7",
    "name": "I am a Police Officer. AMA."
  },
  {
    "url": "t3_izy0j",
    "name": "IAMA Inuit person from the Arctic Circle. Ask me anything."
  },
  {
    "url": "t3_j087i",
    "name": "I spent waaay too much time on this site, and ended up with a job!  I am a reddit admin, AMA!"
  },
  {
    "url": "t3_j094k",
    "name": "IAmA 22 year old who cured his debilitating, cystic acne of 6 years in a unique and incredibly simple fashion. Revolutionary logic."
  },
  {
    "url": "t3_j0ad6",
    "name": "IAMA former Buffalo Wild Wings cook. AMA"
  },
  {
    "url": "t3_j0e6n",
    "name": "IamA The New Old Spices Man Fabio AMA (Internet keywords Romance, Fabio, Old Spice, Italian Supermodel, Italian, Motorcycle)"
  },
  {
    "url": "t3_j0wse",
    "name": "IAmA Guy who lives on a boat. AMA"
  },
  {
    "url": "t3_j18zk",
    "name": "IAmA - I am Swedish and answers all questions about Sweden and everything related to!"
  },
  {
    "url": "t3_j1kwv",
    "name": "IAMA 37 year old attractive, professional woman who has handed over all emotional, physical, and sexual power to a Redditor who I've never met, AMA. (NSFW)"
  },
  {
    "url": "t3_j1pff",
    "name": "IAMA High Powered Lawyer, AMA."
  },
  {
    "url": "t3_j1rbm",
    "name": "IAMA guy who has written music for 6 years and never let anyone hear it until today. AMA and I'll make up a jingle about your screenname"
  },
  {
    "url": "t3_j205b",
    "name": "Ive appeared on all 3 seasons of American Ninja Warrior (Ryoga Vee). AMA"
  },
  {
    "url": "t3_j2hm2",
    "name": "IAmA guy who spend the last year translating the Voynich manuscript. AMA"
  },
  {
    "url": "t3_j2vo4",
    "name": "IAmA beekeeper AMA"
  },
  {
    "url": "t3_j33po",
    "name": "IAmA licensed cremation operator."
  },
  {
    "url": "t3_j487a",
    "name": "IAmA: Former, 4.5 year veteran Dominos Pizza Employee. AMA"
  },
  {
    "url": "t3_j49ri",
    "name": "IAmA 20 year old girl who is the oldest of 11 siblings. We are not religious. AMA"
  },
  {
    "url": "t3_j4ces",
    "name": "Been living on the road in a RV for almost three months. "
  },
  {
    "url": "t3_j4cld",
    "name": "IAMA former quadriplegic,"
  },
  {
    "url": "t3_j4j4h",
    "name": "I am a 25 year old female who had her life turned upside down because of naked pictures I took for my husband-to-be...AMA "
  },
  {
    "url": "t3_j4phc",
    "name": "IAMA sleep tech, someone who watches other people sleep for a living ask me anything."
  },
  {
    "url": "t3_j4q42",
    "name": "IAMA techie who worked at McMurdo base, in Antarctica,  for six months.  AMA"
  },
  {
    "url": "t3_j4wxp",
    "name": "IAMA female professional snowboarder. AMA"
  },
  {
    "url": "t3_j593g",
    "name": "IAmA Search and Rescue pilot in the US Coast Guard, AMA."
  },
  {
    "url": "t3_j59y1",
    "name": "IAmA Native American, for over a year now I have been an elected representative of my Tribal Government, and beginning Labor Day I will be sent on the most ambitious vision quest ever attempted. AMA"
  },
  {
    "url": "t3_j5kdp",
    "name": "As Requested: IAMA Pro Wrestler AMA"
  },
  {
    "url": "t3_j5v6g",
    "name": "IAmA New York Times crossword puzzle constructor."
  },
  {
    "url": "t3_j6ujz",
    "name": "IAmA 17yo russian, AMA"
  },
  {
    "url": "t3_j6vgs",
    "name": "I was a juror on the Casey Anthony Trial, AMA"
  },
  {
    "url": "t3_j6zmm",
    "name": "IAmA writer and performer at RiffTrax.com, and formerly Mystery Science Theater 3000, and my name is Bill Corbett.     "
  },
  {
    "url": "t3_j750o",
    "name": "IAmA 17 Year Old Orthodox Jewish Girl. AMA"
  },
  {
    "url": "t3_j7br1",
    "name": "IAmA high end escort.  AMA"
  },
  {
    "url": "t3_j7wk6",
    "name": "IAmA 21 yr old girl with Proteus Syndrome - like the Elephant Man. AMA."
  },
  {
    "url": "t3_j824n",
    "name": "IAmA Certified Cicerone that works for Dogfish Head. "
  },
  {
    "url": "t3_j83y5",
    "name": "IAmA person with prosopagnosia (face blindness), AMA"
  },
  {
    "url": "t3_j89m7",
    "name": "iAMin possession of a $29,000 tablet PC without any skill how to draw at all. Ask me to draw anything! (in MS paint nonetheless!)"
  },
  {
    "url": "t3_j8r5q",
    "name": "As requested: IAm Someone who has been in solitary confinement AMA"
  },
  {
    "url": "t3_j8w6l",
    "name": "Im Zack Kopplin, the student who lead the campaign to repeal Louisianas creationism law and also called out Michele Bachmann for her claims about Nobel Laureates who supported creationism.  AMA"
  },
  {
    "url": "t3_j95w7",
    "name": "IAmA guy whose family falls into the top .5% wealthiest in the U.S. AMA"
  },
  {
    "url": "t3_j9srm",
    "name": "IAmA 20-something divorced, bisexual, feminist, stoner, American Muslim (born into, not converted) woman with a history of sexual abuse living with borderline personality disorder. AMA."
  },
  {
    "url": "t3_j9u18",
    "name": "I was a Disneyland performer for 4 years."
  },
  {
    "url": "t3_j9zjm",
    "name": "IAmA Famous Hand Model : AMA"
  },
  {
    "url": "t3_jacvn",
    "name": "IAMA California Police Officer here to answer any questions you might have AMA"
  },
  {
    "url": "t3_jasea",
    "name": "IAmA novelist whose fifth thriller was just released by Penguin/Dutton.  AMA."
  },
  {
    "url": "t3_jaymj",
    "name": "We are the cast and crew of SMBC THEATER - AMAA!"
  },
  {
    "url": "t3_jb2nu",
    "name": "IAmA Iraqi who lived in Iraq throughout the first years of the war, AMA."
  },
  {
    "url": "t3_jb9vv",
    "name": "IamA 22 year old guy with Treacher Collins Syndrome AMA"
  },
  {
    "url": "t3_jbe9g",
    "name": "IAM James Wong, AMA"
  },
  {
    "url": "t3_jbgxm",
    "name": "IAmA a true hermaphrodite. "
  },
  {
    "url": "t3_jbkir",
    "name": "I visited an ultra-orthodox Jewish village, was deemed suspicious, asked for ID, and handcuffed by police.  In New York.  AMA"
  },
  {
    "url": "t3_jc5ul",
    "name": "IAmA 31 year old guy born without arms or legs, AMA"
  },
  {
    "url": "t3_jc6eu",
    "name": "I have worked as a private investigator in Los Angeles for ten years, mostly handling workers' comp fraud, along with some civil and criminal cases. AMA"
  },
  {
    "url": "t3_jcox5",
    "name": "My wife is deaf, I'm not, we have two kids. AMA"
  },
  {
    "url": "t3_jcw1i",
    "name": "IAMA Gay guy who was sent to ex-gay camp in Iowa. AMA."
  },
  {
    "url": "t3_jd2sj",
    "name": "I am 94 years old and I'm going for 100.  AMA."
  },
  {
    "url": "t3_jdh25",
    "name": "I watched someone die a gory death this weekend and I'm kind of fucked up over it. AMA"
  },
  {
    "url": "t3_jdpth",
    "name": "IAmA person who hacked a school network and changed the grades of fellow classmates."
  },
  {
    "url": "t3_je02x",
    "name": "IAMA bouncer in S.F. i have seen a lot of crazy nights in the nightclubs ask me anything.."
  },
  {
    "url": "t3_jebry",
    "name": "IAMA sex worker (prostitute) (female) in a brothel in Australia AMA"
  },
  {
    "url": "t3_jee71",
    "name": "IAmA oldest sister whose parents adopted 5 children from a foreign country (who {mostly} turned out to be crazy) AMA"
  },
  {
    "url": "t3_jeo6i",
    "name": "IAmA Woman Who Was Molested at Age 5, and Allowed Her Life to Be Ruined By It (Possibly NSFW). AMA"
  },
  {
    "url": "t3_jeva3",
    "name": "I will answer every single motherfucking question asked to me. AMA"
  },
  {
    "url": "t3_jf1pp",
    "name": "I am James Kahn- ER doctor, author of Return of the Jedi, Poltergeist, Indiana Jones and the Temple of Doom, Goonies and former writer on Star Trek: TNG, Voyager, and Melrose Place. AMA"
  },
  {
    "url": "t3_jfre3",
    "name": "IAmA guy who let a homeless guy stay at my apartment this weekend and was robbed by him yesterday. "
  },
  {
    "url": "t3_jfunx",
    "name": "IamA protestant minister, ama"
  },
  {
    "url": "t3_jfx4w",
    "name": "IAmA Dealer on the Strip specializing in Craps. AMA"
  },
  {
    "url": "t3_jfzp7",
    "name": "People are always telling me I should write a book. An AMA seems easier. "
  },
  {
    "url": "t3_jg1jl",
    "name": "IAmA Computer Technician and I will answer ANY question asked. ANYTHING -- AMA"
  },
  {
    "url": "t3_jg2th",
    "name": "IAmA Belgian who just came back from a 30-day trip through the US. AMA."
  },
  {
    "url": "t3_jg5g5",
    "name": "I suffered severe head injuries (3 skull fractures) and lost ALL of my memory at 18. AMA."
  },
  {
    "url": "t3_jgehv",
    "name": "IAmA guy who spend the day at Valve's HeadQuarters, playing and helping them develop the next version of CS, AMA"
  },
  {
    "url": "t3_jglcy",
    "name": "IAmA Asian female adopted by Caucasian parents who has lived in the U.S. from 3 months old onward. AMA"
  },
  {
    "url": "t3_jgrcj",
    "name": "As Requested: IAmA 28 year old female with Androgen Insensitivity Syndrome. (I have a Y chromosome)"
  },
  {
    "url": "t3_jgx7n",
    "name": "I had a vasectomy today. Fun Fact: My doctor? Dr. Dick Chopp AMA"
  },
  {
    "url": "t3_jh7f6",
    "name": "IAMA police officer who was working during the London Riots. AMA."
  },
  {
    "url": "t3_jhaae",
    "name": "IAmA guy who just saw the final Harry Potter movie without reading/watching any Harry Potter material beforehand. Being morbidly confused, I made up an entire previous plot for the movie to make sense in my had. I will answer your HP Series question based on the made up previous plot in my head AMA"
  },
  {
    "url": "t3_jhqbg",
    "name": "If you have ever considered using drugs I'd like to offer my insight into the one thing I am most likely an expert at. I am a walking encyclopedia of drugs/drug use.. AMA [info inside]"
  },
  {
    "url": "t3_jimr3",
    "name": "I have no colon. AMA"
  },
  {
    "url": "t3_jirqz",
    "name": "IAMa 30 year old college professor with Crohn's Disease. AMA."
  },
  {
    "url": "t3_jiw8p",
    "name": "IAMA guy with a stutter, and willing to discuss and share all my inner emotions regarding it, AMA."
  },
  {
    "url": "t3_jj4kz",
    "name": "IAmA Little Teapot"
  },
  {
    "url": "t3_jjd7l",
    "name": "IAmA happily married female swinger. AMA"
  },
  {
    "url": "t3_jjjrw",
    "name": "IAMA guy that keeps bees on my back porch, and removes established bee colonies from homes."
  },
  {
    "url": "t3_jjjz0",
    "name": "I was a US Navy submariner. AMA!"
  },
  {
    "url": "t3_jjkir",
    "name": "I am NiT GriT, AMA"
  },
  {
    "url": "t3_jju8l",
    "name": "IAmA guy who will answer questions in Haiku. AMA."
  },
  {
    "url": "t3_jk45k",
    "name": "I edit porn for a living AMA"
  },
  {
    "url": "t3_jki22",
    "name": "IAm Kevin Warwick, The World's First Cyborg, AMA."
  },
  {
    "url": "t3_jkmey",
    "name": "IAMA girl who was sold into prostitution for money at the age of fourteen, lived through it, and recovered on my own.  I am now living a normal life at twenty.  AMA."
  },
  {
    "url": "t3_jktfl",
    "name": "IAmA terminally ill man with ALS, AMA"
  },
  {
    "url": "t3_jkzja",
    "name": "IAMA Man who spent 6 months dating a Juggalette and got a glimpse into their culture. AMA"
  },
  {
    "url": "t3_jlcsn",
    "name": "IAMA American Citizen who traveled to India to get knee surgery from a world renowned doctor, and it was cheap as hell. AMA"
  },
  {
    "url": "t3_jlpwv",
    "name": "IAMA 911/Emergency Services Operator, AMA. "
  },
  {
    "url": "t3_jm5yn",
    "name": "IAMA Driver and Security Guard for female escorts AMA"
  },
  {
    "url": "t3_jmo8c",
    "name": "IAMA Human Meat Pig AMA "
  },
  {
    "url": "t3_jmorh",
    "name": "IAmA former female sexworker who has experienced a TON of weird requests and fetishes and I don't regret any of it. "
  },
  {
    "url": "t3_jmte9",
    "name": "I carry a gun on me 95% of the time, both concealed and open-carry. AMA!"
  },
  {
    "url": "t3_jmthl",
    "name": "I design tampons. AMA!"
  },
  {
    "url": "t3_jmwr7",
    "name": "IAmAn Air Traffic Controller, AMA"
  },
  {
    "url": "t3_jmxs7",
    "name": "IAMA extra zombie from The Walking Dead AMA"
  },
  {
    "url": "t3_jmypt",
    "name": "IAmA Former Wall Street drone who saw the worst of finance and decided to change everything about his life (and turned down millions in the process)"
  },
  {
    "url": "t3_jnfhu",
    "name": "IAmAn American muslim woman. AMA "
  },
  {
    "url": "t3_jnmqm",
    "name": "IAmA Swiss resident. AMA about our tiny little country!"
  },
  {
    "url": "t3_jns4b",
    "name": "IAMA survivor of the 2004 tsunami, AMA"
  },
  {
    "url": "t3_jnt9f",
    "name": "IAMA 24 year old female who has stage 4 Endometriosis AMA."
  },
  {
    "url": "t3_jo5at",
    "name": "IAmA guy that hasn't pooped in the month of August yet. Ask me anything about my extreme constipation."
  },
  {
    "url": "t3_jo5m8",
    "name": "I Am Jacob Kogan a.k.a. Young Spock. AMA."
  },
  {
    "url": "t3_jo9zi",
    "name": "I am Mary Bonnin, the first woman Master Diver in the U.S. Navy. AMA"
  },
  {
    "url": "t3_jobjt",
    "name": "IAmA 6'4 Tall Woman! AMA"
  },
  {
    "url": "t3_joy5m",
    "name": "IAmA very obese woman in my early-20s"
  },
  {
    "url": "t3_jp17a",
    "name": "IAmA girl who is bored and will answer any of your questions in three words. AMA"
  },
  {
    "url": "t3_jph4c",
    "name": "IAmA bartender who has seen everything.  AMA."
  },
  {
    "url": "t3_jpmbs",
    "name": "IAmA Casino Dealer. AMA."
  },
  {
    "url": "t3_jprjc",
    "name": "IAmA happily married woman, and very successful model on myfreecams for 2 years now. AMAA"
  },
  {
    "url": "t3_jptq6",
    "name": "IAmA guy that just donated almost his entire 25+ year comic collection to the troops serving overseas.  AMA."
  },
  {
    "url": "t3_jpuxm",
    "name": "IAmA guy who just slept with some guy's wife, while he watched, ask me anything"
  },
  {
    "url": "t3_jpxkl",
    "name": "IAMA male who has had sexual relations with my female first cousin. AMA"
  },
  {
    "url": "t3_jq3iy",
    "name": "IAmA Australian who's tired of misconceptions about his country. AmA in regards to Australia."
  },
  {
    "url": "t3_jqish",
    "name": "IAM Kenny Hotz of Kenny vs. Spenny, Testees &amp; Truimph of the Will"
  },
  {
    "url": "t3_jqwuv",
    "name": "IAmA chick that delivered pizza for 5 years. AMA"
  },
  {
    "url": "t3_jr4zp",
    "name": "IAmA 20 year old female with a minor physical deformity.  AMA"
  },
  {
    "url": "t3_jr86w",
    "name": "I'm a former Disneyland cast member. I was Alice in Wonderland. AMA. (Round 2)"
  },
  {
    "url": "t3_jruvn",
    "name": "I am Stanton Friedman, Nuclear Physicist, and world renowned expert on UFO phenomena. AMA"
  },
  {
    "url": "t3_js4gb",
    "name": "IAmA man who has masturbated at  least 4 times a day every day since i  was 12 AMA"
  },
  {
    "url": "t3_js55e",
    "name": "IAmA Straight Male Dancer at a Gay Bar AMA"
  },
  {
    "url": "t3_js9as",
    "name": "IAmA 16 year-old National Chess Champion. AMA."
  },
  {
    "url": "t3_jsc8z",
    "name": "IAmA Female Stripper with a heart of gold, AMA"
  },
  {
    "url": "t3_jskg1",
    "name": "Iama man who has found a safe behind a hidden wall in my dad's casino, and will open live for reddit within the next few days"
  },
  {
    "url": "t3_jst2b",
    "name": "IAMA 7' Profressional Basketball Player. Ama anything about being tall or basketball."
  },
  {
    "url": "t3_jst6f",
    "name": "IAMA Chiren of Athenewins AMA"
  },
  {
    "url": "t3_jtxef",
    "name": "I am a father of a child who was diagnosed with autism. By virtue of having caught it early, we have successfully reversed his condition before it was too late. He's now undiagnosed, and neurotypical. I'll be happy to dispel any myths you may have heard about this terrible condition. AMA."
  },
  {
    "url": "t3_jtz0q",
    "name": "By request, IamA person who has had a life-changing epiphany from a hallucinogen.  "
  },
  {
    "url": "t3_ju0kx",
    "name": "I've spoken on the existence of a species of bipedal ape living in North America on 60+ occasions for more than 5,500+ combined listeners AMA"
  },
  {
    "url": "t3_ju1fm",
    "name": "IAmA Guy who took a 4446 mile road trip visiting 10 different Amusement Parks. AMA"
  },
  {
    "url": "t3_julhd",
    "name": "I saved /IAMA, AMA"
  },
  {
    "url": "t3_juou2",
    "name": "By Request, I am a Spyware Programmer. AMA"
  },
  {
    "url": "t3_just3",
    "name": "I am that asshole all of you hate so much, 32bites."
  },
  {
    "url": "t3_jv09s",
    "name": "AMA: StinkyBottom."
  },
  {
    "url": "t3_jv6f7",
    "name": "I grew up in an apocalyptic, utopian, socialist, Christian cult.  AMA."
  },
  {
    "url": "t3_jvdjn",
    "name": "IAmA 16 year old who performs tobacco stings. AMA."
  },
  {
    "url": "t3_jvy2m",
    "name": "IAmA modern Private Investigator. AMAA."
  },
  {
    "url": "t3_jw4jk",
    "name": "IAmA Manager of a Pawn Shop. AMA."
  },
  {
    "url": "t3_jw6x5",
    "name": "IAmA 24 yr old guy with a physical deformity and have been in constant pain since birth. AMA"
  },
  {
    "url": "t3_jwoo5",
    "name": "IAmA 21-year old woman with vaginismus...meaning I cannot tolerate any penetration whatsoever AMA"
  },
  {
    "url": "t3_jwt63",
    "name": "IamA registered sex offender"
  },
  {
    "url": "t3_jwy5d",
    "name": "IAMA Guy who lost 100 pounds in half a year, 66 of them in the first 3 months AMA"
  },
  {
    "url": "t3_jx8io",
    "name": "I am a Blind bartender, AMA"
  },
  {
    "url": "t3_jxjyx",
    "name": "IAmA person that works for a Cash for Gold company..AMA"
  },
  {
    "url": "t3_jxlxw",
    "name": "IAmA full-time author - 6 published books, most recent a zombie novel"
  },
  {
    "url": "t3_jy3be",
    "name": "IAmA Hotel Front Desk for an international brand, I know what you do, AMA"
  },
  {
    "url": "t3_jz3u7",
    "name": "IAMA Jon Finkel.  Ask me anything"
  },
  {
    "url": "t3_jzahw",
    "name": "IAmA  german exchange student who spent a whole year in America AMA"
  },
  {
    "url": "t3_jzjng",
    "name": "IAmA divorcee (as of today,) and in 2 months I'll be the best man at my ex's lesbian wedding. AMA."
  },
  {
    "url": "t3_k00xd",
    "name": "IAmA guy who cycled 4,500 miles solo across America, with a little bit of help from Reddit. Answering every single question. Fuck."
  },
  {
    "url": "t3_k01vv",
    "name": "IAMA Former Amazon Kindle customer support agent."
  },
  {
    "url": "t3_k030l",
    "name": "IAMA guy doing a PhD in pure maths. AMA"
  },
  {
    "url": "t3_k06kv",
    "name": "IAmA former employee of the Moonlight Bunny Ranch. AMA"
  },
  {
    "url": "t3_k08sj",
    "name": "IAmA man who has slept with 100+ prostitutes across the world. I am 23."
  },
  {
    "url": "t3_k0dar",
    "name": "IAmA wife to a M2F transsexual, and we have a biological child together. AMA."
  },
  {
    "url": "t3_k19nm",
    "name": "As Requested, I am slightly popular youtube celebrity boogie2988 aka Francis, Aka that angry fat wow player"
  },
  {
    "url": "t3_k1c2s",
    "name": "IAmA Major League Baseball Player"
  },
  {
    "url": "t3_k1fk8",
    "name": "I am Jim O' Heir, veteran actor and Jerry on Parks &amp; Recreation. Hit me with your best shot.  "
  },
  {
    "url": "t3_k1gg3",
    "name": "IAMA person who just returned from North Korea. AMA."
  },
  {
    "url": "t3_k1u5i",
    "name": "IAmA professional voice for radio/tv commercials. What would you like me to record for you, reddit? Let's have some fun, and feel free to AMA."
  },
  {
    "url": "t3_k1z59",
    "name": "After 5 years, I am almost at my 72nd hour without a single cigarette and going cold turkey. God help me, AMA"
  },
  {
    "url": "t3_k2dwy",
    "name": "IAMA Walmart Store Manager (try your best not to get me fired today)"
  },
  {
    "url": "t3_k2nvl",
    "name": "We are the Ubuntu Unity Development Team. We &lt;3 open source. AMA"
  },
  {
    "url": "t3_k2o4d",
    "name": "IAmA Board Cetified Urologist who performs vasectomy and is here to answer any questions."
  },
  {
    "url": "t3_k2p2c",
    "name": "IamA former Manager at Best Buy AmA"
  },
  {
    "url": "t3_k2qno",
    "name": "IAMA former mid level drug dealer from north Philly, AMA"
  },
  {
    "url": "t3_k31pe",
    "name": "Chubby Chaser..Ask me anything about my fetish"
  },
  {
    "url": "t3_k3949",
    "name": "I am Deaf"
  },
  {
    "url": "t3_k3jv4",
    "name": "IAm an active soldier in the Swiss Army. Yes, Switzerland has an army. AMA"
  },
  {
    "url": "t3_k3sc9",
    "name": "IAMA Dungeon Master with nearly 25 years of experience, ask me anything."
  },
  {
    "url": "t3_k3vbe",
    "name": "I am a Taiwanese Celebrity, AMA"
  },
  {
    "url": "t3_k418s",
    "name": "My dad digs through trash like the guys in American Pickers. This is something that he's done for most of his life and all of mine. I've held treasure, historical artifacts, WTF, and rare pieces of art. AMA."
  },
  {
    "url": "t3_k453r",
    "name": "IAMA: Large scale cannabis cultivator &amp; run the largest collective community of Cannabis Growers in WA State."
  },
  {
    "url": "t3_k4imo",
    "name": "IAMAn Ex-Phone Sex Operator. AMA"
  },
  {
    "url": "t3_k4jkh",
    "name": "IAmA veterinarian.  AMA."
  },
  {
    "url": "t3_k4lrf",
    "name": "IAmA black man married to a beautiful white woman in the deep south (Tennessee) I have some crazy stories so AMA. http://imgur.com/P24Wv"
  },
  {
    "url": "t3_k4o2w",
    "name": "IAmA Grandson, sitting here with my 4, 85 year old grandparents.  They are discussing their life, travels and World War Two.  AmA (To ask them)"
  },
  {
    "url": "t3_k4tqb",
    "name": "I used to be a fake psychic. AMaA."
  },
  {
    "url": "t3_k4wiy",
    "name": "IAmA Musician who made a career off YouTube, Ephixa AMA"
  },
  {
    "url": "t3_k5t9w",
    "name": "IAmA person living with low latency inhibition (LLI). AMA!"
  },
  {
    "url": "t3_k6jgl",
    "name": "IAmA former Vector Marketing (Cutco racket) receptionist with no current loyalty to the company AMA"
  },
  {
    "url": "t3_k7dd8",
    "name": "IAMA Arab Named OsAMA Living in the United States during the post 9/11 era. AMA."
  },
  {
    "url": "t3_k7epa",
    "name": "IAmAn astronomer currently observing Uranus from the summit of Mauna Kea, Hawaii."
  },
  {
    "url": "t3_k7lw3",
    "name": "As Requested: I Am a gay woman married to a man "
  },
  {
    "url": "t3_k8ymd",
    "name": "I am a overnight fast food worker"
  },
  {
    "url": "t3_k94is",
    "name": "IAmA Young-Earth Creationist--for real."
  },
  {
    "url": "t3_k9ajc",
    "name": "IAmA a Caucasian adult female who was adopted by Taiwanese parents AMA"
  },
  {
    "url": "t3_k9l40",
    "name": "IAmA Person who put their child up for adoption.  AMA"
  },
  {
    "url": "t3_ka90i",
    "name": "IAMA Dog behavior expert with many years of experience rehabbing what is considered red line dogs.  "
  },
  {
    "url": "t3_kafcf",
    "name": "IAMA Michael Elias. I co-wrote The Jerk and co-created Head of the Class. "
  },
  {
    "url": "t3_kakrb",
    "name": "IAmA Man Who Lied About Having a PhD And Now Teach Community College.  AMA"
  },
  {
    "url": "t3_kaxma",
    "name": "I was a hooter's girl for 2 years AMA"
  },
  {
    "url": "t3_kbdcc",
    "name": "IAmA Cop in a Major US City"
  },
  {
    "url": "t3_kbghx",
    "name": "IAmA Competitive Marathon Runner who runs 90-105 miles per week (14 miles a day on average)- AMA"
  },
  {
    "url": "t3_kbgtj",
    "name": "IAmA Chinese guy that helps manage and work at my parent's Chinese restaurant. AMA"
  },
  {
    "url": "t3_kbs4q",
    "name": "My dad died in 9/11 when I was 9. AMA "
  },
  {
    "url": "t3_kc2jy",
    "name": "IAmA manager of a health club...I've seen it all. AMA"
  },
  {
    "url": "t3_kc8oc",
    "name": "IAmA loss prevention agent at a major retail chain.. AMA"
  },
  {
    "url": "t3_kcfd8",
    "name": "IAMA paid translator of yaoi (Japanese gay porn comic books).  AMA!"
  },
  {
    "url": "t3_kcizv",
    "name": "I am an Israeli dissident, aka Dances with Palestinians. "
  },
  {
    "url": "t3_kcl6m",
    "name": "IAmA guy who made thousands of dollars selling used socks on eBay AMA"
  },
  {
    "url": "t3_kd5qj",
    "name": "IAmA person who hunts alligators in Louisiana like the people on the show Swamp People AMA"
  },
  {
    "url": "t3_kd9os",
    "name": "IAmA former craigslist escort. AMA"
  },
  {
    "url": "t3_kdisk",
    "name": "As Requested : IAMA 4chan moderator."
  },
  {
    "url": "t3_kdyjl",
    "name": "IAmA person who mastered Mandarin Chinese from nothing to  native in 3 years. Chinese people can't tell the difference, AMA~"
  },
  {
    "url": "t3_keea2",
    "name": "IamA Anthropologist studying the culture of 4chan and Anonymous, AMA"
  },
  {
    "url": "t3_keok7",
    "name": "IAMA Food Server at Medieval Times; Ask Me Anything."
  },
  {
    "url": "t3_kfcbd",
    "name": "I am a white parent who has adopted three asian kids. AMA."
  },
  {
    "url": "t3_kfe0e",
    "name": "IAMA creator of Doodle or Die"
  },
  {
    "url": "t3_kfiwl",
    "name": "I wrote a book about 4chan that came out last week. 30 pizza deliveries and even more death threats later, everything turned out better than expected. AMA."
  },
  {
    "url": "t3_kfjg9",
    "name": "IMA Professional Frisbee Player...ask me anything."
  },
  {
    "url": "t3_kg0me",
    "name": "IAMA guy that has lucid dreams almost every night"
  },
  {
    "url": "t3_kglw8",
    "name": "We are the creators of the automated bots on reddit. AMA."
  },
  {
    "url": "t3_kgob7",
    "name": "By Request: I am a reality tv sound mixer. AMA"
  },
  {
    "url": "t3_kgp2d",
    "name": "IAmA tenured professor at a reputable university. I feel like I have one of the best jobs around. Ask away!"
  },
  {
    "url": "t3_kgq35",
    "name": "IAMA full time lab rat. I take drugs for money."
  },
  {
    "url": "t3_kguxb",
    "name": "I was molested by my sisters. AmA."
  },
  {
    "url": "t3_khh5c",
    "name": "IAmA travel photographer who shot all the photos for the BBC's 'Human Planet' series. AMAA"
  },
  {
    "url": "t3_khwvc",
    "name": "I'm smiling because I am Michael Shelton. AMA"
  },
  {
    "url": "t3_ki5e4",
    "name": "IAMA Deaf teenage kid AMA"
  },
  {
    "url": "t3_kilr1",
    "name": "IAMA/WASA Australian ARIA award (grammy equivalent) winning pop star, who co-wrote four top 100 singles. AMA. "
  },
  {
    "url": "t3_kimvy",
    "name": "IAmA newly elected politician in Oslo, Norway. AMA"
  },
  {
    "url": "t3_kip25",
    "name": "IAmA Romany/Gypsy who wants to clear things up with you. AMA"
  },
  {
    "url": "t3_kitcy",
    "name": "I am a 7 year old AMA"
  },
  {
    "url": "t3_kiy6a",
    "name": "My ex step dad murdered my mom, 3 friends, her divorce lawyer and shot another woman in the face and chest several times (she lived), before killing himself. AMA"
  },
  {
    "url": "t3_kj508",
    "name": "I am the sighed daughter of two blind parents. AMA!"
  },
  {
    "url": "t3_kjbay",
    "name": "I found a Russian woman on the internet, and married her. AMA"
  },
  {
    "url": "t3_kjeoi",
    "name": "IAmA Morbid obese fat ass who was almost immobile cause of my weight. I'm still morbid obese even after losing 300 pounds. AMA"
  },
  {
    "url": "t3_kjexd",
    "name": "IAmA Israeli not believing in god, who lives in the west-bank ; AmA"
  },
  {
    "url": "t3_kjgt9",
    "name": "I got bad grades in College, now IAmA Doctor in residency.  AMAA"
  },
  {
    "url": "t3_kjkla",
    "name": "IAMA person that sleeps for only 30 minutes at a time (The Uberman's Sleep Schedule)"
  },
  {
    "url": "t3_kjzxg",
    "name": "IAmA Nurse working in a prison AMAA"
  },
  {
    "url": "t3_kkcds",
    "name": "IAmA plastic surgeon volunteering for Operation Smile in Guwahati, India right now. AMA"
  },
  {
    "url": "t3_kkemc",
    "name": "IAMA 22-year-old guy who inherited 29 million dollars 5 weeks ago. AMA"
  },
  {
    "url": "t3_kkk1u",
    "name": "IAmA - Guy Who Had Two Wives"
  },
  {
    "url": "t3_kl2sj",
    "name": "As Requested: IAmA Dental Hygienist in my final year of school, with 4 prior years of experience. Got dental questions? AMA"
  },
  {
    "url": "t3_klowi",
    "name": "I'm 24 and actually have cancer. I'm sitting hooked up to chemo now. AMA."
  },
  {
    "url": "t3_klsnr",
    "name": "IAmA Gay man in the United States Military post DADT update, AMA"
  },
  {
    "url": "t3_km78c",
    "name": "AMA: A Mountain Ripped My Foot Off"
  },
  {
    "url": "t3_kmpv1",
    "name": "IAmA Girl who got hit by a train in a car and survived AMA"
  },
  {
    "url": "t3_kn0dq",
    "name": "I have made $10000 USD selling virtual hats, AMA"
  },
  {
    "url": "t3_kn0sr",
    "name": "By Request: I run sleep studies. Got a sleep question? AmA."
  },
  {
    "url": "t3_kn9c2",
    "name": "I own and operate an Internet/Gaming Cafe AMA (as per request)"
  },
  {
    "url": "t3_knc16",
    "name": "IAMA white guy who attends a predominantly black  University. AMA "
  },
  {
    "url": "t3_kny0q",
    "name": "IAmA 18 year old male with an extremely rare gene defect.  AMA"
  },
  {
    "url": "t3_kohv6",
    "name": "IAMA 18-year-old male with a tiny penis. AMA. [NSFW]"
  },
  {
    "url": "t3_kopy2",
    "name": "IAmA Storm Chaser.... AMA...."
  },
  {
    "url": "t3_kpfsp",
    "name": "AMA Request Sabu from LuLSec this would be amazing"
  },
  {
    "url": "t3_kpoeq",
    "name": "IAmA College Textbook Publisher AMA"
  },
  {
    "url": "t3_kppc9",
    "name": "I am a 14 year old boy who studies freshwater fish for fun. I know loads of stuff, AMA!"
  },
  {
    "url": "t3_kppv8",
    "name": "IAmA former Amazon warehouse worker. AMA"
  },
  {
    "url": "t3_kpqz4",
    "name": "IAMA black guy with thick skin.  Ask me absolutely anything."
  },
  {
    "url": "t3_kq15l",
    "name": "IAMA teacher who feels that the federal and state governments know nothing about teaching our kids. AMAA"
  },
  {
    "url": "t3_kq5c3",
    "name": "I work at a 24/7 prepaid cell phone store in an area that has 20 times the national average of homicides per year and people get shot outside weekly..AMA"
  },
  {
    "url": "t3_kq8j6",
    "name": "IAmA guy that survived a 30,000 volt electrocution and a 30ft fall, AMA."
  },
  {
    "url": "t3_kqbkc",
    "name": "IamA woman who got married when I was 15 AMA"
  },
  {
    "url": "t3_kqhra",
    "name": "IAmA Little Person. AMA"
  },
  {
    "url": "t3_kqjxy",
    "name": "I'm unhappy with the quality of answers in the other medical AMA. Come ask a Paramedic anything."
  },
  {
    "url": "t3_kqkpc",
    "name": "IAmA Wall Street Investment Banker - AMA"
  },
  {
    "url": "t3_kqwex",
    "name": "I was in the center of the wild west days of the Web since 1993 - worked with Prodigy, CompuServe, id software, and built some of the first web sites.  AMA."
  },
  {
    "url": "t3_kqzxp",
    "name": "IAmA Gay Robot Skeleton on The Late Late Show with Craig Ferguson"
  },
  {
    "url": "t3_kr4us",
    "name": "IAMA Lesbian who will answer any question honestly.  AMA "
  },
  {
    "url": "t3_ksvqt",
    "name": "I drove a NYC taxi for 17 years AMA"
  },
  {
    "url": "t3_kt8n9",
    "name": "IAMA Deep sea diver AMA."
  },
  {
    "url": "t3_ktc48",
    "name": "IAmA dead mouse that tours, makes music, plays video games and has a stupid cat. AMA."
  },
  {
    "url": "t3_ku2kv",
    "name": "I am a retired police officer suffering from work related PTSD because of the brutalities and injustices I've witnessed and that happened to me."
  },
  {
    "url": "t3_ku5ss",
    "name": "I was sued for over $1.2 million unknowingly and now I am being bullied by Craigslist.org and their lawyers. AMAA"
  },
  {
    "url": "t3_kuajs",
    "name": "IAmA guy who quit his tech job to do magic.  I've since appeared twice on the Tonight show, currently host 5 podcasts, and have performed in every state nationwide.  AMA."
  },
  {
    "url": "t3_kuoes",
    "name": "IAmA girl who succeeded in killing herself, but was brought back to life. AMA."
  },
  {
    "url": "t3_kvd06",
    "name": "I am signed up to have my head cryogenically frozen when I die. AMAA"
  },
  {
    "url": "t3_kveib",
    "name": "IAmA Pot Grower AMAA"
  },
  {
    "url": "t3_kvgtq",
    "name": "20 year old young lady with double lazy eye. (pics) AMAA"
  },
  {
    "url": "t3_kvhel",
    "name": "IAmA  - So I tried this a while ago and I think I messed it up. But yes I'll do it again.  I am a meme, 'The Blind date murderer'"
  },
  {
    "url": "t3_kvq0v",
    "name": "As Requested, IAM Stephenson Billings, author of a recent investigative report on the dangers of Reddit.com"
  },
  {
    "url": "t3_kvsqi",
    "name": "IAMA guy whose fiance had sex with a student at the high school she was a teacher at and went to prison for it. AMA"
  },
  {
    "url": "t3_kw8ki",
    "name": "I am a female nude art model for a university. AMA."
  },
  {
    "url": "t3_kwpk1",
    "name": "I have Sexsomnia, and yes, it's a real thing. AMA."
  },
  {
    "url": "t3_kwwwd",
    "name": "Occupy Wall Street: I'm a bulge-bracket managing director here to defend capitalism, ask me anything."
  },
  {
    "url": "t3_kxeyb",
    "name": "IAmA Former craigslist/internet prostitute, AMA."
  },
  {
    "url": "t3_kxf69",
    "name": "Throwing myself to the wolves - I am part of The 1% . . . AMA"
  },
  {
    "url": "t3_kxuvs",
    "name": "IAMA Son of a polygamist cult leader AMAA"
  },
  {
    "url": "t3_ky3qf",
    "name": "IAmA Dermatologist with 34 years experience AMA"
  },
  {
    "url": "t3_ky7gk",
    "name": "IAmA member of the censor board for the Internet in a Middle Eastern country. AMAA."
  },
  {
    "url": "t3_ky98m",
    "name": "I was arrested on the Brooklyn Bridge yesterday, and just got out of central booking. Ask me anything."
  },
  {
    "url": "t3_kydfq",
    "name": "IAMA 1%er who isn't an asshole, worked hard to get here, takes care of his employees and the community, and who pays his fair tax. AMA"
  },
  {
    "url": "t3_kyg4x",
    "name": "IAmA 5 time cancer survivor at the age of 25, ask me anything."
  },
  {
    "url": "t3_kygt1",
    "name": "IAmA school lunch lady. AMA"
  },
  {
    "url": "t3_kyqo5",
    "name": "I have 15 years of experience on Wall Street, ask me anything about the financial crises or the industry."
  },
  {
    "url": "t3_kyyb8",
    "name": "IAmA 16(almost 17) year old who started his own business at the age of 14 and now work 3 hours a month and bring in $2000+. AMA."
  },
  {
    "url": "t3_kz41h",
    "name": "IAMA student who started university at 12, and is now about to graduate with a baccalaureate. AMA."
  },
  {
    "url": "t3_kzahz",
    "name": "IAmA diagnosed agoraphobe. AMA."
  },
  {
    "url": "t3_kzq74",
    "name": "IAMA Gillian Jacobs"
  },
  {
    "url": "t3_kzsrl",
    "name": "IamA waiter whom has served multiple presidents, first ladies, and celebrities. AMA"
  },
  {
    "url": "t3_kzu0b",
    "name": "IAMA 19-year-old female prostitute"
  },
  {
    "url": "t3_kzwfm",
    "name": "I have achieved reddit fame from doing absolutely nothing. I am the forthewolfx AMA."
  },
  {
    "url": "t3_kzwg3",
    "name": "IAmA Competitive Super Smash Bros. Brawl Player, and was arguably the best Princess Peach player in the U.S. for a time."
  },
  {
    "url": "t3_l0kor",
    "name": "By request, IAMA guy that does interviews for a large corporation."
  },
  {
    "url": "t3_l0pvg",
    "name": "IAmA Professional Dominatrix. AMA"
  },
  {
    "url": "t3_l0rdp",
    "name": "I am a petroleum engineer involved in the drilling/production/operations side of the oil/gas business.  Let's debunk oil/gas myths.  AMA"
  },
  {
    "url": "t3_l14dp",
    "name": "I AmA professional model. Ask me anything"
  },
  {
    "url": "t3_l1a4q",
    "name": "I've been in a knife fight in Guatemala, ran a bar in Cambodia, taught geography in Vietnam, sold printers in Tokyo, was face to face with an aggressive hammerhead shark in Belize, and was the first foreign english teacher in Ko Chang Thailand. I'm 26 and have never had a lot of money. AMA"
  },
  {
    "url": "t3_l1pio",
    "name": "IAmA Former Taco Bell Manager - AMA"
  },
  {
    "url": "t3_l20wi",
    "name": "ROUND 2! IAMA Dentist with 8 years of experience. AMA. "
  },
  {
    "url": "t3_l2j09",
    "name": "IAMA Person who does bikini/brazilian waxes (by request)"
  },
  {
    "url": "t3_l2jxw",
    "name": "AS REQUESTED: I'm a Baiter who tries to scam the internet scammers"
  },
  {
    "url": "t3_l2upu",
    "name": "IAmA Middle-Eastern, Muslim-Raised, 20s, female, who is now an American, bi-sexual, agnostic. AMA."
  },
  {
    "url": "t3_l37ap",
    "name": "IAmA person who handles all submitted manuscripts at a literary angency, AMA"
  },
  {
    "url": "t3_l38nw",
    "name": "IAmA 24 y/o black chick who's heard You act SO white. my whole life. - AMA anything (especially if you're too afraid to ask irl)"
  },
  {
    "url": "t3_l3bdi",
    "name": "IAmA gunshot to the face victim "
  },
  {
    "url": "t3_l3e51",
    "name": "IAMA Graduate student studying Arachnology (I study spiders)"
  },
  {
    "url": "t3_l3hnc",
    "name": "IAmA Police officer working at OccupyWallstreet.  Ask me anything!"
  },
  {
    "url": "t3_l3u7f",
    "name": "I work the graveyard shift doing body removal. Help me stay up tonight, AMA. (Warning: Graphic, NSFL)"
  },
  {
    "url": "t3_l3vgj",
    "name": "IAMA Synasthetic? woman. Up until 2 weeks ago, I thought everyone saw my pretty colours. I'm 33. FML."
  },
  {
    "url": "t3_l3wkh",
    "name": "IAMA Multimillionaire and a member of the 1%. Please be gentle. AMA."
  },
  {
    "url": "t3_l3xc2",
    "name": "My first sexual experience was in the Boy Scouts of America, AMA"
  },
  {
    "url": "t3_l44jg",
    "name": "I can read 700-950 words per minute, AMAA"
  },
  {
    "url": "t3_l4cd8",
    "name": "IAMA Transitioning Transsexual on my 200th Day of Hormones. AMA"
  },
  {
    "url": "t3_l4di8",
    "name": "IAmA phone operator at a Suicide Hotline. AMAA"
  },
  {
    "url": "t3_l4e9f",
    "name": "IAmA(n) Appalachian Trail Thruhiker. I hiked 2200 miles from GA to ME, AMA."
  },
  {
    "url": "t3_l4qyx",
    "name": "I am a guy who has been raided by the DEA. AMA"
  },
  {
    "url": "t3_l4vj7",
    "name": "I rode my bicycle across the USA twice, sleeping for free 95% of the nights.  AMA"
  },
  {
    "url": "t3_l54wz",
    "name": "IAmA 21 year old who has been hitchhiking frequently for 3 years and has been in several hundred cars. AMA"
  },
  {
    "url": "t3_l57gs",
    "name": "IAmA receptionist at a luxury car dealership. AMA"
  },
  {
    "url": "t3_l5b3l",
    "name": "IAmA U.S. National Yo-Yo Champion, Samm Scott. AMA"
  },
  {
    "url": "t3_l5ins",
    "name": "IMA budtender at a medical marijuana dispensary in California"
  },
  {
    "url": "t3_l5mn3",
    "name": "I AMA a Dentist.  If you need help online and don't have access to dentist."
  },
  {
    "url": "t3_l5mso",
    "name": "IAmA(n) Archaeologist. AMA"
  },
  {
    "url": "t3_l5u64",
    "name": "IAmA 15 year Photoshop professional. Ask me any any questions on how to do anything."
  },
  {
    "url": "t3_l5udv",
    "name": "IAM at a reddit meetup in Hawaii, AMA."
  },
  {
    "url": "t3_l62g7",
    "name": "IAmA Current Haunted House Worker AMA"
  },
  {
    "url": "t3_l62i6",
    "name": "i am a 19 year old male, who prostitutes."
  },
  {
    "url": "t3_l65k6",
    "name": "IAmA 15 year old who unschools, AmA"
  },
  {
    "url": "t3_l6h2k",
    "name": "I've been riding a motorcycle solo around the world for 2.5 years- AMA"
  },
  {
    "url": "t3_l6ok0",
    "name": "IAMA former child prostitute [AKA]"
  },
  {
    "url": "t3_l75m1",
    "name": "IAmA 17-year-old female with diagnosis 298.9, psychosis. AMA."
  },
  {
    "url": "t3_l78ij",
    "name": "Kimmel here"
  },
  {
    "url": "t3_l8dy7",
    "name": "IAmA 23 year old American who has been living in China since I graduated in June 2010. AMA"
  },
  {
    "url": "t3_l8f5o",
    "name": "IAMA 20 year old Art Dealer, With a Collection worth well over $100 million...AMAA"
  },
  {
    "url": "t3_l8gwf",
    "name": "I'm Soul Khan, a retired battle rapper AMA"
  },
  {
    "url": "t3_l8l84",
    "name": "Former Infantry Marine and Security Driver for an Escort service.  Tips for Reddit on sacking the hell up."
  },
  {
    "url": "t3_l8t68",
    "name": "As requested: I have been in Area 51 AMA"
  },
  {
    "url": "t3_l9plx",
    "name": "IAmA 22 year old Cherokee male that went to an all Native American high school in the capital of the Cherokee Nation. AMA"
  },
  {
    "url": "t3_l9xfj",
    "name": "IAMA Blizzard Entertainment Game Master, AMA"
  },
  {
    "url": "t3_laqnm",
    "name": "IAmA 27 y/o male that successfully immigrated to New Zealand from the USA a year ago. AMA"
  },
  {
    "url": "t3_larcm",
    "name": "IAMA guy who spent most of his  life deaf. Had surgery a few years ago and now I can hear. ama"
  },
  {
    "url": "t3_lb2qy",
    "name": "IAM Former Actor Tim Eyster, best known as Sponge Harris on Salute Your Shorts - LIVE Interview ALL DAY"
  },
  {
    "url": "t3_lb6h2",
    "name": "IAMA guy who works for financial services, and walked by the #occupywallstreet protests today, and had a realization."
  },
  {
    "url": "t3_lbn48",
    "name": "I'm the novelist Diana Spechler. My novels are Who by Fire and Skinny. I've also written for the New York Times, GQ, O, and a bunch of other magazines. AMA"
  },
  {
    "url": "t3_lbpvr",
    "name": "IAmA living statue AMA"
  },
  {
    "url": "t3_lbz79",
    "name": "IAmA person who has experienced sleep paralysis more times than I can count. AMA or share your experience."
  },
  {
    "url": "t3_lc36c",
    "name": "I am Irish and live in Ireland, AMA"
  },
  {
    "url": "t3_lc588",
    "name": "IAmA US Soldier currently in Afghanistan AMA!"
  },
  {
    "url": "t3_ld11f",
    "name": "IAmA 28 year old who spent his life savings putting his mother through college - AMA"
  },
  {
    "url": "t3_ld6n9",
    "name": "IAmA chemical engineer with a degree specializing in the Oil Sands (Tar Sands). I work extensively with industry and pipeline companies AMA."
  },
  {
    "url": "t3_ldtdb",
    "name": "Yeah, Feynman taught me physics. We used to hang out one-on-one once a week, too. AMA."
  },
  {
    "url": "t3_le3y8",
    "name": "IAmA 23yo whose parents are imprisoned for my brother's murder. AMA."
  },
  {
    "url": "t3_lecod",
    "name": "IAM A Mexican living in a city where last year we were considered the one of most deadliest citys in Mexico due to drug cartels AMA! "
  },
  {
    "url": "t3_lf6l7",
    "name": "IAmA Closet pedophile in my early 20s. AMA."
  },
  {
    "url": "t3_lh8j2",
    "name": "IAmA 21 year old female with a port wine stain covering half of my face. AMA"
  },
  {
    "url": "t3_lhhf8",
    "name": "I lived in a Jungle for 7 months in Madagascar. AMA"
  },
  {
    "url": "t3_lhj37",
    "name": "IAMA 22 years old girl previously an intersex person with CAH.  Ask me anything.  AMAA"
  },
  {
    "url": "t3_lhznp",
    "name": "IAmA a lap dancer and have been since I was 17. I am now thinking about becoming an escort. AMA"
  },
  {
    "url": "t3_lifao",
    "name": "IAmA manager at McDonald's. AMA"
  },
  {
    "url": "t3_lio6o",
    "name": "IAMA Police Officer AMAA"
  },
  {
    "url": "t3_lix4c",
    "name": "I am a practicing Pagan/Witch AMA"
  },
  {
    "url": "t3_ljozu",
    "name": "AMA as requested 29 yr old man HIV+ for 3 years"
  },
  {
    "url": "t3_ljviu",
    "name": "IAma 23 year old who makes $0.05 a day off adsense. I get around 250k pageviews a week."
  },
  {
    "url": "t3_ljx5j",
    "name": "I won 2 Million in the Lotto. Ask me anything."
  },
  {
    "url": "t3_lk4pa",
    "name": "IAmA real 40 year old virgin. AMA"
  },
  {
    "url": "t3_lkfl3",
    "name": "I am Texas State Judge Jeff Shadwick AMA "
  },
  {
    "url": "t3_ll079",
    "name": "IAmA scientist who puts people's brains to sleep, one hemisphere at a time, and studies their functioning. AMA.  "
  },
  {
    "url": "t3_llgj0",
    "name": "IAmA 20 year old who was raised as a Pagan/Wiccan from birth. AMA!"
  },
  {
    "url": "t3_lljbh",
    "name": "IAmA Semi Truck Driver"
  },
  {
    "url": "t3_lll74",
    "name": "IAm the #1 Ranked Collegiate Competitive Eater in America. Flew to Buffalo, NY to compete in the World Hands Free Pumpkin Pie Eating Contest tomorrow. AMA"
  },
  {
    "url": "t3_lm56g",
    "name": "IAmA Videogame Music Composer AMA"
  },
  {
    "url": "t3_lm64k",
    "name": "IAMA 20 year old female, clinically diagnosed as a nymphomaniac. AMA"
  },
  {
    "url": "t3_lmuwf",
    "name": "I run Pokmon Reorchestrated, a personal project dedicated to creating cinematic orchestral arrangements based on the music of Pokmon. AMA"
  },
  {
    "url": "t3_lncwi",
    "name": "IAmA 911 Dispatcher AMAA"
  },
  {
    "url": "t3_lnfgs",
    "name": "to fight piracy my band (deer tick) leaked a fake rap album, literally ask me anything!"
  },
  {
    "url": "t3_lnfx8",
    "name": "IAma guy who cut three of his fingers off on a table saw in college. WITH PICTURES!"
  },
  {
    "url": "t3_lnthu",
    "name": "IamA male professional body piercer. AMA"
  },
  {
    "url": "t3_lo941",
    "name": "I married by first cousin (maternal) and have two lovely children (twins). AMA"
  },
  {
    "url": "t3_loj61",
    "name": "IAMA Girl who has Alopecia Universalis. AMA."
  },
  {
    "url": "t3_lpddh",
    "name": "IAMA KFC Fry Cook. AMA"
  },
  {
    "url": "t3_lq210",
    "name": "IAMA Southwest Airlines Flight Attendant. AMA"
  },
  {
    "url": "t3_lq53c",
    "name": "IAmA(n) Albino "
  },
  {
    "url": "t3_lqp4b",
    "name": "IAmA biblical scholar and amateur theologian."
  },
  {
    "url": "t3_lqr8p",
    "name": "As per request: IAmA Female with Pedophilic Urges. AMA."
  },
  {
    "url": "t3_lqxxa",
    "name": "As requested, IAMA person against the Occupy movement. As in, actually against it, not just how it's done."
  },
  {
    "url": "t3_lr1bo",
    "name": "IAmA Nudist, as requested, AMA"
  },
  {
    "url": "t3_lr37l",
    "name": "I gained 40 pounds to be a co-star in probably one of the worst movies ever created, The Adventures of Young Van Helsing AMA"
  },
  {
    "url": "t3_lr8nt",
    "name": "IAmA Crematorium Worker (as requested!)"
  },
  {
    "url": "t3_lruh7",
    "name": "IAmA guy whose bromance has turned into a gay relationship, yet neither of us admit it. AMA"
  },
  {
    "url": "t3_ls8fn",
    "name": "I've been paid &gt;$150K for the last year to do nothing, I am still being paid ... to do nothing."
  },
  {
    "url": "t3_lsccz",
    "name": "IAMA 31 year old female virgin. AMA."
  },
  {
    "url": "t3_lsq67",
    "name": "IAmA coin dealer and collector. I specialize in U.S. issues from 1793 to present. AMAA."
  },
  {
    "url": "t3_lsx60",
    "name": "IAmA woman who stopped producing growth hormone at 5 years old at a height of 3'. Due to growth hormone therapy I reached an adult height of 4'7. AMA"
  },
  {
    "url": "t3_lsx9h",
    "name": "As a child, I was kept in a dungeon for three years by my stepfather. AMA"
  },
  {
    "url": "t3_lsyze",
    "name": "IAmA male with Cluster Headaches (aka The Suicide Headache) AMA"
  },
  {
    "url": "t3_lt39p",
    "name": "I'm a 6th generation of atheist family in muslim Country , Turkey. AMA "
  },
  {
    "url": "t3_lte2v",
    "name": "I am an hypnotist AMA"
  },
  {
    "url": "t3_ltfi6",
    "name": "IAMA Board Certified Urologist Who performs vasectomies; ask me anything."
  },
  {
    "url": "t3_ltvtz",
    "name": "I work at Best Buy and I just got locked inside of the store. Managers forgot about me. AMA"
  },
  {
    "url": "t3_lui8v",
    "name": "IAmA guy who has dystrophic epidermolysis bullosa AMA"
  },
  {
    "url": "t3_luk45",
    "name": "As Requested:  I am a 'Kiss cam' operator.  AMA.  "
  },
  {
    "url": "t3_lv6bl",
    "name": "IAMA Bored Actor Waiting On Set, I'll Make Any Face You Demand of Me."
  },
  {
    "url": "t3_lvnin",
    "name": "IAmA girl with spontaneous orgasms. AMAA"
  },
  {
    "url": "t3_lvtb9",
    "name": "AMA Weekly: Presents Scott SirScoots Smith"
  },
  {
    "url": "t3_lvurl",
    "name": "IAMA recording engineer that records probably 90% of the Movie Trailer voice you hear, as well as various Voice Talents. AMA"
  },
  {
    "url": "t3_lwh1o",
    "name": "As requested, IAmA lucid dreamer"
  },
  {
    "url": "t3_lwlh0",
    "name": "IAMA practicing, devout (and as far as I can tell not-crazy) Mormon. AMA"
  },
  {
    "url": "t3_lwljh",
    "name": "IAmA dev team of Bastion, the action RPG where an old man talks to you the whole time. Ask us anything!"
  },
  {
    "url": "t3_lwsbl",
    "name": "IAmA straight male crossdresser.  AMA"
  },
  {
    "url": "t3_lx6fx",
    "name": "As Requested, I was on Extreme Makeover: Home Edition, AMA"
  },
  {
    "url": "t3_lxhj4",
    "name": "IAmA Film Director with a movie that is currently in theaters. AMA"
  },
  {
    "url": "t3_lxjkl",
    "name": "IAMA 19 year old with Tourette Syndrome AKA Tourettes AMA [ I have proof, if needed ] "
  },
  {
    "url": "t3_lxq1h",
    "name": "IAmA Tech Support Rep for Comcast - Ask me anything"
  },
  {
    "url": "t3_ly0fv",
    "name": "IAmA woman who escorted for 2 years, it wasn't glamorous or porn-worthy and I didn't do it because I was on crack or forced to by a pimp. AMA "
  },
  {
    "url": "t3_ly3g8",
    "name": "IAMA heir to a billion dollar corporation"
  },
  {
    "url": "t3_lybhk",
    "name": "IAmA schizophrenic who needs to talk about it, AMA."
  },
  {
    "url": "t3_lyp3h",
    "name": "IamA Christan Pedophile. AMA"
  },
  {
    "url": "t3_lyvml",
    "name": "IAmA Clerk at a porn shop"
  },
  {
    "url": "t3_lz1mx",
    "name": "IAmA girl who is physically unable to have an orgasm, ever. AMA"
  },
  {
    "url": "t3_lz5ui",
    "name": "IAmA Manager at a large movie theater. AMA!"
  },
  {
    "url": "t3_lzg2t",
    "name": "As of today, I've been a reddit admin for a year. AMA!"
  },
  {
    "url": "t3_lzg86",
    "name": "IAmA Guy whose biological mom and dad are both gay. AMA"
  },
  {
    "url": "t3_lzi9g",
    "name": "IAmA: European Gringo kidnapped in Peru and held against my will for 3 months in a fundamentalist christian rehabilitation center (free as of a couple weeks ago) "
  },
  {
    "url": "t3_lzjmc",
    "name": "IAMA Former Senior Developper for brazzers.com and mofos.com AMAA"
  },
  {
    "url": "t3_lzq6o",
    "name": "Do you have any question to a Japanese?"
  },
  {
    "url": "t3_lzv1c",
    "name": "IAmA paraplegic chick, AMA"
  },
  {
    "url": "t3_m07rh",
    "name": "If I eat a hamburger it will destroy my brain:AMA "
  },
  {
    "url": "t3_m0f7x",
    "name": "IAmA reddit co-founder who now runs a Newman's Own for Nerds that publishes xkcd, SMBC, bottles Awesomesauce, and more... AMA"
  },
  {
    "url": "t3_m0hyq",
    "name": "IAmA 34 year old woman with a virgin fetish."
  },
  {
    "url": "t3_m0juy",
    "name": "IAMA: Rocksmith Developer"
  },
  {
    "url": "t3_m0xqc",
    "name": "IAMA - Registered Sex Offender"
  },
  {
    "url": "t3_m10ia",
    "name": "I am a 22 year old male who was just diagnosed with something called Double Depression. AMA"
  },
  {
    "url": "t3_m20u5",
    "name": "IAmA person who was drugged by my own Mother as a form of brainwashing from age 8-11 until I was taken from her by Child Protective Services. AMA"
  },
  {
    "url": "t3_m249t",
    "name": "homeless for 7 years just moved into a house. AMA."
  },
  {
    "url": "t3_m2guf",
    "name": "At the age of 10, I got asked by my mother if I wanted to commit suicide to be with daddy in heaven + more, AMA"
  },
  {
    "url": "t3_m2nji",
    "name": "IamAn Audiologist. AMA. "
  },
  {
    "url": "t3_m2w88",
    "name": "IAMA cop who will truthfully answer your questions, not feed you what you want to hear."
  },
  {
    "url": "t3_m3133",
    "name": "IAmA Aesop Rock AMA"
  },
  {
    "url": "t3_m33x2",
    "name": "IAmA Female who cross-dressed up until 8th Grade (pictures) AMA "
  },
  {
    "url": "t3_m35qn",
    "name": "IAmA music industry executive"
  },
  {
    "url": "t3_m37sp",
    "name": "I was severely mentally abused as a child by my father and his wife. They had an actual book of different ways to torture me. Of everything they did to me this was the most evil."
  },
  {
    "url": "t3_m3hy4",
    "name": "IAmA Proud Feminist, NOW member, and public policy activist  AMA "
  },
  {
    "url": "t3_m3kwu",
    "name": "IAmA man who lost his faith about a year ago, but am still the senior minister at a Christian church. AMA."
  },
  {
    "url": "t3_m3w8z",
    "name": "IAmA father of 11 week old triplets AMA"
  },
  {
    "url": "t3_m4fs5",
    "name": "IAmA Professional Ballerina AMA"
  },
  {
    "url": "t3_m4no7",
    "name": "IAMA (WeAreA) person diagnosed with Dissociative Identity Disorder (Multiple Personalities) among other things. Ask us anything!"
  },
  {
    "url": "t3_m4sdu",
    "name": "IAmA Psychiatric nurse who works in lock up AMA"
  },
  {
    "url": "t3_m56bz",
    "name": "IAmA 23-year-old woman who has recently recovered from Vaginismus.  AMA"
  },
  {
    "url": "t3_m5cal",
    "name": "IAMA stand-up comic that is going to mail out unique drawings and arts and crafts to ANYONE who wants it in order to increase my fan base."
  },
  {
    "url": "t3_m5lim",
    "name": "We are @AnonymousIRC on Twitter. Monitoring Anonymous since 2010. AmA. We are honest."
  },
  {
    "url": "t3_m5q5l",
    "name": "I immigrated to the US from Russia in 1993. AMA"
  },
  {
    "url": "t3_m5r01",
    "name": "IAmA victim of gang rape who attempted to report it to the police and was unsuccessful. AMA"
  },
  {
    "url": "t3_m6dws",
    "name": "IAmA Men's Rights Activist"
  },
  {
    "url": "t3_m6mby",
    "name": "IamA former contestant on America's Next Top Model. AMA."
  },
  {
    "url": "t3_m6oe2",
    "name": "IAmA Tim Hortons Employee AMA!"
  },
  {
    "url": "t3_m7ajc",
    "name": "IAmA Sushi Chef AMA"
  },
  {
    "url": "t3_m7j0f",
    "name": "IAmA veteran who participated during the initial deployment to Afghanistan (2002) and the invasion of Iraq (2003).  AMAA"
  },
  {
    "url": "t3_m7p68",
    "name": "I built a mosaic of MLK using 4,242 Rubik's Cubes, AMA"
  },
  {
    "url": "t3_m7q4u",
    "name": "IAmA Voice Actor who has voiced Spider-Man, Ocelot, and Hal Jordan. I am Josh Keaton."
  },
  {
    "url": "t3_m80x2",
    "name": "IAMA former Saturday Night Live Intern, Ask me anything"
  },
  {
    "url": "t3_m99kt",
    "name": "IAMA Penn State Student in my senior year.  My senior thesis film is about a coach molesting a young boy [written before the scandal obviously] AMA"
  },
  {
    "url": "t3_m9gd4",
    "name": "IAmA: 21 y/o female combat medic in the Army. AMA"
  },
  {
    "url": "t3_ma07z",
    "name": "I AMA Wind turbine technician. AMA"
  },
  {
    "url": "t3_ma1zy",
    "name": "IAmA person who, despite living in a roach infested apartment and living under the poverty line, absolutely loves my fantastic life.  I think I have something to offer some of you"
  },
  {
    "url": "t3_ma77m",
    "name": "IAmA: Survivor of child abuse. AMA"
  },
  {
    "url": "t3_maa6m",
    "name": "IAmA Mankini from The Soup (AMAA)"
  },
  {
    "url": "t3_mateq",
    "name": "I am Neil deGrasse Tyson -- AMA"
  },
  {
    "url": "t3_mbxh1",
    "name": "I have been homeless for 2 weeks. AMA"
  },
  {
    "url": "t3_mbzq1",
    "name": "I work at a Rocky Horror Show, AMA"
  },
  {
    "url": "t3_mc8s6",
    "name": "I am James Kochalka, Cartoonist laureate of Vermont.  AMA"
  },
  {
    "url": "t3_mcm1y",
    "name": "As Requested: IamA Con Man. AMAA"
  },
  {
    "url": "t3_mcuki",
    "name": "IAmA Frequent Shoplifter who has stolen over $75,000 worth of goodies in the past year and a half - AMAA!"
  },
  {
    "url": "t3_md61v",
    "name": "I am law professor and activist Lawrence Lessig, AMA"
  },
  {
    "url": "t3_md8pd",
    "name": "I am Jeph Jacques, author of Questionable Content and professional internet cartoonist. AMA"
  },
  {
    "url": "t3_mdd5l",
    "name": "Have worked on the camera crew on many seasons of Survivor. AMAA"
  },
  {
    "url": "t3_mdea2",
    "name": "IAmA black guy who was adopted by a white family. AMA!"
  },
  {
    "url": "t3_mdu7h",
    "name": "I Am Matt Jones. I play Badger on AMC's Breaking Bad. AMA!"
  },
  {
    "url": "t3_me3vy",
    "name": "I worked behind the scenes in the Porn Industry"
  },
  {
    "url": "t3_melan",
    "name": "We are the creators of Sideway, a game for PS3/PC released yesterday on Steam. AMA."
  },
  {
    "url": "t3_meus3",
    "name": "AMA I am a 19 year male who's been homeless for 9 months and successfully hiding it from almost all my friends and family."
  },
  {
    "url": "t3_mfjds",
    "name": "IAmA Straight male porn star"
  },
  {
    "url": "t3_mg7zm",
    "name": "IAmA Redditor who will be on a new TLC show (The Virgin Diaries) in a couple weeks because of an AMA I did last year. AMA (again)"
  },
  {
    "url": "t3_mgbta",
    "name": "Halt Criminal Scum! IAmA Daedric God of Madness named Sheogorath..."
  },
  {
    "url": "t3_mgzpx",
    "name": "We Built An RFID-Enabled Beer Vending Machine At Work"
  },
  {
    "url": "t3_mh9yi",
    "name": "We are Rooster Teeth, makers of Red vs. Blue. AMA."
  },
  {
    "url": "t3_mhys7",
    "name": "I Used a Methadone Clinic for 1.5 years to Quit Heroin, Now Clean Almost 4 Years - AMA! :)"
  },
  {
    "url": "t3_mi10x",
    "name": "IAmA person living with Ehlers Danlos Syndrome Type 3 Hyper-mobility. AMA "
  },
  {
    "url": "t3_mi4km",
    "name": "IAMA professional toy tester, AMA."
  },
  {
    "url": "t3_mirst",
    "name": "IAmA Porn Video Editor; AMA!"
  },
  {
    "url": "t3_mjbc2",
    "name": "I work at a major record label and manage artists/bands/writers/producers. I also used to be in a band on a major label. AMAA"
  },
  {
    "url": "t3_mk9xy",
    "name": "I don't know if anyone cares, but IamA child in a top .5% family. AMA"
  },
  {
    "url": "t3_mkbgs",
    "name": "IAmA Landlord, AMA.  (Inspired by the smoking neighbor AskReddit thread)"
  },
  {
    "url": "t3_mkbs3",
    "name": "IAMA librarian at an Ivy League college.  AMA."
  },
  {
    "url": "t3_mkcyb",
    "name": "IAmA 28 years old guy getting arranged marriage in two weeks and not against my will. AMA."
  },
  {
    "url": "t3_mkd2n",
    "name": "I work at an erotic bakery. I make dicks all day. AMaA"
  },
  {
    "url": "t3_mkfnw",
    "name": "IAmA Hutch and I make Call of Duty videos and put them on the internet"
  },
  {
    "url": "t3_mlote",
    "name": "IAMA Convict who has done time in Texas prisons both state and private owned. I'm here to put the myths about prisons &amp; convicts to rest. "
  },
  {
    "url": "t3_mmecu",
    "name": "IAmA Malware developer AMA"
  },
  {
    "url": "t3_mmo38",
    "name": "IamA daughter of a male porn star (not Tad's lol)"
  },
  {
    "url": "t3_mmoay",
    "name": "IAmA Birthday Party Princess AMA"
  },
  {
    "url": "t3_mmsr7",
    "name": "I AMA a Dentist. If you need help online and don't have access to dentist. "
  },
  {
    "url": "t3_mmzj2",
    "name": "IAmA Nickelodeon Storyboard Artist. AMA and I'll draw it."
  },
  {
    "url": "t3_mn6kh",
    "name": "As requested, the son of a female pornstar. Ask him anything."
  },
  {
    "url": "t3_mnket",
    "name": "I am a self-taught poker pro who has over 6 million in winnings."
  },
  {
    "url": "t3_mnqtt",
    "name": "IamAn Israeli soldier. AMA"
  },
  {
    "url": "t3_mo468",
    "name": "Iama American Hindu girl whose parents have just arranged her marriage. "
  },
  {
    "url": "t3_mo6lb",
    "name": "IAmA Wizard at Universal Studios 'Wizarding World of Harry Potter'"
  },
  {
    "url": "t3_modqz",
    "name": "IamA person with a very lame Super-Power. AMA"
  },
  {
    "url": "t3_mpcme",
    "name": "AMA as reqested: I went to Mexico and took Tabernanthe iboga (Ibogaine) just to see what it was like. "
  },
  {
    "url": "t3_mpd6z",
    "name": "IAmA Former Walt Disney World character performer! AMA!!"
  },
  {
    "url": "t3_mpttn",
    "name": "IAmA 21 yr old Muslim girl who wears the headscarf but has led a double-life kept hidden from my family for the last 3 years."
  },
  {
    "url": "t3_mpuc8",
    "name": "IAmA guy who completed 5 years probation for having sex with a minor."
  },
  {
    "url": "t3_mpxw4",
    "name": "IAmA former high school chemistry teacher who quit out of frustration for the profession after just 2 years. AMA"
  },
  {
    "url": "t3_mq8ka",
    "name": "We are the musicians of the Game Music Bundle (Minecraft, Super Meat Boy, VVVVVV, Mighty Milky Way, Cobalt, etc.) Ask Us Anything!"
  },
  {
    "url": "t3_mr03m",
    "name": "I am a 13 and a half transboy. AMA. "
  },
  {
    "url": "t3_mr4pf",
    "name": "I am Wikipedia programmer Brandon Harris. AMA"
  },
  {
    "url": "t3_mr8rq",
    "name": "IAmA Mexican citizen seeing his country being torn apart by the war on drugs, i have been kidnapped, i have seen shootings, public executions, roadblocks, decapitations and i have a drug dealer on my neighborhood. AMA"
  },
  {
    "url": "t3_mrrn9",
    "name": "IAMA ex white supremist skinhead, I was in a gang, got arrested the whole deal. Joined when I was 12. It's something I'm incredibly ashamed of and usually don't tell people. AMA "
  },
  {
    "url": "t3_mrv1b",
    "name": "IAmA Department Store Santa AMAA"
  },
  {
    "url": "t3_ms55u",
    "name": "15 years ago we adopted 2 girls from Eastern Europe.  If I had known then what I know now....AMAA."
  },
  {
    "url": "t3_ms64g",
    "name": "IAmA Project Director at Harmonix and the Lead Designer of Dance Central 2. AMAA"
  },
  {
    "url": "t3_mt4f7",
    "name": "I am a man who who had a sexual relationship with his sister. AMAA. "
  },
  {
    "url": "t3_mt7c0",
    "name": "IAMA male who has had sex with his high school teacher."
  },
  {
    "url": "t3_mtikk",
    "name": "IAMA Division 1 College Football player in a BCS conference AMA"
  },
  {
    "url": "t3_mtlso",
    "name": "IAMA guy who owns the $1100 hdmi cable"
  },
  {
    "url": "t3_mto9e",
    "name": "I invent and produce kinky sex toys for a living. AMA"
  },
  {
    "url": "t3_mtzac",
    "name": "IamA Proffesional GhostWriter. I do everything from college papers to business proposals. "
  },
  {
    "url": "t3_muewc",
    "name": "IAmA Trucker Who Has Travelled The United States Many Times. AMA"
  },
  {
    "url": "t3_muhem",
    "name": "This is Gregg Gethard from the Where In The World Is Carmen Sandiego Video"
  },
  {
    "url": "t3_muoru",
    "name": "By request: I'm the owner of a small cardboard box company. AMA."
  },
  {
    "url": "t3_mv0si",
    "name": "I AM the Executive Producer and Show Runner of 450 episodes of History's Modern Marvels series.  AMAA."
  },
  {
    "url": "t3_mva92",
    "name": "IAmA person who picks up pedophiles in chatrooms and exposes them online. AMA"
  },
  {
    "url": "t3_mvc95",
    "name": "I'm Hillary Adams, the girl in the Judge William Adams beating video. Reddit rescued me. AMA"
  },
  {
    "url": "t3_mvhnh",
    "name": "I am Zach Wahls, the guy who defended my two moms before the IA legislature.  AMA."
  },
  {
    "url": "t3_mvj7g",
    "name": "IAMA prguitarman, creator of LOL_Comics / Nyan Cat! AMA! "
  },
  {
    "url": "t3_mvn46",
    "name": "I am a time traveler from the year 2311.  After three years of hard work, I was approved for a time traveling license, and am now here, 300 years into my past, to study the early internet.  AMA."
  },
  {
    "url": "t3_mw1g2",
    "name": "By request: I work at CERN.  AMA!"
  },
  {
    "url": "t3_mwcb7",
    "name": "I AmA US Army Medic, leaving Afghanistan in 2 days. AMA."
  },
  {
    "url": "t3_mws0f",
    "name": "IAM the guy who paid an $88 tow bill. In pennies. AMA!"
  },
  {
    "url": "t3_mwzke",
    "name": "I Am Lucas' Dad Luis. AMAA"
  },
  {
    "url": "t3_mx4v7",
    "name": "IAmA 22-year-old transsexual who regularly sleeps with men who don't know. AMA"
  },
  {
    "url": "t3_mx53y",
    "name": "I am youtube user Cotter548, AKA the inventor of the Rickroll. AMA."
  },
  {
    "url": "t3_mxjz5",
    "name": "I run Digital Blasphemy. AMAA"
  },
  {
    "url": "t3_mxv4n",
    "name": "IAMA Pathological Liar who lives many lives. AMAA"
  },
  {
    "url": "t3_mxyca",
    "name": "IAmA winner of a reality show who now has his own cooking show. AMA"
  },
  {
    "url": "t3_myc7z",
    "name": "IAmA Freemason. AMA"
  },
  {
    "url": "t3_myotc",
    "name": "I was killed in a motorcycle wreck and remember dying. AMA"
  },
  {
    "url": "t3_myt7l",
    "name": "As requested, I'm a Male who has been raped by a Female. AMA. "
  },
  {
    "url": "t3_mzptt",
    "name": "IAMA Carnie AMA"
  },
  {
    "url": "t3_mzr3x",
    "name": "I have been working for Gamestop for over 8 years. I've seen it all. AMA. "
  },
  {
    "url": "t3_mzwex",
    "name": "IAmA former identity thief, credit card fraudster, blackhat hacker, document forger. AMA"
  },
  {
    "url": "t3_n03gl",
    "name": "IAMA Mall Santa AMA"
  },
  {
    "url": "t3_n0com",
    "name": "IAmA Former U.S. Marine Scout Sniper. AMA"
  },
  {
    "url": "t3_n1igz",
    "name": "IAmA Lawyer who helped work on the Supreme Court case against Westboro Baptist Church. AMAA."
  },
  {
    "url": "t3_n277t",
    "name": "IAmA Ex-Manager of a budget hotel that found a dead body (among other things) AMA"
  },
  {
    "url": "t3_n2ic9",
    "name": "IAmA man who just finished walking across America AMA"
  },
  {
    "url": "t3_n2n4l",
    "name": "IAmA sole survivor of the front car in a head-on train collision. AMA."
  },
  {
    "url": "t3_n2v7c",
    "name": "IAmA 21 year old with schizophrenia. AMA"
  },
  {
    "url": "t3_n31yf",
    "name": "IAmA former call-girl who specialized in entertaining the weird clientele.  AMA"
  },
  {
    "url": "t3_n3rwe",
    "name": "IAmA Venezuelan citizen opposed to Chavez's regime. AMA"
  },
  {
    "url": "t3_n4509",
    "name": "IAmA former drug dealer who paid his way through college and was ultimately arrested. AMA"
  },
  {
    "url": "t3_n4s92",
    "name": "IAMA 29yo American who met a German Redditor last year on r4r, began a LDR, and quit my job as an attorney with the U.S. government four months ago to move to Germany to be with him, and to experience a new culture and language.  AMA (in English or Deutsch). "
  },
  {
    "url": "t3_n5386",
    "name": "AMA blackman playing in a metal band!"
  },
  {
    "url": "t3_n5shx",
    "name": "My wife and I live a lifestyle out of the 1920s/1930s.  We regularly dress in original clothing, own a historic house, and a 1920s car. Ask us Anything."
  },
  {
    "url": "t3_n5zbl",
    "name": "IAmA 19 Year old guy with a baby arm due to a birth injury, AMA"
  },
  {
    "url": "t3_n680m",
    "name": "I Am Roy Speckhardt, Executive Director of the American Humanist Association. AMAA"
  },
  {
    "url": "t3_n6l4y",
    "name": "I am a cast member of The Adventures of Pete and Pete"
  },
  {
    "url": "t3_n8lle",
    "name": "I and my husband sold almost all our stuff and quit our jobs to travel the world. We're three months in. AMA."
  },
  {
    "url": "t3_n8n71",
    "name": "IAmA:  Recorded an album in my bedroom with pirated software and was signed to a 5 album deal on Warner Brothers. "
  },
  {
    "url": "t3_n96ka",
    "name": "IAmA 15-year-old college student that lives on-campus at a major university.  Ask Me (Almost) Anything."
  },
  {
    "url": "t3_n9pgt",
    "name": "IAMA daughter of a biker from a well established club. "
  },
  {
    "url": "t3_n9xn4",
    "name": "IAMA hunter in NC that harvested a 509 pound black bear on Saturday. AMA"
  },
  {
    "url": "t3_nafhk",
    "name": "IAmA Costco Manager AmA."
  },
  {
    "url": "t3_nas4t",
    "name": "I am a Private Security Contractor working in Afghanistan. AMAA"
  },
  {
    "url": "t3_nazsn",
    "name": "By Request: Won a million dollars on a scratch-off lottery ticket AMA"
  },
  {
    "url": "t3_nb6ue",
    "name": "IAmA developers of Castle Crashers, Alien Hominid, and the upcoming BattleBlock Theater."
  },
  {
    "url": "t3_nbe2h",
    "name": "I am the composer and sound designer of Minecraft. AMA"
  },
  {
    "url": "t3_nbys7",
    "name": "I am an elementary school janitor. AMA"
  },
  {
    "url": "t3_ncct7",
    "name": "I am a professional Starcraft 2 commentator. In the past 6 months, I've travelled around the world playing, and talking about video games. AMA"
  },
  {
    "url": "t3_nclu0",
    "name": "Im a Guild Wars 2 Developer: AMA about professions."
  },
  {
    "url": "t3_ndpy0",
    "name": "I'm an Australian that recently spent 5 months driving across the USA and Canada pretty much on a whim AMA."
  },
  {
    "url": "t3_ndtnu",
    "name": "IAmA survivor of a cult-like teen program that physically, sexually and psychologically tortured me, I made 3 films about it to save other kids. AMA"
  },
  {
    "url": "t3_nell7",
    "name": "IAmA 19 year old girl who lost her virginity at the age of four to her grandfather. AMA"
  },
  {
    "url": "t3_ngd5e",
    "name": "I am Neil deGrasse Tyson -- AMA"
  },
  {
    "url": "t3_ngxh9",
    "name": "By Request: I am WoodysGamertag Machinima Director and full time Youtuber with ~650k subs AMA"
  },
  {
    "url": "t3_nh0cf",
    "name": "I am a makeup artist on a porn set. AMA"
  },
  {
    "url": "t3_nh869",
    "name": "I'm the dude that takes your bags at the airport and puts them on the plane. AMA"
  },
  {
    "url": "t3_nhh85",
    "name": "I'm an African American Who proudly Celebrates Kwanzaa, AMA"
  },
  {
    "url": "t3_niiqj",
    "name": "IAMA Gringo living in Mexico City"
  },
  {
    "url": "t3_niuyj",
    "name": "Iama a guy that quit selling drugs to go back to school. And realised I did it all that for nothing..."
  },
  {
    "url": "t3_njkzs",
    "name": "In 1995, I was one of the guys on the team that made Shockwave at Macromedia..."
  },
  {
    "url": "t3_nkaqz",
    "name": "IAMA guy who biked 4000 miles cross-country to raise money for cancer in 2010, and am doing it again this summer.  Reddit, I hear you're good with causes.  AMA."
  },
  {
    "url": "t3_nkpiv",
    "name": "IAMA Guy who nearly blew his first porn shoot. AMAA"
  },
  {
    "url": "t3_nl52v",
    "name": "I am a guy who was rear-ended on my motorcycle by a Van going 90+ miles per hour, story and pics inside."
  },
  {
    "url": "t3_nlemw",
    "name": "IAMA New York Times bestselling author. Ask me about how the publishing industry is fucked-- or anything else."
  },
  {
    "url": "t3_nlh1x",
    "name": "I write Now I Know, a free daily email newsletter of /r/TIL-type stuff.  AMAA"
  },
  {
    "url": "t3_nm8z0",
    "name": "When I was 10 years old my parents were charged and convicted of distribution of child pornography. AMAA"
  },
  {
    "url": "t3_nmmjr",
    "name": "IAMA Man who had a sexual relationship with his mother. (Probably NSFW)"
  },
  {
    "url": "t3_nmonw",
    "name": "I work in an abortion clinic. AMAA."
  },
  {
    "url": "t3_nmr9s",
    "name": "I'm Jerry Guo, a journalist who was arrested while reporting from North Korea. AMA"
  },
  {
    "url": "t3_nn0j6",
    "name": "I was a genius for ten months at an Apple store. I'm the furthest thing from a Mac fan you'll ever meet. AMA."
  },
  {
    "url": "t3_nn7hw",
    "name": "IAmA 21 year old female on disability due to agoraphobia."
  },
  {
    "url": "t3_nn9ht",
    "name": "I am a 22yo woman that hacked the Uberman Sleep Schedule. AMA. "
  },
  {
    "url": "t3_nnywg",
    "name": "IAmA former fat guy (BMI = 42) who just summited Kilimanjaro (in a monkey hat!). AMA."
  },
  {
    "url": "t3_no1kn",
    "name": "IAmA person with sound-sight synesthesia (commonly described as 'hearing colors' or seeing colors when listening to music or other sounds) AMA."
  },
  {
    "url": "t3_no22t",
    "name": "IAmA guy whose family sold everything and moved onto a sail boat when I was a kid.  AMA."
  },
  {
    "url": "t3_noo1h",
    "name": "IAma Domino's Pizza Delivery Driver AMA"
  },
  {
    "url": "t3_noqmx",
    "name": "IAMA Jewelry store clerk. I handle thousands of dollars of merchandise every day, and I'm ready to spill the beans on the industry to help redditors. Boyfriends and husbands, take note. Girlfriends and wives, learn and appreciate."
  },
  {
    "url": "t3_nozcd",
    "name": "IAmA Schizophrenic 18yo girl with a severe Alice-in-Wonderland complex. AMA. {Obligatory First}"
  },
  {
    "url": "t3_np2ml",
    "name": "IAmA Homeless redditor, who is sleeping in my car for Christmas Eve. AMA."
  },
  {
    "url": "t3_npkcq",
    "name": "IAmA Nightclub bouncer and security officer for concerts -AMA-"
  },
  {
    "url": "t3_nppfu",
    "name": "I have severe Obsessive Compulsive Disorder, AMA."
  },
  {
    "url": "t3_npqvh",
    "name": "IAMA Homeless man working for a 5 star resort. I am the only one here on Xmas Eve for 18 hours straight."
  },
  {
    "url": "t3_npscz",
    "name": "IAmA female who has solo hitch-hiked over 10,000 miles. AMA"
  },
  {
    "url": "t3_nptrz",
    "name": "I AmA 16 year-old boy who was awakened in the middle of the night, and  escorted from my home in Texas to a wilderness therapy program in Idaho. I was there for 34 days. I got back yesterday. AMA."
  },
  {
    "url": "t3_npu3c",
    "name": "I pick up kids in the middle of the night against their will and escort them to wilderness therapy/rehab programs. AMA"
  },
  {
    "url": "t3_nq2xw",
    "name": "IAmA person who escaped from camp SUWS (the youth wilderness therapy program in Idaho) in 2006 when I was 17. As far as I know I am the only kid to ever successfully escape from SUWS. AMA"
  },
  {
    "url": "t3_nqerr",
    "name": "I am a totally blind redditer"
  },
  {
    "url": "t3_nr8p9",
    "name": "My BF and I visited BDSM professionals, AMAA!"
  },
  {
    "url": "t3_nr8wc",
    "name": "IAMA 26yr who runs one of the biggest jewelry stores in the US. AMA"
  },
  {
    "url": "t3_nrcbb",
    "name": "IAmA Pedophile who handed himself in to authorities after viewing CP to try and get support. AMA"
  },
  {
    "url": "t3_nrptu",
    "name": "IAmA (real) GoDaddy Employee. AMAA."
  },
  {
    "url": "t3_ns0re",
    "name": "IAmA correctional officer at a maximum security prison. AMA."
  },
  {
    "url": "t3_ns293",
    "name": "Links are NSFW: Graphic images. IAmA person that essentially severed all of his fingers on a tablesaw. AMA"
  },
  {
    "url": "t3_ns7qa",
    "name": "IAMA audiophile who's owned almost $10,000 of headphone equipment, AMA about audiophiles' crazy beliefs."
  },
  {
    "url": "t3_nselg",
    "name": "Mother sodomized my sister and blamed me AMA - Update"
  },
  {
    "url": "t3_nsjhi",
    "name": "IAmA young male that drove across America for a year only spending about $1,000"
  },
  {
    "url": "t3_nsnpz",
    "name": "IAmA 17 yr old male who had 21 Days to live when I was 10. AMAA"
  },
  {
    "url": "t3_nsumm",
    "name": "IAMA 17 year old male, that spent 21 months in a Insane Asylum. AMAA"
  },
  {
    "url": "t3_nt5i4",
    "name": "IAmA felon that spent time in federal prison after being  convicted of using bittorrent  to commit online piracy...AmA "
  },
  {
    "url": "t3_nu29m",
    "name": "IAMA guy whose cakeday wish is that I just want to do an AMA! Plus I think I've lived an interesting life and can share if you can ask the right questions! AMA"
  },
  {
    "url": "t3_nv0cb",
    "name": "IAmA multi-platinum selling Artist Manager (I manage bands) AMAA"
  },
  {
    "url": "t3_nvlkz",
    "name": "As Requested, Someone who has experienced  (and currently experiences) Genetic Sexual Attraction AMAA"
  },
  {
    "url": "t3_nw1vm",
    "name": "AMA the guy who replaced Paul Christoforo and is cleaning up after him."
  },
  {
    "url": "t3_nw9yo",
    "name": "IAmA nympho/slut AMA"
  },
  {
    "url": "t3_nwjzk",
    "name": "IAmA Happy, well-adjusted, tax-paying MtF transsexual."
  },
  {
    "url": "t3_nx0bs",
    "name": "I'm Robert Khoo. The guy that runs the business side of Penny Arcade."
  },
  {
    "url": "t3_nx0wg",
    "name": "IamA 24 year old female who is living in a domestic discipline marriage.  "
  },
  {
    "url": "t3_nxtg1",
    "name": "IAmA guy born with one hand. AMA."
  },
  {
    "url": "t3_nxui8",
    "name": "IAmA 24-year-old woman with Pica."
  },
  {
    "url": "t3_nxwe4",
    "name": "IAma Hollister/A&amp;F employee throughout college (5 years). I've seen it all, ask away."
  },
  {
    "url": "t3_nxzqk",
    "name": "IAmA Granddaughter of the CEO and Chairman of an international, multi-million dollar company. I was raised as a member of the 1%. AMAA"
  },
  {
    "url": "t3_nydzz",
    "name": "IAmA girl that grew up with both of her parents growing and selling weed. AMA."
  },
  {
    "url": "t3_nz3oi",
    "name": "IAMA Broadway Actor AMA"
  },
  {
    "url": "t3_nzb2o",
    "name": "I'm The Girl in the Reddit Hoodie Ads. AMA "
  },
  {
    "url": "t3_o028v",
    "name": "As requested, IAMA writer for an essay mill."
  },
  {
    "url": "t3_o02xn",
    "name": "IAmA: Loss Prevention Professional. AMAA"
  },
  {
    "url": "t3_o0ewq",
    "name": "IAmA Porn Store Clerk who works graveyard and security shifts at a 24hour porn store. AMA."
  },
  {
    "url": "t3_o0jnb",
    "name": "IAmA cop, who a year ago was told to cease using social media, Im back. AMA."
  },
  {
    "url": "t3_o0zpl",
    "name": "IAmA body sushi model (nyotaimori), AMA about being a human platter!"
  },
  {
    "url": "t3_o1b0k",
    "name": "As requested by /gamedev/: I AmA 10yr video game industry vet that likes helping people break into the industry. AMA!"
  },
  {
    "url": "t3_o1dyq",
    "name": "IAMA Five Guys employee, AMA"
  },
  {
    "url": "t3_o1ffi",
    "name": "IAmA 17 yo girl who wasn't allowed to talk to people til I was 13.AMA"
  },
  {
    "url": "t3_o1ghk",
    "name": "IAmA person with perfect recall of everything I read. AMA"
  },
  {
    "url": "t3_o1on7",
    "name": "I'm Mike Scala, IAmA candidate running for Congress to unseat a 12-year incumbent. AMA."
  },
  {
    "url": "t3_o1wog",
    "name": "IAmA Ex-Jehovah's Witness. AMA."
  },
  {
    "url": "t3_o27sj",
    "name": "IAMA Former State Leader for Aryan Nations. AMA"
  },
  {
    "url": "t3_o2mkt",
    "name": "Competitive Eater Takeru Kobayashi Answers Your Questions"
  },
  {
    "url": "t3_o2wsa",
    "name": "IAmA female administrator of a 21-35 year old nudist group AMA"
  },
  {
    "url": "t3_o2x8q",
    "name": "IAMA 2012 Doritos Crash the Superbowl top-five winner, and it was just announced today that I'm going to the Superbowl. Our commercial cost us $20 to make. AMA!"
  },
  {
    "url": "t3_o2zhc",
    "name": "IAMA performer at San Francisco's Lusty Lady, the world's only unionized, worker-owned cooperative peep show. AMAA."
  },
  {
    "url": "t3_o35sy",
    "name": "IAmA transgendered active duty US Naval officer. AMAA."
  },
  {
    "url": "t3_o484n",
    "name": "During my high school years, I was an Investigative Aide for the Division of Alcoholic Beverages and Tobacco of Florida (meaning I busted stores and bars for selling alcohol and cigarettes to minors).  AMA."
  },
  {
    "url": "t3_o49fa",
    "name": "IAmA Bouncer at a very popular inner city bar AMAA (By popular demand)."
  },
  {
    "url": "t3_o49y7",
    "name": "Today, I have been a Redditor for 6 years. AMA."
  },
  {
    "url": "t3_o4e54",
    "name": "IAmA Former Crack Whore! AMA!"
  },
  {
    "url": "t3_o4jci",
    "name": "IAmA Professional Tailor. AMA"
  },
  {
    "url": "t3_o5cmq",
    "name": "IAMA a cable guy in the Midwest.  I've slept with customers, drank with customers and smoked with customers..."
  },
  {
    "url": "t3_o5cod",
    "name": "IAmA certified Pokmon Professor"
  },
  {
    "url": "t3_o5frg",
    "name": "IAMA Guy Who Built A Theater In His Basement. AMA."
  },
  {
    "url": "t3_o5o8u",
    "name": "IAmA Chicken Farmer. AMA"
  },
  {
    "url": "t3_o6zoc",
    "name": "I grew up on a private 24 acre island with just me and my family.  AMA"
  },
  {
    "url": "t3_o6zsk",
    "name": "IAMA writer for the NBC show Community and  former associate editor of The Onion named Megan Ganz, AMA"
  },
  {
    "url": "t3_o7j0a",
    "name": "I am the mom that made her son a 3 layer Reddit pie cake, he stole my Karma. AMA"
  },
  {
    "url": "t3_o7xfo",
    "name": "IAmA Animator who has worked on some big TV shows in the last 10 years. AMA"
  },
  {
    "url": "t3_o814p",
    "name": "by request, IAMA dedicated Republican strategist/activist. AMA."
  },
  {
    "url": "t3_o86wz",
    "name": "I am an 18 year old boy who lives in a house that has  slides from floor to floor"
  },
  {
    "url": "t3_o925v",
    "name": "I have been living in a capsule hotel in Tokyo for the last month or so. Ask Me Anything!"
  },
  {
    "url": "t3_o9d71",
    "name": "IAMA single man who recently adopted a 14-year-old  emotionally disturbed boy. AMAA"
  },
  {
    "url": "t3_o9lb4",
    "name": "IAmA Competitive Eater that used to be an Anorexic. AMA"
  },
  {
    "url": "t3_oa934",
    "name": "IAmA top prospect in the MLB Minor League System, more specifically with the Philadelphia Phillies. AMA!"
  },
  {
    "url": "t3_oaj8s",
    "name": "IAmA guy who has two of my pictures used to create popular memes without my knowledge. AMAA"
  },
  {
    "url": "t3_oaoci",
    "name": "I'm an 18 year old schizophrenic, 170+ IQ with multiple scientific publications currently in the review phase. I'm being checked into a mental hospital as an inpatient tomorrow. AMA."
  },
  {
    "url": "t3_oaw7z",
    "name": "IAMA gay black student in Alabama."
  },
  {
    "url": "t3_ob7ni",
    "name": "IAmA nearly 800lbs, American, AMAA"
  },
  {
    "url": "t3_obds9",
    "name": "IAMA Composer who is finishing his first symphony."
  },
  {
    "url": "t3_objuq",
    "name": "IAmAn Ex-Max security Texas prison Correctional Officer"
  },
  {
    "url": "t3_obk0u",
    "name": "I am Cylon #1 on BSG, and Al The Hologram on Quantum Leap. I am Dean Stockwell. AMAA."
  },
  {
    "url": "t3_oc5cb",
    "name": "GGG - AMA"
  },
  {
    "url": "t3_oce74",
    "name": "IAmA Comedy club promoter in Times Square. I get rejected thousands of times a day. AMA"
  },
  {
    "url": "t3_oco15",
    "name": "IAmA attorney for Riot Games directing our opposition against SOPA/PIPA.  AMAA "
  },
  {
    "url": "t3_ocp42",
    "name": "IAMA professional astrologer.  AMA.  "
  },
  {
    "url": "t3_ode1i",
    "name": "Hello.  This is Fred Armisen.  Testing one two."
  },
  {
    "url": "t3_odgrv",
    "name": "IAmA Lesbian dating and having sex with men to pay off my student loans. AMAA"
  },
  {
    "url": "t3_odvpc",
    "name": "I'm Sean Faircloth, Director of Strategy and Policy with the Richard Dawkins Foundation for Reason &amp; Science US. "
  },
  {
    "url": "t3_oe0ll",
    "name": "IAMA guy who was kidnapped by my father from my mother along with my sister when I was in the 5th grade. AMA"
  },
  {
    "url": "t3_oea4l",
    "name": "IAMA guy raising 2 kids by myself.  One isn't my biological daughter. AMA"
  },
  {
    "url": "t3_oebkk",
    "name": "IAmA B. Dolan of Strange Famous Records. AMA"
  },
  {
    "url": "t3_oeiwj",
    "name": "IAmA person who worked for Serj Tankian (System of a Down) for 2 years. AMAA"
  },
  {
    "url": "t3_oep45",
    "name": "I am transitioning from Female to Male. AMA."
  },
  {
    "url": "t3_ofkmp",
    "name": "IAMA Orthodox Jew, and I want to answer your questions."
  },
  {
    "url": "t3_ofujc",
    "name": "I am only 26 years old, and weigh 425lbs. AMA. "
  },
  {
    "url": "t3_oglhf",
    "name": "I am a 41 y.o. man who has been with my wife for nearly 20 years. We are childless by choice and wish to converse with other similar couples as well as younger couples considering this decision in reference to their feelings, reasons, and consequences of this decision. "
  },
  {
    "url": "t3_oh06d",
    "name": "I had my colon removed and now I poo into a bag.  AMA"
  },
  {
    "url": "t3_oh07m",
    "name": "IAmA former religious cult member who spent 27 years having all areas of my life completely controlled by someone else. AMA"
  },
  {
    "url": "t3_oh5vh",
    "name": "IAmA optician with about an hour to kill. If you have any questions relating to your glasses, lenses or eyewear in general I'll be happy to answer you to the best of my ability."
  },
  {
    "url": "t3_oh7az",
    "name": "IAmA Flight Attendant. AMA"
  },
  {
    "url": "t3_ohe3x",
    "name": "IamA goat farmer.  AMA"
  },
  {
    "url": "t3_ohg8o",
    "name": "IAmA US Army Blackhawk Helicopter CrewChief AMAA"
  },
  {
    "url": "t3_ohpoe",
    "name": "IAmA small animal veterinarian (i.e. dogs, cats, exotics... Not horses, cows, etc.)... AMAA."
  },
  {
    "url": "t3_ohvch",
    "name": "IAmA girl who was born with an imperforate hymen. I didn't find out until after surgery for suspected appendicitis. AMA"
  },
  {
    "url": "t3_oicwg",
    "name": "I am (SOPA-opponent) Congressman Jared Polis, ask anything you'd like to know!"
  },
  {
    "url": "t3_oj382",
    "name": "IAMA Volkswagen mechanic at a small auto shop"
  },
  {
    "url": "t3_ojc6x",
    "name": "IAmA a Champion Professional Natural Bodybuilder AMA and I will answer"
  },
  {
    "url": "t3_ojf0b",
    "name": "IAmA Guy who found a long-lost sister neither of us (including our families) ever knew existed, at 20 years old."
  },
  {
    "url": "t3_ojjni",
    "name": "I jumped in front of a train and survived."
  },
  {
    "url": "t3_ok5fj",
    "name": "I work with the skin gun, AMA."
  },
  {
    "url": "t3_ok7vu",
    "name": "I work in a pawn shop. AMA"
  },
  {
    "url": "t3_ok92e",
    "name": "IAmA former student at Virginia Tech who was there during the tragedy in 2007. AMA"
  },
  {
    "url": "t3_okt3j",
    "name": "IAMA Traffic Engineer, AMA"
  },
  {
    "url": "t3_oldfm",
    "name": "IAMA former Girls Gone Wild cameraman...AMA"
  },
  {
    "url": "t3_omfxk",
    "name": "I was an intelligence analyst involved in the First Desert Storm, my actions resulted in the deaths of numerous civilians, AMA"
  },
  {
    "url": "t3_omie1",
    "name": "IAmA (As per request): a member of an aristocratic family and the first openly gay male of my line AMA"
  },
  {
    "url": "t3_omjuo",
    "name": "I am a vagabond/hobo that travels randomly with little or no money."
  },
  {
    "url": "t3_ommai",
    "name": "IAmA wife of a cuckold AMA"
  },
  {
    "url": "t3_ompzy",
    "name": "I am a long time Redditor who wants to take our fight for personal freedoms to the next level. I am Dr Michael Ham, physicist, neuroscientist and candidate for the United States Senate from the great State of New Mexico"
  },
  {
    "url": "t3_on31w",
    "name": "IAmA 23 y.o. guy from Russia (St. Petersburg), who actually loves Russia and thinks it's awesome.  AMA"
  },
  {
    "url": "t3_on4y7",
    "name": "IAmA former prostitute. AMA"
  },
  {
    "url": "t3_onext",
    "name": "Today I spend my morning in the woods were my brother was murdered, with the detective that found his body.  AMAA."
  },
  {
    "url": "t3_onk3j",
    "name": "IAMA former Chuck E Cheese employee for almost 3 years...AMA!"
  },
  {
    "url": "t3_oodgl",
    "name": "I am a 19 year old girl who was raised in a cult. AMA"
  },
  {
    "url": "t3_oodz2",
    "name": "IAmA Former 911 Operator ... I'll share everything."
  },
  {
    "url": "t3_opgol",
    "name": "IAmA Candidate for Congress running against SOPA co-sponsor John Conyers, AMA "
  },
  {
    "url": "t3_opj1u",
    "name": "IAmA Canadian-Libyan revolutionary and FF (freedom-fighter) who served as both a front-line medic and regular soldier during the Libyan revolution. AMA."
  },
  {
    "url": "t3_opjzy",
    "name": "We are the IAmA moderator team. Ask us anything."
  },
  {
    "url": "t3_opnpa",
    "name": "I am a 25 year old who owns and operates a bar in Thailand. AMA"
  },
  {
    "url": "t3_opq78",
    "name": "IAmA Quadripledric on my way to recovery through embryonic stem cell therapy in India, AMA"
  },
  {
    "url": "t3_oprfh",
    "name": "IAmA young adult female who runs an escort service. AMA."
  },
  {
    "url": "t3_opwc5",
    "name": "IAmA theologically conservative, Bible-believing, Church-going Christian in San Francisco, AMA "
  },
  {
    "url": "t3_oqh0i",
    "name": "IAMA- Elder Scrolls Lore Scholar"
  },
  {
    "url": "t3_oqwzn",
    "name": "IAmA hotel housekeeper, AMA."
  },
  {
    "url": "t3_or8mj",
    "name": "I own a lady bar in Thailand.  I sell P|_|SSY and beer. AMA."
  },
  {
    "url": "t3_orhh6",
    "name": "IAmA sysadmin in the United States Marine Corps. AMA"
  },
  {
    "url": "t3_orjr2",
    "name": "I am a Juggalo, AMA."
  },
  {
    "url": "t3_orl9m",
    "name": "IAmA Mennonite. AMA"
  },
  {
    "url": "t3_orp7j",
    "name": "IAmA Atheist who ended up President of a Catholic Youth Group. AMA."
  },
  {
    "url": "t3_orza5",
    "name": "As requested: IAmA booth babe/promo model"
  },
  {
    "url": "t3_orzys",
    "name": "IAmA professional firefighter. AMA"
  },
  {
    "url": "t3_osa1u",
    "name": "IAmA burner who has done over 1,000 hits of acid. AMA."
  },
  {
    "url": "t3_oshzh",
    "name": "IAmA Scifag-raised female pornstar. AMA."
  },
  {
    "url": "t3_osxh5",
    "name": "As requested, IAMA former atheist who is now a member of an ultra-conservative Mennonite church. AMA."
  },
  {
    "url": "t3_osxvy",
    "name": "IAmA mentally disabled PhD student who relies on the assistance of a psychiatric service dog, AMA"
  },
  {
    "url": "t3_otjld",
    "name": "I was a Walmart Greeter for over a year. Ask me anything. "
  },
  {
    "url": "t3_otl8z",
    "name": "IAmA Diagnosed Psychopath.  I'm Female.  AMA. "
  },
  {
    "url": "t3_otpzq",
    "name": "IAma Heavy metal/rock journalist. Ama"
  },
  {
    "url": "t3_ou185",
    "name": "IAMA Meth addict, AMA. "
  },
  {
    "url": "t3_oudab",
    "name": "I am Comedian Ari Shaffir AMA"
  },
  {
    "url": "t3_ousov",
    "name": "IAmA(n) American who spent 2 years in Moscow as a nanny for an oligarch family. "
  },
  {
    "url": "t3_ove5y",
    "name": "IAmA former movie theater employee of 9 years. AMA."
  },
  {
    "url": "t3_ownw8",
    "name": "I'm Wayne Powell. I'm a Democrat challenging Congressman Eric Cantor (VA-7) in 2012. AMA"
  },
  {
    "url": "t3_ox6jg",
    "name": "I work for one of the biggest tobacco companies in the world... AMA."
  },
  {
    "url": "t3_oxtcb",
    "name": "IAmA record store owner that sells mostly vinyl. AMA"
  },
  {
    "url": "t3_oy4s0",
    "name": "IAmA former shift manager at a very prestigious health/tennis club. We've dealt with coke in the lockers, sex in the hot tubs, lawsuits over discrimination, arresting a murderer and tons of other crazy shenanigans. AMAA."
  },
  {
    "url": "t3_oyfcf",
    "name": "I was homeschooled and kept socially isolated by my grandmother until I was 20, AMA"
  },
  {
    "url": "t3_oyt42",
    "name": "Sex Addict at 20 AMA"
  },
  {
    "url": "t3_oz7of",
    "name": "I am a 7-11 employee that stood up against a robber  who shot at me three times. AMA"
  },
  {
    "url": "t3_ozahk",
    "name": "IamA professional dog trainer, I've trained over 2500 dogs. AmAA."
  },
  {
    "url": "t3_oztuz",
    "name": "IAmA Mortician.  AMA"
  },
  {
    "url": "t3_p039s",
    "name": "I am a recovering alcoholic - 30 years drinking; 950 days sober"
  },
  {
    "url": "t3_p0i97",
    "name": "My mother was a foster parent for troubled, developmentally disabled and sometimes violent kids until I was 12. AMA! "
  },
  {
    "url": "t3_p0qwv",
    "name": "WeAreThe Vlogbrothers, Hank and John Green, and we are in a van for the next 10 hours. AUAA."
  },
  {
    "url": "t3_p1qum",
    "name": "IAmA Tax Professional, willing to answer any of your tax related questions. AMA!"
  },
  {
    "url": "t3_p1ylc",
    "name": "IAmA Worker at a Head shop/Sex shop."
  },
  {
    "url": "t3_p22d7",
    "name": "Do you have a question for an Icelander? AMA"
  },
  {
    "url": "t3_p2cla",
    "name": "IAMA homeless college student just making it by with the stuff on campus AMA"
  },
  {
    "url": "t3_p2i0u",
    "name": "IamA waitress who has seen the good, the bad, the ugly, and the nasty. AMA"
  },
  {
    "url": "t3_p2v2g",
    "name": "IAmA: Communicative Genius A useless yet strangely cool ability"
  },
  {
    "url": "t3_p3elj",
    "name": "IAmA natural lucid dreamer of 10 years AMA"
  },
  {
    "url": "t3_p4msd",
    "name": "I am an owner/operator of a small vending machine business. Been at it about 19 years. If anyone wants to know what it's like from my side AMA."
  },
  {
    "url": "t3_p4s50",
    "name": "IAmA acoustic guitarist named Andy McKee. AMA"
  },
  {
    "url": "t3_p4u8n",
    "name": "IAMA - was arrested (and convicted) of 'conspiracy to commit' violence in high school by ranting to a friend about students who bullied me.  AMA."
  },
  {
    "url": "t3_p529d",
    "name": "IAmA 16 hearing kid of deaf parents AMA."
  },
  {
    "url": "t3_p54qa",
    "name": "IAMA real, live, female librarian at a State University.  AMA."
  },
  {
    "url": "t3_p583s",
    "name": "IamA animator who created the Kitty Cat Dance back in 2004 - AMA"
  },
  {
    "url": "t3_p5pfe",
    "name": "IAMA person who is tripping on LSD......AMA"
  },
  {
    "url": "t3_p6f5e",
    "name": "IAmA Chevrolet Buick and GMC car salesman. AMA."
  },
  {
    "url": "t3_p6gza",
    "name": "I'm Dr. Norman Rosenthal, Psychiatrist, Author and Scientist who first described Winter Depression (SAD). AMAA"
  },
  {
    "url": "t3_p75yj",
    "name": "IAMA Tim Hortons Supervisor AMA"
  },
  {
    "url": "t3_p7nlp",
    "name": "IAMA 19 year old girl living with an ileostomy."
  },
  {
    "url": "t3_p82ps",
    "name": "By Request: IAmA Battlebots champion with the robot the Blender. AMA"
  },
  {
    "url": "t3_p8l3r",
    "name": "I am a linguistics PhD student preparing to teach his first day of Intro to Linguistics. AMA about language science or linguistics"
  },
  {
    "url": "t3_p8qm4",
    "name": "IAmA 29 year old police officer, what do you want to know?"
  },
  {
    "url": "t3_p9glx",
    "name": "I was a manager at Spencer Gifts"
  },
  {
    "url": "t3_p9knf",
    "name": "IAMA author of a new book about Barack and Michelle Obama's behind-the-scenes adjustment to the White House. (Jodi Kantor, NY Times reporter, author of The Obamas.) AMAA"
  },
  {
    "url": "t3_pa402",
    "name": "I am Tyler Molander, the person who put the letters under the doors at Umass Amherst. "
  },
  {
    "url": "t3_paugm",
    "name": "I'm Josh, and this was my house."
  },
  {
    "url": "t3_pavsp",
    "name": "IAmA deputy sheriff in the state of Florida AMA"
  },
  {
    "url": "t3_pb4ob",
    "name": "I remodelled an elementary school that is now my house AMA"
  },
  {
    "url": "t3_pb5b8",
    "name": "IAmA 2011 Appalachian Trail Thru-hiker."
  },
  {
    "url": "t3_pb8th",
    "name": "IAmA 23 year old male who has survived 7 opiate overdoses, been to 12 inpatient rehabs and/or psych wards, spent 3 years in prison for heroin possession, and have bipolar type 2. I am still struggling with heroin addiction. AMA."
  },
  {
    "url": "t3_pcivk",
    "name": "I'm Karen Kwiatkowski -- running for the Virginia's 6th District seat against Bob Goodlatte, entrenched RINO and SOPA cosponsor.  AMA"
  },
  {
    "url": "t3_pd5cc",
    "name": "IAmA 24 year old female who is in hospital awaiting open-heart surgery. AMA"
  },
  {
    "url": "t3_pe0u5",
    "name": "I'm a pathologist and have performed over 500 autopsies. AMA."
  },
  {
    "url": "t3_pepuq",
    "name": "IAmA 3-time Felon, ama"
  },
  {
    "url": "t3_pey0c",
    "name": "I am R.A. Salvatore, first-time Reddit visitor. I've been writing fantasy novels for 25 years now, and have leaped into video game development with both feet. What a ride!"
  },
  {
    "url": "t3_pf64n",
    "name": "IAmA Andy Gavin, co-creator of Crash Bandicoot and Jak &amp; Daxter and author of The Darkening Dream"
  },
  {
    "url": "t3_pfgm8",
    "name": "IAmA CollegeHumor Web Series. We are Jake and Amir. Ask Us Anything"
  },
  {
    "url": "t3_pfivt",
    "name": "IAmA barbarian, from the gauntlet challenge!. AMA"
  },
  {
    "url": "t3_pfs4j",
    "name": "I grew up in a polygamous family, AMA "
  },
  {
    "url": "t3_pftm9",
    "name": "IAMA Mechanic/Small business owner, and you are probably not being ripped off. AMAA"
  },
  {
    "url": "t3_pg684",
    "name": "IAmA College (University) student that lived in my car for over 6 months (2 semesters) so I could afford to go to school. AMA"
  },
  {
    "url": "t3_pgbai",
    "name": "IAmA Division I College Mascot, AMAA"
  },
  {
    "url": "t3_pged2",
    "name": "I am James Fallows, national correspondent for the Atlantic (and long-ago speechwriter for long-ago president Jimmy Carter) AMA"
  },
  {
    "url": "t3_pgfwe",
    "name": "IAmA Professional Figure Competitor AMA"
  },
  {
    "url": "t3_pgirc",
    "name": "I have ailurophobia - fear of cats. AMA."
  },
  {
    "url": "t3_pgqg5",
    "name": "IAmA real-life pawnbroker, AMA"
  },
  {
    "url": "t3_pgv4t",
    "name": "IAmA Egoraptor. That sounds weird. I am Egoraptor. Better. I make cartoons."
  },
  {
    "url": "t3_pi7vi",
    "name": "IAmA Astrologer. Don't get all Starry Eyed on me"
  },
  {
    "url": "t3_pibbf",
    "name": "IAMA Recent Graduate of The Culinary Institute of America in Hyde Park, NY. Ask me anything!"
  },
  {
    "url": "t3_piben",
    "name": "IAMA 21 y/o M who is currently hitchhiking in the Brazilian Amazon during the rainy season. AMA"
  },
  {
    "url": "t3_pimij",
    "name": "AMAA: US Army Infantryman and Combat Veteran of OEF/OIF"
  },
  {
    "url": "t3_pjstb",
    "name": "IAMA girl who slept with a cast member of jersey shore"
  },
  {
    "url": "t3_pjwh8",
    "name": "IAmA software tester for one of the most powerful weapon systems in the US arsenal. AMA. "
  },
  {
    "url": "t3_pkpic",
    "name": "IamA bill collector for college debt and low-income based student loans.  AMA"
  },
  {
    "url": "t3_pkxcn",
    "name": "IAm Mr Skullhead, co-writer of online game Kingdom of Loathing. AMA."
  },
  {
    "url": "t3_pl6jf",
    "name": "IAmA hotel pianist, that guy who plays mood-music in the background as you do hotel-type shit. AMA"
  },
  {
    "url": "t3_pmd4s",
    "name": "IAMA Board Certified Urologist who performs vasectomies - ask me anything"
  },
  {
    "url": "t3_pmirh",
    "name": "IAmA illegal immigrant who grew up in the U.S. and moved back to his home country last month"
  },
  {
    "url": "t3_pnk5h",
    "name": "IAMA Voice over Actor who makes his living doing commercials you've heard, and you've never heard of me."
  },
  {
    "url": "t3_pntf9",
    "name": "IAM Colin Mochrie AMA"
  },
  {
    "url": "t3_ponu6",
    "name": "IAm currently teaching English in Japan. AMA"
  },
  {
    "url": "t3_powss",
    "name": "IAMA person who speaks eight languages. AMA"
  },
  {
    "url": "t3_pp6n5",
    "name": "IAmA Brazilian Jiu-Jitsu and Submission Grappling Referee, AMA"
  },
  {
    "url": "t3_ppa2e",
    "name": "IAmA person who won $70,300 on Wheel of Fortune. Ask me anything!"
  },
  {
    "url": "t3_ppb72",
    "name": "IAM a seven-time New York Times bestselling author (Neil Strauss), AMA."
  },
  {
    "url": "t3_pppnx",
    "name": "IAMA deaf person raised hearing. AMA - conversation continued from hijacked thread in AskReddit"
  },
  {
    "url": "t3_pq3ma",
    "name": "I took 170ug of LSD at 7pm CST AMA!"
  },
  {
    "url": "t3_pq994",
    "name": "IAmA Manager of a Strip Club in GA, Ask me anything. "
  },
  {
    "url": "t3_pqpxa",
    "name": "IAMA director who just made a film about Moon Nazis, called Iron Sky. AMA."
  },
  {
    "url": "t3_pqvey",
    "name": "My name is Andrew Smith, I was born in 1986. AMA"
  },
  {
    "url": "t3_prfs0",
    "name": "IamA farmer on a (what some consider) factory farm, AMAA"
  },
  {
    "url": "t3_prhri",
    "name": "IAmA daughter who indirectly witnessed my father's suicide when I was 9 years old. AMA, please."
  },
  {
    "url": "t3_psact",
    "name": "IAmAn Industrial Robot Programmer. AMA"
  },
  {
    "url": "t3_pscs8",
    "name": "I am a person with anosmia (no ability to smell) AMA "
  },
  {
    "url": "t3_psjxd",
    "name": "IAMA telemarketer who does surveys with U.S. residents. AMA"
  },
  {
    "url": "t3_psklk",
    "name": "I'm a casting associate for American Ninja Warrior. Submissions for season 4 are rolling in. I will answer any questions and give tips for submission. "
  },
  {
    "url": "t3_psop9",
    "name": "I AmA trained employee in a sex shop. Ask me anything. "
  },
  {
    "url": "t3_psybm",
    "name": "I am Spandy Andy... AMA"
  },
  {
    "url": "t3_pta1b",
    "name": "I Am An Honest Mechanic That Used To Work At A Chain Auto Shop.  AMA"
  },
  {
    "url": "t3_ptu5x",
    "name": "I Am a Correctional Officer at a max security Jail. Ask me anything!"
  },
  {
    "url": "t3_ptvy4",
    "name": "IAmA Locksmith. AMA"
  },
  {
    "url": "t3_pu1pw",
    "name": "IAmA person who was stabbed in the neck and experienced clinical death 3x one year ago today. AMA."
  },
  {
    "url": "t3_puhef",
    "name": "I am NFL OG and redditor Evan Mathis. AMA"
  },
  {
    "url": "t3_pwi7n",
    "name": "IAma Xray Certified Welder that has worked on military and DOE components"
  },
  {
    "url": "t3_px1ik",
    "name": "Among other things, I am a child and youth counselor.  I have seen some weird shit.  AMA.  "
  },
  {
    "url": "t3_px7fy",
    "name": "IAmA person who has Ordinal Linguistic Personification (I automatically associate numbers, months, and letters with personalities)AMA"
  },
  {
    "url": "t3_pxf3n",
    "name": "IAmA 21-year-old 4th grade drop-out and a voluntary former semi-recluse who is starting to turn his life around. AMAA"
  },
  {
    "url": "t3_pxtzh",
    "name": "IAmA haunted house worker in one of the nation's top haunted houses AMA"
  },
  {
    "url": "t3_py5nk",
    "name": "IAmA American Ninja Warrior, competed every year. AMA"
  },
  {
    "url": "t3_py69w",
    "name": "IAMA novice soccer coach that led the 'worst team in the world' to their first ever international victory. AMA"
  },
  {
    "url": "t3_py9wy",
    "name": "I got to eat at Disney's super-exclusive Club 33. AMA"
  },
  {
    "url": "t3_pykua",
    "name": "IAmA survivor of rape by a stranger. AMAA. "
  },
  {
    "url": "t3_pyvh9",
    "name": "IAmA Small Sustainable Farmer, AMA"
  },
  {
    "url": "t3_pz0p2",
    "name": "IAMA (former) car salesman who has worked in almost every facet of the business. AMA"
  },
  {
    "url": "t3_pzilk",
    "name": "I stole Paris Hilton's birthday cake and gave it to the homeless. AMA"
  },
  {
    "url": "t3_pzmcs",
    "name": "IAmA ordained Hassidic/Ultra-Orthodox Rabbi, AMA"
  },
  {
    "url": "t3_pzmi7",
    "name": "IAmA SwedishMealTime chef."
  },
  {
    "url": "t3_pzzxr",
    "name": "IAMA 20 year old male Ewing's Sarcoma patient, who was today told he only had a 10% chance of living through the next five years. AMA"
  },
  {
    "url": "t3_q08gn",
    "name": "IAmA retired veteran police officer in Australia. AMA."
  },
  {
    "url": "t3_q0m99",
    "name": "IAmA 22 year old male who recently underwent an adult circumcision. AMA."
  },
  {
    "url": "t3_q170t",
    "name": "IAMA University student who spends his summers working at a lobster processing plant in Canada for 90+ hours a week AMA"
  },
  {
    "url": "t3_q19w0",
    "name": "IAMA a veteran treeplanter of 7 years and planted more than 3 quarter of a million tree in British-Columbia. AMA"
  },
  {
    "url": "t3_q1g69",
    "name": "IAmA Identity Thief, I get rich pretending to be you. Ask me almost anything. "
  },
  {
    "url": "t3_q20i4",
    "name": "This is ERIK GRIFFIN aka MONTEZ from WORKAHOLICS"
  },
  {
    "url": "t3_q2jcw",
    "name": "IAmA filmmaker/comedian/etc David Wain, AMA"
  },
  {
    "url": "t3_q2kx4",
    "name": "IAmA Angel Investor, entrepreneur, accelerator founder and recovering wall streeter AMA"
  },
  {
    "url": "t3_q2s0r",
    "name": "I am Greg Porn, part of the Legendary Roots Crew, AMA!"
  },
  {
    "url": "t3_q2ydp",
    "name": "I am a veteran of the Afghan War diagnosed with PTSD, Adjustment Disorder, and Depression."
  },
  {
    "url": "t3_q45rm",
    "name": "IAmA Guild Wars 2 Game Designer AMA About World vs. World PvP"
  },
  {
    "url": "t3_q4pz0",
    "name": "AMA JIMMY KIMMEL... online now for your enjoyment"
  },
  {
    "url": "t3_q4qpc",
    "name": "IAmA 26 year old Iraq war veteran who came back and was diagnosed with cancer, cheated on by his wife, went through a divorce, was laid off, and started a company that has just been sold. AMA!"
  },
  {
    "url": "t3_q5jct",
    "name": "IAmA 25 year old male who has dated a number of MtF transgender women. AMA."
  },
  {
    "url": "t3_q5nvn",
    "name": "I am 101 years old.  AMAA "
  },
  {
    "url": "t3_q5qco",
    "name": "IAMA white guy who worked the overnight shift weekend shift alone at an inner-city housing project.  I have seen a ton of messed up stuff AMA.."
  },
  {
    "url": "t3_q622f",
    "name": "I am a former TSA Supervisor."
  },
  {
    "url": "t3_q65iz",
    "name": "IAmA 7 foot tall person AMA (Except how tall I am). "
  },
  {
    "url": "t3_q6v3z",
    "name": "IAmA woman who works as a part-time escort (prostitute) in Toronto, Canada [inspired by a recent post on here of a woman from NZ]"
  },
  {
    "url": "t3_q6xkg",
    "name": "I am citricsquid, founder of Minecraftforum.net and Minecraftwiki.net, AMA"
  },
  {
    "url": "t3_q79bi",
    "name": "IAmA parent of a surviving micropreemie that weighed 1 lb. 1 oz. at birth. AMA."
  },
  {
    "url": "t3_q7edt",
    "name": "IAmA opera singer. AMA!"
  },
  {
    "url": "t3_q7g8z",
    "name": "IAmA hydroponic grower in a large hi tec greenhouse.  We have over 2.5 million plants! AMA"
  },
  {
    "url": "t3_q7sha",
    "name": "My Best Friend is a Lesbian Pornstar ask her anything..(AMA)"
  },
  {
    "url": "t3_q7via",
    "name": "I'm the CEO of Rumblefish, I guess we're the newest up and coming bird music licensing company - I'm also a copyright, music licensing, entrepreneur guy. Ask me anything."
  },
  {
    "url": "t3_q7vp7",
    "name": "IAmA United States Marine stationed in Japan AMA"
  },
  {
    "url": "t3_q8cuv",
    "name": "IamA gray shirt (manager) at Five Guys Burgers &amp; Fries who just put in his two weeks notice. AMA!"
  },
  {
    "url": "t3_q8f68",
    "name": "We are Carfly and Chambo, Cameramen from the TV Show COPS. Ask Us Anything!"
  },
  {
    "url": "t3_q8jwh",
    "name": "I am a 25 year old male who lives at the Jersey shore all year round. AMA"
  },
  {
    "url": "t3_q8urp",
    "name": "I'm Griffin Kiritsy, also known as the College Freshman meme. Ask me anything. "
  },
  {
    "url": "t3_q9lme",
    "name": "IAmA asexual male. AMA"
  },
  {
    "url": "t3_q9qzn",
    "name": "IAmA former NASA Space Shuttle engineer, created Apple Writer, retired at 35, sailed solo around the world, became Oregon's Scientist of the Year. AMAA."
  },
  {
    "url": "t3_q9toj",
    "name": "IAmA female History PhD writing a book on the history of American sex. Ask me anything"
  },
  {
    "url": "t3_qaban",
    "name": "I am 'Onion' senior writer &amp; 'Pendulous Breasts Quarterly' (in which The Racist Tree appears) editor-in-chief John Harris, AMAA"
  },
  {
    "url": "t3_qaew2",
    "name": "I am a chef by trade...tell me what is in your cupboard and I will tell you what the fuck to do with it to make dinner/lunch/breakfast. If I can't help you I am sure some redditors have some great opinions."
  },
  {
    "url": "t3_qagzg",
    "name": "With all the attention the GGAmish meme is getting, I thought maybe some would want to hear my story. I grew up Amish."
  },
  {
    "url": "t3_qatqb",
    "name": "I am the founder of MLIA and MLIB, AMA. Also, fuck, because that word helps with the upvotes."
  },
  {
    "url": "t3_qb7ng",
    "name": "I am a high school assistant principal. AMA."
  },
  {
    "url": "t3_qbb5u",
    "name": "IAmA Biomedical Engineer inventing and making cardiovascular implants, AMA"
  },
  {
    "url": "t3_qbfvr",
    "name": "AMA Someone who was struck by lightning."
  },
  {
    "url": "t3_qbi1n",
    "name": "We are the filmmakers behind 5secondfilms.com AMA! or rather Ask Us Anything!"
  },
  {
    "url": "t3_qbrb9",
    "name": "I am Charlie Dominici. Singer for progressive metal band Dominici and former Dream Theater singer AMA"
  },
  {
    "url": "t3_qbz3h",
    "name": "By request, I am Cheap Date a person that won the gameshow Wipeout AMA"
  },
  {
    "url": "t3_qcxeu",
    "name": "IAmA Native Arab studying in the US, AMA."
  },
  {
    "url": "t3_qd5vw",
    "name": "Im Will Saletan, a correspondent for Slate. I write about abortion, contraception, and Mitt Romneys history on these issues."
  },
  {
    "url": "t3_qd7nk",
    "name": "I am a writer, director and other things, too (Boy, Eagle vs Shark, Flight of the Conchords). I'm Taika Waititi. Ask me anything!"
  },
  {
    "url": "t3_qe0xe",
    "name": "My Mother Is Adopting My Ex-Girlfriend. AMA"
  },
  {
    "url": "t3_qenax",
    "name": "I am Gavin McInnes. I invented hipsters and electricity. Ask Me Anything."
  },
  {
    "url": "t3_qepa7",
    "name": "IAMA Men's Rights Activist"
  },
  {
    "url": "t3_qeq1q",
    "name": "Frank Turner AMA"
  },
  {
    "url": "t3_qetol",
    "name": "I Am A Gay US military member. US Air Force with a US Army boyfriend. AMA. (DOMA issues) "
  },
  {
    "url": "t3_qeuiw",
    "name": "I make a living playing video games for the internet. AMA."
  },
  {
    "url": "t3_qf8ze",
    "name": "IAmA Pedophile who handed myself in to get help - now i'm sharing my rehab progress with you. AMA"
  },
  {
    "url": "t3_qfjxz",
    "name": "I am a Navigation Engineer for the Cassini Spacecraft - AMAA."
  },
  {
    "url": "t3_qg5ug",
    "name": "I Am guitarist Justin Sandercoe, creator of tuition site justinguitar.com, Ask Me Anything :)"
  },
  {
    "url": "t3_qgfuv",
    "name": "I am Charley Koontz, I play Fat Neil on NBC's Community AMA"
  },
  {
    "url": "t3_qgp6n",
    "name": "Charlie Cleveland - co-founder of indie game company Unknown Worlds, lead designer of Natural Selection 2"
  },
  {
    "url": "t3_qh5ly",
    "name": "was a pro cheerleader/ice girl for NHL team...AMA"
  },
  {
    "url": "t3_qhb2d",
    "name": "AmA - I'm a scientist in GMO / transgenic plant technology.  "
  },
  {
    "url": "t3_qhkyh",
    "name": "I am Danny Rubin, and I wrote the movie Groundhog Day.  AMA tonight from 9PM EST."
  },
  {
    "url": "t3_qi3gc",
    "name": "IAMA Furry porn artist AMA"
  },
  {
    "url": "t3_qihbd",
    "name": "I am the writer of FAQ About Time Travel, 3 eps of Being Human (UK) and 1 ep of Dirk Gently AMA"
  },
  {
    "url": "t3_qil69",
    "name": "I've been a bouncer off and on for 18 years."
  },
  {
    "url": "t3_qjg4g",
    "name": "IAmA Commercial/Airline/Corporate Pilot AMA."
  },
  {
    "url": "t3_qk0ry",
    "name": "IamA 21 year old Deaf guy. AMA."
  },
  {
    "url": "t3_qk3h8",
    "name": "IAmA 25 year old guy who works at a gas station in a town with 150 people in the south of Iceland. AMA"
  },
  {
    "url": "t3_qk9qn",
    "name": "IAmA 30-Y.O. national public radio host and new media entrepreneur. AMAA."
  },
  {
    "url": "t3_qlqj3",
    "name": "Hey Reddit, IAmA Gamestop Manager and i'm here to answer every single one of your questions on why your Gamestop experiences sucked."
  },
  {
    "url": "t3_qm45y",
    "name": "I am Stephen Stepto Toulouse, former head ban hammer for Xbox LIVE and 18 year Microsoft Employee.  AMA."
  },
  {
    "url": "t3_qneh8",
    "name": "IAmA Martial arts expert AMA"
  },
  {
    "url": "t3_qnham",
    "name": "By request: Abandoned child, Gang life, Death: AMA"
  },
  {
    "url": "t3_qnkak",
    "name": "As requested, my wife and I ran away and joined the circus. AMAA."
  },
  {
    "url": "t3_qnm1v",
    "name": "IAMA Casting Director, AMA!"
  },
  {
    "url": "t3_qnomb",
    "name": "I worked in the Pentagon as a tour guide for 16 months. AMA."
  },
  {
    "url": "t3_qp95k",
    "name": "IAmA black guy living in Sweden. It's not as nice and easy as reddit makes it sound like. AMA."
  },
  {
    "url": "t3_qpj2f",
    "name": "IamA Video game designer starting a new kickstarter project: Hardcore Tactical Shooter"
  },
  {
    "url": "t3_qqxtp",
    "name": "IAmA Religious Jewish Orthodox Female in my early 20s. AmAA"
  },
  {
    "url": "t3_qs173",
    "name": "IAmA Employee of a state lottery with intimate knowledge of the industry. AMA."
  },
  {
    "url": "t3_qs9cd",
    "name": "I work for the worlds most hated profession.   I am a telemarketer Ask me anything."
  },
  {
    "url": "t3_qsthq",
    "name": "IamA Larper, Ask me anything!"
  },
  {
    "url": "t3_qszhf",
    "name": "IAMA 17 year old Olympic trial qualifier (Swimming) AMA"
  },
  {
    "url": "t3_qt0u5",
    "name": "IAmA(n) English teacher in South Korea"
  },
  {
    "url": "t3_qt5xw",
    "name": "By request: I was an SAT essay scorer, AMA"
  },
  {
    "url": "t3_qt8i2",
    "name": "I'm a senior medical student and I just matched into neurosurgery residency. Ask me anything about brain surgery, med school, or the residency match!"
  },
  {
    "url": "t3_qtuyr",
    "name": "iama Scott Sanders, director and co-writer of BLACK DYNAMITE."
  },
  {
    "url": "t3_qu8xd",
    "name": "IAmA Cirque du Soleil singer, I have been on three shows. I started when I was 13. AMA"
  },
  {
    "url": "t3_quh9y",
    "name": "IAmA Self-published author who quit his day job. AMA"
  },
  {
    "url": "t3_quoh9",
    "name": "IAmA(n) L.A.-based composer probably best known for providing music for the original Crash Bandicoot games. AMAA."
  },
  {
    "url": "t3_quqss",
    "name": "IAma Im a guy who got busted growing marijuana in Florida ASK me anything"
  },
  {
    "url": "t3_qvth6",
    "name": "IAmA guy who lived in Hare Krishna ashrams 1988-98 including six years in India at the world HQ. AMA"
  },
  {
    "url": "t3_qwep4",
    "name": "Gillian Jacobs "
  },
  {
    "url": "t3_qwu7g",
    "name": "Gillian Jacobs "
  },
  {
    "url": "t3_qxuyw",
    "name": "Co-Founder of Texts from Last Night. AMA."
  },
  {
    "url": "t3_qy086",
    "name": "We make the game Cards Against Humanity. AUsA."
  },
  {
    "url": "t3_qyeh1",
    "name": "I'm a real-life paranormal investigator a.k.a. ghost hunter. AMA"
  },
  {
    "url": "t3_qz1ck",
    "name": "I am a Paramedic. AMAA "
  },
  {
    "url": "t3_qzdfi",
    "name": "IAmA personal computer security and privacy expert. AMA "
  },
  {
    "url": "t3_qzrmh",
    "name": "Steven Yeun, I'm an actor, currently on TWD, AMAA"
  },
  {
    "url": "t3_qzx5c",
    "name": "I am the guy who wrote the Visible Children blog criticizing the KONY 2012 campaign, read by over 2.5 million people. AMA."
  },
  {
    "url": "t3_r00j7",
    "name": "AMA: SourceFed Hosts "
  },
  {
    "url": "t3_r0tyo",
    "name": "Round 2 - IAm Boogie2988 Aka Francis - Youtube Personality and Frequent Redditor - AMA."
  },
  {
    "url": "t3_r1y9e",
    "name": "IAmA(n) Aerospace Engineer for the Federal Aviation Administration. AMAA"
  },
  {
    "url": "t3_r2ct5",
    "name": "I am Joe Penna, aka MysteryGuitarMan -- AMA"
  },
  {
    "url": "t3_r2jlk",
    "name": "IAmA former Wizarding World of Harry Potter employee. AMA"
  },
  {
    "url": "t3_r3bx8",
    "name": "3 years ago my head was run over by a truck in a motorcycle accident. AMA!"
  },
  {
    "url": "t3_r3r35",
    "name": "IAmA: (BY request) I grew up with a Meth family."
  },
  {
    "url": "t3_r3wkk",
    "name": "I use steroids. AMA "
  },
  {
    "url": "t3_r48z5",
    "name": "I will turn 100 years old in two days (3/21/2012) -- AMAA"
  },
  {
    "url": "t3_r49ak",
    "name": "IAmA Juliette Danielle (Lisa from The Room)"
  },
  {
    "url": "t3_r4xlq",
    "name": "IAMA 30 year old, childfree woman who had a hysterectomy 1 year ago. AMA"
  },
  {
    "url": "t3_r56j4",
    "name": "I am Devin Clark, the creator of Ugly Americans. AMA"
  },
  {
    "url": "t3_r62jp",
    "name": "IAmA NASA Astronaut that recently returned to Earth after a 1/2 year in space. I'm brand new to reddit (like hours ago) AMA"
  },
  {
    "url": "t3_r6yvq",
    "name": "I am Aziz Ansari. Comedian/actor. Thanks for having me again. AMA. "
  },
  {
    "url": "t3_r74dr",
    "name": "IAmA hacker who is currently in Federal Prison, AMA."
  },
  {
    "url": "t3_r77yz",
    "name": "I was born with my left arm like this (link in text), but my right is normal. AMA"
  },
  {
    "url": "t3_r89ul",
    "name": "Iama religious scholar, author, and historian Patrick J. Conway"
  },
  {
    "url": "t3_r8ib4",
    "name": "I am a 23yr male with a rare disorder called Cutis marmorata telangiectatica congenita and extreme body asymmetry. AMA"
  },
  {
    "url": "t3_r8ofp",
    "name": "I'm Matt Higby, 10 year online games industry veteran and Planetside 2 Creative Director - AMAA"
  },
  {
    "url": "t3_r9hkg",
    "name": "IAmA late-night cab driver.  AMA!"
  },
  {
    "url": "t3_r9ivy",
    "name": "I'm a school cop, responsible for 1,500 teens from 13-15 years of age, AMA."
  },
  {
    "url": "t3_racni",
    "name": "The last 3.5 years I have dedicated my mind and body to perform at its absolute best on one day, on a giant oval, for a little less than 4minutes. There are 100 Days until the Olympic Trials and I'm an aspiring Olympian, AMA."
  },
  {
    "url": "t3_rap1e",
    "name": "I AMA Card Dealer on the Las Vegas Strip.  Let's talk Vegas."
  },
  {
    "url": "t3_rbov9",
    "name": "We wrote All My Friends Are Dead. Ask us anything."
  },
  {
    "url": "t3_rc9ly",
    "name": "IAmA boy with LESBIAN PARENTS.  I was the first child to be mutually adopted by two people of the same gender in the state of Oregon.  AMA"
  },
  {
    "url": "t3_rcgh8",
    "name": "I am a faceblind girl dating a super-recognizer.  AUsA"
  },
  {
    "url": "t3_rckrk",
    "name": "I rode a motorbike alone from The Netherlands to Nepal (17.000km/3months). I  travelled through countries like Iran, Turkmenistan and Pakistan. AMA"
  },
  {
    "url": "t3_rd5ca",
    "name": "I recently completed an internship with Dr. Gunther von Hagens of Body Worlds in Germany learning plastination AMA."
  },
  {
    "url": "t3_rdku7",
    "name": "IAmA lesbian teen who was kicked out at sixteen by her parents and excommunicated by the LDS church. AMA "
  },
  {
    "url": "t3_rdtnc",
    "name": "I am a professional indie rapper named MC Lars.  AMA."
  },
  {
    "url": "t3_reh68",
    "name": "IAmA 26-year old software engineer and I'm running for US Congress. AMA"
  },
  {
    "url": "t3_reipu",
    "name": "My friend has been bugging me to to this, so here it goes. IAmA Wilderness Survivalist, AMA"
  },
  {
    "url": "t3_rev6f",
    "name": "IAmA Grammy Nominated Composer and Technologist. AMA"
  },
  {
    "url": "t3_rf0xo",
    "name": "IAmA 18 years old Deaf Male, Raised in a entirely hearing family, AMA"
  },
  {
    "url": "t3_rf2g1",
    "name": "IAmA: Teenager in a 1% family AMA"
  },
  {
    "url": "t3_rf7vh",
    "name": "IAmA UAV operator for the US Army. AMAA"
  },
  {
    "url": "t3_rfhsx",
    "name": "AMA Juggalo of 10 years, hopefully I can disspell at least a little hate"
  },
  {
    "url": "t3_rfxig",
    "name": "IAmA Iranian Software ReverseEngineer living and working in Tehran. AMAA"
  },
  {
    "url": "t3_rfykg",
    "name": "I've been doing the fake job routine for just over a year, AMA"
  },
  {
    "url": "t3_rge55",
    "name": "I am a guy with a rare sexual illness. Its so life-ruining that one sufferer of it decided to be castrated to seek relief and start progressing with his life AMAA"
  },
  {
    "url": "t3_rhgb2",
    "name": "I am a Substitute Teacher for 10+ years AMA"
  },
  {
    "url": "t3_rhm7w",
    "name": "After 6 years of toil, I successfully defended my dissertation for a Ph.D. in Neuroscience 2 days ago. AMA."
  },
  {
    "url": "t3_rhrt4",
    "name": "We are the team that runs online backup service Backblaze. We've got 25,000,000 GB of cloud storage and open sourced our storage server. AUA."
  },
  {
    "url": "t3_ri4m4",
    "name": "I'm Jimmy Winkelman and I created The South Butt AMA"
  },
  {
    "url": "t3_ri61k",
    "name": "IAMA Female National Park Ranger, AMA"
  },
  {
    "url": "t3_riahm",
    "name": "As requested: IAmA boy who traveled with a broke single mother to 28 countries before i turned 16."
  },
  {
    "url": "t3_rj5nr",
    "name": "As Requested: IAmA(n) Astrobiologist, AMA "
  },
  {
    "url": "t3_rk4y6",
    "name": "Hello Redditland. I am Kevin Pereira: AMA-EAFC-H"
  },
  {
    "url": "t3_rk60c",
    "name": "I am Bronson Pinchot from Historic Architecture -- The Bronson Pinchot Project on DIY -- to the most obscure Balki trivia -- to anything else from the Langoliers to what have you. But please no questions about Rampart. (That is where I draw the line)"
  },
  {
    "url": "t3_rkgsx",
    "name": "IamA dubstep/electronic producer named J.Rabbit, I've toured and worked with some of the best in the edm industry, ask me anything"
  },
  {
    "url": "t3_rkyav",
    "name": "I am Richard Morgan, the software engineer running against SOPA / PCIP Sponsor Lamar Smith. AMA"
  },
  {
    "url": "t3_rl72l",
    "name": "I was a well-known (foreign) actress and TV personality in Japan for 2 years.  AMA"
  },
  {
    "url": "t3_rlerh",
    "name": "By request: I have used the Internet and its predecessors since the 1970s. AMA"
  },
  {
    "url": "t3_rlhpe",
    "name": "IAMA female who is sexually attracted to animals, AMA"
  },
  {
    "url": "t3_rlp2h",
    "name": "IAMA Wall Street Quant. AMAA."
  },
  {
    "url": "t3_rlpkw",
    "name": "For the past three years, I have worked in the watermelon fields picking watermelons over the summer to help pay for school. I know nearly everything about watermelons. AMA."
  },
  {
    "url": "t3_rlr5w",
    "name": "IAmA female stalker who almost got expelled from university.AMA. "
  },
  {
    "url": "t3_rmnw8",
    "name": "I work at a cemetery AMA"
  },
  {
    "url": "t3_rmxfj",
    "name": "I am an illustrator who is working on her second book to be self published by the author (I'm not the author) AMA or AMTDA (Ask Me To Draw Anything) I'll be drawing in order of comments with upvotes to keep it fair. "
  },
  {
    "url": "t3_rn4fz",
    "name": "I have only kissed, dated, and been with one person - and I'm marrying him. AMA"
  },
  {
    "url": "t3_ro8hn",
    "name": "IAmA girl who has hitchhiked, usually solo, in various Middle Eastern countries, and lived in some as well. AMAA!"
  },
  {
    "url": "t3_roxy0",
    "name": "IAMA top ranked powerlifter who competes in non-drug tested contests AMA"
  },
  {
    "url": "t3_rpgru",
    "name": "My name is Richard Due and I'm the author of THE MOON COIN, an epic fantasy adventure series set in the Moon Realm (illustrated by Carolyn Arcabascio). Here's a link to the first two chapters. Ask me anything. :)"
  },
  {
    "url": "t3_rphn8",
    "name": "IAmA harbour worker in Rotterdam. "
  },
  {
    "url": "t3_rqhlz",
    "name": "AmAA highly functioning alcoholic: 100K/year, 100 drinks/week"
  },
  {
    "url": "t3_rr7xp",
    "name": "IAmA female who had a relationship with her teacher at the end of high school. AMAA"
  },
  {
    "url": "t3_rr89o",
    "name": "IamA 25 y/o Nigerian woman who refused  arranged marriage and has been dating outside her  race ever since, AMA"
  },
  {
    "url": "t3_rrdyo",
    "name": "IamA Female professional Muay Thai and MMA fighter...AMA"
  },
  {
    "url": "t3_rrhx2",
    "name": "I am Morgan Spurlock. Time to ask me anything. "
  },
  {
    "url": "t3_rrotd",
    "name": "I feel like US Veterans are misunderstood on Reddit.  AMA. (Army-Infantry-2004-2009)"
  },
  {
    "url": "t3_rt4zv",
    "name": "I am a Chick-fil-a worker. AMA"
  },
  {
    "url": "t3_rto0e",
    "name": "IAmA RMS Titanic Historian / Artifact Specialist, the 100 year anniversary of her sinking is coming up, AMA!"
  },
  {
    "url": "t3_rupye",
    "name": "My wife is a Transsexual. AMAA"
  },
  {
    "url": "t3_rv54r",
    "name": "IAmA US Marine who helped start Al Jazeera English. Now I host a show called Fault Lines on AJE. AMA"
  },
  {
    "url": "t3_rv73m",
    "name": "IAmA Video Game Developer working for Electronic Arts. AMA."
  },
  {
    "url": "t3_rvggu",
    "name": "IAmA 19 Year old Transexual who is currently transitioning, AMA."
  },
  {
    "url": "t3_rw6iu",
    "name": "IAMA Directory of Engineering for Canonical. I Manage the Ubuntu Engineering Team. AMA"
  },
  {
    "url": "t3_rwd1d",
    "name": "IAmA 24 y/o and have had dentures since I was 14. AMA"
  },
  {
    "url": "t3_rwqtn",
    "name": "IAMA Deck Officer on a Merchant Vessel that frequents through piracy ridden areas. AMA"
  },
  {
    "url": "t3_rxtgr",
    "name": "IAmA happily married person in an honest, open, bisexual relationship with another married couple. AUsA!"
  },
  {
    "url": "t3_ry294",
    "name": "IAmA Erotic Massage Therapist.  AMA"
  },
  {
    "url": "t3_ryg1h",
    "name": "IAmA 19 y/o male who had surgery on both jaws 6 months ago for a &gt;1.5 cm Mandibular prognathism (Underbite). (Before/after pics!)"
  },
  {
    "url": "t3_ryhzq",
    "name": "IAmA now successful man who spent over 5 years in a max security prison (and once escaped from jail)"
  },
  {
    "url": "t3_rze1m",
    "name": "I worked at a Cofeeshop in Amsterdam as a legal Marihuana Dealer, AMA."
  },
  {
    "url": "t3_rznbz",
    "name": "My house got destroyed by the F-18 yesterday AMA"
  },
  {
    "url": "t3_s0rbb",
    "name": "IAmA 19 year old guy who collapsed my left lung two years ago and had a surgery to ensure it would not happen again. Today I got home from the hospital after my right lung collapsed last monday. AMA."
  },
  {
    "url": "t3_s0u4e",
    "name": "IAmA straight man in a long-term relationship with a post-op (m-&gt;f) transgender woman. AMA."
  },
  {
    "url": "t3_s0zp8",
    "name": "IAmA Body Piercer that does house-calls by appointment. AMA"
  },
  {
    "url": "t3_s1gak",
    "name": "IAmA Prostitute AMA"
  },
  {
    "url": "t3_s1v6i",
    "name": "I was a server for a 5 star restaurant for 3 years. AMA."
  },
  {
    "url": "t3_s23d5",
    "name": "IamAn identical triplet, I have my personal army. AMA"
  },
  {
    "url": "t3_s2n68",
    "name": "Iama In N Out Burger Associate."
  },
  {
    "url": "t3_s2xaw",
    "name": "I'm Austin Wintory, the composer for Journey, Monaco, flOw, and the upcoming Banner Saga - AMA!"
  },
  {
    "url": "t3_s2xin",
    "name": "My platoon was in a suicide bomber attack while we were deployed to Afghanistan.AMA"
  },
  {
    "url": "t3_s2z3w",
    "name": "IAmA: CatsPajamas, professional Starcraft II commentator for the IGN Pro League. AMA!"
  },
  {
    "url": "t3_s32wd",
    "name": "I played a lost boy in the movie, Hook (1991) ask me anything."
  },
  {
    "url": "t3_s39pm",
    "name": "IamA Member of the Bacardi Family!AMA"
  },
  {
    "url": "t3_s3e28",
    "name": "IAmA girl with Androgen Insensitivity Syndrome (AIS.) I have XY chromosomes. AMA."
  },
  {
    "url": "t3_s3h1c",
    "name": "I paid my university fees through prostitution. AMA."
  },
  {
    "url": "t3_s3ifb",
    "name": "IAmA first-year Youth Pastor, AMA!"
  },
  {
    "url": "t3_s3osy",
    "name": "IAmAn 18 year old that had a vasectomy yesterday."
  },
  {
    "url": "t3_s4bth",
    "name": "IAmA 30 year old agoraphobic fella. AMA"
  },
  {
    "url": "t3_s4k0s",
    "name": "IamA: Former student at The Judge Rotenberg Center:"
  },
  {
    "url": "t3_s4nq0",
    "name": "IAmA Firearm retailer/manufacturer AMAA"
  },
  {
    "url": "t3_s5299",
    "name": "I am featured on Al Jazeera today for being detained for 10 months without bail in a for-profit detention center. "
  },
  {
    "url": "t3_s63d9",
    "name": "AMA - My father is a polygamist with 4 wives, and I have 24 siblings"
  },
  {
    "url": "t3_s6c18",
    "name": "My brother disappeared for 20 years. When I finally found him, homeless and nearly dead, my entire life changed. This is how I turned a curse into a blessing. "
  },
  {
    "url": "t3_s6cbz",
    "name": "IAMA 15 yo girl who had both ovaries removed at 13"
  },
  {
    "url": "t3_s72if",
    "name": "I've been in a gang since I was 12; until yesterday when I decided I wanted out; I wait..."
  },
  {
    "url": "t3_s7xou",
    "name": "I taught at the worst (lowest performing) elementary school in New York state in one of the poorest neighborhoods in the country. AMA"
  },
  {
    "url": "t3_s8otz",
    "name": "IAmA guy who ended up living in a pornstar model mansion in LA to start a new behind the scenes reality website."
  },
  {
    "url": "t3_s9h3u",
    "name": "IAmA Professional Eater with 91 food challenge wins... AND ABS!! AMA."
  },
  {
    "url": "t3_s9ksi",
    "name": "IAmA 14 year old boy with scoliosis. I've had 31 surgeries in my life. I currently i have 4 titanium rods in my back correcting the bad kyphosis that i have. AMA!"
  },
  {
    "url": "t3_s9m19",
    "name": "I am a Locksmith, AMA."
  },
  {
    "url": "t3_sa05h",
    "name": "By Request:  IAmAA Former High School Teacher.  AmAA"
  },
  {
    "url": "t3_sa1hv",
    "name": "I Am A lesbian and my wife just gave birth to our beautiful daughter in January. AMA"
  },
  {
    "url": "t3_sa7n0",
    "name": "IAmA professional bra fitter who has fitted sizes 28AA-56KK. AmA"
  },
  {
    "url": "t3_sapz2",
    "name": "Hello i am Miltos Yerolemou. I am an actor, you might have seen me recently playing Syrio Forel, 'dancing teacher' to Arya Stark Game Of Thrones HBO"
  },
  {
    "url": "t3_saywb",
    "name": "Hi I am Danielle Kaplowitz.  I play Vicki on NBC's Community:) Ask me anything..."
  },
  {
    "url": "t3_sb0t8",
    "name": "IAMA 23 year old male who suffers from a common, but socially devastating skin condition called Psoriasis. AMA."
  },
  {
    "url": "t3_sbhw7",
    "name": "Hi! I am Dean Wright, a Film Director, but used to be a Visual Effects Supervisor/Producer (The Lord of the Rings, Narnia, Titanic). AMA"
  },
  {
    "url": "t3_scdus",
    "name": "I make $500+ per month with Google's Adsense program - AMAA"
  },
  {
    "url": "t3_scuq6",
    "name": "IAMA small business owner/mechanic with crazy customers. AMAA"
  },
  {
    "url": "t3_sd4r9",
    "name": "I am Irene Choi, aka Asian Annie (or Annie Kim) from Community"
  },
  {
    "url": "t3_sd7bi",
    "name": "IAmAn 18 year-old girl who can't grow any hair. AMA."
  },
  {
    "url": "t3_sddix",
    "name": "Iama heroin addict who just got out of rehab and officially have 25 days clean.  AMA"
  },
  {
    "url": "t3_se78n",
    "name": "I make over $100k per month running Drop-Ship product websites (proof inside).. AMAA"
  },
  {
    "url": "t3_se8mb",
    "name": "IAMA 620 obese man AMA"
  },
  {
    "url": "t3_sechl",
    "name": "IAm David H. Steinberg, screenwriter of several American Pie movies AMA"
  },
  {
    "url": "t3_semb7",
    "name": "IAmA human named Bill Corbett, writer and performer for RiffTrax.com and previously Mystery Science Theater 3000. "
  },
  {
    "url": "t3_seu2h",
    "name": "I am Brea Grant (actress/writer/internet-lover)"
  },
  {
    "url": "t3_seuot",
    "name": "IAmA person with synesthesia, an overlap between senses. I interpret tastes as colors and shapes, among other things. AMA."
  },
  {
    "url": "t3_sffcy",
    "name": "IAmA pet (sex slave) by choice, who is dating and in love with her Master. AMA."
  },
  {
    "url": "t3_sffv0",
    "name": "IAmA pro poker player with over $3 Million in online winnings, been in Time Magazine and on Good Morning America for Poker"
  },
  {
    "url": "t3_sfseo",
    "name": "IAmA Carnivorous Plant grower in the Philippines, AMA."
  },
  {
    "url": "t3_sfwov",
    "name": "IAmA former Army Field Doctor with 4 tours under my belt AMA."
  },
  {
    "url": "t3_sfy1p",
    "name": "IAmA personal stylist for men. I teach men how to dress, how to present themselves and how to take pride in their appearance. AMA."
  },
  {
    "url": "t3_sgbmy",
    "name": "Creator of @shitmydadsays, writer of the book you may have liked, and co-creator of the TV show that was totally shitty."
  },
  {
    "url": "t3_sgn7i",
    "name": "IAmA 911 Dispatcher and I've got a story to tell you..."
  },
  {
    "url": "t3_sh77t",
    "name": "IAmA 17 year old boy scout who has almost every merit badge, AMA"
  },
  {
    "url": "t3_shuzq",
    "name": "IAmA ISP owner who is running for the U.S. Senate AMA."
  },
  {
    "url": "t3_shzd9",
    "name": "I am Zach Gage, Indie, creator of SpellTower - AMA"
  },
  {
    "url": "t3_sid20",
    "name": "IAMA Utya survivor "
  },
  {
    "url": "t3_sjouv",
    "name": "IAmA former production assistant on Toddlers and Tiaras. AMA. "
  },
  {
    "url": "t3_sjyjm",
    "name": "IAmA Outback Steakhouse employee AMA"
  },
  {
    "url": "t3_sk1ut",
    "name": "IAm Yishan Wong, the Reddit CEO"
  },
  {
    "url": "t3_sk79h",
    "name": "IAmA pornstar / camgirl - Ruby Knox. AMA"
  },
  {
    "url": "t3_sl7se",
    "name": "IAMAn Irish girl who had a secret abortion yesterday at 21 weeks, in London, as it is illegal at home. AMAA"
  },
  {
    "url": "t3_slnne",
    "name": "I teach for a diploma mill, er, I mean online university. AMA."
  },
  {
    "url": "t3_sltiz",
    "name": "IAmA Autistic female young adult. AMAA!"
  },
  {
    "url": "t3_sm2wx",
    "name": "We are Gentoo Developers. AMA/AUA"
  },
  {
    "url": "t3_sm50p",
    "name": "As requested, IAMA Essay Mill Writer"
  },
  {
    "url": "t3_sm7ok",
    "name": "My mother was a crack whore that was h.i.v positive, and my father was a notorious career criminal based in Miami,AMA!"
  },
  {
    "url": "t3_smelt",
    "name": "AMA former alternative nude model"
  },
  {
    "url": "t3_smnwr",
    "name": "Back to answer more questions - I am an arcade game expert, who has earned roughly 5,000,000 tickets at Dave &amp; Buster's.  AMA about beating common arcade games."
  },
  {
    "url": "t3_smphr",
    "name": "My name is Arthur Kohl-Riggs, I am 23 years old, I look like a young Abe Lincoln, and I am running for Governor of Wisconsin against Scott Walker in the Republican primary. AMA"
  },
  {
    "url": "t3_smt6o",
    "name": "I'm 24, and deaf since birth. I am a fluent ASL(American Sign Language) user. I'd love to give insights into the deaf world and culture. AMA"
  },
  {
    "url": "t3_snb5t",
    "name": "IAMA 19 year old girl who recently spent a week in a pysch ward and is undergoing ECT (electroconvulsive/electroshock/shock therapy) AMA"
  },
  {
    "url": "t3_snjim",
    "name": "IAMA Completely colourblind person (I see in Greyscale) AMA"
  },
  {
    "url": "t3_snkii",
    "name": "As requested: IAMA person who visited Neverland Ranch as a child; AMA."
  },
  {
    "url": "t3_snwy9",
    "name": "IAmA Professional Gambler (Sports/Poker/Blackjack/Online Casinos), AMA!"
  },
  {
    "url": "t3_soi1i",
    "name": "I Am Erik Stolhanske, actor/writer/co-founder of Broken Lizard...AMA"
  },
  {
    "url": "t3_soz27",
    "name": "Hey-I'm the actor who got farted at in this weeks Game of Thrones...AMA (if you can be bothered)"
  },
  {
    "url": "t3_spc44",
    "name": "I Make Over 100,000 A Year Selling World of Warcraft (WoW) Characters AMA"
  },
  {
    "url": "t3_spuez",
    "name": "IAmA recovered meth addict currently in the middle of a 2 day relapse. AMAA"
  },
  {
    "url": "t3_spylh",
    "name": "IAmA former visiting clubhouse attendant and right field ball boy for the Major League Baseball team, the Cleveland Indians. AMA."
  },
  {
    "url": "t3_sq1id",
    "name": "I am Phil Plait, astronomer/author/blogger/some time TV host. AMA."
  },
  {
    "url": "t3_sq9ur",
    "name": "I work for the mail order bride site HotRussianBrides.com. AMA"
  },
  {
    "url": "t3_sqayu",
    "name": "I am Dan Bull - pro-filesharing geek rapper. I'm on the front page of The Pirate Bay, aiming to hijack the pop charts. AMA"
  },
  {
    "url": "t3_sqgre",
    "name": "I don't feel emotions. I have Alexithymia. AMA. "
  },
  {
    "url": "t3_sqwhj",
    "name": "IAmA 20-something year old girl who just underwent surgery to correct inverted nipples. AMA"
  },
  {
    "url": "t3_srpxe",
    "name": "IAmA 26 year old girl who has had a full-time job since she was 15. I just save up enough money to take a year off to finish my college degree in a year. AMA"
  },
  {
    "url": "t3_sry7j",
    "name": "I am (we are) the guys that made/published Magicka - indie PC game that has sold over 1.4 Million copies - AMA. "
  },
  {
    "url": "t3_srzim",
    "name": "IAmA Canadian Exchange Student In Norway, sorry."
  },
  {
    "url": "t3_st29y",
    "name": "I'm a girl with an XY cromosome. I have Complete Androgen Insensitivity Syndrome. AMA."
  },
  {
    "url": "t3_stg93",
    "name": "IAmA Guitarist in a Death Metal band.. in Pakistan"
  },
  {
    "url": "t3_stmu0",
    "name": "On my very first sexual encounter, I broke my penis (penile fracture), I now literally have a button located near my shaft that allows me to get an erection. My new girlfriend calls it the iPenis, anyway AMA, I've heard it all from my friends!"
  },
  {
    "url": "t3_strhk",
    "name": "I am Dan Amrich, a 15-year videogame review veteran and author of the first how-to book on game journalism. AMA."
  },
  {
    "url": "t3_su253",
    "name": "I am artist Mike Mitchell, AMA"
  },
  {
    "url": "t3_su6jg",
    "name": "I am Andy Milonakis - AMA"
  },
  {
    "url": "t3_sudnm",
    "name": "I was a consensual 24/7 sex &amp; pain slave for 2 years, AMA"
  },
  {
    "url": "t3_surnl",
    "name": "We are triplets, ask us anything"
  },
  {
    "url": "t3_svbw7",
    "name": "IAmA raiser of service dogs AMA!"
  },
  {
    "url": "t3_swrgg",
    "name": "As requested : IAMA Ex Gangster from the UK. Ask me anything !"
  },
  {
    "url": "t3_sx2od",
    "name": "IamA UPS Driver, AMA"
  },
  {
    "url": "t3_sxrej",
    "name": "IAmA pornstar Trinity St. Clair - ask me anything"
  },
  {
    "url": "t3_sxuaf",
    "name": "As requested: I am a person whose mother was a religious fanatic growing up, and performed exorcisms in our house"
  },
  {
    "url": "t3_syahl",
    "name": "IAmA Palestinian who witnessed the First and Second Palestinian Intifadas (uprisings), AMA."
  },
  {
    "url": "t3_sys70",
    "name": "AMA: Professor John Boyer aka The Plaid Avenger"
  },
  {
    "url": "t3_sytbs",
    "name": "I was sent to a Christian group home against my will when I was 17. AMA"
  },
  {
    "url": "t3_szpoz",
    "name": "IAmA super famous hacker nerd rapper hustler spammer programmer astronaut scientist who knows everyone and everything AMA"
  },
  {
    "url": "t3_szuqu",
    "name": "AMA: I am allergic to sunlight"
  },
  {
    "url": "t3_szzm7",
    "name": "IAmA technology journalist. I'm leaving the internet for a year at 12:01am"
  },
  {
    "url": "t3_t07b6",
    "name": "IAmA Professional video game designer. I've made MMOs, FPSs, RTSs and have been employed as an artist, programmer and designer. AMA"
  },
  {
    "url": "t3_t09os",
    "name": "AMAA Todd Batty, Creative Director SSX"
  },
  {
    "url": "t3_t0qch",
    "name": "IAmA Chief Creative Champion for Gearbox Software, online novelist, and a stroke victim (with MS, natch.) AMA."
  },
  {
    "url": "t3_t1ljl",
    "name": "IAmA Titan Quest designer struggling to launch an independent game studio and develop a new game"
  },
  {
    "url": "t3_t1o69",
    "name": "I work for a major overnight courier company, you want the truth? AMA"
  },
  {
    "url": "t3_t1qvg",
    "name": "IAMA orthodox Jewish Rabbi. Ask me almost anything"
  },
  {
    "url": "t3_t1x5m",
    "name": "IAmA dude whose mom pretended she was English and went wackier from there. AMA"
  },
  {
    "url": "t3_t2at4",
    "name": "My mum is a pornstar with a fairly decent following, AMAA."
  },
  {
    "url": "t3_t2b7x",
    "name": "IAMA Assistant Director in Film &amp; Can Answer Most Onset Film/TV Questions. (From the recent Bestof post.) "
  },
  {
    "url": "t3_t37yj",
    "name": "IAmA Bored Actor and I'll Make Any Face You Demand of Me (again!) AMA"
  },
  {
    "url": "t3_t3fqm",
    "name": "I am Zach the kid from Iowa with two moms Wahls, an advocate, published author, Redditor and, most recently, guest on the Daily Show with Jon Stewart. AMA"
  },
  {
    "url": "t3_t3joq",
    "name": "IamA MrRavenblade, A Real Life SuperHero (RLSH) who has been doing this for over 12 years (6 in seattle)."
  },
  {
    "url": "t3_t3pj0",
    "name": "IAmA candidate for the U.S. House of Representatives in California's new 23rd congressional district."
  },
  {
    "url": "t3_t4752",
    "name": "IAMA student who was present during a school shooting. AMA"
  },
  {
    "url": "t3_t4cbg",
    "name": "Met my girlfriend on Craigslist missed connections. Sitting here with her now 1.5 years later. AMA"
  },
  {
    "url": "t3_t5555",
    "name": "I was an Intern at The Daily Show, AMA"
  },
  {
    "url": "t3_t5nyb",
    "name": "IAm Alex Foster, musician and alto saxophonist of Saturday Night Live for more than 20 years- AMA!"
  },
  {
    "url": "t3_t5opz",
    "name": "IAmA Former Mormon Missionary. AMA"
  },
  {
    "url": "t3_t5pwb",
    "name": "AMA African living in Africa. Ask me anything you need to know about living in the 3rd World. Been here all my life."
  },
  {
    "url": "t3_t6hjr",
    "name": "IAmA Amputee. AMA"
  },
  {
    "url": "t3_t6ue1",
    "name": "IAMA shepherd in the middle east"
  },
  {
    "url": "t3_t6vmc",
    "name": "I am a recent Mormon Bishop - ask anything."
  },
  {
    "url": "t3_t71tq",
    "name": "Penis insured for a million dollars? Check. Shot over 800 porn scenes? Check. IAMA Male Pornstar - Keiran Lee!"
  },
  {
    "url": "t3_t71ug",
    "name": "IAmA former Disney Cast Member AmAA"
  },
  {
    "url": "t3_t7yaa",
    "name": "IAmA Walmart truck driver and this is my quarterly fuel report..."
  },
  {
    "url": "t3_t811j",
    "name": "IamA cook who's been doing it for almost 15 years and has seen some craaaaaazy shit."
  },
  {
    "url": "t3_t9g4q",
    "name": "I am Gary Fung/IH, founder programmer of isoHunt.com, legal target practice of Hollywood and the Canadian recording industry - AMAA"
  },
  {
    "url": "t3_t9q8d",
    "name": "I spent two nights alone in the Amazon rainforest with a machete, bow and arrows, and what I could fit on a belt (no food). AMA."
  },
  {
    "url": "t3_t9rde",
    "name": "IAmA Son who talked his father and pregnant step-mother into doing something that resulted in their being killed - AMA"
  },
  {
    "url": "t3_tb0t5",
    "name": "I'm 30 years old and weigh 81lbs."
  },
  {
    "url": "t3_tb4w3",
    "name": "IAMA 18 year old girl whose internal organs are on the opposite side of my body, AMA."
  },
  {
    "url": "t3_tb89g",
    "name": "I am Shane Smith, co-founder of VICE (magazine) and two-time traveler to North Korea. AMA."
  },
  {
    "url": "t3_tb9iw",
    "name": "I am a Global Community Manager for DICE and Battlefield, AMA."
  },
  {
    "url": "t3_tc6n7",
    "name": "IAMA girl who lost her virginity to her high school teacher and continued to sleep with him 9 years after the fact...it has ruined my life...AMAA"
  },
  {
    "url": "t3_tccm7",
    "name": "I live on $600 per month.  Want to know what it's like to live permanently in grinding poverty?  AMA."
  },
  {
    "url": "t3_tcrts",
    "name": "IAmA 22-year-old male with Cerebral Palsy. AmA."
  },
  {
    "url": "t3_tczq6",
    "name": "I am comedian and actor Jim Breuer.  Ask Me Anything."
  },
  {
    "url": "t3_td0fw",
    "name": "I am a Music Producer, Remixer, DJ more commonly known as RAC.... AMA"
  },
  {
    "url": "t3_td642",
    "name": "I am the founder of Pebble (the e-paper watch from kickstarter). Ask me anything!"
  },
  {
    "url": "t3_td84u",
    "name": "IAM the Strain Librarian at Marijuana.net.  AMA about marijuana strains, lab testing, and what THC and CBD actually mean"
  },
  {
    "url": "t3_td90c",
    "name": "I am Steve Albini, ask me anything"
  },
  {
    "url": "t3_tdaxe",
    "name": "I live in Brazil and was kidnapped 2 days ago; I survived. Ask me anything"
  },
  {
    "url": "t3_tdvax",
    "name": "I am a full-time YouTuber, founder of TGS, and StarCraft fanatic. AMA"
  },
  {
    "url": "t3_tecut",
    "name": "I am a former full-time YouTuber, Ask Me Almost Anything"
  },
  {
    "url": "t3_teoub",
    "name": "I am Tim Vanover, a father who adopted a special needs child who had HIV/AIDS and recently passed away, AMA"
  },
  {
    "url": "t3_tf0hx",
    "name": "IAmA son of two mega-church pastors. AMA"
  },
  {
    "url": "t3_tf7rh",
    "name": "I am the Alabama Face Guy (Jack Blankenship); ask me anything."
  },
  {
    "url": "t3_tfwfa",
    "name": "As Requested: IAmA Google employee. AMAA."
  },
  {
    "url": "t3_tfymn",
    "name": "IAmA sufferer of prosopagnosia, the inability to recognize faces.  AMA"
  },
  {
    "url": "t3_tg7ne",
    "name": "IAMA juggler, name anything and i will balance it on my nose, chin or forehead"
  },
  {
    "url": "t3_tgmhs",
    "name": "IAMA new and used car salesman. AMA"
  },
  {
    "url": "t3_th9i8",
    "name": "I am Eduardo Sanchez, director of The Blair Witch Project and Lovely Molly!"
  },
  {
    "url": "t3_thk7r",
    "name": "I am Rapper &amp; Producer KWAM . ask me anything"
  },
  {
    "url": "t3_ti60v",
    "name": "IAmA 24 yo girl who works in the offices of Orgasm.com AMAA"
  },
  {
    "url": "t3_tjgfa",
    "name": "IAMA 33 year old straight male who worked for over 2 years as a mostly gay escort in Sydney, early 00's.  "
  },
  {
    "url": "t3_tjkzw",
    "name": "IAmA 23 year old student at the University of Oslo who's been sleeping in the forest for over a year. AMA"
  },
  {
    "url": "t3_tjtmp",
    "name": "I am Michael Dirda, Pulitzer-Prize winning book critic who has been called the best-read man in America."
  },
  {
    "url": "t3_tk0s8",
    "name": "IAm Stoya, adult performer and generally naked lady. AMA. "
  },
  {
    "url": "t3_tl7pn",
    "name": "IAmA 24yo electrical engineer with magnets implanted in my fingertips. AMA."
  },
  {
    "url": "t3_tla3z",
    "name": "I am Jane Jensen, creator of Gabriel Knight, Gray Matter and Pinkerton Road game studio. Ask me anything."
  },
  {
    "url": "t3_tlbqi",
    "name": "IAMA Professional Poker Player. I make $50 - $100 an hour. AMAA."
  },
  {
    "url": "t3_tlgod",
    "name": "IAMA Janitor For A School, AMAA"
  },
  {
    "url": "t3_tm4by",
    "name": "IAmA new PhD graduate who looked at identity and Heavy Metal music AMA"
  },
  {
    "url": "t3_tmcbe",
    "name": "IAMA Stuntwoman for over 35 years, currently being denied health coverage by Hollywood.  AMA"
  },
  {
    "url": "t3_tmlnp",
    "name": "Louis C.K. reddit"
  },
  {
    "url": "t3_tmojh",
    "name": "Hi! I'm Steve Greenberg, host of Food Network's Invention Hunters. I'm looking for the next great gadget! Can't wait to meet you all. AMA! "
  },
  {
    "url": "t3_tnz8s",
    "name": "IAmA- Casino Manager, I've seen everything, AMA"
  },
  {
    "url": "t3_to00c",
    "name": "I drove with friends from England to Mongolia - 10,529 miles - AMA"
  },
  {
    "url": "t3_toins",
    "name": "I am an African American who lives in an all white family, I live in a county famous for racism (Forsyth County, Ga), and I went to a high school where most everyone was white. AMA"
  },
  {
    "url": "t3_toq16",
    "name": "I am Stuart Ashen AKA Ashens, YouTube comedian. AMA"
  },
  {
    "url": "t3_tovav",
    "name": "I am Oren Peli, creator of PARANORMAL ACTIVITY, producer of INSIDIOUS, THE RIVER, and upcoming CHERNOBYL DIARIES."
  },
  {
    "url": "t3_toyo0",
    "name": "IAmA former Hooters girl...AMA, no really "
  },
  {
    "url": "t3_tp5d9",
    "name": "IAmA - My wife and I are swingers. We share each other with other couples."
  },
  {
    "url": "t3_tpv23",
    "name": "I am Robert Gregory Browne, a multi-published Big 6 author who has decided to go Indie with his latest novel. AMA."
  },
  {
    "url": "t3_tpzlb",
    "name": "I write about motorcycles for a living and am guest editing Jalopnik for two weeks, ask me anything."
  },
  {
    "url": "t3_tpzpm",
    "name": "So apparently I'm one of the 200 Best Illustrators Worldwide (whatever that means) AMA"
  },
  {
    "url": "t3_tq75f",
    "name": "IAmA Ex-career criminal and recovering drug addict. AMAA"
  },
  {
    "url": "t3_tqndp",
    "name": "IAma a veteran treeplanter who will plant 100,000 trees in British Columbia under your name if you AMA"
  },
  {
    "url": "t3_tqnij",
    "name": "I am a male prostitute; AMA"
  },
  {
    "url": "t3_tr0w8",
    "name": "I recently quit my 3-year job working at the world's worst Papa John's. I've seen it all. AMA"
  },
  {
    "url": "t3_trd1u",
    "name": "IAMA male who had been raped by other males in prison.  AMA"
  },
  {
    "url": "t3_tre31",
    "name": "IAmA 28/f who had 60% of her lung removed today and can't fall asleep in the ICU"
  },
  {
    "url": "t3_trugs",
    "name": "I am a 18 year old Native American, born and raised on a native reserve in Canada. AMA"
  },
  {
    "url": "t3_ts244",
    "name": "I am a 550 Pound 23 year old who's been overweight his entire life (11lb 11oz at birth). AMA"
  },
  {
    "url": "t3_ts5um",
    "name": "IAmA Armored Truck Employee, AMAA"
  },
  {
    "url": "t3_tsxct",
    "name": "IAMA Agoraphobic and I have not left the house since I was 11yrs old. I am now 21. AMA"
  },
  {
    "url": "t3_tsxmi",
    "name": "IAMA male who had been raped by other male in prison.  AMAA"
  },
  {
    "url": "t3_tt9sy",
    "name": "I am Rob Burnett, Executive Producer of the Late Show with David Letterman, and a writer/director/producer of television and movies."
  },
  {
    "url": "t3_ttxb1",
    "name": "I am Freddie Wong. I make YouTube videos. AMA!"
  },
  {
    "url": "t3_tubbo",
    "name": "My wife and I quit our jobs and are currently walking across the US 2,650 miles AMA"
  },
  {
    "url": "t3_tueur",
    "name": "I had breast reduction less than 24 hours ago. AMA."
  },
  {
    "url": "t3_tuvwc",
    "name": "I'm Alicia Witt - Actress (Dune, Cybill, Friday Night Lights) and musician - AMA! "
  },
  {
    "url": "t3_tvqdr",
    "name": "IAMA male who had been raped by other male in prison.  AMAA"
  },
  {
    "url": "t3_tw1l7",
    "name": "I am a substance abuse counselor at an inpatient treatment facility, AMAA."
  },
  {
    "url": "t3_twaek",
    "name": "IAmA Muslim 18 year old living in Egypt AMA!"
  },
  {
    "url": "t3_twhmm",
    "name": "IAmA 23 yr old male who has never masturbated, had an orgasm, or had sex. AMA."
  },
  {
    "url": "t3_twsax",
    "name": "IAmA Host player in Kabukicho, Tokyo, Japan. It is equivalent to an in-house escort without sex, but with alcohol and entertainment. AMAA."
  },
  {
    "url": "t3_tyh03",
    "name": "By Request: I design frozen dinners, AMA"
  },
  {
    "url": "t3_tz88x",
    "name": "I am a reasonably successful international female model, AMAA"
  },
  {
    "url": "t3_tzhg3",
    "name": "IAm Phil LaMarr voice actor, face actor (Mad TV, Pulp Fiction, Futurama)"
  },
  {
    "url": "t3_u0d5f",
    "name": "IAmA Muslim who converted from Christianity 2 months ago. AMA"
  },
  {
    "url": "t3_u0lfj",
    "name": "IAmA Papa John's employee who drew the picture nobody seems to believe that is/was on the Front Page AmAA"
  },
  {
    "url": "t3_u0pt0",
    "name": "*UPDATE* as promised: 28/f who had 60% of her lung removed today and can't fall asleep in the ICU"
  },
  {
    "url": "t3_u0woq",
    "name": "IAMA Magician, AMA"
  },
  {
    "url": "t3_u1bi2",
    "name": "IAMA Lego retail store employee, AMA"
  },
  {
    "url": "t3_u1eu6",
    "name": "I am Lee Roy Myers, Director of dozens of porn parodies. AMA"
  },
  {
    "url": "t3_u1zch",
    "name": "IAMA 21 year old Iraqi/Yemeni who was Yemen's  best rapper (for 4 years in a row), First model,  activist and co-founder of Yemen's first English  youth magazine. Now, i'm nationality-less, Jobless  and officially a refuge. AMA"
  },
  {
    "url": "t3_u27pk",
    "name": "IAmA American teaching at a University in China. AMA"
  },
  {
    "url": "t3_u2tb1",
    "name": "IAmA Retired US Submarine Veteran.  AMAA"
  },
  {
    "url": "t3_u2w63",
    "name": "I have met nearly every NBA superstar and coach as a ball boy. AMA"
  },
  {
    "url": "t3_u2wbi",
    "name": "IAmA Guy who has a condition called Mirror-Touch synesthesia, which means that what I see, I feel. AMA"
  },
  {
    "url": "t3_u2zj7",
    "name": "I Am A former 3rd shift Porn Store clerk of 2 1/2 years, ask me anything."
  },
  {
    "url": "t3_u3g89",
    "name": "I am the One True God. You may know Me from Facebook. AMA!"
  },
  {
    "url": "t3_u3mxl",
    "name": "I am JonTron, creator of the YouTube show of the same name! AMA :D"
  },
  {
    "url": "t3_u43cl",
    "name": "I'm an 18 year old girl who's had severe acne since 4th grade, AMA"
  },
  {
    "url": "t3_u4t3w",
    "name": "IamA Emergency Medicine Resident Physician AMA"
  },
  {
    "url": "t3_u4v49",
    "name": "IAMA a nudist. AMA."
  },
  {
    "url": "t3_u5y2d",
    "name": "IAMA former Blizzard customer service representative for WoW aka Gamemaster. AMAA"
  },
  {
    "url": "t3_u6306",
    "name": "IAMA WWII Marine Corps Combat Rifleman and Author. I am Sterling Mace. AMA about Okinawa."
  },
  {
    "url": "t3_u6flf",
    "name": "I AMA Vietnam Veteran  US Army from 1965-1969, Vietnam tour: November 1967- November 1968."
  },
  {
    "url": "t3_u6h4q",
    "name": "IAMA sex toy reviewer and online sex store employee.  Everyone I work with knows way too much about my dick and sex life.  AMA."
  },
  {
    "url": "t3_u6o8i",
    "name": "IAmA former atheist who has converted to the Mormon Church. AMAA"
  },
  {
    "url": "t3_u6tor",
    "name": "IAmA 24 year old male with albinism living in Florida"
  },
  {
    "url": "t3_u705x",
    "name": "ER Doc - your emergency is my emergency"
  },
  {
    "url": "t3_u775e",
    "name": "IAmA guy who lost his father to a stroke, am walking across America to honor him."
  },
  {
    "url": "t3_u7zpn",
    "name": "IAmA heyheymse from AskHistorians, I have a degree in Ancient History with a specialty in Roman Sexuality. AMA!"
  },
  {
    "url": "t3_u8k4b",
    "name": "IAMA Identical mirror twin"
  },
  {
    "url": "t3_u8sla",
    "name": "IAmA 25 year old who is living with incurable brain cancer"
  },
  {
    "url": "t3_u8t04",
    "name": "IAmA Hypnotherapist. I use hypnosis to help clients quit smoking, lose weight, and occasionally figure out the meaning of life. AMA."
  },
  {
    "url": "t3_u98b0",
    "name": "IAmA former Abrams tanker and Iraq War veteran.  AMA."
  },
  {
    "url": "t3_u9dvy",
    "name": "IAmA Strength and Conditioning GA, going for my second Masters in Exercise Physiology and then PhD in Exercise Physiology, wanting to help people with fitness goals for free - AMA"
  },
  {
    "url": "t3_u9h77",
    "name": "I am Mike Smith, the first open atheist to run for the Georgia legislature. AMAA"
  },
  {
    "url": "t3_u9o6a",
    "name": "IamA Ex-Mormon for 18 years "
  },
  {
    "url": "t3_ua62k",
    "name": "IAmA sufferer of Trimethylaminuria, a rare disease which makes my sweat, urine and breath smell foul."
  },
  {
    "url": "t3_uan3a",
    "name": "I am Sam Hulick, composer on the Mass Effect trilogy, Baldur's Gate: Enhanced Edition, Red Orchestra 2, etc. AMAA"
  },
  {
    "url": "t3_ubexw",
    "name": "Debated doing this for months, but here goes..I learned I was a pedophile in my teen years, I've been through the counselling, my parents know and I've lost friends- now I'm better and living a nice life, what's more, I have proof. AMA"
  },
  {
    "url": "t3_uc94p",
    "name": "I'm Matthew Lillard. Stu from Scream, Shaggy in Scooby Doo, and most importantly Steveo in SLC PUNK!. I now direct, who woulda guessed? AMA"
  },
  {
    "url": "t3_ud4us",
    "name": "I joined the Bone Marrow registry after reading a reddit post a few months ago, and yesterday I donated to (hopefully) save an 18 year old boy's life. AMA."
  },
  {
    "url": "t3_udmmj",
    "name": "I am a man with what is called a 'dug-in penis' which basically means that my penis goes in in stead of out. AMA"
  },
  {
    "url": "t3_ue1ca",
    "name": "I am Zack Jick Johnson, creator of The Kingdom of Loathing.  AMA."
  },
  {
    "url": "t3_ue7wa",
    "name": "I AMA a person who has spent time in 3 California prisons, ask me anything."
  },
  {
    "url": "t3_uestv",
    "name": "I'm an Erotica Author AMA"
  },
  {
    "url": "t3_uflwl",
    "name": "IAmA Reporter on The Financial Times' Alphaville blog"
  },
  {
    "url": "t3_ufvqb",
    "name": "I work for Microsoft's future vision and planning team. Most of our projects are expected to be released after 2020. AMAA."
  },
  {
    "url": "t3_ugpnf",
    "name": "I am Archive Director for Ron Galellathe Godfather of US Paparazzi CultureAMA"
  },
  {
    "url": "t3_uh1f6",
    "name": "I build Circuit Boards for a living, AMA"
  },
  {
    "url": "t3_uhoms",
    "name": "I am 1 of 5 people to get the max score on NES Tetris, AMA"
  },
  {
    "url": "t3_ujhya",
    "name": "AMA, I was sent to a fundamentalist christian work camp when I was 16 where I consider myself to have been systematically brainwashed."
  },
  {
    "url": "t3_ujoxy",
    "name": "IAmA Five Guys employee.  AMA."
  },
  {
    "url": "t3_ukbz6",
    "name": "I am the anonymous physicist featured in the black hole article yesterday.  AMA"
  },
  {
    "url": "t3_ulpne",
    "name": "IAmA Taco Bell manager, AMA"
  },
  {
    "url": "t3_uma1u",
    "name": "IAmA (very) independent filmmaker who recently completed a stoner comedy that I co-wrote/produced/edited.  It's been a 3 year process but it's finally available on demand.  AMA!"
  },
  {
    "url": "t3_umavd",
    "name": "IAmA Ubuntu Community Manager at Canonical, author/speaker on Community Management and best practice, and play in metal band Severed Fifth"
  },
  {
    "url": "t3_umbye",
    "name": "I am a pit bull owner/advocate/volunteer in Maryland, dealing with the new law in place rendering my dog inherently dangerous Ask Me Almost Anything! "
  },
  {
    "url": "t3_umee5",
    "name": "IAmA Cobbler, I craft shoes. AmA"
  },
  {
    "url": "t3_umelr",
    "name": "I'm Camille Crimson, model and webmaster of The Art of Blowjob.  AMA."
  },
  {
    "url": "t3_uo0c8",
    "name": "I am Todd Stiefel, a full-time atheist activist &amp; philanthropist. My goal for this year is to rally freethinkers to raise $1,000,000 for LLS to fight cancer. My foundation sponsored, and I spoke at, the Reason Rally and Rock Beyond Belief. AMA!"
  },
  {
    "url": "t3_upd5b",
    "name": "25 year old Quadriplegic (Gun shot victim) &amp; a daily PC gamer AMA"
  },
  {
    "url": "t3_upxvi",
    "name": "IAm (We are) Guys From Andromeda (Scott Murphy and Mark Crowe), creators of the Space Quest Series, and Kickstarting up a new game called SpaceVenture."
  },
  {
    "url": "t3_uq0rg",
    "name": "IAmA (we are) Ed Skudder &amp; Zack Keller, the creators of the animated YouTube series... Dick Figures! Ask us anything!"
  },
  {
    "url": "t3_uqete",
    "name": "IAmA keyboardist for Tokyo Police Club. I'm Graham Wright. AMA"
  },
  {
    "url": "t3_uqolz",
    "name": "IAmA 3rd Degree Freemason, Past Master of a Lodge, a 32nd Degree Scottish Rite Mason, and a Knight Templar. Ask me anything!"
  },
  {
    "url": "t3_uquu1",
    "name": "IAm (We are) Chris Jones &amp; Aaron Conners - the Tex Murphy Creators!!!"
  },
  {
    "url": "t3_ur3yv",
    "name": "IAmA 23 year old boy with Stage IV Kidney Cancer. I won't see 24, AMAA"
  },
  {
    "url": "t3_urj42",
    "name": "I Am Michael Ian Black, Sexy Bitch"
  },
  {
    "url": "t3_urr8s",
    "name": "IAMA Palestinian activist working peacefully to create a free Palestinian State by the removal of Israeli occupation. AMA"
  },
  {
    "url": "t3_urxjv",
    "name": "IAMA former Rosetta Stone employee who speaks 8 languages, AMAA."
  },
  {
    "url": "t3_us7y2",
    "name": "I AMA Joel Stein, Time magazine columnist and author of Man Made: A Stupid Quest For Masculinity"
  },
  {
    "url": "t3_uta10",
    "name": "IAmA Founder of Mars One, settling humans on Mars in 2023. AMA"
  },
  {
    "url": "t3_utal1",
    "name": "I perform urinary analysis for government drug tests. Ask me Anything"
  },
  {
    "url": "t3_uuiw2",
    "name": "Amrita Acharia- portrayed Irri on Game of Thrones..as me ALMOST anything:)"
  },
  {
    "url": "t3_uv0cg",
    "name": "IAmA competitive laser tag player"
  },
  {
    "url": "t3_uvlaa",
    "name": "IAmA fairly successful songwriter/record producer (Marcy Playground, Mandy Moore, Ingrid Michaelson) who is appalled at the level of piracy and acceptance of it on sites like this. AMA"
  },
  {
    "url": "t3_uvvmp",
    "name": "IAmA porn starlet AMA :)"
  },
  {
    "url": "t3_uvwmr",
    "name": "I am a Greek owner of a software company in the midst of an incredible and underestimated financial crisis.AmA"
  },
  {
    "url": "t3_uwcpo",
    "name": "IAmA former Olive Garden employee. Ask me anything about this fake Italian restaurant"
  },
  {
    "url": "t3_uwqje",
    "name": "I am Ryan Pequin. I make Three Word Phrase. It is a comic. Ask me anything."
  },
  {
    "url": "t3_ux26f",
    "name": "I am NiT GriT, Electronic/Dubstep producer. AMA #2"
  },
  {
    "url": "t3_ux9zk",
    "name": "IAmA boy who won Blink 182 Tickets for life by using lyrics to try to pick up girls... "
  },
  {
    "url": "t3_uxpqf",
    "name": "I'm a 23 y/o that has not left home in 5 years, having withdrawn from society. AMA"
  },
  {
    "url": "t3_uymy5",
    "name": "IAmA teenager diagnosed with Dermagraphism also known as the 'skin writing disorder' AMA. "
  },
  {
    "url": "t3_uypi0",
    "name": "IAm Thor4269, many of you know me due to the fact I am seemingly unkillable AMA"
  },
  {
    "url": "t3_uzzg4",
    "name": "I am a car salesman and part owner of 4 dealerships.  Ask me questions about how the business really works."
  },
  {
    "url": "t3_v0272",
    "name": "All Redditors ask a Full blooded Native American (Navajo &amp; Choctaw, Mississippi Band) anything"
  },
  {
    "url": "t3_v0nx7",
    "name": "IAmA, Italian farmer whose home was occupied by Nazis during WWII, AMA."
  },
  {
    "url": "t3_v0x6e",
    "name": "I'm 16. My dad is 78. AMA"
  },
  {
    "url": "t3_v0xci",
    "name": "IAMA competitive Yugioh, Magic: the Gathering, and Pokemon (the video games) player, AMA."
  },
  {
    "url": "t3_v0xx7",
    "name": "IAmA teenager who has been carefully recording his thoughts for the last couple years"
  },
  {
    "url": "t3_v17kn",
    "name": "IAmA former meth lab operator, AMAA"
  },
  {
    "url": "t3_v379m",
    "name": "IAmA French Guy who wants to explain our social habits AMA"
  },
  {
    "url": "t3_v3d2j",
    "name": "IAMA Roma gypsy AMA"
  },
  {
    "url": "t3_v3fxn",
    "name": "I was a machine gunner during a major Iraq war battle that was blacked out by the media, now we're struggling to get the story to the public AMA"
  },
  {
    "url": "t3_v3lyp",
    "name": "IAmA a 20 year old illegal alien, ask me anything"
  },
  {
    "url": "t3_v3uy4",
    "name": "IAmA rapper called MC Frontalot. I coined the term 'nerdcore' and remain that subgenre's final boss. AMA."
  },
  {
    "url": "t3_v3w6k",
    "name": "IamA sufferer of Cluster headaches, aka Suicide headaches.  They are said to be the worst pain a human can experience.  AMA."
  },
  {
    "url": "t3_v4uab",
    "name": "I have worked in a illegal gambling ring and was eventually raided by the Houston Vice Division. AMA"
  },
  {
    "url": "t3_v5i1b",
    "name": "I'm a 29 year old male to female transsexual. I started hormones at 14. Today is the day when I have been hormonally female longer than I have been male. AMA"
  },
  {
    "url": "t3_v5i8t",
    "name": "IAmA 27 year old Ph.D. student in Psychology with over a 1000 hours of therapy under my belt"
  },
  {
    "url": "t3_v73pd",
    "name": "IAmA 39 year old who was a medical volunteer at Ground Zero of the WTC after the terrorist attacks on 9/11.  Now I have cancer. AMA"
  },
  {
    "url": "t3_v7i1z",
    "name": "IAmA person who's profited by letting my storage unit go to auction. AMA"
  },
  {
    "url": "t3_v82rz",
    "name": "IAMA Delta/KLM/Air France reservation agent that knows all the tricks to booking low fares and award tickets AMA"
  },
  {
    "url": "t3_v8435",
    "name": "IAmA high school math teacher who hates many aspects of my job. AMA!"
  },
  {
    "url": "t3_v8y1c",
    "name": "IAMA member of the Westboro Baptist Church... AMA!"
  },
  {
    "url": "t3_v97ux",
    "name": "AMAA I was a US Army Interrogator "
  },
  {
    "url": "t3_v99eg",
    "name": "IAmAn Ex-Member of the Westboro Baptist Church"
  },
  {
    "url": "t3_va55e",
    "name": "IAMA Roman Catholic priest, and have been one for almost 3 years. AMAA."
  },
  {
    "url": "t3_vae7q",
    "name": "IAmA person with over $500,000 in student loans. AMA"
  },
  {
    "url": "t3_vahg1",
    "name": "A lot of you keep telling me to give this another crack here, I am the writer of an independent TV Pilot AMA"
  },
  {
    "url": "t3_vb53k",
    "name": "My 17 year old ex-girlfriend is now dating my 39 year old dad, and I live with them. AMA "
  },
  {
    "url": "t3_vb74l",
    "name": "I AmA Ex-Competitive Dance Dance Revolution player that taught Jim Carrey how to play DDR for the film YES MAN.  AMA"
  },
  {
    "url": "t3_vbwz2",
    "name": "IAmA person who dies and comes back to life multiple times a year (usually 5-10) due to an unusually severe version of a generally mild neurological/cardiovascular condition."
  },
  {
    "url": "t3_vc3jz",
    "name": "I Am the Administrator of GameFAQs.com, AMA!"
  },
  {
    "url": "t3_vcbdj",
    "name": "We are the Game Masters for Artix Entertainment ( www.Artix.com ), makers of AdventureQuest, AdventureQuest Worlds, DragonFable and more, Ask Us Anything!"
  },
  {
    "url": "t3_vcjkt",
    "name": "IAmA Grade 6 teacher who will be teaching about puberty for the first time. Reddit, Please ASK ME ANYTHING so I can prepare."
  },
  {
    "url": "t3_vcutr",
    "name": "I am the Baltimore Ravens fan that won $41,152 in prizes on The Price is Right, AMA!!!"
  },
  {
    "url": "t3_vdhs8",
    "name": "Hi IAmA! We are core members of the Tor Project. Ask us anything!"
  },
  {
    "url": "t3_vdpt8",
    "name": "I AmA cop working in Germany's capital of crime. I am against prohibition of any drug. AmaA"
  },
  {
    "url": "t3_vdz4e",
    "name": "IAmA Electronic Music Producer who has had limited success"
  },
  {
    "url": "t3_ve3yp",
    "name": "AMA with Matthew Lillard to talk about tugging the FAT KID, putting the REDDIT alien in our movies credits, and everything else!"
  },
  {
    "url": "t3_ve4sh",
    "name": "I was the AP staff photographer in Beijing during the Tiananmen Massacre - AMA"
  },
  {
    "url": "t3_veyxf",
    "name": "I am a Canadian Police officer. While I will not disclose with which Police organization, I will do what I can to answer questions  that anyone may have regarding the job."
  },
  {
    "url": "t3_vfosl",
    "name": "IAmAlexis Ohanian, startup founder, internet activist, and cat owner - AMA"
  },
  {
    "url": "t3_vfpl8",
    "name": "I achieved vertical lift in a human-powered helicopter for 40 seconds: a world record (3x the previous record!).  Ask me anything."
  },
  {
    "url": "t3_vgk61",
    "name": "I am Matt from Where the Hell is Matt? AMA"
  },
  {
    "url": "t3_vhhwg",
    "name": "I am Ragnar Trnquist, Senior Producer and Creative Director of The Secret World! AMA!"
  },
  {
    "url": "t3_vhxm0",
    "name": "My parents won a 8-digit sum of money while I was in high school. amaa."
  },
  {
    "url": "t3_vi7qh",
    "name": "IAmA Patriot Guard Rider who Deals with the WBC often. AMA!"
  },
  {
    "url": "t3_vihx1",
    "name": "I am a fry-cook at Five Guys. Ask Me Anything"
  },
  {
    "url": "t3_vizvl",
    "name": "IAMA Private military contractor or better known as a mercenary AMAA"
  },
  {
    "url": "t3_vkm3m",
    "name": "IAmA Professional Flirt. I work for Private Investigators and my job is to contact men who are suspected cheaters, and try to seduce them basically. AMA"
  },
  {
    "url": "t3_vkoz7",
    "name": "I am Jim Norton, comedian, shamelessly whoring my new special on Epix, Please Be Offended and this is my AMA."
  },
  {
    "url": "t3_vkuyc",
    "name": "Hi, I'm Zach Weiner(smith) of SMBC, and now of a new choosable pathway gamebook called Trial of the Clone. AMA!"
  },
  {
    "url": "t3_vm45q",
    "name": "IAmAn Extreme Couponer, AMA! "
  },
  {
    "url": "t3_vnhy2",
    "name": "I am David Brin -scifi author of novels that won Hugos and/or were kevincostnerized. Also astrophysicist &amp;SETI expert. Futurist/tech-pundit. Mr Transparent Society."
  },
  {
    "url": "t3_vnnzf",
    "name": "IAmA Brazilian Jiujitsu purple belt/Judo brown belt whose video of him smacking a partner abuser about went viral, AMAA"
  },
  {
    "url": "t3_vnq3q",
    "name": "I work in a 911 center. AMA."
  },
  {
    "url": "t3_vog4h",
    "name": "I am 18 and had over 400 broken bones in my life, AmA. (First Post)"
  },
  {
    "url": "t3_voki0",
    "name": "IamA dentist, known by some here as the Oral Unfucker. Slow day today so I am here to field any questions you may have! AMA"
  },
  {
    "url": "t3_voqsp",
    "name": "I write Now I Know, a free trivia/quirky facts email newsletter which goes to 50,000 people a day. Today was issue #500. AMAA."
  },
  {
    "url": "t3_vpw7v",
    "name": "Worked as a cook at Waffle House in the deep south, ama"
  },
  {
    "url": "t3_vqshb",
    "name": "IAmA VP of Programming for a large, American radio corporation. I oversee the content (including DJs, music, etc) that many of you hear on your local radio stations. I'm familiar with all things radio/the music industry and I'm one of the guys that gets blamed for ruining radio. AMA."
  },
  {
    "url": "t3_vr2ve",
    "name": "IAmAn Optician, AMA about your contacts, glasses, Lasik, or whatever. "
  },
  {
    "url": "t3_vr6lj",
    "name": "IAmA camera operator, you may know my work from Discovery Channel's Dirty Jobs. AMA"
  },
  {
    "url": "t3_vrbkw",
    "name": "IAmA Texan who is currently serving in the Israeli Defense Forces. AMAA"
  },
  {
    "url": "t3_vselu",
    "name": "IAMA Senior employee of PETA UK - Today is my last day, there is no love lost - ask me anything"
  },
  {
    "url": "t3_vsrp4",
    "name": "IAmA youth pastor, who after 10 years have decided that enough is enough and am quitting.  AMA"
  },
  {
    "url": "t3_vtat3",
    "name": "Mitch Altman, inventor of TV-B-Gone, co-founder of Noisebridge hackerspace, pioneer of Virtual Reality, public speaker, teacher, entrepreneur, and I only do what I love (plus laundry).  AMA!"
  },
  {
    "url": "t3_vtgvq",
    "name": "Hey I just met you, this is crazy, I co-wrote Call Me Maybe. AMA. Starting 30/6/2012"
  },
  {
    "url": "t3_vu141",
    "name": "Former US Army medic: 2009-2010 Baghdad, Iraq; 2011-2012 Kabul, Afghanistan, AMA"
  },
  {
    "url": "t3_vuezi",
    "name": "IAmA Intersex woman AMA"
  },
  {
    "url": "t3_vuf1y",
    "name": "IAMA long time Scientologist AMAA."
  },
  {
    "url": "t3_vvnyc",
    "name": "As requested: IAmA Marketing Manager at a big Tobacco company. AMA"
  },
  {
    "url": "t3_vw6rl",
    "name": "IAmA hashish dealer from Pakistan. Ask me anything."
  },
  {
    "url": "t3_vwhfz",
    "name": "Iama improv pianist, and I will write a song with your title"
  },
  {
    "url": "t3_vwrv2",
    "name": "IAMA Traveling hobo in the US who did an AMA a few years ago. Didn't get to answer all the questions and now I wanna do another. I'm still a traveling hobo. AMA."
  },
  {
    "url": "t3_vx5kd",
    "name": "IAmA: Charles Stross, science fiction writer"
  },
  {
    "url": "t3_vydjn",
    "name": "IAmA fennec fox owner. Anyone interested in asking me anything?"
  },
  {
    "url": "t3_vz8oo",
    "name": "IAmA Survivalist AMAA"
  },
  {
    "url": "t3_vzb7m",
    "name": "Iama Vegan Black Metal Chef ama"
  },
  {
    "url": "t3_vzen9",
    "name": "I was dumb enough to go on WipeOut. AMA!"
  },
  {
    "url": "t3_vzjix",
    "name": "IAMA 16 year old who was born deaf. AMA!"
  },
  {
    "url": "t3_w0244",
    "name": "I am Dorky Kong, Wipeout's latest winner. AMA."
  },
  {
    "url": "t3_w2swp",
    "name": "IAmA PhD student in pure mathematics with a summer job in a molecular quantum mechanics lab AMA."
  },
  {
    "url": "t3_w30dn",
    "name": "IAMA Malaysian-born survivor of Japanese WWII POW camps. I served in the US Army during the Korean War, then became a US citizen and doctor. AMA."
  },
  {
    "url": "t3_w36pl",
    "name": "IAmA Russian Mail Order Bride living in US. AMA."
  },
  {
    "url": "t3_w3h65",
    "name": "I went to jail for 7 1/2 months for a crime I didn't commit AMA"
  },
  {
    "url": "t3_w44co",
    "name": "I am Serj Tankian. AMA."
  },
  {
    "url": "t3_w4u51",
    "name": "Hi Reddit, we're Firestarter Games, a ragtag bunch AAA devs that just released our first indie game, Globulous for iOS. AUA. Free game codes inside!"
  },
  {
    "url": "t3_w4zxc",
    "name": "IAmA Producer at NPR's Fresh Air with Terry Gross"
  },
  {
    "url": "t3_w50lg",
    "name": "So... my name is Colin Ferguson and I play Sheriff Jack Carter on Eureka - which is a tv show... AMA"
  },
  {
    "url": "t3_w5e9t",
    "name": "I just went on a state tour of North Korea, one of the first since Kim Jong Un ascended to power, and I made a film about it. AMA."
  },
  {
    "url": "t3_w5uxb",
    "name": "I see colors when I hear music, which gives me instantaneous perfect pitch. AMA."
  },
  {
    "url": "t3_w613i",
    "name": "I had breast reduction less than 24 hours ago. AMA. [Update with photos]"
  },
  {
    "url": "t3_w6eer",
    "name": "IAMA History Channel host Kevin Reeve (Off the Grid: Million Dollar Manhunt). I have trained US Navy SEALs &amp; other elite military teams on tracking fugitives and escaping hostile pursuers, and consulted Neil Strauss on his book Emergency on same topic AMAA"
  },
  {
    "url": "t3_w6f05",
    "name": "IAmA worker on an anonymous Sexual Assault Hotline for over a year. I have talked to hundreds of raped people. AMAA"
  },
  {
    "url": "t3_w6hof",
    "name": "I'm Dan Fogler, actor/writer/director/graphic novelist. AMA."
  },
  {
    "url": "t3_w720p",
    "name": "IAmA(n) Australian guitarist named Tommy Emmanuel, AMA"
  },
  {
    "url": "t3_w81cm",
    "name": "I grew up in Colonial Williamsburg (a living museum depicting 18th century America) , AMA"
  },
  {
    "url": "t3_w85a6",
    "name": "IAmA spontaneous solo traveller - I'll take your next flight out. AMA."
  },
  {
    "url": "t3_w8qva",
    "name": "I lost 70 pounds entirely playing Dance Dance Revolution and have since gained 25 pounds of muscle and growing. AMA. (X-post from /r/Fitness)"
  },
  {
    "url": "t3_w90q4",
    "name": "IAMA former GameStop employee. AMA"
  },
  {
    "url": "t3_w9tq7",
    "name": "IAmA former Games employee at Kings Island Amusement Park"
  },
  {
    "url": "t3_w9yed",
    "name": "IAMA Professional eSports Announcer, AMA"
  },
  {
    "url": "t3_wacia",
    "name": "To reduce my student loans I secretly took up residence in an unused classroom in my school for over 1.5 years. AMA"
  },
  {
    "url": "t3_wajlu",
    "name": "I just spent 13 months in prison. AMA"
  },
  {
    "url": "t3_wap6w",
    "name": "IAmA former movie theater manager at a major chain and I saw a lot of shit go down"
  },
  {
    "url": "t3_wbgfd",
    "name": "I spent a year in military prison. AMA"
  },
  {
    "url": "t3_wc33h",
    "name": "IAMA comedian and musician Danny Tamberelli.  I was Little Pete and a cast member of All That.  I worked from 6-18 with Nickelodeon.  Now I play in bands, write sketch comedy and enjoy Woody Harrelson movies..."
  },
  {
    "url": "t3_wc5w7",
    "name": "I am Hazel Jones, the Lady with 2 Vaginas. Ask Me Anything!"
  },
  {
    "url": "t3_wd71r",
    "name": "IAMA Front Desk Manager at a 130 room hotel. I know all the ins &amp; outs as well. AMA."
  },
  {
    "url": "t3_wdnio",
    "name": "IAmA civilian in Afghanistan that gets shot at more often than most soldiers."
  },
  {
    "url": "t3_we3jw",
    "name": "I quit my job, broke up with my long-time girlfriend, and then traveled the US by train for two months alone, staying only with random people I met off the internet days in advance. I made an AMA about it exactly a year ago today - and in it - I made you all a promise. I'm back. AMA!"
  },
  {
    "url": "t3_we7tq",
    "name": "IAmA scientist and startup CEO named Luis von Ahn. I developed CAPTCHA and reCAPTCHA, those squiggly characters you see all over the web (sorry!).  I'm now working on Duolingo, a new way to learn languages while helping to translate the Web. AMA."
  },
  {
    "url": "t3_weamq",
    "name": "IAmA exotic dancer, AMA!"
  },
  {
    "url": "t3_wehgt",
    "name": "I started 99 days ago today in the Atlantic ocean in Florida. I have only walked 1250 miles now and am in middle of Texas. Started with no food/money/water. Lost 50 lbs. am walking to the pacific and homeless. Not 1 ride at all"
  },
  {
    "url": "t3_weius",
    "name": "IAMA Abortion counselor: ask me almost anything"
  },
  {
    "url": "t3_wfdcj",
    "name": "10 Months ago I joined Reddit and put an AMA about being a Hotel Front Desk Agent. Earlier this month ABC flew me out to NYC to interview me which airs Friday. As a thank you to Reddit for making this possible, here is another AMA."
  },
  {
    "url": "t3_wfdht",
    "name": "IAmA Guy who had a relationship with a girl online that took a horrible, and very sad turn similar to the movie 'Catfish' but a lot more complex and sinister."
  },
  {
    "url": "t3_wfo4x",
    "name": "IAmA president of a College Kink club AMA"
  },
  {
    "url": "t3_wfycs",
    "name": "I am Iyaz Akhtar professional podcaster for the TWiT network, AMA! "
  },
  {
    "url": "t3_wi5ra",
    "name": "I am an egg donor for families who can't have children. I have children in the world I will never meet! AMA"
  },
  {
    "url": "t3_wifrc",
    "name": "I am the director of GREMLINS, Joe Dante. AMA. "
  },
  {
    "url": "t3_wjrx9",
    "name": "IAMA Juvenile Probation Officer in Texas..."
  },
  {
    "url": "t3_wjyq4",
    "name": "I quit my job and rode my motorcycle through 48 U.S. States in 100 days. AMA"
  },
  {
    "url": "t3_wk49w",
    "name": "IAmA(n) Insurance Fraud Investigator and I'm about to ruin a man's life in 4 hours for commiting insurance fraud for the past 10 years AMA"
  },
  {
    "url": "t3_wkdyg",
    "name": "IAmA hearing child of two deaf parents. AMA!"
  },
  {
    "url": "t3_wl9bd",
    "name": "IAmA Irish guy, who served three years in the Israeli army as a Combat Medic."
  },
  {
    "url": "t3_wlfkd",
    "name": "IAmA guy who built a machine to detect Extraterrestrial Intelligence (SETI)  Yes I am."
  },
  {
    "url": "t3_wllob",
    "name": "IAmA Olympic Weightlifter and The Strongest Woman in America"
  },
  {
    "url": "t3_wlwjj",
    "name": "We are three rowers heading to the London Olympics representing the United States in the Lightweight Men's 4-, AMA"
  },
  {
    "url": "t3_wmshg",
    "name": "I am a Holistic Therapist specialising in EFT (Emotional Freedom Techniques) and past life regression. "
  },
  {
    "url": "t3_wnhmw",
    "name": "IAmA Paparazzo that used to work for TMZ. AMA."
  },
  {
    "url": "t3_wnj2d",
    "name": "Iama heroin addict, been clean now for 4 months. (Follow up)"
  },
  {
    "url": "t3_wnkxf",
    "name": "IAMA person who raises guide dog puppies.  AMA!"
  },
  {
    "url": "t3_wny1c",
    "name": "IAmA high school English teacher at a nationally top-ranked school and grader for the AP English Literature and Language exams. AMA."
  },
  {
    "url": "t3_wouiw",
    "name": "IAmA former writer/director of SpongeBob Squarepants &amp; Phineas and Ferb"
  },
  {
    "url": "t3_wp5cf",
    "name": "I am Dave. I'm from Ireland, and I'm of the writers of Cyanide &amp; Happiness, arguably the largest webcomic online. Time for a personal AMA."
  },
  {
    "url": "t3_wpaco",
    "name": "IAmA NASCAR Engineer AMAA"
  },
  {
    "url": "t3_wpfe1",
    "name": "IAMA Con Man, AMAA."
  },
  {
    "url": "t3_wpkqp",
    "name": "IAmA 15-year old high school graduate who skipped 3 grades. AMA"
  },
  {
    "url": "t3_wplvf",
    "name": "IAM Rob CmdrTaco Malda, Founder of Slashdot, AMA."
  },
  {
    "url": "t3_wqcbb",
    "name": "IAmA college student with eidetic (photographic) memory. AMA."
  },
  {
    "url": "t3_wrauy",
    "name": "I am just back from a press screening of Dark Knight Rises. AMA and I will answer WITHOUT SPOILERS"
  },
  {
    "url": "t3_wrayq",
    "name": "IAmA case worker. Parts of my job include drug testing, referrals to treatment/services, facilitating cognitive self change groups, and more. AMAA."
  },
  {
    "url": "t3_wrf7m",
    "name": "Hey, Reddit, it's me, Zach Anner. Remember when you got me that show on Oprah's Network? Yeah, I lost that. Whoops. But now I host the first Reddit-powered travel show,'Riding Shotgun,' so AMA! "
  },
  {
    "url": "t3_wrq23",
    "name": "IAmA(n) infectious disease epidemiologist. AMAA (SFW, please)"
  },
  {
    "url": "t3_wsqh5",
    "name": "a pornographer for 12 years. I shoot/produce and perform in adult movies. AMA NWS"
  },
  {
    "url": "t3_wswt6",
    "name": "I will honestly answer anything you ask me. AMA."
  },
  {
    "url": "t3_wt50f",
    "name": "As requested, IAmA Reality TV Persona and openly Transgender - Katelynn Cusanelli from MTV's The Real World: Brooklyn. AMA."
  },
  {
    "url": "t3_wtf5j",
    "name": "IAMA previously true hermaphrodite (intersex)."
  },
  {
    "url": "t3_wthyl",
    "name": "We are award-winning UK Indie Studio Toxic Games, the makers of Q.U.B.E. AmA!"
  },
  {
    "url": "t3_wti63",
    "name": "IAm Megan Andelloux, professional sex educator &amp; founder of The Center For Sexual Pleasure And Health (one of only 2 nation-wide organizations dedicated to adult sex education). AMA!"
  },
  {
    "url": "t3_wuh1c",
    "name": "A Dying Preztel... The inside of my body is twisted from head to toe... MRIs Goodies Inside. Going on 2.5 years."
  },
  {
    "url": "t3_wulrg",
    "name": "I'm an illegal immigrant living in the USA for 20+ years AMA"
  },
  {
    "url": "t3_wvbca",
    "name": "IAmA former employee of Porsche Cars North America AMAA"
  },
  {
    "url": "t3_wvf3y",
    "name": "IAmA former PA on The West Wing AMA"
  },
  {
    "url": "t3_wvrdg",
    "name": "I am eating potato chips right now, AMAA"
  },
  {
    "url": "t3_wvs7f",
    "name": "IAmA Professional Halo Player. Ask me Anything!"
  },
  {
    "url": "t3_wvwv0",
    "name": "IAmA Former Mime AMA"
  },
  {
    "url": "t3_wvzeh",
    "name": "I was the lead producer on the Fallout: New Vegas DLCs and tools programmer on World of Warcraft, AMAA!"
  },
  {
    "url": "t3_ww4w9",
    "name": "I'm 5 years old.  AMAA."
  },
  {
    "url": "t3_ww74z",
    "name": "IAmA(n) owner of the most amazing creature on the planet, the cat Lil BUB. "
  },
  {
    "url": "t3_wwidf",
    "name": "I am an ex new car salesman from the 80's &amp; early 90's, but I know the modern tricks too. AMA"
  },
  {
    "url": "t3_wwq4r",
    "name": "IAmA guy born with only 1 Ear"
  },
  {
    "url": "t3_wx2jo",
    "name": "IAmA female soldier in the U.S. Army, stationed in Afghanistan. AMAA"
  },
  {
    "url": "t3_wx8xh",
    "name": "IAmA new and used cars salesman CURRENTLY. Making this because last guy's ama was crap. AMA."
  },
  {
    "url": "t3_wxfty",
    "name": "I am a 49 yo CPA and equestrienne with incurable breast cancer.  AMA."
  },
  {
    "url": "t3_wxn5i",
    "name": "My name is Amy Page, and IAmA LEGAL prostitute at the world famous Bunny Ranch in Carson City, Nevada. AmA!"
  },
  {
    "url": "t3_wz15g",
    "name": "I spent a year at McMurdo Station in Antarctica, AMA"
  },
  {
    "url": "t3_wz8sm",
    "name": "I'm not sure if there is any interest in this, but I used to be a cult member, AMA. "
  },
  {
    "url": "t3_wzfr2",
    "name": "In 10 days I will be taking the first Cheesemonger certification exam. Help me study reddit, AMA on cheese!"
  },
  {
    "url": "t3_wzj5b",
    "name": "As requested: IAmA member of the admissions office at a US university. AMAA"
  },
  {
    "url": "t3_wzkwv",
    "name": "IAMA Chef. Ask me anything"
  },
  {
    "url": "t3_wzod9",
    "name": "I'm a Black man from one of the worst high schools and cities in the country and got into 20 colleges including five Ivy League schools...I went to Harvard...AMA"
  },
  {
    "url": "t3_x0dtn",
    "name": "I am a keeper of tarantulas and other exotic bugs.  I have studied spiders and other arthropods (anything with an exoskeleton) for almost 30 years.  AMA..."
  },
  {
    "url": "t3_x0gja",
    "name": "I have many wolf friends (including Yuki) at the wolf sanctuary I volunteer at, AMA. =)"
  },
  {
    "url": "t3_x0ych",
    "name": "I am a cosmetologist with over 15 years experience specializing in men's hair cutting. I will answer all of your grooming questions. "
  },
  {
    "url": "t3_x10zx",
    "name": "I AMA Wikipedia administrator, AMA."
  },
  {
    "url": "t3_x15eo",
    "name": "I am Antonio Esfandiari, 2 time WSOP bracelet winner and 2 time WPT champion, professional poker player AMA..."
  },
  {
    "url": "t3_x15yt",
    "name": "IAmA Larry King. I've done Radio and TV, and now I'm coming for you, internet. AMAA"
  },
  {
    "url": "t3_x17sc",
    "name": "IAmA 21 year old Muslim American male born and raised in Texas. My mom wears the Bhurka regulalry. I have seen a lot of negativity about Islam on the Web lately so, ask me anything."
  },
  {
    "url": "t3_x19gj",
    "name": "IAm Alex Day, a full-time independent musician. AMA :)"
  },
  {
    "url": "t3_x2pt1",
    "name": "I am Ryan Holiday, PR strategist [and media manipulator] for clients including Tucker Max, Robert Greene, American Apparel and others. AMA"
  },
  {
    "url": "t3_x2ukv",
    "name": "I work at an ostrich farm. AMA"
  },
  {
    "url": "t3_x2xdv",
    "name": "IAmA college football coach. AMA."
  },
  {
    "url": "t3_x319b",
    "name": "IAmA Game Designer Mark Terrano -AMA"
  },
  {
    "url": "t3_x33qv",
    "name": "IAmA Jessi June: Professional Glamour Model, Full-time traveler, writer, burger connoisseur, active Reddit user, and half of you have seen me naked. AMA!"
  },
  {
    "url": "t3_x3dtj",
    "name": "IAmA teen in an Old Money family AMA "
  },
  {
    "url": "t3_x4474",
    "name": "I was on Tosh.0 and Web Soup for my viral video I'm a Snake AMA"
  },
  {
    "url": "t3_x4cxm",
    "name": "IAmA guy who married a blind girl. AMA"
  },
  {
    "url": "t3_x4rvy",
    "name": "IAmA former Playboy model turned hardcore adult performer: Victoria Rae Black aka TeamVRB....Ask Me Everything."
  },
  {
    "url": "t3_x51bu",
    "name": "IAmA 21 y.o. female sexton. In other words: I bury  dead people. AMA"
  },
  {
    "url": "t3_x58ul",
    "name": "WeAre Harvey and Raphael, co-creative directors of Dishonored at Arkane Studios. Ask Us Anything!"
  },
  {
    "url": "t3_x5wry",
    "name": "IAmA 16 year old girl who pees by putting a catheter in my belly button, AMA."
  },
  {
    "url": "t3_x641m",
    "name": "IamA Oilfield worker in Canada"
  },
  {
    "url": "t3_x6ldk",
    "name": "IAmA casino table games and poker dealer, with extensive knowledge of useless casino numbers and trivia that only Reddit would find interesting. AMA."
  },
  {
    "url": "t3_x6pj3",
    "name": "IAmA Former DOD Intelligence Interrogator"
  },
  {
    "url": "t3_x73r7",
    "name": "IAMA Shane Koyczan: Author, Poet and Talk Rocker who opened the Vancouver 2010 Olympics and proud neck beard proponent. Just in Time for the 2012 Opening Ceremonies  AMA"
  },
  {
    "url": "t3_x78g7",
    "name": "IAmA British Police Officer, AMAA."
  },
  {
    "url": "t3_x7abr",
    "name": "IAMA Firearm retailer/manufacturer - AMAA"
  },
  {
    "url": "t3_x7hbb",
    "name": "IAmA daughter of a drug kingpin who was in high security federal prison until I was 16. AMA."
  },
  {
    "url": "t3_x7hj2",
    "name": "IAma 95 year old Italian immigrant who live thru WWII and watched Mussolini speak, AMA"
  },
  {
    "url": "t3_x7k0x",
    "name": "IAmA Aspiring Kinesiologist and Nutritionist determined to debunk fitness myths and broscience, also open to fitness/diet questions!"
  },
  {
    "url": "t3_x83c1",
    "name": "I am a Person who was wrongly tried for rape AMA"
  },
  {
    "url": "t3_x8hs8",
    "name": "IAmA 6' bisexual female stripper competing to be the hottest girl in Vegas.. AMA"
  },
  {
    "url": "t3_x8x90",
    "name": "IAmA camp counselor who got fired at Boy Scout camp for being gay and ten of my fellow staff members walked out with me. AMA"
  },
  {
    "url": "t3_x98t5",
    "name": "I'm Dan Fogler, actor/writer/director/graphic novelist. I loved doing this the first time so let's do it again. AMA. "
  },
  {
    "url": "t3_x9n36",
    "name": "IAmA Record store owner. AMA"
  },
  {
    "url": "t3_x9r6v",
    "name": "IAmA pornstar, April O'Neil. AMA."
  },
  {
    "url": "t3_xc9yj",
    "name": "IAmA hijabi, AMA. In light of the Saudi women and others competing at the 20102 Olympics in hijab, I thought it was time for me to answer reddit's questions about a Muslim woman's dress and lifestyle as I observe hijab (and sometimes niqab) daily. "
  },
  {
    "url": "t3_xcdpa",
    "name": "IAmA a romanian journalist. AMA about the romanian politics, the vote for bringing down the president or any other subject regarding my country"
  },
  {
    "url": "t3_xcmad",
    "name": "IAmA Muslim girl who is NOT a hijabi. I want to give Reddit the opportunity to not only see the extreme side of Islam. AMAA"
  },
  {
    "url": "t3_xd0ro",
    "name": "IAmA Model in the Fashion and Commercial Industry"
  },
  {
    "url": "t3_xd6vf",
    "name": "IAmA 21 year old girl, and 5 time Cancer Survivor. AMA"
  },
  {
    "url": "t3_xdxco",
    "name": "I spent 17 months in a 3rd world country (horrible conditions) jail because of a YouTube video I made. AMA."
  },
  {
    "url": "t3_xe8dx",
    "name": "John K. Ren and Stimpy Creator Back Doing Web Cartoons and Digital Toys"
  },
  {
    "url": "t3_xek5i",
    "name": "I work for Gamestop (and have been for almost 10 years), AMA about the (horrible) future of this company and how much we suck. "
  },
  {
    "url": "t3_xfc49",
    "name": "IAmA person who was molested for 5 years straight. 657 charges were just recently brought against my abuser and he is now in jail. AMA"
  },
  {
    "url": "t3_xfxvb",
    "name": "I was an Alcohol Dealer in a Islamic Country. AMA"
  },
  {
    "url": "t3_xgjrw",
    "name": "We are the team behind the new Outlook.com service, AUsA"
  },
  {
    "url": "t3_xh75q",
    "name": "I am Leo Laporte, Chief TWiT. AMA! "
  },
  {
    "url": "t3_xi3zr",
    "name": "I am R.A. Salvatore, fantasy writer, geek, gamer..."
  },
  {
    "url": "t3_xi6ve",
    "name": "IAmA 92 year old Azerbaijani World War II veteran. I was conscripted to fight for the Soviets, captured by the Germans, surrendered on the Western front, married a German woman and started a new life in the US. AMA"
  },
  {
    "url": "t3_xijzu",
    "name": "Bassist for The Mars Volta - Juan Alderete "
  },
  {
    "url": "t3_xildl",
    "name": "I am David Niose, President of the American Humanist Association and author of Nonbeliever Nation."
  },
  {
    "url": "t3_xizti",
    "name": "IAmA Toolbar Developer; your worst browser nightmare, AMAA"
  },
  {
    "url": "t3_xjdj9",
    "name": "I'm a 60+ year old man who went back to college to get student health insurance.  In 3 short years, I have saved over $45,000 in premiums. Oh yeah -- AND I have diabetes and an artificial knee! AMA"
  },
  {
    "url": "t3_xjwpz",
    "name": "IAmA stripper at gentleman's clubs in Texas. AMA!"
  },
  {
    "url": "t3_xk4y7",
    "name": "I Am A ex-meth cook."
  },
  {
    "url": "t3_xkhcc",
    "name": "I am a 19 year old girl who ran off and joined the carnival."
  },
  {
    "url": "t3_xkkwh",
    "name": "We are XGen Studios, indie game developers and creators of Defend Your Castle, Stick RPG, Stick Arena, and Motherload! AMA"
  },
  {
    "url": "t3_xkt35",
    "name": "We're Jay Chandrasekhar and Kevin Heffernan of Broken Lizard  (Super Troopers and Beerfest). Our new movie The Babymakers is out on August 3rd! AMA."
  },
  {
    "url": "t3_xkyz3",
    "name": "IAm Dick DeBartolo, MAD's Maddest Writer &amp; The Giz Wiz. AMA"
  },
  {
    "url": "t3_xl294",
    "name": "IAmA Medical Marijuana Vendor and Cultivator...AMAA"
  },
  {
    "url": "t3_xl7wb",
    "name": "IAmA male porn performer in straight porn AMA"
  },
  {
    "url": "t3_xlzls",
    "name": "IAmA 25 year old full time touring musician, traveling the world since 2009, currently on Vans Warped Tour 2012. AMA"
  },
  {
    "url": "t3_xmms6",
    "name": "I was a female giz mopper, AMA"
  },
  {
    "url": "t3_xmt17",
    "name": "I am a 16 year old girl with Alopecia Universalis (no hair anywhere on my body) AMA"
  },
  {
    "url": "t3_xncvv",
    "name": "I'm homeless and walking across America. Have an iPod touch and prepaid wifi for some work I did before I started. I'm on DAY 121 in Santa Rosa New Mexico. Heading west. Follow @hobo_nick (twitter) "
  },
  {
    "url": "t3_xo7a6",
    "name": "IAmA a 28 year old who has been told he may not live to see next Friday. I always wanted to do an AMA but never had a reason. Ask me anything"
  },
  {
    "url": "t3_xo9bm",
    "name": "IAmA quadriplegic who games without the use of their hands interested in helping other disabled gamers learn to play effectively.. i broke my neck 5 years ago falling 18ft from a tree landing on a root."
  },
  {
    "url": "t3_xoxym",
    "name": "IAmAn Operating Room Nurse at a major medical center in the US.  I've seen and done shit that makes Saw look like Sesame Street. AMAA."
  },
  {
    "url": "t3_xp1ap",
    "name": "IAmA guy with normal male genitals and a partial Vulva. AMAA."
  },
  {
    "url": "t3_xpf1k",
    "name": "IAMA ex hacker that came out of retirement to decommission a scammers website tonight. I am Paddyhack. AMAA"
  },
  {
    "url": "t3_xpvnj",
    "name": "Heyy, I do the webcomic Subnormality, as well as artwork for Cracked.com. Ask me whatever!"
  },
  {
    "url": "t3_xqcvu",
    "name": "IAmA former Marine rifleman with Vietnam service 1968 - January, 1973 (in Vietnam in 69), AMA"
  },
  {
    "url": "t3_xqg8a",
    "name": "IAMA 18 y/o female with Misophonia"
  },
  {
    "url": "t3_xqiwo",
    "name": "I worked as a full-time servant for an eccentric millionaire. AMA."
  },
  {
    "url": "t3_xqj6l",
    "name": "I am an Investment Banker working on Wall Street.  AMA."
  },
  {
    "url": "t3_xqnpm",
    "name": "IAmA Gray fox owner. I posted a picture of my pet gray fox two days ago, an AMA was requested. So, if anyone was interested in fox ownership, AMA."
  },
  {
    "url": "t3_xr5tq",
    "name": "IAMA Software Intern at NASA's Jet Propulsion Lab. AMA."
  },
  {
    "url": "t3_xrb7c",
    "name": "I'm a female who has worked at two erotic boutiques or sex shops AMA!  It'll be fun :P "
  },
  {
    "url": "t3_xs75x",
    "name": "I am Sarah Lane of TWiT. AMA!"
  },
  {
    "url": "t3_xslol",
    "name": "IAMA group of professional cooks and bakers AMA"
  },
  {
    "url": "t3_xspv8",
    "name": "I am a girl who doesn't recognize faces. AMA. "
  },
  {
    "url": "t3_xssso",
    "name": "I built the 7 foot long Lego Serenity from Firefly.  Ask me anything."
  },
  {
    "url": "t3_xt36v",
    "name": "I Won the Price Is Right, Ask Me Anything!"
  },
  {
    "url": "t3_xuo5p",
    "name": "I worked at Disney World AND Disneyland and attended Disney U. Ask me anything about the company, celebs, guests, behind the scenes: whatever!"
  },
  {
    "url": "t3_xuv2e",
    "name": "I am Dave Hirschkop, creator of world famous Dave's Insanity Sauce, (the only hot sauce banned from the Fiery Foods Show), Dave's Ultimate Insanity, and Dave's Ghost Pepper Hot Sauce. AMA "
  },
  {
    "url": "t3_xv7b6",
    "name": "IAmA Fetish Porn Producer and Porn Model. AMA"
  },
  {
    "url": "t3_xvk7y",
    "name": "IAmA Irish person who has lived in china for the past seven years, does reddit have any questions?"
  },
  {
    "url": "t3_xvwbt",
    "name": "IAmA norwegian police officer AMA"
  },
  {
    "url": "t3_xw3aq",
    "name": "IAm the vocalist of a perpetually touring, noisy stagedive factory from Amish country. I am Ricky Armellino of This or the Apocalypse. AMA."
  },
  {
    "url": "t3_xwszr",
    "name": "Hi Reddit, We are the Skepticon Team, AUsA."
  },
  {
    "url": "t3_xxbs0",
    "name": "IAmA girl with severe atopic dermatitis everywhere (including eyelids) &amp; is allergic to water and heat. AMA"
  },
  {
    "url": "t3_xxwdv",
    "name": "IAmA landscape designer.  Ask me any questions about your plants, landscape, patio questions, etc."
  },
  {
    "url": "t3_xxx94",
    "name": "I was a Ballboy at the Wimbledon Tennis Championships in 2011 and 2012"
  },
  {
    "url": "t3_xy3sx",
    "name": "IAM Casey Lynch, Editor-in-Chief of IGN.com. AMA"
  },
  {
    "url": "t3_xy8sd",
    "name": "I am Veronica Belmont, podcaster and video host. AMA!"
  },
  {
    "url": "t3_xyiny",
    "name": "I've had over 80 surgeries, one of which I was completely awake for. AMA!!"
  },
  {
    "url": "t3_xyjcu",
    "name": "IAmA former meth cook and medical researcher who used illegal drugs to treat my mental illnesses.  Reddit said I should write a book, so I'm giving it a shot.  AMAA"
  },
  {
    "url": "t3_xyw9t",
    "name": "I'm a Nude Model for Drawing Classes AMA"
  },
  {
    "url": "t3_xywdy",
    "name": "I was in loss prevention (catching shoplifters) for 5 years.  AMA"
  },
  {
    "url": "t3_y049z",
    "name": "IAm Joshua Malina, a remarkably talented actor, humbly sharing his special gift with the world."
  },
  {
    "url": "t3_y077t",
    "name": "I have the rare mutation xeroderma pigmentosum. AMA!"
  },
  {
    "url": "t3_y17ab",
    "name": "IAmA guy who was kidnapped by my dad at age 5, and didn't meet my birth mom again till I was 26. AMA"
  },
  {
    "url": "t3_y1pdv",
    "name": "IAMA WWII Marine Corps Rifleman, Sterling Mace, and Author of Battleground Pacific: A Marine Rifleman's Combat Odyssey in K/3/5. AMA about the Battle of Peleliu."
  },
  {
    "url": "t3_y1x4u",
    "name": "I was an extra in 'Harry Potter and the Goblet of Fire'  for 4 months when I was 14. AMA!"
  },
  {
    "url": "t3_y2gh9",
    "name": "I have walked (only walked) over 1800 miles in 129 days from Jacksonville beach in FL to Albequerque NM. Walked the whole way homeless/no money @hobo_nick (twitter)"
  },
  {
    "url": "t3_y3qj5",
    "name": "I've worked at Japanese Hibachi style restaurants for 8 years, AMA"
  },
  {
    "url": "t3_y3r8u",
    "name": "My name is Daniel and I spent the summer traveling and doing things for redditors.  I slept on the floors and couches of complete strangers and never spent more than seven days in a given city. AMA"
  },
  {
    "url": "t3_y41hf",
    "name": "IAmA Nutrition student who has spent the last few years learning everything about what to eat to be healthy, and has determined the majority of common knowledge about nutrition is incorrect. AMA"
  },
  {
    "url": "t3_y44ef",
    "name": "IAmA Mormon Missionary. AMA!"
  },
  {
    "url": "t3_y4ceb",
    "name": "IAmA cop (and a redditor).  AMA"
  },
  {
    "url": "t3_y4on1",
    "name": "IAmA airplane crash survivor.  AMA."
  },
  {
    "url": "t3_y4tln",
    "name": "[BY REQUEST] - I'm someone who was clinically dead and came back to life, and I remember being dead."
  },
  {
    "url": "t3_y542u",
    "name": "Hi. I'm RJD2, producer/dj/label owner/geek. AMA."
  },
  {
    "url": "t3_y5jr8",
    "name": "I Am Kevin Murphy of Rifftrax and MST3K. AMA!"
  },
  {
    "url": "t3_y5q9h",
    "name": "Carrie Hope Fletcher: Singer/Actress/YouTuber...AMA!"
  },
  {
    "url": "t3_y5vn0",
    "name": "I am Ed Lu - former NASA astronaut and now running the B612 Foundation which is building an asteroid spotting space telescope"
  },
  {
    "url": "t3_y6p8e",
    "name": "I am a professional table tennis player. AMA"
  },
  {
    "url": "t3_y6skd",
    "name": "IAmA webcam girl (aka camwhore). AMA."
  },
  {
    "url": "t3_y70v0",
    "name": "[BY REQUEST] I AmA polyglot (multilingual person) from Ireland. I only spoke English when I was 21, but now I speak 10 languages and can sign ASL. I've given a TEDx talk to inspire adult language learners. AMA"
  },
  {
    "url": "t3_y7cyr",
    "name": "IAMA Radio DJ"
  },
  {
    "url": "t3_y81ju",
    "name": "I created Imgur. AMA."
  },
  {
    "url": "t3_y8kno",
    "name": "I am Jason (J-Tro) Trost. Writer, Director and Actor from The FP AMA!"
  },
  {
    "url": "t3_y9p22",
    "name": "IAmA Fake Scientist. I'll answer questions about any scientific field, writing a real fake textbook, and the secret life of Manganese. AMAA."
  },
  {
    "url": "t3_yayhq",
    "name": "IAmA U.S. Marine, 2 weeks back from my first tour in Afghanistan, AMAA"
  },
  {
    "url": "t3_yb1z2",
    "name": "I am a psychiatrist specializing in psychotherapy and psychopharmacology for personality disorders "
  },
  {
    "url": "t3_ybmmh",
    "name": "We are engineers and scientists on the Mars Curiosity Rover Mission, Ask us Anything!"
  },
  {
    "url": "t3_ybtit",
    "name": "I am Nobody and this is an experimental AMA Game. The first person to guess me shall receive a gift. AMA"
  },
  {
    "url": "t3_ydn75",
    "name": "I am Sos, who made McPixel and gave out free codes on Pirate Bay. Ask me anything!"
  },
  {
    "url": "t3_yeiac",
    "name": "IAmA Reverse engineer who broke millions of hotel locks. AMA"
  },
  {
    "url": "t3_yevz9",
    "name": "I am the 'star' of a well-circulated series of child pornography images taken forty years ago. AMAA."
  },
  {
    "url": "t3_yflev",
    "name": "IAMA 911/Police/Fire/Emergency dispatcher AMA"
  },
  {
    "url": "t3_yg9e8",
    "name": "IamA model, AMA :)"
  },
  {
    "url": "t3_yh5wi",
    "name": "By request: I was a casino sysadmin. I am not any longer so AMFA."
  },
  {
    "url": "t3_yh8hg",
    "name": "IAMA full time Indie games developer, head of Chucklefish Games. Lead dev on Starbound + previously artist on Terraria.  AMA"
  },
  {
    "url": "t3_yi1t2",
    "name": "IAmA former We Buy Gold store employee."
  },
  {
    "url": "t3_yi417",
    "name": "I am a 22 yr old who grew up in the small Eastern European country of Albania. Before I left for America (at age 18) I had: been evacuated by the US Marines in 1997, fed refugees from Kosovo in 1999, and been held at gun point in 2007. AMAA"
  },
  {
    "url": "t3_yi4wt",
    "name": "IAmA Jimmy Johns Employee....AMA"
  },
  {
    "url": "t3_yie85",
    "name": "IAmA tour guide at the Winchester Mystery House, a popular haunted house in San Jose, CA built by the eccentric widow of the president of the Winchester Repeating Arms Company.  AMAA!"
  },
  {
    "url": "t3_yitlz",
    "name": "We are the game development team remaking Riven: The Sequel to Myst. Ask us anything!"
  },
  {
    "url": "t3_yj2p2",
    "name": "I am Amazon's #1 non-fiction reviewer of all time, in Amazon's Hall of Fame, (and a former CIA spy). AMA"
  },
  {
    "url": "t3_yjo1a",
    "name": "IAMA: Rome Ramirez &amp; I sing for my favorite band Sublime"
  },
  {
    "url": "t3_yk792",
    "name": "I dumpster dive and sleep ynder bridges. Homeless and walking from Florida to California. I promised I would keep you all posted on my progress. Well I just got to Arizona about an hour ago!! Day 138. @hobo_nick (twitter/instagram)"
  },
  {
    "url": "t3_yl9kx",
    "name": "I'm that Cthulhu balloon guy. I blew up overnight. AMA"
  },
  {
    "url": "t3_ylc3k",
    "name": "I am a US Army Sniper.  I Have 3 combat tours to include Iraq and Afghanistan.  I am a democrat, a liberal, and support gay marriage.  I am truly the 1% of my profession.  AMA"
  },
  {
    "url": "t3_yli88",
    "name": "IAM David Crane, creator of Pitfall! and co-founder of Activision. "
  },
  {
    "url": "t3_yn5p1",
    "name": "I am Kerry Prior, writer/director of THE REVENANT (theaters and VOD 8/24), (and two other movies that died at birth); did visual effects for a slew of movies including The Abyss, Starship Troopers, Airforce One, Bubba Ho-Tep, the Phantasm series, and more.  Ask me anything."
  },
  {
    "url": "t3_yne9x",
    "name": "I am Dan Harmon, creator of Community, writer of Monster House, and Executive Producer of the upcoming Charlie Kaufman Stop Motion Animated feature Anomalisa, ask me anything!"
  },
  {
    "url": "t3_yo9xn",
    "name": "IAmA bored post-grad Art Ed Major-AMTDA (Ask me to DRAW ANYTHING!"
  },
  {
    "url": "t3_yoc95",
    "name": "IAma 911 operator... AMA."
  },
  {
    "url": "t3_yos6j",
    "name": "IAmA Fencing and Archery coach AMA!"
  },
  {
    "url": "t3_yp545",
    "name": "Im Kim Barker, a campaign finance reporter at ProPublica. AMA about how outside money is influencing the 2012 election. "
  },
  {
    "url": "t3_yp9v3",
    "name": "I work in skin care. AMA"
  },
  {
    "url": "t3_ypihr",
    "name": "I am a Microsoft Software Developer. AMA"
  },
  {
    "url": "t3_ypqbb",
    "name": "I am Juvenile Probation Officer that deals with Juvenile Sex Offenders AMA"
  },
  {
    "url": "t3_yq5r0",
    "name": "I am a nurse at a prison hospital. AMA"
  },
  {
    "url": "t3_yq7ks",
    "name": "I am an autistic artist with synesthesia that wrote, illustrated, and published a book so to bridge the gap between my world and yours. AMA!"
  },
  {
    "url": "t3_yr05i",
    "name": "I am Sam Stein, White House correspondent and political editor for The Huffington Post. AMA"
  },
  {
    "url": "t3_yr31z",
    "name": "IAmA head writer for the world's most expensive children's television show - LazyTown. AMA. "
  },
  {
    "url": "t3_yry3i",
    "name": "High Reddit! Slightly Stoopid here... We just released our new album, Top of the World. Join us from Unity Tour today... Ask us anything you want! "
  },
  {
    "url": "t3_ys8k2",
    "name": "I am a 32 year old man with an extremely small penis. Flaccid it's an innie and erect its almost 3 inches. Go crazy. "
  },
  {
    "url": "t3_ysc0d",
    "name": "Hi Reddit! I Nik Lentz...IAmA full time fighter in the UFC and professional nerd! AMA"
  },
  {
    "url": "t3_ysfyh",
    "name": "IAmA CostCo Sample Guy and I'm judging you."
  },
  {
    "url": "t3_ysgnn",
    "name": "I spent a week in a psychiatric ward after losing all grip with reality and believing that I was Jesus. AMA"
  },
  {
    "url": "t3_ysie4",
    "name": "I am a REAL 35 year old man with micropenis and it has been a detrimental affect on my life.  Pics with proof included.  AMAA "
  },
  {
    "url": "t3_yskjf",
    "name": "IAmA 28 year old girl, and have been HIV from birth. 28 years living with it... AmA"
  },
  {
    "url": "t3_yt5az",
    "name": "I work full time, make over $20 an hour and I live in my truck. AMA"
  },
  {
    "url": "t3_yt7lo",
    "name": "IAmA 16 year old boy who tore open his balls in the middle of the Amazon jungle. AMA. (slightly NSFW)"
  },
  {
    "url": "t3_yt8bs",
    "name": "IAMA Transwoman who was born with micropenis and a few other genetic anomalies, AMA"
  },
  {
    "url": "t3_ytgsx",
    "name": "I am Felix Cartal. a producer and DJ... and lucky enough to travel the world doing what I love for a living. AMA"
  },
  {
    "url": "t3_ytyq2",
    "name": "IAmA 19 year old who was raised in the wilderness without most technology"
  },
  {
    "url": "t3_yu2eh",
    "name": "I am a Chinese farm girl who grew up in rural poverty and just entered the US as a LEGAL immigrant last month. AMA."
  },
  {
    "url": "t3_yujyq",
    "name": "IAMA Correctional Officer at a maximum security prison for the State of Texas. AMA"
  },
  {
    "url": "t3_yuq4m",
    "name": "IAMA guy who has helped 3 ex-muslims escape their country while facing death threats for expressing their views. AMAA."
  },
  {
    "url": "t3_yuwiw",
    "name": "I am one of 12 kids. All of us from the same mom and dad, one at a time. AMA"
  },
  {
    "url": "t3_yv5zk",
    "name": "I am an employee at Five Guys Burgers and Fries, ask me anything."
  },
  {
    "url": "t3_yvov0",
    "name": "IAmA professional Blacksmith ask me anything"
  },
  {
    "url": "t3_yw7d6",
    "name": "As requested: IAmA (former) prison guard who worked on death row. AMAA"
  },
  {
    "url": "t3_ywczo",
    "name": "IAmA Convicted Felon. Served years in Texas Prison. AMA"
  },
  {
    "url": "t3_ywuei",
    "name": "I have terminal cancer, and will be flying out to Switzerland to organise my affairs with Dignitas AMAA."
  },
  {
    "url": "t3_ywyk6",
    "name": "IamA teenage dad who has a weekend job and is a full time university student, AMA!"
  },
  {
    "url": "t3_yx3eq",
    "name": "A year ago Reddit frontpaged a video I directed called Sexy Saxman. Since then, it's been a wild ride leading up to RollingStone featuring my latest music video! I am Mike Diva, AMA!"
  },
  {
    "url": "t3_yxala",
    "name": "I am pen pals with deathrow inmate Richard Ramirez AKA The Night Stalker. AMA."
  },
  {
    "url": "t3_yxs7b",
    "name": "IAmA a butcher by trade...ask me anything!"
  },
  {
    "url": "t3_yyce8",
    "name": "Iama Electrical Engineer for one of the UKs Big 6 energy suppliers, working at the control centre at head office. Pretty big difference to what we tell the public to what we know. AMA. "
  },
  {
    "url": "t3_yyewq",
    "name": "IAmA New York City underground poker player/grinder/rounder .. AMA"
  },
  {
    "url": "t3_yylef",
    "name": "IAMA Female Engineer at a Surface Coal Mine in Texas... AMA"
  },
  {
    "url": "t3_yywu6",
    "name": "IAmA  Rhys Thomas Freddie Mercury documentary director - AMAA"
  },
  {
    "url": "t3_yyxxt",
    "name": "I am Terry Crews - AMA"
  },
  {
    "url": "t3_yz23l",
    "name": "I am Palmer Luckey, Designer of the Oculus Rift -- AMA!"
  },
  {
    "url": "t3_yz694",
    "name": "I started kindergarten today AMAA"
  },
  {
    "url": "t3_yz7hf",
    "name": "I am Jordan Hastings of Alexisonfire and a bunch of other bands.  AMA"
  },
  {
    "url": "t3_yz7w5",
    "name": "I was one of the Final 14 people to stay on Halo 2 after Microsoft ended its Xbox Live Service, AMA."
  },
  {
    "url": "t3_yzcc9",
    "name": "IwasA TSA checked baggage officer AMAA"
  },
  {
    "url": "t3_yzoft",
    "name": "IAmA Recently Employed Google Maps Driver. I drive the car that takes pictures for Street View. AMA"
  },
  {
    "url": "t3_z0npw",
    "name": "I worked with emotionally disturbed children in a residential treatment facility and I've seen some crazy things, AMAA"
  },
  {
    "url": "t3_z156v",
    "name": "I am Dino Stamatopoulos, famed comedy writer, creator of Moral Orel and Mary Shelley's Frankenhole, Community's very own Starburns, and Executive Producer of Charlie Kaufman's Anomalisa, Ask me Anything!! "
  },
  {
    "url": "t3_z1af7",
    "name": "We are Overhaul Games, the team behind Baldur's Gate: Enhanced Edition. Ask us (almost) anything!"
  },
  {
    "url": "t3_z2cbp",
    "name": "IAmA retired U.S. soldier who was blown up by a vehicle-borne IED in Afghanistan. AMA"
  },
  {
    "url": "t3_z2gq4",
    "name": "I am a YouTuber specializing in hardware for gaming PCs AMA."
  },
  {
    "url": "t3_z2n65",
    "name": "IAmA - I was kidnapped in Mongolia and survived"
  },
  {
    "url": "t3_z2v35",
    "name": "I have taken 4 showers in the last 5 months!! I am homeless. Started 148 days ago at Jacksonville beach FL and have now walked (no rides at all) to Flagstaff AZ and on my way to the pacific. I'm homeless all the way too. Started this walk with no food/money @hobo_nick (twitter/instagram)"
  },
  {
    "url": "t3_z3b4g",
    "name": "I Am Alex Roy, Cannonball NY-LA Driving Record Holder..."
  },
  {
    "url": "t3_z3n00",
    "name": "I am a wife of a pedophile who distributed child pornography. AMA."
  },
  {
    "url": "t3_z4039",
    "name": "IAmA internationally #1-ranked tournament Scrabble Player."
  },
  {
    "url": "t3_z4acu",
    "name": "I am a Janitor. AMA"
  },
  {
    "url": "t3_z4hvq",
    "name": "Per request, I am a person who accidentally killed someone. AMA."
  },
  {
    "url": "t3_z5yrv",
    "name": "I know these have been done to death, but I've got some time to kill... IAMA Funeral Director/Mortician. AMAA"
  },
  {
    "url": "t3_z6ufq",
    "name": "IAmA hardcore Mormon who will tell you what we actually believe rather than skirting around the issues.  AMA"
  },
  {
    "url": "t3_z74wu",
    "name": "IAmA...Labor and delivery nurse (RN)"
  },
  {
    "url": "t3_z7i9v",
    "name": "IAmA guy who drew a dragon for Samsung that went viral and landed me a free custom Galaxy S3, AMA."
  },
  {
    "url": "t3_z7r49",
    "name": "IAMA person who had their school taken over by Nickelodeon. AMA (This time with proof)"
  },
  {
    "url": "t3_z8c6n",
    "name": "IAmA Farmer AMA"
  },
  {
    "url": "t3_z8gvf",
    "name": "IAMA Cirque Du Soleil acrobat AMA."
  },
  {
    "url": "t3_z8jj3",
    "name": "IAmA Burger King Employee AMA"
  },
  {
    "url": "t3_z8l44",
    "name": "IAm the project lead on Planetary Annihilation the successfully kickstarted RTS game AMAA"
  },
  {
    "url": "t3_z8n1s",
    "name": "IAmA NBC/CBS/ESPN Camera Operator for sports &amp; television shows. My eyes are your eyes. AMA!"
  },
  {
    "url": "t3_z8qwl",
    "name": "IAMA Former Soviet Red Army Sergeant, stationed in a Siberian prison camp during the cold war from '71-'73. AMA "
  },
  {
    "url": "t3_z99uw",
    "name": "I am a stay-at-home father to a three-year-old boy who has had two gay dads since his birth.  AMA"
  },
  {
    "url": "t3_zakkz",
    "name": "I AmA former Biggest Loser contestant. Who would be interested in an AMA with me?"
  },
  {
    "url": "t3_zaw2h",
    "name": "I am the location scout for the show Breaking Bad AMA"
  },
  {
    "url": "t3_zb1jw",
    "name": "IAm a rare female with Microphilia. Pretending I am 4 inches tall takes up much of my life and screws with my relationships. AMA"
  },
  {
    "url": "t3_zb7nx",
    "name": "I AmA black teen that was adopted by white people a few weeks after birth. AMA"
  },
  {
    "url": "t3_zc3ro",
    "name": "I am a hitchhiker who has hitched almost 10,000 miles around the US."
  },
  {
    "url": "t3_zca2y",
    "name": "I Am A Best Selling Author - Richard La Ruina (AMA)"
  },
  {
    "url": "t3_zchnb",
    "name": "Ive appeared on NBC, ABC, BBC, NPR, and testified before Congress about natl security, future tech, and the US space program.  Ive worked for the Defense Intelligence Agency and Ive been declared an Enemy of the People by the government of China.  I am Nicholas Eftimiades, AMAA."
  },
  {
    "url": "t3_ze0a4",
    "name": "IAmA former meth lab operator, AMA (update, I may be writing a book about it)"
  },
  {
    "url": "t3_ze6sp",
    "name": "I AmA former Apple Store Genius. AMA"
  },
  {
    "url": "t3_zec4p",
    "name": "IAMA journalist covering Parliament Hill and Canadian politics in general"
  },
  {
    "url": "t3_zej2n",
    "name": "IAM Wil Schroter, Founder of 8 Web Companies.  AMA"
  },
  {
    "url": "t3_zenas",
    "name": "I was a two time contestant on Survivor, AMA."
  },
  {
    "url": "t3_zer1a",
    "name": "IAm the Editor in Chief at Rotten Tomatoes.  AMA"
  },
  {
    "url": "t3_zeumh",
    "name": "It was suggested by a fellow Redditor that I should do this. I work for the world's #1 beverage company, Coca Cola AMA."
  },
  {
    "url": "t3_zeyff",
    "name": "Hi, I'm Natalie Morales. You may remember me from such tv shows as The Newsroom, Parks &amp; Rec, White Collar and most importantly, The Middleman. AMA!"
  },
  {
    "url": "t3_zf9fb",
    "name": "IAmA former Disneyland Snow White. AMA"
  },
  {
    "url": "t3_zfc7g",
    "name": "IAmA Hooters Girls AMA"
  },
  {
    "url": "t3_zfg9v",
    "name": "I am the 2012 Air Guitar World Champion.  AMA"
  },
  {
    "url": "t3_zh38t",
    "name": "IAmA Victoria Secret Quality Engineer AMAA (AMAA and not AMA because things can get out of hand fast :) )"
  },
  {
    "url": "t3_zhcpc",
    "name": "Wondering if anyone would be interested in Talking to a Truck driver since many people have various beliefs about truck driving."
  },
  {
    "url": "t3_ziboa",
    "name": "I was raised by deaf parents, AMA"
  },
  {
    "url": "t3_ziia0",
    "name": "I am jmtb02, I make Flash games.  Achievement Unlocked, This is the Only Level, Hedgehog Launch, Coinbox Hero, Exit Path, Treadmillasaurus Rex, Epic Combo, Dark Cut, and Ball Revamped are some of them.  I love elephants, and I love you.  AMAAAAAAA."
  },
  {
    "url": "t3_zikkv",
    "name": "IAmA 9 year Microsoft veteran that left last year to start my own software company. AMA about Microsoft, my decision to leave, the trials of building your own start-up, or anything else!"
  },
  {
    "url": "t3_zirzc",
    "name": "I caught Aircraft on a Carrier, I also once saw a man's head ripped from his body by an F-18. AMAA about the military, navy, or accident."
  },
  {
    "url": "t3_zj9uv",
    "name": "I led the criminal investigation into the Abu Ghraib prisoner abuse scandal. AMAA"
  },
  {
    "url": "t3_zjhae",
    "name": "I am Josh Robert Thompson, actor/comedian (Geoff Peterson on The Late Late Show)"
  },
  {
    "url": "t3_zk0uo",
    "name": "As Requested: When I was 12, I was a contestant on Nikelodeon's Legends of the Hidden Temple. AMA!"
  },
  {
    "url": "t3_zk526",
    "name": "IAMA herion addict currently withdrawing from 2 years of herion addiction AMA "
  },
  {
    "url": "t3_zkma8",
    "name": "I Am A Etiquette Expert AMA "
  },
  {
    "url": "t3_zkru6",
    "name": "I am in the hospital for having a blood platelet count of 3. AMA"
  },
  {
    "url": "t3_zm6vv",
    "name": "By Request: IAmA person who was kidnapped at 13 by an internet predator. AMAA"
  },
  {
    "url": "t3_zmlk1",
    "name": "As requested, IAmA female doomsday prepper AMA"
  },
  {
    "url": "t3_zmzpv",
    "name": "I'm a Flight Attendant... What do you want to know?"
  },
  {
    "url": "t3_znezp",
    "name": "IAmA muslim girl and I'm married to a man my parents choose for me. AMA"
  },
  {
    "url": "t3_znu6f",
    "name": "I am Kayden Kross - Adult Film Star, Writer and Star of the Nekrogoblikon music video. AMA!"
  },
  {
    "url": "t3_zo0d0",
    "name": "I have been in non-stop physical pain for nearly 3 years. AMA"
  },
  {
    "url": "t3_zo4ff",
    "name": "We've received a lot of media attention lately and its been pretty negative.  If you have any questions I'll try to give you answers.  IAmA cop in los angeles. AMAA"
  },
  {
    "url": "t3_zph2l",
    "name": "I was a student in an Islamic School in NJ when the events of 9/11 took place. AMA."
  },
  {
    "url": "t3_zpx04",
    "name": "By Request: I know a thing or two about making money on YouTube AM(Almost)A"
  },
  {
    "url": "t3_zq3kt",
    "name": "IAmA Black Moth Super Rainbow IAmAlsoA TOBACCO"
  },
  {
    "url": "t3_zqrkf",
    "name": "In response to the guy with green balls: I've had Forniers gangrene and I've lived to tell the tale. AMA "
  },
  {
    "url": "t3_zrhtf",
    "name": "IAm W. Kamau Bell. Political comedian and host of Totally Biased on FX."
  },
  {
    "url": "t3_zs2iq",
    "name": "I am a graduated mortician who specialized in body restoration/reconstruction and has worked on murder, suicide, car accident, decapitation and many other difficult cases  AMA"
  },
  {
    "url": "t3_zse2g",
    "name": "I am Val Valentino the Masked Magician AMA"
  },
  {
    "url": "t3_zswn3",
    "name": "I was a private investigator for two years. Life on the road, hilariousness to boot!  AMA"
  },
  {
    "url": "t3_zt1n6",
    "name": "I am Andy Weir, and I wrote The Egg. AMA."
  },
  {
    "url": "t3_ztsho",
    "name": "IAMA ultra-conservative Mennonite. AMAA."
  },
  {
    "url": "t3_ztsk0",
    "name": "IAMA Dan of The Dan Plan"
  },
  {
    "url": "t3_zttbv",
    "name": "We are Onion Digital Studios, the writers and creators of Sex House AUsA!"
  },
  {
    "url": "t3_zuhy9",
    "name": "IAmA Native American who grew up on a Native American Reservation. AMA"
  },
  {
    "url": "t3_zvrzf",
    "name": "I am Cliff Bleszinski, Design Director at Epic Games. Co-creator of Jazz Jackrabbit, Unreal, and Gears of War. AMA."
  },
  {
    "url": "t3_zx07k",
    "name": "I am deaf with bilateral cochlear implants, a hearing device shunned by the deaf community. AMA"
  },
  {
    "url": "t3_zyxnf",
    "name": "I have a completely photographic memory AMA"
  },
  {
    "url": "t3_zz1rg",
    "name": "IAmA Academic Who Studies What, Why, and How People Learn From Video Games. AMA."
  },
  {
    "url": "t3_zzndx",
    "name": "IAmA survivor of gang rape and now work as a crisis hotline volunteer. AMA."
  },
  {
    "url": "t3_zzueg",
    "name": "I'M THE LEAD SINGER OF MATCHBOX TWENTY WITH AN HOUR TO KILL. AMA"
  },
  {
    "url": "t3_100j6s",
    "name": "I am a serving member of An Garda Sochna (the Republic of Irelands Police Service). AMAA!"
  },
  {
    "url": "t3_1011p3",
    "name": "Happy Constitution Day! To celebrate the 225th Anniversary of the signing of the United States Constitution I am a (verified) Constitutional Lawyer here to educate - AMA"
  },
  {
    "url": "t3_1012l4",
    "name": "Jay Kogen Here. Long past SIMPSONS writer.  I created many of your favorite and least favorite characters with the help of the original Simpson writers. "
  },
  {
    "url": "t3_101eu3",
    "name": "don hertzfeldt, filmmaker : AMA"
  },
  {
    "url": "t3_101eyd",
    "name": "IAM the owner of Zeus, the World's Tallest Dog! AMA!"
  },
  {
    "url": "t3_1032c3",
    "name": "Battle Rap Champion of King of the Dot - Dizaster - AMA!"
  },
  {
    "url": "t3_1036hi",
    "name": "It's been a year since the end of DADT. IAmA gay Marine. AMAA."
  },
  {
    "url": "t3_103a3s",
    "name": "I work for Comcast, and it is ruining my life. AMA"
  },
  {
    "url": "t3_103d06",
    "name": "IAM Kelly Ogden, bassist/singer in the band The Dollyrots. We're in a van driving across the US on tour. AMA!"
  },
  {
    "url": "t3_103grj",
    "name": "IAmA former nuclear missile officer who left the military to find happiness. One year later, I have a wife, a puppy and kitten, bought a new house and published a book. AMA"
  },
  {
    "url": "t3_103lyc",
    "name": "IAmA platinum selling hiphop producer AMA"
  },
  {
    "url": "t3_103t8s",
    "name": "IAmA hobo. AMA."
  },
  {
    "url": "t3_1040nz",
    "name": "IAmA Former Army National Guard EOD (Bomb Squad) Specialist, now working as a Civilian Unexploded Ordnance (UXO) technician. AMA"
  },
  {
    "url": "t3_1052ak",
    "name": "IAmA owner/operator of a small town movie theatre.  I've got all day.  AMA!"
  },
  {
    "url": "t3_10532u",
    "name": "I am a former PetSmart manager...AMA"
  },
  {
    "url": "t3_1057ql",
    "name": "I'm the Social Media Editor at Reuters, Ask Me Anything"
  },
  {
    "url": "t3_105etq",
    "name": "We Are The Far East Movement - AMA!"
  },
  {
    "url": "t3_105md1",
    "name": "We are the Runic Games dev team, creators of Torchlight II. Ask us anything!"
  },
  {
    "url": "t3_106mnr",
    "name": "IAMA overnight clerk/security at a 24 hour adult video arcade. AMA"
  },
  {
    "url": "t3_10701n",
    "name": "IAmA National Geographic archaeologist currently searching for a sunken palace in Central Asia. AMA"
  },
  {
    "url": "t3_108xkf",
    "name": "I am David Corn, Mother Jones Washington bureau chief -- AMA"
  },
  {
    "url": "t3_1093o0",
    "name": "Martavious Odoms here, I played football at Michigan and also graduated but now my focus is giving back to community.AMA "
  },
  {
    "url": "t3_109730",
    "name": "IAm Michael Legg, 25+ year game developer (17 years Westwood Studios, 9 years Petroglyph), Coder and President of Petroglyph. AMA."
  },
  {
    "url": "t3_109xgo",
    "name": "Hey! I'm Neil Grayston, I played Fargo on Eureka. AMA!"
  },
  {
    "url": "t3_10aa1i",
    "name": "I am a former Victoria's Secret Employee. Ask Me Anything!"
  },
  {
    "url": "t3_10ar7c",
    "name": "Hi-I'm Rick Ungar, columnist at Forbes.com on healthcare policy and polltics...ask me anything!"
  },
  {
    "url": "t3_10b8o9",
    "name": "IAmA #1 New York Times bestselling author named John Green. AMAA"
  },
  {
    "url": "t3_10bgi4",
    "name": "IAMA CEO of a successful business that only exists because of Reddit. AMA!"
  },
  {
    "url": "t3_10boch",
    "name": "IAmA Midwestern Farmer. I know a lot about corn. AMA!"
  },
  {
    "url": "t3_10bpel",
    "name": "IAmA Live Nude Model for College Art Classes, AMA! NSFW"
  },
  {
    "url": "t3_10ckgo",
    "name": "IAmA concussion victim who lost two senses because of the accident. AMA!"
  },
  {
    "url": "t3_10cqv7",
    "name": "IAmA Neurosurgeon AMA but use your brain."
  },
  {
    "url": "t3_10ds35",
    "name": "IAmA 19 year old with autism, AmA."
  },
  {
    "url": "t3_10ec3c",
    "name": "IAmA English Teacher in South Korea. AMA!"
  },
  {
    "url": "t3_10ek49",
    "name": "IAmA Third Generation Tobacconist my family has been in the tobacco business for over 38 Yrs AmA"
  },
  {
    "url": "t3_10f0ds",
    "name": "IAMA Girl who was fired due to a Facebook glitch. AMAA."
  },
  {
    "url": "t3_10f1ky",
    "name": "IAm Rian Johnson, filmmaker"
  },
  {
    "url": "t3_10f8re",
    "name": "IAmA Bee Keeper"
  },
  {
    "url": "t3_10g5ip",
    "name": "I am the Muslim girl who led a double life and posted here last year about escaping... well, I've escaped."
  },
  {
    "url": "t3_10g8gi",
    "name": "I'm Shane Smith from VICE and I went to Juarez to meet Mitt Romney's Mexican Mormon family and investigate their war against the drug cartels. Ask Me Anything."
  },
  {
    "url": "t3_10gnc1",
    "name": "My mother is a hoarder. AMA"
  },
  {
    "url": "t3_10h1k3",
    "name": "IAmA Flight Attendant (for a major airline...which I won't disclose) AMA!"
  },
  {
    "url": "t3_10h8cm",
    "name": "IAMA daughter of parents who lived through the Khmer Rouge regime in Cambodia until its fall. I am with my mom here who will answer any questions at all! She lost her parents and many of her siblings, fought off soldiers, joined a resistance to escape a forced marriage, and so much more."
  },
  {
    "url": "t3_10hcs3",
    "name": "IAmA gay-conversion therapy survivor. AMA!"
  },
  {
    "url": "t3_10hze7",
    "name": "IAmA person who trainhopped and squatted all across the US during the summer and sporadically throughout the year, for 10+ years...AMA"
  },
  {
    "url": "t3_10imdi",
    "name": "As per a few requests, IAmA 21 year old female who was bottled at the age of 16. Resulting in 70 stitches, half of my face paralyzed and diagnosed with PTSD. Ask me anything. Possibly NSFW (Gore Pictures). "
  },
  {
    "url": "t3_10it3q",
    "name": "IAMA math grad student.  Ask me WHY you're learning a concept, and I'll do my best to give you the REAL answer."
  },
  {
    "url": "t3_10kalb",
    "name": "Iama cyclist 1,400 miles into a ~4,000 mile bike trip from LA to NYC. AMA!"
  },
  {
    "url": "t3_10kffd",
    "name": "Hi Reddit! I'm Jarett Cale, AKA Jeremy from Pure Pwnage. AMA!"
  },
  {
    "url": "t3_10m7qa",
    "name": "IAMA Park Park Ranger, AMA"
  },
  {
    "url": "t3_10m8yn",
    "name": "I work as an advocate for people with student loans. Ask me anything."
  },
  {
    "url": "t3_10md0f",
    "name": "IAMA - I am actress Sarah Megan Thomas here from the rowing movie Backwards starring James Van Der Beek. "
  },
  {
    "url": "t3_10mrkx",
    "name": "IAm the Houston Rockets GM, AMA"
  },
  {
    "url": "t3_10oy0e",
    "name": "IAmA 21st Century Hobo (I ride freight trains around the U.S) and I love it.  AmA"
  },
  {
    "url": "t3_10ppo1",
    "name": "IAmA KFC Manager AMA"
  },
  {
    "url": "t3_10psj3",
    "name": "I am Adam Savage. Co-host of Mythbusters. AMA"
  },
  {
    "url": "t3_10s7kf",
    "name": "I just walked 2,655 miles from Mexico to Canada. AMA."
  },
  {
    "url": "t3_10scqt",
    "name": "I am currently working in Antarctica at the USA's smallest outpost, Palmer Station.  AMA."
  },
  {
    "url": "t3_10tvc4",
    "name": "I am a host for speedating and singles events for over 5 years. I've met some people and seen some things. AMA."
  },
  {
    "url": "t3_10tyhf",
    "name": "I am a multimillionaire AMAA"
  },
  {
    "url": "t3_10uf1l",
    "name": "IAMA Multi-Millionaire (By Request"
  },
  {
    "url": "t3_10unny",
    "name": "IAmA Underwater Archaeologist AMA"
  },
  {
    "url": "t3_10vaxg",
    "name": "I just got back from a week long visit to North Korea. AMAA! "
  },
  {
    "url": "t3_10vjy0",
    "name": "I spent the last 12 months learning MIT's 4-Year computer science curriculum, without taking classes. AMA"
  },
  {
    "url": "t3_10vkas",
    "name": "IMA former Air Force Pilot now Flying for a Major Airline - AMA"
  },
  {
    "url": "t3_10vtb7",
    "name": "Im Lori Greiner, Shark on ABCs Shark Tank. AMA!"
  },
  {
    "url": "t3_10wppg",
    "name": "I was a character performer at Walt Disney World.  - AMA"
  },
  {
    "url": "t3_10xsj0",
    "name": "Per the interest in the Askreddit thread about prison, I am a Prison Chaplain, AMAA"
  },
  {
    "url": "t3_10xvdb",
    "name": "I'm Matt Yglesias, Slate writer. I cover business and economic policy.  "
  },
  {
    "url": "t3_10zq85",
    "name": "I just rode a unicycle 2,754 miles from Canada to Mexico. AMA"
  },
  {
    "url": "t3_10zwkn",
    "name": "I am an MMA fighter one month and five days away from my next fight in Tallahassee, FL. AMA!"
  },
  {
    "url": "t3_111gao",
    "name": "AMA Yasemin Arslan aka Lilith from Borderlands 2"
  },
  {
    "url": "t3_111lbz",
    "name": "IAMA fat fatty who just had 85% of his stomach cut out (a.k.a. Vertical Sleeve Gastrectomy) - AMA"
  },
  {
    "url": "t3_111rud",
    "name": "IAmA 18yr old female with Aspergers Syndrome who physically sees people as colours. AMA"
  },
  {
    "url": "t3_111s4w",
    "name": "IamA Britanni Johnson aka Angel from Borderlands 2. AMA"
  },
  {
    "url": "t3_113h9z",
    "name": "I live in Iceland AMA!"
  },
  {
    "url": "t3_113p97",
    "name": "IAmA Former Navy Test Pilot who crashed the 727 on Discovery Channel's Plane Crash airing tonight at 8 EST, AMA."
  },
  {
    "url": "t3_113tre",
    "name": "I am Osric Chau. Actor (Supernatural, Halo 4: FUD, Fun Size, etc), Martial Artist, Advanced Placement. AMA"
  },
  {
    "url": "t3_1151qf",
    "name": "IAmA relic from the 90's named Fat Kev Smith. AMA about Rampart (or movies I had something to do with)"
  },
  {
    "url": "t3_115ewt",
    "name": "IAMA Current participant in the Johns Hopkins Psilocybin (aka magic mushrooms) Studies (AMA) "
  },
  {
    "url": "t3_115fid",
    "name": "I can't smell, AMA"
  },
  {
    "url": "t3_115nz4",
    "name": "IAMA erotica author making ~$1k a month from writing. AMA"
  },
  {
    "url": "t3_1160ie",
    "name": "IAmA cardiac anesthesiologist, AMAA"
  },
  {
    "url": "t3_1174qy",
    "name": "I'm Caleb Kraft, Senior Editor at Hackaday.com. Myself and possibly some writers are here to answer your questions. "
  },
  {
    "url": "t3_117boz",
    "name": "IAmA Guinness World Record Holding Breast Surgeon. I have examined 20,000 pair of breasts. I am an expert knife thrower and I have just written a book. AMA"
  },
  {
    "url": "t3_119cyf",
    "name": "IAm Marcin Kleczynski, founder and CEO of Malwarebytes. AMA."
  },
  {
    "url": "t3_11a0yu",
    "name": "I am a Elevator Mechanic for a major company, ask me anything."
  },
  {
    "url": "t3_11baqw",
    "name": "IAmA president and CEO of a large porn company - AMA!"
  },
  {
    "url": "t3_11bm9i",
    "name": " IAm Cory Doctorow, writer, blogger, and activist, AMA"
  },
  {
    "url": "t3_11c7wi",
    "name": "I'm the product of my mother being raped. AMA"
  },
  {
    "url": "t3_11cd1v",
    "name": "[UPDATED] Hello everyone, I drive the Google StreetView Car. IAMA and I'll even tell you about the new recent update and underwaterview. "
  },
  {
    "url": "t3_11djuw",
    "name": "IAmA 22 year old recently returned from 2 months alone in the Wilderness AMA!"
  },
  {
    "url": "t3_11dkyd",
    "name": "I am Angwe, the Ganker God of World of Warcraft,  AMA"
  },
  {
    "url": "t3_11fhpm",
    "name": "I am a cardiac surgeon, part of my job is to harvest hearts from living organ donors. AMA"
  },
  {
    "url": "t3_11fsi7",
    "name": "IAmA graduate of a high school for emotionally disturbed girls. AMA."
  },
  {
    "url": "t3_11fxzp",
    "name": "IAmA seasoned hotel executive who has spent the last 11 years working in middle to upscale full-service hotels. I've got some crazy stories. AMA. "
  },
  {
    "url": "t3_11grnp",
    "name": "IAMA Freemason AMA"
  },
  {
    "url": "t3_11i7n4",
    "name": "I am a criminal defense lawyer, AMA."
  },
  {
    "url": "t3_11if8h",
    "name": "I Am The McElroy Brothers, hosts of My Brother, My Brother and Me and WORLD EXPERTS. AMA"
  },
  {
    "url": "t3_11ikir",
    "name": "IAmA former Enterprise Rent-a-Car Branch Manager with crazy stories"
  },
  {
    "url": "t3_11iox8",
    "name": "We are Chris Avellone, Tim Cain, and Josh Sawyer from Obsidian Entertainment. AMA"
  },
  {
    "url": "t3_11ipcs",
    "name": "We are NZXT's Product Development Team AMA!"
  },
  {
    "url": "t3_11it68",
    "name": "IAMA Professional Wrestler"
  },
  {
    "url": "t3_11j0p1",
    "name": "I'm Jesse Thorn, public radio host, comedy podcaster, menswear blogger and owner of MaximumFun.org. AMA."
  },
  {
    "url": "t3_11j421",
    "name": "HI I'm Lights. I like to synth. AMA!"
  },
  {
    "url": "t3_11k8p4",
    "name": "As requested, IAMA person whose parents found her on porn sites. AMA"
  },
  {
    "url": "t3_11kqg3",
    "name": "IAmA Substance Abuse Nurse AMA."
  },
  {
    "url": "t3_11kt8o",
    "name": "IAMA Prufrock451, whose Reddit story Rome Sweet Rome became a Warner Brothers screenplay"
  },
  {
    "url": "t3_11l5ai",
    "name": "IAmA Teenager With Kleine-Levin Syndrome (Sleeping Beauty Syndrome) AMA. "
  },
  {
    "url": "t3_11le3v",
    "name": "IAmA professional lacrosse player and musician in Con Bro Chill. AMA"
  },
  {
    "url": "t3_11lv8n",
    "name": "I'm the arranger behind 'Kanto Symphony,' a 78-minute orchestral tribute to the classic 8-bit music of Pokmon Red and Blue. AMA"
  },
  {
    "url": "t3_11mqky",
    "name": "IAmA 16-year-old girl who has metres of plastic tubing inside my body to stop my head exploding."
  },
  {
    "url": "t3_11n1xk",
    "name": "I am Frank Klepacki - Audio Director, Composer and Sound Designer for Petroglyph.  Known for my soundtracks in the Command &amp; Conquer First Decade, and a certain track named Hell March.  Currently working on End OF Nations!"
  },
  {
    "url": "t3_11ogii",
    "name": "I am a Juggalette, AMA"
  },
  {
    "url": "t3_11oiud",
    "name": "IAmA teenaged girl who recently had major spinal surgery that went wrong, leaving me with permanent nerve damage. AMA."
  },
  {
    "url": "t3_11olyh",
    "name": "IAmA person living with an extreme version of Hyper Mobility Syndrome. I can dislocate all my major joints in my body at will, AMA. "
  },
  {
    "url": "t3_11ox0k",
    "name": "We're James Moody and Graham Williams - Founders of Fun Fun Fun Fest in Austin, TX. Ask us anything! "
  },
  {
    "url": "t3_11p3k4",
    "name": "I am Rob Zerban, Rep. Paul Ryan's congressional challenger. AMA 3"
  },
  {
    "url": "t3_11p4tl",
    "name": "IAmA Booth Babe. AMA."
  },
  {
    "url": "t3_11q10q",
    "name": "I am Mom Whose Baby Died 3 Days After Birth AMA"
  },
  {
    "url": "t3_11q2qe",
    "name": "IAmA  african american male adopted by two white parents. ask me anything"
  },
  {
    "url": "t3_11q2xs",
    "name": "IAmA second generation female pornographer AMA"
  },
  {
    "url": "t3_11rb4i",
    "name": "IAmA Professional Haunted House Actor with several years of experience, as well as an amateur makeup artist. AMA!"
  },
  {
    "url": "t3_11s2jr",
    "name": "IAMA UPS Driver AMA"
  },
  {
    "url": "t3_11s4vn",
    "name": "I am a Mormon wife in Utah"
  },
  {
    "url": "t3_11ssae",
    "name": "IAmA Professional Tattooist. AMAA. "
  },
  {
    "url": "t3_11tf40",
    "name": "IamA 19 y. old who has lived in several meth labs, over 35 different motels, and several cars.(More information in comments) AMA"
  },
  {
    "url": "t3_11tira",
    "name": "IAmA Full-time eBay seller. Need advice, tips, being scammed? I'm here to help! AMA!"
  },
  {
    "url": "t3_11uf2z",
    "name": "IamA female who was born with a complete uterine didelphys...which means I have two vaginas AMA"
  },
  {
    "url": "t3_11uihj",
    "name": "IAmA identical twin and both of us are gay.Ask me anything."
  },
  {
    "url": "t3_11uynd",
    "name": "IAMA person that helped my (then) terminally ill best friend die via physician assisted suicide earlier this year.  AMA."
  },
  {
    "url": "t3_11vaip",
    "name": "IAmA developers behind the arcade racing games Nitronic Rush and Distance. AMA"
  },
  {
    "url": "t3_11vcn7",
    "name": "I am the SO of the OP behind the I have two vaginas AMA AMA"
  },
  {
    "url": "t3_11x93y",
    "name": "IAmA female professional wrestler on the independent circuit in the US and Canada. AMA."
  },
  {
    "url": "t3_11xtuh",
    "name": "My boyfriend is blind, and I work at a day care for the mentally disabled Ask Us Anything"
  },
  {
    "url": "t3_11y1bo",
    "name": "I am Frank Spotnitz, writer and creator of Hunted, and executive producer and writer of The X-Files, AMA."
  },
  {
    "url": "t3_11yf6b",
    "name": "IAM World's Fastest Hypnotist, Sean Michael Andrews AMA"
  },
  {
    "url": "t3_11yw4w",
    "name": "IAMA(n) 82 years old Arab woman AMA. (written by her grand daughter)"
  },
  {
    "url": "t3_11zpqg",
    "name": "IAmA Zamboni Operator"
  },
  {
    "url": "t3_120qq7",
    "name": "I am Boogie2988;  Youtube comedian and vlogger, morbidly obese american, abuse survivor, and gamer. You may know me as my character Francis.  Ask me anything!"
  },
  {
    "url": "t3_120sc1",
    "name": "IAMAn NHL Executive.  AMA about the lockout."
  },
  {
    "url": "t3_122jd7",
    "name": "Hello Reddit! Jim Graves here. I am running for Congress [MN, District 6], and yes, my opponent is Michele Bachmann. AMA."
  },
  {
    "url": "t3_122zcw",
    "name": "We are the editors of The Onion and its new book The Onion Book Of Known Knowledge, ask us anything"
  },
  {
    "url": "t3_123gjs",
    "name": "I was raped by my boyfriend. AMA"
  },
  {
    "url": "t3_1250u4",
    "name": "AMA with Tim Heidecker (From Tim &amp; Eric and the new film The Comedy)"
  },
  {
    "url": "t3_125ukc",
    "name": "I am Peter Moore, the longest held hostage in Iraq, kept captive for over 2.5 years. AMA"
  },
  {
    "url": "t3_126hqp",
    "name": "IAmA synesthetic artist. I draw/paint songs, smells, names, etc., as I see them in my head. AM (or AM to draw) AA."
  },
  {
    "url": "t3_126j2x",
    "name": "IAmA Marine currently deployed. AMAA"
  },
  {
    "url": "t3_126wf0",
    "name": "IAmA extra in the last Harry Potter film. AMA."
  },
  {
    "url": "t3_127j1n",
    "name": "IAmA Madam at a (legal) brothel/escort agency, AMA."
  },
  {
    "url": "t3_128843",
    "name": "IAmA young woman from India in the US for three months now. AMAA!"
  },
  {
    "url": "t3_129hda",
    "name": "I am a (almost)former Wal-Mart employee that knew the more then an average overnight employee should. AMA!! (: "
  },
  {
    "url": "t3_129wht",
    "name": "I am Wink Yahoo, aka Scott Yaphe, from YTV's 90's game show, Uh-Oh. "
  },
  {
    "url": "t3_12a7tw",
    "name": "IAMA Touring Musician For A Band Called Attack Attack! AMA"
  },
  {
    "url": "t3_12aaba",
    "name": "I was a member of the US Army Honor Guard, AMA!"
  },
  {
    "url": "t3_12abyp",
    "name": "I am Eric Powell, creator of The Goon comic book series, AMA."
  },
  {
    "url": "t3_12azrn",
    "name": "Iama professional licensed tattoo artist who has been tattooing for twenty years in studios. AMA, I will be completely honest."
  },
  {
    "url": "t3_12bhlk",
    "name": "IAMA sex show performer and previously a ladyboy dancer of Tiffany's Show at Pattaya, Thailand.  AMAA"
  },
  {
    "url": "t3_12c44i",
    "name": "I am an Israeli soldier AMA"
  },
  {
    "url": "t3_12cbv4",
    "name": "I'm Baratunde Thurston, author of the NYT best-seller #HowToBeBlack, formerly of The Onion, now Cultivated Wit"
  },
  {
    "url": "t3_12dgdg",
    "name": "I just wrote Engadget's iPad mini review. AMA!"
  },
  {
    "url": "t3_12djxz",
    "name": "AMA I'm a fusion scientist"
  },
  {
    "url": "t3_12dv3e",
    "name": "I'm traveling round the world for 1.000 days on a 1.000 starting budget - ask me anything."
  },
  {
    "url": "t3_12exon",
    "name": "I created a company where I sell stick figure cats for $10/pop, and sold 1/3 of it to Mark Cuban on Shark Tank. AMA!"
  },
  {
    "url": "t3_12ggv0",
    "name": "IamA Prison Guard at a maximum security prison, AmA, though you may not like what you hear."
  },
  {
    "url": "t3_12grru",
    "name": "I am Chris Roberts, creator of Wing Commander, Freelancer and the upcoming Star Citizen. AMA."
  },
  {
    "url": "t3_12gsgo",
    "name": "I'm Lori Greiner - Shark on ABC's Shark Tank - back for my Reddit Fix ;-) AMA!"
  },
  {
    "url": "t3_12gy5s",
    "name": "#NoOnMeasureB IAMA Male Pornstar Keiran Lee: I've banged all of your fav pornstars, and I'm against Measure B"
  },
  {
    "url": "t3_12hclg",
    "name": "IAMA Peter Acworth CEO and Founder of Kink.com NSFW"
  },
  {
    "url": "t3_12i653",
    "name": "I am David Choe."
  },
  {
    "url": "t3_12j49k",
    "name": "Hi! I'm a porn star. My name is Sarah Shevon "
  },
  {
    "url": "t3_12j6pq",
    "name": "IAmA David Choe  Part 2! I'm going another 12 hours with my famous new butler Joseph, Anthony Bourdain, Asa Akira, Jessie Andrews, Jim Lee, Dan Wu, a monkey and more. Ask us anything."
  },
  {
    "url": "t3_12jpl2",
    "name": "IAMA first person weapons animator at Infinity Ward. My work includes Medal of Honor: Allied Assault, Call of Duty, CoD2, CoD:Modern Warfare, MW2, MW3... AMA about 1st a person animation."
  },
  {
    "url": "t3_12kt0h",
    "name": "IAmA NASA/JPL Spacecraft Mechanical Engineer.  AMA!"
  },
  {
    "url": "t3_12l8pa",
    "name": "We are a very large adoptive family and strong advocates of children waiting in the foster care system.  We have a lot of experience with adoption in all forms and want to answer your questions!  Ask Us Anything!"
  },
  {
    "url": "t3_12lgse",
    "name": "I doubt there is any interest, but hey. IAMAn Election Judge on Tuesday. AMA. "
  },
  {
    "url": "t3_12m9bw",
    "name": "IamA crew member at one of the most skeezy, ghetto, and busiest Mcdonalds' in the western US AMA, and trust me, I have seen it all."
  },
  {
    "url": "t3_12neq9",
    "name": "IAMA Google StreetView driver, and I feel for everyone involved in Sandy. I'm here to help those in need and will be driving around helping people. I'll drive you to work or the gas station. AMA. "
  },
  {
    "url": "t3_12ou9s",
    "name": "I am the father of 3 year old triplets with Autism. AMAA"
  },
  {
    "url": "t3_12p9tj",
    "name": "i am james deen ask me anything regarding measure b (mandatory condoms in porn) or performer safety and testing protocols "
  },
  {
    "url": "t3_12pqa7",
    "name": "IAmA 17 year old with a Traumatic Brain Injury and no memory of the past two years AMA"
  },
  {
    "url": "t3_12qc2h",
    "name": "IAm An English Barrister (wig-wearing court advocate). AMAA."
  },
  {
    "url": "t3_12qkvj",
    "name": "Both of my parents are deaf AMA"
  },
  {
    "url": "t3_12qw4t",
    "name": "In 1994 I quit my job, sold almost everything I owned, bought a boat and went sailing for three years.  AMA"
  },
  {
    "url": "t3_12rogb",
    "name": "I was in prison for 23 days in Guangzhou, China. AMA"
  },
  {
    "url": "t3_12tey8",
    "name": "IAmA Professional Recruiter.  Wondering if I can share any words for job seekers out there."
  },
  {
    "url": "t3_12tuwk",
    "name": "I Am The Female Co-Host of The Young Turks, YouTube's Largest News/Politics Show, Ask Me Anything"
  },
  {
    "url": "t3_12utyx",
    "name": "IamA toy design student, yes it's an actual major.. AMA!"
  },
  {
    "url": "t3_12vban",
    "name": "IAmA trader for a bulge bracket I-Bank on their NY foreign exchange desk, aka a market maker.  AMAA."
  },
  {
    "url": "t3_12vbpw",
    "name": "I am the singer from All That Remains."
  },
  {
    "url": "t3_12vg2c",
    "name": "I am Lizzy Caplan. Ask me things. About things."
  },
  {
    "url": "t3_12vpfc",
    "name": "IAmA phone sex operator, ask me anything!"
  },
  {
    "url": "t3_12wbn5",
    "name": "IAMA 21yr old woman who just gave her baby up for adoption today. AMA"
  },
  {
    "url": "t3_12x8lc",
    "name": "IAmA survivor of the 1932-1933 Ukrainian Holodomor, the man-made famine in ukraine that killed almost 10 million people. AMA"
  },
  {
    "url": "t3_12zi6u",
    "name": "I am an archaeology grad student that specializes in ancient Mesoamerica, AMA"
  },
  {
    "url": "t3_130jqy",
    "name": "I Am A Private Chef Who Works For A Multi-Millionaire. AMA"
  },
  {
    "url": "t3_130yts",
    "name": "I will answer every single question. AMA."
  },
  {
    "url": "t3_131zr4",
    "name": "IAmA white male that worked for one year at the most CROOKED high end used car dealership in the Bronx, NY.  "
  },
  {
    "url": "t3_132596",
    "name": "IAmA prostitute/escort/call-girl/whathaveyou. AMA."
  },
  {
    "url": "t3_132dg0",
    "name": "IAmA employee at the Wizarding World of Harry Potter. AMAA"
  },
  {
    "url": "t3_132evt",
    "name": "We are the Yes Men AMA"
  },
  {
    "url": "t3_132f05",
    "name": "IAmA winner of the Hugh M. Hefner First Amendment Award and lead the repeal of Louisianas creationism law with the support of 78 Nobel laureates.  Ive also worked on the connection between creationism and school voucher programs.  AMA about these creationist vouchers."
  },
  {
    "url": "t3_132l2v",
    "name": "I hold the Guinness World Record for the longest breath hold of 22 minutes, AND for the longest freedive under ice on a single breath of air (236 feet) in speedos. My name is Stig Severinsen, I am a four time freediving world champion, and hold a PhD in Medicine. Ask me anything.  "
  },
  {
    "url": "t3_132ogw",
    "name": "IamA porn shop clerk "
  },
  {
    "url": "t3_134i7o",
    "name": "I Am Steve Chao, Al Jazeera correspondent in Kabul who just got back from Helmand Province in Afghanistan. Ask me anything!"
  },
  {
    "url": "t3_134rvs",
    "name": "Stanley Kubrick's daughter Katharina Kubrick, and grandson Joe. AMA"
  },
  {
    "url": "t3_134uor",
    "name": "I am Eric Idle.  I am not lazy.  I am not dead. My Dick is available today. AMA."
  },
  {
    "url": "t3_134vvm",
    "name": "I Am Sean Carroll, theoretical physicist and author of a new book about the Higgs boson. Ask me anything."
  },
  {
    "url": "t3_134vxd",
    "name": "We are Microsoft University Recruiters, AUsAA"
  },
  {
    "url": "t3_136nms",
    "name": "I am (another) former Fox News Channel employee, AMA."
  },
  {
    "url": "t3_1372wx",
    "name": "IAMA BBQ restaurant owner in the south. I've owned my own restaurant for 6 years and been in the BBQ restaurant business for a total of 10 years. Ask Me Anything. "
  },
  {
    "url": "t3_137qi9",
    "name": "IAmA I have a not well know condition called 'MD' or Maladaptive Daydream Disorder since I was 6."
  },
  {
    "url": "t3_137uxk",
    "name": "I am a former Marine Machine Gunner that was in Afghanistan for 8 Months, blown up half way through the Deployment and got back in the fight 3 weeks later.  Was in some of the most intense combat since Vietnam. I have 14 confirmed kills. AMA"
  },
  {
    "url": "t3_139455",
    "name": "I am Robert Greene, author of The 48 Laws of Power, The Art of Seduction, and others -- AMA"
  },
  {
    "url": "t3_139uc0",
    "name": "IAmA High School Principal.  AMAA."
  },
  {
    "url": "t3_13aiz2",
    "name": "IAmA Israeli Soldier, AMA"
  },
  {
    "url": "t3_13asl2",
    "name": "IAMA Repoman for lost merchandise for a large rent to own company and every year so far I have had to take presents from under the tree with the kids crying and watching... AMA"
  },
  {
    "url": "t3_13asu4",
    "name": "IAmA Professional Footballer who has played for England National Team, The Premiership and Championship "
  },
  {
    "url": "t3_13cmy1",
    "name": "IaMa Ojibwe/Native American woman that studied political science &amp; history, AMA."
  },
  {
    "url": "t3_13cvjh",
    "name": "As requested, I Am A 911 Public Safety Dispatcher. AMA"
  },
  {
    "url": "t3_13d6my",
    "name": "IAmA employee of Walmart. Yes, it really is as weird as you'd think. Ask me anything."
  },
  {
    "url": "t3_13e98n",
    "name": " I'm Steve, creator of Beat Hazard &amp; solo indie game developer, AMA "
  },
  {
    "url": "t3_13eda4",
    "name": "IAmA 29 Year Old Private Military Contractor AMAA."
  },
  {
    "url": "t3_13elaw",
    "name": "Was in a paralyzing ATV accident while going ~3mph.  Oh, and I'm a girl.  AMA"
  },
  {
    "url": "t3_13f0ib",
    "name": "IAmAn 18-year-old girl who had a breast reduction 6 months ago. I'm back with progress photos and here to answer anything you want to know. AMA"
  },
  {
    "url": "t3_13f3ob",
    "name": "Former sex addict now turned sex/relationship therapist. AMA"
  },
  {
    "url": "t3_13ftzm",
    "name": "I own a happy ending massage parlor. AMA!"
  },
  {
    "url": "t3_13gd28",
    "name": "IAmA guy who shot my father in self defense AMA"
  },
  {
    "url": "t3_13gsxi",
    "name": "IAMA MISTER TORGUE AND WILL ANSWER EXPLOSION-RELATED QUESTIONS"
  },
  {
    "url": "t3_13h5l4",
    "name": "IAmA 23-year-old professional high school janitor AMA"
  },
  {
    "url": "t3_13huic",
    "name": "I have penectomy last year and my penis, testes and scrotum were removed.  AMA"
  },
  {
    "url": "t3_13hyzl",
    "name": "IAMA TSA Officer/Agent, AMAA"
  },
  {
    "url": "t3_13j00h",
    "name": "IAmA exotic dancer. Got any questions about strip clubs? Curious about the backstage? Wanna know what we're thinking? AMA! "
  },
  {
    "url": "t3_13j3n0",
    "name": "I Am Peter Ramsey, Director of RISE OF THE GUARDIANS. AMA!"
  },
  {
    "url": "t3_13j5rs",
    "name": "I am Joe Penna. I make movie things. AMA"
  },
  {
    "url": "t3_13k163",
    "name": "I am a severe stutterer who has been living with a speech impediment for my entire life. AMA."
  },
  {
    "url": "t3_13k9qm",
    "name": "I am a London Underground employee. AMA."
  },
  {
    "url": "t3_13kv1c",
    "name": "I am Fred Wester; CEO of Paradox Interactive, publisher and developer of games"
  },
  {
    "url": "t3_13lf8p",
    "name": "IAMA close friend of Charlie Sheen since 1985. AMA"
  },
  {
    "url": "t3_13lx09",
    "name": "As Requested: I was on Pimp My Ride. AMA"
  },
  {
    "url": "t3_13m6td",
    "name": "I travel around the world for 1000 days on a 1000 euro starting budget. ask me anything."
  },
  {
    "url": "t3_13nqnl",
    "name": "IamA 18-yr old boy who was raised by my two lesbian mothers. AMA."
  },
  {
    "url": "t3_13nyqa",
    "name": "IAmA UK National Lottery winner. AMAA"
  },
  {
    "url": "t3_13ofu7",
    "name": "I competitively showed llamas for 6 years and went to nationals and placed in the top ten. AMA."
  },
  {
    "url": "t3_13p02v",
    "name": "I crossed the US-Mexico border illegally with my brother when I was 16 yrs old. I went to an Ivy League University. I am 26 yrs old, I am working at a biomedical lab at a different Ivy League institution now. I am in the process of becoming an US citizen - AMA"
  },
  {
    "url": "t3_13pmkl",
    "name": "I am a single marine living in Okinawa, Japan. AMA"
  },
  {
    "url": "t3_13pske",
    "name": "IAMA female line cook at a popular high-end New Orleans restaurant. AMA!"
  },
  {
    "url": "t3_13q4qw",
    "name": "I am David Rees, founder of Artisanal Pencil Sharpening. AMA (11/24 7-9 PM EST)"
  },
  {
    "url": "t3_13q8ja",
    "name": "IAmA serial inventor with 120+ patents to my name. I've started dozens of successful businesses from my inventions.  AMAA"
  },
  {
    "url": "t3_13qars",
    "name": "IAmA prolific lucid dreamer with years of self-taught experience, and the author of numerous well-regarded guides on the topic. AMAA"
  },
  {
    "url": "t3_13rs46",
    "name": "I am Benjaman Kyle, an amnesiac who woke up with no memories in 2004. Nobody knows who I am. AMA"
  },
  {
    "url": "t3_13s7hb",
    "name": "I am a senior VIP host in Las Vegas. I get paid to party with celebrities and athletes and do what it takes to make sure they have a good time. AMA"
  },
  {
    "url": "t3_13tcxh",
    "name": "I had an accidental unassisted home birth AMA"
  },
  {
    "url": "t3_13tgdm",
    "name": "IAMA. The creator/EP of a cool new 6 hour TV series that uses science to reveal the truth about stuff you're interested in -- that I wrote, produced, and edited entirely in my garage. Oh, and I paid for it myself, too. Meaning: I own it. Not some asshole TV network. AMA."
  },
  {
    "url": "t3_13tpxt",
    "name": "We are Kevin Westgarth, David Backes, and Mathieu Schneider, current and former NHL players, AMA"
  },
  {
    "url": "t3_13tyfh",
    "name": "IAmA Jeweler. Come ask me about the workings of the jewelry trade, again!"
  },
  {
    "url": "t3_13uj0s",
    "name": "IAmA Former Navy Test Pilot, Published Author, and the guy who crashed the 727 in Mexico for Discovery Channel, AMA"
  },
  {
    "url": "t3_13v8os",
    "name": "Iama person who hasn't left their house in over 5 months. AMA"
  },
  {
    "url": "t3_13vpwt",
    "name": "IAmA female horror/thriller writer who got fed up, self-published, and was discovered by a publishing house. To date, I've sold 4 novels and movie rights to my first book, all in 1.5 years. AMA!"
  },
  {
    "url": "t3_13xfn5",
    "name": "IAMA Woman with synesthesia. Taste-Emotion, Smell-Shape, and Letters (alphabet)- Colour. AMA "
  },
  {
    "url": "t3_13xybd",
    "name": "I've been an investment banker working literally on Wall Street since I graduated 19 months ago. AMA"
  },
  {
    "url": "t3_13y1zq",
    "name": "IAMA Multifamily (Apartments) Landlord, ama about crazy tenants, sh@#&amp;ty neighbors, management, maintenance, and your rights as a tenant or prospective tenant. "
  },
  {
    "url": "t3_13y3y0",
    "name": "IAmA Anthony Burch, lead writer of Borderlands 2 and co-creator of the web series HAWP. I'm joined by Matt Armstrong, creative director of BL1 and guy-who-did-lots on BL2."
  },
  {
    "url": "t3_13y4y4",
    "name": "I am Dr. Cat, a 30 year veteran game designer/programmer/writer. I've worked on the Ultima series, Furcadia, Ravenwood Fair, and dozens more. Ask me anything!"
  },
  {
    "url": "t3_13y77r",
    "name": "I Am Derek Haas, novelist/screenwriter/TV creator, AMA"
  },
  {
    "url": "t3_13z1fx",
    "name": "IAmA Korean raised in America for 20+ years but now in South Korea carrying out my 2 year mandatory military service. AMA"
  },
  {
    "url": "t3_13zatg",
    "name": "I have 15 years of experience on Wall St., and am here to defend free market economics, abolishing minimum wage, lowering taxes, etc AMA"
  },
  {
    "url": "t3_13zjjf",
    "name": "IAmA Painter &amp; Decorator sub-contracted to redecorate council houses, flats and buildings. I have seen things you would not believe. AMA."
  },
  {
    "url": "t3_13zo2f",
    "name": "IAMA Former Auto Theft Detective for a Major Metro Area in the USA AMAA"
  },
  {
    "url": "t3_13zyz7",
    "name": "IAMA former Amazon.com warehouse employee. Ask me anything."
  },
  {
    "url": "t3_1416x8",
    "name": "IAm Travis Tedford, Spanky in the 94' remake of the little rascals, AMA"
  },
  {
    "url": "t3_141fp2",
    "name": "IAmA Marine that was deployed to Fallujah, Iraq in 2004 during both Battles of Fallujah. AMAA."
  },
  {
    "url": "t3_141yh9",
    "name": "I was a personal assistant to a Hollywood actress AMAA"
  },
  {
    "url": "t3_141ze4",
    "name": "I'm Robert King, veteran conflict photojournalist, and I've spent much of this year with the Free Syrian Army on the front lines of the Syrian civil war. Ask me anything."
  },
  {
    "url": "t3_1423zr",
    "name": "Kevin Smith &amp; Jason Mewes, of JAY &amp; SILENT BOB. AMA"
  },
  {
    "url": "t3_1427e3",
    "name": "I Was A Female Corrections Officer In An All Male Max Prison-AMA"
  },
  {
    "url": "t3_1428fc",
    "name": "We've been making a living from podcasting for over 7 years with the Keith and The Girl show. We used to date. Ask us anything!"
  },
  {
    "url": "t3_142kge",
    "name": "IAmA Tom May, 1/2 Guitar, 1/2 Vocals of Punk Rock band The Menzingers, AMA!"
  },
  {
    "url": "t3_142qwd",
    "name": "I Am Bear McCreary (@bearmccreary), composer for Battlestar Galactica: Blood &amp; Chrome, The Walking Dead and other cool stuff. AMA!"
  },
  {
    "url": "t3_144aio",
    "name": "I am 26, have been homeless for 8 years, have never panhandled, and like my life. AMA."
  },
  {
    "url": "t3_144por",
    "name": "IAmA hairstylist in a nice salon...I hear things you wouldn't believe.  I can also answer any hair questions you may have both stylistically and technically. AMA!"
  },
  {
    "url": "t3_145055",
    "name": "IAmA Locksmith/Safe cracker who goes on raids with the police department. AMA"
  },
  {
    "url": "t3_145ecn",
    "name": "IAmA 25 year old IT contractor working in Afghanistan for the past 2 years making 200k per year. AMA"
  },
  {
    "url": "t3_145ih5",
    "name": "I am Clayton Swisher, manager of investigative journalism at Al Jazeera. I broke the story of Yasser Arafat possibly being poisoned. Ask me anything."
  },
  {
    "url": "t3_145kd4",
    "name": "I am a child of a Billionaire, AMAA"
  },
  {
    "url": "t3_145qbo",
    "name": "I am a lawyer in NYC specializing in landlord/tenant litigation and will answer any questions you have the best i can."
  },
  {
    "url": "t3_1463ov",
    "name": "IAmA product of rape and currently in the foster care system...AMA. "
  },
  {
    "url": "t3_146n23",
    "name": "IAmA 20 year old girl who has a disease that makes having painless sex nearly impossible.  "
  },
  {
    "url": "t3_146wof",
    "name": "IAMA international 4 star rating flight attendant. It's as crazy as you think. AMA."
  },
  {
    "url": "t3_147bjg",
    "name": "I was an undercover investigator documenting animal abuse on factory farms  AMAA"
  },
  {
    "url": "t3_147gqm",
    "name": "We are the computational neuroscientists behind the world's largest functional brain model"
  },
  {
    "url": "t3_148gza",
    "name": "IAmA comedian, Michael Swaim of Cracked.com. Here's the cast and crew of our movie! Ask us stuff."
  },
  {
    "url": "t3_148s6k",
    "name": "IAMA unethical hacker. One of the bad guys, blackhat if you will. Have worked with TeaMp0isoN, Netbashers, HTP and a few others. AMAA, today i wish to reveal some deeper secrets about the scene."
  },
  {
    "url": "t3_14c11j",
    "name": "IAmA homeless 22 year old AMA"
  },
  {
    "url": "t3_14cb0c",
    "name": "I'm Snoop Lion! Ask me anything!!"
  },
  {
    "url": "t3_14cp4n",
    "name": "I just rode my bicycle 4000+ miles across America. AMA!"
  },
  {
    "url": "t3_14dbv0",
    "name": "I travelled around the entire world solo when I was eighteen. AMA "
  },
  {
    "url": "t3_14dqo4",
    "name": "I'm Ryan North!  I write Dinosaur  Comics, the Adventure Time comics,  and I'm Kickstarting a choose-your- own-path version of Hamlet. AMA"
  },
  {
    "url": "t3_14dqps",
    "name": "Whenever I bring this up on Reddit, people always ask a lot of questions. IAmA black guy living in China, AMA."
  },
  {
    "url": "t3_14etqh",
    "name": "I AM PHOENIX JONES REAL LIFE SUPERHERO AND MUTUAL KOMBAT VETERAN  ASK ME ANYTHING "
  },
  {
    "url": "t3_14f3nu",
    "name": "IAmA girl living on a boat AMA"
  },
  {
    "url": "t3_14f7gt",
    "name": "I am NASA astronaut Ron Garan, I want to do an AMA but instead I want to ask you: What do you think NASA should do next? What's should be the next destination for human space exploration?"
  },
  {
    "url": "t3_14fy5k",
    "name": "IAMA Professional Wrestling Promoter that makes his living off of wrestling...and it has made me absolutely miserable and it has ruined my life."
  },
  {
    "url": "t3_14g9kr",
    "name": "We created QWOP, Johann Sebastian Joust, Hokra and Barabariball. AUA"
  },
  {
    "url": "t3_14hl37",
    "name": "Rikki Simons  the Voice of GIR from Invader ZIM  AMA  I am Scared"
  },
  {
    "url": "t3_14ijb8",
    "name": "IamA realtor that specialized in selling dilapidated homes in Detroit for less than you would pay for a car. I have kicked down doors and shooed away squatters during showings and much more. AMA."
  },
  {
    "url": "t3_14innw",
    "name": "I work at a liquor store in Portland, Oregon. AMA"
  },
  {
    "url": "t3_14j4qm",
    "name": "IAmA 26-year-old mall Santa. AMA!"
  },
  {
    "url": "t3_14jjff",
    "name": "I am a commercial CG artist who worked on the likes of dead island and halo4 spartan ops. AMA."
  },
  {
    "url": "t3_14jsvw",
    "name": "IAmA Tow truck driver that does Tow-Aways and Repos. AMA."
  },
  {
    "url": "t3_14jtvk",
    "name": "IAmA former Octochamp on British TV quiz show Countdown. And for you IT Crowd fans- yes, there is an 8+ Club (of sorts). AMA."
  },
  {
    "url": "t3_14lwg6",
    "name": "iAMA Mall Santa. Ask me Anything"
  },
  {
    "url": "t3_14mcjz",
    "name": "I am an African American girl who was adopted as a baby by a white family. AMA"
  },
  {
    "url": "t3_14mcvq",
    "name": "IAmA Carl Zimmer, a science writer with an inordinate fondness for tapeworms. AMAA"
  },
  {
    "url": "t3_14nack",
    "name": "My parents gave me to be raised by my Aunt and Uncle because they honestly believed I was possessed by demons.  AMA"
  },
  {
    "url": "t3_14o3b7",
    "name": "IAm Guy Kawasaki, father, speaker, author of APE: Author, Publisher, Entrepreneur, and former chief evangelist of Apple"
  },
  {
    "url": "t3_14obcf",
    "name": "I am Jn Gnarr, Mayor of Reykjavk. AMA."
  },
  {
    "url": "t3_14ommz",
    "name": "I was in 6 episodes on the current season of Dexter. AMA."
  },
  {
    "url": "t3_14oq73",
    "name": "I am a 19 year old who accidentally shot and paralyzed his own brother. AMA"
  },
  {
    "url": "t3_14osi7",
    "name": "IAMA Former general manager of a porn theater/adult toy store that used video rentals as a cover for selling meth on the graveyard shift. AMA (probably NSFW)"
  },
  {
    "url": "t3_14p0sa",
    "name": "I used to make fake IDs. AMA."
  },
  {
    "url": "t3_14p1p3",
    "name": "IAmA UFO investigator and was on Ancient Aliens, AMA"
  },
  {
    "url": "t3_14pb82",
    "name": "IAmA fantasy maid - I clean houses naked. AMA."
  },
  {
    "url": "t3_14qyxi",
    "name": "IAmA 19 year old Mute! AMA"
  },
  {
    "url": "t3_14r9sg",
    "name": "IAmA one-armed girl that's worked in a haunted house for the past 3 years, AMA"
  },
  {
    "url": "t3_14schr",
    "name": "I Am Astronaut Chris Hadfield, Commander of Expedition 35."
  },
  {
    "url": "t3_14sh8a",
    "name": "IAMA Pro Poker Player. AMA - and I mean, A."
  },
  {
    "url": "t3_14sk6a",
    "name": "I am Lester Chambers. AMA!"
  },
  {
    "url": "t3_14spfa",
    "name": "I'm the Senior Producer on The War Z - AMA"
  },
  {
    "url": "t3_14tqyc",
    "name": "I am a radical unschooling parent. Besides not sending my kids to school (or doing school work at home), I rarely tell them what to do and never punish them. AMA."
  },
  {
    "url": "t3_14wcfs",
    "name": "I have been in pain since I was born due to my skin condition, Epidermolysis bullosa. AMA"
  },
  {
    "url": "t3_14wk2k",
    "name": "We are the North American Star League - Producers, hosts, editors, directors, and staff of Starcraft 2 (and sometimes other games) tournaments. Ask us anything!"
  },
  {
    "url": "t3_14wk6t",
    "name": "I Am Stewart Weinstein.  I am a NASA Engineer who worked on various projects such as the Hubble Space Telescope.  AMA!"
  },
  {
    "url": "t3_14wpdn",
    "name": "I am Maneesh Sethi, the guy who hired someone to slap him every time he used Facebook. I also teach people how to get free plane tickets. AMA"
  },
  {
    "url": "t3_14wsc8",
    "name": "I am a professional resume writer. AMA"
  },
  {
    "url": "t3_14xoby",
    "name": "I founded ImageShack in 2004, AMA."
  },
  {
    "url": "t3_14yj3h",
    "name": "I work in a college admissions office. AMA"
  },
  {
    "url": "t3_14z2ir",
    "name": "I'm a four year old AMAA"
  },
  {
    "url": "t3_14z2m6",
    "name": "IamA Nurse. I work in Hospice. I help people die with dignity. AMA"
  },
  {
    "url": "t3_14zuod",
    "name": "IAmA German who was an exchange student in Tennessee, USA for a year. AMA"
  },
  {
    "url": "t3_150a7r",
    "name": "IAmA college sophomore earning my living and tuition as a sex worker, AMA."
  },
  {
    "url": "t3_150adm",
    "name": "I am Harley Morenstein, ex-high school teacher and creator of EpicMealTime and Epic Chef! Ask Me Anything!"
  },
  {
    "url": "t3_151f3b",
    "name": "IAMA 17 year old PhD Student who graduated high school at 10 and college at 15. AMA."
  },
  {
    "url": "t3_15221g",
    "name": "I am a hydraulic fracturing (frac) technician for a major oil company and one of only two women in my company that actually works in the field. AMA"
  },
  {
    "url": "t3_1522xl",
    "name": "After a reasonably successful 25-year career in IT, I left to wash dishes. AMA."
  },
  {
    "url": "t3_152c0m",
    "name": "IAmA 19 year old born without arms. AMA"
  },
  {
    "url": "t3_152cqq",
    "name": "IAM an unsigned musician called Alex Day. My new single 'Stupid Stupid' is currently in the Top Ten in the UK charts. AMA"
  },
  {
    "url": "t3_153xaf",
    "name": "IAmA person who is literally donating bone marrow as I type this AMA!"
  },
  {
    "url": "t3_15415b",
    "name": "I am Noah Bradley, concept artist &amp; illustrator. You've probably seen my paintings on the frontpage a couple times. AMA."
  },
  {
    "url": "t3_154h48",
    "name": "I am Benjaman Kyle, an unidentified amnesiac with no memories, and the country's only invisible person without a SSN. AMA."
  },
  {
    "url": "t3_1562wk",
    "name": "IAmA founder of Tindie.com, 'etsy for tech', that started as question on /r/Arduino in April, led me to quit my job in Sept, and just closed $500k in funding. AMA"
  },
  {
    "url": "t3_156gvi",
    "name": "I am Ken Levine, Creative Director of BioShock and BioShock Infinite. AMA."
  },
  {
    "url": "t3_156ma3",
    "name": "I am Evan, a roller coaster engineer. AMA"
  },
  {
    "url": "t3_1575dq",
    "name": "IAmA former Stanford football player who played under Jim Harbaugh and David Shaw  AMA"
  },
  {
    "url": "t3_157fmx",
    "name": "I did an unnoticed AMA yesterday on writing a Christmas book... That book went to #1 on Amazon overnight! So, fuck it. AMA again"
  },
  {
    "url": "t3_1588gx",
    "name": "Hi IAMA 20 year old girl who had her genitalia mutilated (aka female circumcision) at a young age, AMA."
  },
  {
    "url": "t3_158ktb",
    "name": "I am a Music Producer who works for Atlantic Records. AMA"
  },
  {
    "url": "t3_158wth",
    "name": "I am Theophany, creator Times End: Majoras Mask remixed and terriblefate.com  AMA"
  },
  {
    "url": "t3_159cjb",
    "name": "I was a corporate jet pilot who flew many celebrities. I have many stories to tell - AMA"
  },
  {
    "url": "t3_15aewq",
    "name": "I was a collections attorney for the largest US banks. You know how people get sued for credit card debt? I filed thousands of these suits a month. AMA."
  },
  {
    "url": "t3_15ai59",
    "name": "IAmA U.P.S delivery driver AMA!"
  },
  {
    "url": "t3_15arnq",
    "name": "IAmA cardiac surgeon AMA"
  },
  {
    "url": "t3_15b3vt",
    "name": "IAM the wife of a man who plead guilty to possession of child pornography. Even though he is guilty, I am choosing to stay married to him. AMA."
  },
  {
    "url": "t3_15bgsm",
    "name": "I have short term memory loss. AMA"
  },
  {
    "url": "t3_15cinp",
    "name": "I am a teacher in a severely impoverished school district, and struggle with the failing education system in our country first hand. AMA"
  },
  {
    "url": "t3_15ciwq",
    "name": "I'm a podiatrist who diagnoses and treats conditions related to the feet and legs, AMA"
  },
  {
    "url": "t3_15doqt",
    "name": "Mark Cuban, this is my AMA"
  },
  {
    "url": "t3_15ene8",
    "name": "I am a Pizza Hut delivery driver."
  },
  {
    "url": "t3_15fd20",
    "name": "I am Ernest Moore; I served in WW2 as Sergeant under 713 LCPL Mine Sweeping Flotilla and Corporal in the British SBS."
  },
  {
    "url": "t3_15fq5t",
    "name": "IaMa former homeless man, who eventually found a good job and a wife AmA"
  },
  {
    "url": "t3_15gvlz",
    "name": "So I've noticed a lot of people want to know about this but are too scared to ask. IAmA woman who has had a miscarriage, tubal pregnancy and had a son pass away at 2 months old AMA."
  },
  {
    "url": "t3_15h9nb",
    "name": "IAMA Roman Catholic seminarian studying to be a Catholic priest. Ask me anything. "
  },
  {
    "url": "t3_15hwsv",
    "name": "IAmA Machinima YouTuber with 1m+ subs that makes gaming videos for a living (WoodysGamertag) AMAA"
  },
  {
    "url": "t3_15iaet",
    "name": "IAmA CPU Architect and Designer at Intel, AMA."
  },
  {
    "url": "t3_15ip96",
    "name": "I'm a Police Officer who's on the verge of quitting the job, ask me anything."
  },
  {
    "url": "t3_15j3qz",
    "name": "We are designing an indie RPG about the Lewis and Clark Expedition. Its like Oregon Trail cranked to 11. AMA!"
  },
  {
    "url": "t3_15j51m",
    "name": "I am Jimmy Wong, actor and musician. I played Fred Chu in the film John Dies at the End. AMA"
  },
  {
    "url": "t3_15jyol",
    "name": "Iama WW2 Veteran"
  },
  {
    "url": "t3_15kzp5",
    "name": "IAmA Manager at Victoria's Secret. AMA!"
  },
  {
    "url": "t3_15l748",
    "name": "IAMA audio engineer at a major Hollywood recording studio. AMA"
  },
  {
    "url": "t3_15lglv",
    "name": "I Am Olivia Black from Pawn Stars"
  },
  {
    "url": "t3_15lp7w",
    "name": "I am a tattoo artist/body piercer with 12 years in the industry. AMA"
  },
  {
    "url": "t3_15m5fw",
    "name": "I AMA 15 year old girl who has created her own small scale sewing business independently. AMA "
  },
  {
    "url": "t3_15mskw",
    "name": "I am Alex Ruiz, animator on The Simpsons. AMA!"
  },
  {
    "url": "t3_15o7r0",
    "name": "I AMA a 19 year old girl who is recovering from breast surgery to correct asymmetry. (Pics)"
  },
  {
    "url": "t3_15oa8w",
    "name": "I can control a robotic arm with the power of my mind. IAm Jan Scheuermann, guinea pig extraordinaire. AMA"
  },
  {
    "url": "t3_15od2s",
    "name": "I am David Braben, co-creator of Elite, creator of Frontier, Frontier II and the upcoming Elite: Dangerous"
  },
  {
    "url": "t3_15onbx",
    "name": "IAmA Correctional Officer (Prison Guard) in a maximum/medium state penitentiary. AmA. "
  },
  {
    "url": "t3_15qfna",
    "name": "I am an 18 year old guy with Alopecia Universalis (no hair anywhere on my body) and have had no hair since I was 9, AMA"
  },
  {
    "url": "t3_15qssl",
    "name": "IAMA Budtender. I am licensed by the state of colorado to work with marijuana. AMA."
  },
  {
    "url": "t3_15rvw3",
    "name": "I am Rucka Rucka Ali, a YouTuber with 100M+ views. Mostly song parodies. AMA"
  },
  {
    "url": "t3_15rzs7",
    "name": "I am Kenny Hotz AMA"
  },
  {
    "url": "t3_15s7t5",
    "name": "i am slug from a band called atmosphere. ama"
  },
  {
    "url": "t3_15s9zu",
    "name": "IAMA College Admissions Officer, on the precipice of the Deadline AMA"
  },
  {
    "url": "t3_15scnn",
    "name": "Iama garbage man. I pick up garbage paper and co-mingle (bottles and cans ) for 1500 houses each week "
  },
  {
    "url": "t3_15sn2i",
    "name": "IAmA: Vietnam Veteran who was a gunner in an AC-130. On active duty for 4 1/2 years. AMAA"
  },
  {
    "url": "t3_15spai",
    "name": "I work as a designer who draws challenge coins for the U.S. Military, Police Departments, and Fire Departments, as well as many others AMAA."
  },
  {
    "url": "t3_15tsrq",
    "name": "I have been a nude artists model for 7 years. AMA!"
  },
  {
    "url": "t3_15tzgy",
    "name": "IAMA 22 year old female fashion model, AMA"
  },
  {
    "url": "t3_15u969",
    "name": "IAmA man who at 21 severed his hand with a saw and received leech therapy! AMA! (NSFW Pics inside)"
  },
  {
    "url": "t3_15ua0y",
    "name": "IAmA father of a child with Spinal Muscular Atrophy (SMA), also seen in a recent picture pushing her in her chair at an ice rink. AMAA."
  },
  {
    "url": "t3_15w4wz",
    "name": "I am a former bald guy who had hair transplant surgery. AMA!"
  },
  {
    "url": "t3_15web0",
    "name": "IAmA inuk (Eskimo) 19 years of age. AMAA"
  },
  {
    "url": "t3_15wuzu",
    "name": "IAmA 24 year old woman almost finished with a master's degree in theology.  AMA"
  },
  {
    "url": "t3_15x1p6",
    "name": "IAMA: A dude who got paid for being a pirate (Watch Officer) on a 90-year old traditional sailing vessel, hoisting sails, navigating rocks and slinging from mast to the other with a rope. While telling other salty sea dogs what to do. 'Twas awesome. AMA."
  },
  {
    "url": "t3_15xnlm",
    "name": "IAMA person who has worked in 3 different Emergency Rooms over the last 8 years of my life. Ask me anything"
  },
  {
    "url": "t3_15xohr",
    "name": "IAMA 21 year old with a net worth of $4.6M. AMA"
  },
  {
    "url": "t3_1601r5",
    "name": "I am a surrealist and fantastic realist artist,  AMA and I'll Draw anything you want If it is really strange or interesting!"
  },
  {
    "url": "t3_160cgn",
    "name": "IAMA 14 year old boy with Hyper mobility syndrome. AMA."
  },
  {
    "url": "t3_160dlj",
    "name": "IAMA Electrician at the deepest nickel mine in Canada. AMA"
  },
  {
    "url": "t3_160ggp",
    "name": "IAmA convicted felon who spent time in military and federal prisons in the US and Germany. AMA"
  },
  {
    "url": "t3_16186a",
    "name": "I Lasered My Balls, AMA"
  },
  {
    "url": "t3_161bhg",
    "name": "IAmA 19 year old guy with a feeding tube! AMA"
  },
  {
    "url": "t3_163ato",
    "name": "IAMA former live-in nanny for an obscenely rich family, AMA. "
  },
  {
    "url": "t3_163f2w",
    "name": "We are Identical Triplets, We did commercials as kids and now we are writing a TV Series. AMA"
  },
  {
    "url": "t3_164f5a",
    "name": "I Am A BBC 2 Dragons' Den winner - AMA!"
  },
  {
    "url": "t3_166rch",
    "name": "IAmA Gym owner, AMA"
  },
  {
    "url": "t3_1672gj",
    "name": "IAmA Bible Scholar.  AMAA."
  },
  {
    "url": "t3_168myn",
    "name": "IAmA an anime fansubber for 7 years (and still going). Ask away!"
  },
  {
    "url": "t3_168ny1",
    "name": "IAMA Night Shift Waitress at IHOP."
  },
  {
    "url": "t3_169edc",
    "name": "IAmA John Dies At The End, Don Coscarelli and David Wong. "
  },
  {
    "url": "t3_169qkw",
    "name": "IAmA sixteen year old mom to an almost 2 year old. AMA"
  },
  {
    "url": "t3_169yz5",
    "name": "I Am Dave Portnoy, Owner And Founder Of BarstoolSports.com"
  },
  {
    "url": "t3_16a6hf",
    "name": "I am Lexi Bloom... The EX porn star. AMA"
  },
  {
    "url": "t3_16aht0",
    "name": "I am an Ethiopian female Immigrant that came to the United States 7 years ago. AMA"
  },
  {
    "url": "t3_16ao2x",
    "name": "IAMA 32 y/o who grew up stereo blind. Two years ago I had surgery that enabled me to see 3D for the first time in my life. AMA"
  },
  {
    "url": "t3_16blgg",
    "name": "If you eat pork in the US, there's a great chance I made its food.  AMA"
  },
  {
    "url": "t3_16botq",
    "name": "IAm Thomas Robichaux, President of the Orleans Parish School Board, and the author of the recent policies banning creationism, intelligent design and Texas revisionist textbooks in Orleans Parish Schools. Ask me anything."
  },
  {
    "url": "t3_16boyz",
    "name": "IamA Phone Sex Operator. AMAA."
  },
  {
    "url": "t3_16bpxj",
    "name": "We are Corsair - a computer hardware company. Ask Us Almost Anything. "
  },
  {
    "url": "t3_16bt3i",
    "name": "I am Ruben Fleischer, the director of the upcoming film GANGSTER SQUAD  starring Sean Penn, Ryan Gosling, Emma Stone, Josh Brolin and Nick Nolte) I also directed ZOMBIELAND and 30 MINUTES OR LESS, among others. Ask Me Anything. "
  },
  {
    "url": "t3_16clfu",
    "name": "IamA Legally Deaf Girl Who Doesn't Know Sign Language! AMA!"
  },
  {
    "url": "t3_16dpvl",
    "name": "I am Lauren McNamara and I'm scheduled to testify at the trial of Private Bradley Manning, who is accused of leaking diplomatic cables and other classified documents to Wikileaks. AMA"
  },
  {
    "url": "t3_16eu5v",
    "name": "IAmA Goldman Sachs Investment Banker AMAA"
  },
  {
    "url": "t3_16f57x",
    "name": "IAMA 20 year old who voluntarily admitted themselves into a psych ward, was told nothing was wrong with me and then wasn't allowed to leave. AMA"
  },
  {
    "url": "t3_16g5x0",
    "name": "I drove over 100k miles and visited all US states (except HI) and all Canadian provinces in a  motorhome with my 4 young kids. AMA"
  },
  {
    "url": "t3_16ggp8",
    "name": "Hi, we're 2 Player Productions. You may remember us from such documentary projects as, Reformat the Planet, Penny Arcade: The Series (S1) and Double Fine Adventure! We just released our 2nd movie, Minecraft: The Story of Mojang. Ask Us Anything!"
  },
  {
    "url": "t3_16h9r9",
    "name": "IAmA guy who sells LEGO at a store where that's all we do. AMAA. "
  },
  {
    "url": "t3_16hynw",
    "name": "I'm 38 and have stage 4 colon cancer AMA"
  },
  {
    "url": "t3_16i29a",
    "name": "Not quite Cesar Milan, but I can help you understand your dog. AMA!"
  },
  {
    "url": "t3_16i543",
    "name": "IamA a Microsoft employee who has worked on Windows 7 and 8. I've been to BillG's residence. AMAA"
  },
  {
    "url": "t3_16ihq2",
    "name": "IAmA sex trafficking survivor. AMAA."
  },
  {
    "url": "t3_16j4qv",
    "name": "I have eaten nothing but oatmeal for 99 days, AMA."
  },
  {
    "url": "t3_16jyia",
    "name": "IAmA a former nuclear missile officer. I spent years in an underground bunker. AMA"
  },
  {
    "url": "t3_16k1f6",
    "name": "I drive a shuttle for a pub. AMA."
  },
  {
    "url": "t3_16kffe",
    "name": "IAmA woman barely out of her teens who had a breast reduction to remove 2 liters of boob! AMAA [NFSW for proof]"
  },
  {
    "url": "t3_16ktvd",
    "name": "IAma former employee of a jail where I watched inmates be beat senseless on an almost daily basis for 3 years. I reported the beatings and was fired for it, I have spent the last few years testifying for former inmates and families of inmates who were beaten or killed in the jail. AMA"
  },
  {
    "url": "t3_16lqu5",
    "name": "IAMA girl that does bondage and cast porn. AMA"
  },
  {
    "url": "t3_16mjte",
    "name": "I am FuntCase - A (masked) Music producer and DJ/Performer who gets to do it for a living. AMAA"
  },
  {
    "url": "t3_16mrxl",
    "name": "IAmA 31 year old man with stage 4 colorectal cancer that just found out I have 3 months left to live and I'm not telling anyone but strangers on reddit. AMA"
  },
  {
    "url": "t3_16n1qh",
    "name": "I am Rich Sommer, and I like board games and acting in things. AMA"
  },
  {
    "url": "t3_16njw6",
    "name": "IAM Hunter Moore I created isanyoneup.com and I am the most hated man on the internet. Ask me anything"
  },
  {
    "url": "t3_16o8hm",
    "name": "I'm a pastor.  Ask me anything. "
  },
  {
    "url": "t3_16peq8",
    "name": "I'm Brad Meltzer, novelist, TV host, comic book author.  Ask me anything."
  },
  {
    "url": "t3_16ppiu",
    "name": "I am a firefighter, ask me anything"
  },
  {
    "url": "t3_16r3tn",
    "name": "IAMA Causasion American who spent the first 17 years of his life growing up in China AMA."
  },
  {
    "url": "t3_16rfoq",
    "name": "Hey! I'm Sal Vulcano from truTV's Impractical Jokers and The Tenderloins Comedy Troupe, ASK ME ANYTHING!"
  },
  {
    "url": "t3_16s0lc",
    "name": "I have Acromegaly (Gigantism). Ask me anything "
  },
  {
    "url": "t3_16shc7",
    "name": "I am an experienced tax accountant.  AMA.  Or don't, and pay Uncle Sam.  "
  },
  {
    "url": "t3_16t4e9",
    "name": "IAMA criminal defense lawyer, AMA."
  },
  {
    "url": "t3_16tlgt",
    "name": "I am the Gangster Squad journalist and author who wrote the articles and book the movie is based on"
  },
  {
    "url": "t3_16vonu",
    "name": "I was wrongly accused by two girls that I was going to bring a gun to school and kill a girl. It took 3 years and a trial by jury to clear my name AMA."
  },
  {
    "url": "t3_16vr9o",
    "name": "Professional tractor trailer mechanic, AMA."
  },
  {
    "url": "t3_16whqf",
    "name": "I am on a research vessel in the middle of the Atlantic Ocean. AMA."
  },
  {
    "url": "t3_16x0eo",
    "name": "I have degrees in Physics, Math, and Astrophysics. AMA "
  },
  {
    "url": "t3_16y6yy",
    "name": "IAmA kid that was on Supernanny about seven years ago. AMA!"
  },
  {
    "url": "t3_16z1lk",
    "name": "AMA, I'm American McGee, game designer and founder of largest indie Western game development studio in China."
  },
  {
    "url": "t3_16z1m2",
    "name": "IAMA - McSlave (McDonalds employee) for the past 6 years. AMA!"
  },
  {
    "url": "t3_16zo6y",
    "name": "I'm the musician who won the court battle over Power Hour where a guy tried to shut down everyone playing the drinking game. AMA!"
  },
  {
    "url": "t3_16zvi3",
    "name": "I AM Jay...the caffeine addicted half of Jay and Silent Bob...AMA"
  },
  {
    "url": "t3_1717rq",
    "name": "In honor of 40 years of legal abortion in the US: we are abortion clinic workers, ask us anything."
  },
  {
    "url": "t3_171ess",
    "name": "IAmA Sushi Chef AMA"
  },
  {
    "url": "t3_17235m",
    "name": "IAmA Naked News anchor who writes a segment called the Naked Nerd.  I've been pregnant on air, and just shot a docuseries based on Naked News.  AMA"
  },
  {
    "url": "t3_1727he",
    "name": "I am Stephan Kinsella, a patent attorney and Austrian economics and anarchist libertarian writer who thinks patent and copyright should be abolished. AMA"
  },
  {
    "url": "t3_172a86",
    "name": "I am a writer/social media guy working for a major porn company, AMAA. Have at it, party people. "
  },
  {
    "url": "t3_174sl6",
    "name": "I'm Nick Kroll, creator of Comedy Centrals Kroll Show  Ask Me Anything"
  },
  {
    "url": "t3_174y57",
    "name": "IAmA Eddie Huang (cook, author, host of Fresh Off the Boat) AMA"
  },
  {
    "url": "t3_1751fl",
    "name": "IAmA High Performance Driving Instructor, AMA"
  },
  {
    "url": "t3_177ahm",
    "name": "*Actual* Former Disney Employee (Cast Member)"
  },
  {
    "url": "t3_177b8p",
    "name": "IAmA guy who has been traveling around the world non-stop for 6 years. Been to 100 countries and all 7 continents.  AMA"
  },
  {
    "url": "t3_177fzp",
    "name": "IAm Sigur Rs, an icelandic band consisting of Jnsi, Goggi and Orri, AMA"
  },
  {
    "url": "t3_177r1z",
    "name": "I am Greg Yaitanes, Executive Producer of House and Cinemaxs new series, Banshee"
  },
  {
    "url": "t3_1795nh",
    "name": "I Am A longtime employee of Hewlett-Packard AMA"
  },
  {
    "url": "t3_1797s9",
    "name": "I fell from a zipline and should have died.  Instead I just have several broken bones including a broken back.  AMA"
  },
  {
    "url": "t3_179lf7",
    "name": "I am Andy Carvin, and I use social media to cover Arab revolutions for NPR. Ask me anything!"
  },
  {
    "url": "t3_179syb",
    "name": "IAm Dave Osborne, Senior Narrative Designer at Jagex Games Studio for the popular MMORPG RuneScape - AMAA!"
  },
  {
    "url": "t3_17a1a9",
    "name": "I AmA former cast member of the PBS kid's show ZOOM, AMA!"
  },
  {
    "url": "t3_17a4yi",
    "name": "Hey Reddit, I am a two-time USA Memory Champion was on the History Channel show Superhumans.  Ask me anything! "
  },
  {
    "url": "t3_17ac6w",
    "name": "I am a Casino General Manger who is an expert in the operation and regulation of casinos. Ama!"
  },
  {
    "url": "t3_17azj2",
    "name": "IAmA Basic Video game Tester AMA!"
  },
  {
    "url": "t3_17bi23",
    "name": "I am a European (Belgium) that traveled across the United States for months on my own. AMA"
  },
  {
    "url": "t3_17bu5b",
    "name": "I'm 21 years old and probably only have about 15 good years left. AMA "
  },
  {
    "url": "t3_17bvph",
    "name": "We are the directors of porn parodies like SpongeKnob SquareNuts. We are Sam Hain &amp; Lee Roy Myers. AMA"
  },
  {
    "url": "t3_17c262",
    "name": "In 2011, I worked for Manwin Canada as a Software Developer (Youporn/Extremetube).  In 2012 I worked for another porn video site.  In 2013, I am strating my own free porn site.  AMAA"
  },
  {
    "url": "t3_17d5at",
    "name": "IAmA former airline pricing analyst, so know every trick in the book about airfares, AMA "
  },
  {
    "url": "t3_17d96a",
    "name": "I am JR Havlan, 16-year veteran writer for The Daily Show with Jon Stewart, standup comedian and host of Writers Bloc Podcast -- AMA"
  },
  {
    "url": "t3_17davx",
    "name": "IamA hotel employee in a really large hotel in Vegas. AMA"
  },
  {
    "url": "t3_17e33z",
    "name": "I Am A Production Manager For A Confectionary (Chocolates and snacks) Manufacturer:  AMAA"
  },
  {
    "url": "t3_17fdrw",
    "name": "IAmA public school music teacher...AMA!"
  },
  {
    "url": "t3_17ffwh",
    "name": "Hey everyone I am A New and Used Car Salesperson here to help Reddit! AMA"
  },
  {
    "url": "t3_17fi6l",
    "name": "I am David Graeber, an anthropologist, activist, anarchist and author of Debt. AMA."
  },
  {
    "url": "t3_17g99g",
    "name": "IAmA chiptune/8bit band (Superpowerless) that was invited on Britain's Got Talent by producers and then made fun of AMA"
  },
  {
    "url": "t3_17gdq5",
    "name": "IAmA Mortician with time to kill... AMA!"
  },
  {
    "url": "t3_17gdru",
    "name": "I am a person who quit their 9-5 job to follow my dream of owning an aquarium store. AMA! (xpost r/aquariums)"
  },
  {
    "url": "t3_17hzhk",
    "name": "IAmA guy who's been injecting deadly snake venom into myself for 20 years. AMA"
  },
  {
    "url": "t3_17i8mf",
    "name": "IAm Kristian Von Bengtson, an architect on a DIY mission to launch a man into suborbital flight. AMA."
  },
  {
    "url": "t3_17j9wa",
    "name": "We are Predator UAV Pilot/Operators currently in Afghanistan. AMAA!"
  },
  {
    "url": "t3_17jmgo",
    "name": "Per Request: I Was A Dildo Engineer AMA"
  },
  {
    "url": "t3_17kbny",
    "name": "I am a British Farmer, ask me anything!"
  },
  {
    "url": "t3_17kfm6",
    "name": "I have visited North Korea, Iran, Afghanistan and Iraq (and 136 other countries) as a tourist. AMA"
  },
  {
    "url": "t3_17kmf0",
    "name": "Ask Us Anything. We are Greg &amp; Meredith Tally. We commissioned a Tesla-related Oatmeal Cartoon about our new Colorado museum hotel &amp; Dino Memes Blog. And Facebook, twitter blew up. AMA"
  },
  {
    "url": "t3_17kpck",
    "name": "IAmA former teacher and current indie rapper named Mega Ran. AMA. "
  },
  {
    "url": "t3_17l0tx",
    "name": "I am Mike Krahulik, I draw Penny Arcade"
  },
  {
    "url": "t3_17lwcs",
    "name": "IAmA a person in his 20s who went from rags to riches during the recession. AMA."
  },
  {
    "url": "t3_17mpw3",
    "name": "We are the team behind Surgeon Simulator 2013. AmA"
  },
  {
    "url": "t3_17p4nh",
    "name": "IAMA father who is just barely in the top 1% and want to offer a different perspective, AMA!"
  },
  {
    "url": "t3_17p9hl",
    "name": "IAmA 35 year old woman who's father was sent to prison at the beginning of the War on Drugs when I was 12. He was gone 23 years and just got out. "
  },
  {
    "url": "t3_17pl6e",
    "name": "I am Isaac Marion, author of WARM BODIES, now a big-time Hollywood movie about a zombie who wants to live again. SURELY YOU HAVE QUESTIONS!"
  },
  {
    "url": "t3_17r18o",
    "name": "IAmA 17 year old with the condition Cystic Fibrosis, AMA"
  },
  {
    "url": "t3_17rdix",
    "name": "I am an escort, with a master degree and speaking fluently 5 languages"
  },
  {
    "url": "t3_17rfxs",
    "name": "We work at Rooster Teeth, the company behind Red vs Blue, and we walked 130 miles (210km) from the set of Hobbiton to Mount Doom in 6 days. AskUsAnything!"
  },
  {
    "url": "t3_17sk85",
    "name": "I am an ex prostitute/callgirl who worked in the UK and Canada. AMA! "
  },
  {
    "url": "t3_17syg0",
    "name": "IIamA flight attendant for Emirates Airlines, based in dubai, the biggest/little city in in the world that I know. Ask me about living in this city, traveling, or working with people from all over the world. "
  },
  {
    "url": "t3_17thxt",
    "name": "I've noticed a lot of misinformation regarding opiate overdoses/dependance. I'm a recovering heroin addict and I have and have seen people OD. AMA."
  },
  {
    "url": "t3_17v0j4",
    "name": "I've been to North Korea in 2012, AMA"
  },
  {
    "url": "t3_17v5k3",
    "name": "Stay at home, unemployed dad, by choice. AMA"
  },
  {
    "url": "t3_17v8nx",
    "name": "IAMA deaf guy. AMA"
  },
  {
    "url": "t3_17vdim",
    "name": "IAMA: Sam Witwer- Lead Actor on Being Human, recurring guest on Star Wars the Clone Wars"
  },
  {
    "url": "t3_17voic",
    "name": "I'm a female Video Editor for a porn site"
  },
  {
    "url": "t3_17vpxf",
    "name": "IAm Tiki Barber, New York Giants career rushing leader, 3x All-Pro and Co-Founder of Thuzio.com.  AMA."
  },
  {
    "url": "t3_17x67c",
    "name": "IAmA guy who has spent the last 2 years on house arrest, with ten days left. AMA! resubmitting from /r/ama. "
  },
  {
    "url": "t3_17xu5q",
    "name": "I am Eugene Mirman. I'm a comedian who voices Gene on Bob's Burgers and I was the landlord on Flight of the Conchords."
  },
  {
    "url": "t3_17y58y",
    "name": "I'm a female porn writer and director. Ask me anything."
  },
  {
    "url": "t3_17ybeo",
    "name": "i am Rufio &amp; Prince Zuko... AMA!"
  },
  {
    "url": "t3_17yd4k",
    "name": "IAm Emmy Rossum, actress in Shameless and Beautiful Creatures and artist of newly released album Sentimental Journey"
  },
  {
    "url": "t3_17yvu7",
    "name": "I am an Afghan woman who lived through the Soviet Invasion of Afghanistan. AMA!"
  },
  {
    "url": "t3_17zrn3",
    "name": "I am a honorably discharged combat wounded veteran of 2 tours of Operation Iraqi freedom. U.S. Army.  "
  },
  {
    "url": "t3_18063g",
    "name": "I am Panos Panay with the Surface Windows 8 Pro Engineering Team AMAA. "
  },
  {
    "url": "t3_1809fd",
    "name": "I am a professional in the Boy Scouts of America. AMA."
  },
  {
    "url": "t3_182dzd",
    "name": "I am the creator of Social Fixer, a popular RES-like browser extension that customizes Facebook.  AMA!"
  },
  {
    "url": "t3_182j7t",
    "name": "I am Joe Houston, former developer for the game Dishonored and creator of Unwritten. AMA"
  },
  {
    "url": "t3_1833ec",
    "name": "I Artificially inseminate turkeys for a living AMA"
  },
  {
    "url": "t3_1853ap",
    "name": "We are SpaceX Software Engineers - We Launch Rockets into Space - AMA"
  },
  {
    "url": "t3_1859ty",
    "name": "We are The T.V. Club, the TV writers of The A.V. Club. Ask Us Anything"
  },
  {
    "url": "t3_185j1y",
    "name": "IAMA former member of Scientology's 'Sea Org', AMA"
  },
  {
    "url": "t3_185xdl",
    "name": "I Am Dave Grohl AMA"
  },
  {
    "url": "t3_187iwo",
    "name": "I Am Peter Sunde, co-founder of TPB, AMA"
  },
  {
    "url": "t3_188ybp",
    "name": "I grew up on a sailboat and am about to embark on the first crossing of the South Atlantic on a boat with no motor or cabin, AMA."
  },
  {
    "url": "t3_189al6",
    "name": "I am Ragnar Trnquist, creator of The Longest Journey saga and the upcoming Dreamfall Chapters. AMA!"
  },
  {
    "url": "t3_189e8g",
    "name": "I'm performing on the Grammy's tonight.  Anybody care to AMA?"
  },
  {
    "url": "t3_189kuu",
    "name": "I'm Sonny Hicks, male pornstar, working in the adult industry for 4 years. Ask me ANYTHING! "
  },
  {
    "url": "t3_18biq8",
    "name": "I am Lauren Drain, former Westboro Baptist Church member &amp; author of BANISHED. Ask Me Anything"
  },
  {
    "url": "t3_18ckd7",
    "name": "IamA police officer with the LAPD.  AMAA"
  },
  {
    "url": "t3_18dj1z",
    "name": "I am a professional soccer player, who has played in over 7 countries at every level, and seen things you would not believe."
  },
  {
    "url": "t3_18dor9",
    "name": "I'm Sean McColl, a Professional Rock Climber from Canada. AMA"
  },
  {
    "url": "t3_18dz35",
    "name": "I am a National Geographic archaeologist following up on an earlier post: curses, snakes, robots, weird discoveries--ask away!"
  },
  {
    "url": "t3_18e4mx",
    "name": "Hi, I am a female bouncer who has worked door and event security for 4 years. Ask me anything!"
  },
  {
    "url": "t3_18e9b7",
    "name": "IAmA 19 years old illegal immigrant living in the United States AMA "
  },
  {
    "url": "t3_18egyn",
    "name": "IAmA 500 pound rapper/sex symbol named Billy the Fridge. AMA"
  },
  {
    "url": "t3_18err8",
    "name": "I am Congressman Jared Polis, sponsor of HR 499 to allow states to regulate marijuana, former entrepreneur, lead opponent of SOPA/PIPA"
  },
  {
    "url": "t3_18f8y3",
    "name": "I am a former LAPD Gang Officer and currently working as a police officer in another department. AMA"
  },
  {
    "url": "t3_18g7z1",
    "name": "I have been to North Korea over 100 times. AMA"
  },
  {
    "url": "t3_18gcez",
    "name": "We are the Facebook Recruiting team.  AMAA - Ask our Team Almost Anything  "
  },
  {
    "url": "t3_18gs1j",
    "name": "Hey! I am Lexi Bloom the retired porn star. AMA. "
  },
  {
    "url": "t3_18hh3i",
    "name": "I am Johnny Hekker, Ginger rookie punter for the St. Louis Rams. AMA"
  },
  {
    "url": "t3_18hy0b",
    "name": "IAMA member within the ranks of a 1% Motorcycle club. AMAA"
  },
  {
    "url": "t3_18ie51",
    "name": "Hi! I'm a 22 year old head door man (bouncer) in the UK with 3 years experience in licensed trade security. Ask me anything! "
  },
  {
    "url": "t3_18ilfn",
    "name": "Canadian police officer AMA"
  },
  {
    "url": "t3_18j1cs",
    "name": "I am Marius Stan, a Senior Scientist at Argonne National Laboratory and Bogdan the car wash owner on Breaking Bad. AMA "
  },
  {
    "url": "t3_18jbox",
    "name": "I am Agustn Cordes, creator of the Scratches and Asylum adventure games. AMA!"
  },
  {
    "url": "t3_18jyeu",
    "name": "IAmA Carnival Triumph passenger; Ask me anything!"
  },
  {
    "url": "t3_18kbxk",
    "name": "I have extreme anhidrosis (my body does not sweat) Ask me anything!"
  },
  {
    "url": "t3_18ky87",
    "name": "IAmA former US Army logistics company commander that was responsible in part for supporting the last months of the withdrawal from Iraq.  AMA"
  },
  {
    "url": "t3_18l4a1",
    "name": "We are Phosphor Games in Chicago, creators of UE4 Project Awakened, make your dream video game character"
  },
  {
    "url": "t3_18lkld",
    "name": "I am Northernlion, a professional YouTuber who has made my living playing video games and posting videos about them for over a year now. AMA! "
  },
  {
    "url": "t3_18lrd8",
    "name": "I Am Tristam...a musician? AMA"
  },
  {
    "url": "t3_18mc3w",
    "name": "My name is Joseph Suchanek and I have an extremely rare disease that only 800 people in the world have called Fibrodysplasia Ossificans Progressiva or FOP or Stone Man's Disease where my muscles and tendons turn into bone. AMA"
  },
  {
    "url": "t3_18mee8",
    "name": "I am a pornstar and am on a residential porn set all weekend! AMAA"
  },
  {
    "url": "t3_18mga0",
    "name": "IAMA Carnival Triumph crew member. AMA"
  },
  {
    "url": "t3_18minb",
    "name": "WeAreA married couple that are both full time wheelchair users. AUsA"
  },
  {
    "url": "t3_18ouvv",
    "name": "I am a prostitute working in a legal brothel in Australia. AM(or my partner)A (NSFW!)"
  },
  {
    "url": "t3_18ozvs",
    "name": "Iama Insurance Fraud Private Investigator, Ask Me Anything!"
  },
  {
    "url": "t3_18p6y9",
    "name": "IAmA former Army Recruiter. AMA"
  },
  {
    "url": "t3_18pdy6",
    "name": "IAmA MMA Fighter, AMA!"
  },
  {
    "url": "t3_18rp5r",
    "name": "I am a Build-A-Bear employee---AMA"
  },
  {
    "url": "t3_18rze9",
    "name": "I'm a Marine AMA"
  },
  {
    "url": "t3_18tiw3",
    "name": "Ive handed out nearly one million booklets at colleges across North America for a non-profit  maybe weve met? AMA"
  },
  {
    "url": "t3_18tuur",
    "name": "I am Max Geiger, the Computer Whiz on Deadliest Warrior, producer of The Unfinished Swan. AMA"
  },
  {
    "url": "t3_18utke",
    "name": "I was born deaf, AMA."
  },
  {
    "url": "t3_18vu4o",
    "name": "I am an American living in Uganda, working with an NGO that deals with imprisoned and orphaned children. AmA!"
  },
  {
    "url": "t3_18wfut",
    "name": "IAm The ABCs of Death, ask the directors questions about this anthology horror film containing 26 shorts, in theaters March 8th, on VOD now!"
  },
  {
    "url": "t3_18ztqn",
    "name": "I'm a 23 Year Old Pawn Shop Manager. AMA"
  },
  {
    "url": "t3_191ffd",
    "name": "Hi, Im Derek Khanna - the House Republican Committee staffer who the memo on copyright reform and is spearheading the campaign on cellphone unlocking. Ask me anything!"
  },
  {
    "url": "t3_191fg1",
    "name": "IAmA Patriot Guard Rider who has had multiple run-ins with the Westboro Baptist Church. AMA! "
  },
  {
    "url": "t3_192pr1",
    "name": "I AM Ralf Reichert CEO of Turtle Entertainment (ESL) AMA"
  },
  {
    "url": "t3_193e3x",
    "name": "IAMA sexual assault therapist discussing when orgasm happens during rape. AMA!"
  },
  {
    "url": "t3_193iaw",
    "name": "I Was in a Month-Long Coma and Died 3 Times AMA (Verification Inside)"
  },
  {
    "url": "t3_194ipt",
    "name": "I drive a snow plow for a metropolitan city. I know many of you hate me, but feel free to AMA"
  },
  {
    "url": "t3_194wyu",
    "name": "IAMA krispy kreme cook AMA"
  },
  {
    "url": "t3_195zwj",
    "name": "IAMA social escort/call girl---I stay at this ktv bar, where clients get to pick which girls they like by looking at them in the flesh!"
  },
  {
    "url": "t3_196wf5",
    "name": "IAMA Boeing engineer who works in the largest building in the world*, AMaA."
  },
  {
    "url": "t3_197xia",
    "name": "I test your pee for all kinds of drugs.  Ask a drugtester almost anything."
  },
  {
    "url": "t3_199f0n",
    "name": "Im Andras Forgacs, CEO of Modern Meadow - a company at the forefront of 3D-printed meat and leather. AMA!"
  },
  {
    "url": "t3_19bqxg",
    "name": "I am Rachelle Friedman Chapman aka The Paralyzed Bride. I am a 27 y/o quadriplegic. AMA"
  },
  {
    "url": "t3_19dsw4",
    "name": "I am a girl who spent the majority of her childhood blue ocean sailing! AMA!"
  },
  {
    "url": "t3_19efi8",
    "name": "My mother was murdered by my father when I was 18. AMA"
  },
  {
    "url": "t3_19epje",
    "name": "I Am Joe Bostic, 22+ year game developer (11 years at Westwood Studios, 9 years at Petroglyph), Designer and Co-Founder of Petroglyph. AMA"
  },
  {
    "url": "t3_19f4aa",
    "name": "I am Eddie Pepitone, Comedian and subject of Doc Film The Bitter Buddha. Ask me anything."
  },
  {
    "url": "t3_19g9mi",
    "name": "I am a 26 year old NYC yellow cab driver. Ask me anything "
  },
  {
    "url": "t3_19h8qt",
    "name": "IAmA European Engineer who moved to Africa to repair bridges. Ive survived malaria, basically dodged an 18-wheeler truck falling from a bridge 15 m high, faced a spitting snake, and struggle daily with water. Last week I needed trash bags and learnt I can only buy them 90 km away. AMAA."
  },
  {
    "url": "t3_19hbwl",
    "name": "IAma former Knight at Medieval Times AMA!"
  },
  {
    "url": "t3_19ipk0",
    "name": "I lived homeless in Denver for a couple of months and made a documentary with hidden camera spy glasses."
  },
  {
    "url": "t3_19iwwi",
    "name": "IAMA Private Investigator (Part 2) Now with more action, adventure, oddities, and sultry dames!"
  },
  {
    "url": "t3_19j3fp",
    "name": "IAm Dr. Robin Carhart-Harris from Imperial College London I study the use of MDMA &amp; Psilocybin mushrooms in the treatment of depression. AMA"
  },
  {
    "url": "t3_19kxrg",
    "name": "Ive been touring across the country with a 10 ft. tall inflatable pig protesting Walmart. Maybe youve seen me on the news? AMA"
  },
  {
    "url": "t3_19lrw8",
    "name": "IAm transsexual porn performer Juliette Stray; ask me almost anything!"
  },
  {
    "url": "t3_19mzqq",
    "name": "I recently won 1m on the lottery AMA"
  },
  {
    "url": "t3_19nivv",
    "name": "I'm Jesse Thorn, host of NPR's Bullseye and proprietor of MaximumFun.org, a listener-supported podcast network. AMA. "
  },
  {
    "url": "t3_19otru",
    "name": "I'm a manager at a movie theater AMA. "
  },
  {
    "url": "t3_19pjkc",
    "name": "I have been a Videogame Tester for 2 years AMAA"
  },
  {
    "url": "t3_19pqti",
    "name": "Hi, I am Paul Jaminet, author (with my wife) of Perfect Health Diet, Ask Me Anything"
  },
  {
    "url": "t3_19pxrh",
    "name": "I am Brad Sherwood from the new series, This vs That, the ABC series, Whose Line Is It Anyway?, and my currently nationally touring improv show with Colin Mochrie. AMA."
  },
  {
    "url": "t3_19rcyl",
    "name": "I am a police officer in the Midwest... Have a question? Let me hear em."
  },
  {
    "url": "t3_19s71y",
    "name": "Hi I'm Brie Larson. Ask me anything!"
  },
  {
    "url": "t3_19tply",
    "name": "Hi I'm D-Piddy, the Deadpool cosplayer from all those videos and .gifs on the internet -- AMA"
  },
  {
    "url": "t3_19ubbl",
    "name": "I am teaching English in a Japanese high school in a mountain hot spring town, population: 35,000. AMA!"
  },
  {
    "url": "t3_19up0j",
    "name": "I've spent the past 3 years asking strangers to sit with me and write something about their life. Around 5000 of them have so far! Now it's my turn to share... AMA!"
  },
  {
    "url": "t3_19uy9s",
    "name": "We are the Google Lunar X PRIZE. A $30 million competition for the first privately funded team to land a robot on the moon! Ask us anything!"
  },
  {
    "url": "t3_19v8hv",
    "name": "I used to be professional psychic. I was a fraud; there is clearly no such thing. AMaA!"
  },
  {
    "url": "t3_19vqwm",
    "name": "We are electronic music producers &amp; pancake dealers - Project 46 AMA"
  },
  {
    "url": "t3_19vsfr",
    "name": "AMA I sold my eggs for $30,000."
  },
  {
    "url": "t3_19x7up",
    "name": "We are the Firefox User Experience team, this is your chance to tell us about your pet peeves!"
  },
  {
    "url": "t3_19xdqi",
    "name": "I am Jon Schnepp, Director of Metalocalypse, ABCs of Death, The Death of Superman Lives:What Happened?."
  },
  {
    "url": "t3_19xh8j",
    "name": "I make Bro Team Pill videos. Ask me questions and I will probably not lie to you."
  },
  {
    "url": "t3_19xi47",
    "name": "I'm Larkin Love, indie adult/fetish video producer and actress.  AMA!"
  },
  {
    "url": "t3_19ydgm",
    "name": "IAmA plane crash survivor.  Commercial flight on a Boeing 737.  May 31st 1973 New Delhi, India."
  },
  {
    "url": "t3_19ypzp",
    "name": "IAMA 1%er outlaw biker, with a brand new prospect. Ask me almost anything. "
  },
  {
    "url": "t3_19zvi1",
    "name": "I am an illegal immigrant with an expired visa that has been living in the US for the last 6 years. I own a small business and employ 2 American workers. I pay all the required Taxes. I cannot drive my own vehicle and I am constantly weary of deportation. Ask me anything. "
  },
  {
    "url": "t3_1a0klp",
    "name": "I am Ragnar Trnquist, creator of Dreamfall Chapters: The Longest Journey. AMA!"
  },
  {
    "url": "t3_1a1wvl",
    "name": "AMA I work for a NASCAR Team."
  },
  {
    "url": "t3_1a393n",
    "name": "Hi, I'm Matt Cox, former Lead Game Designer on Scribblenauts, then turned down a design position on Halo 4 to start a church. Ask me anything!"
  },
  {
    "url": "t3_1a398s",
    "name": "I spent 3 months living in the Amazon Rainforest. Ask me anything."
  },
  {
    "url": "t3_1a3awq",
    "name": "I am a former dancer from The Lusty Lady in Seattle, Wa, AMAA"
  },
  {
    "url": "t3_1a3m75",
    "name": "[By request] -- IAMA guy who spent years as a corporate drone working 80+ hours a week. I became an entrepreneur and last year made slightly less than 300k from sales of self-published books, staying home with my family and enjoying life. AMAA. Oh, and I'm not from the Warlizard Gaming Forums."
  },
  {
    "url": "t3_1a5dqh",
    "name": "IAMA Swinger's Club Employee, AMA."
  },
  {
    "url": "t3_1a7f7t",
    "name": "I am Daniel Weible. I was sentenced to 2 years in a maximum security prison for failure to pay Child Support. AMA."
  },
  {
    "url": "t3_1a7jxd",
    "name": "I am Hugh Howey, the author of the self-published New York Times bestseller WOOL. AMA"
  },
  {
    "url": "t3_1a7sol",
    "name": "I am Tim Stevens, editor-in-chief at Engadget. AMA!"
  },
  {
    "url": "t3_1a8sjz",
    "name": "Hi, I am a guy who lived in a tree on public land for a year. Ask me anything."
  },
  {
    "url": "t3_1a8ujr",
    "name": "IAm a former Warner Bros Records artist, EMI Music Publishing songwriter, &amp; longtime Avril Lavigne collaborator/guitarist. "
  },
  {
    "url": "t3_1aa3s0",
    "name": "I am a lesbian Navy veteran; ask me anything. Not easily offended."
  },
  {
    "url": "t3_1aa4ew",
    "name": "I (M25) had a vasectomy yesterday morning. AMA"
  },
  {
    "url": "t3_1abh82",
    "name": "I'm Francis Capra (Weevil) and I am very, very excited about the Veronica Mars movie."
  },
  {
    "url": "t3_1acn5p",
    "name": "I am a current owner of a car dealership ask me questions"
  },
  {
    "url": "t3_1act9z",
    "name": "Hi! I'm Joey Comeau, writer of A Softer World, Lockpick Pornography, Bravest Warriors and other things! AMA!"
  },
  {
    "url": "t3_1ad6n0",
    "name": "I'm the world's only armless pilot, a black belt, and a motivational speaker. I'm Jessica Cox, ask me anything."
  },
  {
    "url": "t3_1aebmq",
    "name": "I am a Medical Marijuana Dispensary Owner! Ask away..."
  },
  {
    "url": "t3_1ael6l",
    "name": "2 days ago, my lung collapsed while browsing Reddit. AMA!"
  },
  {
    "url": "t3_1afcst",
    "name": "I rerail derailed trains AMA"
  },
  {
    "url": "t3_1ah6mg",
    "name": "We're the creators of Ridiculous Fishing - Ask Us Anything"
  },
  {
    "url": "t3_1ahfkx",
    "name": "Sarah Churman, girl in viral YouTube video '29 Years Old and Hearing Myself For the 1st Time'. AMA"
  },
  {
    "url": "t3_1aj74m",
    "name": "I AM PHIL FISH, CO-CREATOR OF FEZ, ASK ME ANYTHING"
  },
  {
    "url": "t3_1aj9xu",
    "name": "I am Les Stroud AKA Survivorman, a Filmmaker, Outdoor Adventurer, Singer-Songwriter, Performer. AMA!"
  },
  {
    "url": "t3_1ak2gf",
    "name": "I am Matthew Blake - Over four years I cycled 46,000 miles around the world through 61 countries. AMA."
  },
  {
    "url": "t3_1al3uw",
    "name": "IAMA 25-year old Nigerian doctor who is fed up with all the misconceptions about my country. Ask me anything."
  },
  {
    "url": "t3_1alhve",
    "name": "I just quit my day job and put my first game (Story War) on Kickstarter and it raised over $220,000. AMA."
  },
  {
    "url": "t3_1alo38",
    "name": "I'm owner/operator of a liquor store, am overwhelmed by lies &amp; deception of liquor labels, AMA"
  },
  {
    "url": "t3_1am57s",
    "name": "I am Adi Shankar, Producer of The Grey, Dredd, Killing Them Softly, &amp; the short film Punisher: #DirtyLaundry.  AMA!  "
  },
  {
    "url": "t3_1amk9w",
    "name": "10 years ago today I was one of the first Marines to cross into Iraq. AMA"
  },
  {
    "url": "t3_1anmnm",
    "name": "I am the current World Pasty Champion, and 2 times Masterchef competitor AMA"
  },
  {
    "url": "t3_1ao6jm",
    "name": "We are Reddit co-Founder Alexis Ohanian, Reddit GM Erik Martin, co-Director Nadeem Mazen, and a gaggle of entrepreneurs. Were here to talk about Internet freedom and our mini-doc Silicon Prairie: Americas New Internet Economy - AMA!"
  },
  {
    "url": "t3_1aod7l",
    "name": "I am allergic to sexual arousal, AMA"
  },
  {
    "url": "t3_1aoi0s",
    "name": "IAm Nassim Taleb, author of Antifragile, AMA"
  },
  {
    "url": "t3_1aokls",
    "name": "IAmA Federal Criminal Defense Attorney And Former Federal Prosecutor -- Ask Me (Almost) Anything!"
  },
  {
    "url": "t3_1aomld",
    "name": "We are Eagle Scouts and today we voted in order to change the sexual orientation requirements of the BSA. AUsA"
  },
  {
    "url": "t3_1apjl6",
    "name": "I break into hospitals and steal things for a living. Ask me Anything! "
  },
  {
    "url": "t3_1aqifw",
    "name": "I own an award winning porn company. Ask me anything!"
  },
  {
    "url": "t3_1ar1oe",
    "name": "Hi, Im DJ Qualls. Im an actor from such movie masterpieces as Road Trip, The New Guy, Hustle &amp; Flow, and Sandra Bullock's razzie award winning film, All About Steve. I recur on  Supernatural, Perception, and am a regular on the FX series Legit."
  },
  {
    "url": "t3_1ar1vd",
    "name": "When I was 17 I shot a guy who was trying to rob me. I served 8 years in prison, and have now been out for 10 years. I have been working with The US Attorney (DOJ/ Federal Prosecutor) to make a documentary (Pull of Gravity) about re-entry and recidivism. AMA."
  },
  {
    "url": "t3_1ar7k3",
    "name": "We are the guys behind the Equality House - Ask Us Anything!"
  },
  {
    "url": "t3_1aswvi",
    "name": "IAmA US soldier serving on active duty as an 11B (infantry) Ask me anything!"
  },
  {
    "url": "t3_1at6kp",
    "name": "I'm Harmony, director of Spring Breakers, AMA"
  },
  {
    "url": "t3_1auyyf",
    "name": "I am a professional photovoltaic solar panel installer.  Ask me anything!"
  },
  {
    "url": "t3_1av5sj",
    "name": "I am Foster Parent of 5 years.  I've had 10 placements and adopted 2 children.  AMA"
  },
  {
    "url": "t3_1avf16",
    "name": "I am Rutledge Wood, Top Gear host, NASCAR reporter, ask me anything!"
  },
  {
    "url": "t3_1avkzl",
    "name": "IAma Dwarf in a wheelchair who plays in a band. Whaddya wanna know?"
  },
  {
    "url": "t3_1avszc",
    "name": "I'm Tarn Adams of Bay 12 Games, co-creator of Dwarf Fortress.  AMA!"
  },
  {
    "url": "t3_1aw47g",
    "name": "I take people deep into the heart of the Amazon for a life-changing experience with Ayahuasca. Ask me anything!"
  },
  {
    "url": "t3_1axiq6",
    "name": "IAMA American who's been in a Canadian ER for 3 days. AMA."
  },
  {
    "url": "t3_1ay8v9",
    "name": "I was a Wheel of Fortune contestant, and my show airs tomorrow on 3/25/13, AMA!"
  },
  {
    "url": "t3_1ayyeb",
    "name": "I AmA 15 year old living with Cyclic Vomiting Syndrome, AMA"
  },
  {
    "url": "t3_1az7bh",
    "name": "I am a 20-year old with short term memory loss. Ask me anything!"
  },
  {
    "url": "t3_1azghu",
    "name": "I Am A Cashier at a liquor and convenience store ASK ME ANYTHING "
  },
  {
    "url": "t3_1azi9z",
    "name": "I am filmmaker Quentin Dupieux aka Mr. Oizo, AmA."
  },
  {
    "url": "t3_1b1x48",
    "name": "I am Nia Vardalosactress and writer of My Big Fat Greek Wedding, author, and mother of one daughter. AMA!"
  },
  {
    "url": "t3_1b1zjy",
    "name": "Hi, I am actor Justin Bartha from NBCs The New Normal, The Hangover franchise, and Broadways Lend Me A Tenor. AMA."
  },
  {
    "url": "t3_1b2l6n",
    "name": "I am Felicia Day, Co-Founder of Geek &amp; Sundry, Actor, Writer, Producer, ETC and Stuff  AMA"
  },
  {
    "url": "t3_1b2yh7",
    "name": "IAmA 21 year old living with Brugada syndome (AKA Sudden Unexplained Death Syndrome) AMA"
  },
  {
    "url": "t3_1b3kig",
    "name": "IAmA store manager at Victorias Secret. I would love to HONESTLY answer your questions. "
  },
  {
    "url": "t3_1b3wfu",
    "name": "That Olive Garden receipt is fake; it's free advertising. I know because I work in advertising and have spoken to the people who plan these campaigns. AMA"
  },
  {
    "url": "t3_1b40gh",
    "name": "IAMA Constitutional Lawyer - here all day to answer questions about Prop 8 and DOMA (and anything else about the Constitution or Supreme Court!)"
  },
  {
    "url": "t3_1b4f6r",
    "name": "I am comedian Ari Shaffir, ask me anything."
  },
  {
    "url": "t3_1b4k8q",
    "name": "IAmA 26 year old that has been to over 65 countries, mostly traveling alone. ask me anything,"
  },
  {
    "url": "t3_1b4y3k",
    "name": "Hi! I'm Trevor Moore from The Whitest Kids U' Know! Ask me anything!"
  },
  {
    "url": "t3_1b6x2r",
    "name": "I'm Cody Wilson, founder and director of Defense Distributed, and the guy trying to make 3D printed guns a reality. Ask my anything. "
  },
  {
    "url": "t3_1b6ylb",
    "name": "I'm former Green Beret turned author and host of the Far From Center(ed) podcast, ask me anything...."
  },
  {
    "url": "t3_1b6z0m",
    "name": "We are the directors of The Reward: The animated epic fantasy bromance film. We will draw what you say and answer your questions!"
  },
  {
    "url": "t3_1b6ztr",
    "name": "I am an American Muslim Hafiz (Someone who has memorized the entire Qur'an in the original Arabic text, word for word), AMAA"
  },
  {
    "url": "t3_1b7szy",
    "name": "Hi! We are Kayden Kross and Tucky Williams, stars of Girl/Girl Scene. AMA!"
  },
  {
    "url": "t3_1b87vf",
    "name": "I am a 23 yr old guy with a human claw. Ask me anything."
  },
  {
    "url": "t3_1b8yaw",
    "name": "I am a dealer at a casino, AMA!"
  },
  {
    "url": "t3_1b95jz",
    "name": "I am a former Walt Disney World Custodial castmember. AMA"
  },
  {
    "url": "t3_1b9ph0",
    "name": "I am Bronson Pinchot, film and TV actor, and star of THE BRONSON PINCHOT PROJECT on DIY TV --AMA"
  },
  {
    "url": "t3_1b9riv",
    "name": "I donated my left kidney 3 days ago...ask me anything!"
  },
  {
    "url": "t3_1ba6mi",
    "name": "I have chromesthesia, and I see colors when I listen to music. AMA"
  },
  {
    "url": "t3_1baszg",
    "name": "I have worked for the past 7 years as an English teacher in the Middle East AMA"
  },
  {
    "url": "t3_1baymh",
    "name": "IAmAn obituary writer and editor. Ask me anything!"
  },
  {
    "url": "t3_1bb0oc",
    "name": "I am Hunter Maats, co-author of The Straight-A Conspiracy, and I have the zero-dollar solution to fixing our educational system: changing our culture. Ask Me Anything."
  },
  {
    "url": "t3_1bbt3r",
    "name": "IAmA guy who broke his spine and walks again"
  },
  {
    "url": "t3_1be20a",
    "name": "We are Jessica &amp; Lisa Marie, Australian twin sister ARIA-winning group The Veronicas, currently putting the finishing touches on our 3rd studio album in LA. Ask US Anything!"
  },
  {
    "url": "t3_1bf6e9",
    "name": "I am a service dog trainer for a dog who will eventually go to a child with autism. AMA!"
  },
  {
    "url": "t3_1bfpzx",
    "name": "IAm John Green, author the #1 New York Times bestseller THE FAULT IN OUR STARS, and I'm doing this AMA entirely so that I can get some hats."
  },
  {
    "url": "t3_1bi0wt",
    "name": "I am an astronomer flying on NASA's Stratospheric Observatory for Infrared Astronomy (SOFIA) tomorrow. Ask me anything."
  },
  {
    "url": "t3_1bj6zs",
    "name": "Hi, I'm a manager in McDonald's and have worked there for 8 years. AMA!"
  },
  {
    "url": "t3_1bjo1u",
    "name": "Hi, we are THE MINDY PROJECT's Mindy Kaling, Ike Barinholtz and special guest star Anders Holm. Ask us anything!"
  },
  {
    "url": "t3_1blgn3",
    "name": "Hi. We are The Behemoth, developers of BattleBlock Theater, Castle Crashers, and Alien Hominid. Today we launched our new game. Ask us anything"
  },
  {
    "url": "t3_1blhc0",
    "name": "I am the AOL squatter - AMA"
  },
  {
    "url": "t3_1bli0p",
    "name": "IAm The Promoter/Producer of The Governors Ball Music Festival, NYC's premier large scale event, AMA"
  },
  {
    "url": "t3_1bljp8",
    "name": "I recently traveled to North Korea. It was my 35th country in the last 4 years. iAMA"
  },
  {
    "url": "t3_1blpan",
    "name": "I am Billy Mays III, only son of Billy Mays. (Also known as Infinite Third) Ask Me Anything."
  },
  {
    "url": "t3_1blvj3",
    "name": "I am Billy Watson. I've shot porn for the last decade, a lot of which is interracial porn for Blacks on Blondes. AMA"
  },
  {
    "url": "t3_1bmgw9",
    "name": "Justin Lee (Arrested Development's Annyong Bluth) - Ask Me Questions and See What's New!!"
  },
  {
    "url": "t3_1bmkyf",
    "name": "I am a Butcher ask me anything"
  },
  {
    "url": "t3_1bnqm5",
    "name": "I've met former North Korean soldiers, AMA"
  },
  {
    "url": "t3_1bo9lw",
    "name": "I am Molly Crabapple, an artist who documents subculture and global unrest. Ask Me Anything"
  },
  {
    "url": "t3_1boboq",
    "name": "I have a 20-year old sister who has never spoken, and never will. AMA."
  },
  {
    "url": "t3_1br6da",
    "name": "We are Rooster Teeth and celebrating our tenth anniversary. AMA"
  },
  {
    "url": "t3_1bs2p8",
    "name": "(IAmA) taco bell employee. Ask me anything."
  },
  {
    "url": "t3_1bsq5v",
    "name": "I Am A Blind small business owner AMA"
  },
  {
    "url": "t3_1bssbv",
    "name": "IAmA professional wine/spirits judge, a beverage historian, a winegrower, and a winemaker specializing in Pinot Noir production. AMA"
  },
  {
    "url": "t3_1btj4d",
    "name": "IAMA Fighter jet mechanic that has worked F-22, F-16, F-117 and A-10 aircraft. Ask me almost anything."
  },
  {
    "url": "t3_1bunfc",
    "name": "I am a member of one of the motorcycle clubs known as illegal in many countries, or 1% clubs. AMAA"
  },
  {
    "url": "t3_1buwx1",
    "name": "IAmA 16 year old girl with narcolepsy and cataplexy, as well as other various sleep and miscellaneous disorders. AMA"
  },
  {
    "url": "t3_1bxeag",
    "name": "I am Reggie Watts - AMA!"
  },
  {
    "url": "t3_1bxvsb",
    "name": "I am Uwe Boll, director, producer and screenwriter - AMA"
  },
  {
    "url": "t3_1byn1l",
    "name": "I was mauled by a bear, fought it off, and drove 4 miles down a mountain with my face hanging off. AMA"
  },
  {
    "url": "t3_1bytnh",
    "name": "IAmA lunch lady in a California school district, ask me anything!"
  },
  {
    "url": "t3_1bzppj",
    "name": "I just spent five weeks on *both* sides of the front line in Syria - with regime soldiers and Sunni rebels. AMA."
  },
  {
    "url": "t3_1c00qq",
    "name": "I am a Debt Collector (yes, I know I'm scum), I know the secrets...ASK ME ANYTHING!"
  },
  {
    "url": "t3_1c0w3i",
    "name": "I'm Gary of Tom and Gary's Decentralized Dance Party, or DDP, AMA"
  },
  {
    "url": "t3_1c0xk3",
    "name": "IAmA the daughter of a convicted serial rapist."
  },
  {
    "url": "t3_1c176j",
    "name": "I am a 2000 ELO (USCF) chess tournament player, ask me anything!"
  },
  {
    "url": "t3_1c185q",
    "name": "IAmA 24 male that has been living with cancer for 20 years"
  },
  {
    "url": "t3_1c2u4m",
    "name": "I am Jrg Sprave, that crazy bald slingshot guy from Germany."
  },
  {
    "url": "t3_1c3585",
    "name": "We're Adam and Dave, creators of Divekick, the world's first two-button, no-joystick fighting game. AMA!"
  },
  {
    "url": "t3_1c3oow",
    "name": "IAmAn 19 year old girl who went deaf for two years due to degenerative joint disease - and can now hear again! AMA!"
  },
  {
    "url": "t3_1c3s6t",
    "name": "Juliette Danielle (Lisa from The Room)...take 2."
  },
  {
    "url": "t3_1c4eyj",
    "name": "I am a Native American. And I live on a reservation. Ask me anything."
  },
  {
    "url": "t3_1c4t35",
    "name": "I am a Canadian Immigration Lawyer, Ask Me Anything!"
  },
  {
    "url": "t3_1c4zms",
    "name": "We are John Romaniello and Adam Bornstein: Personal trainers for Arnold, Fitness Experts, and Authors of Man 2.0: Engineering the Alpha. Ask Us Anything!"
  },
  {
    "url": "t3_1c5dj8",
    "name": "Louis CK Iama hello"
  },
  {
    "url": "t3_1c5olx",
    "name": "IAmA TSA Agent at a large international airport. AMA about how much the TSA sucks"
  },
  {
    "url": "t3_1c5z55",
    "name": "I'm one of the two norwegian teeangers who found the purse containing about $81,500. AMA"
  },
  {
    "url": "t3_1c6wa0",
    "name": "I am a 911 dispatcher. AMA"
  },
  {
    "url": "t3_1c7qsp",
    "name": "I Am Drew Magary: Deadspin Columnist, GQ Correspondent, And Author Of Someone Could Get Hurt. Ask Me Anything."
  },
  {
    "url": "t3_1c7wd9",
    "name": "IAmA 22yo [F] who suffers many medical ailments from the Chernobyl nuclear explosion; AMA?"
  },
  {
    "url": "t3_1c8e7v",
    "name": "I am pretending to be Morgan Freeman for the next hour and will answer questions how we all think Morgan Freeman should have. AMA"
  },
  {
    "url": "t3_1c8w4u",
    "name": "IAMA 18 year old male who lost his penis to penile cancer. AMA (nsfw)"
  },
  {
    "url": "t3_1c9fpb",
    "name": "Award winning, male porn star Dane Cross"
  },
  {
    "url": "t3_1c9mo5",
    "name": "IAMA 19 year old homeless female living in a shelter. There are a few of these, but everyone's situation is different, so AMA!"
  },
  {
    "url": "t3_1c9rjw",
    "name": "IAma 17 year old Egyptian who took part in the revolution two years ago; AMA"
  },
  {
    "url": "t3_1c9xli",
    "name": "IAMA male who, when I was 16, had my leg and half my pelvis almost completely ripped from my body. I was awake during my first six hour surgery. I really shouldn't have survived. Ask me anything."
  },
  {
    "url": "t3_1capvr",
    "name": "IAMA mom who rode my bike from Alaska to Argentina with her children and wrote a book about it, Changing Gears. AMA"
  },
  {
    "url": "t3_1cay9y",
    "name": "I am a 25 year old who suffers from a (cool) skin condition called Dermatographia. AMA."
  },
  {
    "url": "t3_1cccsa",
    "name": "IAmA male Victoria's Secret employee. AMA"
  },
  {
    "url": "t3_1ccf2l",
    "name": "We are Chucklefish games, developers of indie game Starbound."
  },
  {
    "url": "t3_1cdse1",
    "name": "IAMA person with a severe form of ichthyosis, often talked about on r/WTF. Pictures of my skin inside. AMA."
  },
  {
    "url": "t3_1cf2z2",
    "name": "I broke my neck when I was 13 years old, and been in a wheelchair ever since. AMA."
  },
  {
    "url": "t3_1cfdc2",
    "name": "IAmA 117th Boston Marathon Finish Line Volunteer. AMA"
  },
  {
    "url": "t3_1cfomh",
    "name": "I am a professional skydiver. I have made over 4,000 skydives. I am a Tandem Instructor, AFF Instructor and Aerial Photographer. AMA."
  },
  {
    "url": "t3_1cgeh1",
    "name": "I am a mile under a mountain. IAmA grad student researching dark matter. AMAA"
  },
  {
    "url": "t3_1cgo6n",
    "name": "IAMA I'm Prince Michael of the Principality of Sealand. Est. 1967 we're the smallest Independent State in the world. Our tiny nation has seen confrontations with governments and I was kidnapped by armed terrorists."
  },
  {
    "url": "t3_1chb89",
    "name": "I am actor/comedian Kevin Nealon. Go ahead and ask me anything."
  },
  {
    "url": "t3_1chmc4",
    "name": "Eseneziri! I'm David Peterson, the creator of the Dothraki and High Valyrian languages for HBO's Game of Thrones, and the alien language and culture consultant for Syfy's Defiance. AMA"
  },
  {
    "url": "t3_1cjr8v",
    "name": "hello. i am ranger dave from san francisco's outside lands. ask me anything. AMA"
  },
  {
    "url": "t3_1ckamk",
    "name": "I'm Shane Koyczan. Reddit help launch my video poem To This Day into orbit with now over 8 million views. I like spoiler alerts and other useful warnings... ask me anything."
  },
  {
    "url": "t3_1ckp9q",
    "name": "Hello, yo, hi, I'm Chuck Palahniuk the worst best bad writr. Neither can I spell or keyboard. Ask away."
  },
  {
    "url": "t3_1clcvg",
    "name": "IAMA new prostitute in a high-end legal brothel. AMA."
  },
  {
    "url": "t3_1cluui",
    "name": "I'm risking my life for a year to see 1,000 of my family saved from slavery. I'm trading the ultimate comfort zone of The USA for the ultimate conflict zone of Eastern Congo. I'm Ultimate Fighter Justin Wren. Oh, &amp; I can beat up Zimmerman, Zombie, &amp; Canseco at the same time. I &lt;3 cats... AMA"
  },
  {
    "url": "t3_1cm9mp",
    "name": "I am Ryan Miller- lead singer of Guster, composer of Safety Not Guaranteed, famed ladyboner and 6+ year Redditor. AMAAAAAA"
  },
  {
    "url": "t3_1cn0mp",
    "name": "Previous contestant from Survivor AMA!"
  },
  {
    "url": "t3_1cn2li",
    "name": "Hey! I am Lexi Bloom - the retired porn star gone cam girl/student. AMA"
  },
  {
    "url": "t3_1cn5e1",
    "name": "We are Matt and Kim of the band Matt and Kim. AMA!"
  },
  {
    "url": "t3_1cnabp",
    "name": "Iama 21y/o guy who bought a 1-way ticket to Europe, had no plan, traveled by myself for 6 months, visited 20 countries, and only spent about $4000, AMA."
  },
  {
    "url": "t3_1co7la",
    "name": "IAMA resident of Watertown living in the cordoned off zone. AMA"
  },
  {
    "url": "t3_1cozyo",
    "name": "My dad was a firefighter who responded to the OKC bombing and pulled bodies out of the rubble. Ask him anything!"
  },
  {
    "url": "t3_1cprfp",
    "name": "IAMA 21 year old male who's lived outside for over two years of my life. I'm a capable woodsman, here to answer your questions. AMA"
  },
  {
    "url": "t3_1cpwqh",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_1cqgyt",
    "name": "Hello! I did an AMA six months ago and people are still asking questions. So i decided to do it again! I am a cardiac surgeon that is involved in a transplant program and research about VADs and artificial organs. Here we go again AMA!"
  },
  {
    "url": "t3_1crxgo",
    "name": "IAmA female sex shop clerk in the rural South. AMA"
  },
  {
    "url": "t3_1csedo",
    "name": "I just toured Chernobyl. I stood at reactor 4, marked radioactive hotspots and walked through the abandoned town of Prypat."
  },
  {
    "url": "t3_1cstrm",
    "name": "I did research on facial attractiveness for years at a major university and published in the field. AMA"
  },
  {
    "url": "t3_1ctj5z",
    "name": "I am genetically screening my future children. AMA."
  },
  {
    "url": "t3_1cu2db",
    "name": "I was a cam model on a popular camming website, AMA."
  },
  {
    "url": "t3_1cu36m",
    "name": "I am a 22yo male nurse on night shift right now, AMA."
  },
  {
    "url": "t3_1cvof4",
    "name": "IAMA Hi, I'm Oney/Chris O'Neill, youtube famous animator. AMA."
  },
  {
    "url": "t3_1cvqdp",
    "name": "I'm a Taxi driver in a College Town...i've seen it all...AMA"
  },
  {
    "url": "t3_1cwh6b",
    "name": "I play Nikola Tesla on the History Channel's Men Who Built America - AMA"
  },
  {
    "url": "t3_1cwpoy",
    "name": "IAmA a private Disney guide (along with other Orlando attractions). AMAA"
  },
  {
    "url": "t3_1cxskf",
    "name": "IAm Rich Roll, author of Finding Ultra. When I turned 40 I was 50 lbs. overweight and out of shape, decided to change, became an ultra-distance triathlete, and 3 years later I was named one of the 25 Fittest Men in the World. AMA about my journey, plant-based nutrition, and fitness!"
  },
  {
    "url": "t3_1cz1ax",
    "name": "We are Force and Sully, the Greenmen from Vancouver Canucks games. AMA!"
  },
  {
    "url": "t3_1d04cq",
    "name": "I am the managing director of FreeOnes.com (NSFW) AMA"
  },
  {
    "url": "t3_1d07q9",
    "name": "IAmA constable in the London Metropolitan Police. Ask me just about anything"
  },
  {
    "url": "t3_1d0sda",
    "name": "I am Hank Azaria  actor, Simpsons voice guy &amp; Determined to Succeed supporter. AMA."
  },
  {
    "url": "t3_1d181y",
    "name": "We are Portugal. The Man - ask us ANYTHING!"
  },
  {
    "url": "t3_1d2tzv",
    "name": "Im a British man whos taken road trips covering all but 8 of the Contiguous US with many stops in between to have fun and learn about the USA - AMA"
  },
  {
    "url": "t3_1d3l3e",
    "name": "I am the Before, During, and After Meth Addict who was in Air Force and Kinda Looks Like Jim Morrison Ask Me Anything!"
  },
  {
    "url": "t3_1d3qm8",
    "name": "IAmA guy who had debris from an airplane engine smash through his car. Air Canada has refused to do anything about it!"
  },
  {
    "url": "t3_1d42co",
    "name": "I am The Excited Biologist! AMA!"
  },
  {
    "url": "t3_1d5oxd",
    "name": "I used to pass through airport security with forbidden items to test the security procedures. AMA"
  },
  {
    "url": "t3_1d5rdl",
    "name": "I am Kari Byron, Grant Imahara and Tory Belleci from MythBusters. AMA."
  },
  {
    "url": "t3_1d6e4m",
    "name": "Hey, Alex Winter here from Bill &amp; Ted and Downloaded and noticed a lot of child stars memes today. That's what my next documentary's about. Thought it would be a good day to say hi. Ask me anything!"
  },
  {
    "url": "t3_1d7nzf",
    "name": "I am a 19-yr-old Austrian guy who has a sleeping disorder caused by a disfunction of my brain. AMA."
  },
  {
    "url": "t3_1d81y0",
    "name": "[NSFW] I raised over $100,000 for a text-based smut game. AMAA!"
  },
  {
    "url": "t3_1d8ji0",
    "name": "We are Patrick Gilmore and Peter New, actors from Stargate Universe and My Little Pony: Friendship is Magic. Ask Us Anything."
  },
  {
    "url": "t3_1d8v4o",
    "name": "My friend built an Iron Man suit from scratch and wore it to the opening night, ask him anything! (AMA)"
  },
  {
    "url": "t3_1d92lj",
    "name": "I am a former Radioshack employee who is no longer bound by a social media agreement. AMA."
  },
  {
    "url": "t3_1d94gu",
    "name": "Detroit Police Officer by Request AMA"
  },
  {
    "url": "t3_1d9vxx",
    "name": "IAmA Current Subway Employee. Ask Me Anything"
  },
  {
    "url": "t3_1da2t6",
    "name": "I worked QA for some of the top publishers (EA, SEGA, SONY, etc.) in the Video Game industry for over 16 years. Ask Me Anything."
  },
  {
    "url": "t3_1das0z",
    "name": "IAmA mom of a blind toddler. AMA!"
  },
  {
    "url": "t3_1dcche",
    "name": "IAMA grandson of man who helped liberate Dachau concentration camp 68 years ago today. He doesn't want people to forget what happen, and agreed to answer any questions you might have. I'll be helping him type responses. AMA."
  },
  {
    "url": "t3_1dcr3j",
    "name": "I am a comedian named Bo Burnham. AMA"
  },
  {
    "url": "t3_1dd237",
    "name": "IAMA Church of Scientology staff member and active Scientologist. Ask me anything!"
  },
  {
    "url": "t3_1ddd9j",
    "name": "We are Yahoo! Sports' NHL hockey experts. AMA!"
  },
  {
    "url": "t3_1ddek7",
    "name": "IAMA Zookeeper with an hour (probably) to kill before our new giraffes get here AMA"
  },
  {
    "url": "t3_1de2ke",
    "name": "I'm an American who's spent a good portion of the last four years road-tripping around 45 of Japan's 47 prefectures. AMA"
  },
  {
    "url": "t3_1desb3",
    "name": "I am Paul Shapiro with The Humane Society of the US. Ive been advocating for farm animals for 20 years, doing undercover investigations at factory farms, and now helping to enact anti-cruelty laws and corporate policies, as well as combating ag-gag bills. AMA!"
  },
  {
    "url": "t3_1dffhk",
    "name": "I am currently on a boat in the middle of the Atlantic Ocean. AMAA"
  },
  {
    "url": "t3_1dgggj",
    "name": "I am an ex-convict who spent eight years in solitary confinement and was friends with Evan Ebel. Ask me anything"
  },
  {
    "url": "t3_1dh4xc",
    "name": "IAmA Step Rider, Trash Slinger, I am The Garbage Man! AMA!"
  },
  {
    "url": "t3_1dhj1j",
    "name": "We are Editors at Maxim Magazine - Ask Us Anything!"
  },
  {
    "url": "t3_1dhro9",
    "name": "Marc Maron is me. Questions? We good?"
  },
  {
    "url": "t3_1dij07",
    "name": "Hi I work at a morgue. AMA"
  },
  {
    "url": "t3_1diy6l",
    "name": "I am a dentist. Ask me whatever the hell you want."
  },
  {
    "url": "t3_1dj3gs",
    "name": "I used to Rob Houses!!! AMAA"
  },
  {
    "url": "t3_1djped",
    "name": "IAmA correctional officer with one of the largest county jails in the United States - Ask me anything!"
  },
  {
    "url": "t3_1djxvq",
    "name": "IAmA Paul Miller. I quit the internet for a year, it didn't go great, and now I'm back"
  },
  {
    "url": "t3_1dkb2t",
    "name": "I Am Bear McCreary, composer for Da Vincis Demons, The Walking Dead &amp; Battlestar Galactica. AMA!"
  },
  {
    "url": "t3_1dkeht",
    "name": "IAm Minh Le, aka. Gooseman, co-creator of the original Counter-Strike and now Tactical Intervention, AMA!"
  },
  {
    "url": "t3_1dkl1e",
    "name": "Hi, I am Zane Lamprey from TV Shows Three Sheets and Drinking Made Easy and I drink for a living. AMA"
  },
  {
    "url": "t3_1dmd7k",
    "name": "We are Fighting Gravity, the black light performance group from America's Got Talent. Ask us anything!"
  },
  {
    "url": "t3_1dmmp1",
    "name": "IAmA NASA Innovative Advanced Concepts fellow, developing a mission concept to the edge of the solar system and nearby interstellar space. AMA"
  },
  {
    "url": "t3_1dmvwo",
    "name": "Hey. I am Alex House, I play(ed) Todd on Todd and the Book of Pure Evil and other characters in other stuff. Ask Me Anything."
  },
  {
    "url": "t3_1dn5q6",
    "name": "Was homeless at 19 years old, am 23 now and will be doing cancer research at one of the best laboratories in the world. AMA"
  },
  {
    "url": "t3_1doe8k",
    "name": "IamA American guy who spent 1 month in a Malaysian Prison. Real life Locked up Abroad here. Ask me anything!"
  },
  {
    "url": "t3_1dpbq1",
    "name": "I am a 911 Operator/Police Dispatcher...AMA"
  },
  {
    "url": "t3_1dpj7i",
    "name": "I am a lunch lady and I work in an elementary school cafeteria. AMA!"
  },
  {
    "url": "t3_1dpopx",
    "name": "IAMA 1%er member of an Outlaw Motorcycle Club &amp; this is my 3rd AMAA."
  },
  {
    "url": "t3_1dq167",
    "name": "I am a police officer in GA AMA"
  },
  {
    "url": "t3_1dqmyk",
    "name": "I am a straight bouncer at a gay bar. AMA"
  },
  {
    "url": "t3_1dqpo1",
    "name": "IAmA a guy who fractured my penis last year, had a series of 12 injections in my penis to fix it that didn't work, and then had penile surgery last week to finally repair the damage. AMA!"
  },
  {
    "url": "t3_1dr8ss",
    "name": "I am a geek that got Google Glasses yesterday, AMA..."
  },
  {
    "url": "t3_1dsebw",
    "name": "I am a person who from 9-15 years old attended a school that did not have any teachers, you were required to teach yourself every subject from books at your own pace, while sitting in cubicles all day with very little interaction with other students or extracurricular activities. AMA"
  },
  {
    "url": "t3_1dszfi",
    "name": "I used to be a custodian at Walt Disney World. AMA"
  },
  {
    "url": "t3_1dubwr",
    "name": "My name is Patrick. I've got severe anxiety. There's nothing special about me... But I am suffering through a particularly terrible panic attack. So please help distract me... AMA"
  },
  {
    "url": "t3_1dv85c",
    "name": "I am the husband to Rachelle Friedman/ Chapman aka the paralyzed bride who became a quadriplegic 4 weeks before our wedding AMA"
  },
  {
    "url": "t3_1dvd2s",
    "name": "Dragged Into Sunlight - AMA"
  },
  {
    "url": "t3_1dwbbj",
    "name": "I Am Excision, dubstep producer/dj/robot dinosaur - Ask Me Anything"
  },
  {
    "url": "t3_1dwn45",
    "name": "I am Kristen Jordan, an adult model and actress. AMA :)"
  },
  {
    "url": "t3_1dxls5",
    "name": "We are Bryce, Aaron and Matt of The National. AMA!"
  },
  {
    "url": "t3_1dy1p1",
    "name": "I'm Dean Evans...the Creative Director for Far Cry 3: Blood Dragon and my typing skills are terrible. AmAA."
  },
  {
    "url": "t3_1dyqlq",
    "name": "Justin Lee AKA Annyong Bluth from Arrested Development - Ask Me Anything :)"
  },
  {
    "url": "t3_1e0ast",
    "name": "I am David J. Fulde, I will answer EVERY question posted for the next three hours"
  },
  {
    "url": "t3_1e0gs0",
    "name": "I Am Tim Livewire Shieff I live 'Life in a Handstand' Parkour/Freerunning is my art - Ask Me Anything"
  },
  {
    "url": "t3_1e0ze6",
    "name": "I am THE AMAZING ATHEIST, YouTube Vlogger, Notorious Douchebag, Lord of the Neckbeards and All-Around Perverted Weirdo . . . AMA!"
  },
  {
    "url": "t3_1e2q98",
    "name": "We are 12 Heisman Trophy winners hanging out between takes at a commercial shoot. Ask us anything!"
  },
  {
    "url": "t3_1e2x98",
    "name": "You want to make movies? You like movies? You hate me? I'm Eli Roth - ASK ME ANYTHING. I dare you."
  },
  {
    "url": "t3_1e4023",
    "name": "Mitch Hunter (Full Face Transplant)"
  },
  {
    "url": "t3_1e4q1h",
    "name": "We are 12 Heisman Trophy winners hanging out between takes on Day 2 of a commercial shoot. Ask us anything!"
  },
  {
    "url": "t3_1e5iey",
    "name": "Hello, iama farmer currently sitting in a tractor planting corn, ask me almost anything!"
  },
  {
    "url": "t3_1e5oco",
    "name": "I am a chiropractor. Is chiropractic medicine bullshit, science or both? No holds barred, AMA."
  },
  {
    "url": "t3_1e6m8r",
    "name": "IAMA New Long Haul Trucker, Ask Me Anything."
  },
  {
    "url": "t3_1e7dt0",
    "name": "I am an AP US Government teacher. The AP Exam is Tuesday, May 14th. AMAA."
  },
  {
    "url": "t3_1e7x8n",
    "name": "My name is Mike Gillette, former Army paratrooper, SWAT commander, Homeland Security consultant, armed forces tactical trainer; current executive bodyguard, performing strongman and martial arts expert. AMA!"
  },
  {
    "url": "t3_1e9kdl",
    "name": "We are Jake and Amir (and we are launching a NEW podcast today!) Ask us anything."
  },
  {
    "url": "t3_1e9p9p",
    "name": "Hi I'm Erik Roner; Professional free-skier, BASE jumping veteran, member of Travis Pastrana's Nitro Circus, star of Roner Vision on Network A. I just released a video of me driving my late friend Shane McConkey's snowmobile off an 800Ft / 250M cliff before I parachuting out. AMA!"
  },
  {
    "url": "t3_1ea4ci",
    "name": "IAMA sex toy tester/reviewer/journalist/blogger and a Dildologist. Ask away!"
  },
  {
    "url": "t3_1eb31o",
    "name": "IAmA US Army Combat Medic who lost his legs in Southern Afghanistan. AMA"
  },
  {
    "url": "t3_1ebe7k",
    "name": "IAmA Vampire Weekend. We are Ezra, Rsotam, Chris &amp; Chris. Ask us anything."
  },
  {
    "url": "t3_1ebh89",
    "name": "We are Yahoo! Sports' NHL hockey experts. AMA!"
  },
  {
    "url": "t3_1ec2s7",
    "name": "IAmA middle class escort in Seattle, WA, USA working since January of this year. Please AMA."
  },
  {
    "url": "t3_1eds2k",
    "name": "I am an employee at Taco Bell AMA"
  },
  {
    "url": "t3_1edupw",
    "name": "I am Ken Love and I have hunted for rare and unusual fruit in over 50 countries! Ask me anything!"
  },
  {
    "url": "t3_1eduy3",
    "name": "We are staff, students and teachers at a village middle school in Ghana in West Africa. Ask us anything."
  },
  {
    "url": "t3_1ee9tv",
    "name": "We are ANAMANAGUCHI! We just made a 22-track album on our own. Our Kickstarter campaign to make it MORE than an album has raised $160,000 in less than two weeks. It's been a crazy process - ASK US ANYTHING!!"
  },
  {
    "url": "t3_1eegnm",
    "name": "Former waitress Katy Cipriano from Amy's Baking Company; ft. on Kitchen Nightmares"
  },
  {
    "url": "t3_1eggwb",
    "name": "I'm iJustine! Maker of videos on the internet!"
  },
  {
    "url": "t3_1eh81a",
    "name": "YouTuber Philip DeFranco AMA"
  },
  {
    "url": "t3_1eir41",
    "name": "IAMA filmmaker for VICE, Ben Anderson. I've been covering the war in Afghanistan for the last six years. AMA"
  },
  {
    "url": "t3_1ej8wy",
    "name": "I was an Abercrombie &amp; Fitch manager for several years AMA"
  },
  {
    "url": "t3_1ejbqz",
    "name": "IAMA manager at a malls store, and I'm here to teach you assholes how to get that summer job. AMA"
  },
  {
    "url": "t3_1ejeog",
    "name": "We are the largest Sensory Deprivation Tank Center in the US. Ask Us Anything!"
  },
  {
    "url": "t3_1ejn6h",
    "name": "IAmA Beekeeper who tends to 2000+ beehives year round. Ask me anything buzzzz."
  },
  {
    "url": "t3_1ekt4p",
    "name": "IAM A mall cop, AMA"
  },
  {
    "url": "t3_1elwxk",
    "name": "I Am A Phone Sex Operator Specializing In Erotic Hypnosis AMA"
  },
  {
    "url": "t3_1enarr",
    "name": "IAmA former carnie (worked for traveling midways), i know all about the games and rides. AMA"
  },
  {
    "url": "t3_1entc2",
    "name": "Hi Reddit! We are three lawyers (and an unpaid intern) from the California Innocence Project walking from San Diego to Sacramento to deliver clemency petitions to Governor Brown and raise awareness about wrongful convictions. Ask Us Anything!"
  },
  {
    "url": "t3_1eoctr",
    "name": "I am a pizza delivery driver in Flint, MI - a city with one of the highest violent crime rates in the U.S. I've seen my fair share of crazy stuff. AMA!"
  },
  {
    "url": "t3_1eoxwt",
    "name": "IAm Megan Hart, A NYT and USA Today bestselling author of erotic fiction, erotic romance and more! AMA"
  },
  {
    "url": "t3_1epkt7",
    "name": "I am Tony Swatton, a blacksmith whos made weapons and armor for over 200 films and TV shows. AMA."
  },
  {
    "url": "t3_1erkq9",
    "name": "I Am Amber Nash, best known as the voice of Pam Poovey on FX's Archer ask me anything!"
  },
  {
    "url": "t3_1esbkv",
    "name": "I am a neurologist - a physician specializing in disorders of the nervous system. AMA!"
  },
  {
    "url": "t3_1etzr5",
    "name": "IAmA former employee of Regal Cinemas for 4 years, as well as some private theatres. AMA!"
  },
  {
    "url": "t3_1eud1s",
    "name": "Im Mark Miller, the fastest TT rider from America on 200mph gasoline-powered superbikes &amp; winner of Isle of Man's TTZero event riding a USA manufactured Team MotoCzysz electric racing motorcycle. I'm also featured in the new doc Charge! Ask Me Anything!"
  },
  {
    "url": "t3_1eug1t",
    "name": "I have been a waiter/bartender for 8 years. AMA"
  },
  {
    "url": "t3_1evd42",
    "name": "I sell big white rectangles that most of you sleep on. AMA."
  },
  {
    "url": "t3_1ewcaa",
    "name": "I am the only person to have visited EVERY COUNTRY in the world without flying... AMA!!"
  },
  {
    "url": "t3_1ewcvf",
    "name": "I Am A Liberal Saudi Woman Living in Riyadh, Saudi Arabia. AMA!"
  },
  {
    "url": "t3_1ewmrr",
    "name": "So I'm a girl who just started working for a porn company (not a performer, more like script writing parodies and marketing etc..) I've been here 4 months and seen some truly fucked up shit. AMA!"
  },
  {
    "url": "t3_1ewz8w",
    "name": "I am Alan Sepinwall, professional watcher of TV and sometime-author... AMA!"
  },
  {
    "url": "t3_1exa2k",
    "name": "Hi. I'm Emmett Shear, founder and CEO of Twitch, the world's leading video platform and community for gamers. Ask Me Anything!"
  },
  {
    "url": "t3_1exz1a",
    "name": "I was a downhill skateboarder, and now I am a paraplegic. AMA"
  },
  {
    "url": "t3_1ey4ga",
    "name": "I am a survivor of the Moore, OK tornado. Sought shelter in a bank vault. Bank is leveled. My name is Dena Clark. AMA."
  },
  {
    "url": "t3_1eygeh",
    "name": "IAMA woman born in North Korea and flee to China when I was 17."
  },
  {
    "url": "t3_1ez77q",
    "name": "I am a Microsoft Licensing Specialist - AmA"
  },
  {
    "url": "t3_1ezj1c",
    "name": "I'm Alton Brown I cook stuff and write and shoot video about cooking stuff..."
  },
  {
    "url": "t3_1f1fw6",
    "name": "I have been doing HAZMAT/Environmental Clean Up Since 2005. I cleaned up many Envrionmental Hazards including UST, Wrecks, Chemical Explosions, Oil Spills, Bio Hazards (suicides/homocides) Train Derailments, and much more! AMA"
  },
  {
    "url": "t3_1f1n1z",
    "name": "IAmA therapist. Turn the tables and ask away!"
  },
  {
    "url": "t3_1f2p0i",
    "name": "I am a 911 dispatcher for police, fire and medical in a large metropolitan area. And I've heard it all."
  },
  {
    "url": "t3_1f2wcv",
    "name": "IAmA one of the top high-end real estate brokers in Manhattan AMA"
  },
  {
    "url": "t3_1f2y99",
    "name": "I am an Airborne Infantry soldier living near Venice, Italy... AMA"
  },
  {
    "url": "t3_1f36hb",
    "name": "I am the son (and helper of) a mom who has done Animal Rescue her whole life. We have rescued animals from slaughter houses, mills and more. AMA."
  },
  {
    "url": "t3_1f4jfx",
    "name": "I am a WORLD CHAMPION UNICYCLIST. AmA."
  },
  {
    "url": "t3_1f4xlx",
    "name": "I am a humanitarian worker who has been in Haiti since 2010, AMA."
  },
  {
    "url": "t3_1f55iv",
    "name": "In honor of memorial day, I am an 88 year old WW2 aerial photographer/vet"
  },
  {
    "url": "t3_1f6b0o",
    "name": "I self-publish my own children's books &amp; I think you should too. AMA"
  },
  {
    "url": "t3_1f75wq",
    "name": "Ladies of Reddit, I am a MAC artist for 8 years and worked in 2 different countries,AMA (Men are welcomed too)"
  },
  {
    "url": "t3_1f7gxz",
    "name": "We are Rebelution, a rock / reggae band from California. We have been touring internationally and giving our music away for free for 8 years. Ask us anything!"
  },
  {
    "url": "t3_1f7nbz",
    "name": "Hi Reddit. I'm Seth Horowitz, neuroscientist, author of The Universal Sense: How Hearing Shapes the Mind, sound designer, science consultant for TV &amp; film, 3D printing (for science!) afficinado. AMA!"
  },
  {
    "url": "t3_1f7q71",
    "name": "76 Day Coma + 3 months in ICU, Died 4 times, relearning to walk for two years, Became addicted to my pain meds, then rehab 3 times. Now 6 months clean"
  },
  {
    "url": "t3_1f7rb1",
    "name": "IAm A Ship Captain back from the world's most ginormously monstrous ship"
  },
  {
    "url": "t3_1f9o05",
    "name": "I am 63 years old and fought in the Vietnam war. AMA!"
  },
  {
    "url": "t3_1fa2xs",
    "name": "I spent 20yrs and $250K to hack my own biology, I am Dave Asprey the Bulletproof Exec AMA"
  },
  {
    "url": "t3_1fae5f",
    "name": "Hello! I Am youtuber Boogie2988, Aka Francis. Please ask me stuff about stuff!"
  },
  {
    "url": "t3_1fbz00",
    "name": "I am Gary Hunt, 3 times world champion cliff diver. I make a living jumping off a 27m platform into water. AMA"
  },
  {
    "url": "t3_1fccbs",
    "name": "I teach Concealed Firearms Permit classes as well as being a handgun instructor. AMA"
  },
  {
    "url": "t3_1fcivo",
    "name": "I kick people out of my Alamo Drafthouse movie theaters without a refund for texting and talking. AMA."
  },
  {
    "url": "t3_1fd27k",
    "name": "IAmA Hostess at a Hostess Club in Waikiki, HI. I earn commission when wealthy patrons buy me a drink in exchange for 10-15 minutes of my company, where each drink ranges from $20 to $20,000. AMA. [NSFW]"
  },
  {
    "url": "t3_1fedpw",
    "name": "I Am An Air Force Bomb Squad Technician Serving On My 9th Deployment. AMA!"
  },
  {
    "url": "t3_1fejh0",
    "name": "We are Yahoo! Sports' NHL hockey experts, here for the 3rd round of the playoffs. AMA!"
  },
  {
    "url": "t3_1fep00",
    "name": "I am Caroline Jensen. Sister. Daughter. Wife. Mom. Fighter Pilot. THUNDERBIRD #3."
  },
  {
    "url": "t3_1feuc1",
    "name": "I starred on Broadway, dated a supermodel, was in a love triangle with Bruce Willis and had a breakdown and ended up in the nut house. AMA!"
  },
  {
    "url": "t3_1ff1fs",
    "name": "I am an 18 year old Canadian PSE escort. AMA"
  },
  {
    "url": "t3_1fh8vp",
    "name": "I am the owner/operator of a small town movie theater. We permanently close our doors Sunday night. AMA!"
  },
  {
    "url": "t3_1fha15",
    "name": "I'm mc chris. I wrote a bunch of raps and made cartoons. I've got a new project I'm working on, but mainly I wanted to say sorry for being lame before. ASK ME ANYTHING!"
  },
  {
    "url": "t3_1fhcek",
    "name": "(NSFW - gore) Last year, I suffered a 3rd degree friction burn to my left palm. Since then I've had a skin graft from the sole of my foot, a z-plasty operation to release the scars and now have to wear a pressure glove 23hrs a day for 2 years. AMA!"
  },
  {
    "url": "t3_1fioho",
    "name": "(NSFW) IAma Medic in the United States Army, I have deployed to very hostile and austere environments. Ask Me Anything."
  },
  {
    "url": "t3_1fjg54",
    "name": "I am Rob MacGregor, author of Indiana Jones and the Last Crusade, (the book adaptation from the movie) as well as six other original Indy novels and over 30 other fiction and non-fiction books. AMA!"
  },
  {
    "url": "t3_1fjx7w",
    "name": "I am 22 and was just released from prison for Trafficking Marijuana after 17 months of incarceration... AMA!"
  },
  {
    "url": "t3_1fkp0s",
    "name": "I am a British policeman of 10 years. AMA"
  },
  {
    "url": "t3_1fl25h",
    "name": "I am a professional shoutcaster by the name of BreakyCPK, I make a living by casting video games, AMAA"
  },
  {
    "url": "t3_1flaad",
    "name": "I am BRONSON PINCHOT host of THE BRONSON PINCHOT PROJECT on DIY. Ask me anything today while my marathon airs from 1pm through 9 pm."
  },
  {
    "url": "t3_1fljds",
    "name": "IAMA Narcotics Prosecutor in a large city, keeping you all safe because of the war on drugs. AMAA."
  },
  {
    "url": "t3_1flkt6",
    "name": "IAmA 25yr old woman who nearly burned to death at 16. AMA! NSFW"
  },
  {
    "url": "t3_1fndld",
    "name": "We are 5secondfilms and we are about to make a 5,400-second feature film! Ask us anything!"
  },
  {
    "url": "t3_1fnuvn",
    "name": "We are helicopter pilots! Ask us anything!"
  },
  {
    "url": "t3_1fpbv1",
    "name": "I was one of the 520 people laid off by Zynga yesterday. What do you wanna know about Zynga? AMA"
  },
  {
    "url": "t3_1fqph4",
    "name": "I am Justin Roiland, writer, producer, director, and voice actor. Probably best known as the voice of Lemongrab(s), and creator of House of Cosbys. Soon to also be known for co-creating the upcoming Adult Swim animated show Rick and Morty with my good friend Dan Harmon. AMA!"
  },
  {
    "url": "t3_1fssv7",
    "name": "I am James Altucher, founder of 20 companies (17 of which failed), author of 11 books, and writer. Ive made millions, lost it all, made it back, and written about everything Ive learned along the way. AMA"
  },
  {
    "url": "t3_1ftfg0",
    "name": "Hi, I'm Orlando Jones -- Not the little boy from Everybody Hates Chris. Not Solange Knowles. Not Wesley Snipes. Not Orlando Bloom. Not The White Jeff Goldblum. Ask Me Anything!!"
  },
  {
    "url": "t3_1fuzwt",
    "name": "I'm Jaan Tallinn, co-founder of Skype, Kazaa, CSER and MetaMed. AMA."
  },
  {
    "url": "t3_1fvnho",
    "name": "I'm a secret liberal who worked for Fox News Channel for 8 years -- before going rogue and briefly leaking information and video clips to a website. My name is Joe Muto, but you may know me as the Fox News Mole. Ask Me Anything."
  },
  {
    "url": "t3_1fw4vh",
    "name": "I am David Schwartz, composer of Arrested Development. AMA"
  },
  {
    "url": "t3_1fxbks",
    "name": "IAMA previous intern with Macklemore &amp; Ryan Lewis. AMA"
  },
  {
    "url": "t3_1fxp28",
    "name": "HEY EVERYONE! I'm Richard Jin Namkung, playing P-Hound on the 4th season of Arrested Development! AMA"
  },
  {
    "url": "t3_1fy5k4",
    "name": "IAMA female cashier in a sex shop located in a fully nude strip club. AMA."
  },
  {
    "url": "t3_1fz2wt",
    "name": "IAmA surgeon in training. I've seen and touched (almost) all the human organs. Most of the pictures you see as NSFW gore is what I see and do everyday. Ask me anything."
  },
  {
    "url": "t3_1fzf8f",
    "name": "IAMA Child Protective Services (CPS) Social Worker. People always have lots of questions about my job, so if you're interested... AMA!"
  },
  {
    "url": "t3_1fzfnw",
    "name": "I am an oilfield worker in west Texas with 10 hours to kill until my shift is over. AMA"
  },
  {
    "url": "t3_1g0a2k",
    "name": "IAMA woman with Down Syndrome, AMA about my life, my disorder, or anything at all!"
  },
  {
    "url": "t3_1g103e",
    "name": "I am 33 years old, and a self-made millionaire. Total net worth ~$3.5m. AMA"
  },
  {
    "url": "t3_1g1g02",
    "name": "IAmA 24F currently in the hospital for a possible case of ITP (Idiopathic thrombocytopenic purpura) Which is an auto immune reaction that attacked my blood platelets. AMA"
  },
  {
    "url": "t3_1g1u83",
    "name": "We are Croteam, the makers of Serious Sam, ask us anything!"
  },
  {
    "url": "t3_1g2ozz",
    "name": "I spent 3 years living in a $100 a month apartment in Mexico with my dog Blue, and dodged a crooked federale sent to kill me, trying to start my own business. IAm Dave Munson, CEO of Saddleback Leather. AMA."
  },
  {
    "url": "t3_1g4f4b",
    "name": "I'm Myq Kaplan, a comedian who's appeared on the Tonight Show, Letterman, Comedy Central, and Conan. I have a podcast Hang Out With Me on the KATG network, and a CD that was one of iTunes' top 10 best-selling CDs of the year. My new album Meat Robot is out today on Comedy Central Records. AMA."
  },
  {
    "url": "t3_1g6qe1",
    "name": "IAmA Stripper since I was 19...now 24"
  },
  {
    "url": "t3_1g7dap",
    "name": "I'm Eric Kaplan writer for such shows as Futurama, Big Bang Theory, Love Me Cat, Ask Me Anything"
  },
  {
    "url": "t3_1g8f46",
    "name": "We are The Lonely Island - Ask Us Anything!"
  },
  {
    "url": "t3_1g9z4v",
    "name": "I ran an independent Auto Repair shop. AMA!"
  },
  {
    "url": "t3_1gd6yr",
    "name": "We are Seth Rogen and Evan Goldberg - Ask Us Anything"
  },
  {
    "url": "t3_1gdkef",
    "name": "IAmAn undocumented immigrant who has lived in the US for the last 18 years, recent UC Berkeley graduate and recipient of DACA, AMA!"
  },
  {
    "url": "t3_1gdvaf",
    "name": "Hey! I'm Torre and I'm a 20 year old quadriplegic male. Ask me anything!"
  },
  {
    "url": "t3_1ge1q3",
    "name": "I worked for Xbox Customer Support from 2008 to 2012. AMA :)"
  },
  {
    "url": "t3_1geb6u",
    "name": "I am a singer and pianist at a very famous piano bar on Bourbon Street in New Orleans. AMA"
  },
  {
    "url": "t3_1geigr",
    "name": "I am the original CD (Creative Director) of the original SOCOM games on PS2, recent CD for Rainbow 6: Patriots, and current CD for H-Hour: World's Elite which is live on Kickstarter now. Ask me anything!"
  },
  {
    "url": "t3_1gej14",
    "name": "Hi, I am Anthony Edwards. AMA!"
  },
  {
    "url": "t3_1gffsm",
    "name": "I'm a Butcher, it's Summer time, and that means grilling season. AMA"
  },
  {
    "url": "t3_1ggu82",
    "name": "Because it's Father's Day, I decided to do an AMA. I am a Roman Catholic priest. AMAA."
  },
  {
    "url": "t3_1gh0o6",
    "name": "I am a casino executive. AMA"
  },
  {
    "url": "t3_1gks78",
    "name": "I am a whistleblower. AMA."
  },
  {
    "url": "t3_1gky1z",
    "name": "IAmA high school math teacher who hates many aspects of my job..."
  },
  {
    "url": "t3_1gleok",
    "name": "I am Juan Alderete, the bassist of ZAVALAZ, The Mars Volta, Big Sir, Vato Negro and the creator of PedalsAndEffects.com. Ask me anything!"
  },
  {
    "url": "t3_1gljm3",
    "name": "I'm Adrian Grenier. This is my first AMA ;)"
  },
  {
    "url": "t3_1gljsf",
    "name": "I'm Brad Muir from Double Fine Productions! We're kickstarting MASSIVE CHALICE! :D! AMA!"
  },
  {
    "url": "t3_1go4gj",
    "name": "I am Donald Faison from Scrubs, The Exes and Clueless - AMA!"
  },
  {
    "url": "t3_1gocta",
    "name": "We are Relic Entertainment and we've made Company of Heroes 2 Ask Us Almost Anything"
  },
  {
    "url": "t3_1gogvf",
    "name": "We are 3 nerds that teach guys how to pick up girls. We are the real life Hitch and we have just hit 100 million views on YouTube. Ask us anything."
  },
  {
    "url": "t3_1gq6uz",
    "name": "Hi, I'm Dr. Dante Shepherd, chemical engineering professor and creator of the webcomic Surviving the World, a.k.a. the guy in the labcoat by the chalkboard. AMA!"
  },
  {
    "url": "t3_1gs1wt",
    "name": "IAMA woman born in North Korea. AMA"
  },
  {
    "url": "t3_1gsz0a",
    "name": "I use Google Glass everyday, as part of the explorer program. Ask me anything about this awesome device!"
  },
  {
    "url": "t3_1gt1pg",
    "name": "IamA former Sandwich Artist from Subway. AMA."
  },
  {
    "url": "t3_1gt2hn",
    "name": "I'm Doug Jones (HELLBOY, SILVER SURFER, PAN'S LABYRINTH, FALLING SKIES) A.M.A.!!"
  },
  {
    "url": "t3_1gutkp",
    "name": "By request: I rate and review hot sauce and fiery foods, I write funny, I look funny, I'm John Scrovak. AMA!"
  },
  {
    "url": "t3_1gv8np",
    "name": "I have cerebral palsy with full intelligence. Interested in pursuing a career in computer forensics and cyber investigations - AMA!"
  },
  {
    "url": "t3_1gwx0f",
    "name": "I am the son of a CIA spy, and a former war reporter (Iraq, Afghanistan) writing about PTSD. AMA."
  },
  {
    "url": "t3_1gx67t",
    "name": "I work at reddit, Ask Me Anything!"
  },
  {
    "url": "t3_1gxocp",
    "name": "IAMA Chipotle crew member of over a year. AMA before I quit!"
  },
  {
    "url": "t3_1gxw0z",
    "name": "I am a failed doomsday prophet named JOHN HODGMAN here to answer all your questions about RAGNAROK and any other subject."
  },
  {
    "url": "t3_1gz17c",
    "name": "Hi, I am Claude Coleman Jr., the drummer for Ween, Eagles of Death Metal and my group amandla. I'm promoting an indiegogo campaign to raise money to record my 3rd album, and I'm doing an AMA today 1-3 eastern. Please besiege me with your inquiries! Very much looking forward to it -"
  },
  {
    "url": "t3_1gzg8c",
    "name": "I am a flow detector. When I enter a room I immediately know who is on her period."
  },
  {
    "url": "t3_1gzhuj",
    "name": "I'm Ben Cohen, Ben &amp; Jerry's co-founder and Head Stamper of the Stamp Stampede. AMA!"
  },
  {
    "url": "t3_1gzmz6",
    "name": "chillin with mewes on a MONDAY"
  },
  {
    "url": "t3_1h1du9",
    "name": "We are Bright Bricks, a professional Lego building company in the UK, home to the UK's only Lego Certified Professional. AMA!"
  },
  {
    "url": "t3_1h1xlg",
    "name": "I'm Gerald Casale, founding member of DEVO. Ask me anything!"
  },
  {
    "url": "t3_1h2aio",
    "name": "We are Garfunkel and Oates. Ask us anything."
  },
  {
    "url": "t3_1h3g24",
    "name": "I'm the owner of Julius, the giant albino python wou learned to open doors, then bellyflopped into internet lore. AMA."
  },
  {
    "url": "t3_1h47je",
    "name": "We are engineers from Planetary Resources. We quit our jobs at JPL, Intel, SpaceX, and Jack in the Box to join an asteroid mining company. Ask Us Anything."
  },
  {
    "url": "t3_1h4k5m",
    "name": "I'm Karl Welzein. Author of POWER MOVES. Ask me any of your crap. Primo babes encouraged, you guys."
  },
  {
    "url": "t3_1h5cfe",
    "name": "IAmA WW2 (Ex-)POW: I flew from Italy and was shot down on my 10 mission."
  },
  {
    "url": "t3_1h5ezx",
    "name": "IAmA USMC Tank Commander for a M1A1 Abrams. AMA!"
  },
  {
    "url": "t3_1h6dcn",
    "name": "IAMA Constitutional Lawyer - here to answer questions about Prop 8, DOMA, VRA, and Affirmative Action (and anything else about the Constitution or Supreme Court!)"
  },
  {
    "url": "t3_1h6srx",
    "name": "I was on the child's reality TV Show Kid Nation when I was 14. Ask me anything about it."
  },
  {
    "url": "t3_1h6ynr",
    "name": "I am Juliana Buhring, world record holder for the fastest woman to circumnavigate the world by bicycle. Ask me anything!"
  },
  {
    "url": "t3_1h959h",
    "name": "I am Thunderbird #2, a combat fighter pilot currently serving as Left Wingman with the USAF Thunderbirds. Ask Me Anything!"
  },
  {
    "url": "t3_1h9avs",
    "name": "We are DEATH from Detroit, we were punk before punk had a name, ask us anything."
  },
  {
    "url": "t3_1h9t0b",
    "name": "I was a funeral director and embalmer for over 40 years. Ask me anything."
  },
  {
    "url": "t3_1hb8k9",
    "name": "I am a Columbine Survivor who is launching a resource for those coping with trauma. AMA!"
  },
  {
    "url": "t3_1hc0m3",
    "name": "I am a Professional Natural Bodybuilder, Personal Trainer and Nutrition Coach, ask me anything about health and fitness and I will try my best to answer each of your questions with a video that'll make on the spot. AMA"
  },
  {
    "url": "t3_1hd1fa",
    "name": "I am a dinosaur palaeontologist specialising in behaviour, ask me anything"
  },
  {
    "url": "t3_1hd9uu",
    "name": "I am a dentist ask me anything"
  },
  {
    "url": "t3_1hef4q",
    "name": "I am a Crime Scene Investigator, AMA."
  },
  {
    "url": "t3_1hfu88",
    "name": "I am comedian Amy Schumer - I saw Bono in an airport once. AMA."
  },
  {
    "url": "t3_1hfwmf",
    "name": "IAm Will Keith, a 417 pound swordsman, archer, and weapons reviewer. I have also been the subject of a Tosh.0 Web Redemption, and I recently had surgery to remove a tumor from my left nut. AM Absolutely A about any of this and I will answer truthfully."
  },
  {
    "url": "t3_1hfzt0",
    "name": "I Am Chris Kluwe, NFL Punter, and I wrote a book called Beautifully Unique Sparkleponies."
  },
  {
    "url": "t3_1hgnhk",
    "name": "I am Snoop Lion - back again. Ask me Anything pt. 2 !!!"
  },
  {
    "url": "t3_1hhdv9",
    "name": "I am a child of a convicted child molester. AMA."
  },
  {
    "url": "t3_1hhwgk",
    "name": "I am Raminar Dixon, an author of dirty, naughty erotica who quit his job to write smut! AMA!"
  },
  {
    "url": "t3_1hi8ly",
    "name": "I am Hari Sreenivasan - Anchor/ Sr. Correspondent at PBS NEWSHOUR - so bring it"
  },
  {
    "url": "t3_1hibzy",
    "name": "I am Lawrence Lessig (academic, activist, now collaborator with DEMAND PROGRESS). AMA!"
  },
  {
    "url": "t3_1hijib",
    "name": "We are the National Organization of Restore the Fourth, which is coordinating nationwide protests on July 4th in opposition to the unconstitutional surveillance methods employed by the US government, especially via the NSA and its recently-revealed PRISM program. Ask us anything"
  },
  {
    "url": "t3_1hkeok",
    "name": "I got my anonymous cyberstalker of 1.5 years arrested for harassing me and threatening to shoot up the college where I teach. AMA!"
  },
  {
    "url": "t3_1hkxo1",
    "name": "We are OverClocked ReMix, creating free game remixes since 1999. We just released a 6 hour free album of Final Fantasy VI arrangements after a $150,000 Kickstarter last year. Nobuo Uematsu loved our take on the opera. Ask Us Anything!"
  },
  {
    "url": "t3_1hmhnx",
    "name": "Anurag Kashyap here. Ask me anything. (Begins 3 pm)"
  },
  {
    "url": "t3_1hnl09",
    "name": "IAmA professional firework display worker, AMA!"
  },
  {
    "url": "t3_1hos5c",
    "name": "IAMA Iraqi citizen who was an interpreter for the US Army Unit 6/8CAV 3rd division from 2004-2006, and 2006-2009 EODT AMA"
  },
  {
    "url": "t3_1hpxaq",
    "name": "I'm a doctor (anesthesiologist) at home on my day off. AMA"
  },
  {
    "url": "t3_1hq39g",
    "name": "IAmA Sonarman on a nuclear-powered US fast attack submarine. AMAA!"
  },
  {
    "url": "t3_1hr7iv",
    "name": "Hi, I'm Al Lowe, creator of Leisure Suit Larry. We just shipped Leisure Suit Larry Reloaded, one of the largest video game Kickstarters ever. Ask me anything about the Kickstarter process or Leisure Suit Larry."
  },
  {
    "url": "t3_1ht1v7",
    "name": "I was just recently release from a Veterans Administration Acute Pysch Unit, AMAA"
  },
  {
    "url": "t3_1hvcsr",
    "name": "IamA former Chuck E Cheese's gameroom employee in New York City for almost two years. AMA"
  },
  {
    "url": "t3_1hvdpl",
    "name": "We are Two Tribes, creators of Toki Tori 2+, AMA"
  },
  {
    "url": "t3_1hwjg5",
    "name": "IamA former health inspector of restaurants, grocery stores and gas stations in one of the biggest counties in the US. I've worked in food safety in various capacities for over a decade. AMA!"
  },
  {
    "url": "t3_1hx3av",
    "name": "I am a Paranormal Investigator. Ask me whatever."
  },
  {
    "url": "t3_1hx3l2",
    "name": "IAMA intersex (hermaphrodite) living in Oman. AMA"
  },
  {
    "url": "t3_1hxzad",
    "name": "We Are the Microsoft OneNote team - Ask Us Anything"
  },
  {
    "url": "t3_1hylyr",
    "name": "I'm the creator of DRUNK HISTORY, Derek Waters - AMA!"
  },
  {
    "url": "t3_1i0fmr",
    "name": "I am an oilfield worker in West Texas with probably a good 8 hours left to kill. Ask me anything!"
  },
  {
    "url": "t3_1i0jh7",
    "name": "IAMA architect who's main interest is high efficiency affordable homes - AMA."
  },
  {
    "url": "t3_1i0nrn",
    "name": "I'm Ali Spagnola, the artist that's been taking requests for what to paint for over 6 years. I've just reached 2,000 Free Paintings paintings mailed all over the world to the strangers that requested them. AMA"
  },
  {
    "url": "t3_1i197o",
    "name": "FORMER WWE PRO WRESTLER VAL VENIS TAKING QUESTIONS."
  },
  {
    "url": "t3_1i1u9z",
    "name": "I'm MC Devlin from Mad Conductor...again! - AMA!"
  },
  {
    "url": "t3_1i2z3h",
    "name": "I am Joe Desena - CEO of SpartanRace and Ive run +50 ultra-marathons. AMA."
  },
  {
    "url": "t3_1i34j2",
    "name": "I'm Alison Teal from Discovery Channel's Naked and Afraid and Alison's Adventures - AMA;-)"
  },
  {
    "url": "t3_1i34tx",
    "name": "I quit my job to make an RPG and had my Kickstarter funded in 4 days. AMA!"
  },
  {
    "url": "t3_1i3kla",
    "name": "IAmA Scott Aukerman, host of Comedy Bang! Bang! and 43rd President of the United States of America. AMA"
  },
  {
    "url": "t3_1i3uf1",
    "name": "i am aisha tyler. actress. comedian. tv host. author. gamer. caster of pods. ask me anything."
  },
  {
    "url": "t3_1i47vn",
    "name": "IAmA 33 year old guy born without arms or legs, AMA again!"
  },
  {
    "url": "t3_1i4bw0",
    "name": "IAmA 16 year old with both parents in prison. Ask me anything"
  },
  {
    "url": "t3_1i4g6i",
    "name": "Hi, I'm Ben. I won seven and a half games on Jeopardy! AMA"
  },
  {
    "url": "t3_1i4rb1",
    "name": "IAmA Australian who just hitchhiked from New York City to Los Angeles. AMA."
  },
  {
    "url": "t3_1i5a0k",
    "name": "I just had gender reassignment surgery (Sex Change), Ask me Anything!"
  },
  {
    "url": "t3_1i5r4j",
    "name": "I am Thunderbird 12, Maj. Darrick Lee, Public Affairs Officer for the US Air Force Thunderbirds. AMA"
  },
  {
    "url": "t3_1i5xe2",
    "name": "We're IGN Podcast Beyond. Our 300th episode is today. Ask us anything."
  },
  {
    "url": "t3_1i66eb",
    "name": "Hi. My name is Mike Burns, the creator of @DadBoner and Karl Welzein, the author of Power Moves. Available at www.karlwelzein.com Ask me anything."
  },
  {
    "url": "t3_1i6adn",
    "name": "High! We're Slightly Stoopid. We're live and direct from the #KickinUpDust Tour and we'll be answering and asking questions throughout the day. Much love to all the Stoopidheads."
  },
  {
    "url": "t3_1i716v",
    "name": "I am a 5 time American Ninja Warrior contestant. Ask me anything about the show and try out process!"
  },
  {
    "url": "t3_1i7hwv",
    "name": "I'm the person who creates new reality shows... AMA"
  },
  {
    "url": "t3_1i8e63",
    "name": "IAMA Wish Granting intern at Make A Wish AMA!"
  },
  {
    "url": "t3_1iawvz",
    "name": "IAMA 18 year old who just got a Bilateral Breast Reduction! AMA!"
  },
  {
    "url": "t3_1icg2n",
    "name": "I teach waiters how to use psychology to improve their customer service (leading to better tips, sales &amp; return customers) - AMA"
  },
  {
    "url": "t3_1icqw5",
    "name": "I am Mac Miller, head of the department of aristocratic research in space (and amateur musician). ama"
  },
  {
    "url": "t3_1icsw6",
    "name": "I am a survivor of 3rd degree burns on 40% of my body. AMA"
  },
  {
    "url": "t3_1icyyx",
    "name": "IAmA Colin Mochrie of Whose Line Is It Anyway? Here to talk about the show and my new book Not QUITE the Classics. AMA!"
  },
  {
    "url": "t3_1id0xi",
    "name": "I am Thom Green, drummer in the band Alt-J. AMA"
  },
  {
    "url": "t3_1if7y9",
    "name": "I was sentenced to 50 years in Prison at the age of 18 for non-violent crimes. Spent my entire sentence in Maximum Security Facilities. AMA"
  },
  {
    "url": "t3_1ife0c",
    "name": "I'm an IT Recruiter who has nearly 20 years of actual IT technical and management experience. I'm not your average headhunter. AMA"
  },
  {
    "url": "t3_1ifkkh",
    "name": "I'm Jeremy Zuckerman, composer for The Legend of Korra; Avatar: the Last Airbender and Kung fu Panda. AMA!"
  },
  {
    "url": "t3_1ifmjz",
    "name": "We are Josh and Chuck, hosts of Stuff You Should Know. Ask us anything!"
  },
  {
    "url": "t3_1igb48",
    "name": "Professional Ultimate Frisbee player and do Frisbee Trick Shots on YouTube - Brodie Smith"
  },
  {
    "url": "t3_1ihmtz",
    "name": "This is director Nicolas Winding Refn, ask me anything"
  },
  {
    "url": "t3_1ihmw3",
    "name": "IAmA step rider, trash slinger, I am the Garbage Man! AMA!"
  },
  {
    "url": "t3_1iic9q",
    "name": "I am Jeff Garlin, comedic person of some notoriety - ask me anything!"
  },
  {
    "url": "t3_1ik5yk",
    "name": "IAMA Survivor of a near fatal crash as a result of distracted driving who was featured on the Today show, Teen Vogue and spoken on campuses nationwide, ask me anything!"
  },
  {
    "url": "t3_1ikdwa",
    "name": "My name is john and im a locomotive engineer(i drive trains) AMA"
  },
  {
    "url": "t3_1ilfrm",
    "name": "I am American McGee, creator of the Alice game series, founder of Spicy Horse Games and doer of other things."
  },
  {
    "url": "t3_1io9fl",
    "name": "I'm a public school bus driver! Ask me anything!"
  },
  {
    "url": "t3_1iqwdw",
    "name": "I'm a 19 year old male with an 85 degree curvature in the spine, condition called Scoliosis AmA!"
  },
  {
    "url": "t3_1iry4g",
    "name": "I am Fred Durst of LIMP BIZKIT...Ask Me Anything"
  },
  {
    "url": "t3_1isady",
    "name": "I pick up dead people. AMA!"
  },
  {
    "url": "t3_1ise8r",
    "name": "I am a Victoria's Secret Manager. AMA!"
  },
  {
    "url": "t3_1ith8p",
    "name": "I am Whose Line is it Anyway improviser and TV writer Heather Anne Campbell IAMA!"
  },
  {
    "url": "t3_1iu1ih",
    "name": "I am Joey Betz, the creator of the games Crush the Castle, Sushi Cat, Phage Wars and many more. Ask me anything!"
  },
  {
    "url": "t3_1iu8uf",
    "name": "I am Sgt. Brandon Unis. I am a U. S. Marine combat veteran, and I am featured in the National Geographic series Battleground Afghanistan. AMA"
  },
  {
    "url": "t3_1iuc2i",
    "name": "We are Cornell University's Ask An Astronomer Team. Ask Us Anything!"
  },
  {
    "url": "t3_1iw266",
    "name": "I'm a Hooters Girl AMA"
  },
  {
    "url": "t3_1iwps8",
    "name": "IAmA Wendy's employee of over a year, ask me anything about my job!"
  },
  {
    "url": "t3_1ixif9",
    "name": "Hey I'm a 23 year Dialysis patient with no donors in sight ask me anything!."
  },
  {
    "url": "t3_1iyi7m",
    "name": "I am a former House staffer, an engineer, a gamer, and the creator of Capitol Bells. I am hacking the United States Congress to get real Democracy. AMA!"
  },
  {
    "url": "t3_1iyt3y",
    "name": "I have managed bands for over thirty years and currently look after Metallica, Red Hot Chili Peppers, Jimmy Page, Muse, Josh Groban, Dawes, and others. I am Peter Mensch AMA!"
  },
  {
    "url": "t3_1iz0lo",
    "name": "Yo, were Rap Genius- Ask Us Anything (Really)!"
  },
  {
    "url": "t3_1izk79",
    "name": "IAmA host of the Who Charted podcast with Howard and Kulap."
  },
  {
    "url": "t3_1iznvc",
    "name": "Hi, I'm Bill Hader. I'm a actor / comedian / writer and I also play birthday parties. AMA!"
  },
  {
    "url": "t3_1j0xq1",
    "name": "Hello reddit, I am an 18 year old who just had a 12 hour operation to surgically remove a brain tumour. (pics inside!)"
  },
  {
    "url": "t3_1j166z",
    "name": "Hi, I'm Mark Shuttleworth, founder of Ubuntu &amp; Canonical. Currently in the midst of a record-breaking crowdfunding campaign to make Ubuntu Edge superphone a reality. Ask me anything."
  },
  {
    "url": "t3_1j1kxn",
    "name": "I am a 21 year old girl working at Naughty America...every scene you've jerked off to, I've had a hand in. AMA!"
  },
  {
    "url": "t3_1j1thz",
    "name": "I have no hands or feet. AMA!"
  },
  {
    "url": "t3_1j26za",
    "name": "I am Coby Fleener, American Football (NFL) player for the Indianapolis Colts. AMA!"
  },
  {
    "url": "t3_1j2f6a",
    "name": "I'm Lanipator of Team Four Star, ask me anything!"
  },
  {
    "url": "t3_1j2flr",
    "name": "I am Dino Stamatopoulos, comedy writer, Starburns on Community, creator of Morel Orel, Mary Shelley's Frankenhole, and a new show premiering this Saturday night called High School USA! Ask me anything."
  },
  {
    "url": "t3_1j3g2s",
    "name": "I am Rebecca Aldworth with Humane Society International. Ive been working to end Canadas commercial baby seal hunt for nearly 20 years by documenting the hunt at close range, closing down world markets for seal products (including a ban in the EU), and leading a grassroots movement  AMA!"
  },
  {
    "url": "t3_1j3w06",
    "name": "Hi, I'm Kristen Christian &amp; I started Bank Transfer Day. AMA!"
  },
  {
    "url": "t3_1j5ai1",
    "name": "I am a Legally Blind person, answering questions with the help of Omni (my child) AMA!"
  },
  {
    "url": "t3_1j5qza",
    "name": "We Are a Team Working to Restore a Cold War Nuclear Bunker; The Only One of It's Type Left In Canada! AMA!"
  },
  {
    "url": "t3_1j6lah",
    "name": "Jaimie Mantzel (Me) - the guy that lives in the woods, builds toys and a giant spider robot."
  },
  {
    "url": "t3_1j6riu",
    "name": "Round 2 : I am a Professional Natural Bodybuilder, Personal Trainer and Nutrition Coach, ask me anything about health and fitness and I will try my best to answer each of your questions with a video that'll make on the spot. AMA"
  },
  {
    "url": "t3_1j842f",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_1j8chn",
    "name": "I am Stuart Ashen AKA Ashens, YouTube comedy-bloke. AMA"
  },
  {
    "url": "t3_1j8cru",
    "name": "I am Mark Hunter the vocalist of Chimaira. AMA"
  },
  {
    "url": "t3_1j8edv",
    "name": "I'm MasakoX from TeamFourStar, feel free to ask me anything!"
  },
  {
    "url": "t3_1j8ef6",
    "name": "Hi I'm seven years old! AMA"
  },
  {
    "url": "t3_1j8oyn",
    "name": "IAMA 30 y.o. clinical psychologist! AMA!"
  },
  {
    "url": "t3_1j9e1q",
    "name": "I'm a 20yo female with Tourette Syndrome. AMA"
  },
  {
    "url": "t3_1ja0d9",
    "name": "I'm a 25 year old girl with stage 4 cancer! Receiving chemo all day, ask me anything!"
  },
  {
    "url": "t3_1ja9iv",
    "name": "Hi! I am Simon Posford of the group Shpongle, amongst others. Ask me anything!"
  },
  {
    "url": "t3_1jal04",
    "name": "I am Reza Aslan, scholar of religions, author of ZEALOT, and (gasp!) recent FOX news guest - AMA"
  },
  {
    "url": "t3_1jb8pk",
    "name": "I am an ex-convict who spent 8 years in solitary confinement and 12 years and now helps others better themselves."
  },
  {
    "url": "t3_1jbhd4",
    "name": "I Am Kelly Bachand, World Class Marksman, Top Shot Competitor, Electrical Engineer, Small Business Owner, Husband, and Christian. Ask Me Anything! [fixed with proof]"
  },
  {
    "url": "t3_1jct61",
    "name": "I am Musician Adam Duritz from Counting Crows. Ask me anything..."
  },
  {
    "url": "t3_1jctbp",
    "name": "I am performance artist Marina Abramovic. Ask me anything."
  },
  {
    "url": "t3_1jcuyg",
    "name": "I am Mark Waid, writer of comics such as Superman and Daredevil, and creator of Thrillbent.com."
  },
  {
    "url": "t3_1jd005",
    "name": "We are engineers and scientists on the Mars Curiosity Rover Mission, Ask us Anything!"
  },
  {
    "url": "t3_1jd2t1",
    "name": "I am Rambo, Model for SuicideGirls.com and Model &amp; Photographer Recruiter for SuicideGirls.com. AMA!"
  },
  {
    "url": "t3_1jd679",
    "name": "I am Tommy Swerdlow, writer of Cool Runnings, Little Giants and Shrek I wrote them all strung out on heroin, AMA!"
  },
  {
    "url": "t3_1jdqdu",
    "name": "Hey Everyone!! I am Lexi Bloom the retired porn star gone full time cam girl!"
  },
  {
    "url": "t3_1jdzev",
    "name": "I am a corporate/commercial pilot; AMA!"
  },
  {
    "url": "t3_1jfjve",
    "name": "IamA (Creator of Axe Cop) AMA!"
  },
  {
    "url": "t3_1jfqc0",
    "name": "I am founder of blu eCigs Jason Healy I sold my business for 135 million dollars - AMA!"
  },
  {
    "url": "t3_1jhdaw",
    "name": "IAMA transgender woman adult film actress AMA (NSFW)"
  },
  {
    "url": "t3_1ji1zr",
    "name": "I am comedian Paul Scheer - AMA!"
  },
  {
    "url": "t3_1jjcdt",
    "name": "IamA 21 year old girl with a rare tumor in my abdomen which has nearly grown to the diameter of a regulation soccer ball. AMA!"
  },
  {
    "url": "t3_1jkatc",
    "name": "I write Now I Know, a free trivia/interesting facts email newsletter which goes to nearly 90,000 people a day. Yesterday, I announced that it's being made into a book. AMAA!"
  },
  {
    "url": "t3_1jlp04",
    "name": "IamA riches-to-rags thriller author whose first two novels got $500,000 in contracts in 2009 and sold so poorly all my publishers dropped me. Since then, I've written four e-books in my garage that have sold a combined 263 copies on Kindle. AMA!"
  },
  {
    "url": "t3_1jmn16",
    "name": "IamA person who has had non-stop hiccups for 8 1/2 months AMA!!"
  },
  {
    "url": "t3_1johro",
    "name": "IamAn Aussie girl that grew up in the bush living in a shed contending with no electricity, bucket showers, cooking on a fire, homework by candlelight and liked to think of myself as a young herpatologist. AMA!"
  },
  {
    "url": "t3_1jp2hp",
    "name": "Per request: IamA Redditor who has spent time in solitary confinement AMA"
  },
  {
    "url": "t3_1jpgnv",
    "name": "IamA 19 year old waitress at a fully nude strip club AMA!"
  },
  {
    "url": "t3_1jpzef",
    "name": "I have a rare nerve disease that is the most painful disease known to science, all from being stepped on at prom, AMA."
  },
  {
    "url": "t3_1jqfce",
    "name": "We are the Engineering team behind Ubuntu for Android - AUA"
  },
  {
    "url": "t3_1jqw4n",
    "name": "IamA Navajo who lives on the reservation in the Southwest United States, and I am currently walking over 500 miles from my home in Arizona to Bosque Redondo at Fort Sumner in New Mexico to help spread awareness of Hweldi, or the Navajo Long Walk. AMA! (~4 year follow-up)"
  },
  {
    "url": "t3_1jqw7m",
    "name": "I am the author of MANSON: The Life and Times of Charles Manson, AMA!"
  },
  {
    "url": "t3_1jr1l7",
    "name": "IamA 5 year BurgerKing employee AMA!"
  },
  {
    "url": "t3_1jruu1",
    "name": "I am actor / writer / comedian Jim Rash (Dean Pelton from Community and host of The Writers' Room) - AMA"
  },
  {
    "url": "t3_1jtl5t",
    "name": "IamA disabled stand-up comedian. AMA!"
  },
  {
    "url": "t3_1ju01g",
    "name": "IamA Michael Schofield, father of Jani Schofield, diagnosed with child-onset schizophrenia at age 6 and author of January First. AMA!"
  },
  {
    "url": "t3_1jubqb",
    "name": "IamA 2 time World Rap Champion, TheSaurus AMA!"
  },
  {
    "url": "t3_1juriu",
    "name": "I'm a Game Programmer with no physics experience and I custom built a physics engine with destructible levels and fully interactive fluids! AMA."
  },
  {
    "url": "t3_1jvrj7",
    "name": "I am Brady Haran, behind various YouTube channels including Numberphile, Periodic Videos, Sixty Symbols, Computerphile, --- AM(a)A"
  },
  {
    "url": "t3_1jw9cl",
    "name": "Sal Vulcano of truTV's Impractical Jokers and The Tenderloins Comedy Troupe"
  },
  {
    "url": "t3_1jwmju",
    "name": "IamA robotics/AI professor. AMA!"
  },
  {
    "url": "t3_1jwxr3",
    "name": "IamA prostitute who recently won Nevada's PROSTITUTE OF THE YEAR award AMA!"
  },
  {
    "url": "t3_1k13pc",
    "name": "I'm David Shiffman (@WhySharksMatter) , a shark scientist at the University of Miami. Happy Shark Week! AMA!"
  },
  {
    "url": "t3_1k1jmd",
    "name": "We are Scott &amp; George from Discovery Channel's Jungle Gold, What we lack in mining ability we make up for in persistence &amp; willingness to try new things. TL;DR 2 guys, fame-ish not famous. Ask us Anything!"
  },
  {
    "url": "t3_1k21th",
    "name": "It's Spike Lee. Let's talk. AMAA."
  },
  {
    "url": "t3_1k2fuk",
    "name": "Im Xander Mozejewski aka The Ridiculously Photogenic Nude Wheelchair Guy... AMA"
  },
  {
    "url": "t3_1k2tyv",
    "name": "I stabbed a man in self-defense. AMA."
  },
  {
    "url": "t3_1k3g1p",
    "name": "I am a full-time supervisor in a memory support (dementia) unit at a retirement home. AMA."
  },
  {
    "url": "t3_1k5ay0",
    "name": "I had a stage 4 brain tumor, AMA."
  },
  {
    "url": "t3_1k5o3b",
    "name": "IAMA guy who walked 3,000+ miles from east coast to west coast US in 90 days with $0 in my pocket."
  },
  {
    "url": "t3_1k5qfe",
    "name": "IamA guy who quit his job and gambled everything on an indie game Kickstarter - and passed his goal yesterday. AMA!"
  },
  {
    "url": "t3_1k6368",
    "name": "I am a 24 yo female and going through menopause due to a stem cell transplant. AMA!"
  },
  {
    "url": "t3_1k7e2j",
    "name": "Im Isha Datar, director of New Harvest  the non-profit largely responsible for advancing cultured meat. I was at the first ever cultured beef burger tasting in London this past Monday  AMA!"
  },
  {
    "url": "t3_1k7f54",
    "name": "IamA - guy who was paid to camp and travel the world (40 countries) leading wilderness expeditions while living under the poverty line for 15 years. AMA!"
  },
  {
    "url": "t3_1k8mv9",
    "name": "I am Kevin Hays, Rubik's Cube World Champion in 5x5, 6x6, and 7x7. AMA!"
  },
  {
    "url": "t3_1k8n9s",
    "name": "IamA Donal Logue from Terriers, Grounded for Life, Sons of Anarchy, Copper and Vikings- Ask me Anything"
  },
  {
    "url": "t3_1ka8kp",
    "name": "IamA 99 year old woman who helped her mother make bootlegged alcohol in Chicago during the Prohibition, and then lived through 2 World Wars, the Great Depression, and a lot of other history. AMA!"
  },
  {
    "url": "t3_1kaa77",
    "name": "IamA Metra (Chicago) train conductor AMA!"
  },
  {
    "url": "t3_1kadsz",
    "name": "I am a Stanley Brother from Sanjay Guptas WEED documentary."
  },
  {
    "url": "t3_1kaxje",
    "name": "I am Aaron Paul, AMA"
  },
  {
    "url": "t3_1kb7e4",
    "name": "IamA Guy who quit his job, sold his car, moved out and bought a one-way ticket to Africa. I spent the next year and a half traveling across the entire continent, mostly overland and solo. AMA!"
  },
  {
    "url": "t3_1kfgia",
    "name": "We are the studio behind Robot Chicken, Stoopid Buddy Stoodios. Ask Us Anything!"
  },
  {
    "url": "t3_1khcdz",
    "name": "IamA 39yo male with daily Chronic Cluster Headaches (suicide or alarm clock headaches) - treated by the rather amazing NHS - so AMA!"
  },
  {
    "url": "t3_1kimt2",
    "name": "IamA loss prevention agent, who has seen just about every shoplifting technique. Ask me anything"
  },
  {
    "url": "t3_1kkaa2",
    "name": "I suffer from a very rare neurological disorder known as Visual Snow, AMA"
  },
  {
    "url": "t3_1kkbx2",
    "name": "IamA ex-fundamentalist-Christian who's now a mime camgirl on MyFreeCams and Chaturbate, and currently working from a Las Vegas camgirl mansion playground event with 20 other girls. AMA!"
  },
  {
    "url": "t3_1kkumr",
    "name": "IamA healthy 21 year old with no prior health issues who survived a sudden 8-hour heart attack and 7-hour open heart surgery. AMA!"
  },
  {
    "url": "t3_1knibv",
    "name": "IamA porn site owner. AMA!"
  },
  {
    "url": "t3_1knzmn",
    "name": "(As requested) IamA man who was on a male form of birth control as an experimental drug in a clinical trial, AMA!"
  },
  {
    "url": "t3_1koctu",
    "name": "IamA 27yr old severe car accident survivor with a spinal fusion looking for fellow survivors to share their story. AMA!"
  },
  {
    "url": "t3_1kp46z",
    "name": "IamA Native American living and working on tribal land. AMAA"
  },
  {
    "url": "t3_1kpw5g",
    "name": "IamA Paedophile who has been inactive since my release over a decade ago AMA! (Resubmitted with proof.)"
  },
  {
    "url": "t3_1kqvhe",
    "name": "I am Tim Stevens, former Engadget Editor-in-Chief and and now joining CNET. AMA!"
  },
  {
    "url": "t3_1kt7pk",
    "name": "We are Zack Kopplin and the Texas Freedom Network. Ask us anything about fighting creationism!"
  },
  {
    "url": "t3_1kt93s",
    "name": "I am a SAC Youth (19) that attempts to purchase underage alcohol as my job. AMA!"
  },
  {
    "url": "t3_1ktv0i",
    "name": "IAMA former Drug Dealer"
  },
  {
    "url": "t3_1kv88b",
    "name": "I thru-hiked the Appalachian Trail southbound. AMA!"
  },
  {
    "url": "t3_1kvl74",
    "name": "IamA writer of speculative fiction (fantasy) who refuses to grow up...R.A. Salvatore"
  },
  {
    "url": "t3_1kvvc4",
    "name": "I am Tony Hale of VEEP and Arrested Development. Ask me Anything."
  },
  {
    "url": "t3_1kvw6l",
    "name": "I sell on ebay for a living. Ask me anything."
  },
  {
    "url": "t3_1kxg8x",
    "name": "I am a former GameStop manager. Ask me anything!"
  },
  {
    "url": "t3_1kxpi8",
    "name": "IamA locksmith AMA!"
  },
  {
    "url": "t3_1ky3ms",
    "name": "Iam the guy who paints Presidents riding dinosaurs, fighting gorillas, tigers, etc. I'm also known as Sharpwriter AMA!"
  },
  {
    "url": "t3_1kyb5e",
    "name": "I'm Jim Norton, comedian and pervert. I am here whoring myself because my new standup special American Degenerate premieres tonight on EPIX at 10pm ET."
  },
  {
    "url": "t3_1kyyg2",
    "name": "IamA Amputee girl with bionic arm and bow from front page AMA!"
  },
  {
    "url": "t3_1l05no",
    "name": "IAmA European Engineer who moved to Africa to repair bridges. I've survived malaria, basically dodged an 18-wheeler truck falling from a bridge 15 m high, faced a spitting snake, and have frequent water issues. Recently I needed trash bags and learnt I can only buy them 90 km away. AMAA."
  },
  {
    "url": "t3_1l0dnn",
    "name": "IamA Professional Voice Actor and I'll say any line you want AMA!"
  },
  {
    "url": "t3_1l2cy2",
    "name": "IamA 28 year old burn survivor. 98% of my body is 3rd degree burned. AmA"
  },
  {
    "url": "t3_1l3xtm",
    "name": "IamA Male Life Model for Hen/Bachelorette Parties!"
  },
  {
    "url": "t3_1l4jn2",
    "name": "IAmA flight attendant for one of the worlds top airlines. Just when I thought I had seen it all I saw more. AmAA."
  },
  {
    "url": "t3_1l4l2q",
    "name": "I am PNUT from the band 311. AMA"
  },
  {
    "url": "t3_1l6l38",
    "name": "IamA: 41 M with Renal Cell Carcinoma. Ive lost a kidney and had lung and brain surgery in the last 10 months. Today I start the first of 10 treatments for whole brain radiation so I can start chemo. AMA!"
  },
  {
    "url": "t3_1l7aqv",
    "name": "Hi, I'm Joseph Mang0 Marquez. I won EVO2013's Super Smash Bros. Melee tournament. Ask me anything!"
  },
  {
    "url": "t3_1l7log",
    "name": "I'm Steve Petrick, The World's Biggest Harry Potter Fan and World Record holder for the largest collection of Harry Potter memorabilia... Ask me anything!!!"
  },
  {
    "url": "t3_1l7udi",
    "name": "I am Andy Milonakis AMA!"
  },
  {
    "url": "t3_1l8f3c",
    "name": "IamA Freemason AMA!"
  },
  {
    "url": "t3_1l8q73",
    "name": "Playboy's Cyber Girl of the months for August 2013: Kyara Tyler"
  },
  {
    "url": "t3_1lc348",
    "name": "IamA (Blank) AMA! Hello, I'm Harry Shearer. Judith Owen may drop by, too. Ask me/us anything. Within reason. Or without reason."
  },
  {
    "url": "t3_1lc68a",
    "name": "I am Elayne Angel, piercing expert and author of The Piercing Bible. AMA!"
  },
  {
    "url": "t3_1lc96t",
    "name": "We discovered Argo, Slumdog Millionaire and The King's Speech and debuted them to Toronto audiences. We are members of the Toronto International Film Festival programming team - AUA!"
  },
  {
    "url": "t3_1lcefb",
    "name": "IamA youtuber called MrSuicideSheep AMA!"
  },
  {
    "url": "t3_1lcmtr",
    "name": "IamA guy who catches Shoplifters for Wal-Mart. AMA!"
  },
  {
    "url": "t3_1lcpaz",
    "name": "I am Mac Lethal, cousin of Bennett, maker of pancakes, and singer of songs. Ask Me Anything!"
  },
  {
    "url": "t3_1lctwy",
    "name": "We're a team of NASA asteroid experts, Ask Us Anything!"
  },
  {
    "url": "t3_1ld3ey",
    "name": "IamA (dwarf who aspires to become a blacksmith) AMA!"
  },
  {
    "url": "t3_1ldzpn",
    "name": "[NSFW] I have been going to Japanese sex clubs for the last 5 years, AMA."
  },
  {
    "url": "t3_1lehqe",
    "name": "IamA worker at a state Psychiatric Center. I have seen too much, AMAA!"
  },
  {
    "url": "t3_1leye5",
    "name": "We are space sim developer egosoft, soon releasing X Rebirth. Ask us Anything!"
  },
  {
    "url": "t3_1lf443",
    "name": "Hi, I'm Brian Colin, designer of such classic video games as RAMPAGE, GENERAL CHAOS, XENOPHOBE, PIGSKIN and many more... ASK ME ANYTHING!"
  },
  {
    "url": "t3_1lfgpw",
    "name": "Reddit, I return. IamA Prison Guard at a maximum security prison. A lot has changed in a year and believe me, I have seen some shit. AMA"
  },
  {
    "url": "t3_1lgsyt",
    "name": "IAmA (we are) Bail Enforrcement Agents, Fugitive Recovery Agents, Bounty Hunters... ask me (us) anything"
  },
  {
    "url": "t3_1lgvdd",
    "name": "IAmA self-published erotica author with over 80 titles to my name. I've been doing this for 1.5 years. I just released a how-to guide for beginners. AMA!"
  },
  {
    "url": "t3_1lgxts",
    "name": "IAmA doorman at a world famous Las Vegas nightclub, an aspiring writer, and a former strip club bouncer. AMA!"
  },
  {
    "url": "t3_1lh3mb",
    "name": "IamA Deputy Sheriff that conducts undercover chats for child exploitation cases AMAA!"
  },
  {
    "url": "t3_1lhtlx",
    "name": "IamA Syrian citizen currently living in Syria. AMA!"
  },
  {
    "url": "t3_1ljlju",
    "name": "I AMA Peter Mayhew, Chewbacca from the Star Wars Saga. Ask Me Almost Anything"
  },
  {
    "url": "t3_1ll83u",
    "name": "IamA 24 year veteran firefighter in Southern California AMA!"
  },
  {
    "url": "t3_1llce1",
    "name": "IamA UPS employee of almost 11 years AMA!"
  },
  {
    "url": "t3_1llvh2",
    "name": "IAmA woman who was molested for 5 years straight between the ages of 11-16. I put my abuser in jail when I was 25 (2 years ago) because of 657 charges I brought against him. AMA!"
  },
  {
    "url": "t3_1llwf2",
    "name": "IamA marathon runner that ran 90.5 miles in 22 hours last weekend while pushing special needs children in wheelchairs (and also the swollen foot from the front page). AMA!"
  },
  {
    "url": "t3_1llylh",
    "name": "IamA guy who explores the world and makes Science Videos. (I also drop cats and occasionally do Rocket Science) I'm Destin from the YouTube channel Smarter Every Day. AMA!"
  },
  {
    "url": "t3_1lnjc1",
    "name": "We are The Cut Throat Freak Show! We're touring with people way funnier than us on the Oddball Comedy and Curiosity Festival tour feat Dave Chappelle!"
  },
  {
    "url": "t3_1lofoz",
    "name": "IamA rhinestone rock star doll baba! aka Bootsy Collins AMA!"
  },
  {
    "url": "t3_1lstqg",
    "name": "I am girl rapper Kitty. I announced my album today. AMA!"
  },
  {
    "url": "t3_1ltg2z",
    "name": "I AM SNOOP [W/ 2 CHAINZ] AMA!"
  },
  {
    "url": "t3_1ltjg0",
    "name": "I defected from North Korea and now work as a reporter based in Seoul. AMA"
  },
  {
    "url": "t3_1lv64o",
    "name": "We are the QI Elves, the researchers behind the BBC comedy panel show QI - Ask Us Anything!"
  },
  {
    "url": "t3_1lvgkx",
    "name": "Dave Franco &amp; Christopher Mintz-Plasse here. We're on a road trip across America with Funny Or Die. AUA!"
  },
  {
    "url": "t3_1lvtuv",
    "name": "Beverly D'Angelo. Actress. Been there, done that, ready to talk about what's next. AMAA."
  },
  {
    "url": "t3_1lxii6",
    "name": "I am Lauren Myracle, currently the most banned author in the US. AMA!"
  },
  {
    "url": "t3_1lyok3",
    "name": "I am writer/director/producer Max Landis."
  },
  {
    "url": "t3_1lypxd",
    "name": "[NSFW] IamA 28 year old man with micropenis AMA!"
  },
  {
    "url": "t3_1lyygj",
    "name": "IamA long time employee of the tourism industry, from cruise ships in the Caribbean to Alaskan wilderness lodges. Ask me anything about the industry or the chaotic and debauched lives of it's employees."
  },
  {
    "url": "t3_1m01ax",
    "name": "I am Tommy Tallarico - Video game composer, worked on over 300 games, Guinness World Record holder, creator &amp; producer of the 11 year world touring Video Games Live show, hosted &amp; co-produced 3 video game TV shows, founder of the non-profit Game Audio Network Guild and cousin of Steven Tyler - AMA!"
  },
  {
    "url": "t3_1m1pcb",
    "name": "Two years (and ten days) ago I posted a story on Reddit; a month later I sold it to Warner Brothers. AMA!"
  },
  {
    "url": "t3_1m3rvh",
    "name": "My Czech grandfather was orphaned at 14 and then imprisoned in a forced labour camp in Austria when he was 19. He was the first person to start managerial training in Czechoslovakia when he was 33. He is 90 today. Ask him Anything!"
  },
  {
    "url": "t3_1m3ts3",
    "name": "I had Male to Female gender reassignment (sex change) surgery 9 weeks ago. AMA!"
  },
  {
    "url": "t3_1m4co4",
    "name": "We are the editors of The Paris Review, the literary magazine that helped launch the careers of Jack Kerouac, V. S. Naipaul, Philip Roth, Adrienne Rich, Mona Simpson, David Foster Wallace, Jeffrey Eugenides, and countless others. Ask us anything!"
  },
  {
    "url": "t3_1m66k9",
    "name": "IamA Missionary who worked in Kenya to find the water they just found yesterday AMA!"
  },
  {
    "url": "t3_1m804g",
    "name": "I wrote What Do You Buy the Children of the Terrorist Who Tried to Kill Your Wife?, a memoir just published about my reconciliation with the Palestinian family of the man who injured my wife. Some people like it. Some hate me for it. AMA!"
  },
  {
    "url": "t3_1m926j",
    "name": "We are the Outlook.com team, Ask us anything!"
  },
  {
    "url": "t3_1m9wke",
    "name": "We're scientists and engineers on NASA's Voyager mission. Our spacecraft is now in interstellar space. Ask Us Anything!"
  },
  {
    "url": "t3_1ma9l8",
    "name": "IamA producer/musician - I've worked on 19 Billboard Top 200 albums, toured 4 continents playing 1000+ gigs &amp; currently make 6 figures as an independent music producer: AMA"
  },
  {
    "url": "t3_1mb4fp",
    "name": "I am Woodland Burials, I turn people into Trees! AMA"
  },
  {
    "url": "t3_1mcqb4",
    "name": "IamA U.S Army Infantryman who's been deployed, ask me something"
  },
  {
    "url": "t3_1md1u1",
    "name": "IamA 83 year old Dutch man living in Australia who worked in the Dutch Underground Militia against the Nazis in WWII AMA!"
  },
  {
    "url": "t3_1mdlph",
    "name": "IamA VFX Pro who's worked on X-Men and Narnia, now making my own film AMA!"
  },
  {
    "url": "t3_1mec32",
    "name": "I am the GLaDOS cosplayer from PAX Prime, suspended upside-down from a structure. I made the entire costume from scratch. AMA!"
  },
  {
    "url": "t3_1mfkt4",
    "name": "I am Rock and Roll Hall of Famer Bootsy Collins - I've got pre-orders for my album for $1 Today Only AMA!"
  },
  {
    "url": "t3_1mgmfe",
    "name": "I have one X chromosome (Turner Syndrome); AMA!"
  },
  {
    "url": "t3_1mgn7u",
    "name": "My name is Ben. I used to take your money and I enjoyed it! I am a former car salesman/manager. Please Reddit, AMA!"
  },
  {
    "url": "t3_1mgxy2",
    "name": "I am a 21-year-old college student who contracted HIV through someone I met on craigslist."
  },
  {
    "url": "t3_1mheia",
    "name": "IAmA nurse, ask me anything."
  },
  {
    "url": "t3_1mij0y",
    "name": "I am the World Pinball Champion. AMA!"
  },
  {
    "url": "t3_1mj1yl",
    "name": "AMAA - Ask Madonna Almost Anything."
  },
  {
    "url": "t3_1mk33v",
    "name": "I am an investigator for the medical examiner, AMA!"
  },
  {
    "url": "t3_1mk4u8",
    "name": "IAmA Currently deployed in Afghanistan"
  },
  {
    "url": "t3_1mklrw",
    "name": "I am donating bone marrow right now! AMA"
  },
  {
    "url": "t3_1mku11",
    "name": "IAMA Professional Truck Driver ask me anything!"
  },
  {
    "url": "t3_1mkv67",
    "name": "I am Clyde Phillips showrunner of Dexter and Nurse Jackie. I also write mystery novels. New one out last week called 'Unthinkable'. Amazing reviews. Ask me anything!"
  },
  {
    "url": "t3_1mlh7x",
    "name": "We Are Hannah Hooper and Christian Zucconi of the band Grouplove - Ask Us Anything!"
  },
  {
    "url": "t3_1mliy4",
    "name": "IAmA 25 year old guy who just broke his spine and has no sensation from the chest down. Ask me anything."
  },
  {
    "url": "t3_1mmxh7",
    "name": "IamA former male stripper...all that glitters isn't gold AMA!"
  },
  {
    "url": "t3_1mnjf7",
    "name": "IAmA (we are) the creators of DICK FIGURES THE MOVIE... Ed Skudder &amp; Zack Keller! Ask us anything!"
  },
  {
    "url": "t3_1mnktl",
    "name": "We are Chromeo! Funkateers &amp; Chromettes of Reddit Ask Us Anything!"
  },
  {
    "url": "t3_1mpyy2",
    "name": "I am Dave Pottinger, a lead developer of the Age of Empires &amp; Age of Mythology games, Halo Wars, and Cavemania - AMA!"
  },
  {
    "url": "t3_1mpzfr",
    "name": "Jack Black here with Amanda Lund, Maria Blasucci, Jeremy Konner, and Priyanka Mattoo. We've created GHOST GHIRLS. AUA."
  },
  {
    "url": "t3_1mq3we",
    "name": "Played COD? Then you've shot, stabbed and otherwise maimed me. Iama MoCap Stunt, Voice &amp; Face Actor for the Call of Duty franchise &amp; over 30 video games. AMA!"
  },
  {
    "url": "t3_1mq85q",
    "name": "I'm Tommy Edison, the blind film critic. I've been blind since birth and make videos on You Tube. AMA."
  },
  {
    "url": "t3_1mqv9d",
    "name": "I am a released prisoner who spent 8 years in solitary confinement but now published a book and do life coaching. Ask me anything."
  },
  {
    "url": "t3_1mu9jn",
    "name": "IamA junot daz AMA!"
  },
  {
    "url": "t3_1mupj6",
    "name": "IamA Chef on superyachts and have cooked for some of the richest people on earth, AMA!"
  },
  {
    "url": "t3_1myw05",
    "name": "I'm Ron Naveen, the only person on the planet whose day job is Penguin Counter. I've been counting these little guys for 20 years, and I'm on the front lines of climate change. Ask me anything!"
  },
  {
    "url": "t3_1mz0ze",
    "name": "I am producer/dj/some dude RJD2. It's 2013. Ask me anything, episode II"
  },
  {
    "url": "t3_1mz20e",
    "name": "Hi, Im Panos Panay, Corporate VP of Surface at Microsoft. Ask me Anything!"
  },
  {
    "url": "t3_1mz74p",
    "name": "I am Sleep Expert Brandon Jackson, ask me anything about sleep, bedding, or mattresses!"
  },
  {
    "url": "t3_1n08vg",
    "name": "IamA 20 year old female with Poland syndrome (born with one breast) AMA!"
  },
  {
    "url": "t3_1n3m6i",
    "name": "We are four people from Microsoft that work on Lync &amp; Unified Communications - ask us anything!"
  },
  {
    "url": "t3_1n41x1",
    "name": "Robin Williams. It's time for a convoluted stream of consciousness. Ask Me Anything!"
  },
  {
    "url": "t3_1n55a9",
    "name": "IamA level 3 sex offender AMA!"
  },
  {
    "url": "t3_1n7k0e",
    "name": "IamA US Navy submariner. I visited the North Pole. AMA!"
  },
  {
    "url": "t3_1n7kmc",
    "name": "We are Canadian band Said The Whale. Ask us anything!"
  },
  {
    "url": "t3_1n8n8i",
    "name": "IamA 25yr old single white woman who sold her belongings to travel the world for at least one year. AMA!"
  },
  {
    "url": "t3_1n97am",
    "name": "I am Imogen Heap, AMA"
  },
  {
    "url": "t3_1n9bmz",
    "name": "I am Redigit - Creator of Terraria. Ask Me Anything!"
  },
  {
    "url": "t3_1nbna6",
    "name": "Oh Hai Mark! Greg Sestero (Mark) from The Room here. Ask Me Anything."
  },
  {
    "url": "t3_1nbs2l",
    "name": "Hello, I'm Efren Ramirez Actor Best known for playing Pedro in Napoleon Dynamite AMA!"
  },
  {
    "url": "t3_1nbtp3",
    "name": "In recovery from a breast reduction...AMA"
  },
  {
    "url": "t3_1nco0z",
    "name": "I have worked at a sex store for the past 5 years. AMA! /nsfw"
  },
  {
    "url": "t3_1ndncc",
    "name": "I am currently living/working at the USA's smallest Antarctica research station. AMA (with pictures!)!"
  },
  {
    "url": "t3_1ndvop",
    "name": "I'm Joe Lipari, the NYC comedian turned terror suspect because of a Facebook post. I was featured on/in This American Life and Terms &amp; Conditions May Apply AMA."
  },
  {
    "url": "t3_1nfx00",
    "name": "IAmA co-founder of reddit, Alexis Ohanian, AMAATH (Ask Me Anything About Tom Hanks)"
  },
  {
    "url": "t3_1ng9e7",
    "name": "Whut up doe?! My name is Danny Brown. My new album is called OLD. Ask Me Anything bruh bruh!"
  },
  {
    "url": "t3_1ngfwy",
    "name": "Hi reddit, Tom Hanks here. Ask Me Anything."
  },
  {
    "url": "t3_1nh1pm",
    "name": "I am a Haunted Attraction reviewer and I've been through hundreds of Haunted Attractions, Ask Me Anything."
  },
  {
    "url": "t3_1nj163",
    "name": "IamA we're Pepper a rock band from Kailua-Kona, Hawaii, ask us all types of questions on AMA!"
  },
  {
    "url": "t3_1njufj",
    "name": "I am a Yosemite park ranger and can't go to work because the government shut down. AMAA!"
  },
  {
    "url": "t3_1nl9at",
    "name": "I am a member of Facebook's HHVM team, a C++ and D pundit, and a Machine Learning guy. Ask me anything!"
  },
  {
    "url": "t3_1nlie7",
    "name": "We are Phoenix the band: Branco, Christian, Deck, and Thomas, Ask Us Anything!"
  },
  {
    "url": "t3_1nnd7q",
    "name": "I've been to every country in the world. Now I'm doing a week-long survival training course in Puerto Rico with Les Stroud (AKA Survivorman)... AMA!"
  },
  {
    "url": "t3_1no1yd",
    "name": "IamA male registered nurse of five years, AMA"
  },
  {
    "url": "t3_1nppaa",
    "name": "IamA Glitter Manufacturer AMA!"
  },
  {
    "url": "t3_1nq106",
    "name": "IamA College Admissions Counselor/Recruiter AMA!"
  },
  {
    "url": "t3_1nqbie",
    "name": "We are the CLOUDY WITH A CHANCE OF MEATBALLS 2 Directors. AUA!"
  },
  {
    "url": "t3_1nqtif",
    "name": "Ask Adam Scott (me) anything."
  },
  {
    "url": "t3_1nrhq2",
    "name": "I just broke the Guinness World Record for the most Rubik's Cubes solved in 24 hours. AMA!"
  },
  {
    "url": "t3_1nsf31",
    "name": "Follow- up: Recovering from a breast reduction. AMA. (NSFW)"
  },
  {
    "url": "t3_1nss22",
    "name": "IamA Jared Champion, Drummer for Cage the Elephant, AMA!"
  },
  {
    "url": "t3_1nt3fl",
    "name": "IamA 24 year old girl who constantly looks like I have severe chicken-pox! I have contact allergies to most things, from soaps through preservatives, fabrics, dyes, medical ointments, dust and even water. AMA!"
  },
  {
    "url": "t3_1nu8fj",
    "name": "IAmA VBIED attack survivor. Ask me about coma, PTSD, pain, recovery and anything else. AMA"
  },
  {
    "url": "t3_1nwivj",
    "name": "I am Ryan James, Australian adult film actor and male escort, in the middle of shooting porn. AMA."
  },
  {
    "url": "t3_1nxjp9",
    "name": "I'm Ben Collins AKA 'The Stig' - Ask Me Anything!"
  },
  {
    "url": "t3_1o09p2",
    "name": "We are Ken Levine (@iglevine) and Andres Gonzalez from Irrational Games. Ask Us Anything."
  },
  {
    "url": "t3_1o0r7y",
    "name": "I am comedian and actress Natasha Leggero. I love lobster salad. I hate bros. AMA."
  },
  {
    "url": "t3_1o372k",
    "name": "IamA reactor operator on a Nimitz class aircraft carrier. AMA"
  },
  {
    "url": "t3_1o5fu5",
    "name": "I was a bear in Miley Cyrus' 2013 VMA Performance! AMA!"
  },
  {
    "url": "t3_1o5hjh",
    "name": "IamA girl who was born without a left hand. AMA!"
  },
  {
    "url": "t3_1o5ndh",
    "name": "IamA guy who went from 430 pounds to 170 pounds in approximately 11 months through starvation. AMA!"
  },
  {
    "url": "t3_1o6d9o",
    "name": "IAmA (We are) all 5 members of We The Kings! AUA!"
  },
  {
    "url": "t3_1o6wyr",
    "name": "Proud Owner of an Award-Winning Butthole"
  },
  {
    "url": "t3_1o8gau",
    "name": "Hi reddit, Im Tom Bergeron, host of DWTS and Americas Funniest Home Videos. Ask Me Anything."
  },
  {
    "url": "t3_1o8hul",
    "name": "I am Lawrence Lessig, activist and law prof at Harvard, here to talk about McCutcheon vs FEC -- the case SCOTUS heard this week that could end contribution limits to candidates. AMA."
  },
  {
    "url": "t3_1oddx9",
    "name": "Actor Joel David Moore of 'Avatar' and 'CBGB' here. I'm known for my underwear modeling. AMA."
  },
  {
    "url": "t3_1of0ty",
    "name": "IamA 20 year old male with a hormone disorder who hasn't gone through puberty. AMA"
  },
  {
    "url": "t3_1ofbuu",
    "name": "IAmA Private Investigator, Ask Me Anything. (Part 2)"
  },
  {
    "url": "t3_1ofqqj",
    "name": "Hey guys, director Renny Harlin here (Die Hard 2, Deep Blue Sea, Cliffhanger and the upcoming Hercules film). AMA!"
  },
  {
    "url": "t3_1ofujl",
    "name": "IamA 39 year old that is now cancer free after being diagnosed with inoperable Stage 4 cancer AMA!"
  },
  {
    "url": "t3_1oguh2",
    "name": "I'm a Wi-Fi expert. Ask me anything."
  },
  {
    "url": "t3_1oidic",
    "name": "IamA 18 year old Competitive Shooter"
  },
  {
    "url": "t3_1oijg4",
    "name": "We're The Dismemberment Plan and we just released our first album in over a decade. Ask us anything!"
  },
  {
    "url": "t3_1oill0",
    "name": "We are Danny McBride and Jody Hill of Eastbound and Down. Ask Us Anything."
  },
  {
    "url": "t3_1oj99h",
    "name": "I just climbed Mt. Everest (really). Saw the Sherpa fight. AMA!"
  },
  {
    "url": "t3_1okujq",
    "name": "IamA the CEO of Bebo, a social network that we sold for $850M and bought back for $1M, AMA!"
  },
  {
    "url": "t3_1ol6hy",
    "name": "IamA Lesbian who worked in the legal brothels in Nevada for almost a decade AMA!"
  },
  {
    "url": "t3_1ol7ek",
    "name": "Hi. IAmA (WeAreThe) creators of the Epic Rap Battles of History: Nice Peter (nicepeter), EpicLLOYD (epiclloyd). Ask us anything!"
  },
  {
    "url": "t3_1ol7yx",
    "name": "IamA Dom from Big Gigantic AMA!"
  },
  {
    "url": "t3_1olppn",
    "name": "We are Anberlin, and we are an American Rock Band with a very particular set of skills. Ask us anything."
  },
  {
    "url": "t3_1onk34",
    "name": "I am Tom Green and my AMA starts now!"
  },
  {
    "url": "t3_1onpz3",
    "name": "We are Danny Tamberelli and Michael C. Maronna, former TV brothers who still act suspiciously like real brothers. We just started a new Podcast, The Adventures of Danny and Mike. We both like the NY Giants and The NY Mets. AUA!"
  },
  {
    "url": "t3_1oos1q",
    "name": "I'm Anthony Green.i sing for Circa Survive and a project under my own name. My 3rd solo album young legs comes out nov 12th. Ask me anything."
  },
  {
    "url": "t3_1opoaj",
    "name": "IamA nude model for art classes at a large university, AMA!"
  },
  {
    "url": "t3_1opzae",
    "name": "Penn Jillette here -- Ask Me Anything."
  },
  {
    "url": "t3_1oqfnj",
    "name": "IamA Ex Porn Photographer/Videographer AMA!"
  },
  {
    "url": "t3_1oqk25",
    "name": "I'm Tyler Lemco, former member of EpicMealTime and current YouTuber, Podcaster and Rapper - Ask Me Anything"
  },
  {
    "url": "t3_1oqmf7",
    "name": "I am actor/comedian Ken Marino, ask me anything!"
  },
  {
    "url": "t3_1or2qx",
    "name": "IamA Sexual health educator for COLLEGE students in the south. I talk about anything from birth control to pleasure with students who may never have learned about it. AMA!"
  },
  {
    "url": "t3_1orirv",
    "name": "IamA Racehorse track rider, not sure if anyone would find this interesting, but if you want to know about this industry, AMA!"
  },
  {
    "url": "t3_1osbx3",
    "name": "I have albinism, and recently attended a conference for people with albinismAmA"
  },
  {
    "url": "t3_1ou5pl",
    "name": "IAmA 911 dispatcher for a county sheriff's office ama"
  },
  {
    "url": "t3_1ouqge",
    "name": "Keanu Reeves. Ask me, if you want, almost anything."
  },
  {
    "url": "t3_1ov8li",
    "name": "I'm a woman living with Terminal, Metastatic Breast Cancer to the liver. I also hate pink. AMA"
  },
  {
    "url": "t3_1owf4v",
    "name": "I'm Rick Falkvinge, founder of the first Pirate Party and subsequent author of Swarmwise: the tactical manual to changing the world. AMA."
  },
  {
    "url": "t3_1oxeir",
    "name": "I fell two stories and landed in a coma with less than a 10% chance of recovery. For 4 months, I couldn't walk, talk, or eat. Now I'm speaking about traumatic brain injury. I'm Cavin, AMA!"
  },
  {
    "url": "t3_1oxj2b",
    "name": "[Meta] This subreddit has nothing to be ashamed of"
  },
  {
    "url": "t3_1oy3ju",
    "name": "IamA lawyer who creates trust funds for millionaires."
  },
  {
    "url": "t3_1oz5n9",
    "name": "IamA pastor (ordained clergy) in a United Methodist Church. AMA!"
  },
  {
    "url": "t3_1ozt33",
    "name": "I am Allie Brosh, the draw-writer of Hyperbole and a Half. Ask me anything about anything!"
  },
  {
    "url": "t3_1p2lwp",
    "name": "I created Dilbert. Ask Me Anything."
  },
  {
    "url": "t3_1p2x6f",
    "name": "IamA a comedy guy guitar guy who makes Metalocalyspe I'm Brendon Small AMA!"
  },
  {
    "url": "t3_1p32dl",
    "name": "I'm R.L. Stine and it's my job to terrify kids. Ask me anything!"
  },
  {
    "url": "t3_1p533r",
    "name": "I am Dani Snow from Syfy's recent reality show FANGASM. I was one of the seven geeks! I was also the winner of the internship, landing myself a permanent job working for Stan Lee! AMA"
  },
  {
    "url": "t3_1p7bf4",
    "name": "I'm Greg Everett, maker of the independent documentary American Weightlifting - AMA"
  },
  {
    "url": "t3_1p7n6m",
    "name": "IamA Loss Prevention Investigator (undercover) who catches retail shoplifters for a living, AMA!"
  },
  {
    "url": "t3_1p9skw",
    "name": "IamA employee at Subway sandwich shop AMA!"
  },
  {
    "url": "t3_1p9vrw",
    "name": "IamA Jeremiah Bitsui AKA Victor from Breaking Bad, star of the new movie Drunktown's Finest... AMA"
  },
  {
    "url": "t3_1pajkl",
    "name": "IamA Anaesthesia Awareness survivor! AMA!"
  },
  {
    "url": "t3_1pbvq0",
    "name": "IAma 48 State Truck Driver. Ask me anything you like! Thanks."
  },
  {
    "url": "t3_1pbx9n",
    "name": "Iama 20-year-old blacksmith who makes knives as a sole (meager) income. AMA!"
  },
  {
    "url": "t3_1pd095",
    "name": "I'm currently running for Mayor of Miami Beach against a near billionaire and a career politician and I'm making a documentary about the dirty political process, and the election is in 9 days."
  },
  {
    "url": "t3_1pe0kb",
    "name": "IamA Former Scientologist and Ex Sea Org Member that spent 4 years on the RPF. AMA!"
  },
  {
    "url": "t3_1pe2bd",
    "name": "IamA Vacuum Repair Technician, and I can't believe people really wanted it, but, AMA!"
  },
  {
    "url": "t3_1pf2y5",
    "name": "We're Pentatonix! Ask Us Anything!!"
  },
  {
    "url": "t3_1pgr87",
    "name": "I Am Chris Jericho, Actor / WWE Wrestler / Musician / Author - Ask Me Anything!"
  },
  {
    "url": "t3_1pgv45",
    "name": "I am in Pyongyang, North Korea AMA!"
  },
  {
    "url": "t3_1piz9p",
    "name": "I am a former casino surveillance tech. AMA!"
  },
  {
    "url": "t3_1pjio4",
    "name": "IamA I'm a stand up comedian and it's my cake day so like me so I don't die poor."
  },
  {
    "url": "t3_1pkrww",
    "name": "IamA combat medic who was hit with an RPG in Afghanistan, resulting in me being paralyzed from the chest down AMA!"
  },
  {
    "url": "t3_1pmu2q",
    "name": "I work at one of the most profitable pawnshops in California! AMA"
  },
  {
    "url": "t3_1pnw9l",
    "name": "I'm an ER doctor (Now with more proof and twice the calories!)"
  },
  {
    "url": "t3_1ppz4p",
    "name": "I'm Maxx, the Project Lead on the new Steam game No More Room in Hell, AMA"
  },
  {
    "url": "t3_1pq5lv",
    "name": "IamA quadriplegic female AMA!"
  },
  {
    "url": "t3_1pr4xt",
    "name": "IAMA Zookeeper with an hour (probably) to kill before our new giraffes get here AMA [end of the season update]"
  },
  {
    "url": "t3_1prt0f",
    "name": "IAmA Midwestern Farmer. I know a lot about corn. AMA! [Round 2]"
  },
  {
    "url": "t3_1pscl3",
    "name": "IamA Professional MERMAID AMA!"
  },
  {
    "url": "t3_1psv9u",
    "name": "IamA skydiving instructor, been in the sport for 10+ years and almost seen it all AMA!"
  },
  {
    "url": "t3_1pswxv",
    "name": "IamA Local Gaming Shop Owner in Scotland! AMA!"
  },
  {
    "url": "t3_1ptw4j",
    "name": "IamA young female escort and have worked in a dungeon AMA!"
  },
  {
    "url": "t3_1pvge6",
    "name": "We are the Zooniverse, the world's most awesome and successful citizen science organisation. Ask us anything!"
  },
  {
    "url": "t3_1pwrtl",
    "name": "I am an ex-convict who spent 8 years in solitary confinement now helping others find inner peace and own my own businesses."
  },
  {
    "url": "t3_1pxnki",
    "name": "I am an award winning bartender, AMA!"
  },
  {
    "url": "t3_1py2gr",
    "name": "IamA 16 year old Tsunami Survivor AMA!"
  },
  {
    "url": "t3_1pyv5u",
    "name": "I am ACE OF CAKE'S Duff Goldman - AMA!"
  },
  {
    "url": "t3_1q108l",
    "name": "I AMA wind turbine technician AMAA."
  },
  {
    "url": "t3_1q1a2r",
    "name": "I am Jay Onrait, AMA!"
  },
  {
    "url": "t3_1q1ggo",
    "name": "Led Zeppelin press officer BP Fallon tells all - maybe? AMA"
  },
  {
    "url": "t3_1q1p9v",
    "name": "IAMA blockbuster store employee. AMA"
  },
  {
    "url": "t3_1q1v1b",
    "name": "What's the haps, it's Dieminion. ask me anything about....anything"
  },
  {
    "url": "t3_1q2ehg",
    "name": "IAMA wildlife filmmaker. My videos have been featured on Nickelodeon and Discovery, and I spent most of the last ten years traveling around filming wildlife. AMA!"
  },
  {
    "url": "t3_1q4lt6",
    "name": "I'm Brad Neely, Creator of China, IL; Baby Cakes; Professor Brothers; Wizard People; and George Washington. AMA"
  },
  {
    "url": "t3_1q4nr5",
    "name": "I am Matthew Taranto of Brawl in the Family &amp; Tadpole Treble. AMA! WAAAA"
  },
  {
    "url": "t3_1q70ez",
    "name": "I am Adam Savage, co-host of Mythbusters, back again. AMA!"
  },
  {
    "url": "t3_1q7ikn",
    "name": "Retta relates. Retta here from Parks &amp; Rec: AMA."
  },
  {
    "url": "t3_1q9ghg",
    "name": "Im Joe Kwon, cello player for the Avett Brothers. AMA!"
  },
  {
    "url": "t3_1qa2dk",
    "name": "IAmA former Amish person that left home and joined the military. AMA"
  },
  {
    "url": "t3_1qbe84",
    "name": "IamA woman remote control airplane pilot who has won 6 national titles. I fly large scale airplanes (40% scale with a 150cc engine). AMA!"
  },
  {
    "url": "t3_1qbea8",
    "name": "IamAn evolutionary biologist. AMA!"
  },
  {
    "url": "t3_1qbh49",
    "name": "I am an American contractor in Sochi Russia helping to build stadiums for the 2014 winter Olympics. AMAA"
  },
  {
    "url": "t3_1qcbdw",
    "name": "IamAn American truck driver. I drive 550 miles every day. I have lived out of gas stations. AMA!"
  },
  {
    "url": "t3_1qckjp",
    "name": "IamA quadriplegic female who just got her Tracheotomy tube out AMA!"
  },
  {
    "url": "t3_1qe15g",
    "name": "I am Bear Grylls: Adventurer, family man &amp; host of Escape from Hell on Discovery Channel"
  },
  {
    "url": "t3_1qetvk",
    "name": "I am Ladar Levison, owner and operator of Lavabit, ask me almost anything."
  },
  {
    "url": "t3_1qi4bs",
    "name": "Hi, I'm Amber Sym, Playboy Model, Actress and Horror Hostess extraordinaire ;) AMA!"
  },
  {
    "url": "t3_1qi8p2",
    "name": "IamA stripper and escort AMA!"
  },
  {
    "url": "t3_1qisin",
    "name": "I was a flash programmer at Zynga for 3 years. AMA"
  },
  {
    "url": "t3_1qjg3s",
    "name": "We make the game Cards Against Humanity. Ask us anything."
  },
  {
    "url": "t3_1qk99k",
    "name": "I am Jerry Saltz, New York Magazine's art critic. Ask me anything about art, or everything. Keep your heads down and your helmets on."
  },
  {
    "url": "t3_1qm7kn",
    "name": "I am a subcontracted tile installer in the Midwest... Ask me anything, and I mean anything!"
  },
  {
    "url": "t3_1qmbyk",
    "name": "I am Jay Blake, the world's only completely blind crew chief in the world of motorsports. Ask me anything!"
  },
  {
    "url": "t3_1qmg9f",
    "name": "I am Rolf Potts, a travel writer who has traveled around the world with no luggage of any kind, and am the author of Vagabonding. AMA!"
  },
  {
    "url": "t3_1qmmn3",
    "name": "I'm a scientist working on the next mission to Mars (MAVEN) which launches on Monday. It'll investigate the missing Martian atmosphere. AMA!"
  },
  {
    "url": "t3_1qmys2",
    "name": "IamA Jason Aalon Butler, I instigate in the band letlive. as well as propagate world shaping causes like this..."
  },
  {
    "url": "t3_1qp8h0",
    "name": "I am Steve Hofstetter, original writer for collegehumor.com, the guy with the heckler videos on YouTube, and a comedian about to shoot my first TV special. AMA!"
  },
  {
    "url": "t3_1qp91h",
    "name": "IamA (we are) Microsoft ASP.NET and Web Tools Team (and Azure) AMA!"
  },
  {
    "url": "t3_1qqfu7",
    "name": "IamA California Highway Patrol Officer AMA!"
  },
  {
    "url": "t3_1qrpmm",
    "name": "IamA black guy adopted and raised by a white family, AMA!"
  },
  {
    "url": "t3_1qs50f",
    "name": "We are Monstercat, an indie Electronic record label that recently broke 1 million subscribers. AMA!"
  },
  {
    "url": "t3_1qs8we",
    "name": "I am a survivor of an attempted murder."
  },
  {
    "url": "t3_1qtres",
    "name": "BABIES! IT'S JUNE DIANE RAPHAEL AND CASEY WILSON! ASK US ANYTHING!"
  },
  {
    "url": "t3_1qtvav",
    "name": "IamA professional pianist who can improvise on any holiday song in any style of music. I'll play your requests! AMA."
  },
  {
    "url": "t3_1qvi3r",
    "name": "I work at a breastaurant AMA!"
  },
  {
    "url": "t3_1qwtre",
    "name": "Hello, reddit. I'm Vince Vaughn. AMA!"
  },
  {
    "url": "t3_1qx1b0",
    "name": "We started Slickdeals, the largest online deal community, ask us anything!"
  },
  {
    "url": "t3_1qzftv",
    "name": "IamA 19 year old woman who has suffered pulmonary embolisms from the use of Nuva Ring. AMA!"
  },
  {
    "url": "t3_1r1vpf",
    "name": "I work in Juvenile Detention. AMA!"
  },
  {
    "url": "t3_1r2byk",
    "name": "Today is Hug-A-Ginger Day, Im the director of the film Being Ginger, which is free to watch online, today only, AMA!"
  },
  {
    "url": "t3_1r2vop",
    "name": "We're Blu Mar Ten, Drum &amp; Bass / Electronic producers and record label. Ask us anything."
  },
  {
    "url": "t3_1r2z7i",
    "name": "Pete Holmes from The Pete Holmes Show here. Ask me something. Ask me anything."
  },
  {
    "url": "t3_1r5qhn",
    "name": "I am the editor-in-chief of Kotaku, AMA about PS4, Xbox One, Mario, Zelda, you name it!"
  },
  {
    "url": "t3_1r5vzt",
    "name": "I'm Anna Breslaw, Cosmopolitan.com's Sex &amp; Relationships editor. AMA!"
  },
  {
    "url": "t3_1r5zt7",
    "name": "Independent Rapper Tech N9ne here, Ask me ANYTHING&lt; LET'S GO!"
  },
  {
    "url": "t3_1r85hg",
    "name": "IamA professional pizza enthusiast/historian, NYC pizza tour guide and Guinness Record Holder for the largest collection of unique pizza boxes. AMA!"
  },
  {
    "url": "t3_1r8kkm",
    "name": "This is Chris Lilley. AMA if you're quiche."
  },
  {
    "url": "t3_1r98uh",
    "name": "I'm Throttle, and I make dirty disco music! AMA"
  },
  {
    "url": "t3_1rbfht",
    "name": "I am Diana Xie, a 22 year old neuroscience researcher at Duke University, and I just successfully funded a new online TV show about brain science with Kickstarter. Ask me anything."
  },
  {
    "url": "t3_1rblij",
    "name": "IamA (U.S. Navy SEAL) AMA!"
  },
  {
    "url": "t3_1rcpon",
    "name": "I am a doctor, rapper, and video maker who's trying to revolutionize healthcare and stuff. AMA!"
  },
  {
    "url": "t3_1rcu9p",
    "name": "IamA (moth penis dissector, by profession.) AMA!"
  },
  {
    "url": "t3_1reafj",
    "name": "I am Dr. Jean-Francois Garipy, a brain researcher specialized in social interactions at Duke University. Ask me anything."
  },
  {
    "url": "t3_1reemp",
    "name": "IamA survivor of a violent gun crime. AMA!"
  },
  {
    "url": "t3_1rfijj",
    "name": "Hey, Alex Winter of Bill &amp; Ted here. Directing a new movie called Deep Web: The Untold Story of Bitcoin and Silk Road. Ask me anything!"
  },
  {
    "url": "t3_1rgvgz",
    "name": "I am a a porn director for penthouse ask me anything!"
  },
  {
    "url": "t3_1rhv8y",
    "name": "IamA CCP Rise, Game Designer for EVE Online AMA!"
  },
  {
    "url": "t3_1rhx59",
    "name": "I used to be a paparazzo (2007-2011). I'm here to reveal all secrets of the dirty work and talk about celebrities."
  },
  {
    "url": "t3_1ri1y9",
    "name": "I am Richard Dawkins, scientist, researcher, author of 12 books, mostly about evolution, plus The God Delusion. AMA"
  },
  {
    "url": "t3_1rifpd",
    "name": "I'm a stuntwoman who played the Catching Fire District 9 tribute, and I've been in The Terminator, Reservoir Dogs, Air Force One, and many others. AMA!"
  },
  {
    "url": "t3_1rj3so",
    "name": "I AM THE SINGER JAMES DURBIN! Ask Me Anything!"
  },
  {
    "url": "t3_1rjdoc",
    "name": "The Hunger Games: Catching Fire director Francis Lawrence here. Ask me anything."
  },
  {
    "url": "t3_1rjgnj",
    "name": "We are scientists studying Comet ISON and members of NASA's Comet ISON Observing Campaign team. AMA!"
  },
  {
    "url": "t3_1rlghk",
    "name": "Detained by the Russians behind the Berlin Wall, shot and wounded twice in Vietnam (Purple Hearts), survived 3 aircraft crashes, retired Army Infantry Lt. Colonel. Ask Me Anything!"
  },
  {
    "url": "t3_1rlz8t",
    "name": "IamA 23-year-old male who suffers from Chronic Cluster Headaches, one of the most painful conditions known to medical science. AMA."
  },
  {
    "url": "t3_1rm0id",
    "name": "I just drove 3121 miles solo from Mexico to Canada in a Tesla Model S Electric car. No gas. No fuel cost. AMA"
  },
  {
    "url": "t3_1rneli",
    "name": "I've been traveling around the world for 3 years non-stop while running my online business, which is my sole source of income. Ask me anything!"
  },
  {
    "url": "t3_1rnz3m",
    "name": "IamA 90 Year old woman, living in a muli-story house all by myself AMA!"
  },
  {
    "url": "t3_1rqlw5",
    "name": "My sister and I just road 2858 miles from Canada to Mexico on our bicycles. No gas. No fuel cost. AMA (Ask us anything)"
  },
  {
    "url": "t3_1rrsn6",
    "name": "IAmA 911 Emergency Calltaker. AmA!"
  },
  {
    "url": "t3_1rsdfn",
    "name": "I am Chloe Bennet and I play SKYE from Marvel's Agents of Shield. AMA!!!"
  },
  {
    "url": "t3_1rtu1i",
    "name": "IAmA eighteen year-old exotic dancer working in Texas. AMA!"
  },
  {
    "url": "t3_1ruevf",
    "name": "IamA felon who was released from prison this week. AMA"
  },
  {
    "url": "t3_1ruxwz",
    "name": "IamA Manager of a sex shop/adult boutique! AMA!"
  },
  {
    "url": "t3_1rwrod",
    "name": "IamA founder of Tindie, Etsy for Tech. Started on /r/Arduino, team of 5, just finished fundraising (pitching 50+ investors), and have now closed $1m+ in funding. This is a follow up to last year's AMA, for anyone interested in startups/tech/Silicon Valley/open hardware. AMA!"
  },
  {
    "url": "t3_1rwxa5",
    "name": "IamA Sex toy reviewer and blogger"
  },
  {
    "url": "t3_1ryagg",
    "name": "IamA Death metal vocalist from the cold and grim land of Norway, AMA!"
  },
  {
    "url": "t3_1rzhcv",
    "name": "Bajo and Hex, hosts of Australian TV shows Good Game and Good Game Spawn Point - AMA!"
  },
  {
    "url": "t3_1rzyx2",
    "name": "I am Walter Dean Myers, author of over 100 books, including bestselling FALLEN ANGELS, which has been banned for its realistic portrayal of the Vietnam War. AMA."
  },
  {
    "url": "t3_1s0mqq",
    "name": "We are Licensed Games Workshop Developers. We make/are making games such as Chainsaw Warrior, Warhammer Quest, Talisman, Space Hulk, Warhammer 40,000:Carnage, Bloodbowl, Eternal Crusade, (Storm of Vengeance, Warhammer 40,000: Space Wolf) plus Slitherine is here too!Ask Us Anything!"
  },
  {
    "url": "t3_1s2wmb",
    "name": "We are the band Bombay Bicycle Club, ask us anything"
  },
  {
    "url": "t3_1s30yn",
    "name": "IamA father of a quadriplegic 9 year old boy that cannot communicate verbally, is ventilator dependent, and eats only goats milk through a g-tube. AmA"
  },
  {
    "url": "t3_1s4dr4",
    "name": "I am James Merendino director and writer of SLC Punk 1 and 2. Here with Michael Goorjian AKA Heroin Bob, Devon Sawa AKA Sean the Beggar, James Duval AKA John the Mod and Branden Steineckert, co-exec producer and member of the band Rancid. Ask Us Anything!"
  },
  {
    "url": "t3_1s4gm1",
    "name": "I am comedian Chris D'Elia (from Workaholics and other things). Ask me anything."
  },
  {
    "url": "t3_1s51bm",
    "name": "IamA (19yr old girl wheelchair bound and other physical ailments ) AMA!"
  },
  {
    "url": "t3_1sbfeq",
    "name": "IamA international school teacher in Shanghai, China. AMA!"
  },
  {
    "url": "t3_1sbwz8",
    "name": "I am David Belk. I'm a doctor who has spent years trying to untangle the mysteries of health care costs in the US and wrote a website exposing much of what I've discovered AMA!"
  },
  {
    "url": "t3_1seh9h",
    "name": "I donate my time subtitling popular YouTube videos for the deaf and hard of hearing at www.amara.org. AMA."
  },
  {
    "url": "t3_1sejw6",
    "name": "I've been defenestrated, shot at, thrown into walls, fallen 25 feet hundreds of times. I got paid to call Justin Bieber a bitch. I've been a stunt nerd, zombie, cowboy, ninja and pirate. Stunt performer for live shows, film and TV. AMA"
  },
  {
    "url": "t3_1sezy8",
    "name": "I was sentenced to 50 years in Prison at the age of 18 for non-violent crimes (40 years suspended). Spent my entire sentence in Maximum Security Facilities. AMA Again!"
  },
  {
    "url": "t3_1sf62f",
    "name": "We are the band Midlake. AUA."
  },
  {
    "url": "t3_1siu94",
    "name": "I sailed from Ireland to Greenland on a 100 year old boat, climbed mountains for a month then sailed home AMA!"
  },
  {
    "url": "t3_1skdqt",
    "name": "IamA We are the flimmakers behind Kidnapped For Christ a documentary about a controversial behavior modification program for American Teens. AMA!"
  },
  {
    "url": "t3_1sn420",
    "name": "I used to be a developer in the National Library in Norway, digitizing everything published in Norway. IAmA"
  },
  {
    "url": "t3_1sog0z",
    "name": "I spent 8 years in solitary confinement and just launched a website that teaches the inner peace techniques that kept me sane in isolation. Ask me anything."
  },
  {
    "url": "t3_1spg20",
    "name": "I am riding a bicycle solo across Africa, sleeping in the wild and conquering some of my deepest fears"
  },
  {
    "url": "t3_1sqj4k",
    "name": "I am 'Mean' Gene Snitsky, former Pro Wrestler (WWE / ECW) and current TV / Film actor. Ask me anything!"
  },
  {
    "url": "t3_1sqnvg",
    "name": "Hey it's Daniel Dae Kim from Hawaii 5-0, LOST, and Saints Row, among some other good stuff. Come join my AMA"
  },
  {
    "url": "t3_1sr7hd",
    "name": "IamA Microsoft Retail Employee w/ time to kill. Come and ask all questions! Uncensored, unedited. AMA!"
  },
  {
    "url": "t3_1ssje2",
    "name": "Broke my back skiing last february. IAmA 18 year old paraplegic. Ask me anythig !"
  },
  {
    "url": "t3_1stq76",
    "name": "I am Cameron Argon, man behind Disfiguring The Goddess and Big Chocolate, AMA!"
  },
  {
    "url": "t3_1str27",
    "name": "My name is Will Forte and I will answer ANYTHING you ask me."
  },
  {
    "url": "t3_1svfoo",
    "name": "IamA father of a six year old with Down Syndrome AMA!"
  },
  {
    "url": "t3_1svvca",
    "name": "IamA Gary Vaynerchuk. Serial Entrepreneur, NYT Bestselling Author, former host of Wine Library TV and Die-Hard Jets Fan. AMA!"
  },
  {
    "url": "t3_1swrhe",
    "name": "IamA Syrian Smuggler for the FSA (Free Syrian Army) AMA."
  },
  {
    "url": "t3_1szx4i",
    "name": "IamA Lucie Bee, Australian Pornstar, Escort and Sex Geek! AMA!"
  },
  {
    "url": "t3_1t0gkq",
    "name": "Paranoid Android (Android ROM) AMA!"
  },
  {
    "url": "t3_1t3hxa",
    "name": "I quit high school to fight in the Pacific during WWII. I'm fortunate to be alive at 88. AMA!"
  },
  {
    "url": "t3_1t49dv",
    "name": "IamA 23-year-old girl who has lived on boats my entire adult life. AMA!"
  },
  {
    "url": "t3_1t4myo",
    "name": "Key &amp; Peele back on Reddit for a third time. Ask us anything. Do it."
  },
  {
    "url": "t3_1t5xkx",
    "name": "Thinking about a career in Hollywood? IAmA 10 year film industry vet. AMA!"
  },
  {
    "url": "t3_1t6es9",
    "name": "IamA woman who was born with a vaginal septum, aka two vaginas. AMA!"
  },
  {
    "url": "t3_1t6zr1",
    "name": "I secretly created Bang With Friends, took over SXSW 2013, grew BWF to over 1M users, got booted from Apple's App Store, had my identity outed by the media, raised $1M, got sued, and relaunched as DOWN. Ask Me (Almost) Anything!"
  },
  {
    "url": "t3_1t7cgy",
    "name": "We are Barry and Suzy from Game Grumps, with a new show called Table Flip! ASK US ANYTHING!!"
  },
  {
    "url": "t3_1t7mu8",
    "name": "I am actor Jon Gries. I am probably best known for my role as Uncle Rico in Napoleon Dynamite. I am directing a new film. A Western called Another Man's Gun."
  },
  {
    "url": "t3_1t9uq6",
    "name": "I am a comedian named Bo Burnham. My new special what. is out for free on YouTube/Netflix. AMA"
  },
  {
    "url": "t3_1ta82w",
    "name": "IamA 102 year old WWII vet, still mobile, healthy and in touch with the world. AMA!"
  },
  {
    "url": "t3_1tb1b2",
    "name": "IAmA woman who had an abortion today. Ask me anything."
  },
  {
    "url": "t3_1tbt9q",
    "name": "IamA High School student who worked at NASA and will be flying in microgravity AMA!"
  },
  {
    "url": "t3_1tcrxh",
    "name": "We are The Glitch Mob. Ask us anything!"
  },
  {
    "url": "t3_1ter8t",
    "name": "I am John Lloyd, TV and Radio Producer (Blackadder, Spitting Image, QI etc...). AMA."
  },
  {
    "url": "t3_1tjy4k",
    "name": "IamA Intersex person who has a plethora of rare illnesses, including one that occurs in only 1 in every 300 million people. AMA!"
  },
  {
    "url": "t3_1tk4ab",
    "name": "IamA Highschool dropout making $105K/year. I just completed my GED. AMA!"
  },
  {
    "url": "t3_1tlbwk",
    "name": "IamA 103-year-old BAMF -- AMA!"
  },
  {
    "url": "t3_1tmobi",
    "name": "IamA I am a 21 year old male currently two days away from having pioneering open heart surgery; a procedure in which you are, essentially, dead for periods of up to 20-30 minutes. AMA."
  },
  {
    "url": "t3_1tnhgg",
    "name": "IamA Hacker for the Government(s) AMAA!"
  },
  {
    "url": "t3_1tqhz6",
    "name": "IamA Traffic signals technician AMA!"
  },
  {
    "url": "t3_1tqyyz",
    "name": "IamA trans artist and educator who recently had gender reassignment surgery, AKA a vaginoplasty, AKA sex change operation! AMA!"
  },
  {
    "url": "t3_1tr3ak",
    "name": "I work in one of the fastest growing industries of 2013. Electronic Cigarettes / Vapes! Ask Me Anything!"
  },
  {
    "url": "t3_1ttbzk",
    "name": "I'm Evan Booth, and I can build guns, bombs, and other weapons out of things you can buy after the airport security checkpoints. AMA."
  },
  {
    "url": "t3_1tti1i",
    "name": "I am Ron 'Bumblefoot' Thal - solo artist, producer, and I play lead guitar in Guns N' Roses :) AMA!!"
  },
  {
    "url": "t3_1ttk5u",
    "name": "I am Alex Borstein, voice of Lois on Family Guy and Nurse Dawn on HBO's Getting On. AMA"
  },
  {
    "url": "t3_1ttwf9",
    "name": "I am Hank Green, co-host of Vlogbrothers, Mental Floss, Crash Course, and SciShow. Professional YouTuber and guy who talks about science. AMA"
  },
  {
    "url": "t3_1tu6r5",
    "name": "I'm DJ Ravine and I've just hit 200,000 subscribers on Youtube! Ask me about DJing, Youtube, Music or just AMA!"
  },
  {
    "url": "t3_1tv3t4",
    "name": "IamA 97 y.o. Australian WW2 Veteran who fought in Papua New Guinea and these days I still make wooden wheelbarrows and clocks for people almost every day AMA!"
  },
  {
    "url": "t3_1tx8sf",
    "name": "IamA Professional Magician.. *poof* AMA!"
  },
  {
    "url": "t3_1tyont",
    "name": "IamA Chicago Public Schools teacher on the south side AMA!"
  },
  {
    "url": "t3_1tzjf1",
    "name": "IamA Fitness industry veteran of 14+ years: Do you know what REALLY happens when you join a gym? Sharing the sales secrets.... AMA!"
  },
  {
    "url": "t3_1tzleq",
    "name": "IamA Professional Voice Actor AMA!"
  },
  {
    "url": "t3_1u0bhg",
    "name": "IamA 21 year old male who has just survived pioneering heart surgery, partially down to all of your support - AMA!"
  },
  {
    "url": "t3_1u251s",
    "name": "IamA Former world record holding 90 year old race car driver. AMA!"
  },
  {
    "url": "t3_1u3mrc",
    "name": "IamA digital camera and lens repair technician AMA!"
  },
  {
    "url": "t3_1u478d",
    "name": "IamA one of the 1058 applicants selected for round two of Mars One applications. AMA!"
  },
  {
    "url": "t3_1u5rab",
    "name": "IamA 16 y-o boy with a skin condition called vitiligo AMA!"
  },
  {
    "url": "t3_1u60a7",
    "name": "I am Richard Bernstein, blind attorney, ironman and 18 time marathoner who is suing New York City for no money but to simply make Central Park safer. Ask me anything!"
  },
  {
    "url": "t3_1u61jq",
    "name": "IamA CEO &amp; Partner of one of the world's first legal marijuana stores (license # 37) in Denver, CO AMA!"
  },
  {
    "url": "t3_1u75hh",
    "name": "I am the guy with two penises. AMA."
  },
  {
    "url": "t3_1u8y8l",
    "name": "Joel McHale's AMA repilot: AMA."
  },
  {
    "url": "t3_1ua0xo",
    "name": "IamA Strip club DJ AMA!"
  },
  {
    "url": "t3_1uba7f",
    "name": "I am Colonel (Retired) Peter Mansoor, former executive officer to General David Petraeus during the surge in Iraq and now a professor of military history at the Ohio State University. AMA."
  },
  {
    "url": "t3_1ubdgp",
    "name": "IamA former taxi driver from the OC with a ton of crazy stories AMA!"
  },
  {
    "url": "t3_1ucl11",
    "name": "IamA american who spent the fall teaching Computer Science in Pyongyang, North korea. AMA!"
  },
  {
    "url": "t3_1uec5m",
    "name": "IamA horse dentist AMA!"
  },
  {
    "url": "t3_1ueh68",
    "name": "We are Catholic seminarians studying for the priesthood, Ask Us Anything!"
  },
  {
    "url": "t3_1uf2ym",
    "name": "I am the editor of eFukt. Ask me anything."
  },
  {
    "url": "t3_1uhf3k",
    "name": "I am Rebecca Romney, the Rare Book Expert on Pawn Stars. AMA."
  },
  {
    "url": "t3_1ui9v9",
    "name": "IAm Siri, award-winning porn star, 2013 Top Writer on Quora, and swinger. AMA!"
  },
  {
    "url": "t3_1uiexf",
    "name": "My name is Tim Ross. I'm a stand up comedian. AMA!"
  },
  {
    "url": "t3_1uj5jl",
    "name": "IamA nanny for a super-rich family in China AMA!"
  },
  {
    "url": "t3_1ujvrg",
    "name": "Jerry Seinfeld here. I will give you an answer."
  },
  {
    "url": "t3_1uk1l9",
    "name": "I have climbed the Seven Summits (tallest peaks on all seven continents), skied to the North and South Poles, and am on the part-time faculty at West Point. Ask Me Anything."
  },
  {
    "url": "t3_1um3qe",
    "name": "19 y/o girl with Amelogenesis Imperfect a AmA"
  },
  {
    "url": "t3_1umbp6",
    "name": "Hi Reddit, I'm Rikky Burkett, co-founder of the School of Atlantis. It is an online, virtual school that is in actuality, a game. Ask me anything!"
  },
  {
    "url": "t3_1ume6l",
    "name": "IamA Resident Beer Professor at a top craft beer bar AMA!"
  },
  {
    "url": "t3_1umnw6",
    "name": "IamA Skeleton Racer AMA."
  },
  {
    "url": "t3_1umt80",
    "name": "I am the CEO of the startup that is about to kill Google Glass AMA!"
  },
  {
    "url": "t3_1umy0m",
    "name": "We Are Jordan Morris and Jesse Thorn, Hosts of the Pioneering Comedy Podcast Jordan Jesse Go... AUA!"
  },
  {
    "url": "t3_1un34t",
    "name": "I was a white collar criminal that got busted, and spent some time in jail. Here to answer some questions about prison life in the FEDERAL system."
  },
  {
    "url": "t3_1un3wn",
    "name": "We are the Pornhub team. Ask Us Anything."
  },
  {
    "url": "t3_1uncfl",
    "name": "Tom Arnold answers literally everything."
  },
  {
    "url": "t3_1unuzx",
    "name": "IamA World Famous Battle Rapper.. Charron AMA"
  },
  {
    "url": "t3_1uoeb0",
    "name": "I am Wolfgang Gartner. Ask me anything you want."
  },
  {
    "url": "t3_1uokk5",
    "name": "I am the first person to legally purchase marijuana in the United States AMA!"
  },
  {
    "url": "t3_1uqdbr",
    "name": "I am a fairly new cop in a fairly big city, ask me (almost) anything."
  },
  {
    "url": "t3_1uqq0z",
    "name": "Hey! I'm MasakoX, TeamFourStar's Goku - AMA!"
  },
  {
    "url": "t3_1usndf",
    "name": "IamA Kingscrusher - Chess Entrepreneur and very keen Chess Enthusiast AMA!"
  },
  {
    "url": "t3_1ut5bp",
    "name": "We Are Stephen, Joanna, Mike and Jake of Stephen Malkmus and The Jicks. AMA!"
  },
  {
    "url": "t3_1uu3ka",
    "name": "I am Shawn Izadi and I played Football and was in the Band at The University of Texas. AMA"
  },
  {
    "url": "t3_1uvfsu",
    "name": "IAmA Subway Restaurant Employee for just over 2 years. I know how everything is prepared and the way everything runs. Ask me any questions you wanted to know about Subway."
  },
  {
    "url": "t3_1uwy1m",
    "name": "I'm Nick Kroll. I am here to answer the questions that are nice to me. Ask me anything."
  },
  {
    "url": "t3_1uyt2m",
    "name": "I am Jerry Miculek- Firearms expert, Special Forces trainer, Professional shooter, 90 time world &amp; national shooting champion, holder of 5 world records, TV personality, host of the Youtube Channel Miculekdotcom, and arguably one of the best shooters in the world. Giving you a video answer!"
  },
  {
    "url": "t3_1uza6x",
    "name": "I am a criminal defense lawyer in New York City..Ask me anything"
  },
  {
    "url": "t3_1uzci6",
    "name": "As requested. Hi! I am currently working on the Google Fiber Project. Ask me anything!"
  },
  {
    "url": "t3_1v018q",
    "name": "I am ScHoolboy Q AMA! #Oxymoron Puffy"
  },
  {
    "url": "t3_1v19hp",
    "name": "Hi! I am David Gordon"
  },
  {
    "url": "t3_1v1j4q",
    "name": "I grew up in a Russian orphanage, AMA!"
  },
  {
    "url": "t3_1v2f52",
    "name": "I was stabbed and left paralyzed due to my homosexuality. I'm Scott Jones, Don't BE Afraid to AMA!"
  },
  {
    "url": "t3_1v2ucz",
    "name": "IamA former supervisor for TSA. AMA!"
  },
  {
    "url": "t3_1v2z2r",
    "name": "I went to prison for a crime I did not commit and just wrote a book about it."
  },
  {
    "url": "t3_1v4avy",
    "name": "I am Jono Bacon, Ubuntu Community Manager, community management author/speaker, and podcaster AMA!"
  },
  {
    "url": "t3_1v4czt",
    "name": "We are NASA Glenn engineers who work on Ion Propulsion. Ask Us Anything!"
  },
  {
    "url": "t3_1v4jfg",
    "name": "I am great leader and humanitarian Lord Mayor of Reykjavik and Protector of Children Jn Gnarr AMA!"
  },
  {
    "url": "t3_1v4pyi",
    "name": "I am Jean Grae! Artist and Superhero at EVERYTHING EVER! AMA! Well, don't ask it all crap like."
  },
  {
    "url": "t3_1v5m8m",
    "name": "IamA Zookeeper AMA!"
  },
  {
    "url": "t3_1v81dm",
    "name": "I am Scott Sigler: publishing entrepreneur, podcaster, and New York Times bestselling author. AMA!"
  },
  {
    "url": "t3_1v8h70",
    "name": "We make music with computers, Pegboard Nerds AMA"
  },
  {
    "url": "t3_1va2ap",
    "name": "I have worked in all facets of the bearing industry for many years."
  },
  {
    "url": "t3_1vasks",
    "name": "We are Will Hines and Kevin Hines, teachers/performers from the UCB Theatre (improv/sketch). Ask Us Anything!"
  },
  {
    "url": "t3_1vcvwy",
    "name": "IamA Hospital Janitor/Housekeeper, Ask Me Anything!"
  },
  {
    "url": "t3_1vdi38",
    "name": "We're a rock band called We Are Scientists, and what we don't know, we can look up  Ask Us Anything"
  },
  {
    "url": "t3_1vdpyf",
    "name": "IamA Owner of a used car dealership. AMA!"
  },
  {
    "url": "t3_1vdrbr",
    "name": "Hey reddit, it's me Haley Joel Osment, here to answer your questions."
  },
  {
    "url": "t3_1vefbm",
    "name": "I'm Pete Farrelly, writer/director of Dumb and Dumber, There's Something About Mary, The Three Stooges, and the upcoming Dumb an Dumber To. Ask me anything!"
  },
  {
    "url": "t3_1vgefw",
    "name": "I wrote a book about searching for the lost foreskin of Jesus (I'm not kidding!) and starred in the documentary The Quest for the Holy Foreskin, currently airing on National Geographic Channel. Ask me Anything!"
  },
  {
    "url": "t3_1vgnb0",
    "name": "I am the founder of Improv Everywhere and the subject of the documentary We Cause Scenes AMA!"
  },
  {
    "url": "t3_1vgqgb",
    "name": "I'm Neal Brennan, comedian/director/writer. Co-creator of Chappelle's Show, co-writer of Half Baked and director of episodes of Inside Amy Schumer, New Girl, All That, and The Mindy Project. AMA."
  },
  {
    "url": "t3_1vgr0t",
    "name": "Iam Director/Actor Michael Rosenbaum - AMA!"
  },
  {
    "url": "t3_1vgtez",
    "name": "We are Brazzers. AMAA."
  },
  {
    "url": "t3_1vj9q9",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_1vjj51",
    "name": "I am one of the developers of a popular Chrome extension and we've been approached by malware companies that have tried to buy us. AMA!"
  },
  {
    "url": "t3_1vle5i",
    "name": "IamA 36 week pregnant surrogate mother. AMA!"
  },
  {
    "url": "t3_1vlsas",
    "name": "IamA (newly) full time, self-employed professional day trader. AMA!"
  },
  {
    "url": "t3_1vnza3",
    "name": "IamA Naked Butler AMA!"
  },
  {
    "url": "t3_1vo694",
    "name": "IamA Professional Designated Driver AMA!"
  },
  {
    "url": "t3_1voynv",
    "name": "IamA (camgirl that just got back from Vegas at the AVN Adult Entertainment Expo) AMA!"
  },
  {
    "url": "t3_1vq74b",
    "name": "I am Michael Stokes, the youngest of the three children of Tal Stokes, the captain of the original Jamaican Bobsled team. (The one that inspired Cool Runnings.) Ask Me Anything!"
  },
  {
    "url": "t3_1vsb5m",
    "name": "My father transported Meth to pay for my life saving surgery and received 3 life sentences w/o parole - AMA"
  },
  {
    "url": "t3_1vt389",
    "name": "IamA allergic to the cold. AMA!"
  },
  {
    "url": "t3_1vv0k4",
    "name": "I've worked for AOL (yes, they still exist) for 4 years. AMA!"
  },
  {
    "url": "t3_1vvb0u",
    "name": "IamA The Promoters/Producers of The Governors Ball Music Festival, NYC's Marquee Music Festival, AMA!"
  },
  {
    "url": "t3_1vvg7j",
    "name": "I have two magnets implanted in my fingertips, which let me 'see' electromagnetic fields. AMA!"
  },
  {
    "url": "t3_1vyrbk",
    "name": "IamA 23 year old guy who made a living for 3 years working in movies, porn and clinical trials AMA! NSFW"
  },
  {
    "url": "t3_1vzh42",
    "name": "Donald Faison. AMA. All Welcome!"
  },
  {
    "url": "t3_1w29dx",
    "name": "We are creating the HIV/AIDS vaccine to give away to the world for free. Dr. Rubsamen, Co-Founder of Immunity Project here. AMA."
  },
  {
    "url": "t3_1w37by",
    "name": "IAmA - Professional dating coach. Happy to spend my evening helping the men and women of Reddit find love, sex, etc. AMA!!"
  },
  {
    "url": "t3_1w4d7m",
    "name": "Orgasm and Arousal During Rape or Sexual Assault: IamA Psychotherapist Requested to Revisit this Topic for Reddit. AMA!"
  },
  {
    "url": "t3_1w5aic",
    "name": "IamA 22 year old male stripper. AMAA!"
  },
  {
    "url": "t3_1w6yti",
    "name": "IamA a bottom feeder Voice Actor - I do voice overs the union actors won't touch AMA!"
  },
  {
    "url": "t3_1w8y2t",
    "name": "IamA former Congressional Staffer - AMA!"
  },
  {
    "url": "t3_1wac0p",
    "name": "Howdy, Unidan here with five much better scientists than me! We are the Crow Research Group, Ask Us Anything!"
  },
  {
    "url": "t3_1wandg",
    "name": "We are Alexis Krauss and Derek Miller of Sleigh Bells. Ask us anything."
  },
  {
    "url": "t3_1wbw5b",
    "name": "Im Jason Lancaster, AMA"
  },
  {
    "url": "t3_1wdctl",
    "name": "IamA Digital Nomad and Traveller, 5 years ago I quit my job to travel. 5 Continents, 30+ countries and counting. AMA!"
  },
  {
    "url": "t3_1we6x1",
    "name": "IamA stripper. AMA!"
  },
  {
    "url": "t3_1wectj",
    "name": "IamA Gamestop Manager, back again to answer all the love filled hate questions."
  },
  {
    "url": "t3_1whvd2",
    "name": "I am Brad McQuaid, one of the creators of EverQuest and Vanguard: Saga of Heroes and CCO for Pantheon: Rise of the Fallen. AMA!"
  },
  {
    "url": "t3_1wiq4r",
    "name": "IamA Jenna Valentine, a former cam girl, a makeup artist who is on a hardcore porn set almost every day, the model coordinator for godsgirls.com and pretty cooooool (stoned) AMA!"
  },
  {
    "url": "t3_1wk9uc",
    "name": "We are Tony and Paavo of the band Above &amp; Beyond, AUA!"
  },
  {
    "url": "t3_1wnc1p",
    "name": "I am a female aircraft mechanic in the U.S. Air Force specialized in loading and maintaining weapon systems... AMA!"
  },
  {
    "url": "t3_1wnf8y",
    "name": "I am a Whale Shark researcher: Let's talk about the slaughterhouse in China."
  },
  {
    "url": "t3_1wo85q",
    "name": "We are a Recreational Shop in Colorado! Ask us anything!"
  },
  {
    "url": "t3_1wpz70",
    "name": "I am an Emergency Medicine Doctor that does Helicopter and Rapid Response Car besides hospital duty. AMA!"
  },
  {
    "url": "t3_1wsgbc",
    "name": "IamA (professional party princess) AMA!"
  },
  {
    "url": "t3_1wswop",
    "name": "IamA psychiatrist AMA!"
  },
  {
    "url": "t3_1wtoow",
    "name": "IamA victim of the knockout game. Ask Me Anything"
  },
  {
    "url": "t3_1wu68w",
    "name": "IamA 21 year old male with stage 3 brain cancer following a brain tumor removal and biopsy. AMA!"
  },
  {
    "url": "t3_1wunu2",
    "name": "IAMA Oculus Rift Developer, Ask me anything about our game Ambient Flight and what the future of Virtual Reality holds"
  },
  {
    "url": "t3_1wvc5p",
    "name": "I grew up in the woods of rural northern California in a house my parents built without power tools with no toilet or fridge. Ask me anything!"
  },
  {
    "url": "t3_1ww9o0",
    "name": "Hey, it's Murr from Impractical Jokers. ASK ME ANYTHING, beeches!"
  },
  {
    "url": "t3_1wwql1",
    "name": "We Are Carter Bays and Craig Thomas, Creators and Executive Producers Of How I Met Your Mother. AUA!"
  },
  {
    "url": "t3_1wx8u1",
    "name": "We're Cyanide &amp; Happiness, ask us anything!"
  },
  {
    "url": "t3_1wzs6g",
    "name": "IamA girl working on an offshore oil rig in the Gulf of Mexico. Ask me anything!"
  },
  {
    "url": "t3_1x3dq5",
    "name": "I am B.J. Novak. Ask me anything!"
  },
  {
    "url": "t3_1x3fiq",
    "name": "All your Ethernets are belong to me. Im Bob Metcalfe, Ethernet inventor. AMA!"
  },
  {
    "url": "t3_1x3j9b",
    "name": "Hi, we're the Sam Roberts Band. Ask us anything."
  },
  {
    "url": "t3_1x3ol1",
    "name": "I am musician, dj, photographer and director Moby, ask me anything!"
  },
  {
    "url": "t3_1x7635",
    "name": "I am Les Stroud (Survivorman), a filmmaker, outdoor adventurer, singer-songwriter and performer. Ask Me Anything!"
  },
  {
    "url": "t3_1x7saa",
    "name": "UK fans. Hi this is Chris Lilley from Ja'mie: Private School Girl AMA"
  },
  {
    "url": "t3_1x7w6x",
    "name": "I am Kayden Kross. I've done porn, and some other stuff. Mostly porn. AMA!"
  },
  {
    "url": "t3_1x7x13",
    "name": "Hi reddit! This is Ross. Co-Host of the YouTube show Game Grumps and animator known as RubberNinja! AMA!"
  },
  {
    "url": "t3_1xaeik",
    "name": "We are WizKids Games, maker of games like HeroClix, Mage Knight, and Quarriors. We just announced a partnership with Wizards of the Coast to release a new line of minis and games for the new edition of Dungeons &amp; Dragons. Ask us anything!"
  },
  {
    "url": "t3_1xaheg",
    "name": "I am a rocket scientist who builds cars that race at over 200 mph across the Bonneville Salt Flats. AMA!"
  },
  {
    "url": "t3_1xb8h9",
    "name": "I've visited the oceans depths in a submersible. I'm a deep-sea biologist. AMA!"
  },
  {
    "url": "t3_1xdvu2",
    "name": "IamA technician who disposes of nuclear materials at a national lab. AMA!"
  },
  {
    "url": "t3_1xe5en",
    "name": "IamA expert on solving the honey bee crisis. I run a business providing native bees to orchards. AMA"
  },
  {
    "url": "t3_1xelf4",
    "name": "IamA PhD student who studies and teaches about the Holocaust AMA!"
  },
  {
    "url": "t3_1xgf2x",
    "name": "Hi Everyone! Voice Actor Tara Strong Here Ready to Answer All Those Nagging Questions About Ponies, Bronies, Phonies and the Latest In Taraville: Funporium! So, AMA!"
  },
  {
    "url": "t3_1xinmg",
    "name": "IamA man named David J. Fulde. I will answer literally EVERY question posted here for the next few hours! AMA!"
  },
  {
    "url": "t3_1xkaso",
    "name": "My name is Iamsu!. My new album is called Sincerely Yours. AMA."
  },
  {
    "url": "t3_1xmkfp",
    "name": "I believe eating bugs could help change the world. I've personally eaten over 2 dozen species. AMA!"
  },
  {
    "url": "t3_1xpj77",
    "name": "IamA single guy who quit his job and spent the last year crossing the country, interviewing over 100 of America's most amazing couples about what it's like to be in love AMA!"
  },
  {
    "url": "t3_1xqnis",
    "name": "I'm voice actress Jessica DiCicco, you might know me as Flame Princess on Adventure Time, Lumina in FFXIII, &amp; more. AMA!"
  },
  {
    "url": "t3_1xti5p",
    "name": "Top Adult Website RedTube here to answer your questions !"
  },
  {
    "url": "t3_1xu9jr",
    "name": "I am Verne Troyer, AMA!!!"
  },
  {
    "url": "t3_1xuwjz",
    "name": "I was a sound editor on The Big Lebowski, The Wire, Crouching Tiger, Hidden Dragon, Hedwig and the Angry Inch, Boys Don't Cry, Generation Kill, Treme, and dozens more. AMA!"
  },
  {
    "url": "t3_1xwkdb",
    "name": "I am Bruce Lane, professional entertainment driver for 37 years (and now driving the reddit bus tour) AMA!"
  },
  {
    "url": "t3_1xyyb5",
    "name": "IamA HIV+ Male, this is what it cost to save my life. AMA!"
  },
  {
    "url": "t3_1xze2m",
    "name": "As Requested, I am the pilot who crashed in the African bush last week. I volunteer as an emergency/clinic-outreach bush pilot in Tanzania. AMA"
  },
  {
    "url": "t3_1y1871",
    "name": "IamA Moderately Successful Freelance Writer Who Started With No Experience and No Connections AMA!"
  },
  {
    "url": "t3_1y5jta",
    "name": "IamA dangerous spider handler. AMA!"
  },
  {
    "url": "t3_1y609k",
    "name": "IamA Ex #1 in the world in Call Of Duty AMA!"
  },
  {
    "url": "t3_1y6e5u",
    "name": "Hey, it's John Cusack. You can ask me anything."
  },
  {
    "url": "t3_1y6scv",
    "name": "IamA guy who went to North Korea this August. I was told that there would be interest in knowing about my experience. Also I have traveled to 20-30 countries and might be able to help you with travel tips. AMA!"
  },
  {
    "url": "t3_1y78uq",
    "name": "IamA ER tech that works in a major hospital that's a level 1 trauma center in the northeast. I've had as many as five patients die in one shift, I've almost been stabbed, We had a patient that crashed his car paralyzing himself and killing his 7 year old. AMA!"
  },
  {
    "url": "t3_1y7gqu",
    "name": "I am a girl who played high school football on an all boys team. Ask me anything."
  },
  {
    "url": "t3_1y8qmh",
    "name": "IamA passenger on yesterday's Hijacked plane from Ethiopian Airlines to Geneva. Contrary to news coverage, it was hell. AMA!"
  },
  {
    "url": "t3_1y9f2s",
    "name": "IamA Jonestown survivor/whistle blower. I was a trusted aide to Jim Jones and am the author of Seductive Poison. AMA!"
  },
  {
    "url": "t3_1y9h1h",
    "name": "We are Brennan Heart, MC Villain, and LessThan3. Ask us anything about the harder styles of electronic music!"
  },
  {
    "url": "t3_1ya8hr",
    "name": "I am Scott Ian, Anthrax guitarist, on my Speaking Words tour of America. AMA!"
  },
  {
    "url": "t3_1yau5e",
    "name": "We are RocketJump, creators of Video Game High School and freddiew! Ask us anything!"
  },
  {
    "url": "t3_1yb7sc",
    "name": "Iam the Makeup Artist who did the wooden makeup on the front of /r/pics. AMA!"
  },
  {
    "url": "t3_1ycfvz",
    "name": "IAmA Female Physicist who started my undergrad work at the age of 15. AMA"
  },
  {
    "url": "t3_1yd4pn",
    "name": "I'm 2014 Olympic skeleton athlete Kyle Tress. I recently finished competing in Sochi. AmA!"
  },
  {
    "url": "t3_1yg6wo",
    "name": "IamA mother to a special needs child who's missing nearly half his brain, AMA"
  },
  {
    "url": "t3_1ygbt9",
    "name": "I am Jason Ellis, author of The Awesome Guide to Life: How to Get Fit, Get Laid, Get Your Shit Together. Ask me anything."
  },
  {
    "url": "t3_1yghp5",
    "name": "I am Grammar Girl, aka Mignon Fogarty. AMA!"
  },
  {
    "url": "t3_1ygyw9",
    "name": "IamA yet another Ukrainian protester"
  },
  {
    "url": "t3_1yj77b",
    "name": "As requested, I was A CPU researcher AMA!"
  },
  {
    "url": "t3_1ykjoc",
    "name": "I'm international DJ, producer, songwriter, and all 'round music freak TyDi. AMA!"
  },
  {
    "url": "t3_1ykno8",
    "name": "Hi, we're Neil Druckmann (Creative Director) and Bruce Straley (Game Director) of The Last of Us and The Last of Us: Left Behind at Naughty Dog. AUA!"
  },
  {
    "url": "t3_1ylgnj",
    "name": "IamA Shift Manager at Taco Bell AMA!"
  },
  {
    "url": "t3_1ylhk0",
    "name": "I am Kelvin Jones - Call You Home; AMA!"
  },
  {
    "url": "t3_1ynfhz",
    "name": "Hi reddit, it's Greg Sestero (Mark from The Room) again. AMA: The Sequel."
  },
  {
    "url": "t3_1yo925",
    "name": "Hi, I'm rob. I wrote ANIMAL FRIENDS: FLOATING ORANGE CUBES. 6 copies sold worldwide. AMA"
  },
  {
    "url": "t3_1yocxf",
    "name": "IAmA team leader at Chick-fil-A! Ask me anything!"
  },
  {
    "url": "t3_1ypjd5",
    "name": "Hi Reddit! IAmA UberX driver in the Washington D.C. area. Ask away!"
  },
  {
    "url": "t3_1yq649",
    "name": "I started life as an Orphan and human scarecrow in Uganda. I earned 2 degrees at UC Berkeley and now run 3 companies including a non-profit, and was named 2014 forbes30under30 AMA!"
  },
  {
    "url": "t3_1yqm6y",
    "name": "By request, I am a (former) TSA officer. Ask me anything about the TSA"
  },
  {
    "url": "t3_1yt8cb",
    "name": "I am Stephen Bax, researching the Voynich manuscript"
  },
  {
    "url": "t3_1yt9fb",
    "name": "Why are starfish literally ripping themselves apart off the Pacific Coast? Were an environment journalist and a diver/videographer reporting on the mysterious disease. Ask us anything."
  },
  {
    "url": "t3_1ytgcg",
    "name": "Evening Reddit, IAmA man who was born with 12 fingers and no opposable thumbs, AMA!"
  },
  {
    "url": "t3_1ytqz0",
    "name": "I have acted in over 200 TV shows and films, including Groundhog Day, Californication and Memento. Now I'm making my own movie. My name is Stephen Tobolowsky. Ask Me Anything."
  },
  {
    "url": "t3_1yucdb",
    "name": "hey hey hey this is the fray, ask away!"
  },
  {
    "url": "t3_1yw4fo",
    "name": "I am author Kim Harrison of THE HOLLOWS and THE UNDEAD POOL - AMA!"
  },
  {
    "url": "t3_1ywpd6",
    "name": "IamA Former Walt Disney World Cast Member AMA!"
  },
  {
    "url": "t3_1ywrft",
    "name": "Hi, we are Fred Armisen and Carrie Brownstein from Portlandia. AUA."
  },
  {
    "url": "t3_1yxaw3",
    "name": "Weeeere heeere! Kelly + Luis = The Dollyrots. AUA!"
  },
  {
    "url": "t3_1yxgo1",
    "name": "IAmA full-time YouTuber (since 2008) with 700,000+ subscribers, co-creator of Is It A Good Idea To Microwave This?, and movie reviewer. AMA!"
  },
  {
    "url": "t3_1yxsgs",
    "name": "THIS IS LIL JON!!!!! AMA"
  },
  {
    "url": "t3_1z07e2",
    "name": "I'm James Vaughan  Creator of Plague Inc. and Plague Inc: Evolved - Ask me anything."
  },
  {
    "url": "t3_1z09nu",
    "name": "I'm GM Hikaru Nakamura, #1 US chess player and top 10 in the world - AMA"
  },
  {
    "url": "t3_1z0h7l",
    "name": "IamA Mortician AMA!"
  },
  {
    "url": "t3_1z1ar1",
    "name": "I am a cosmonaut who has survived numerous catastrophes during my stay in space. I'm currently developing a game called Space Pioneer. My name is Aleksandr Lazutkin and Ask me Anything!"
  },
  {
    "url": "t3_1z1i2f",
    "name": "We are UCLA Admissionstudent ambassadors answering admission questions from the sunnier side of CA. AUA"
  },
  {
    "url": "t3_1z3i36",
    "name": "Howdy, Unidan here with the team of biologists, collaborating on Great Adaptations, a children's book about evolution! Help us teach kids about evolution, and Ask Us Anything!"
  },
  {
    "url": "t3_1z3kv2",
    "name": "IamA Greetings! I am Jamie The Bear McDonald. #1 ranked male independent competitive eater in the world, BBQ restaurant owner, and finalist in GoDaddy's Big Leap Contest. AMA!"
  },
  {
    "url": "t3_1z4a8e",
    "name": "I am Chris Carter, creator of The X-Files, Millennium, The Lone Gunmen, Harsh Realm, and The After. AMA!"
  },
  {
    "url": "t3_1z4nu6",
    "name": "I am Sarah Michelle Gellar, also known as the girl who saves the world a lot. Ask me almost anything!"
  },
  {
    "url": "t3_1z4olk",
    "name": "IAma Las Vegas Nightclub Promoter. Ill clear up any misconceptions or reservations you have about this BEAST that's known as The Strip. AMA"
  },
  {
    "url": "t3_1z5m7v",
    "name": "I am John C. Reilly, executive producer of Check It Out!, with Dr. Steve Brule. Join me!"
  },
  {
    "url": "t3_1z7cvy",
    "name": "We are the Office Online team (formally Office Web Apps) - Ask us Anything!"
  },
  {
    "url": "t3_1z7y4j",
    "name": "I am Jon Osborne, a has-been thriller writer who has sold exactly 0 copies of my life's collected work. If you want to know what it feels like to be such a spectacular failure at your chosen profession (or anything else), AMA!"
  },
  {
    "url": "t3_1z8ypo",
    "name": "IamA stripper in Las Vegas AMA!"
  },
  {
    "url": "t3_1z9pkm",
    "name": "IamA Ukrainian protester of Euromaidan. Our country is currently being invaded by Russia. AMA!"
  },
  {
    "url": "t3_1zbnuu",
    "name": "IamA Bryan Seely. I broke Google Maps. I wiretapped the FBI and Secret Service aka @maptivists AMA!"
  },
  {
    "url": "t3_1zdacw",
    "name": "Hello reddit! It's Jared Champion (drummer of Cage the Elephant). I had so much fun with the last AMA that I have to do this again. This time I brought my friend Matt Shultz (singer of Cage the Elephant) to answer your questions with me. Ask us anything!"
  },
  {
    "url": "t3_1zfxgx",
    "name": "IamA former senior staffer to a member of Congress, AMA!"
  },
  {
    "url": "t3_1zg23j",
    "name": "I am a Priest in the Church of Satan. Nevermind the crazies, let's have fun and ask me anything!"
  },
  {
    "url": "t3_1zgfdm",
    "name": "UPDATE: I got my anonymous cyberstalker of 1.5 years arrested for harassing me and threatening to shoot up the college where I teach. AMA!"
  },
  {
    "url": "t3_1zgi47",
    "name": "Hey, live from New York, it's Nick Lachey. AMAA!"
  },
  {
    "url": "t3_1zitdw",
    "name": "I'm a Full time Youtuber AMA!"
  },
  {
    "url": "t3_1zizrc",
    "name": "IamA The guy who did an AMA on winning 1million on the lottery a year ago AMA!"
  },
  {
    "url": "t3_1zj2mn",
    "name": "IamA 40 year old plus male with Kallmann syndrome which means I did not go through puberty. AMA!"
  },
  {
    "url": "t3_1zjfi2",
    "name": "IamA indie game developer(s) of zombie survival sim Project Zomboid AMA!"
  },
  {
    "url": "t3_1zjx9u",
    "name": "I am Jesse Ventura. I always speak my mind and search for the truth and now I want to hear from you. AMA"
  },
  {
    "url": "t3_1zk9yy",
    "name": "I just filmed with my childhood hero, Arnold Schwarzenegger and I produce the #1 Online Cooking Show EpicMealTime Ask Me Anything!!"
  },
  {
    "url": "t3_1zmrbl",
    "name": "Richard Rawlings of Gas Monkey Garage / Fast N' Loud. It's 10 AM, I got beer, I'm here. AMA."
  },
  {
    "url": "t3_1zn3u3",
    "name": "I'm Lisa Jakub - I grew up working as an actor in movies like Mrs. Doubtfire and Independence Day. I decided to retire instead of becoming a stereotypical train wreck child actor. I now live in Virginia where I am a writer. AMA!"
  },
  {
    "url": "t3_1zn4rq",
    "name": "IamA Robert Beltran, aka Commander Chakotay from Star Trek: Voyager, and now all yours. AMA!"
  },
  {
    "url": "t3_1zpwnf",
    "name": "I am an investment banker turned race car driver that got really lucky..."
  },
  {
    "url": "t3_1zqlzm",
    "name": "We're a team of NASA meteor experts from the Marshall Center. Ask us anything!"
  },
  {
    "url": "t3_1zqn4d",
    "name": "Im Martha Stewart. Ask me almost anything! Its a good thing."
  },
  {
    "url": "t3_1zr1sz",
    "name": "IamA Cofounder of PopCap Games - My name's John Vechey - AMA!"
  },
  {
    "url": "t3_1zrizg",
    "name": "I am YouTube prankster and magician MagicofRahat (Invisible Driver Prank, Homeless Lottery Winner) Ask Me Anything!"
  },
  {
    "url": "t3_1zsyyi",
    "name": "IamA Allman Brothers Band biographer, Alan Paul, author of One Way Out. AMA about the ABB, blues, 70s rock, guitars or even living in China!"
  },
  {
    "url": "t3_1zt6d4",
    "name": "I cut open peoples eyeballs and get paid! AMA!"
  },
  {
    "url": "t3_1zu05h",
    "name": "I'm B-Real, the Frontman of Cypress Hill and Co-Founder of BREAL.TV - Ask Me Anything (LIVE BROADCAST)"
  },
  {
    "url": "t3_1zuq4v",
    "name": "Due to popular demand from the popular AskReddit thread, IamA Kool-aid collector AMA!"
  },
  {
    "url": "t3_1zw4qk",
    "name": "IamA traumatic brain injury survivor, today is the first anniversary of my accident. AMA!"
  },
  {
    "url": "t3_1zwtqi",
    "name": "IamA 12 year Navy vet with 4.5 years on a US Submarine and time in the Navy Reserve. AMA!"
  },
  {
    "url": "t3_201xvt",
    "name": "I am a young, tenured, female engineering professor at a major research university. AMA!"
  },
  {
    "url": "t3_20243q",
    "name": "IamAn operator of eight Tor relays including two exits, AMA!"
  },
  {
    "url": "t3_202b0y",
    "name": "I am Glenn Howerton, AKA Dennis from Always Sunny, and producer of THE WILDERNESS OF JAMES. AMA"
  },
  {
    "url": "t3_202owt",
    "name": "We are Dan Harmon and Justin Roiland creators of Rick and Morty on adult swim NEW EPISODE TONIGHT MARCH 10 ON ADULT SWIM!!! AUA! Even about our personal secret stuff too!"
  },
  {
    "url": "t3_2058f7",
    "name": "We are LensRentals.com, today our technicians and repair department are at your disposal, ask us anything!"
  },
  {
    "url": "t3_209mc8",
    "name": "Chris Lilley from Ja'mie: Private School Girl. Devo about the UK finale but please AMA."
  },
  {
    "url": "t3_20aq4i",
    "name": "IamA 21 year old male who just lost both his testicles to testicular cancer, AMA!"
  },
  {
    "url": "t3_20cyz7",
    "name": "I am Arthur Chu, #3 winningest Jeopardy contestant in regular-season play in history, with 11 straight victories and total cash winnings of $298,200. Ask me anything."
  },
  {
    "url": "t3_20d63c",
    "name": "Hi! Lori Greiner at your service. I'm a Shark on ABC's Shark Tank, and author of Invent It. Sell It. Bank It. Lay it on me Reddit!"
  },
  {
    "url": "t3_20exsy",
    "name": "Insight into Omar Epps. AMA."
  },
  {
    "url": "t3_20fi7s",
    "name": "IamA (Project 86) AMA!"
  },
  {
    "url": "t3_20humj",
    "name": "I am Dr. Charlotte Laws, the Erin Brockovich of Revenge Porn. AMA"
  },
  {
    "url": "t3_20ickc",
    "name": "IamA Teenager living in Syria, War is outside my window AMA! (No politics)"
  },
  {
    "url": "t3_20jy99",
    "name": "26 year old woman and recent stage 4 cancer survivor here. AMA!!"
  },
  {
    "url": "t3_20k1d4",
    "name": "This is Kenneth Joel Hotz and Spencer Nolan Rice, doing this AMA from Vice TV Canada headquarters in Toronto. We are Kenny VS. Spenny. Ask us anything."
  },
  {
    "url": "t3_20k6my",
    "name": "We are Ice-T and Mick Benzo from the Final Level Podcast! Ask us anything!"
  },
  {
    "url": "t3_20kgvf",
    "name": "IAma former employee of a jail where I watched inmates be beat for fun. I was fired for reporting it, and have spent the last decade of my life testifying for those inmates. I did an AMA before, but couldn't say what really needed to be said. I'm done testifying, so I can REALLY talk now. AMA"
  },
  {
    "url": "t3_20nb7z",
    "name": "I Am Amber Nash, voice of Pam Poovey on FXs Archer. Ask me anything!"
  },
  {
    "url": "t3_20nbq7",
    "name": "I work for a company that provides inflight connectivity for airlines and business aircraft AMA (about the Malaysian Airplane or anything else) !"
  },
  {
    "url": "t3_20nfd6",
    "name": "I am Gavin McInnes. I put the bomp in the bomp bah bomp bah bomp. Ask me anything!"
  },
  {
    "url": "t3_20o396",
    "name": "IamA senior Democratic campaign staffer, formerly of Hillary for President and Obama for America. AMA!"
  },
  {
    "url": "t3_20pf21",
    "name": "IamA portfolio manager in a Ukrainian investment firm. Half of my family is Russian, half Ukrainian and my girlfriend is from Crimea and studied in Moscow. I live in Kiev and participated in the protests a lot. Native language is Russian. AMA"
  },
  {
    "url": "t3_20q3uq",
    "name": "We saved two babies lives with a 3D printer. Ask us anything!"
  },
  {
    "url": "t3_20qm7a",
    "name": "I Am Daniel O'Brien, the Head Writer of Cracked.com and author of How to Fight Presidents. Ask Me Anything!"
  },
  {
    "url": "t3_20rk3f",
    "name": "I am Dr. Randol Aikin, co-author and collaborator on BICEP2- the team that announced the discovery of B-modes yesterday, the ancient echoes of the Big Bang. Ask me anything!"
  },
  {
    "url": "t3_20tgin",
    "name": "We are the Microsoft OneNote team. Ask us Anything"
  },
  {
    "url": "t3_20txgm",
    "name": "AMA with Billy Eichner, aka Billy on the Street!"
  },
  {
    "url": "t3_20xv7n",
    "name": "IamA (Son of Nathan Phelps, an ex member of the Westboro Baptist Church) AMA!"
  },
  {
    "url": "t3_20zr85",
    "name": "I am Max Valverde, I'm going on SHARK TANK tonight to try to give the Sharks... Morninghead. AMAA"
  },
  {
    "url": "t3_210eur",
    "name": "I'm VICE founder Shane Smith and the things I saw filming the new episodes of our HBO show scared the shit out of me. AMA."
  },
  {
    "url": "t3_210kgf",
    "name": "I am Michael Bell, the original voice of Duke on GI JOE, Prowl on Transformers and Chaz on Rugrats, AMA!"
  },
  {
    "url": "t3_210x2d",
    "name": "I am Grieves, Rhymesayers Artist who raps amongst stuff AMA!"
  },
  {
    "url": "t3_211nml",
    "name": "I spent almost 2 years Hitch-Hiking throughout the United States with no money, no phone, and no ID. I slept outside and ate for free. No contact w/ friends/family, no couch surfing, AMA."
  },
  {
    "url": "t3_21339m",
    "name": "IamA Assistant Racehorse Trainer in the UK. If you want to anything about the industry or horse racing in general let me help. AMA!"
  },
  {
    "url": "t3_213o9v",
    "name": "IamA nuclear reactor operator on a submarine. AMA!"
  },
  {
    "url": "t3_216701",
    "name": "I won Jeopardy! on Friday, AMA."
  },
  {
    "url": "t3_2188ul",
    "name": "I built the Daedric Armor from Skyrim! AMA!"
  },
  {
    "url": "t3_21a0si",
    "name": "IamA 58 year old woman who contracted polio because my mother didn't vaccinate me as a child. AMA!"
  },
  {
    "url": "t3_21cwll",
    "name": "I am Max Brooks, author of World War Z and the upcoming graphic novel Harlem Hellfighters. Ask me anything."
  },
  {
    "url": "t3_21eu84",
    "name": "I've been editing porn for 5 years, including 'The Most Depressing Ending To A Porno' AMA!"
  },
  {
    "url": "t3_21fjrf",
    "name": "We are NASA engineers building next-gen spacesuits, Ask Us Anything!"
  },
  {
    "url": "t3_21fk7f",
    "name": "Imogen Heap, round two. Now I am part of Mi.Mu, formerly known as The Gloves Team and over the past 4 years have been developing (for me at least) a revolutionary musical controller, come instrument! Join us for a nerd-off, no question too geeky, no inquiry too technical or cutting, bring it!"
  },
  {
    "url": "t3_21fsj9",
    "name": "We are the developers of Space Engineers: Ask Us Anything"
  },
  {
    "url": "t3_21g9b6",
    "name": "IamA former student of Pensacola Christian College (the one currently accused of allowing rape cases to slide by), and was kicked out my senior year, AMA!"
  },
  {
    "url": "t3_21gmuk",
    "name": "I am Manuel Ferrara, adult film star and hobbyist basket ball player AMA!"
  },
  {
    "url": "t3_21i8b8",
    "name": "I am Jake Browne, marijuana critic for the Denver Post featured on CNBC's Colorado Pot Rush. AMA:"
  },
  {
    "url": "t3_21jq4e",
    "name": "Hello! It's me, Andy Daly from television. You may know me from Eastbound &amp; Down or Reno 911 or Comedy Centrals Review, which airs tonight at 10/9c. Im here to answer your questions!"
  },
  {
    "url": "t3_21jxku",
    "name": "I went on Shark Tank, accidentally counter-offered Mark Cuban $50K LESS than he offered me, and am fixing the broken textbook industry with my startup. AMA!!"
  },
  {
    "url": "t3_21ldbi",
    "name": "We founded Texts.com, and are ALSO trying to fix the broken textbook industry. AMA!"
  },
  {
    "url": "t3_21lie2",
    "name": "We are Wyrmbyte. Developers of the MOBA Dragons and Titans now available on Steam"
  },
  {
    "url": "t3_21lvpi",
    "name": "IAm comedian Hannibal Buress!"
  },
  {
    "url": "t3_21molz",
    "name": "IamA College freshman who had a breast reduction over spring break to go down almost 7 sizes. AMA! (pictures included) [NSFW]"
  },
  {
    "url": "t3_21o1bd",
    "name": "I am a security officer at a Casino, AMA!"
  },
  {
    "url": "t3_21oe9k",
    "name": "Hey Reddit! My name is Brad Carter. I played Charlie Lange on HBOs TRUE DETECTIVE. I Had 2 brain surgeries last year, one of which I played guitar during and inadvertently made history and world news. I successfully funded a kickstarter to record an album. ask away!"
  },
  {
    "url": "t3_21ozkt",
    "name": "IamA Vietnam Veteran P Company 75th Rangers 1969-70 AMA!"
  },
  {
    "url": "t3_21qgva",
    "name": "IamA Concealed Weapons Permit Instructor AMA!"
  },
  {
    "url": "t3_21rh2b",
    "name": "I am a recently returned Mormon missionary, having just served a Mormon mission in Indiana and Ohio. AMA!"
  },
  {
    "url": "t3_21sxsg",
    "name": "IAMA Car Salesman. Ask me anything you wanna know about what goes on behind the scenes"
  },
  {
    "url": "t3_21tyy5",
    "name": "IamA former Family Feud contestant/winner AMA!"
  },
  {
    "url": "t3_21vdac",
    "name": "Hey this is Katee Sackhoff from Battlestar Galactica and Riddick and the new movie Oculus, ask me anything."
  },
  {
    "url": "t3_21wf7r",
    "name": "I'm the waitress who got pranked with a new car and a trip to Hawaii.. You asked for it... AMA!"
  },
  {
    "url": "t3_21xoyi",
    "name": "We are Regular Ordinary Swedish Meal Time, and we are back. Ask us anything!"
  },
  {
    "url": "t3_21ydwk",
    "name": "I'm Greg Werckman, co-owner of IPECAC RECORDINGS and manager of Mike Patton. I'm happy to try to answer your questions."
  },
  {
    "url": "t3_2208wt",
    "name": "IamA Mr Ross Fisher, Consultant Paediatric Surgeon (that means I operate on babies and children) AMA!"
  },
  {
    "url": "t3_220mnv",
    "name": "I am Robin Meade, host of Morning Express with Robin Meade. AMA!"
  },
  {
    "url": "t3_221549",
    "name": "I am Rhys Darby. You know me from Conchords, I have a new show called Short Poppies, AMA."
  },
  {
    "url": "t3_221iap",
    "name": "We are Martin, Iain, and Lauren of CHVRCHES, ask us anything!"
  },
  {
    "url": "t3_22202l",
    "name": "IamA Matthew Reilly, bestselling author of the upcoming TROLL MOUNTAIN AMA!"
  },
  {
    "url": "t3_222cmt",
    "name": "I'm Laurie Halse Anderson, New York Times bestselling author of Speak, Wintergirls, and the new novel The Impossible Knife of Memory"
  },
  {
    "url": "t3_223k4v",
    "name": "IamA mother who uses medical marijuana to control my 8 year old daughters hundreds of seizures (with news links) AMA!"
  },
  {
    "url": "t3_223p5r",
    "name": "Hi, I'm Karyn Parsons actress &amp; author. You might know me as Hilary from The Fresh Prince of Bel-AirAMA!"
  },
  {
    "url": "t3_2247qw",
    "name": "We are Chris Markus and Steve McFeely, screenwriters of Captain America: The First Avenger and Captain America: The Winter Soldier. AUA!"
  },
  {
    "url": "t3_224f5n",
    "name": "I was almost murdered by someone with a machete AMA"
  },
  {
    "url": "t3_224rc3",
    "name": "My name is Ryan Ackroyd and back in 2011 I was arrested for my part in the groups know as Lulz Security (LulzSec), Anonymous and Operation Anti Security (#AntiSec). I am LulzSec, AMA!"
  },
  {
    "url": "t3_224yy9",
    "name": "Hey! We're the Cast &amp; Creators of Todd &amp; The Book of Pure Evil - now recording the dialogue for our animated film wrap-up The End of The End. Ask Us Anything!"
  },
  {
    "url": "t3_224zw1",
    "name": "Hi, I'm an independent singer/songwriter from Brooklyn named Kevin Devine. Ask me anything!"
  },
  {
    "url": "t3_22525g",
    "name": "I'm Apathy... An underground hip-hop artist who is a Fremason AMA!"
  },
  {
    "url": "t3_2257aq",
    "name": "Hey Reddit, I'm the girl behind the 15ft long velociraptor with googly eyes! AMA!"
  },
  {
    "url": "t3_226tyj",
    "name": "I am (the real) Jeremy Wade, host of RIVER MONSTERS. Ask me anything."
  },
  {
    "url": "t3_227c04",
    "name": "I'm Bob Saget...comedian, actor and author of the new book DIRTY DADDY....ask me anything!"
  },
  {
    "url": "t3_227efm",
    "name": "Ken Jennings from Jeopardy! here, wearing out my welcome. AMA!"
  },
  {
    "url": "t3_227tme",
    "name": "We are the Microsoft Excel team - Ask Us Anything!"
  },
  {
    "url": "t3_228z95",
    "name": "IamA actor Amir Talai, does anyone care to AMA?"
  },
  {
    "url": "t3_22aukg",
    "name": "Why would you ever want to fucking talk to Ron Perlman? AMA."
  },
  {
    "url": "t3_22cpta",
    "name": "IamA Bar owner in Dublin, Ireland AMA!"
  },
  {
    "url": "t3_22ev3t",
    "name": "IamA Snorkel Supervisor that takes people swimming with dolphins and seals, AMA!"
  },
  {
    "url": "t3_22f64k",
    "name": "I'm the photographer and director of the Reddit Portrait Project and the upcoming Ladies of Reddit Calendar. AMA + Giveaway!"
  },
  {
    "url": "t3_22fh5r",
    "name": "I am Paul Stanley  author of the the book Face The Music, musician, author, cook, painter. Oh and I almost forgotKISS. AMA"
  },
  {
    "url": "t3_22gdzj",
    "name": "Nick Frost, back. Ask me anything."
  },
  {
    "url": "t3_22ib5t",
    "name": "IamA 7th Generation Australian Circus performer, now world class flying trapeze artist AMA!"
  },
  {
    "url": "t3_22iu9n",
    "name": "We are the Microsoft Office for iPad team. Ask Us Anything."
  },
  {
    "url": "t3_22ix8q",
    "name": "Hi! We are the entire art team at SQUISHABLE! We design stuffed animals all day. Ask us anything!"
  },
  {
    "url": "t3_22jrf1",
    "name": "IAmA Casino Pit Boss with years of experience in Table Games and Casino Ops and would love to answer questions you may have about the business!"
  },
  {
    "url": "t3_22k9f3",
    "name": "I've been traveling around the world without flying for 2.5 years, just crossed the Pacific Ocean on a cargo ship. AMA!"
  },
  {
    "url": "t3_22ljfd",
    "name": "IAmA guy who nearly died in a car accident when I was 17, only has 2 toes, no spleen, no gallbladder, and long term-short term memory loss AMA"
  },
  {
    "url": "t3_22m5op",
    "name": "IAmA civic hacker + former House staffer. Last year I created an app that mirrors Congresss radio-frequency voting bells with push alerts. My new webapp CapitolBells.com lets you crowd-lobby Congress by writing and upvoting positions on any bill, from stopping SOPA 2 to legalizing hemp farms. AMA."
  },
  {
    "url": "t3_22mdty",
    "name": "Hey I'm Singer-Songwriter Eric Hutchinson, Ask Me Anything!"
  },
  {
    "url": "t3_22miix",
    "name": "Hi, Im travelling to EVERY single country in the world in a SINGLE JOURNEY, without airplanes. Ask me anything!"
  },
  {
    "url": "t3_22my1d",
    "name": "I'm Judy Greer, actress and author. Ask me anything!"
  },
  {
    "url": "t3_22sm0v",
    "name": "IamA 21 year old woman living on a income-sharing commune.. often called an intentional community"
  },
  {
    "url": "t3_22ssfj",
    "name": "Hey reddit, I'm Chris Klein! AMA."
  },
  {
    "url": "t3_22uu5z",
    "name": "I am Ton Roosendaal, chairman Blender Foundation. AMA!"
  },
  {
    "url": "t3_22v87w",
    "name": "IamA student at a school with no grades, classes, tests, or curriculum. All kids, from ages 4-19 have a vote in every decision at the school, including hiring and firing staff. AMA!"
  },
  {
    "url": "t3_22xz6e",
    "name": "I'm a high school teacher in the poorest congressional district in the US (literally). AMA."
  },
  {
    "url": "t3_230o8j",
    "name": "Tonight is a total lunar eclipse. We're NASA planetary scientists. Ask us anything!"
  },
  {
    "url": "t3_230t8h",
    "name": "Hey, it's Lucky Yates. I play Krieger on Archer. Ask me all the crap Amber wouldn't answer."
  },
  {
    "url": "t3_231pia",
    "name": "Hi Reddit! I'm Dr. Ellen Vitetta, biomedical scientist and professor of immunology. I design vaccines. AMA!"
  },
  {
    "url": "t3_233161",
    "name": "I am the author of the Heartbleed test site. AMA!"
  },
  {
    "url": "t3_234hpt",
    "name": "I am the Redditor whose NYC gifs are now a printed book (and an animated ebook) - thank you, Reddit! Ask me anything."
  },
  {
    "url": "t3_236o6g",
    "name": "I'm a veteran who overcame treatment-resistant PTSD after participating in a clinical study of MDMA-assisted psychotherapy. My name is Tony Macie Ask me anything!"
  },
  {
    "url": "t3_236oks",
    "name": "IamA Ahmed Best actor/writer/director, best known for playing Jar Jar Binks in Star Wars Ep. 1,2,3. Ask me Anything!"
  },
  {
    "url": "t3_236z3h",
    "name": "We are Daughter, ask us anything!"
  },
  {
    "url": "t3_237hwd",
    "name": "I am music producer Girl Talk--AMA!"
  },
  {
    "url": "t3_237zva",
    "name": "We are Jerry, John, Brian, and Andy. We are Trophy Scars and we are here to answer all you sick twisted questions AMA!"
  },
  {
    "url": "t3_23aiz6",
    "name": "I am Tracy Morgan. AMA."
  },
  {
    "url": "t3_23bztu",
    "name": "IamA Childhood Cancer Survivor and Part-Time Pirate AMA!"
  },
  {
    "url": "t3_23d8ry",
    "name": "I'm the Curator of Dinosauria at the Smithsonian Institution. I've just beein entrusted with the care and feeding of the Nation's *T. rex*. AMA!"
  },
  {
    "url": "t3_23flaa",
    "name": "I traveled the world for the past 5 years, on a budget of &lt;10$ a day. AMA!"
  },
  {
    "url": "t3_23ixv0",
    "name": "I AM T.J. MILLER AMA!"
  },
  {
    "url": "t3_23jjhu",
    "name": "We are Tacocat, a pop and punk band from Seattle that writes songs about candy, periods, Water World and cats. We have a weed sponsorship and ou own ice cream flavor. Ask us anything!"
  },
  {
    "url": "t3_23leg0",
    "name": "IamA veterinary student who just got back from working at an animal shelter in India, which has a policy of not euthanizing anything for any reason. AMA!"
  },
  {
    "url": "t3_23lun8",
    "name": "I am Michael Stevens of Vsauce on YouTube, AMA!"
  },
  {
    "url": "t3_23lvn4",
    "name": "IAmA former basement-dwelling heroin junkie that now works as director of admissions at a rehab facility. Ive seen some things guys. AMA. You wont be disappointed!"
  },
  {
    "url": "t3_23m50m",
    "name": "I'm Oliver Hollis-Leick, lead writer and designer behind the new game, Shaq Fu: A Legend Reborn."
  },
  {
    "url": "t3_23m55a",
    "name": "We are Satchel &amp; Stix from Steel Panther AMA!"
  },
  {
    "url": "t3_23mbgz",
    "name": "Hey Reddit! We are the creators/stars of Blue Mountain State: Eric Falconer, Romanski, and Alan Ritchson, AUA!"
  },
  {
    "url": "t3_23mowt",
    "name": "Who runs those tests your doctor orders on you? We're medical laboratory professionals, AUA!"
  },
  {
    "url": "t3_23o8d1",
    "name": "IamA Nigerian who witnessed the 2001 Jos riots and the Boko Haram insurgency AMA!"
  },
  {
    "url": "t3_23og03",
    "name": "I am Timothy Sykes: Ask Me Anything"
  },
  {
    "url": "t3_23pa8z",
    "name": "I am comedian, author, public access TV host, and notoriously open book Chris Gethard. AMA."
  },
  {
    "url": "t3_23q7gj",
    "name": "We are the professional runners of the New Jersey-New York Track Club here to answer all of your questions! Ask us anything!"
  },
  {
    "url": "t3_23rt24",
    "name": "We are tribal members and heartland ranchers encamped on the National Mall right NOW, calling on President Obama to reject the Keystone XL. AUA! (and please come visit!)"
  },
  {
    "url": "t3_23se7j",
    "name": "I am the RZA. Artist, musician, producer, author, and actor in Brick Mansions. AMAA."
  },
  {
    "url": "t3_23tqgq",
    "name": "IAmA 22 year old NYC yellow cab driver. Ask me anything."
  },
  {
    "url": "t3_23v7f3",
    "name": "Hi, I'm Blake Irving, I am the CEO of GoDaddy. Ask me anything!"
  },
  {
    "url": "t3_23w2yv",
    "name": "IamA BRONSON PINCHOT, star of TRUE ROMANCE and host of True Romance Fest, May 2nd and 3rd, 2014 at the Safari Inn, Burbank--please see Trueromancefest.com for details--AMA!!"
  },
  {
    "url": "t3_23yd9c",
    "name": "IamA 30-year-old quadriplegic after breaking my neck 11 years ago. AMA!"
  },
  {
    "url": "t3_2402q6",
    "name": "IamA man who has just found a secret building on my property. AMA!"
  },
  {
    "url": "t3_24102d",
    "name": "28 years ago I lived in the northern neighborhood of Kiev, mere ~60 miles away from Chernobyl. I witnessed parts of the immediate aftermath and mine is mere one of the voices among millions of witnesses, but you can AMA!"
  },
  {
    "url": "t3_241n1l",
    "name": "IamA 24-year-old female professional massage therapist looking to educate the public on my profession. AMA!"
  },
  {
    "url": "t3_242iv0",
    "name": "IamA videographer who filmed inside Chernobyl &amp; Pripyat for 2 days. AMA!"
  },
  {
    "url": "t3_2432hc",
    "name": "My body is trying to kill itself AMA"
  },
  {
    "url": "t3_243m6y",
    "name": "IamA 21 year old male going through puberty with testosterone therapy."
  },
  {
    "url": "t3_243sdn",
    "name": "IamA Ed 'Shortfuse' Herman AMA!"
  },
  {
    "url": "t3_2463cx",
    "name": "IamA 21 year old female escort-turned-stripper working on a book about my experiences in the sex industry. AMA!"
  },
  {
    "url": "t3_246p8v",
    "name": "I am a writer/cartoonist. I used to have a cartoon on Nickelodeon."
  },
  {
    "url": "t3_24756v",
    "name": "We are actress Jena Malone and Lem Jay Ignacio from the band The Shoe. AMA!"
  },
  {
    "url": "t3_249qc5",
    "name": "I am one of the top 40 ranked Female Professional Pool Players on the Pro Tour. I'm 27 years old. ASK ME ANYTHING!!!"
  },
  {
    "url": "t3_24a8ln",
    "name": "Hello Reddit, I have been on a heart transplant waiting list for the last 5 years and have been living without a human heart for the last 10 months, I just completed the 4.2 mile Pat Tillman run on Saturday, AMA!"
  },
  {
    "url": "t3_24atr2",
    "name": "I am Guy Kawasaki"
  },
  {
    "url": "t3_24aw7s",
    "name": "I am Larry King, back again on reddit. AMAA."
  },
  {
    "url": "t3_24bqs8",
    "name": "I am the proud owner of a video store! AMA!"
  },
  {
    "url": "t3_24eko9",
    "name": "This is A-Trak - DJ / producer / dude. Ask me anything! Quack is back!"
  },
  {
    "url": "t3_24f0qx",
    "name": "Hello reddit, I am a farmer sitting in my tractor again planting some corn! AMA I have long rows."
  },
  {
    "url": "t3_24gc1o",
    "name": "IamA Lobbyist, AMA!"
  },
  {
    "url": "t3_24gc91",
    "name": "IAmA - We are professional and published resume writers in the US that specialize in perfecting resumes to landing people interviews. We're here for the next 12 hours. Ask Us Anything!"
  },
  {
    "url": "t3_24h114",
    "name": "Inside Man back inside reddit. Morgan Spurlock here. AMA."
  },
  {
    "url": "t3_24ibwn",
    "name": "IamA Lawrence Lessig, law professor, activist, founder of the MAYDAY Pac. Here with Brian Boyko, CTO. AUA!"
  },
  {
    "url": "t3_24jndm",
    "name": "I am the author of 'The Knowledge: How to rebuild our world from scratch' about the science and technology you'd need to reboot civilisation as quickly as possible after an apocalypse. AMA!"
  },
  {
    "url": "t3_24jrvl",
    "name": "I am Ryan Holiday -- media manipulator, Director of Marketing at American Apparel, and bestselling author of Trust Me, Im Lying and The Obstacle Is The Way"
  },
  {
    "url": "t3_24ks7b",
    "name": "My first paid job as an actor was a principle role in Captain America: The Winter Soldier. AMA"
  },
  {
    "url": "t3_24mizj",
    "name": "IamA Former Professional Snuggler AMA!"
  },
  {
    "url": "t3_24nfh7",
    "name": "We're the cast of Super Happy Fun Time, Yay! - Brittany Furlan, Brandon Calvillo, Greg Davis Jr (Klarity), KC James, Christiano Covino - AMA!"
  },
  {
    "url": "t3_24o40w",
    "name": "IAMA FoodTruck owner having his slowest night ever. AMA about the rough parts of starting your own business, or foodtrucks in general."
  },
  {
    "url": "t3_24o8js",
    "name": "IamA(n) ex Kpop trainee AMA!"
  },
  {
    "url": "t3_24p062",
    "name": "My name is Jo Berry. My father was killed in a terrorist attack during the Troubles in Northern Ireland and now I work with the ex-terrorist, Pat Magee, who planted the bomb. Ask Me Anything."
  },
  {
    "url": "t3_24rx7e",
    "name": "Hi, reddit! I'm here to make your day suck better. The Vacuum Guy is back with an updated AMA!"
  },
  {
    "url": "t3_24th69",
    "name": "I am former WWE/WCW Diva Terri Runnels/Marlena/Alexandra York, here to answer your questions, so go ahead AMA:)"
  },
  {
    "url": "t3_24tq3t",
    "name": "I am Josh Wise the driver of the Dogecoin No.98 car AMA!"
  },
  {
    "url": "t3_24v498",
    "name": "Sarah McLachlan here on reddit. Ask me anything. Fire away!"
  },
  {
    "url": "t3_24vlsx",
    "name": "Nick Stoller here. Director of Neighbors, Forgetting Sarah Marshall, Get Him to the Greek and writer of some other things"
  },
  {
    "url": "t3_24wcvu",
    "name": "I am Richard Ayoade, and ask me anything."
  },
  {
    "url": "t3_24wlyy",
    "name": "We am Andrew Jackson Jihad AMA!"
  },
  {
    "url": "t3_24x8c0",
    "name": "IamA marketing executive at a casino AMA!"
  },
  {
    "url": "t3_24yq60",
    "name": "Comedian Scott Aukerman here, of Comedy Bang! Bang! and more. AMA."
  },
  {
    "url": "t3_24z5ec",
    "name": "Hi, I'm Wil Wheaton. AMA about Tabletop, The Wil Wheaton Project, The Big Bang Theory, Homebrewing, and, of course, Rampart."
  },
  {
    "url": "t3_251jf9",
    "name": "We are THE BURIED LIFE. Torri was born without a hand and we surprised her with new bionic arm. She's here. AMA!"
  },
  {
    "url": "t3_251wsj",
    "name": "I was diagnosed with testicular cancer at age 19 AMA!"
  },
  {
    "url": "t3_2522yo",
    "name": "I'm Dominic Palermo (gtr/vox) from the band NOTHING, ask me anything!"
  },
  {
    "url": "t3_25235b",
    "name": "IamA full-time Cam Girl who has worked on multiple sites. AMA!"
  },
  {
    "url": "t3_2523v6",
    "name": "I'm Christopher Tin, composer of concert music and video game scores. (I won the first Grammy ever for a piece of video game music.) AMA!"
  },
  {
    "url": "t3_25250r",
    "name": "Small rockets to big rockets. Ask our NASA team what it takes to build rockets of all sizes!"
  },
  {
    "url": "t3_2558vs",
    "name": "I'm Jeremy Gaffney, Executive Producer for WildStar, the MMO with hardcore raiding, battle fortresses, and psychotic hamsters. AMA!"
  },
  {
    "url": "t3_257j4c",
    "name": "I was a nude model. AMA."
  },
  {
    "url": "t3_257jn2",
    "name": "IamA Fellow Living With No Depth Perception. AMA!"
  },
  {
    "url": "t3_2582zc",
    "name": "I have Systemic Lupus. Since it is World Lupus Day, I thought I would let Reddit AMA!"
  },
  {
    "url": "t3_25830r",
    "name": "I am Alex Filippenko, astrophysicist at the University of California, Berkeley, and noted science popularizer, celebrating Astronomy Day today. AMA."
  },
  {
    "url": "t3_25a7fb",
    "name": "I grew up with blind parents, AMA!"
  },
  {
    "url": "t3_25ah0f",
    "name": "I AMA young lady currently working a shift at a sex shop. Don't be shy -- AMabsolutelyA!"
  },
  {
    "url": "t3_25cdgi",
    "name": "IamA Native-American and i grew up on 3 different reservations. AMA!"
  },
  {
    "url": "t3_25cwtd",
    "name": "Hi Reddit! I'm a 23yr old Female Fisherman that has been working on a 64ft Factory Trawler for 6 years. AMA!"
  },
  {
    "url": "t3_25delf",
    "name": "I am Hans Lienesch, The Ramen Rater, and I've reviewed 1,386 different varieties of noodles"
  },
  {
    "url": "t3_25h2pv",
    "name": "We are Eric and Wes from the band Rebelution. Ask us Anything."
  },
  {
    "url": "t3_25k7an",
    "name": "I am Patrick Carney of the Black Keys. Ask me anything."
  },
  {
    "url": "t3_25kddk",
    "name": "I am Adult Film Star Asa Akira, Author of INSATIABLE"
  },
  {
    "url": "t3_25kpb6",
    "name": "IamA Wheel of Fortune Contestant (and winner!) AMA!"
  },
  {
    "url": "t3_25mz09",
    "name": "We are The Behemoth, developers of BattleBlock Theater, Castle Crashers, and our upcoming latest game known only as Game 4. Today we are releasing BattleBlock Theater on Steam. Ask us anything!"
  },
  {
    "url": "t3_25ndmu",
    "name": "I am the protester that stood up on behalf of the Internet Generation and interrupted the FCC meeting today. AMA!"
  },
  {
    "url": "t3_25noi6",
    "name": "I am Maarten Hoogstraten, better known as the DJ/producer Bingo Players. Ask Me Anything!"
  },
  {
    "url": "t3_25pcg9",
    "name": "IamA Metal/Punk vocalist from Pakistan. AMA!"
  },
  {
    "url": "t3_25pokt",
    "name": "IAm someone who got busted with 48 lbs when I was 18. AMA"
  },
  {
    "url": "t3_25q992",
    "name": "We created Sportsfriends, and other games such as QWOP and B.U.T.T.O.N. AUA!"
  },
  {
    "url": "t3_25tvye",
    "name": "IamA 24 year old man living with anterograde amnesia. My life is organized by a notebook. AMA!"
  },
  {
    "url": "t3_25ui2z",
    "name": "I'm an Apache mechanic for the US Army. I'm halfway through a 24 hour shift so ama!"
  },
  {
    "url": "t3_25uy6f",
    "name": "I have Neurofibromatosis Type II .... AMA"
  },
  {
    "url": "t3_25vpg3",
    "name": "IamA 92 year old who served in WWII as a pilot for the Marine Corps, grew up in the Great Depression, and was a successful entrepreneur - AMA!"
  },
  {
    "url": "t3_25we2i",
    "name": "IamA 5+ year Google employee who is ready to leave a great job AMA!"
  },
  {
    "url": "t3_25zcpb",
    "name": "I Travel the world with a Budget of 100$ a month"
  },
  {
    "url": "t3_25zp7k",
    "name": "IamA World-Class female archer who nearly made it to the 2008 Olympics AMA!"
  },
  {
    "url": "t3_2630ln",
    "name": "I donated my left kidney to a stranger. AMA"
  },
  {
    "url": "t3_264dlr",
    "name": "I am Sloane Steel and I work at Bang Bros, a porn company, AMA!"
  },
  {
    "url": "t3_264ene",
    "name": "IAmA Commercial Bee Keeper AMA"
  },
  {
    "url": "t3_267c3j",
    "name": "IamA 28 yr old quadriplegic known as the Paralyzed Bride who was paralyzed at my bachelorette party after a playful push into a pool by my best friend (AMA round 2) AMA!"
  },
  {
    "url": "t3_26dual",
    "name": "IamA 15 year old that has been living with one hand since birth. AMA!"
  },
  {
    "url": "t3_26erzw",
    "name": "IamA Small Business owner fighting the US Government for unlicensed use of my night vision patent in the US Court of Federal Claims!"
  },
  {
    "url": "t3_26for9",
    "name": "I went to North Korea as a tourist - AMA!"
  },
  {
    "url": "t3_26gtvt",
    "name": "I am actor Pedro Pascal. I play Oberyn in Game of Thrones, Ask me anything."
  },
  {
    "url": "t3_26it0j",
    "name": "I was born missing, 9 bones in my hands, both Fibulas and a short left leg (which was slightly amputated), and 4 bones in my left foot. I have yet to find something that I want to do but can't!! AMA"
  },
  {
    "url": "t3_26kv9p",
    "name": "I'm a former foster youth who spent over 9 years in state care. I went through many, many families. AMA!"
  },
  {
    "url": "t3_26m3x4",
    "name": "IAmA female embalmer, a bikini designer/model, and an award winning cosplayer! Ask me anything! I have worked on gunshots, decapitations, car accidents, etc. My specialty is facial reconstruction!"
  },
  {
    "url": "t3_26m9cu",
    "name": "We are Panos Panay and the Surface team at Microsoft. We proudly introduced Surface Pro 3 last week. Ask us anything!"
  },
  {
    "url": "t3_26msnd",
    "name": "I Am Sean Carroll, theoretical physicist and speaker at this week's World Science Festival. AMA!"
  },
  {
    "url": "t3_26mv5t",
    "name": "IamA hobo/tramp that travels with little or no money. I hop trains, hitchhike, and mostly work on farms. AMA!"
  },
  {
    "url": "t3_26nkhi",
    "name": "IamA Female clerk at a porn store AMA!"
  },
  {
    "url": "t3_26p2ge",
    "name": "Im Dan Riskin, biologist turned Animal Planet/Discovery presenter (Monsters Inside Me; Daily Planet). AMA about science outreach, the biomechanics of bats, or the morbid kinkiness of Mother Nature."
  },
  {
    "url": "t3_26q85q",
    "name": "With Taco Bell's new breakfast menu, I thought this would be appropriate. IamA Taco Bell Shift Leader. AMA!"
  },
  {
    "url": "t3_26qvkm",
    "name": "I work in Juvenile Detention, AMA!"
  },
  {
    "url": "t3_26qxlp",
    "name": "I'm going to break a Guinness land speed record on a jet powered streetluge (skateboard) and try do 300mph in the process AmA"
  },
  {
    "url": "t3_26s7bj",
    "name": "Iam John Green, bestselling author of The Fault in Our Stars and co-creator of Crash Course and Vlogbrothers. AMA!"
  },
  {
    "url": "t3_26skxs",
    "name": "IamA former Comcast Call Center Rep for 4 1/2 years. AMA!"
  },
  {
    "url": "t3_26tfub",
    "name": "IamA Commercial Diver and ROV pilot AMA, even if it doesn't pertain to my job!"
  },
  {
    "url": "t3_26ttz0",
    "name": "IamA My name is Steve Swan and I am the first of nationally-known income tax protester Irwin Schiff's associates to be targeted and convicted by the Justice Department. AMA AMA!"
  },
  {
    "url": "t3_26vjdm",
    "name": "IamA News Helicopter Pilot/Reporter Bruce Haffner redditing live, flying in the chopper over Phoenix this morning AMA!"
  },
  {
    "url": "t3_26x4zd",
    "name": "IamA Blind Redditor AMA!"
  },
  {
    "url": "t3_26zwav",
    "name": "I make your food at McDonalds! What do you want to know?"
  },
  {
    "url": "t3_274kxt",
    "name": "IamA Woman living like fantasy fiction. I used to work full time as a corporate graphic designer but felt dead. I am an archer, hunter, equestrian, falconer, and homesteader. I spend my days farming, hawking, writing, and living like a background character in GoT. AMA!"
  },
  {
    "url": "t3_275obh",
    "name": "I started a Hot Sauce company with some help from reddit and will hopefully soon selling in stores across the nation. AMA!"
  },
  {
    "url": "t3_277t47",
    "name": "With the Stanley Cup finals starting Wednesday, I'm an ice hockey official! AMA!"
  },
  {
    "url": "t3_27att8",
    "name": "I'm Tamer El-Ghobashy, I write about Egypt for The Wall Street Journal. Ask me anything."
  },
  {
    "url": "t3_27bsif",
    "name": "I am Nev Schulman, creator and host of Catfish. AMA!"
  },
  {
    "url": "t3_27ghx7",
    "name": "IamA QC in England. I defend those accused of murder, terrorism and other interesting crimes. AMA!"
  },
  {
    "url": "t3_27gv57",
    "name": "I stabbed my middle/high school bully during the last quarter of my senior year three times. AMA"
  },
  {
    "url": "t3_27gxqt",
    "name": "Hello! I'm Dr. Dante Shepherd, creator the webcomic Surviving the World (the chalkboard guy in the labcoat) and chemical engineering professor. AMA!"
  },
  {
    "url": "t3_27h9eb",
    "name": "IamA Sex Worker AMA!"
  },
  {
    "url": "t3_27jq27",
    "name": "Nine years, five novels, and 197 agent rejections later, I decided to take my dreams in my own hands. My debut novel was released today. I am the happiest man in the world. Ask me anything."
  },
  {
    "url": "t3_27kiry",
    "name": "IAmA ballboy for the Wimbledon Tennis Championships AMA!"
  },
  {
    "url": "t3_27ox7l",
    "name": "IamA oil rig working offshore in the northern North Sea AMA!"
  },
  {
    "url": "t3_27pdla",
    "name": "IamA middle school teacher on the last day of school AMA!"
  },
  {
    "url": "t3_27q24s",
    "name": "IamA (Blank) AMA!"
  },
  {
    "url": "t3_27qjfe",
    "name": "We are Cornell University's Ask An Astronomer Team. Ask Us Anything!"
  },
  {
    "url": "t3_27vudm",
    "name": "IamA Former TWC Tier 3 employee, and I know a surprising amount about the company and what to do when you have an issue with your ISP. AMA!"
  },
  {
    "url": "t3_27vvhl",
    "name": "I am Alicia Witt- I'm an actor and singer/songwriter. You might know me most recently from this season's 'Justified'. AMA!"
  },
  {
    "url": "t3_27wkob",
    "name": "IamA 9.5 year combat veteran from both Iraq and Afghanistan Wars AMA!"
  },
  {
    "url": "t3_27x52a",
    "name": "I am Julia Collins, with 20 wins, I am the #2 winningest Jeopardy! contestant in regular-season play history. Ask me anything."
  },
  {
    "url": "t3_27yv0p",
    "name": "IamA Competitor on American Ninja Warrior AMA!"
  },
  {
    "url": "t3_27ze5w",
    "name": "I am Sinbad. Ask me any questions and I'll fix your life in 13 seconds."
  },
  {
    "url": "t3_2807ly",
    "name": "I am comedian Ron Funches. I play Shelly on NBC's Undateable. Ask me anything, I'm very cuddly."
  },
  {
    "url": "t3_281n51",
    "name": "IamA kid who lived in the rainforest with no electricity, no running water, you name it we didn't have it. AMA!"
  },
  {
    "url": "t3_2825gf",
    "name": "I'm the Psychologist who Evaluated Ted Bundy, and had him put in Prison. AMA!"
  },
  {
    "url": "t3_2828su",
    "name": "I am Carlos B. Garca, creator of the indie Action RPG Anima Gate of Memories and writer of Anima Beyond Fantasy books! AMA!"
  },
  {
    "url": "t3_282h4p",
    "name": "We are the developers of the SUPERHOT game, AMA!"
  },
  {
    "url": "t3_284plf",
    "name": "IamA heating and air conditioning tech AMA!"
  },
  {
    "url": "t3_28555d",
    "name": "I work on a cruise ship! ask me anything!"
  },
  {
    "url": "t3_285fyc",
    "name": "I played Matt McGuire in Lizzie McGuire, Stickler in Cory in the House, the evil kid in A.I., and some other stuff. AMA you bustas!"
  },
  {
    "url": "t3_286ape",
    "name": "I'm 21, self-employed, and make video games for a living from home. AMA!"
  },
  {
    "url": "t3_287hv1",
    "name": "I have a PhD in computer science from Cambridge and I'm the CEO of a startup building the world's fastest file transfer application. AMA!"
  },
  {
    "url": "t3_287ots",
    "name": "IamA girl born without a right hand, AMA!"
  },
  {
    "url": "t3_2888ca",
    "name": "This is Chris Lilley - creator of Jonah From Tonga &amp; Ja'mie: Private School Girl To celebrate tomorrow release of the DVDs I'm here to answer any questions for an hour! Ja'mie: Private School Girl: http://goo.gl/hswaIj Jonah from Tonga: http://goo.gl/H5PzAT"
  },
  {
    "url": "t3_288aws",
    "name": "I'm Breehn Burns, Writer and Director of Bravest Warriors. AMA you guys"
  },
  {
    "url": "t3_289wl6",
    "name": "IamA 27 year old Man who recently lost over 100lbs... the Old Fashioned Way AMA!!"
  },
  {
    "url": "t3_28awbm",
    "name": "Hi Reddit! We are: Tara (Karen) , Fred (Hank) and David (our Director) from Corner Gas and Corner Gas: The Movie! Ask us anything:)"
  },
  {
    "url": "t3_28aydo",
    "name": "Iam Joe Biel, independent publisher, filmmaker, and founder of Microcosm Publishing... AMA!"
  },
  {
    "url": "t3_28d9bs",
    "name": "I was an intern at Sesame Street. AMA!"
  },
  {
    "url": "t3_28dipq",
    "name": "IamA Male Prostitute working in New Zealand AMA!"
  },
  {
    "url": "t3_28dw33",
    "name": "I am best-selling singer, songwriter and Grammy-award winning musician (and dog lover!) Rick Springfield. Ask me anything!"
  },
  {
    "url": "t3_28f4e6",
    "name": "I run a donation based hostel, AMA!"
  },
  {
    "url": "t3_28gye6",
    "name": "I, Jesse Thorn, started my own NPR show, and now I own a podcast network, a theme cruise, and a menswear blog."
  },
  {
    "url": "t3_28h6w5",
    "name": "IamA YouTuber with 1.6M subscribers AMA!"
  },
  {
    "url": "t3_28hhrf",
    "name": "IamA 92-Year-Old WWII Normandy/Battle of the Bulge Veteran, Half-Track Driver and War Photographer - ASK ME ANYTHING!"
  },
  {
    "url": "t3_28hwzk",
    "name": "I am Actress Julie Benz AMA!"
  },
  {
    "url": "t3_28kl0l",
    "name": "IamA video game programmer who worked at Bethesda on Oblivion and Fallout 3. I've created a groundbreaking indie game called RODINA which has been described as Morrowind meets Elite. AMA!"
  },
  {
    "url": "t3_28kqwq",
    "name": "I make your sandwiches for $7.75 an hour. Employee of Subway for 2 years here, AMA"
  },
  {
    "url": "t3_28npru",
    "name": "Were Jill Wagner &amp; John Henson. Co-host of ABC's WIPEOUT. New season premieres this Sunday 7/6c."
  },
  {
    "url": "t3_28q6rs",
    "name": "I'm a former special operations sniper who uses my expertise in Africa to protect elephant and rhino from poachers. My name is Damien Mander, AMA.ank) AMA!"
  },
  {
    "url": "t3_28r177",
    "name": "IamA Professional YouTuber &amp; gamer, known as Drift0r, here to answer your questions about making a living playing games, YouTube, streaming, or anything else so AMA!"
  },
  {
    "url": "t3_28svz4",
    "name": "IamA (35 year old about to have an elective below knee amputation) AMA!"
  },
  {
    "url": "t3_28t3es",
    "name": "IamA Former Army Recruiter AMA! Round 2 per request"
  },
  {
    "url": "t3_28tbce",
    "name": "IamA (Danish guy who has been traveling around USA for 3 months now in an RV, from florida to nevada, and over 9000 miles. Been trough 25 states!) AMA!"
  },
  {
    "url": "t3_28ym0a",
    "name": "IamA Finnish-American who just completed Finnish military service, AMAA!"
  },
  {
    "url": "t3_28z2ox",
    "name": "We are Boulet and Zach Weinersmith, cartoonists and now children's book creators. Ask us anything!"
  },
  {
    "url": "t3_28z307",
    "name": "IamA Video Game Attorney (it's a thing, I swear) who just wrote an article on how Candy Crush is ruining the gaming industry. I've also helped /r/gamedev get informed and protect themselves! AMA!"
  },
  {
    "url": "t3_28zl8u",
    "name": "We are Strymon, designers and builders of effects pedals and electronics for musicians. Ask us anything!"
  },
  {
    "url": "t3_29009j",
    "name": "Perez Hilton here for U! Go ahead, AMA!"
  },
  {
    "url": "t3_292eav",
    "name": "I'm Brian Barczyk and I work with 30,000 snakes and other amazing animals as the owner of one of the largest reptile collections in the world. I also am launching the first online animal network FOR animal lovers BY animal lovers on July 1! AMA!"
  },
  {
    "url": "t3_292y11",
    "name": "IamA filmmaker/comedian etc David Wain AMA!"
  },
  {
    "url": "t3_293we2",
    "name": "IamA male porn star and director. Im James Deen  Ask me anything! AMA!"
  },
  {
    "url": "t3_295uru",
    "name": "IamA professional social engineer. I get paid to phish, vish, scam people and break in to places to test security. I wrote two books on the topic. Feel free to ask me about anything. AMA!"
  },
  {
    "url": "t3_297q8n",
    "name": "IamA survivor of a nearly fatal facial stabbing AMA!"
  },
  {
    "url": "t3_29hhom",
    "name": "Iama Roman Catholic Priest. AMAA."
  },
  {
    "url": "t3_29hik0",
    "name": "I ama founder of a luxury concierge service for the rich, famous, and adventurous. We get clients what they wish (flights to space, dives to Titanic, etc). AMA!"
  },
  {
    "url": "t3_29igqx",
    "name": "IamA I am a 21 yr old foster kid who has lived in nearly 25 places since entering foster care, many of which were pretty terrible. I've gone on to work on child welfare policy in Congress and share my story around the country. Ask me Anything!"
  },
  {
    "url": "t3_29kcdy",
    "name": "IamA It's Ten Second Songs, the 20 style singer, AMA!"
  },
  {
    "url": "t3_29kq3x",
    "name": "We are a board game caf and bar, carrying and teaching over 800 board games. We just celebrated our first birthday, ask us anything!"
  },
  {
    "url": "t3_29lqos",
    "name": "Were Brent Hodge and Ashleigh Ball, and we made a movie called A BRONY TALE about Bronies, or men who like My Little Pony. Ask us anything."
  },
  {
    "url": "t3_29njuk",
    "name": "We are the Hudson Project, Ask Us Anything!"
  },
  {
    "url": "t3_29nq9p",
    "name": "Lawrence Lessig and Jack Abramoff here  we both know (maybe different things) about the problem of money in politics. Ask us anything!"
  },
  {
    "url": "t3_29oflm",
    "name": "Hi, I'm Todd Glass, standup comedian, author, and host of The Todd Glass Show podcast. Ask Me Anything."
  },
  {
    "url": "t3_29qovh",
    "name": "We're COVERED IN BEES...and we get paid for it! We're commercial beekeepers, ask us anything!"
  },
  {
    "url": "t3_29qsvx",
    "name": "Hi! This is Rabbi Shergill, I'm an Indian pop musician. AMA!"
  },
  {
    "url": "t3_29r46c",
    "name": "IamA Rooster Teeth, maker of online videos for twelve years and counting. AMA!"
  },
  {
    "url": "t3_29r5ua",
    "name": "We are MACHINAE SUPREMACY, back with a new album and video game; AMA!"
  },
  {
    "url": "t3_29rjzz",
    "name": "IamA homeless veteran working in a professional office setting. Most of my coworkers don't even know I'm homeless. AMA!"
  },
  {
    "url": "t3_29tlzv",
    "name": "IamA musician who went from nothing to opening up for famous people in 12 months, literally thanks to Reddit. AMA!"
  },
  {
    "url": "t3_29vnv3",
    "name": "Prostitute working legally from a Parlour in Melbourne, Victoria, Australia. AMA!!"
  },
  {
    "url": "t3_29vpus",
    "name": "IamA guy who hand makes goat milk soap (I am not high, and I meant to do this) AMA!"
  },
  {
    "url": "t3_29wimb",
    "name": "Hi, Im travelling to EVERY single country in the world in a SINGLE JOURNEY, without airplanes. 50 countries today! Ask me anything!"
  },
  {
    "url": "t3_29xv63",
    "name": "IamA that kid who lived in the rainforest with no electricity or running water. You name it, we didn't have it. I am back here with my mother so ask her questions to! AMA!"
  },
  {
    "url": "t3_29yupd",
    "name": "IamA Optical sales associate, I can prevent you from getting ripped off. AMA!"
  },
  {
    "url": "t3_29z6da",
    "name": "IAmA blind man who suffered a gunshot wound to the head, dictating this to my son. AMA!"
  },
  {
    "url": "t3_29zcxc",
    "name": "Hi, I'm cycling around the world. So far 17000 miles and 3 years on the road. Ask my anything!"
  },
  {
    "url": "t3_2a1xt1",
    "name": "IamA Adrian Lamo, a former top-10 hacker // blew the whistle on Wikileaks. AMA!"
  },
  {
    "url": "t3_2a1yvh",
    "name": "IAma video game lounge owner that just celebrated 4 years in business AMA!"
  },
  {
    "url": "t3_2a3vzb",
    "name": "I'm the brother who chose to get a below-the-knee amputation. Ask Me Anything!"
  },
  {
    "url": "t3_2a7vxa",
    "name": "I am a 15 year old boy with down syndrome. AMA!"
  },
  {
    "url": "t3_2a9br0",
    "name": "I am an officer in the Israel Defense Forces. Ask me anything!"
  },
  {
    "url": "t3_2a9c5r",
    "name": "We are the Men in Blazers, here to talk all things World Cup and tiny bananas leading up to the NED v. ARG match."
  },
  {
    "url": "t3_2a9ylr",
    "name": "IamA I am Cliff Bleszinski, video game designer known for Gears of War/Unreal/Jazz Jackrabbit now CEO and founder of Boss Key Productions. AMA!"
  },
  {
    "url": "t3_2abtbe",
    "name": "Tell me your idiosyncratic behavior, personality trait, preference, or stance -- and I'll tell you what it's correlated with. I'm Shaun Gallagher, author of Correlated. AMA!"
  },
  {
    "url": "t3_2acusg",
    "name": "We are missionaries for The Church of Jesus Christ of Latter-Day Saints (Mormon Church) Ask us anything!"
  },
  {
    "url": "t3_2acxua",
    "name": "Hi Reddit, Dr. Gloria Brame here. IAmA sex therapist, media sex expert, author and official Hero of the Sexual Revolution. Ask me anything!"
  },
  {
    "url": "t3_2afqop",
    "name": "We're Kenn Navarro and Warren Graff. We created Happy Tree Friends and ruined your childhood. Ask Us Anything!!"
  },
  {
    "url": "t3_2afqyk",
    "name": "Gabriel Iglesias. Here for Ask Fluffy."
  },
  {
    "url": "t3_2aic3r",
    "name": "I am a Subway Sandwich Artist of over 4 years! AMA"
  },
  {
    "url": "t3_2aifjq",
    "name": "IamA 24 year old paraplegic who broke his back whilst cycling from London to Croatia. This August I will handcycle from Belgium to Croatia to finish the trip. I also spent 20h over 10 weeks testing exo-skeletons. AMA."
  },
  {
    "url": "t3_2aijjh",
    "name": "IamA programmer who writes code for calculating diamond prices. AMA about De Beers, the diamond industry, synthetic diamonds, engagement rings, etc."
  },
  {
    "url": "t3_2akba9",
    "name": "IamA Marriage and Family Therapist. AMA! (Rd. II)"
  },
  {
    "url": "t3_2aks3h",
    "name": "I just sold my McDonald's that I build and owned for 5 years, ask me absolutely anything!"
  },
  {
    "url": "t3_2al8dd",
    "name": "We are West Games. A studio made up of senior ex-S.T.A.L.K.E.R. developers. Our names are Alexey Sytyanov and Eugene Kim. Ask us Anything!"
  },
  {
    "url": "t3_2amd7t",
    "name": "IamA Former Harvard Ivy League Admissions Interviewer - AMA!"
  },
  {
    "url": "t3_2arbu7",
    "name": "IamA A funny thing happened on the way to the launch pad. My Name is William Baird President of Team Phoenicia and I am placing multiple payloads both into orbit and on the Moon. Ask me Anything about getting to the Moon, commercial payloads and space launches AMA!"
  },
  {
    "url": "t3_2avk49",
    "name": "Im Megan Collins of Style Girlfriend. Im a lady, writing about guys style for a living. AMA!"
  },
  {
    "url": "t3_2avozg",
    "name": "IamA: We are Trampled By Turtles, the band, let's do this! Ask Us Anything!"
  },
  {
    "url": "t3_2axmvl",
    "name": "IamA Palestinian citizen living in Gaza, AMA!"
  },
  {
    "url": "t3_2ayco8",
    "name": "IamA water economist from California. Ask me anything about drought and water management in the Western US"
  },
  {
    "url": "t3_2azfgl",
    "name": "I am Justin Giddings - Weird Al backup dancer, Machinima zombie killer, and now a sci-fi filmmaker! AMA!"
  },
  {
    "url": "t3_2azmav",
    "name": "I'm Nicole Richie, AMAA."
  },
  {
    "url": "t3_2azr2h",
    "name": "IamA 20yo guys who has 65-70% of his body burned courtesy of an explosion caused by a high tension power line when he was 14yo AMA!"
  },
  {
    "url": "t3_2azux4",
    "name": "I am Bernie Su, executive producer of shows and author of The Secret Diary of Lizzie Bennet, ask me anything."
  },
  {
    "url": "t3_2b1c9b",
    "name": "IAmA Emergency Medical Technician (EMT)"
  },
  {
    "url": "t3_2b33cu",
    "name": "IamA Google Streetview Driver, AMA!"
  },
  {
    "url": "t3_2b69xq",
    "name": "Iam an Inuk living in Nunavut, Northern of Canada AMA!"
  },
  {
    "url": "t3_2b72ir",
    "name": "IamA Ukrainian, who currently lives on the territory that is being controlled by pro-Russian rebels, AMA!"
  },
  {
    "url": "t3_2bb2i1",
    "name": "IamA 18 y/o who sat on a pole for 52,5 hours non-stop AMA!"
  },
  {
    "url": "t3_2bbadz",
    "name": "IamA CEO of a legal weed farm in WA AmA"
  },
  {
    "url": "t3_2bblfv",
    "name": "IamAn emergency doctor, award-winning writer, and mother of two little kids. AMA!"
  },
  {
    "url": "t3_2bbydq",
    "name": "Tomorrow marks the 3 year anniversary of the 22.07 massacre in Norway. I survived the attack. AMA"
  },
  {
    "url": "t3_2bedyh",
    "name": "Hiya Reddit. We are Mogwai from Scotland"
  },
  {
    "url": "t3_2bf3oy",
    "name": "IamAn indie game developer who left Bungie to make my own game, Timespinner. AMA!"
  },
  {
    "url": "t3_2bf6e3",
    "name": "I Am Jimmy Tatro, comedian, actor, writer, and creator of LifeAccordingToJimmy AMA"
  },
  {
    "url": "t3_2bfbfc",
    "name": "I AM CHUCK KLOSTERMAN. I am a writer and a journalist, and I am here to answer questions about virtually anything."
  },
  {
    "url": "t3_2bfbt1",
    "name": "Nick Swardson, let's dance. AMA."
  },
  {
    "url": "t3_2bg6b4",
    "name": "Reddit You Ready? It's Four Year Strong! Ask Us Anything."
  },
  {
    "url": "t3_2bhr3q",
    "name": "IamA entrepreneur, eight years ago my wife and I sold everything and bought a 90ft tunnel oven to make cookies. Today were shipping 1 thousand pounds a day. AMA!"
  },
  {
    "url": "t3_2blrd9",
    "name": "Jerry Seinfeld loves answering questions! The dumber, the better. NOW."
  },
  {
    "url": "t3_2boncs",
    "name": "IamA 23yo girl who had asian double eyelid surgery and lower blepharoplasty - AMA!"
  },
  {
    "url": "t3_2boyia",
    "name": "I am Mark ReinHagen, world creator and game designer. AskmeAnything."
  },
  {
    "url": "t3_2bp0c8",
    "name": "I'm CJ Hardin, a former Army Sergeant who recovered from posttraumatic stress disorder (PTSD) after going through MDMA-assisted psychotherapy in a clinical trial. Ask me anything!"
  },
  {
    "url": "t3_2bsnom",
    "name": "I'm here with my granddad George, a 96 year old veteran who served as a chaplain in the Navy during WWII, has seen the world, and lived through some very interesting times. He wants to answer your questions!"
  },
  {
    "url": "t3_2bvjz6",
    "name": "I am Zach Phelps-Roper. I am a former member of the Westboro Baptist Church. Ask me anything!"
  },
  {
    "url": "t3_2bw7yg",
    "name": "IamA Former Harvard Admissions Interviewer AMA!"
  },
  {
    "url": "t3_2bxvgm",
    "name": "IamA Cam Girl working in a semilegal studio in Romania. AMA!"
  },
  {
    "url": "t3_2byg62",
    "name": "IamA employee at Fleshlight Headquarters in Austin, TX - AMA!"
  },
  {
    "url": "t3_2bz5rt",
    "name": "We are a Ukraine Orphanage from Slavyansk. Our 116+ children's home is destroyed in war, and we need your help AMA!"
  },
  {
    "url": "t3_2c1ubp",
    "name": "IamA Game Dev that just released a game on steam! AMA!"
  },
  {
    "url": "t3_2c23br",
    "name": "I am DIPLO. AMA!"
  },
  {
    "url": "t3_2c2g54",
    "name": "I am Pandora Boxx, best known from RuPaul's Drag Race. Keep it fun &amp; AMA!"
  },
  {
    "url": "t3_2c2yx6",
    "name": "Im Jason Ritchie, a pissed off non-politician running for Congress. Im a Democrat ready to Flip A District in Washington State. AMA!"
  },
  {
    "url": "t3_2c3bhb",
    "name": "I'm a MTF transsexual who won prom queen AMA"
  },
  {
    "url": "t3_2c5053",
    "name": "IamA a palaeontologist at the Royal Tyrrell Museum in the Canadian Badlands of Alberta specializing in extinct predators, which means I know important things, like which dinosaur would win in a fight. AMA!"
  },
  {
    "url": "t3_2c6a0e",
    "name": "I am Mike Selinker, designer of games like the Pathfinder Adventure Card Game, puzzlemaker, and author of The Maze of Games. Ask me anything!"
  },
  {
    "url": "t3_2c94to",
    "name": "Hi I'm Tim Ross a very not famous comedian AMA"
  },
  {
    "url": "t3_2cc15f",
    "name": "IamA 17 year old male living with phenylketonuria (PKU): A rare genetic disease that would leave me brain dead if I didn't follow a strict low protein diet. AMA!"
  },
  {
    "url": "t3_2cc2h3",
    "name": "I am Cyd Sinclaire, Las Vegas stripper and burlesque dancer extraordinaire! Ask me anything!!"
  },
  {
    "url": "t3_2ccok1",
    "name": "IamA Truck Driver Trainer for a major $2 billion Corporation, one of the top 10 most lethal jobs in the country, and the most common way to be killed at work. Ask me about anything! Money, Sex, Drug testing, Hotdogs, you name it. AMA!"
  },
  {
    "url": "t3_2cflpj",
    "name": "Pretend I'm saying something much more intelligent &amp; witty than I really am. Gilbert Gottfried, AMA."
  },
  {
    "url": "t3_2cfpol",
    "name": "Vacuum Repair Guy Here Again. I Missed Several Hundred Questions Last Time. Let Me Answer Your Unanswered Vacuum Questions."
  },
  {
    "url": "t3_2chwvo",
    "name": "IAMA USPS Letter Carrier in Minnesota, AMA!"
  },
  {
    "url": "t3_2cicp4",
    "name": "IamA drug mule from Ireland who did 3 years in Colombian prison, when I killed another inmate. AMA"
  },
  {
    "url": "t3_2cir3a",
    "name": "Two brothers who created Manly the animated short on Cartoon Hangover, as well as writer/artist/songwriters for Adventure Time. AMA!"
  },
  {
    "url": "t3_2cjv7l",
    "name": "IamA John Bowman - Father of one of the youngest school shooting victims - Amina Kocer-Bowman. AMA!"
  },
  {
    "url": "t3_2ckrfe",
    "name": "As per request: IAmA Israeli who served in the current war in Gaza,"
  },
  {
    "url": "t3_2cm9ig",
    "name": "I am Chris Jericho - frontman for rock band Fozzy, WWE superstar, actor, author, and more - AMA!"
  },
  {
    "url": "t3_2cnvsx",
    "name": "The WV State Police shot and killed my dog as it ran to my wife. Please ask me anything!"
  },
  {
    "url": "t3_2cp9ol",
    "name": "Hello, it's Sean Bean. A legend on LEGENDS. AMA!"
  },
  {
    "url": "t3_2csv6j",
    "name": "My name is Steve Hofstetter. IamA comedian and America's newest late night host (Laughs on Fox). Also a 6-year redditor. AMA!"
  },
  {
    "url": "t3_2ctdbm",
    "name": "IamA product manager for gaming mice at Logitech G. I develop the stuff you game with. AMAA!"
  },
  {
    "url": "t3_2ctf2w",
    "name": "We Are Riki Lindhome &amp; Kate Micucci aka Garfunkel &amp; Oates, Back on reddit for our latest AMA - ask us anything."
  },
  {
    "url": "t3_2ctkcs",
    "name": "I am Scott Herman, fitness expert and the official BeFit trainer. Ask me anything!"
  },
  {
    "url": "t3_2cvys1",
    "name": "We are the creators of The Inbetweeners  ask us anything!"
  },
  {
    "url": "t3_2cwfu2",
    "name": "I am Twitch CEO Emmett Shear. Ask Me (almost) Anything."
  },
  {
    "url": "t3_2cwn98",
    "name": "IAMA former congressional and presidential campaign staffer. I'll give you the behind the curtain peek at US politics and government, AMA"
  },
  {
    "url": "t3_2cxwd7",
    "name": "IamA 9 year employee of the Coca-Cola Company. I've served many roles, most recently a delivery driver. No one probably cares, but if you do, AMA."
  },
  {
    "url": "t3_2czfkv",
    "name": "My ex hired someone to kill me, but didn't get away with it. AM(almost)A!"
  },
  {
    "url": "t3_2d0l1j",
    "name": "Iama professional semi truck driver. Someone told me to do one of these so AMA!"
  },
  {
    "url": "t3_2d2msu",
    "name": "IamA American Prisoner of War who was imprisoned for 6.5 years &amp; returned there 20 years later to meet they guy credited with my capture. AMAA!"
  },
  {
    "url": "t3_2d3xud",
    "name": "IamA typically boring college student who discovered I had a brain tumor three weeks ago. AMA."
  },
  {
    "url": "t3_2d4es3",
    "name": "In response to my family's upcoming AMA, I thought I'd try this again: I am a former member of the Westboro Baptist Church. Ask Me Anything!"
  },
  {
    "url": "t3_2d50mc",
    "name": "IamA Kurd who was in the capital, half an hour away from the recent ISIS attacks. It was choas. AMA!"
  },
  {
    "url": "t3_2d5eqs",
    "name": "My Fiance and I spent 15 months traveling around 35 countries, AMA."
  },
  {
    "url": "t3_2d5xtl",
    "name": "We are members of Westboro Baptist Church and are going to picket Reddit headquarters Tuesday, 8/12/14 from 5:15 - 5:45 PM. Ask us anything!"
  },
  {
    "url": "t3_2d62c3",
    "name": "IamA 27 year old female who in January of this year had brain surgery, and now just found out that I will need surgery to fix both my kidney and replace my aortic artery, because of a condition that only 200 other people have."
  },
  {
    "url": "t3_2d6dio",
    "name": "I was run over by a van at 40 mph and have spent the last 3 weeks recovering in an NHS hospital in London AMA!"
  },
  {
    "url": "t3_2d8f71",
    "name": "I work in a major UPS warehouse. Ama!"
  },
  {
    "url": "t3_2danwn",
    "name": "IamA Chipotle crew cook, AMA"
  },
  {
    "url": "t3_2dbp7b",
    "name": "IamA teenager with pectus carinatum (pigeon chest), who is currently wearing a chest brace. AMA"
  },
  {
    "url": "t3_2dck4v",
    "name": "Hello there, I'm R.A. Salvatore, a fantasy author for more than a quarter--century now. Ask Me Anything."
  },
  {
    "url": "t3_2dgtwq",
    "name": "We are intoxicated waiters working at a popular restaurant in South-East Iceland, AMA!"
  },
  {
    "url": "t3_2dhsna",
    "name": "IamA Crisis Line Volunteer, AMA!"
  },
  {
    "url": "t3_2djjkw",
    "name": "IamA Ed Bolian - Cannonball Run World Record Holder, I drove from New York to Los Angeles in 28 hours 50 minutes. AMA!"
  },
  {
    "url": "t3_2dk60t",
    "name": "We build Internet Explorer. I know, right? Ask Us just about Anything."
  },
  {
    "url": "t3_2dlqut",
    "name": "IamA guy who was falsely accused of molesting my stepdaughter by my ex wife after I asked for a divorce. I was arrested and convicted of a sex crime and sentenced to 15 years in prison. After 17 months of incarceration I was able to prove my innocence and out of prison. AMA!"
  },
  {
    "url": "t3_2dn0ko",
    "name": "I ama deep-voiced voice actor. Ask me to say anything."
  },
  {
    "url": "t3_2dnfyn",
    "name": "I am the inventor of the hexayurt, made for disaster relief shelters and loved at Burning Man! AMA"
  },
  {
    "url": "t3_2dnodx",
    "name": "IamA: Hey Reddit! Shooter Jennings here, Get to know me AMA!"
  },
  {
    "url": "t3_2dosgn",
    "name": "IAmA Scuba Instructor who was wrongfully terminated after getting my finger bitten by an octopus during a dive, fought it, and after 3 years won the worker's comp case. AMA!"
  },
  {
    "url": "t3_2dqo9t",
    "name": "IamA Police Officer in a mid size city in the southeast... AMAA"
  },
  {
    "url": "t3_2ds0zn",
    "name": "Teen dealing with leukemia. AMA"
  },
  {
    "url": "t3_2dtv5y",
    "name": "IamA male who lost his penis and is getting an experimental penile transplant AMA! [nsfw]"
  },
  {
    "url": "t3_2dvsb1",
    "name": "IamA 94 year old WWII Veteran who was conscripted by the Soviets, captured by the Germans, and emigrated to the United States, AMA."
  },
  {
    "url": "t3_2dvtdt",
    "name": "I've just returned from visiting North Korea for 7 days. AMA."
  },
  {
    "url": "t3_2dw0tg",
    "name": "For six years I was an undercover investigator in factory farms"
  },
  {
    "url": "t3_2dwo8j",
    "name": "Hi, I'm Scroobius Pip and I am here for athe soul purpose of you to ask me anything..."
  },
  {
    "url": "t3_2dxau3",
    "name": "IamA Toxinologist (a dude that works with venomous animals) at james cook univeristy in australia AMA!"
  },
  {
    "url": "t3_2e00uc",
    "name": "We are Klei Entertainment, creators of Dont Starve, Mark of the Ninja and Invisible, Inc. -- AMA."
  },
  {
    "url": "t3_2e09u8",
    "name": "I am Thad Levine, Assistant General Manager of the Texas Rangers, and I have helped launch a company that uses fantasy sports to raise money for nonprofits."
  },
  {
    "url": "t3_2e0yp2",
    "name": "I am Mark Duplass... you might know me as the crazy man from Safety Not Guaranteed, or Pete from The League, or the director of Cyrus and Jeff, Who Lives at Home, or as a donut enthusiast."
  },
  {
    "url": "t3_2e3ohk",
    "name": "I am Seth Meyers, host of NBC's Late Night and the 66th Annual Primetime Emmys. Ask Me Anything!"
  },
  {
    "url": "t3_2e3uku",
    "name": "We are Colossal Order &amp; Paradox Interactive, the developers and publishers of the upcoming hardcore city builder game Cities: Skylines -- AMA"
  },
  {
    "url": "t3_2e4gmx",
    "name": "I am Rebecca Sugar, creator of Steven Universe, and former Adventure Time storyboarder, AMA!"
  },
  {
    "url": "t3_2e53ku",
    "name": "IamA high end escort living on the road (with interests in gaming, cars, and nerd stuff). AMA."
  },
  {
    "url": "t3_2e6ddl",
    "name": "Josh Brolin: Goonies Never Say Die. AMA."
  },
  {
    "url": "t3_2e6wl9",
    "name": "YouPorn team here to answer all your questions. AMA"
  },
  {
    "url": "t3_2e7n2p",
    "name": "Vitiligo now covers 100% of my skin. ama"
  },
  {
    "url": "t3_2eb4vf",
    "name": "IAmA Baggage handler for a major US airline AMA"
  },
  {
    "url": "t3_2edvob",
    "name": "I'm A Homebirth Midwife Ask Me Anything"
  },
  {
    "url": "t3_2eef3m",
    "name": "IamA 17 year-old farm kid from Southwest Kansas. I have lived and worked on our family farm my whole life. Currently I am bringing our farm into the 21st century through the use of drones! AMA!"
  },
  {
    "url": "t3_2egszo",
    "name": "Hi Reddit, I'M Nick Mckinless; A professional Stuntman/Stunt Coordinator, Filmmaker and Strength Athlete. I have personal trained a few of Hollywoods finest including Anne Hathaway, Ralph Fiennes and Mickey Rourke and worked on Troy, The Matrix and Kick-Ass to name a few. AMA!"
  },
  {
    "url": "t3_2ehtte",
    "name": "I worked as various princesses at Walt Disney World in Orlando, Florida. AMA!"
  },
  {
    "url": "t3_2ejs0r",
    "name": "I am Neal Brennan, host of The Approval Matrix on SundanceTV. AMA!"
  },
  {
    "url": "t3_2en6ts",
    "name": "WE ARE ROCK BAND DEATH FROM ABOVE 1979. ASK US ANYTHING."
  },
  {
    "url": "t3_2enwks",
    "name": "IamA Science Fiction Author named Peter Watts. I am not any of those other Peter Wattses. AMA, within reason."
  },
  {
    "url": "t3_2eqv4v",
    "name": "IamA Matt Mahaffey AMA!"
  },
  {
    "url": "t3_2er6os",
    "name": "I am Nik Bonaddio, CEO and Founder of numberFire  the analytics platform for SPORTS and FANTASY PREDICTIONS, here to answer all of your draft, player and team questionsAMA!"
  },
  {
    "url": "t3_2et9op",
    "name": "I run an underground metal label AMA!"
  },
  {
    "url": "t3_2ety7z",
    "name": "Luc Besson here, AMA!"
  },
  {
    "url": "t3_2eujz1",
    "name": "Actor Adam Brody here, ask me anything."
  },
  {
    "url": "t3_2evyx9",
    "name": "We are @LizardSquad, ask us anything!"
  },
  {
    "url": "t3_2exnk3",
    "name": "Eli Manning here, AMA."
  },
  {
    "url": "t3_2f0k0n",
    "name": "IamA Mental Health Technician at one of the biggest hospitals in my state. AMA!"
  },
  {
    "url": "t3_2f2o6r",
    "name": "IamA drive through liquor clerk in Australia AMA"
  },
  {
    "url": "t3_2f2zbd",
    "name": "IamA Dunkin Donuts/Baskin Robbins Employee AMA!"
  },
  {
    "url": "t3_2f3mpt",
    "name": "IAMA anon that broke $40k sales via shopify within its trial period AMAA"
  },
  {
    "url": "t3_2f3o1x",
    "name": "IamA a traveler with 115 countries under my belt, sually travel by bicycle. AMA!"
  },
  {
    "url": "t3_2f4zao",
    "name": "IamA Japanese host in Okinawa, Japan. AMA"
  },
  {
    "url": "t3_2f682g",
    "name": "I am the creator of Miss FreeOnes, the largest contest in the porn industry (and it started today!). AMA"
  },
  {
    "url": "t3_2fa3bd",
    "name": "I'm the Ten Second Songs singer, go ahead and ASK ME ANYTHING!.. And I mean ANYTHING."
  },
  {
    "url": "t3_2fa415",
    "name": "IamA Bar owner in Dublin, Ireland. AND I'M BACK AGAIN! AMA!"
  },
  {
    "url": "t3_2fak8u",
    "name": "IamA Parking Enforcement Officer that writes tickets all day on the Jersey Shore, AMA!"
  },
  {
    "url": "t3_2fb32e",
    "name": "I am Paris Themmen. I played Mike Teevee in the original Willy Wonka. AMA!"
  },
  {
    "url": "t3_2fbr2a",
    "name": "I keep on being Max Landis, even when I'm trying to stop. AMA!"
  },
  {
    "url": "t3_2fbwi1",
    "name": "My name is Andy Milder. I'm an actor, I was on Weeds. This is my first attempt at Reddit. AMA"
  },
  {
    "url": "t3_2fddke",
    "name": "IamA Walgreens photo specialist, and I've seen some s***... AMA"
  },
  {
    "url": "t3_2fe5i5",
    "name": "I am Tyler Knott Gregson, The Typewriter Poet from Tumblr, Instagram &amp; Twitter. My new book Chasers of the Light is out now. Ask me Anything!"
  },
  {
    "url": "t3_2ff3qs",
    "name": "I am Hiroaki Yura, Producer of anime such as Under the Dog, and have taken part in Steins; Gate the Movie, and The Disappearance of Haruhi Suzumiya as well as video games Project Phoenix and music for Diablo III and many more! So AMA!"
  },
  {
    "url": "t3_2ffn9j",
    "name": "IamA ex-cop (California) turned Private Investigator AMA!"
  },
  {
    "url": "t3_2fg8qe",
    "name": "IamA polyglot (12 languages), created language courses and organized the Polyglot Gathering. AMA!"
  },
  {
    "url": "t3_2fggpn",
    "name": "I am Kristin Beck, Former U.S. Navy SEAL. I served as a member of the elite U.S. Special Operations  also SEAL Team Six. In 2013, 18 months after retiring from active service, I came out publicly a transgender woman. AMA."
  },
  {
    "url": "t3_2fgsv2",
    "name": "I am Victoria from reddit. AMAA!"
  },
  {
    "url": "t3_2fh2zm",
    "name": "We are Jesse Carmichael and Mickey Madden of Maroon 5, ask us anything!"
  },
  {
    "url": "t3_2fh9eg",
    "name": "IamA Flight attendant, here to answer all your BUT WHYY? AMA!"
  },
  {
    "url": "t3_2fh9fx",
    "name": "Hi, Reddit  we are Josh and Chuck from Stuff You Should Know, the podcast. AUA!"
  },
  {
    "url": "t3_2fhysh",
    "name": "I am Jay Chandrasekhar, joined by Sarah Chalke from the new Amazon pilot Really - ask us anything."
  },
  {
    "url": "t3_2fjtw8",
    "name": "This is Mark Gatiss. Actor, writer. Do what you will with me."
  },
  {
    "url": "t3_2fki9g",
    "name": "Denzel Washington. Denzel Washington. AMA."
  },
  {
    "url": "t3_2flcht",
    "name": "Theo Rossi, Sons of Anarchy, AMA!"
  },
  {
    "url": "t3_2fmrrx",
    "name": "Hi, we are a group of veterans running a non profit providing service dogs for vets! Ask us anything!"
  },
  {
    "url": "t3_2fmwuz",
    "name": "IAmA Taco Bell employee that works the drive-thru. AMA"
  },
  {
    "url": "t3_2fo9tm",
    "name": "IamA Mechanical Engineer who designs and constructs uranium mines and yellowcake mills. AMA!"
  },
  {
    "url": "t3_2fow3t",
    "name": "IamA Cop in Missouri AMA!"
  },
  {
    "url": "t3_2fqosi",
    "name": "IAmA Supervisor for Canadian Tims Hortons. AMA"
  },
  {
    "url": "t3_2fu6ey",
    "name": "We are PhDs who, as a result of the economic downturn, couldn't find jobs in academia and instead decided to work for an essay writing site. We get paid to do research, help with homework, and write admissions essays for students. Ask us whatever you'd like to know, about our work, grad school, etc!"
  },
  {
    "url": "t3_2fuaw8",
    "name": "IamA Son of an Oscar Winning Actor, AMA!"
  },
  {
    "url": "t3_2fwvea",
    "name": "Jason McCourty of the Tennessee Titans here, AMA."
  },
  {
    "url": "t3_2fxl7w",
    "name": "Hey Reddit! We are Delta Spirit. The five of us are in a hotel room awaiting your questions. Ask us anything!"
  },
  {
    "url": "t3_2fxyb9",
    "name": "We are Michael Cera. And Kieran Culkin. Ask us stuff."
  },
  {
    "url": "t3_2g0791",
    "name": "Hey Reddit! Were Giphy. Lets talk about GIFs!"
  },
  {
    "url": "t3_2g1gx3",
    "name": "I Am M|O|O|N, an electronic musician. You probably know me from the Hotline Miami soundtrack. Or other stuff. AMA"
  },
  {
    "url": "t3_2g4as3",
    "name": "My school issued MacBooks, which they later used to spy on me and my class mates. AMA."
  },
  {
    "url": "t3_2g7lnm",
    "name": "TRAILER PARK BOYS here! Ask Me Anything!!"
  },
  {
    "url": "t3_2g845x",
    "name": "IamA Police Officer/First responder here to serve, AMA!"
  },
  {
    "url": "t3_2gafu9",
    "name": "I am a helicopter tour pilot. AMA!"
  },
  {
    "url": "t3_2gb7o0",
    "name": "I just finished one of the hardest ultra triathlons in the world Ultraman UK, 10km swim, 420.2km bike &amp; 84km run AMA!"
  },
  {
    "url": "t3_2gc8s5",
    "name": "I am a medical videographer. I film surgery. Ask me anything!"
  },
  {
    "url": "t3_2gecgq",
    "name": "I'm a 19 year old guy with a very rare autoimmune brain disease that causes seizures and weakness of one side of the body called Rasmussen's Encephalitis. I've had 2 brain surgeries that left me with a 13inch scar, chemo, dozens of meds, and I'm still not cured. Guess what triggers my seizures? AMA!"
  },
  {
    "url": "t3_2ghx8q",
    "name": "I am an attorney who defends credit card lawsuits, helps people with bankruptcy, and sues collection agencies. AMA!"
  },
  {
    "url": "t3_2gihc0",
    "name": "IamA 25 year old guy that sold drugs for over 13 years AMA!"
  },
  {
    "url": "t3_2gk0kh",
    "name": "I (we) are two vets who deployed to Mosul Iraq. Matt was a tanker, and Doc was a medic AMA!"
  },
  {
    "url": "t3_2gkvt5",
    "name": "IamA American Ninja Warrior producer AMA!"
  },
  {
    "url": "t3_2gm2ik",
    "name": "IamA Former Olive Garden Bartender/Server AMA!"
  },
  {
    "url": "t3_2gnn1r",
    "name": "IamA Human Guinea Pig Getting the Newest Ebola Vaccine AMA!"
  },
  {
    "url": "t3_2go2ys",
    "name": "I'm Professor Rob Knight. Lets talk about the lessons we can learn from poop...I mean, the millions of marvelous microscopic creatures inhabiting your gut. AMA!"
  },
  {
    "url": "t3_2go9pn",
    "name": "Basic Income AMA Series: I am Ed Dolan, economist and supporter of universal basic income. Ask me anything."
  },
  {
    "url": "t3_2gosu2",
    "name": "I am pornstar Dani Daniels and I just did my first movie with BLACKED.com (Ask Me Anything)"
  },
  {
    "url": "t3_2gpbdx",
    "name": "I am RUPAUL - actor, singer, host of RuPaul's Drag Race and Supermodel of the World, AMA!"
  },
  {
    "url": "t3_2gritu",
    "name": "IamA 23 year old with a rare degenerative disease, mitochondrial myopathy that effects every major system in my body. There is no known cure. AMA."
  },
  {
    "url": "t3_2gscso",
    "name": "I'm Jonathan Goldsmith, and I play the The Most Interesting Man in the World. I don't always post to reddit, but when I do, it's for a good cause. AMA."
  },
  {
    "url": "t3_2gupre",
    "name": "I work in the WY/CO oilfields. I made supervisor and grossed 6 figures the year I turned 20. AMA"
  },
  {
    "url": "t3_2gynbo",
    "name": "IAmA tobacco wholesaler"
  },
  {
    "url": "t3_2gynil",
    "name": "I'm a 27 yr old male on dialysis. I was just approved to have a transplant and am in need of a donor, AMA."
  },
  {
    "url": "t3_2gzbm7",
    "name": "I'm Sir Mix-A-Lot, Artist, Producer, Engineer, Entrepreneur and Car Nut. AMA."
  },
  {
    "url": "t3_2h2gtt",
    "name": "IamA social skills expert who overcame the social struggles of Asperger's! My book is free on Kindle today, so AMA!"
  },
  {
    "url": "t3_2h4ehe",
    "name": "I write Now I Know, a free trivia/interesting facts email newsletter which goes to over 100,000 people a day. My first book came out last year and my second hits shelves on November 1st. AMA!"
  },
  {
    "url": "t3_2h4qlw",
    "name": "Hi, I'm Donovan McNabb, Ask Me Anything!"
  },
  {
    "url": "t3_2h57xm",
    "name": "I am Jay Pharoah. AMA!"
  },
  {
    "url": "t3_2h5j12",
    "name": "Simon Pegg, back again, AMA."
  },
  {
    "url": "t3_2h9aer",
    "name": "Seriously, don't ask me what it's like to write hit songs for Eminem, Rihanna, Jason Derulo, or others. Or DO. I'm Jon Bellion, AMA."
  },
  {
    "url": "t3_2haz0a",
    "name": "IamA Peace Corps Volunteer serving in Madagascar, AMA!"
  },
  {
    "url": "t3_2hbsss",
    "name": "IamA Mr. Skullhead of Kingdom of Loathing fame. It's my birthday! AMA!"
  },
  {
    "url": "t3_2hexkh",
    "name": "IamA Pepsi delivery driver. (In response to the Coke driver AMA a while back) AMA!"
  },
  {
    "url": "t3_2hfgbe",
    "name": "I am @FanSince09, a twitter user who helped to to solve a recent assault case in Philadelphia."
  },
  {
    "url": "t3_2hfnw9",
    "name": "I am a 21 year old bush pilot in the Australian outback AMA"
  },
  {
    "url": "t3_2hfswt",
    "name": "IamA tattooer in Huntsville, Alabama who was recently featured in a video of slow motion tattooing on the YouTube Channel Smarter Every Day that has over a million views in just 24 hours! AMA"
  },
  {
    "url": "t3_2hgqsi",
    "name": "Hi, we are the creator &amp; designer of BoJack Horseman, Ask Us Anything!"
  },
  {
    "url": "t3_2hjviy",
    "name": "We are Dead Gentlemen Productions, makers of the films The Gamers: Dorkness Rising, and JourneyQuest. Ask Us Anything!"
  },
  {
    "url": "t3_2hm5xb",
    "name": "IamA Astronomer AMA!"
  },
  {
    "url": "t3_2hnazk",
    "name": "IamA 24 year old Private Investigator. AMA!"
  },
  {
    "url": "t3_2hnwrf",
    "name": "IamA young, vital, healthy, active woman who has has both breasts removed (cancer) and is now undergoing chemotherapy. AMA!"
  },
  {
    "url": "t3_2howty",
    "name": "Today is International Right to Know Day. We are transparency activists from Canada, Colombia, Bulgaria, India and South Africa, here to talk about openness, secrecy and your right to know. Go on  Ask Us Anything!"
  },
  {
    "url": "t3_2hpbll",
    "name": "I am a former EA/DICE/Rovio Designer &amp; Current FNATIC Coach. My name is Tim stormonster Kjell, AMA"
  },
  {
    "url": "t3_2hqjuu",
    "name": "6 years ago my brother and I found out we were going blind, so we took a trip around the United States of America to see it fully before completely losing our sight. My name is Tod Purvis, I have Choroideremia and I hope to help others find a cure. Ask Me anything!"
  },
  {
    "url": "t3_2hs7cg",
    "name": "I am a door to door salesman! Ask me anything!"
  },
  {
    "url": "t3_2hvwoj",
    "name": "I am finished riding a bicycle solo across Africa, sleeping in the wild and conquering some of my deepest fears but one year on, I have now reached the Pyramids of Egypt AMA"
  },
  {
    "url": "t3_2hwwuw",
    "name": "I am Ron Perlman, eater of tuna on rye (currently). AM-the-fuck-A."
  },
  {
    "url": "t3_2hztda",
    "name": "I am inventor Anthony Mattana and my Wireless 3D Headphones Just Raised $22,000 In 1 Day"
  },
  {
    "url": "t3_2i0fju",
    "name": "I am Rob Zombie, writer and director of 31. Let's do this again. Ask Me Anything!"
  },
  {
    "url": "t3_2i3jb1",
    "name": "IamA 20 year old guy who is currently recovering from a pectus excavatum (sunken chest) surgery (my sternum was restructured 24 hours ago) AMA!"
  },
  {
    "url": "t3_2i6tcr",
    "name": "IamA underwater archaeologist. Want to learn about underwater exploration, shipwrecks, pirates, and sunken cities? AMA!"
  },
  {
    "url": "t3_2i6yts",
    "name": "We are a Russian game development studio named Ice-Pick Lodge. We're challenging death as it is once again. Ask us anything."
  },
  {
    "url": "t3_2ibb9t",
    "name": "I am a reddit employee - AMA"
  },
  {
    "url": "t3_2icxrk",
    "name": "I am taking on UK Prime Minister David Cameron in next year's General Election. AMA!"
  },
  {
    "url": "t3_2idmlz",
    "name": "I'm John Mulaney, I'm a comedian, and my new show Mulaney premieres tonight on FOX. AMA."
  },
  {
    "url": "t3_2idt57",
    "name": "IAmA ship captain/author/lawyer/pilot named Max Hardberger. I steal ships back from pirates. Ask me anything!"
  },
  {
    "url": "t3_2ifzmd",
    "name": "I am Potato Salad Guy, Zack Danger Brown AMA."
  },
  {
    "url": "t3_2igfkh",
    "name": "I invented Pavlok, a wearable device that shocks you if you waste time on Facebook/Reddit. Also, it helps you form good habits and break bad habits. It was even featured on Colbert! AMA"
  },
  {
    "url": "t3_2igklm",
    "name": "Hi, I am Alan Stern, head of NASAs New Horizons spacecraft on its way to Pluto, Im here with five young scientists on the mission. Ask us anything about New Horizons, Pluto, or the Kuiper Belt!"
  },
  {
    "url": "t3_2ii41e",
    "name": "IamA novelist."
  },
  {
    "url": "t3_2inmkq",
    "name": "reddit, you helped put us on the map last year by showing one of our videos your much love... We are the Juno Award-winning band, The Strumbellas, in the middle of a 2 month tour of North America, here to answer your questions... the weirder the better! Ask Us Anything!"
  },
  {
    "url": "t3_2innw8",
    "name": "I am a Big Data Scientist. I also recently wrote a book about why mathematics is a language just like any other. AMA!"
  },
  {
    "url": "t3_2iokd7",
    "name": "I am America's Most Beloved Author David Sedaris. AMA."
  },
  {
    "url": "t3_2iqxdl",
    "name": "I am Chris Hunt Indie game developer at Lo-Fi Games, creator of Kenshi - AMA!"
  },
  {
    "url": "t3_2irxex",
    "name": "I'm Jane Jensen, game designer and author. AMA!"
  },
  {
    "url": "t3_2it0mk",
    "name": "I am Gerald Slink Johnson, voice of Lamar Davis of GTA V and star of Adult Swim's hit show, BLACK JESUS! AMA!"
  },
  {
    "url": "t3_2iuz2b",
    "name": "IamA 20 year old guy with Tourette Syndrome. AMA!"
  },
  {
    "url": "t3_2ivc7q",
    "name": "I am a 27 year old dwarf. AMA"
  },
  {
    "url": "t3_2iyngn",
    "name": "I wrote tonight's Doctor Who. And next weeks. AMA."
  },
  {
    "url": "t3_2iysbc",
    "name": "Well, it happened. I no longer work at Taco Bell. Let's do this the right way, no holding back. I used to be a Taco Bell Shift Manager, AMA."
  },
  {
    "url": "t3_2iz466",
    "name": "IamA redditor that meets with other redditors (and anyone else I can help) and fixes their cars free of charge, in the hopes they pay it forward. AMA!"
  },
  {
    "url": "t3_2j0xgw",
    "name": "I just got back from North Korea and am now living in South Korea--AMA!"
  },
  {
    "url": "t3_2j4qd2",
    "name": "We are sketch comedians The Birthday Boys ready for season 2 of our show on IFC airing 10/17. Bob Odenkirk is not here, so you can ask us the dirt on him (or any of our guest stars). Also answering relationship questions. AUA."
  },
  {
    "url": "t3_2j6d0e",
    "name": "IamA victim of more than six years of cyberstalking and online and offline stalking/harassment. My stalker has been arrested three times and is awaiting sentencing. AMA."
  },
  {
    "url": "t3_2j8jrt",
    "name": "we are stars, formerly popular middle aged musicians from montreal. ask me anything. you wont get another chance."
  },
  {
    "url": "t3_2jbcdk",
    "name": "We are Stoic - Indie Game Developers creating The Banner Saga Trilogy"
  },
  {
    "url": "t3_2jc3pt",
    "name": "I am Chris Jericho - author, WWE superstar, singer, and much more. AMA."
  },
  {
    "url": "t3_2jccdl",
    "name": "I'm Ash Avildsen, Founder of Sumerian Records, Summer Slaughter, AllStars and other fun stuff."
  },
  {
    "url": "t3_2jkpbp",
    "name": "IamA Spiritual Director. Do you have any questions about spirituality? AMA!"
  },
  {
    "url": "t3_2jldjm",
    "name": "10yr old street child working to help support my family in rural &amp; remote Ethiopia, AMA"
  },
  {
    "url": "t3_2jpbqd",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_2js28o",
    "name": "IamA Game Designer working on MMORPGs, AMAA!"
  },
  {
    "url": "t3_2jt61v",
    "name": "IamA 14 year old BSc University student, AMA!"
  },
  {
    "url": "t3_2jtgh8",
    "name": "We are Jesse Thorn and Jordan Morris, hosts of the comedy podcast Jordan, Jesse Go!. (We do other stuff too.) Ask us anything!"
  },
  {
    "url": "t3_2jtq2k",
    "name": "We are Milo Aukerman, Bill Stevenson, Karl Alvarez, and Stephen Egerton of the band The Descendents, ask us anything!"
  },
  {
    "url": "t3_2jutt7",
    "name": "I am Sarah Elizabeth and I have narcolepsy. AMA!"
  },
  {
    "url": "t3_2jwydo",
    "name": "IamA Reporter who just got back yesterday from covering Ebola in Liberia, I'm working from home for 25 days, this is day one. AMA!"
  },
  {
    "url": "t3_2jxrbs",
    "name": "IamA Guy who built the Lego tower that was destroyed by Terry Crews on Brooklyn Nine-Nine. AMA!"
  },
  {
    "url": "t3_2jyr4d",
    "name": "IamA (Mayhem Miller) AMA!"
  },
  {
    "url": "t3_2k0iuo",
    "name": "We are Amber Nash and Lucky Yates AKA Pam and Krieger from Archer, were also both ensemble members at an awesome comedy theatre: Dads Garage, ask us anything!"
  },
  {
    "url": "t3_2k7kuu",
    "name": "We are the Star Citizen FPS Team, Ask us anything!"
  },
  {
    "url": "t3_2k7s4p",
    "name": "I'm Amanda Cerny. Playmate, Viner, Actress and star of the new FartBarf music video. Ask Me Anything!"
  },
  {
    "url": "t3_2k7yzl",
    "name": "IAMA former Royal Marine Commando who got addicted to crystal meth and worked for the Hong Kong triads. Chris Thrall, author of Eating Smoke, AMA!"
  },
  {
    "url": "t3_2kai9b",
    "name": "We are PhD students at Harvard Medical School here to answer your questions about biology, biomedical research, and graduate school. Ask us anything!"
  },
  {
    "url": "t3_2karu6",
    "name": "IamA 28-year veteran of the Internal Revenue Service  having left IRS, I am free now to reveal how the agency is failing in its mission to serve the American people and have just written a 67-page open letter to Congress on that subject. AMAA!"
  },
  {
    "url": "t3_2kb5ir",
    "name": "I am Lindsay Elyse, professional cosplayer. AMA!"
  },
  {
    "url": "t3_2kerur",
    "name": "Iam Emily Quinn, and I'm intersex. Happy Intersex Awareness Day! I just 'came out' on MTV and I also work on Adventure Time. AMA!"
  },
  {
    "url": "t3_2khs96",
    "name": "IamA guy that was on Barney, AMA!"
  },
  {
    "url": "t3_2ki5rd",
    "name": "Hi, I'm Eliza Coupe, actress. You might know me from Happy Endings. My latest show is called Benched on USA network. AMA!"
  },
  {
    "url": "t3_2kibag",
    "name": "IamA Syrian Refugee in the Netherlands. AMA!"
  },
  {
    "url": "t3_2kkjl1",
    "name": "I am Giles Coren. Million Dollar Critic. AMA."
  },
  {
    "url": "t3_2kkpbu",
    "name": "IamA 19 Year Old With a rare Skin Condition Called Epidermolytic Hyperkeratosis! AMA!"
  },
  {
    "url": "t3_2kkzcv",
    "name": "Hello again..! i do the webcomic Subnormality, as well as a column at Cracked.com, and also a new book that is like a where's waldo book but with jesus instead of waldo which i am sure you will not have any questions about. ASK ME THINGS."
  },
  {
    "url": "t3_2kle5p",
    "name": "Joey McIntyre. AMA."
  },
  {
    "url": "t3_2klya9",
    "name": "I am UTOPIA on FOX's Libertarian Rob, AMA!"
  },
  {
    "url": "t3_2kyt83",
    "name": "IamA 21 year old male with a hormone disorder that started puberty 1 year ago. AMA!"
  },
  {
    "url": "t3_2l0m46",
    "name": "IamA board certified hospice and palliative medicine physcian, AMA!"
  },
  {
    "url": "t3_2l1e78",
    "name": "IamA resident of a small town in Hawaii where an active lava flow is passing through! AMA!"
  },
  {
    "url": "t3_2l22ho",
    "name": "We are David Choe, Asa Akira and friends - DVDASA (Video AMA!) - Ask Us Anything."
  },
  {
    "url": "t3_2l3jre",
    "name": "I risked, my career, my life savings, investor money and my personal relationship(s) to start a company because I passionately believe it can change sports safety. AMA"
  },
  {
    "url": "t3_2l4xq4",
    "name": "IAMA 17 year old who was just declared cancer free after several months of chemotherapy! Ask me anything!"
  },
  {
    "url": "t3_2l71g6",
    "name": "Lisa Kudrow, Comeback over here. AMA."
  },
  {
    "url": "t3_2l9uzj",
    "name": "We are Canadian rock band Billy Talent! ASK US ANYTHING."
  },
  {
    "url": "t3_2la5s7",
    "name": "IamA NASA Bed Rest Research Subject. I'm lying in bed for 70 days FOR SCIENCE...and $18k! AMA!"
  },
  {
    "url": "t3_2lbc07",
    "name": "Ovulations! I'm Jimmy Wong AKA Ted from Video Game High School. AMA"
  },
  {
    "url": "t3_2ldfs3",
    "name": "Iama Vacuum Repair Technician and this is the 1 year anniversary AMA! Thanks, Reddit!"
  },
  {
    "url": "t3_2lec8c",
    "name": "I am ytcracker, hacktivist and de facto bard of the internet underworld, shamelessly slanging my new project, AMA."
  },
  {
    "url": "t3_2lhkg5",
    "name": "IamA Former Army Paratrooper. I served with the 173rd Airborne during OEF VIII and fought in the Battle of Wanat. Some of our guys were featured in Restrepo, Korengal and the new one The Last Patrol AMA"
  },
  {
    "url": "t3_2li4jx",
    "name": "We're the team that designed and built Orion, NASA's next generation spacecraft. Ask us anything."
  },
  {
    "url": "t3_2li85z",
    "name": "IamA (Parks &amp; Rec writer, twitter comedian, author &amp; Jew MEGAN AMRAM) AMA!"
  },
  {
    "url": "t3_2lif36",
    "name": "I'm Sloane, I used to work for BangBros, now I work for MetArt! I'm behind the scenes in the porn industry. Ask me anything! And I mean anything..."
  },
  {
    "url": "t3_2lkrgn",
    "name": "I'm Andrew Sheerin, I designed the 'War on Terror' boardgame a few years back that got siezed by the police and generated death threats. Luckily, my follow-up game is about a safer topic - religion. AMA!"
  },
  {
    "url": "t3_2lodaw",
    "name": "I am an American teenager living in Ramallah, Palestine. AMA"
  },
  {
    "url": "t3_2lp10x",
    "name": "IAMA director of IRON SKY THE COMING RACE and just released a promo with Hitler riding T-Rex! I'm here with producer and other people behind the madness -- Ask Us Anything!"
  },
  {
    "url": "t3_2lp7jq",
    "name": "IamA American Football Referee... AMA!"
  },
  {
    "url": "t3_2lqgp5",
    "name": "I am Russell Szczepanik I was a RSO who flew the SR-71 in missions. AMA!"
  },
  {
    "url": "t3_2lrpeh",
    "name": "I Am A Brain Injured Girl Recovering From Post Concussive Syndrome. Ask Me Anything!"
  },
  {
    "url": "t3_2lsncy",
    "name": "I have been travelling the world full time for the last five years, working from my laptop. AMA!"
  },
  {
    "url": "t3_2lvggo",
    "name": "I am David Hayter v/o actor, writer, X-men 1 and 2, Watchmen, Solid Snake, etc... AMA!"
  },
  {
    "url": "t3_2lyn49",
    "name": "I am a water economist. AMA on water issues anywhere on earth, now or in the future!"
  },
  {
    "url": "t3_2lz7ni",
    "name": "IamA Rob Paulsen, Voice of Donatello, Yakko Warner, and Pinky, AMA!"
  },
  {
    "url": "t3_2m2wkb",
    "name": "IamA Former Capitol Hill &amp; Presidential Campaign staffer. Back to give you the behind the curtain look at last Tuesday's election, what it means and what it doesn't mean, and what's ahead in 2016. AMA!"
  },
  {
    "url": "t3_2m6ny4",
    "name": "I get paid by the Communist Party to party with Chinese rockstars AMA"
  },
  {
    "url": "t3_2m6rjt",
    "name": "We are a dev team from IBM (many of us formerly UrbanCode), ask us anything!"
  },
  {
    "url": "t3_2m7k9a",
    "name": "I am Bill Corbett, actor / writer / comedian from RiffTrax.com and Mystery Science Theater 3000, plus author of new comic book SUPER-POWERED REVENGE CHRISTMAS. Go 'head on, AMA!"
  },
  {
    "url": "t3_2mb2sm",
    "name": "IamA Private Jet Pilot, flying the rich and famous. AMAA..."
  },
  {
    "url": "t3_2mbvqa",
    "name": "I am Howie Mandel. Deal With It tonight on TBS at 9 pm et. AMA."
  },
  {
    "url": "t3_2me040",
    "name": "I am Jonathan Holmes, new Editor in Chief of Destructoid: AMA!"
  },
  {
    "url": "t3_2mgnby",
    "name": "Hi, Im travelling to EVERY single country in the world in a single UNBROKEN JOURNEY, without airplanes. Ask me anything!"
  },
  {
    "url": "t3_2mh9g1",
    "name": "I am Gary Hoover, serial entrepreneur - I founded BOOKSTOP (forerunner to Barnes &amp; Noble), Hoovers.com, and live in my own 56,000 book personal reference library. Ask me anything!"
  },
  {
    "url": "t3_2mo2d5",
    "name": "I'm Marques Brownlee (aka MKBHD) and I make tech videos on YouTube. AMA!"
  },
  {
    "url": "t3_2msl96",
    "name": "We are Beamdog, developers of Baldur's Gate I &amp; II: Enhanced Edition and the recently released Icewind Dale: Enhanced Edition. Ask Us Anything!"
  },
  {
    "url": "t3_2munat",
    "name": "I am a 3rd shift convenient store clerk who has had little sleep over the past 3 days. AMA! And yes, I mean absolutely ANYTHING!"
  },
  {
    "url": "t3_2mw5ko",
    "name": "We are working on flight control and science operations for Rosetta, now orbiting comet 67P, and Philae, which landed on the comet surface last week. Ask us Anything! AMA!"
  },
  {
    "url": "t3_2n02lt",
    "name": "IamA data recovery engineer. I get files from busted hard drives, SSDs, iPhones, whatever else you've got. AMAA!"
  },
  {
    "url": "t3_2n33qm",
    "name": "I was born with multiple congenital limb deficiencies (missing bones in both hands &amp; legs) which resulted in many surgeries and left foot amputation. I have yet to find something that I want to do but can't!! AMA"
  },
  {
    "url": "t3_2n68sz",
    "name": "I have a very rare disease that causes my skin to be extremely fragile. AMA!"
  },
  {
    "url": "t3_2n83rg",
    "name": "IamA cancer survivor with a mutated gene CDH1, no stomach, and a LONG list of other ailments. AMA!"
  },
  {
    "url": "t3_2na0tl",
    "name": "IamA (The Director of The Grandmas Smoking Weed Video) AMA!"
  },
  {
    "url": "t3_2nallc",
    "name": "Hi, I'm Zane Lamprey and I drink and travel the world for a living on TV, AMA"
  },
  {
    "url": "t3_2nbka3",
    "name": "Hey, I'm Ben Ingram. Somehow, I won the Jeopardy! Tournament of Champions. AMA!"
  },
  {
    "url": "t3_2necex",
    "name": "I am Joel Hodgson, creator of Mystery Science Theater 3000, why don't you come at me?"
  },
  {
    "url": "t3_2nf5ed",
    "name": "We are Kari Byron and Tory Belleci back on reddit again AUA!"
  },
  {
    "url": "t3_2nhhd8",
    "name": "We are comet scientists and engineers working on Philae and Rosetta. We just triple-landed a robot lab on a comet. Ask us Anything!"
  },
  {
    "url": "t3_2nivft",
    "name": "I am Tommy Tallarico - Video game composer on 300 games, Guinness World Record holder, creator of the 13 year world touring Video Games Live show, hosted &amp; co-produced 3 TV shows, producing BT's next album &amp; tour, cousin of Steven Tyler: AMA!"
  },
  {
    "url": "t3_2npmvr",
    "name": "IAmA man that has spent my entire life in obesity. I've lost 295 lbs, 180 of which was over the last year and change. AMA"
  },
  {
    "url": "t3_2npvx3",
    "name": "IamA 15 year old Boy who was born with one foot facing completely backwards, AMA!"
  },
  {
    "url": "t3_2ns2tb",
    "name": "I am Ferguson Public Library Director in Ferguson, MO. AMA!"
  },
  {
    "url": "t3_2nue7a",
    "name": "I am the FIRST (and ONLY) person to visit EVERY COUNTRY in the world WITHOUT FLYING. I now live on a private island in the Caribbean. ASK ME ANYTHING!!!"
  },
  {
    "url": "t3_2nv95v",
    "name": "Hi reddit! I'm actor Doug Jones (HELLBOY, PAN'S LABYRINTH, SILVER SURFER) and soon to be NOSFERATU...joined by director David Fisher. AUA!"
  },
  {
    "url": "t3_2nxwkb",
    "name": "A few days ago, CERN launched an Open Data Portal to publicly share data from the Large Hadron Collider. We are some of the scientists behind this project, working to make science more open globally. Ask Us (Almost) Anything about open data, open access, data preservation, big data and open science!"
  },
  {
    "url": "t3_2ny4ur",
    "name": "We are Robin Ince and Brian Cox from The Infinite Monkey Cage. Ask us anything!"
  },
  {
    "url": "t3_2o1il1",
    "name": "I am Mikko Hypponen, a computer security expert. Ask me anything!"
  },
  {
    "url": "t3_2o2k13",
    "name": "I am Mike McDonald, a very lucky poker player. Ask me anything"
  },
  {
    "url": "t3_2o2pfb",
    "name": "IamA First Person Weapons Animator at DICE. AMA!"
  },
  {
    "url": "t3_2o630a",
    "name": "Okay, it's open season. Michael C. Hall here. AMA."
  },
  {
    "url": "t3_2oav69",
    "name": "IamA DJ Premier and Royce Da 5'9 are PRhyme - Ask Us Anything"
  },
  {
    "url": "t3_2ogouw",
    "name": "I am US Olympic gymnast Samuel Mikulak. I started a healthy energy drink company, MatBros. AMA! :)"
  },
  {
    "url": "t3_2ogvlt",
    "name": "IamA male, dog groomer and it's a slow day. AMA!"
  },
  {
    "url": "t3_2ohb80",
    "name": "IamA 911 dispatcher AMA!"
  },
  {
    "url": "t3_2ohoci",
    "name": "IamA son of Ukrainian army soldier, who spent three moths on front line, while he is on vacation he can answer almost any question AMA!"
  },
  {
    "url": "t3_2oij74",
    "name": "IamA male burlesque performer AMA! [NSFW, obviously]"
  },
  {
    "url": "t3_2ojt00",
    "name": "Hi, I'm cycling around the world. So far 19000 miles and 4 years on the road. Ask me anything!"
  },
  {
    "url": "t3_2olhrd",
    "name": "IamA former member of a failed 90's BoyBand. AMA!"
  },
  {
    "url": "t3_2onhua",
    "name": "I'm a FedEx package handler who touches a lot of your stuff. AMA"
  },
  {
    "url": "t3_2orb5j",
    "name": "Iam Elyot GrantMIT dropout, game developer, Prismata founder, and destroyer of our company mailing list. My story became the most upvoted submission in history on /r/bestof after reddit completely changed my life. AMA"
  },
  {
    "url": "t3_2oryap",
    "name": "I am Alex Borstein (Lois from Family Guy &amp; Dawn from Getting On) Time for my AMA!"
  },
  {
    "url": "t3_2os94f",
    "name": "I am Billy Corgan of the Smashing Pumpkins and Madame Zuzu's. AMA."
  },
  {
    "url": "t3_2ovg4x",
    "name": "IamA wildlife photographer in the Peruvian Amazon. I've found all sorts of cool stuff, most recently a predatory glow worm. AMA!"
  },
  {
    "url": "t3_2ozjms",
    "name": "I am Lil Dicky, I'm a professional rapper, and I go on a lot of tinder dates. Ask me anything."
  },
  {
    "url": "t3_2p3lzc",
    "name": "Were 3 female computer scientists at MIT, here to answer questions about programming and academia. Ask us anything!"
  },
  {
    "url": "t3_2p4eoz",
    "name": "Hey, this is Max Carver, you might know me from TEEN WOLF or THE LEFTOVERS. My latest movie is called ASK ME ANYTHING, so ask me anything!"
  },
  {
    "url": "t3_2p52pr",
    "name": "IamA Geoff Keighley, producer of The Game Awards, AMA!"
  },
  {
    "url": "t3_2p6e25",
    "name": "I'm the thug life magician. AMA"
  },
  {
    "url": "t3_2pbj90",
    "name": "IamA Active Duty Soldier who likes to draw caricature. Im doing a 30 day challenge to draw as many people as I can. AMA!"
  },
  {
    "url": "t3_2peu84",
    "name": "I'm co-founder of Wikipedia and with my new startup, Infobitt, I want to make a Wikipedia for the news. Ask me anything!"
  },
  {
    "url": "t3_2pgs93",
    "name": "IamAn author who was cyber-harassed and physically threatened by a NY TIMES staffer for unveiling an alleged NY Times impropriety. AMA!"
  },
  {
    "url": "t3_2ps7gr",
    "name": "Professional LEGO Company, Bright Bricks here again. Why not Ask Us Anything about our lives as professional LEGO builders"
  },
  {
    "url": "t3_2psniu",
    "name": "I am Andre H Arruda, Comedian, Actor, Disability Advocate who happens to be under 4 feet tall and drives a mobility scooter to get around. AMA I want to have an open discussion on Disability. This is your Chance to ask a 3 foot something man ANYTHING!"
  },
  {
    "url": "t3_2ptunz",
    "name": "Emmy Rossum here...you may know me as Fiona Gallagher from Shameless. AMA!"
  },
  {
    "url": "t3_2pz9sd",
    "name": "I was a female undercover investigator on factory farms"
  },
  {
    "url": "t3_2q0a78",
    "name": "I am Stuart Ashens AKA Ashens, YouTube-based comedy human. AMA"
  },
  {
    "url": "t3_2q319u",
    "name": "Hi, Im Nigel McGuinness, Retired pro wrestler. Now I'm an editor, film maker, producer, writer, commentator, poker player, magician, actor, philanthropist, part-time dyslexic, explorer AND founder of LA Fights. AMA!!!"
  },
  {
    "url": "t3_2q6z5i",
    "name": "I am a 24 year old former stock broker. I left that side of the industry for ethical reasons. AMA"
  },
  {
    "url": "t3_2q70gk",
    "name": "Hi, Scott Foley here. You might know me from my cute pictures with puppies. I'm also an actor &amp; director, and my new film, LET'S KILL WARD'S WIFE, is available today. AMA!"
  },
  {
    "url": "t3_2q7wf2",
    "name": "IamA 28 year old comedian dying of cancer. Trying to inspire people to have more fun with life. Raw and uncut. AMA!"
  },
  {
    "url": "t3_2qamnf",
    "name": "IamA Synesthete - I taste words and voices. AMA!"
  },
  {
    "url": "t3_2qdklg",
    "name": "IamA a car accident claims adjuster for a major insurance company AMA!"
  },
  {
    "url": "t3_2qel1b",
    "name": "IamA Telemarketing Manager and we bother you during dinner! AMA!"
  },
  {
    "url": "t3_2qesko",
    "name": "I am a trans man with a functioning penis, balls, and vagina. AMA!"
  },
  {
    "url": "t3_2qi4sd",
    "name": "IAMA ex male pornstar"
  },
  {
    "url": "t3_2qiqax",
    "name": "IamA Overnight Crisis Counselor for Teens; AMA!"
  },
  {
    "url": "t3_2qjwv9",
    "name": "IamA 22 year old vagabond, working odd jobs and traveling/hitchhiking the US and beyond, AMA!"
  },
  {
    "url": "t3_2ql4mt",
    "name": "IamA 94 year old WWII veteran and Bataan Death March survivor, AMA!"
  },
  {
    "url": "t3_2qnr11",
    "name": "IamA girl who was raised in an isolated Hare Krishna community. [Casual Christmas.] AMA!"
  },
  {
    "url": "t3_2qp7yx",
    "name": "We are a student team that will grow lettuce on Mars AUA!"
  },
  {
    "url": "t3_2qtrkz",
    "name": "I am an oilfield worker, AMA."
  },
  {
    "url": "t3_2r1b55",
    "name": "IamA Father of my dead son who was poisoned by me ex-fiance with a large amount of methamphetamine... I'm about to be interviewed. AMA"
  },
  {
    "url": "t3_2r7e96",
    "name": "IamA Parts and Service Manager at a Nissan Dealership AMA!"
  },
  {
    "url": "t3_2r7sli",
    "name": "IamA passenger in a car for the next 14 hours! Ask me literally anything!"
  },
  {
    "url": "t3_2r8bsc",
    "name": "IamA Federal Correctional Officer at one of the most dangerous institutions in the USA AMA!"
  },
  {
    "url": "t3_2r8few",
    "name": "I am the daughter that surprised my parents with a date night! I'm helping them answer any questions you have about local dairy farming! AMA! :)"
  },
  {
    "url": "t3_2r9lzw",
    "name": "IamA 21 year old girl suffering from an incurable and sometimes untreatable condition called POTS (postural orthostatic tachycardia syndrome) uodates and more, AMA!"
  },
  {
    "url": "t3_2rbbdn",
    "name": "Sexpert and the CEO of Ohhh Canada, a sexy things &amp; lingerie biz based out of Toronto - AMA!"
  },
  {
    "url": "t3_2rfht6",
    "name": "When you die, I help decide if you will donate your eyes and/or tissues. IamA Anatomical Donation Coordinator. AMA!"
  },
  {
    "url": "t3_2rfkbh",
    "name": "I am Amber Benson, actor/writer/goofball/Lesbian witch from BUFFY THE VAMPIRE SLAYER. AMA!"
  },
  {
    "url": "t3_2rg8q3",
    "name": "I am Troy Baker. You might recognize my voice from THE LAST OF US, BioShock Infinite, Call of Duty, Far Cry, Arkham Origins... the most familiar voice you've never heard. AMA!"
  },
  {
    "url": "t3_2riq1b",
    "name": "IamA former Walt Disney World fur (non-speaking, non-wig wearing) character performer. AMA!"
  },
  {
    "url": "t3_2rj3sy",
    "name": "IamA travel writer who has been traveling the world full time since 2006 on $50/day. AMA!"
  },
  {
    "url": "t3_2rj5vt",
    "name": "I am Jon Murray, Creator of MTV's The Real World &amp; The Challenge. Ask Me Anything!"
  },
  {
    "url": "t3_2rlbsu",
    "name": "US Marine. Was deployed to Afghanistan, was in multiple firefights, and was hit by a 60lb IED. AMA"
  },
  {
    "url": "t3_2rmmo6",
    "name": "Fred Armisen &amp; Carrie Brownstein! Awards for anyone up on the west coast! Ask us anything!"
  },
  {
    "url": "t3_2ro2qs",
    "name": "Scott Aukerman, host of Comedy Bang! Bang!, producer/director Between Two Ferns"
  },
  {
    "url": "t3_2ryf1q",
    "name": "IamA man who just received a uvulaplasty (removal of the little thing that hangs down in the back of your throat). Ask me anything!"
  },
  {
    "url": "t3_2rzln8",
    "name": "IamA Mary Gibbs! Voice of Boo from Monsters, Inc. AMA!"
  },
  {
    "url": "t3_2s11zp",
    "name": "IamA Australian Porn Star, Escort and Geek, Lucie Bee! AMA!"
  },
  {
    "url": "t3_2s2gqf",
    "name": "IAMA man with boobs (who had them removed) AMA!"
  },
  {
    "url": "t3_2s6oe5",
    "name": "IamA long time Tim Horton's Supervisor, AMA!"
  },
  {
    "url": "t3_2s792p",
    "name": "IamA Professional esports Commentator dmbrandon. AMA! &lt;3"
  },
  {
    "url": "t3_2s8tgu",
    "name": "IamA terrible artist who has sold 18,794 pieces of original art. AMA!"
  },
  {
    "url": "t3_2s9xbx",
    "name": "IamA Sufferer of Hyperhidrosis (I sweat too much!) Looking to spread some awareness of this 'silent disability.' Ask Me Anything!"
  },
  {
    "url": "t3_2sbv3s",
    "name": "I am Michael Cthulu and Discovery gave me a TV show and I make giant swords! Hello!"
  },
  {
    "url": "t3_2sf9qi",
    "name": "I am Anthony Trucks, Former Oregon Football Player and 3 year NFL Vet. Go Ducks! AMA!"
  },
  {
    "url": "t3_2snlrp",
    "name": "Hi, I'm Ari Shaffir. I'm a comedian and a part time degenerate. AMA"
  },
  {
    "url": "t3_2sobnb",
    "name": "We are the cast and creators of Portal 2: The (Unauthorized) Musical and lots of other geeky theatre. AUA!"
  },
  {
    "url": "t3_2spmgu",
    "name": "My climbing partners and I were kidnapped and held hostage for a week before we conspired to throw a guy off a cliff to escape. AMA!"
  },
  {
    "url": "t3_2sqz9y",
    "name": "IamA Home Inspector; AMA!"
  },
  {
    "url": "t3_2sr8r1",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_2srbrx",
    "name": "IamA Senior Manager at a Target Store in Canada... AMA!"
  },
  {
    "url": "t3_2su16i",
    "name": "I am taking on UK Prime Minister David Cameron in this year's General Election - part 2. AMA!"
  },
  {
    "url": "t3_2sxqrl",
    "name": "I am an Air Traffic Controller in the UK - AMA !"
  },
  {
    "url": "t3_2t0efa",
    "name": "I am a UPS Store Manager! I've noticed quite a few AMAs for the drivers, but it seems nobody from store-side mustered up the courage to do one!!"
  },
  {
    "url": "t3_2t6xyh",
    "name": "Hi, we're The Lucas Bros. We're comedians, lovers of philosophy and die-hard Bret Hart fans. AUA!"
  },
  {
    "url": "t3_2t7k91",
    "name": "We are Jay Baruchel and Eric Andre from the new FXX show MAN SEEKING WOMAN. AUA!"
  },
  {
    "url": "t3_2t8qqj",
    "name": "IamA Legally blind woman that uses amazing new tech to see. AMA!"
  },
  {
    "url": "t3_2tat2j",
    "name": "IamA The Promoters/Producers of The Governors Ball Music Festival, NYC's Marquee Music Festival, AMA!"
  },
  {
    "url": "t3_2tbe5f",
    "name": "I am Donny Osmond. AMA!"
  },
  {
    "url": "t3_2tcicc",
    "name": "IamA deadmau5 AMA!"
  },
  {
    "url": "t3_2teiql",
    "name": "With Valentine's Day coming up IamA employee at a wholesale florist AMA about which flowers to avoid and which flowers to get and any other questions you have."
  },
  {
    "url": "t3_2tjjgb",
    "name": "IAMA Bouncer who has been shot at, tazed, stabbed, maced, punched, and clawed by enormous women. AMA!"
  },
  {
    "url": "t3_2tmtao",
    "name": "Hey Reddit, I was a female police officer in THE 'Bohemia', New York in 1991. Feel free to Ask me Anything!"
  },
  {
    "url": "t3_2tn4hw",
    "name": "IamA 23yr male that completed a 32 day sleep study and got paid ~9k"
  },
  {
    "url": "t3_2tqma7",
    "name": "I moved to Japan, grew and sold marijuana until I was caught AMA!"
  },
  {
    "url": "t3_2tsnx8",
    "name": "I Have hunted and fished the Pacific Northwest for 17 years! Ask me anything!"
  },
  {
    "url": "t3_2tuiuk",
    "name": "I'm Richard Kirkendall, founder &amp; CEO of Namecheap (The EFF-supporting registrar), AMA"
  },
  {
    "url": "t3_2tvrr4",
    "name": "Im Dan Mangan. I play Dan Mangan in the band Dan Mangan + Blacksmith. Ask me anything (except my lurker username)."
  },
  {
    "url": "t3_2tycmo",
    "name": "IamA Marketing Specialist in Coca-Cola, Russia. AMA about Coke or work in Russia!"
  },
  {
    "url": "t3_2u31xk",
    "name": "IamA audio tech and monitor engineer who has worked for bands such as Flogging Molly, Whitechapel and Amon Amarth AMA!"
  },
  {
    "url": "t3_2uhn8t",
    "name": "IAMA Palm Tree in the Super Bowl XLIX Halftime Performance featuring Katy Perry. AMA!"
  },
  {
    "url": "t3_2ujvla",
    "name": "I am model and actress Charlotte McKinney, you might recognize me from yesterday's Super Bowl ad for Carl's Jr... AMA!"
  },
  {
    "url": "t3_2upxce",
    "name": "IamA 19 year old girl who may be going blind. AMA!"
  },
  {
    "url": "t3_2uq0wx",
    "name": "IamA a General Manager at a Burger King AMA!"
  },
  {
    "url": "t3_2urebm",
    "name": "IamA firefighter AMA!"
  },
  {
    "url": "t3_2usg8q",
    "name": "IamA Record Store Owner, back by somewhat popular demand AMA!"
  },
  {
    "url": "t3_2utvmu",
    "name": "I am Ryan Bell, the pastor that lived a year as an atheist AMA!"
  },
  {
    "url": "t3_2uw3rl",
    "name": "Hi, I grew up in a rafting family, and was raised by a bunch of river guides. My Dad has been an outfitter in CA, ID and OR since the '70s. Today, my older brother is an outfitter in OR, I handle the CA operation, &amp; my younger brother helps out with ID. AMA about guiding, rivers, whitewater, AMA!"
  },
  {
    "url": "t3_2uw4z7",
    "name": "It's Net Neutrality Fun time! We are Public Knowledge, open internet advocates here to discuss Title II, Net Neutrality, Rural Broadband and more! Ask us anything!"
  },
  {
    "url": "t3_2ux8x8",
    "name": "I am Mila Kunis, AMAA."
  },
  {
    "url": "t3_2v352u",
    "name": "IamA a cook currently in Antarctica.. AMA!"
  },
  {
    "url": "t3_2v48qp",
    "name": "IamA Lazaro Dubrocq (One of the kids that read to George Bush on 9/11) AMA!"
  },
  {
    "url": "t3_2v5gcm",
    "name": "IamA Las Vegas stripper at a major club. AMA!"
  },
  {
    "url": "t3_2vc4r2",
    "name": "I'm Irvine Welsh, author of TRAINSPOTTING, and I'm here to discuss the sex lives of siamese twins (and more). AMA!"
  },
  {
    "url": "t3_2vfi0g",
    "name": "IamA 3M YouTuber: Grant Thompson - The King of Random AMA!"
  },
  {
    "url": "t3_2vfjzx",
    "name": "IamA manager of an adult store! AMA!"
  },
  {
    "url": "t3_2vg91m",
    "name": "I am Chadwick Stokes, singer of Dispatch &amp; State Radio, founder of Calling All Crows. Ask Me Anything."
  },
  {
    "url": "t3_2vh5y1",
    "name": "IamA Japanese man who wrote a book about inter-cultural dating in Japan, featuring 15 people from 8 countries, including LGBT people. AMA! AMA!"
  },
  {
    "url": "t3_2vjk82",
    "name": "Iama 27yo Redditor who's been traveling the world for 8 years figuring out what to do with his life: teaching English, organic farms, web design, work exchange, painting murals, leading yoga, hitchhiking, filmmaking.. Thanks to my years involved in online community, something has finally clicked AMA"
  },
  {
    "url": "t3_2vju7x",
    "name": "We are the Multidisciplinary Association for Psychedelic Studies (MAPS), a non-profit research and educational organization working to legitimize the scientific, medical, and spiritual uses of psychedelics and marijuana. Ask us anything!"
  },
  {
    "url": "t3_2vkbi2",
    "name": "I am Ron Garan. I've lived in space and on the ocean floor. I just launched a book called The Orbital Perspective - Lessons in Seeing the Big Picture from a Journey of 71 Million Miles connecting space to Earth AMA"
  },
  {
    "url": "t3_2vnr6s",
    "name": "IamA single guy who travels the USA interviewing couples who are madly in love with each other to figure out what makes the happiest, longest-lasting relationships different from all the rest AMA!"
  },
  {
    "url": "t3_2vogsl",
    "name": "I am Matt Nathanson aka Guy who jokingly played first chords of 'You Shook Me All Night Long' and crowd takes it for the entire song. AMA!"
  },
  {
    "url": "t3_2vow6x",
    "name": "I am the creator of Twitch Plays Pokemon AMA!"
  },
  {
    "url": "t3_2vrqsl",
    "name": "I'm Kim Haar Jrgensen, Game Director of Interstellar Marines. AMA!"
  },
  {
    "url": "t3_2vufav",
    "name": "F-List Actor here. I gave Tina Fey a high five, and flashed my tits on Workaholics. AMA!"
  },
  {
    "url": "t3_2vzx7j",
    "name": "I am Eric Whitacre, composer, conductor, 5th member of Depeche Mode (application pending). AMA!"
  },
  {
    "url": "t3_2w3bge",
    "name": "I am Matthew Reilly, author of THE GREAT ZOO OF CHINA and other fun books AMA!"
  },
  {
    "url": "t3_2w72o7",
    "name": "So I sold a Reddit reply to Warner Brothers a few years back: My first novel Acadia comes out today. AMA!"
  },
  {
    "url": "t3_2w8gre",
    "name": "Hey, I'm Nick Kroll. I got drunk this morning and I'm ready to answer your questions about The Kroll Show, AMA!"
  },
  {
    "url": "t3_2w9bzp",
    "name": "I(was)A Stripper. AMA!"
  },
  {
    "url": "t3_2wb0y8",
    "name": "We were in Netflix's 'Marco Polo'. A Chinese soldier &amp; two 'Mongolian' concubines. AMA!"
  },
  {
    "url": "t3_2wbkhw",
    "name": "Travis Fimmel here. Cherry picker, dairy farmer, you may know me as Ragnar on VIKINGS. AMA."
  },
  {
    "url": "t3_2wbq9f",
    "name": "Hello, world! This is CS50, with David J. Malan, Rob Bowden, Zamyla Chan, Jason Hirshhorn, et al."
  },
  {
    "url": "t3_2wcptg",
    "name": "Hey. Im Keiko Agena. (Lane Kim from Gilmore Girls) AMA!"
  },
  {
    "url": "t3_2wcu7j",
    "name": "IamA celebrity shrink AMA!"
  },
  {
    "url": "t3_2wf3ol",
    "name": "IamA 14 year old boy from Saudi Arabia, AMA!"
  },
  {
    "url": "t3_2wgj6n",
    "name": "Chris Parnell, thespian. AMA."
  },
  {
    "url": "t3_2wgos5",
    "name": "AMA. Former police officer of a big city."
  },
  {
    "url": "t3_2wgqx2",
    "name": "IamA: We're the band Murder By Death! AMA!"
  },
  {
    "url": "t3_2whrau",
    "name": "We are Matthew Inman, Elan Lee, and Shane Small, creators of the card game Exploding Kittens. Ask us anything."
  },
  {
    "url": "t3_2wkbs8",
    "name": "I am Craig Robinson. AMA!"
  },
  {
    "url": "t3_2wlh9b",
    "name": "Reggie Watts: concerning love, and the future of Mankind. AMA."
  },
  {
    "url": "t3_2wnj07",
    "name": "We are native speakers of Esperanto, a constructed language"
  },
  {
    "url": "t3_2wqdt3",
    "name": "I was made paraplegic by cancer in 2014. Now, I am cancer free, and have (mostly) overcome my paralysis! AMA about my ongoing recovery!"
  },
  {
    "url": "t3_2wrx5r",
    "name": "I am Bassem Youssef, the Jon Stewart of the Middle East. AMA!"
  },
  {
    "url": "t3_2wu0ky",
    "name": "I Am A 13-Year-Old Stage IV Osteosarcoma Fighter. AMA!"
  },
  {
    "url": "t3_2wzg62",
    "name": "IamA man, that was dead twice, about 2 minutes at a time, AMA!"
  },
  {
    "url": "t3_2wzm71",
    "name": "I am Allen Leech, actor - you might know me as Tom Branson on DOWNTON ABBEY. AMA!"
  },
  {
    "url": "t3_2x1tay",
    "name": "IamA Detective who spent the last two years working undercover AMA!"
  },
  {
    "url": "t3_2x2trq",
    "name": "IamA (Animal Control Officer working for a coastal city in California) AMA!"
  },
  {
    "url": "t3_2x4mf9",
    "name": "We are Colossal Order, the team behind Cities: Skylines, a game close to launch that just released information about modding - AMA!"
  },
  {
    "url": "t3_2x4u7h",
    "name": "I'm the guy that owns 30,000 snakes and is venturing out on his own to help bring educational and entertaining wildlife TV shows back by filming a privately funded animal adventure in Africa. AMA!"
  },
  {
    "url": "t3_2xd9n6",
    "name": "Hey Reddit my name is Greg West and I am the owner of Cornelsworld Reptile Caging in Canada and recent presenter on Dragon's Den AMA!"
  },
  {
    "url": "t3_2xgqg0",
    "name": "IamA a female animator AMA as I draw 50 portraits of Redditors over the next 48 hrs !"
  },
  {
    "url": "t3_2xhdm0",
    "name": "My name is Will Forte and I will answer ANYTHING you ask me. Part 2."
  },
  {
    "url": "t3_2xp2pn",
    "name": "IamA Hooters Girl AMA!"
  },
  {
    "url": "t3_2xpbz1",
    "name": "I am Iron Chef Alex Guarnaschelli. I'm also a judge on CHOPPED and a mentor on ALL-STAR ACADEMY which just premiered last night on the Food Network. AMA!"
  },
  {
    "url": "t3_2xq048",
    "name": "We are BIL, the un/conference that has grown from its 'humble roots' as a plan to crash TED: Reichart Von Wolfsheild (History Channel's Invention USA) Aubrey de Grey (SENS), Max Lugavere (Filmmaker), and Sabrina Williams, Michael Cummings, Cody Marx Bailey, &amp; Daniel Finfer (BIL)"
  },
  {
    "url": "t3_2xuhwx",
    "name": "IamA Jeff Rosenstock AMA! I do/did the things for Quote Unquote Records, Bomb The Music Industry!, Antarctigo Vespucci, The Arrogant Sons Of Bitches, Really Records and a lot more!"
  },
  {
    "url": "t3_2xuq2i",
    "name": "IamA Companion of Drizzt"
  },
  {
    "url": "t3_2xwk7u",
    "name": "IamA Allman Brothers Band biographer, Alan Paul, author of One Way Out. AMA about the ABB, blues and rock legends, guitars or even living in China!"
  },
  {
    "url": "t3_2xws1w",
    "name": "IamA Stanford trained sleep doctor, treated sleep conditions like apnea, insomnia, exploding head syndrome, restless legs syndrome, narcolepsy. AMA!"
  },
  {
    "url": "t3_2xyb7y",
    "name": "IAmA economist, legal theorist, and novelist David Friedman. You may have seen a picture of me playing WoW at a conference last week. AMA!"
  },
  {
    "url": "t3_2xz6nb",
    "name": "IamA Movie Theater Employee, and I've seen the dirty part of the movie business. AMA!"
  },
  {
    "url": "t3_2y0v6m",
    "name": "We are Roll7, an indie game studio based in London. This week, we launched OlliOlli2: Welcome to Olliwood on PlayStation Plus and were really excited about it! AMA!"
  },
  {
    "url": "t3_2y18i8",
    "name": "I am that dude that knocked out the tatted up jerk in 20 seconds. AMA!"
  },
  {
    "url": "t3_2y2baz",
    "name": "I am Jim O'Heir. You may know me as Garry / Jerry / Larry / Terry from PARKS &amp; RECREATION, and my new role is as Lenny in MIDDLE MAN. AMA!"
  },
  {
    "url": "t3_2y2zn2",
    "name": "We are actor Jason Isaacs and show co-creator Gideon Raff of DIG premiering tonight on USA Network - AUA!"
  },
  {
    "url": "t3_2y35kk",
    "name": "My name is Joe Torre, Electronic Music Producer from Philadelphia, PA AMA!"
  },
  {
    "url": "t3_2y5skh",
    "name": "Hi! I'm Trevor Moore from the Whitest Kids u' Know. I have my own hour special HIGH IN CHURCH that airs tonight at midnight on Comedy Central. AMA!!!!!"
  },
  {
    "url": "t3_2yc08y",
    "name": "Hi, Im travelling to EVERY single country in the world in a single UNBROKEN JOURNEY, without flight. Ask me anything!"
  },
  {
    "url": "t3_2yf40l",
    "name": "I gave my wife a kidney. Ask us anything."
  },
  {
    "url": "t3_2yjsut",
    "name": "IamA Voiceover guy who does those jobs no-one notices, like the voices in an elevator, oh and I live and work from a boat in England. AMA!"
  },
  {
    "url": "t3_2yxevh",
    "name": "I am Justin Kan, cofounder of Internet startups (Justin.tv, Twitch) and investor at Y Combinator. AMA!"
  },
  {
    "url": "t3_2yy5kn",
    "name": "I'm the Obama Impersonator with Kim Jong Un trending right now, otherwise known as Reggie Brown AMA !"
  },
  {
    "url": "t3_2z0tyc",
    "name": "IamA professional poker player. After nine years of grinding i finally won a couple of WSOP bracelets. George Danzer here, AMA!"
  },
  {
    "url": "t3_2z48z3",
    "name": "Hi, Im travelling to EVERY single country in the world in a single UNBROKEN JOURNEY, without flight. Ask me anything!"
  },
  {
    "url": "t3_2z6r42",
    "name": "I AM A 3 month post op girl with Crohn's disease and an ileostomy and no large intestines, AMA!"
  },
  {
    "url": "t3_2zc1l4",
    "name": "IamA (Deaf Guy) AMA!"
  },
  {
    "url": "t3_2zcahq",
    "name": "IMA bar owner in Dublin, Ireland on St.Paddys day."
  },
  {
    "url": "t3_2zcpnc",
    "name": "I am Norman Finkelstein, expert on the Israeli-Palestinian conflict. I think Netanyahu is a maniac. AMA"
  },
  {
    "url": "t3_2zdzik",
    "name": "Tommy Wiseau, creator of THE ROOM and the new TV show THE NEIGHBORS, available now on Hulu. AMA!"
  },
  {
    "url": "t3_2zgtit",
    "name": "I am Soren Johnson, designer/programmer of Offworld Trading Company and Civilization 4. AMA!"
  },
  {
    "url": "t3_2zj22g",
    "name": "I am a waver at Liberty Tax service, meaning I work four hours a day, everyday, dressed as a giant maple leaf dancing on the side of the road for minimum wage, AMA!"
  },
  {
    "url": "t3_2zsvrs",
    "name": "IamA 911 operator/dispatcher - AMAA!"
  },
  {
    "url": "t3_2zu1x7",
    "name": "I am a pearl harbor survivor and WWII veteran who flew B24s over Europe. AMA!"
  },
  {
    "url": "t3_2zwf56",
    "name": "I am an employee at McDonalds in Australia and have been for 4 years, across multiple stores, ask me anything!"
  },
  {
    "url": "t3_3006ux",
    "name": "IamA English Teacher in Japan who's taught everywhere and seen almost everything in 7 years AMA!"
  },
  {
    "url": "t3_300myo",
    "name": "In the past two years, Ive read 245 US congressional bills and reported on a staggering amount of corporate political influence. AMA."
  },
  {
    "url": "t3_305fg5",
    "name": "We are Jay Chandrasekhar, Paul Soter, Steve Lemme, Erik Stolhanske, and Kevin Heffernan of BROKEN LIZARD - AUA!"
  },
  {
    "url": "t3_306p0a",
    "name": "Ludacris is Ludaversal. AMAA."
  },
  {
    "url": "t3_30935p",
    "name": "I am a former undercover investigator who worked in factory farms, and am currently Investigations Manager for a national animal protection organization"
  },
  {
    "url": "t3_30b00p",
    "name": "IamA Female Afghanistan veteran and current anti-poaching advisor (poacher hunter) AMA!"
  },
  {
    "url": "t3_30fi90",
    "name": "Paul F. Tompkins here, to talk No, You Shut Up! and anything else."
  },
  {
    "url": "t3_30mu4c",
    "name": "IamA an author who took on the label of lbgt for a year, an experience that changed many of my views, AMA!"
  },
  {
    "url": "t3_30ptx6",
    "name": "I am Rob Hoegee, head writer for the soon to launch Thunderbirds are GO!. AMA!"
  },
  {
    "url": "t3_30qelz",
    "name": "Hi, my name is Thad David. I'm a former Marine Recon Sniper. I'm creating a mobile zombie game and came up with the idea while on a cargo ship securing the coast of Africa from pirates. Ask me anything."
  },
  {
    "url": "t3_311luo",
    "name": "IamA Toaster, AMA!"
  },
  {
    "url": "t3_31218b",
    "name": "Lamp. AMA!"
  },
  {
    "url": "t3_312ojs",
    "name": "I am Groot. AMA!"
  },
  {
    "url": "t3_313obn",
    "name": "I am Rich Koz, AKA Svengoolie, the host of MeTV's national horror movie show. AMA!"
  },
  {
    "url": "t3_316tx6",
    "name": "I am a vacuum repair technician and subject of the latest Upvoted podcast, The Surprisingly Complex Life Of A Vacuum Repairman, here with a special Spring Cleaning edition. AMA!"
  },
  {
    "url": "t3_317wt7",
    "name": "It's Lucky Yates and Amber Nash aka Krieger and Pam from Archer on FX!"
  },
  {
    "url": "t3_3182as",
    "name": "Im Harry Lloyd (the Rightful King of the Andals and the First Men) from Game of Thrones and The Theory of Everything. AMA!"
  },
  {
    "url": "t3_318o83",
    "name": "Actor Shane West here. You might know me from A Walk to Remember, ER, Nikita, and now WGN's Salem. AMA."
  },
  {
    "url": "t3_318y4c",
    "name": "Matthew Perry. Thomas Lennon. The Odd Couple. AUA."
  },
  {
    "url": "t3_31c0tu",
    "name": "We are Panos Panay and the Surface team at Microsoft. Earlier this week, we introduced Surface 3. AUA!"
  },
  {
    "url": "t3_31esm0",
    "name": "IamA 95 year old german women from a village in the Black Forest, and experienced Nazi Germany as a civilian. AMAA"
  },
  {
    "url": "t3_31g6qc",
    "name": "i am a don hertzfeldt... filmmaker: AMA"
  },
  {
    "url": "t3_31ijxd",
    "name": "IamA Volunteer Australian Wildlife shelter. I've rehabilitated and raised penguins, koalas, kangaroos, wallabys, possums, echidnas, albatross, sugar gliders and many more AMA!"
  },
  {
    "url": "t3_31ni52",
    "name": "We are Mark Paterson &amp; Tim Farrell, Archer animators and creators of the Archer Easter Egg Hunt. Ask Us Anything!"
  },
  {
    "url": "t3_31ny87",
    "name": "I am the CTO of Joyent, the father of DTrace and an OS kernel developer for 20 years. AMA!"
  },
  {
    "url": "t3_31qj3j",
    "name": "I am a police officer near St. Louis, MO - ask me anything."
  },
  {
    "url": "t3_31rvks",
    "name": "We are Alan Tudyk and PJ Haarsma. Ask us questions!"
  },
  {
    "url": "t3_31t6us",
    "name": "IamA girl who was born with short little t rex arms AMA!"
  },
  {
    "url": "t3_31v96m",
    "name": "I created a business in 3 days with Reddit's help, and now it's been 4 weeks and I'm quitting my software engineering job. AMA!"
  },
  {
    "url": "t3_31zlja",
    "name": "IamA professional male porn actor / director for a POV site. AMA!"
  },
  {
    "url": "t3_31zu3n",
    "name": "I'm a water economist. AMA on water shortages in California or water-related problems anywhere in the world!"
  },
  {
    "url": "t3_32603s",
    "name": "IAmA Vikings Expert Who Just Published A New Translation of the Norse Myths. AMA"
  },
  {
    "url": "t3_32ciu8",
    "name": "I am comedian and actor Kumail Nanjiani. You might know me as Dinesh from SILICON VALLEY, waiter / cell phone salesman from PORTLANDIA, Prismo from ADVENTURE TIME. AMA!"
  },
  {
    "url": "t3_32p2w4",
    "name": "Skype for Business team here from Microsoft. Ask us Anything!"
  },
  {
    "url": "t3_32pa8n",
    "name": "Hi, we're a band called Arkells. Happy to answer any questions about life in a band. Songs, lyrics gear, touring etc. Ask away!"
  },
  {
    "url": "t3_32qrh5",
    "name": "DAREDEVIL dropped a fire extinguisher on my head in episode 2; AMA."
  },
  {
    "url": "t3_32th68",
    "name": "I just finished riding my motorcycle around the world (in 636 days and 53,888 miles), AMA!"
  },
  {
    "url": "t3_32uche",
    "name": "I am Chris Jericho  Star of Comedy Centrals Nothing to Report, WWE Superstar, author, singer and much more. AMA."
  },
  {
    "url": "t3_32v794",
    "name": "I'm Scott Bradlee, creator of Postmodern Jukebox. AMA!"
  },
  {
    "url": "t3_32y3l3",
    "name": "We are Running With Scissors, developers of the POSTAL Series, Ask Us LITERALLY Anything!!"
  },
  {
    "url": "t3_330x2y",
    "name": "We Are David Byrne, Lucius, How To Dress Well, and Tune-Yards of Contemporary Color! AUAA!"
  },
  {
    "url": "t3_332ek7",
    "name": "I am comedian Jason Nash - you might know me from my Vine videos - FML The Movie and Jason Nash is Married - AMA"
  },
  {
    "url": "t3_333bn0",
    "name": "IamA Waffle House Grill Operator AMA!"
  },
  {
    "url": "t3_3368yq",
    "name": "I have PKU. I've never eaten meat, eggs, milk, cheese because it will give me irreversible brain damage. AMA!"
  },
  {
    "url": "t3_33996v",
    "name": "I have albinismAmA"
  },
  {
    "url": "t3_33dr7r",
    "name": "Yo! I am Perttu from Apocalyptica, Ask Me Anything!"
  },
  {
    "url": "t3_33epo3",
    "name": "IAmA grave digger at a cemetery."
  },
  {
    "url": "t3_33h0yt",
    "name": "IamA doc who studied people who live extremely long lives in places called Blue Zones. The human body is incredibly resilient which is why I specialize in chronic disease prevention and reversal. AMA!"
  },
  {
    "url": "t3_33lkjc",
    "name": "I'm Lucas Martell, an animation director and creator of The OceanMaker AMA!"
  },
  {
    "url": "t3_33m4dl",
    "name": "Were 3 MIT roboticists, here to answer Qs about programming, academia and anything!"
  },
  {
    "url": "t3_33mqkl",
    "name": "IamA mediocre comedian Jim Norton AMA!"
  },
  {
    "url": "t3_33q1g3",
    "name": "I am a Halliburton Whistleblower. I fought them for 9 years and (eventually) won. Ask Me Anything."
  },
  {
    "url": "t3_33u1nw",
    "name": "I'm Dan Fogler, actor/writer/director/graphic novelist (currently in Secrets and Lies and writing the comic Brooklyn Gladiator). AMA!"
  },
  {
    "url": "t3_33wtmk",
    "name": "IamA 92 year old woman from Stuttgart, Germany, and experienced Nazi Germany as a civilian. AMAA!"
  },
  {
    "url": "t3_33xo63",
    "name": "I am Thomas Middleditch. You may know me as Richard Hendricks from HBO's SILICON VALLEY or the fishbowl guy from WOLF OF WALL STREET. AMA."
  },
  {
    "url": "t3_33ys4s",
    "name": "We are the team behind Kerbal Space Program. Tomorrow we launch version 1.0 and leave Early Access. Ask Us Anything!"
  },
  {
    "url": "t3_341zbr",
    "name": "Im Rich Roll. In just 2 years I went from a 50 lbs. overweight couch potato to being named one of the 25 Fittest Men in the World by Mens Fitness. I just finished a new book about how others can implement what I did to change your life  AMA about my journey, plant-based nutrition, and fitness!"
  },
  {
    "url": "t3_3428gj",
    "name": "I'm Michelle Visage. You might recognize me from RUPAUL'S DRAG RACE or Celebrity Big Brother - and don't forget, I was a 90's popstar, bitch. AMA!"
  },
  {
    "url": "t3_34fdjb",
    "name": "Hi, I am Warren Spector, a game developer from Origin, Ion Storm and Junction Point. I worked on Deus Ex and Disney Epic Mickey and a lot of other games. AMA!"
  },
  {
    "url": "t3_34ja0s",
    "name": "I'm Jeremy, co-creator &amp; narrator of CinemaSins, former movie theater manager, new author, and all around sarcastic idiot. AMA."
  },
  {
    "url": "t3_34ml1f",
    "name": "IamA Nepal Earthquake survivor that was caught in the Langtang Trek - AMA!"
  },
  {
    "url": "t3_34t1gt",
    "name": "I'm Amrit - I grew up in Nepal, and have been here since shortly after the M7.8 Earthquake rocked the country. Ask me almost anything!"
  },
  {
    "url": "t3_34vfcp",
    "name": "IamA TWiT! Hi, it's Leo Laporte, AMA about TWiT and The New Screen Savers!"
  },
  {
    "url": "t3_34w20e",
    "name": "NICK OFFERMAN IN SITU. LET'S RAP."
  },
  {
    "url": "t3_34ybpw",
    "name": "I am Sam Sheffer. I'm the social media manager for The Verge. Ask me anything!"
  },
  {
    "url": "t3_34zlgo",
    "name": "IamA band called HEALTH. AMA!"
  },
  {
    "url": "t3_34znx4",
    "name": "Anthony Rapp here. Let's talk about how pale I am. AMA."
  },
  {
    "url": "t3_3547sp",
    "name": "IamA former Neo-Nazi/racist skinhead leader turned peace advocate and author AMA!"
  },
  {
    "url": "t3_356hs2",
    "name": "IAmA Magnet Engineer. I answer questions about magnets for a living."
  },
  {
    "url": "t3_3576su",
    "name": "Hi, we're Knuckle Puck from Chicago. We're currently on the American Candy tour. AUA."
  },
  {
    "url": "t3_357fcx",
    "name": "IAMA best-selling author who has sold over 500,000 books, originally via traditional means and now via self-publishing. I have a new audio book out and am here with Jeff Machado, the narrator. I am Warlizard  husband, father, Gulf War veteran, and scorpion killer. Bring it."
  },
  {
    "url": "t3_35ei8w",
    "name": "I make a living playing video game music on guitar! AMA!"
  },
  {
    "url": "t3_35hsht",
    "name": "IamA reviewer of instant noodles from all over the world called The Ramen Rater - AMA!"
  },
  {
    "url": "t3_35i1hl",
    "name": "Had unplanned brain surgery 6 days ago. AMA."
  },
  {
    "url": "t3_35jx9n",
    "name": "IAMA Medical Marijuana Dispensary Manager/Budtender Doing an AMA in /r/trees! Come ask me anything about the business or the product!"
  },
  {
    "url": "t3_35lgm1",
    "name": "IamA (Founder of SynDaver) AMA!"
  },
  {
    "url": "t3_35mw7f",
    "name": "IAMA: Hobby bee keeper with decades of research under my belt. AMA bees!"
  },
  {
    "url": "t3_35no0e",
    "name": "We are Rhys Ward, Agnes Bruckner and Kevin Alejandro of THE RETURNED - AUFA!"
  },
  {
    "url": "t3_35pudc",
    "name": "I am the owner of the bar behind the Coca Cola machine that made the front page yesterday. AMA!"
  },
  {
    "url": "t3_35usd8",
    "name": "I am Marc Maron, the guy from the thing. What's up?"
  },
  {
    "url": "t3_35yo1w",
    "name": "I am Sloane Steel, I work in the porn industry and I'm being interviewed for a documentary about the porn world. Wanna talk dirty? AMA!"
  },
  {
    "url": "t3_35z1qa",
    "name": "I'm Danielle Panabaker, from THE FLASH or SKY HIGH. AMA!"
  },
  {
    "url": "t3_360m27",
    "name": "IamA spider bite tester! AMA!"
  },
  {
    "url": "t3_3627lf",
    "name": "I'm male model Jim Gaffigan. AMA."
  },
  {
    "url": "t3_368m6n",
    "name": "IamA US Army veteran combat medic of the Iraq war. AMA!"
  },
  {
    "url": "t3_36b3zx",
    "name": "I killed the Cooks on Too Many Cooks! Your creepy Uncle Bill here AmA!"
  },
  {
    "url": "t3_36fee7",
    "name": "IamA 1%er outlaw biker AMA!"
  },
  {
    "url": "t3_36ibtu",
    "name": "IamA (Funeral Home Assistant) AMA!"
  },
  {
    "url": "t3_36myvo",
    "name": "We are the team behind Cities: Skylines, ask us anything!"
  },
  {
    "url": "t3_36nhbk",
    "name": "IamA We are The Glitch Mob. AMA!"
  },
  {
    "url": "t3_36rewr",
    "name": "We worked on the X-Wing, Mechwarrior and Homefront franchises. We just announced our new space shooter, Starfighter Inc. Ask us anything!"
  },
  {
    "url": "t3_36rl9g",
    "name": "I am John Romaniello: bestselling author, investor, lead fitness advisor for Arnold, and creator of The Omega Body Blueprint. Ask me anything!"
  },
  {
    "url": "t3_36rpff",
    "name": "Independent Rapper MURS here, ASK ME ANYTHING!"
  },
  {
    "url": "t3_36zcm7",
    "name": "I have end stage kidney disease. I do home hemo dialysis and have in the past done hospital hemo dialysis and parateneal dialysis. AMA."
  },
  {
    "url": "t3_373b0j",
    "name": "I was born with multiple congenital limb deficiencies (missing bones in both hands &amp; legs) which resulted in many surgeries and left foot amputation. I have yet to find something that I want to do but can't!! AMA"
  },
  {
    "url": "t3_37cpmb",
    "name": "I am Gobi M. Rahimi, Tupac's production partner. I am making a film about my experience with Tupac leading up to his last week of life, and all that transpired at the hospital. AMA."
  },
  {
    "url": "t3_37dc8f",
    "name": "We are The Chainsmokers - AUA!"
  },
  {
    "url": "t3_37f35i",
    "name": "IamA disabled American expatriate in the Philippines who founded 8ch.net (4chan clone where users make boards like Reddit). An Al Jazeera documentary I did over a year ago is on on the frontpage of r/videos. AMA!"
  },
  {
    "url": "t3_37gvw6",
    "name": "my best friend playfully pushed me into a pool at my bachelorette party and now IAMA quadriplegic known as the paralyzed bride and a new mom! AMA!"
  },
  {
    "url": "t3_37md3k",
    "name": "IamA comedian who used to host a public access show that's moving to cable tonight and I'm trying to do things differently and I'm excited and scared and all the things."
  },
  {
    "url": "t3_37qpfr",
    "name": "Hey, I'm Kyle Landry, I post piano videos on YouTube and recently hit 60k followers on Twitch. AMA"
  },
  {
    "url": "t3_37ra8k",
    "name": "LIVE FROM BRAZZERS HOUSE  BRAZZERS FEAT. ROMI RAIN, PHOENIX MARIE, AVA ADDAMS, &amp; TORY LANE  AMAA"
  },
  {
    "url": "t3_37vmx7",
    "name": "IamA 22 year old airline pilot AMA!"
  },
  {
    "url": "t3_37wmup",
    "name": "I teach rope bondage. AMA!"
  }
]; //load from file
        // var allStates=$scope.list;
        return allStates.map(function(state) {
            state.value=state.name.toLowerCase();
            return state;
        });
    }
}])
