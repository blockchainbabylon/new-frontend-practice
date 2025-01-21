// Get DOM elements
const taskInput = document.getElementById('task-name');
const taskPriority = document.getElementById('task-priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list before rendering
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        // Set priority color
        const priorityClass = task.priority.toLowerCase();
        const priorityElement = document.createElement('span');
        priorityElement.classList.add('priority', priorityClass);
        priorityElement.textContent = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);

        // Task content
        const taskText = document.createElement('span');
        taskText.textContent = task.name;

        // Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.addEventListener('click', () => toggleCompletion(index));

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        // Append elements to the list item
        li.appendChild(priorityElement);
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        // Append list item to the task list
        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask() {
    const taskName = taskInput.value.trim();
    const priority = taskPriority.value;

    if (taskName) {
        tasks.push({
            name: taskName,
            priority: priority,
            completed: false
        });
        taskInput.value = ''; // Clear input field
        saveTasks();
        renderTasks();
    }
}

// Function to toggle task completion
function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for add task button
addTaskButton.addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
