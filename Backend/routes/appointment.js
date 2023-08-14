const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Appointment = require('../models/appointmentModel')
const requireAuth = require('../middleware/requireAuth')

//middleware for protecting all the routes, first it will check if the user is authenticated if yes then it will move forward
router.use(requireAuth)

//GET all reminders
router.get('/', async (req, res) => {
    const user_id = req.user._id

    //find all the appointments based on user_id and sort them according to the created time
    const appointments = await Appointment.find({ user_id }).sort({time: -1})

    res.status(200).json(appointments)
})

//GET single reminder
router.get('/:id', async (req, res) => {
    //get the id of a single reminder
    const { id } = req.params
    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such appointment'})
    }

    //find the appointment by that id
    const appointment = await Appointment.findById(id)
    //if appointment is not found then error else show the appointment
    if(!appointment){
        return res.status(404).json({error: 'No such appointment'})
    }
    res.status(200).json(appointment)
})

//POST a new reminder
router.post('/', async (req, res) => {
    //destructuring the required properties
    const {name, number, description, time} = req.body;

    //error message
    let emptyFields = []
    if(!name) emptyFields.push('name')
    if(!number) emptyFields.push('number')
    if(!time) emptyFields.push('time')

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill all the required fields'})
    }

    //create a reminder
    try {
        const user_id = req.user._id
        const appointment = await Appointment.create({name, number, description, time, user_id})
        res.status(200).json(appointment)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE single reminder
router.delete('/:id', async (req, res) => {
    //get the id of a single reminder
    const { id } = req.params
    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such appointment'})
    }
    //delete by id
    const appointment = await Appointment.findOneAndDelete({_id: id})
    if(!appointment){
        return res.status(404).json({error: 'No such appointment'})
    }
    res.status(200).json(appointment)

})

//UPDATE a single reminder
router.patch('/:id', async (req, res) => {
    //get the id of a single reminder
    const { id } = req.params
    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such appointment'})
    }
    //updating
    const appointment = await Appointment.findOneAndUpdate({_id: id}, {
        ...req.body //the data in body is in object so spreading the body data and storing it in appointment object
    })

    if(!appointment){
        return res.status(404).json({error: 'No such appointment'})
    }
    res.status(200).json(appointment)
})

module.exports = router