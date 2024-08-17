const express = require('express');
const {sayHello,handleIncomingUrl} = require('../controllers/urlController');

const staticRoute = express.Router();

staticRoute.route('/').get(sayHello);

module.exports = staticRoute;