const topSongs = require('../models/Top5000');

exports.getByRange = async (request, response) => {
    const results = await topSongs.getByRange(request.params.start, request.params.end);
    response.json(results);
}

exports.getByName = async (request, response) => {
    const results = await topSongs.getBySongName(request.params.name);
    response.json(results);
}
