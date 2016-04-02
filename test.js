var PythonShell=require('python-shell');
var clusterPython=new PythonShell('cluster.py');
var apiKey='e33234937cc4ba1f864968857a91d36b493e57bd'
var http=require('http');
var request=require('request');
var querystring=require('querystring');
var deferred=require('deferred');


clusterPython.on('message',function(message){
	// console.log(message);
	var data=JSON.parse(message);
	// console.log(data);
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
					var ALCHEMY_URL="http://gateway-a.watsonplatform.net/calls/text/TextGetRankedConcepts";
					var requestDATA=requestData[index];
					// console.log(requestData[index].text+"-->>");

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
						console.log(requestDATA.text.length);
					})
				}
				call(index);
			}

			// for(var index=0;index<4;index++){
			// 	console.log(documents[index]+"-->>");
			// }
		}
		// var printData=function(){
		// 	for(var index=0;index<4;index++){
		// 		console.log(documents[index]+"-->>");
		// 	}
		// }
		// printData();
		sendData();
	}
	putData();
	// var dataAvailable=data.parse(data);
})