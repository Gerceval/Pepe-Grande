const mongoose = require('mongoose');

const pizzeriaSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
});

module.exports = mongoose.model('Pizzeria', pizzeriaSchema);
