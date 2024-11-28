const User = require("../models/user")
const bcrypt = require('bcrypt')

// function to make request to add new user
const register = async (req, res, next) => {
    const { 
        username, email, firstName, lastName, password
    } = req.body

    try {
        const salt = await bcrypt.genSalt(10)
        const password_hash = await bcrypt.hash(password, salt)

        const user = await User.create({
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password_hash
        })

        res.status(201).json({ success: true, msg: "Registered successfully" })
    } catch (error) {
        console.error('Could not register: ', error)

        res.status(500).json({ success: false, msg: "Server Error" })
    }
}


module.exports = { register }