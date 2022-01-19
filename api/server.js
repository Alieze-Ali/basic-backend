const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('I love node!')
})

module.exports = server