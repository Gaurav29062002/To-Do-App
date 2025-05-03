let todoList = [];

function getTodos() {
  return todoList;
}

function addTodo(task) {
  todoList.push(task);
}

function deleteTodo(index) {
  todoList.splice(index, 1);
}

module.exports = { getTodos, addTodo, deleteTodo };
