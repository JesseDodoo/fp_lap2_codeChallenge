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

module.exports = router;
