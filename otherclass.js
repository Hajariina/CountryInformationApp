var fs = require("fs");

fs.readFile('countries.json', 'utf8', function(err, data) {
	if (err) return console.error(err);


  var countriesInfo = JSON.parse(data);
  // console.log(countriesInfo);
  // console.log(countriesInfo[0].translations.ja);

  console.log(process.argv[2]);

  for (var i = 0; i < countriesInfo.length; i++) {
    if (countriesInfo[i].name === process.argv[2]) {
      // console.log(dataCountries[i]);
      console.log( "The country is " + countriesInfo[i].name);
      console.log( "The capital is " + countriesInfo[i].capital);
      console.log( "The population is " + countriesInfo[i].population);
      console.log( "The Language is " + countriesInfo[i].demonym);
      console.log( "The timezone is " + countriesInfo[i].timezones);
      console.log( "The native name is " + countriesInfo[i].nativeName);

    }
  }
