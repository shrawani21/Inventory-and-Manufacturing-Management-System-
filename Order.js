const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: String,
  status: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
});

module.exports = mongoose.model('Order', orderSchema);
