const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('this is our home page')
    } else if (req.url === '/about') {
        res.end('here is something about us')
    } else {res.end(`
    <h1>Oops</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)}
})

server.listen(5000)