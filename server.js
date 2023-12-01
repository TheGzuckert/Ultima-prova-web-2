const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/users', (req, res) => {
  const { nome, data_nascimento, email } = req.body;
  if (!nome || !data_nascimento || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newUser = {
    id: uuidv4(),
    nome,
    data_nascimento,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;

  users = users.map(u => (u.id === userId ? { ...u, ...updateUser } : u));
  res.json({ message: 'User updated successfully' });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
