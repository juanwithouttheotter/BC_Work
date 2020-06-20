const { request, response } = require("express");

exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok songs'
        }
        response.json(status);
    });
    app.get('/artist/:artist', async (request, response) => {
        const artist = request.params.artist;
        const [data] = await connection.query(`SELECT * FROM top5000 WHERE artist = ?`, [artist]);
        response.json(data);
    });
    app.get('/song/:song', async (request, response) => {
        const song = request.params.song;
        const [data] = await connection.query(`SELECT * FROM top5000 WHERE song = ?`, [song]);
        response.json(data);
    });
    app.get("/multi-artist", async (request, response) => {
        const [data] = await connection.query(`SELECT artist, COUNT(*) occurance FROM top5000 GROUP BY artist HAVING occurance > 1;`);
        response.json(data);
    });
    app.get("/position/:start/:end", async (request, response) => {
        const start = request.params.start;
        const end = request.params.end;
        const [data] = await connection.query(`SELECT * FROM top5000 WHERE top_id >= ? AND top_id <= ?`, [start, end]);
        response.json(data);
    });

}