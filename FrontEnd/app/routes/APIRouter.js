// var PythonShell  = require('python-shell');
// // var clusterPython= new PythonShell('cluster.py');
// var express      = require('express');
// var router       = express.Router();
// var request      = require('request');
// var apiKey       = 'e33234937cc4ba1f864968857a91d36b493e57bd'
// var http         = require('http');
// var request      = require('request');
// var querystring  = require('querystring');
// var deferred     = require('deferred');

// router.route('/extractJSON/')
// 	.get(function(req,res){
// 		console.log('hello');
// 		var linkName=req.params.link;
// 		var options={
// 			args:[linkName],
// 			scriptPath:'../scripts'
// 		}
// 		Python.run('extract.py',options,function(err,response){
// 			if(err){
// 				throw err;
// 			}
// 			res.send({status:200});
// 		})
// 	})

var express = require('express');
var router = express.Router();
var request = require('request');

router.route('/login')
	.get(function(req,res){
		res.send({message:'You Made It!'});
	})