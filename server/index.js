// API Codes
// run npm start

// for client run npm run dev
const express = require("express")
const mongoose = require ("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

// transport data frontend and backend code to json
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect( "mongodb://127.0.0.1:27017/employee");


// prints on page from backend and frontend if login was successful, and also post if login hasn't been registered
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user) {
            if(user.password === password) {
                res.json("Success")
            }
            else { 
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }

    }) 
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})