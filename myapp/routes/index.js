var express = require('express');
var router = express.Router();

const shipperRoute = require('./shippers');

router.use('/', shipperRoute);

module.exports = router;