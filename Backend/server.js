require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const app = express();

//imorting medicine routes i.e medicine.js
const medicineRoutes = require('./routes/medicine')
const appointmentRoutes = require('./routes/appointment')

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//Using routes
//when we fire req to /reminders then use medicineRoutes, so it will add the path according to the req, ex: for get it will be /reminders/
app.use('/reminders', medicineRoutes)
app.use('/appointments', appointmentRoutes)


//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //getting port number through env file & listening to requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })



