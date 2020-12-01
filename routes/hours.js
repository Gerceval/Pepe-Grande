const express = require('express');
const router = express.Router();

const hoursController = require('../controllers/hours');

router.post('/', hoursController.createOneHours);

router.put('/:id', hoursController.modifyOneHours);

router.delete('/:id', hoursController.deleteOneHours);

router.get('/:id', hoursController.getOneHours);

module.exports = router;
