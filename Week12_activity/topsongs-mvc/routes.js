const songs = require('./controllers/songs');

exports.route = (app) => {
    app.post('/songs', songs.create);
    app.get('/songs/:id', songs.read);
    app.patch('/songs/:id',songs.update);
    app.delete('/songs/:id',songs.delete );
}