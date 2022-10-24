const { isContentEditable } = require('@testing-library/user-event/dist/utils')
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
    }
    // time: {
    //     var isoDate = new Date({IS})
    // }
})

module.exports = mongoose.model('Medicine', medicineSchema)