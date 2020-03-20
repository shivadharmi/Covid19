const express = require('express');
const data = require('../data');
const Route = express.Router();

Route.get('/data/advices', (req, res) => {
	res.send(data.advices);
});

Route.get('/data/myths', (req, res) => {
	res.send(data.myths);
});
Route.get('/data/barData', (req, res) => {
	res.send(data.barData);
});
module.exports = Route;
