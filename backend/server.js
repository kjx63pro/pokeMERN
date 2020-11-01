const express = require('express');
const pokemons = require('./data/pokemons');

const app = express();

const port = 5000;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
