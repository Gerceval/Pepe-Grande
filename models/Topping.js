const mongoose = require('mongoose');

const toppingSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: null }
});

module.exports = mongoose.model('Topping', toppingSchema);
