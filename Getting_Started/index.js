const http = require('node:http')

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/plain")
    res.end("Success")
}).listen(3000)