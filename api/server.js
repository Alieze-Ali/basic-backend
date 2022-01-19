const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

//middlewares
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'this server is live baby',
        time: new Date().toLocaleTimeString(),
    })
})

module.exports = server