const songs = require('./controllers/songs');
const artists = require('./controllers/artists');

exports.route = (app) => {
    app.get('/artist/multi-artist', artists.getMultiArtist);
    app.get('/artist/name/:name', artists.getByName);
    app.get('/song/date/:start/:end', songs.getByRange);
    app.get('/song/name/:name', songs.getByName);
}
