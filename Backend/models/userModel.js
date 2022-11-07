const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method on a model
userSchema.statics.signup = async function(email, password) {

    //validator - email validation, checks for email and password
    if(!email || !password){
        throw Error('All fields must be filled!')// we throw error and catch it where we call the function
    }
    if(!validator.isEmail(email)){
        throw Error('Not a valid email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    const exists = await this.findOne({email})
    if(exists){
        throw Error('This email is already registered')
    }

    //bcrypt - it adds a hash value in the password to secure it uses a salt value, more the salt value stronger the hashing is and more the time taken for user to register

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash })// we would generally have used User.create but User is not defined yet we are exporting it, so thats why we use this.create, while using this we cannot use arrow function we have to use older syntax

    return user //returning user to when we call the fucntion elsewhere
}

//static login method on a model
userSchema.statics.login = async function(email, password) {
    if(!email || !password){
        throw Error('All fields must be filled!')// we throw error and catch it where we call the function
    }
    const user = await this.findOne({ email })

    if(!user){
        throw Error('Invalid email!')
    }
    const match = await bcrypt.compare(password, user.password) // the password entered here is compared with the hashed password that is stored in user.
    if(!match){
        throw Error('Invalid password!')
    }
    return user
}
module.exports = mongoose.model('User', userSchema)