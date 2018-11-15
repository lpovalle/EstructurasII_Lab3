const express = require('express');
const router = express.Router();

const pizza_controller = require('../controllers/pizzas.controller');

router.get('/test', pizza_controller.test);

module.exports = router;