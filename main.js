var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var app = express();
var portNum = 5555;
var path = require('path');
var siteDir = '/site/pages'
var fs = require('fs');
var noCount = 0;
var voteNumberVal = '69';
var yesCount = 0;

app.use(bodyParser.json());
app.use(cookieParser('nososecretkey'));
app.use(session({secret: 'notsosecretkey123'}));

//Index Page
app.use(express.static('site/pages'));

app.get('/',function (req,res){
	 res.sendFile(path.join(__dirname + siteDir + '/index.html'));
});
app.get('/yes',function (req,res){
	console.log("Yes");
	yesCount++;
	 res.redirect('/');
});


app.get('/results',function (req,res){
	console.log("YesCount: " + yesCount + "; NoCount: " + noCount);
	
	res.send("Yes: " + yesCount + "; No: " + noCount + ";");
});

app.get('/no',function (req,res){
	console.log("no");
	noCount++;
	 res.redirect('/');
});

app.get('/reset',function (req,res){
	noCount = 0;
	yesCount = 0;
	res.send("The Votes have been reset");
});

app.listen(portNum, function () {
	
	console.log('Example App listening on Port' + portNum);
	
});






