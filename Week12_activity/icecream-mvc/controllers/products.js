const Product = require('../classes/product');

exports.create = async (req,res) => {
    const product = new Product(req.body);
    await product.insert();
    res.json(product.getLiteral());

}
exports.read = async (req,res) => {
    const id = request.params.id;
    const product = new Product({id});
    await product.getById(id);
    res.json(product.getLiteral);
}

exports.update = async (req,res) => {
    const id = request.params.id;
    const product = new Product({id});
    await product.getById(id);
    product.merge(req.body);
    
}

exports.delete = async (req,res) => {
    
}