var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res){

    var q = url.parse(req.url, true);

    if(q.pathname==="/form"){
        fs.readFile("form.html", function(err, data){
            res.writeHead(200, {"Content-Text" : "text/html"});
            res.write(data);
            res.end();
        });
    }else if(q.pathname==="/user"){
        res.write("User");
        res.end();
    }else if(q.pathname==="/formaction"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>"+"My name is "+q.query.fname+" "+q.query.lname+"</h1>");
    }else{
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, {"Content-Text" : "text/html"});
            res.write(data);
            res.end();
        });
    }
}).listen(8000, function(){
    console.log("Server started");
});