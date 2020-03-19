const express = require('express');
const data = require('../data');
const Route = express.Router();

Route.get('/data', (req, res) => {
	res.send(data);
});

module.exports = Route;
