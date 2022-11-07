const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'}) //jwt requires 3 argument, the login will expires in 3days
}

//login route
router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password) // the login func takes two argument email and password

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})//this will display the error message form the login func
    }
})

//sign up route
router.post('/signup', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password) // the signup func takes two argument email and password

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})//this will display the error message form the signup func
    }
})

module.exports = router