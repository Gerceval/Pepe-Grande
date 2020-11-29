const mongoose = require('mongoose');

const hoursSchema = mongoose.Schema({
    day: { type: String, required: true },
    first_service: { type: String, required: false, default: null },
    second_service: { type: String, required: false, default: null }
});

module.exports = mongoose.model('Hours', hoursSchema);
