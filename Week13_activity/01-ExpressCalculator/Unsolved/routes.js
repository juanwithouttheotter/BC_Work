const calc = require('./controllers/calc');

exports.route = (app) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok calculator'
        }
        response.json(status);
    });

    app.get("/add/:a/:b", calc.add);
    app.get("/subtract/:a/:b", calc.subtract);
    app.get("/multiply/:a/:b", calc.multiply);
    app.get("/divide/:a/:b", calc.divide);

    

}