const express = require("express");

const icecream = require("../config/connection.js");

const app = express();


exports.route = (app, connection) => {
    app.get("/status", async (request, response) => {
        const status = {
            status: 'ok ice cream'
        }
        response.json(status);
    });
    app.post("/ice-cream", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO products SET ?`, request.body);
        response.json({ created: true, id: data.insertId, ...request.body });
    });
    app.get("/ice-cream", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM products`);
        response.json(data);
    });
    app.get("/ice-cream/id/:id", async (request, response) => {
        const id = request.params.id;
        const [data] = await connection.query(`SELECT * FROM products WHERE id = ?`, [id]);
        response.json(data);
    });
    app.get("/ice-cream/flavor/:flavor", async (request, response) => {
        const flavor = request.params.flavor;
        const [data] = await connection.query(`SELECT * FROM products WHERE flavor = ?`, [flavor]);
        response.json(data);
    });
    app.patch("/ice-cream/price/:price", async (request, response) => {
        const price = request.params.price;
        const updated = request.body;
        const [data] = await connection.query(`UPDATE ice_creamdb.products SET ? WHERE (price = ?)`, [updated, price]);
        response.json({ updated: true, price, ...request.body });
    });
};

