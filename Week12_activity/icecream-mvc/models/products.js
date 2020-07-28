const mysql = require('./connection');

exports.insert = async (product_obj) => {
    const connection = await mysql.connect();
    cosnt [data] = await connection.query();
    return data;
}
exports.selectById = async (product_obj) => {
    const connection = await mysql.connect();
    cosnt [data] = await connection.query();
    return data;
}


exports.update =async (product_obj) => {
    const connection = await mysql.connect();
    cosnt [data] = await connection.query();
    return data;
}
