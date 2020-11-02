const express = require('express');
const pokemons = require('./data/pokemons');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/pokemons', (req, res) => {
  res.json(pokemons);
});

app.get('/api/pokemons/:id', (req, res) => {
  const pokemon = pokemons.find((p) => p._id === req.params.id);
  res.json(pokemon);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
