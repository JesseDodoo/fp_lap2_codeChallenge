const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


// const footballRoutes = require('./controllers/footballers')
// server.use('/footballers', footballRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server
