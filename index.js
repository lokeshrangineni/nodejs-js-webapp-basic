var express = require('express');
var exhort = require('@RHEcosystemAppEng/exhort-javascript-api');
//import exhort from '@RHEcosystemAppEng/exhort-javascript-api';

var app = express();

const PORT = process.env.SERVER_PORT;

app.get('/', function (req, res) {
  res.send('Simple Web Application is UP');
});

app.listen(PORT, function () {
    console.log('Simple Web Application running on port ' + PORT);
});

app.get('/testPackage', function (req, res) {
    const stackAnalysis = exhort.stackAnalysis('/path/to/pom.xml');
    console.log("stackAnalysis", stackAnalysis);

    const response = { hello: "Package testing is done." };
    return res.json(response);
});
