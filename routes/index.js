var express = require('express');
var router = express.Router();

//! Custom modules
const {index, show, new: newSkill, create} = require('../controllers/index')

/* GET home page. */
router.get('/', index)

// GET /new
router.get('/new', newSkill)

// GET /:id
router.get('/:id', show)

// POST /
router.post('/', create)



module.exports = router
