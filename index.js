//using express module
var express = require("express");
//instance of the express server object
var app = express();
var port = process.env.PORT || 3000;

app.use('/api/whoami', function(request, response) {
	console.log(request);
});

app.listen(port, function() {
	console.log("Port running on ", port);
});
