const mysql = require('./connection');

exports.getMultiArtist = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT
            artist,
            COUNT(artist) as occurance
        FROM
            Top5000
        GROUP BY artist
        HAVING COUNT(artist) > 1
        ORDER BY occurance DESC;`);
    return data;
}

exports.getByArtistName = async (artist) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT
            *
        FROM
            Top5000
        WHERE artist = ?;`, [artist]);
    return data;
}

exports.getBySongName = async (artist) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT
            *
        FROM
            Top5000
        WHERE song = ?;`, [artist]);
    return data;
}

exports.getByRange = async (start, end) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM Top5000 WHERE position >= ? AND position <= ?`, [start, end]);
    return data;
}
