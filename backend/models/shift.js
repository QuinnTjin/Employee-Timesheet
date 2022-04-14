const mongoose = require("mongoose");

const shiftSchema = mongoose.Schema({
    date: {type: String},
    timestart: {type: String},
    timeout: {type: String},
    active: {type: Boolean},
})

module.exports = mongoose.model("Shift", shiftSchema)