const Order = require('../models/Order');

exports.getOrderList = async (req, res) => {
  try {
    const orders = await Order.find().populate('items');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving order list' });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate('items');
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Order not found' });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    order.status = 'Completed';
    await order.save();
    res.json({ message: 'Order status updated' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Order not found' });
  }
};
