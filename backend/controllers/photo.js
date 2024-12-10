const Photo = require("../models/photo")

/** Upload Profile Picture */
const uploadProfilePhoto = async (req, res, next) => {
    try {
        await Photo.destroy({
            where: {
                username: req.username,
                type: 'profile'
            }
        })

        const photo = await Photo.create({
            type: 'profile',
            filename: req.file.originalname,
            filepath: req.file.path,
            mimetype: req.file.mimetype,
            size: req.file.size,
            username: req.username
        })
        
        res.status(201).json({
            success: true,
            data: photo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
          })
    }
}


/** Upload Image */
const uploadImage = async (req, res, next) => {
    try {
        await Photo.destroy({
            where: {
                username: req.username,
                type: 'general'
            }
        })

        const photo = await Photo.create({
            type: 'general',
            filename: req.file.originalname,
            filepath: req.file.path,
            mimetype: req.file.mimetype,
            size: req.file.size,
            username: req.username
        })
        
        res.status(201).json({
            success: true,
            data: photo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
          })
    }
}

module.exports = { uploadProfilePhoto, uploadImage }