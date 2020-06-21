const {request, response} = require("express");

exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok mysql api'
        }
        response.json(status);
    });
    

}