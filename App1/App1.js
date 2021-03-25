


const http = require('http');
const Fmodule = require('./First_Module');
const logger = require('./logger');


http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Hi</h1>");
    res.write("Todays date is " + Fmodule.Givedate());
    res.write("<br><br>Hello " + Fmodule.name("Usama"));
  //  res.write("<br><br> Url "+logger.log());
    res.end("<br><br>Killing the response object");

}
).listen(8080, function () {
    console.log("The server is running on port no 8080")
     logger.log();
})




