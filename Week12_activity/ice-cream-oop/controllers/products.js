const Product = require('../classes/product');

exports.create = async (request, response) => {
    const product = new Product(request.body);
    await product.insert();
    response.json(product.getLiteral());
}

exports.read = async (request, response) => {
    const id = request.params.id;
    const product = new Product();
    await product.getById(id);
    response.json(product.getLiteral());
}

exports.update = async (request, response) => {
    const id = request.params.id;
    const product = new Product();
    await product.getById(id);
    product.merge(request.body);
    await product.update(id);
    response.json(product.getLiteral());
}

exports.delete = async (request, response) => {

}
