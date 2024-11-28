
const jwt = require('jsonwebtoken')

/** Generate jwt token */ 
const generate_token = (username, expires_in) => {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: expires_in })
    return token
}

module.exports = { generate_token }