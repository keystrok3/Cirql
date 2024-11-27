require('dotenv').config({ path: './config.env' })

const express = require('express')
const { connect_to_db } = require('./dbconfig/db')

// environment variables
const PORT = process.env.PORT || 5515

const app = express()

// Middleware
app.use(express.json())






const server = app.listen(PORT, () => {
    connect_to_db()
    console.log(`Listening on: http://localhost:${PORT}`)
})


process.on('unhandledRejection', (err, promise) => {
    if(err) {
        console.error(`\n\n Server Error: \n ${err} \n\n`)
    }

    server.close(() => process.exit(1))
})