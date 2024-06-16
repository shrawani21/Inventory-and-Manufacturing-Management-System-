const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  stock: Number
});

module.exports = mongoose.model('Item', itemSchema);
