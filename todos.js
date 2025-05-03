let todoList = [];

function getTodos() {
  return todoList;
}

function addTodo(task) {
  todoList.push(task);
}

function deleteTodo(index) {
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);  // Delete the todo only if the index is valid
    }
  }
  

module.exports = { getTodos, addTodo, deleteTodo };
