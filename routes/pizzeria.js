const express = require('express');
const router = express.Router();

const pizzeriaController = require('../controllers/pizzeria');

router.post('/', pizzeriaController.createOnepizzeria);

router.put('/:id', pizzeriaController.modifyOnepizzeria);

router.delete('/:id', pizzeriaController.deleteOnepizzeria);

router.get('/:id', pizzeriaController.getOnePizzeria);

module.exports = router;
