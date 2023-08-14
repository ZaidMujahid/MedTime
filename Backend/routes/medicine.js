const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Medicine = require('../models/medicineModel')
const requireAuth = require('../middleware/requireAuth')

//middleware for protecting all the routes, first it will check if the user is authenticated if yes then it will move forward
router.use(requireAuth)

//GET all reminders
router.get('/', async (req, res) => {
    const user_id = req.user._id

    //find all the medicines based on user_id and sort them according to the created time
    const medicines = await Medicine.find({ user_id }).sort({time: -1})

    res.status(200).json(medicines)
})

//GET single reminder
router.get('/:id', async (req, res) => {
    //get the id of a single reminder
    const { id } = req.params
    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such medicine'})
    }
    //find the medicine by that id
    const medicine = await Medicine.findById(id)
    //if medicine is not found then error else show the medicine
    if(!medicine){
        return res.status(404).json({error: 'No such medicine'})
    }
    res.status(200).json(medicine)
})

//POST a new reminder
router.post('/', async (req, res) => {
    //destructuring the required properties
    const {title, count, about, time} = req.body;
    
    //error message
    let emptyFields = []
    if(!title) emptyFields.push('title')
    if(!count) emptyFields.push('count')
    if(!time) emptyFields.push('time')

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill all the required fields'})
    }
    
    //create a reminder
    try {
        const user_id = req.user._id
        const medicine = await Medicine.create({title, count, about, time, user_id})
        res.status(200).json(medicine)
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
        return res.status(404).json({error: 'No such medicine'})
    }
    //delete by id
    const medicine = await Medicine.findOneAndDelete({_id: id})
    if(!medicine){
        return res.status(404).json({error: 'No such medicine'})
    }
    res.status(200).json(medicine)

})

//UPDATE a single reminder
router.patch('/:id', async (req, res) => {
    //get the id of a single reminder
    const { id } = req.params
    //check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such medicine'})
    }
    //updating
    const medicine = await Medicine.findOneAndUpdate({_id: id}, {
        ...req.body //the data in body is in object so spreading the body data and storing it in medicine object
    })

    if(!medicine){
        return res.status(404).json({error: 'No such medicine'})
    }
    res.status(200).json(medicine)
})

module.exports = router