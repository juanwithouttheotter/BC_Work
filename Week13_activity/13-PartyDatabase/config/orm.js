const connection = require("./connection");
 
const orm = {
    selectAllCol: async function(whatToSelect, table) {
        const queryString =`SELECT ?? From ??`;
        const connection = await mysql.connect();
        const [data] = conection.query(queryString, [whatToSelect,table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectAllbyRecord: async function(whatToSelect, table, columnToSearch, recordVal) {
        const queryString =`SELECT ?? FROM ?? WHERE ?? = ??`;
        const connection = await mysql.connect();
        const [data] = conection.query(queryString, [whatToSelect,table, columnToSearch, recordVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    join: async function(whatToSelect, tOne, joinType, tTwo, condition) {
    const queryString =`SELECT ?? FROM parties INNER JOIN clients on parties.client_id = clients.id`;
    const connection = await mysql.connect();
    const [data] = conection.query(queryString, [whatToSelect,tOne, joinType, tTwo, condition], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    }
};

module.exports = orm;

