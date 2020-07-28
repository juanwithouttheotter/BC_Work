const bids = require('./controllers/bids-controllers');

exports.route = (app) => {
    //app.post('/user', bids.create);
    app.post('/item', bids.create);
    // app.get('/item', bids.read);
    app.get('/item/:item_id', bids.read);
    app.patch('/item/:item_id/bid', bids.update);
    //app.delete('/item/:item_id', bids.delete);

}