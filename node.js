var http = require('http');
var url = require('url');
var querystring = require('querystring');

function post(req, res){
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    var datas = '';
    req.on('data', function(chunk){
        datas += chunk.toString();
    });
    req.on('end', function(){
        var qs = querystring.parse(datas);
        var name = qs.name;
        var email = qs.email;
        var mobile = qs.mobile;
        res.write('Name: ' + name + '\n');
        res.write('Email: ' + email + '\n');
        res.write('Mobile: ' + mobile + '\n');
        res.end();
    });
}

http.createServer(post).listen(8000);
console.log("Server running at http://localhost:8000/");