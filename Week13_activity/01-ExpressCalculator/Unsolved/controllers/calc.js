const Calculator = require('./classes/Calculator');
// const { response } = require('express');

exports.add = (req,res) => {
    const calc = new Calculator();
    const solution = calc.add(parseInt(req.params.a), parseInt(req.params.b));
    res.json({solution});
}

exports.subtract = (req,res) => { 
    const calc = new Calculator();
    const solution = calc.subtract(parseInt(req.params.a), parseInt(req.params.b));
    res.json({solution});
}

exports.multiply = (req,res) => {
    const calc = new Calculator();
    const solution = calc.multiply(parseInt(req.params.a), parseInt(req.params.b));
    res.json({solution});
}

exports.divide = (req,res) => {
    const calc = new Calculator();
    const solution = calc.divide(parseInt(req.params.a), parseInt(req.params.b));
    res.json({solution});
}