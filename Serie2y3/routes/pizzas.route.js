const express = require('express');
const router = express.Router();

const pizza_controller = require('../controllers/pizzas.controller');

router.get('/test', pizza_controller.test);

router.post('/create', pizza_controller.pizzas_create);

router.get('/:id', pizza_controller.pizzas_details);

router.put('/:id/update', pizza_controller.pizzas_update);

router.delete('/:id/delete', pizza_controller.pizzas_delete);
module.exports = router;