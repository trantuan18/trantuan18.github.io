var express = require('express');
var router = express.Router();

const shipperRoute = require('./shippers');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use('/', shipperRoute);

module.exports = router;
