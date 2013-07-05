/*jshint node:true*/

var fs = require('fs');
var express = require('express');


var app = express.createServer(express.logger());

var staticHtmlPagesbuffer;

app.get('/', function(request, response){

    if (staticHtmlPagesbuffer === undefined || staticHtmlPagesbuffer.length === 0){
            console.log("Leyendo desde fichero");
            staticHtmlPagesbuffer = fs.readFileSync("index.html");
        }

    response.write(staticHtmlPagesbuffer);
    response.end();
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
