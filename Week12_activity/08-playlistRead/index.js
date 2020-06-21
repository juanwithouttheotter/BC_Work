var mysql 

var connection = 
// when using functions in the connection using async await aka promises is best as then you know when you will close the connection
// nmp install --save mysql2 will use 


connection.connect(function (err) {
    if (err) throw err;
    //to check that We are connected
    console.log("connected as id " + connection.threadId);
    getsongs();

});


const getsongs = (connection) => {
    connection.query(`
    SELECT
        *
    FROM
        songs
    `,(error,data) => {
        if(error) throw error;
        connection.end();
    });
}

async function run(){
    const mysql = require("mysql2");
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "playlist_db"
    });
    const [data] = await connection.execute(`
    SELECT 
        *
    FROM 
        playlist_db
    WHERE 
        artist = "ABBA";
    `);

}


//run function
// array of data function
//look at slack study up async and await