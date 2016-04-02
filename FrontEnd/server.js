// ===========
// BASIC SETUP
// ==========

var express  = require('express');
var app 	 = express();
var port     = process.env.PORT || 8080;

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var path 		 = require('path');


var APIRouter = require('./app/routes/APIRouter');
var PythonShell = require('python-shell');
var AlchemyCall=require('./AlchemyCalls');

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('view engine', 'jade');

// ======
// ROUTES
// ======

app.post('/api/v1/extractJSON',function(req,res){
	var name=req.body.link;
	res.send({'status':'200'});
});

app.post('/api/v1/commentAuthorParent',function(req,res){
	PythonShell.run('commentAuthorParent.py',function(error){
		if(error){
			throw error;
			res.send({'status':'400'});
		}
		res.send({'status':'200'});
	})
})

app.post('/api/v1/treeCreation',function(req,res){
	PythonShell.run('runcpp.py',function(error){
		if(error){
			throw error;
			res.send({'status':'400'});
		}
		console.log('donw tith tree creation');
		res.send({'status':'200'});
	})
})

app.post('/api/v1/cluster',function(req,res){
	var clusterPython=new PythonShell('cluster_ques.py');
	var apiKey='e33234937cc4ba1f864968857a91d36b493e57bd'
	var http=require('http');
	var request=require('request');
	var querystring=require('querystring');
	var deferred=require('deferred');

		clusterPython.on('message',function(message){
		console.log('TEST function CALLED');
		var data=JSON.parse(message);
		var documents=[];
		for(var index=0;index<data.message.length;index++){
			documents.push('');
		}
		var putData=function(){
			var sumLength=0;
			for(var index=0;index<data.message.length;index++){
				documents[data.message[index].id]+=data.message[index].text;
				sumLength+=data.message[index].text.length;
			}
			var sendData=function(){
				var requestData=[];
				console.log("document length->"+sumLength);
				for(var index=0;index<=4;index++){
					var data={
						'apikey':apiKey,
						'text':documents[index],
						'outputMode':'json',
						'knowledgeGraph':'1'
					}
					requestData.push(data);
				}
				for(var index=0;index<=4;index++){
					var call=function(index){
						console.log('CALLED FOR CLUSTER '+index);
						var ALCHEMY_URL="http://gateway-a.watsonplatform.net/calls/text/TextGetRankedConcepts";
						var requestDATA=requestData[index];
						request({
							url:ALCHEMY_URL,
							json:true,
							method:"POST",
							headers:{
								"content-type":"application/x-www-form-urlencoded"
							},
							proxy:"http://10.3.100.207:8080",
							body:querystring.stringify(requestDATA) 	
						},function(error,response,body){
							console.log(body.concepts);
							console.log(requestDATA.text);
						})
					}
					call(index);
				}
			}
			sendData();
		}
		putData();
		res.send({'status':'200'});
	})
});

app.get('/', function (req, res) {
	res.sendfile('./public/index.html');
});

// ===================
// Run The Express App
// ===================
app.listen(port);
console.log('The Hacking Begins at port ' + port);


//NAresh code -> saves to JSON (this part not done)
//Sayan code-> prints the comment id and the parent id and the author name
//graph.cpp will run (output ->answerdetails.txt)
//DJ code will seperate questions and answers
//.json input for the file [first stage] if we call conecpts the frst part is done
//LEXRank on top of this
//Alchemy API --> second and final part