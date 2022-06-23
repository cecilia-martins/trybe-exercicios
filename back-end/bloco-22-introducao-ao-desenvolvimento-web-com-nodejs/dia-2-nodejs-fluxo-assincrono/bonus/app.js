const express = require("express");
const { randomUUID } = require("crypto");
const app = express();

app.use(express.json());


const products = [];

app.post("products", (req, res) => {
  // nome e preço
  const {name, price} = req.body; // tudo que estamos recebendo
  
  const product = {
    name,
    price,
    id: randomUUID()
  }
  
  products.push({
    product
  });
  return res.json(product);
});

app.listen(4002, () => console.log("Servidor na porta 4002"));

