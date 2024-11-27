const { Sequelize } = require("sequelize");


const db_connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres',
        host: 'localhost',
        logging: console.log
    }
)

async function connect_to_db() {
    try {
        await db_connection.authenticate()
        console.log('Connected to database ', process.env.DATABASE_NAME)
    } catch (error) {
        console.error(`
            \nCould not connect to database ${process.env.DATABASE_NAME} \n
            Error: ${error}
        `)
    }
}

module.exports = {
    db_connection,
    connect_to_db
}