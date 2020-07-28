const Bids = require('../classes/bid-class');

exports.create = async (request, response) => {
    const bid = new Bid(request.body);
    await bid.insert();
    response.json(bid.getLiteral());
}

exports.read = async (request, response) => {
    const id = request.params.id;
    const bid = new Bid();
    await bid.getById(id);
    response.json(bid.getLiteral());
}

exports.update = async (request, response) => {
    const id = request.params.id;
    const bid = new Bid();
    await bid.getById(id);
    bid.merge(request.body);
    await bid.update(id);
    response.json(bid.getLiteral());
}

// exports.delete = async (request, response) => {

// }