require('dotenv/config');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.get('/tasks', (req, res) => {
  return res.send( [
    {task: "Two 45-minute workouts (at least one workout outdoors) 🏋️", completed: false, id: 1},
    {task:  "Drink 1 gallon of water 🚰", completed: false, id: 2},
    {task:  "No Alcohol or Cheat Meals ❌", completed: false, id: 3},
    {task:  "Read 10 pages of non-fiction 📚", completed: false, id: 4},
    {task:  "Follow a diet ✍️", completed: false, id: 5},
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
