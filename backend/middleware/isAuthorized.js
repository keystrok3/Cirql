const jwt = require('jsonwebtoken')
const User = require('../models/user')

const isAuthorized = async (req, res, next) => {

    try {
        const token = res.cookie.token

        if(!token) {
            return next(new ErrorResponse("Not authorized to access this route", 401))
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)


        const user = await User.findOne({ where: { username: decoded.username}})

        if(!user) {
            return next(new ErrorResponse("No user found with this username", 404));
        }

        req.username = { username: decoded.username }

        next()
    } catch (error) {
        console.error('Authorization Error: ', error)

        if(error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ 
                success: false, 
                msg: "Session expired. Please log in again" 
            });
        }

        if(error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ 
                success: false, 
                msg: "Invalid token. Please log in again" 
            });
        }
    }
}

module.exports = { isAuthorized }