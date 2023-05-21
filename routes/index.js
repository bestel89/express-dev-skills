var express = require('express');
var router = express.Router();

//! Custom modules
const skillsCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', skillsCtrl.index)

// GET /new
router.get('/new', skillsCtrl.new)

// GET /:id
router.get('/:id', skillsCtrl.show)

// POST /
router.post('/', skillsCtrl.create)

// POST / DELETE
router.delete('/:id', skillsCtrl.delete)



module.exports = router
