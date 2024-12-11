require('dotenv').config({ path: './config.env' })
const cors = require('cors')
const express = require('express')
const { connect_to_db } = require('./dbconfig/db')
const { initialize_models } = require('./models/init_models')
const { errorHandler } = require('./middleware/error')

// environment variables
const PORT = process.env.PORT || 5515

const app = express()

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
// serveuploaded files statically
app.use('/photouploads/profile', express.static('public/photouploads/profile'))
app.use('/photouploads/general', express.static('public/photouploads/general'))
// route middleware
app.use('/api/auth', require('./routes/auth'))
app.use('/api/images', require('./routes/photo'))
// error handler middleware
app.use(errorHandler)



const server = app.listen(PORT, () => {
    connect_to_db()
    initialize_models()
    console.log(`Listening on: http://localhost:${PORT}`)
})


process.on('unhandledRejection', (err, promise) => {
    if(err) {
        console.error(`\n\n Server Error: \n ${err} \n\n`)
    }

    server.close(() => process.exit(1))
})