const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/InventoryController');

router.get('/', inventoryController.getInventoryList);
router.post('/add', inventoryController.addItem);
router.put('/edit/:id', inventoryController.editItem);
router.delete('/delete/:id', inventoryController.deleteItem);

module.exports = router;
