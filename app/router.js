const express = require('express');
const Controller = require('./controller');

const router = express.Router();

router.get('/test/startIP',Controller.scrapingIP);

module.exports = router;
