const { db_connection, connect_to_db } = require("../dbconfig/db");
const Following = require("./following");
const Photo = require("./photo");
const User = require("./user");

async function initialize_models() {
    try {        
        await db_connection.sync()
        console.log('Tables created')
    } catch (error) {
        console.error(`\nTable creation/connection error: \n ${error}`)
    }
}

module.exports = { initialize_models }