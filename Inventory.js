import React, { useState, useEffect } from 'eact';
import axios from 'axios';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [stockFilter, setStockFilter] = useState('All');

  useEffect(() => {
    axios.get('/api/inventory')
    .then(response => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
    .catch(error => {
        console.error(error);
      });
  }, []);

  const handleStockFilterChange = (event) => {
    const stock = event.target.value;
    setStockFilter(stock);
    const filteredItems = items.filter(item => item.stock === stock);
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <select value={stockFilter} onChange={handleStockFilterChange}>
        <option value="All">All</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Stock: {item.stock}</span>
            <button onClick={() => axios.delete(`/api/inventory/${item.id}`)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <NewItemForm />
    </div>
  );
};

export default Inventory;
