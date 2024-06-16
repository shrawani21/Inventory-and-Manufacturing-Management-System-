const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const orders = require('./routes/orders');
const inventory = require('./routes/inventory');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use('/api/orders', orders);
  server.use('/api/inventory', inventory);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log('Server started on port 3000');
    connectDB();
  });
});
