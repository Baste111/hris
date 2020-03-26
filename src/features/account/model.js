const db = require("../../db");

module.exports = {
    create: async (username, password) => {
        const query = `insert into account (username, password)
                       values (?, ?);`;
        const params = [username.toLowerCase(), password];
        const result = await db.executeQuery(query, params);
        return result[0].insertId;
    },

    getSingleByUsername: async (username) => {
        const query = `select id, username, password
                       from account
                       where username = ?;`;
        const params = [
            username.toLowerCase()
        ];
        const results = await db.executeQuery(query, params);
        return results[0][0] ? results[0][0] : {};
    }
};