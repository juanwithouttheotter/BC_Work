const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = 8080;
server.use(bodyParser.json());

server.get('/', (request, response) => response.json({ Hello: 'Beautiful' }));
server.get(
    '/user',
    (request, response) => {
        const user = {
            user_id: 1,
            first: 'Paul',
            last: 'Cruse',
            email: 'paulcruse3@gmail.com'
        }
        response.json(user);
    }
);
server.post(
    '/user',
    (request,response) =>{
        const responseData = {...response.body};
        response.json(responseData);
    }
)



server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

// without express

// const handleResponse = (data) => {
//     jsonData = JSON.stringify(data);
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.end(jsonData);
// }
// const handleRequest = (request, response) => {
//     let responseData = {}
//     let jsonData = {}
//     if (request.url === '/lionel-richie'){
//         responseData = {
//             Hello: 'Is it me you are looking for?'
//         }
//     } else if (request.url === '/user'){
//         if (request.method === 'POST') {
//             request.on("data", function(data) {
//                 responseData = JSON.parse(data);
//             });
//             request.on("end", function() {
//                 handleResponse(responseData);
//             });
//         } else if (request.method === 'GET') {
//             responseData = {
//                 user_id: 1,
//                 first: 'Paul',
//                 last: 'Cruse',
//                 email: 'paulcruse3@gmail.com'
//             }
//             handleResponse(responseData);
//         } else {
//             responseData = {
//                 error: 'Please use GET or POST'
//             }
//             handleResponse(responseData);
//         }
//     }
// }
// const server = http.createServer(handleRequest);
// server.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });