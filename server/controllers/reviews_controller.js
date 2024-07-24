const reviews = require('express').Router()
const db = require('../models')
const { Review } = db

reviews.get('/', async(req, res) => {
    try {
        const foundReviews = await Review.findAll()
        res.status(200).json(foundReviews)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(err)
    }
})

module.exports = reviews