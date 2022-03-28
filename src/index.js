const express = require('express');
const Player = require('./models/Player');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/players', async (_req, res) => {
  const allPlayers = await Player.getAll();
  return res.status(200).json(allPlayers);
});

app.get('/players/:id', async (req, res) => {
  const { id } = req.params;
  const player = await Player.getById(id);
  return res.status(200).json(player);
});

app.post('/players', async (req, res) => {
  const body = req.body;
  const player = await Player.create(body);
  return res.status(201).json(player);
});

app.put('/players/:id', async (req, res) => {
    const {nickname, firstname, lastname, team, role, nationality, age} = req.body;
    const { id } = req.params;
    await Player.update(nickname, firstname, lastname, team, role, nationality, age, id);
  
    return res.status(200).json({
      id,
      nickname,
      firstname,
      lastname,
      team,
      role,
      nationality,
      age
    });
})

app.delete('/players/:id', async (req, res) => {
  const { id } = req.params;

  await Player.remove(id);

  return res.status(200).end();
})

app.listen(PORT, () => console.log(`Server online on port ${PORT}`));
