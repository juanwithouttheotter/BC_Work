
const crypto = require('crypto');

exports.route = (app, connection) => {
    app.get('/status', (req, res) => {
        const status = {
            status: 'ok great bay'
        }
        res.json(status);
    });
    app.post('/user', async (req, res) => {
        const [data] = await connection.query(`INSERT INTO user_acct SET ?`, req.body);
        res.json({ created: true, id: data.insertId, ...req.body });
    });
    app.post('/item', async (req, res) => {
        const [data] = await connection.query(`INSERT INTO bid_item SET ?`, req.body);
        res.json({ created: true, id: data.insertId, ...req.body });
    });
    app.get('/item', async (req, res) => {
        const [data] = await connection.query(`SELECT * FROM bid_item`);
        res.json(data);
    })
    app.get('/item/:item_id', async (req, res) => {
        const item = req.params.item_id;
        const [data] = await connection.query(`SELECT * FROM bid_item WHERE item_id = ?`, [item]);
        res.json(data);
    });
    app.patch('/item/:item_id/bid', async (req, res) => {
        const bid = req.body
        const item = req.params.item_id
        const [data] = await connection.query(`UPDATE great_baydb.bid_item SET ? WHERE (item_id = ?)`, [bid,item])
        res.json(data);
    });

}