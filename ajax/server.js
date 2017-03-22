var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })//false 指结果为字符串或数组；true 指除这2个的其它类型

app.get('/ajax.html', function(req,res){
	res.sendFile(__dirname + '/' + 'ajax.html');
});

app.post('/demo_ajax', urlencodedParser, function(req,res){
	var txt = "你好，";
	txt += req.body.fname;
	txt += ' ';
	txt += req.body.lname;
	txt += '，最近还好吗？';
	res.end(txt);
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("site http: //%s:%s",host,port);
});