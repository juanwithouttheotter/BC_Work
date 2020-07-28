const productModel = require("../models/products");


class Product {
    constructor(product_obj){
        this._product = product_obj;
    }
    get id(){
        return this._product.id;
    }
    get flavor(){
        return this._product.flavor;
    }
    set flavor(flavor){
        this._product.flavor = flavor;
    }
    get price(){
        return this._product.price;
    }
    set price(price){
        this._product.price = price;
    }
    get quantity(){
        return this._product.quantity;
    }
    set quantity(quantity){
        this._product.quantity = quantity;
    }
    merge (new_product){
        this._product = {...this._product, ...new_product};
    }
    async insert(){
        const results = await productModel.insert(this._product);
        this._product.id = results.insertedId;
    }
    async getById(id){
        this._product = await productModel.selectById(id);
    }
    async update(id){
        await productModel.update(id, this._product);
    }
    async read(id){
      
    }
    getLiteral(){
        return this._product;
    }

}

module.exports = Product;