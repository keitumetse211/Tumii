const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = './data.json';

// Helper functions
function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE));
  } catch {
    return { products: [], customers: [], sales: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Products
app.get('/products', (req, res) => {
  const data = readData();
  res.json(data.products);
});

app.post('/products', (req, res) => {
  const data = readData();
  data.products.push(req.body);   // Add product
  writeData(data);                // Write full data back
  res.json({ message: 'Product added!' });
});

// Customers
app.get('/customers', (req, res) => {
  const data = readData();
  res.json(data.customers);
});

app.post('/customers', (req, res) => {
  const data = readData();
  data.customers.push(req.body);
  writeData(data);
  res.json({ message: 'Customer added!' });
});

// Sales
app.get('/sales', (req, res) => {
  const data = readData();
  res.json(data.sales);
});

app.post('/sales', (req, res) => {
  const data = readData();
  data.sales.push(req.body);
  writeData(data);
  res.json({ message: 'Sale recorded!' });
});

// Reporting
app.get('/report', (req, res) => {
  const data = readData();
  const totalProducts = data.products.length;
  const totalSales = data.sales.reduce((sum, s) => sum + s.quantity, 0);
  res.json({ totalProducts, totalSales });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
