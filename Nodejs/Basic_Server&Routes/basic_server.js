const http = require('http');

http
    .createServer((req, res)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h2>Hello World!!<h2>');
    })
    .listen(8080, ()=>{
        console.log(`Server is running on port 8080`);
    });