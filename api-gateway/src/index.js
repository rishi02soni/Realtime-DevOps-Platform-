const express = require("express");
const axios = require("axios");

const app = express();

app.get("/products", async (req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:3000/get-products");
        res.json(response.data);
    } catch (err) {
        console.error("FULL ERROR:", err);
        res.status(500).json({ error: "Gateway error" });
    }
});


app.listen(5000, () => {
  console.log("API Gateway running on port 5000");
});