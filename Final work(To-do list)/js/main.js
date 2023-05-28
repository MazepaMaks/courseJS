class Task {
  constructor(name) {
    this.name = name;
    this.time = null;
    this.completed = false;
  }
}

const subButton = document.getElementById('sub-button');
const toDoList = document.getElementById('todo-list');
const inputTask = document.getElementById('input-task');
const filterAll = document.getElementById('filter-all');
const filterUncomplete = document.getElementById('filter-uncomplete');
const filterCompleted = document.getElementById('filter-completed');
const removeTasks = $('.main__clear');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function Value() {
  let taskValue = inputTask.value;
  return taskValue.charAt(0).toUpperCase() + taskValue.slice(1);
}

function delegateEvent(eventType, ancestorElement, targetElementSelector, listenerFunction) {
  ancestorElement.addEventListener(eventType, function(event) {
    if (event.target && event.target.matches && event.target.matches(targetElementSelector)) {
      listenerFunction(event);
    }
  });
}

function addTask() {
  if (inputTask.value === '') {
    alert("Please enter your task");
  } else {
    const taskName = Value();
    const task = new Task(taskName);
    const listItem = document.createElement('li');
    listItem.classList.add('main__item');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const taskNameElement = document.createElement('span');
    taskNameElement.textContent = task.name;
    const taskTimeElement = document.createElement('span');
    taskTimeElement.textContent = timeInput.value;
    taskContainer.appendChild(taskTimeElement);
    taskTimeElement.classList.add('time-font');
    if (task.completed) {
      taskNameElement.classList.add('completed');
      taskNameElement.style.textDecoration = 'line-through';
      taskNameElement.style.opacity = '0.3';
    }
    taskContainer.appendChild(taskNameElement);

    listItem.appendChild(taskContainer);
    toDoList.prepend(listItem);

    task.time = timeInput.value; // Зберігаємо час в об'єкті Task

    tasks.push(task);
    saveTasksToLocalStorage();
  }
  inputTask.value = '';
  timeInput.value = '';
}

function toggleTaskCompletion(event) {
  const taskItem = event.target;
  taskItem.classList.toggle('completed');
  const taskName = taskItem.textContent;
  const task = tasks.find(t => t.name === taskName);
  if (task) {
    task.completed = !task.completed;
    saveTasksToLocalStorage();
  }
}

function removeCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);//only uncomplete tasks
  saveTasksToLocalStorage();
  renderTasks();
}

function filterTasks(filterType) {
  let filteredTasks = tasks;
  if (filterType === 'uncomplete') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filterType === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }
  renderTasks(filteredTasks);
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(tasksToRender = tasks) {
  toDoList.innerHTML = '';

  tasksToRender.forEach(task => {
    const listItem = document.createElement('li');
    listItem.classList.add('main__item');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const taskNameElement = document.createElement('span');
    taskNameElement.textContent = task.name;
    if (task.completed) {
      taskNameElement.classList.add('completed');
      taskNameElement.style.textDecoration = 'line-through';
      taskNameElement.style.opacity = '0.3';
    }
    taskContainer.appendChild(taskNameElement);

    listItem.appendChild(taskContainer);
    toDoList.appendChild(listItem);
  });
}
function removeCompletedTasks() {
  $('.completed').remove();
}

removeTasks.on('click', removeCompletedTasks);
subButton.addEventListener('click', addTask);
delegateEvent('click', document, '.main__item', toggleTaskCompletion);
filterAll.addEventListener('click', () => renderTasks());
filterUncomplete.addEventListener('click', () => filterTasks('uncomplete'));
filterCompleted.addEventListener('click', () => filterTasks('completed'));

// Відображення завдань при завантаженні сторінки
renderTasks();
localStorage.clear()