const http = require('node:http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Success');
});

server.listen(3000, () => {
    console.log("Server is running at port 3000")
})