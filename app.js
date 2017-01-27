var fs = require ('fs');

var jsonreador = require ("./json-file-reader.js"); // dit heb ik eraan toegevoed. Dit hoort dus de andere file te lezen.

var countryName = process.argv[2];    // this is bullet 1 from part 1   // this is the terminal

// fs.readFile ('./countries.json', 'utf-8', function(err, data) {     //deze link moet ik even aanpassen

// 	if (err) {
// 		throw err;

// 	}
// 	// put your code under this comment
// 	// somehow we need to parse this (ontleden/dissect)
// 	// second bullet is not saying how to dissect

// 	var countriesData=JSON.parse(data);

// 	// now I have to implement a for loop because there are so many countries that it has 
// 	// to go trough all the countries to find the country you have called

	// for (i = 0; i < countriesData.length; i++) {
	// 	if (countriesData[i].name === countryName) { // i gaat langs alle arrays/objects   // {} Omdat het hier gaat om meerdere zinnen
	// 		console.log("Country:" + countriesData[i].name);
	// 		console.log("Top level domain:" + countriesData[i].topLevelDomain);
	// 	}
	// }
// });

function randomName (placeholderParameter){

	for (i = 0; i < placeholderParameter.length; i++) {
	if (placeholderParameter[i].name === countryName) {
		console.log ("Country:" + placeholderParameter[i].name);
		console.log ("Top level domain:" + placeholderParameter[i].topLevelDomain);
	}
}
}

jsonreador("./countries.json", randomName);

// console.log (countryName + 'is a nice country'); 
// console.log (' country: ' + countryName)
// console.log (' Top level domain:' + tld) // I think I have to make a var tld - Not sure what the value should be

