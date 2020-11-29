const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    base: { type: Number, required: true },
    description: { type: String, required: false, default: null },
    isVege: {type: Boolean, required: true},
    toppings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topping'
    }],
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Pizza', pizzaSchema);
