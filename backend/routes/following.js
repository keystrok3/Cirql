
const express = require('express')
const { follow_user, unfollow_user, get_followers, get_users_followed } = require('../controllers/following')
const { isAuthorized } = require('../middleware/isAuthorized')
const router = express.Router()


router.route('/followuser/:username').post(isAuthorized, follow_user)
router.route('/unfollowuser/:username').post(isAuthorized, unfollow_user)
router.route('/get_followers/:username').get(isAuthorized, get_followers)
router.route('/get_following/:username').get(isAuthorized, get_users_followed)

module.exports = router