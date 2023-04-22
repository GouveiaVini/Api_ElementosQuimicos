const express = require('express');
const server = express();
const elementos = require('./src/data/elementos.json')


server.listen(process.env.PORT || 3000);

server.get('/', function(req, res){
  res.send("helloWord")
})

server.get('/elementos', (req, res) => {
  return res.json(elementos);
})


