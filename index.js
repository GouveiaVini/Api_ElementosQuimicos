const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.listen(3333, () => console.log('server is running on port 3333'));

const elements = require('./src/data/elementos.json')

app.get('/', (req, res) => res.status(200).send('Hello Word'));

app.get('/elements', (req, res) => res.send(elements));



