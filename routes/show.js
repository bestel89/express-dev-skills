const express = require('express');
const router = express.Router();

// ! Controllers
const { index, show } = require('../controllers/index')

// Start endpoint: /skills
// Route endpoint: /
// Final endpoint: /skills
router.get('/', index)

// Endpoint: /skills/:id
// URL/Route Param
router.get('/:id', show)

module.exports = router