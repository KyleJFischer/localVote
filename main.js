var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();
var portNum = 5555;

var siteDir = '/site/pages'


//Index Page
app.use(express.static('site/pages'));

app.get('/',function (req,res){
	 res.sendFile(path.join(__dirname + siteDir + '/index.html'));
});


app.listen(portNum, function () {

	console.log('Example App listening on Port' + portNum);

});
