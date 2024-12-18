require('dotenv').config()

const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { body, validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.SEC 

//for sign up
router.post('/creatuser',[
    body('email','not a valid e-mail').isEmail(),
    body('password','password must be of minimum 5 characters').isLength({ min: 5})
],async(req,res)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        console.log('invalide data')
        return res.status(400).json({ error:err.array()})
    }
    const {name,email,location} =req.body
    const salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password,salt)

    try {
        const oldUser = await User.findOne({email})
        if(oldUser){
            return res.status(400).json({error:"already have an account with this email"})
        }
        
        const newUser=await User.create({name,email,password,location});
        res.status(200).json(newUser)
    } catch (err) {
        console.log(err);
        res.status(400).json({ error:'not valid data' })
    }
    
})


// for logging in
router.post('/loginuser',[
    body('email','not a valid e-mail').isEmail(),
    ],async(req,res)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        console.log('invalide data')
        return res.status(400).json({ error:err.array()})
        
    }
    try {
        const email=req.body.email
        const pass=req.body.password
        const userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({error:'enter valid credentials'})
        }
        const comparePass = await bcrypt.compare(pass,userData.password);
        if(!comparePass){
            return res.status(400).json({error:'enter valid credentials'})
        }

        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)

        res.status(200).json({success:true,authToken:authToken})
    } catch (err) {
        console.log(err);
        res.status(400).json({ error:'not valid data' })
    }
    
})


module.exports = router;