const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const elements = require('./src/data/elementos.json')

app.get('/', (req, res) => res.status(200).send('Hello Word'));

app.get('/elements', (req, res) => res.status(200).send(elements));

app.listen(3333, () => console.log('server is running on port 3333'));


