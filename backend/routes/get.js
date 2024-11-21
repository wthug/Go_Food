const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/foodData',async(req,res)=>{
    const itemsCollection = mongoose.connection.collection('food_items')
    const food_items=await itemsCollection.find({}).toArray()

    const categoryCollection = mongoose.connection.collection('food_category')
    const food_category = await categoryCollection.find({}).toArray()
    res.status(200).json([food_category,food_items])
})

module.exports =router; 