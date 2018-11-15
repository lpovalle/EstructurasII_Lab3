const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pizzasSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    dough: {type: String, required: true},
    ingredients: {type: Array, required: true},
    size: {type: String, required: true},
    portions: {type: Number, required: true},
    extracheese: {type: Boolean, required: true},
});

module.exports = mongoose.model('Pizza', pizzasSchema);