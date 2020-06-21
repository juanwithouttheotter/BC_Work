const {request, response } = require("express");
exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok pop quiz'
        }
        response.json(status);
    });
    app.get('/quiz', async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM questions`);
        response.json(data);
    });
}