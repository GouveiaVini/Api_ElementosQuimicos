const express = require('express');
const server = express();
const elementos = require('./src/data/elementos.json')

server.listen(4000, () => {
  console.log("Servidor ativo");
});

server.get('/elementos', (req, res) => {
  return res.json(elementos);
})