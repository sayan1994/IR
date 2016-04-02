var express=require('express');
var PythonShell = require('python-shell');
var bodyParser=require('body-parser');
var app=express();
var server=require('http').Server(app);

server.listen(3007);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());



app.listen(3008);
console.log("server is running on port 3008");