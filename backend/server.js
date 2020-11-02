import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import pokemons from './data/pokemons.js';

dotenv.config();

connectDB();

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
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
