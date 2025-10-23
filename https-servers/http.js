import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end('This is Working')
    console.log('Request received');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});