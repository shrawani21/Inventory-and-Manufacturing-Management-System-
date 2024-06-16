const Item = require('../models/Item');

exports.getInventoryList = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving inventory list' });
  }
};

exports.addItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.json({ message: 'Item added successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding item' });
  }
};

exports.editItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);
    item.name = req.body.name;
    item.stock = req.body.stock;
    await item.save();
    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Item not found' });
  }
};

exports.deleteItem =async (req, res) => {
  try {
    const itemId = req.params.id;
    await Item.findByIdAndDelete(itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Item not found' });
  }
};
