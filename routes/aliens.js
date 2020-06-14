const express = require("express")
const router =  express.Router()
const Alien = require("../models/alien")

router.get('/', async(req, res) => {
    try {
        const aliensList = await Alien.find()
        res.json(aliensList)
    }catch(err) {
        res.send('Error ' + err)
    }
    
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
       const savedInfo = await alien.save()
       res.json(savedInfo)

    }catch(err){
        res.send('Error' + err)
    }
})
module.exports = router