const express = require('express');
const router = express.Router();

const AnonUser = require('../models/anonUser');

router.get('/', async (req, res) => {
    try {
        const anonUsers = await AnonUser.all;
        res.json({anonUsers})
    } catch(err) {
        res.status(500).json({err})
    }
})

// Create post route
router.post('/', async (req, res) => {
    try {
        const anonUser = await AnonUser.create(req.body.title, req.body.author, req.body.message)
        res.json(anonUser)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;
