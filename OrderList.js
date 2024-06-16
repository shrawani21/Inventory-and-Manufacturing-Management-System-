import React, { useState, useEffect } from 'eact';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    axios.get('/api/orders')
     .then(response => {
        setOrders(response.data);
        setFilteredOrders(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleStatusFilterChange = (event) => {
    const status = event.target.value;
    setStatusFilter(status);
    const filteredOrders = orders.filter(order => order.status === status);
    setFilteredOrders(filteredOrders);
  };

  return (
    <div>
      <h1>Order List</h1>
      <select value={statusFilter} onChange={handleStatusFilterChange}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id}>
            <span>{order.customer}</span>
            <span>{order.status}</span>
            <span>{order.items.length} items</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
