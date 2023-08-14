const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    description: {
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


module.exports = mongoose.model('Appointment', appointmentSchema)
