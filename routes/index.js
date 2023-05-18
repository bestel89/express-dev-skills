var express = require('express');
var router = express.Router();

//! Custom modules
const {index, show} = require('../controllers/index')

/* GET home page. */
router.get('/', index)

//skills pages
router.get('/:id', show)

module.exports = router
