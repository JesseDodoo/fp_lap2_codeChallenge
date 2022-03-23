const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


const anonUserRoutes = require('./controllers/users')
server.use('/users', anonUserRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server
