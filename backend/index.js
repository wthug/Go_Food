require('dotenv').config()
const express = require('express')
const app = express()
const userRoutes = require('./routes/login_signup') 
const mongoose = require('mongoose')  
const getRoutes = require('./routes/get')

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.mathode)
    next()
})
app.use('/api',userRoutes)
app.use('/api',getRoutes)

mongoose.connect(process.env.URI)
    .then(async ()=>{
        app.listen(process.env.PORT,()=>{
            console.log("connected to db and listening on port "+process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })