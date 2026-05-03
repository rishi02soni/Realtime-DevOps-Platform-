import express = require('express');

const app = express();
const PORT = 3001; // ⚠️ different port

app.get('/', (req, res) => {
  res.send('Product Service Running 🚀');
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});