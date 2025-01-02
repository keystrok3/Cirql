const User = require("../models/user")
const ErrorResponse = require('../util/errorResponse')
const { generate_token } = require('../util/generate_jwt')
const { Op } = require("sequelize")
const bcrypt = require('bcrypt')

/** function to make request to add new user */ 
const register = async (req, res, next) => {
    const { 
        username, email, firstName, lastName, password
    } = req.body

    try {
        console.log(username, email, firstName, lastName, password)
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

        next(error)
    }
}


/** Login */ 
const login = async (req, res, next) => {
    const { username_or_email, password } = req.body

    try {
        const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(username_or_email)
        
        const user = await User.findOne({
            where: {
              [Op.or]: [
                { email: username_or_email },
                { username: username_or_email }
              ]
            }
        })

        if(user === null) {
            console.log("user not found")
            return next(new ErrorResponse('Invalid Credentials', 401))
        }

        

        const isPassword = await bcrypt.compare(password, user.password)

        if(!isPassword) {
            console.log('isPassword is false')
            return next(new ErrorResponse('Invalid Credentials', 401))
        }

        const token = generate_token(user.username, '3h')

        res.cookie('token', token, {
            httpOnly: true, // prevent client-side access to cookie
            secure: false,
            sameSite: 'Strict',
            maxAge: 10800000
        })
        res.status(201).json({ success: true, user: { username: user.username, email: user.email }})

    } catch (error) {
        console.log(`\n LOGIN ERROR: ${error}`)
        next(error)
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