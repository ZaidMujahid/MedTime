const mongoose = require('mongoose')

const Schema = mongoose.Schema

const medicineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    about: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    },
    user_id: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('Medicine', medicineSchema)
