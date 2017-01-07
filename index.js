//Using express module
var express = require("express");
//Using ipaddr.js module
var ipaddr = require("ipaddr.js");
//Instance of the express server object
var app = express();
var port = process.env.PORT || 3000;

//To server a static 'index.html' page
app.use(express.static(__dirname + '/views'));

//Middleware(specific path request handler) for request-headder-parser
//Express req and res is wrapper around node's req and res
app.use('/api/whoami/', function(request, response) {
    request.on('error', function(error) {
        return console.log("error: ", error);
    });
    response.on('error', function(error) {
        return console.log("error: ", error);
    });
    //To get the ip of the requestor device
    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.ip;
    //To get the language set in the client browser
    var lang = request.headers['accept-language'].split(",")[0];
    //To get the host OS of the client
    var os = request.headers['user-agent'].split("(")[1].split(")")[0];
    response.json({
        "ipaddress": ip,
        "language": lang,
        "hostOS": os
    });
});

app.listen(port, function() {
    console.log("App server running on ", port);
});
