const multer = require('multer')
const path = require('path')

// configure multer storage
const storage = multer.diskStorage({
    // define destination directory
    destination: function(req, file, cb) {
        const type = req.params.type || 'general'
        const uploadPath = `public/photouploads/${type}`
        cb(null, uploadPath)
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


module.exports = { upload }