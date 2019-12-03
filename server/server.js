const express = require('express')
const server = express()
const animalRoutes = require('./routes/animals')

server.use(express.json())
server.use(express.static('public'))
server.use('/api/animals', animalRoutes)

module.exports = server