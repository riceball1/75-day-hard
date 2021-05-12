require('dotenv/config');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.get('/tasks', (req, res) => {
  return res.send( [
    "Two 45-minute workouts (at least one workout outdoors) 🏋️",
    "Drink 1 gallon of water 🚰",
    "No Alcohol or Cheat Meals ❌",
    "Read 10 pages of non-fiction 📚",
    "Follow a diet ✍️",
  ]);
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
