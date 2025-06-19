document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = []; // track tasks for localStorage

    // Load tasks from localStorage on page load
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks); // Parse stored tasks array
        tasks.forEach(taskText => {
            // Recreate each task in the DOM
            const classList = document.createElement('li');
            classList.classList.add('task-item');
            classList.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            removeButton.onclick = function () {
                taskList.removeChild(classList);

                // remove from localStorage
                tasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated array
            };

            classList.appendChild(removeButton);
            taskList.appendChild(classList);
        });
    }

    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText.length === 0) {
            alert('Enter a task!');
        } else {
            const classList = document.createElement('li');
            classList.classList.add('task-item');
            classList.textContent = taskText;

            // Create a new button for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Assign an onclick event to the remove button
            removeButton.onclick = function () {
                taskList.removeChild(classList);

                // Remove from localStorage as well
                tasks = tasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
            };

            // Append the remove button to the <li>
            classList.appendChild(removeButton);

            // Append the <li> to the taskList
            taskList.appendChild(classList);

            // Save to localStorage
            tasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Clear the task input field
            taskInput.value = '';
        }
    }

    // Add an event listener to addButton
    addButton.addEventListener('click', function () {
        addTask();
    });

    // Add an event listener to taskInput
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
