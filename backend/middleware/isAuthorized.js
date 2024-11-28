const jwt = require('jsonwebtoken')

const isAuthorized = (req, res, next) => {

    try {
        const token = res.cookie.token

        if(!token) {
           return res.status(401).json({ success: false, msg: "Unauthorised" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

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