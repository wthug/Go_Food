const express = require('express');
const router = express.Router()
const Order = require('../models/orders')

router.post('/orderData',async(req,res)=>{
    let data = req.body.data
    await data.splice(0,0,{Order_date:req.body.date})
    let eId = await Order.findOne({email:req.body.Email})
    
    if(eId===null){
        try {
            await Order.create({
                email:req.body.Email,
                order_data:[data]
            }).then(()=>{
                res.status(200).json({success:true})
            })
        } catch (err) {
            res.status(400).json({ error:"err "})
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.Email},{
                $push:{order_data:data}
            }).then(()=>{
                res.status(200).json({success:true})
            })
        } catch (err) {
            res.status(400).json({ error:"err"})
        }
    }
})

router.post("/myOrders",async(req,res)=>{
    try {
        let myData = await Order.findOne({email:req.body.email});
        res.status(200).json({Data:myData});

    } catch (err) {
        res.status(400).json({error:err})
    }
})

module.exports = router;