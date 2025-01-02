// Controllers for users actions of following and unfollowing users
const Following = require("../models/following")
const User = require("../models/user")


const follow_user = async (req, res, next) => {
    const user_to_follow = req.params.username
    console.log(user_to_follow, req.username)
    try {
        const findUser = User.findOne({
            where: { username: user_to_follow }
        })

        if(!findUser) {
            return res.status(404).json({ success: false, msg: "Oops! That user cannot be found!" })
        }

        await Following.create({
            user_follows: req.username,
            user_followed: findUser.username
        })

        console.log(`${req.username} successfully followed ${findUser.username}`)

        res.status(201).json({ success: true, msg: "User successfully followed" })
    } catch (error) {
        console.error(`\n\n Error following: ${error}`)
        next(error)
    }
}

// unfollow a user
const unfollow_user = async (req, res, next) => {
    const user_to_unfollow = req.params.username

    try {
        const findUser = await Following.findOne({
            where: {
                username: user_to_unfollow
            }
        })

        if(!findUser) {
            console.log(`${user_to_unfollow} not found`)
            res.status(404).status({ success: false, msg: "User not found"})
        }

        await Following.destroy({
            where: {
                user_followed: findUser.username,
                user_follows: req.username
            }
        })

        console.log(`${req.username} unfollowed ${findUser.username}`)

        res.status(201).json({ success: true })
    } catch (error) {
        console.error(`\n\n User not unfollowed: ${error}`)
        next(error)
    }
}


// get all of a users followers
const get_followers = async (req, res, next) => {
    const user = req.username

    try {
        const allFollowers = await Following.findAll({
            where: {
                user_followed: user
            }
        })

        if(allFollowers.length === 0) {
            console.log('No followers found')
            res.status({ success: true, msg: "0 followers"})
        }

        console.log(allFollowers.length)

        res.status(200).json({ success: true, results: [ ...allFollowers ] })
    } catch (error) {
        console.log(`\n\nError: ${error}`)
        next(error)
    }
}

// get all the users a user follows
const get_users_followed = async (req, res, next) => {
    const user = req.username

    try {
        const allFollows = await Following.findAll({
            where: {
                user_follows: user
            }
        })

        if(allFollows.length === 0) {
            console.log('No follows found')
            res.status({ success: true, results: 0 })
        }

        console.log(allFollows.length)

        res.status(200).json({ success: true, results: [ ...allFollows ] })
    } catch (error) {
        console.log(`\n\nError: ${error}`)
        next(error)
    }
}


module.exports = { follow_user, get_followers, get_users_followed, unfollow_user }