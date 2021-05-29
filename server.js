


    var PORT = process.env.PORT || 5190 ;
    var http = require('http');
    var   fs = require('fs'  );

    const ServerMain =function(){
    "use strict"

        http.createServer( function(req,res){

            fs.readFile( "./README.MD" , function(err,dat){

                if( err ){
                    res.write("[failed to read file]");
                    res.end();
                }else{
                    res.writeHead(200,{"Content-Type":'text/html'});
                    res.write( dat , "utf-8" );
                    res.end();
                };;
            });;

        }).listen(PORT);

    };;

    ServerMain();



