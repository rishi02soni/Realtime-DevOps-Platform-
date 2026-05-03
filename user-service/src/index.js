// import express from "express";
// import axios from "axios";

// const app = express();

// app.get("/get-products", async (req, res) => {
//   try {
//     const response = await axios.get("http://product-service:3001/products");
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });

// app.listen(3000, () => {
//   console.log("User service running on port 3000");
// });
const express = require("express");

const app = express();

app.get("/get-products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

app.listen(3000, () => {
  console.log("User service running on port 3000");
});