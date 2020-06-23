const http = require('http');
const fs = require('fs');
const PORT = 8080;

function handleRequest(req, res) {
    const path = req.url;
    switch (path) {
        case "/favorite-foods":
            return fs.readFile(__dirname + '/favorite-foods.html', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

        case "/favorite-CSS":
            return fs.readFile(__dirname + '/favorite-CSS.html', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

        case "/favorite-movies":
            return fs.readFile(__dirname + '/favorite-movies.html', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
            case "/home":
                return fs.readFile(__dirname + '/home.html', function (err, data) {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });

        default:
            return fs.readFile(__dirname + '/home.html', function (err, data) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });

    };

}





const server = http.createServer(handleRequest);
server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});