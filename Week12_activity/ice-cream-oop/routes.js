const products = require('./controllers/products');

exports.route = (app) => {
    app.post('/products', products.create);
    app.get('/products/:id?', products.read);
    app.patch('/products/:id', products.update);
    app.delete('/products/:id', products.delete);
}
