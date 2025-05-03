let todoList = [];

function getTodos() {
  return todoList;
}

function addTodo(task) {
  todoList.push(task);
}

function deleteTodo(index) {
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);  // Correctly deletes the todo at the given index
    }
  }

module.exports = { getTodos, addTodo, deleteTodo };
