require('dotenv').config(); 

const express = require('express')
const mongoose = require('mongoose')
const app = express();

//imorting medicine routes i.e medicine.js
const medicineRoutes = require('./routes/medicine')
const appointmentRoutes = require('./routes/appointment')
const userRoutes = require('./routes/user')

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
app.use('/user', userRoutes)

const port = process.env.PORT || 4000

//for deployment
// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("Frontend/build"));
// }

//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //getting port number through env file & listening to requests
        app.listen(port , () => {
            console.log(`connected to db & listening on port ${port}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

