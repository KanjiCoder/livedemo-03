


    var PORT = process.env.PORT || 5190 ;
    var http = require('http');
    var   fs = require('fs'  );

    const ServerMain =function(){
    "use strict"

        http.createServer( function(req,res){

            res.writeHead(200,{"Content-Type":'text/html'});
            res.write("Hello World");
            res.end();

        }).listen(PORT);

    };;

    ServerMain();



