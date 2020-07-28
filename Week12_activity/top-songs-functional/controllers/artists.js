const topSongs = require('../models/Top5000');

exports.getMultiArtist = async (request, response) => {
    const results = await topSongs.getMultiArtist();
    response.json(results);
}

exports.getByName = async (request, response) => {
    const results = await topSongs.getByArtistName(request.params.name);
    response.json(results);
}
