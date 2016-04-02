var myApp = angular.module('myApp', []);
var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    scriptPath: './scripts/',
    args: []
};

PythonShell.run('my_script.py', options, function(err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution 
    console.log('results: %j', results);
});
