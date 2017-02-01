var http = require('http')

http.createServer(function(req, res){

	var _req = JSON.stringify(req.headers);
	res.end(_req);

}).listen(process.env.PORT || 8080)