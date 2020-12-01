const express = require('express');
const router = express.Router();

const pizzaController = require('../controllers/pizza');

router.post('/', pizzaController.createOnePizza);

router.put('/:id', pizzaController.modifyOnePizza);

router.delete('/:id', pizzaController.deleteOnePizza);

router.get('/:id', pizzaController.getOnePizza);

module.exports = router;
