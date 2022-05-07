const express = require('express')
const swagger = require('swagger-client')

const app = express()
const port = 4200

var http = require('http');
var fs = require('fs');


fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});


app.get('/', (req, res) => {

    // Insert NEW API calls here
    swagger.http({
        url: "https://api.apixplatform.com/turnkeylenderapi/v1/Customer/AccountSummary",
        method: 'GET',
        query: {},
        headers: {
            "X-Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXguZ2xvYmFsIiwic3ViIjoiYjUyNTIyYWEtMTg0ZS0xMWViLThmZGMtNjc4NWFkMTcwNDYwIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYXBpeC5nbG9iYWwiLCJleHAiOjE2MDgwMzM5MDUsIm5hbWUiOiJBZG1pbiBBZG1pbiIsImVtYWlsIjoibGF1cmVuc2l1cythZG1pbkBicmFuay5hcyJ9.Q2S7fvAWUE3YMQAdTHxQDcsWaArEqKVtYUshKJyMB5aMI9Fu707OfD2sax2sTPJiQz7iflhqP3lmsiHUtyMoyhhx1MBf8GMDyY3kMWWIQ4yrzYo9ONBUEbKUfjJaAkowXu5Nu5d-Cpv4vGJdDPwmImB0csgK1F-1P6gF8vNE6O6ls1-hIwrSa0jbwLGsf3sw4Pmrw2K7wjdzT_qMFsE17xKdfG8dH8k4zndV7Kff9n3nYBMernEGh4befyUAi-9gtpmqeYlqMSvIqViWC2HajdPSzWSyBdqD8SXl4lQJdcDVgqRnq9Yu35bCUsAaN3Tj3GfThvBfHhLYwQhRZRmqWg"
            ,"tkLender_UserAuthToken": "getAccountDetails"
        }

    }).then((response) => {

        const access_token = "bearer " + response.body.access_token;
        console.log(response);

    }).catch((err) => {
        console.error(err);
    })

    //res.send('Hello World, Qiyang there')
    
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} ` +
        `and https://qsun005-e-ntu-edu-sg.solutions.apixplatform.com`
    )
})
//const express = require("express");
//const app = express();
//app.use('/img', express.static(level1 + '/Images'));

