
var fs = require ('fs')

var filereader = function (filename, callback) {

fs.readFile( filename, 'utf-8', function(err, data) {

	if (err) {
		throw err;
	}
	// Store our filedata in var as json

	var jsondata = JSON.parse (data) // leesbaar in js

	callback(jsondata)

	})

}



module.exports = filereader


// callback function and pass the parsed JSON 











// lezen en parsen 
// callback is a function