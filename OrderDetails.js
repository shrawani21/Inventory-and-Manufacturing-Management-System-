import React from 'eact';
import axios from 'axios';

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.get(`/api/orders/${orderId}`)
     .then(response => {
        setOrder(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, [orderId]);

  return (
    <div>
      <h1>Order Details</h1>
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Stock: {item.stock}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => axios.patch(`/api/orders/${orderId}`, { status: 'Completed' })}>
        Mark as Completed
      </button>
    </div>
  );
};

export default OrderDetails;
