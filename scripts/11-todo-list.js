const todoList = [];
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  todoList.push(inputElement.value);
  inputElement.value = ''
  renderTodoList();
}
function renderTodoList() {
  let todoListHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;

}