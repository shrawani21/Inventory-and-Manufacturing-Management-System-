const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

router.get('/', orderController.getOrderList);
router.get('/:id', orderController.getOrderDetails);
router.patch('/:id', orderController.updateOrderStatus);

module.exports = router;
