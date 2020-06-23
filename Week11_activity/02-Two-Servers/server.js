const http = require('http');
const PORT1 = 7000;
const PORT2 = 7050;

function handleRequest(request,response) {
    response.end("Path Hit" + request.url);
}

const server1 = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest);

server1.listen(PORT1, function() {
    console.log(`Listening to Juan on http://localhost:${PORT1}`)
});

server2.listen(PORT2, function() {
    console.log(`Listening to Two on http://localhost:${PORT2}`)
});

