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
    const index = parseInt(req.params.index);
    deleteTodo(index);  // This calls the function from todos.js
    res.status(200).json(getTodos());  // Responds with the updated list
});
  

module.exports = app;
