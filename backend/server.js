require('dotenv').config({ path: './config.env' })

const express = require('express')
const multer = require('multer')
const path = require('path')
const { connect_to_db } = require('./dbconfig/db')
const { initialize_models } = require('./models/init_models')
const { errorHandler } = require('./middleware/error')

// environment variables
const PORT = process.env.PORT || 5515

const app = express()

// Middleware
app.use(express.json())
// serveuploaded files statically
app.use('/images', express.static('public/photouploads'))
// route middleware
app.use('/api/auth', require('./routes/auth'))
app.use(errorHandler)


// configure multer storage
const storage = multer.diskStorage({
    // define destination directory
    destination: function(req, file, cb) {
        cb(null, 'public/photouploads')
    },

    // define filename for uploaded files
    filename:   function(req, file, cb) {
        // generate unique filename using timestamp and extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

// create filter to allow only images
const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Not an image! Please upload only images.'), false)
    }
}


// Initialize multer with above configs
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})


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