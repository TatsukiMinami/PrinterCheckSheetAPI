var express = require('express');
//setting routing
var router = express.Router();

//routing detial

router.use('/article',require('./article.js'));
router.use('/user',require('./user.js'));


module.exports = router;