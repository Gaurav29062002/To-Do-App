const express = require('express');
const app = express();
app.use(express.json());

const todos = require('./todos');

app.get('/todos', (req, res) => {
  res.json(todos.getTodos());
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.addTodo(task);
  res.status(201).json({ message: 'Todo added.' });
});

app.delete('/todos/:index', (req, res) => {
  todos.deleteTodo(parseInt(req.params.index));
  res.json({ message: 'Todo deleted.' });
});

module.exports = app;
