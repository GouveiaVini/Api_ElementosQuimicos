const express = require('express');
const server = express();
const elementos = require('./src/data/elementos.json')

// server.listen(4000, () => {
//   console.log("Servidor ativo");
// });

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

server.configure(function() {
  server.use(allowCrossDomain);
})

server.listen(process.env.PORT || 3000);

server.get('/', function(req, res){
  res.send("helloWord")
})

server.get('/elementos', (req, res) => {
  return res.json(elementos);
})


