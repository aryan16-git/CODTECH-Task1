document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const todoInput = document.getElementById('todo-input');
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const todoList = document.getElementById('todo-list');

 
  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  newTask.addEventListener('click', function () {
    this.classList.toggle('completed');
  });


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();  
    todoList.removeChild(newTask);
  });

  newTask.appendChild(deleteBtn);
  todoList.appendChild(newTask);

  todoInput.value = '';
}
