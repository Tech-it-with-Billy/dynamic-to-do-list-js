document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    loadTasks();

    
    function addTask(taskText = null, save = true) {
        const task = taskText || taskInput.value.trim();

        if (task.length === 0) {
            alert('Enter a task!');
        } else {
            const classList = document.createElement('li');
            classList.classList.add('task-item');
            classList.textContent = task;

            // Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function () {
                taskList.removeChild(classList);

                // Remove task from localStorage
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = storedTasks.filter(t => t !== task);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            };

            // Append the remove button to the <li>
            classList.appendChild(removeButton);

            // Append the <li> to the taskList
            taskList.appendChild(classList);

            // Save new task to localStorage if 'save' is true
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            // Clear the task input field
            taskInput.value = '';
        }
    }

    // Load tasks from localStorage and add to DOM without re-saving
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(task => addTask(task, false));
    }

    // Add an event listener to addButton
    addButton.addEventListener('click', function () {
        addTask();
    });

    // Add an event listener to taskInput for "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
