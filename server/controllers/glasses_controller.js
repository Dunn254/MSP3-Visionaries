const express = require('express');
const glasses = express.Router();
const db = require('../models')
const { Glasses } = db

glasses.get('/', async(req, res) => {
    try {
        const foundGlasses = await Glasses.findAll()
        res.status(200).json(foundGlasses)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(error)
    }
})

module.exports = glasses