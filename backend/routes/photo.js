const { upload } = require('../middleware/upload')
const { uploadProfilePhoto, uploadImage } = require('../controllers/photo')
const express = require('express')
const router = express.Router()

router.route('/profile', upload.single('photo')).post(uploadProfilePhoto)
router.route('/general', upload.single('general')).post(uploadImage)

module.exports = router