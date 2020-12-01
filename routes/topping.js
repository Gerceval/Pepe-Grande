const express = require('express');
const router = express.Router();

const toppingController = require('../controllers/topping');

router.post('/', toppingController.createOneTopping);

router.put('/:id', toppingController.modifyOneTopping);

router.delete('/:id', toppingController.deleteOneTopping);

router.get('/:id', toppingController.getOneTopping);

module.exports = router;
