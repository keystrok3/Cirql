const User = require("../models/user")
const { generate_token } = require('../util/generate_jwt')
const bcrypt = require('bcrypt')

/** function to make request to add new user */ 
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


/** Login */ 
const login = async (req, res, next) => {
    const { username_or_email, password } = req.body

    try {
        const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username_or_email)
        
        let user = undefined
        if(isEmail) {
            user = await User.findOne({ where: { email: username_or_email }})
        } else {
            user = await User.findOne({ where: { username: username_or_email }})
        }

        if(user === null) {
            console.log("user not found")
            res.status(401).json({ success: false, msg: "Invalid credentials" })
        }

        

        const isPassword = await bcrypt.compare(password, user.password)

        if(!isPassword) {
            console.log('isPassword is false')
            res.status(401).json({ success: false, msg: "Invalid credentials" })
        }

        const token = generate_token(user.username, '3h')

        res.cookie('token', token, {
            httpOnly: true, // prevent client-side access to cookie
            secure: false,
            sameSite: 'Strict',
            maxAge: "10800000"
        })

        res.status(201).json({ success: true, user: { username: user.username, email: user.email }})

    } catch (error) {
        console.log(`\n LOGIN ERROR: ${error}`)
        res.status(500).json({ success: false, msg: "Server Error" })
    }
} 



/** Logout of session */ 
const logout = async (req, res, next) => {
    try {
        res.cookie('token', '', {
            httpOnly: true,
            sameSite: 'Strict',
            secure: false,
            maxAge: -1 // -ve maxAge causes cookie to be deleted
        })

        res.status(200).json({ success: true })
    } catch (error) {
        console.log('Log out error: ', error)
        res.status(500).json({ success: false })
    }
}

module.exports = { register, login, logout }