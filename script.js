document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText.length === 0) {
        alert('Enter a task!');
    } else {
        const classList = document.createElement('li');
        classList.classList.add('task-item');

        // Create a new button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(classList);
        };

        // Append the remove button to the <li>
        classList.appendChild(removeButton);

        // Append the <li> to the taskList
        taskList.appendChild(classList);

        // Clear the task input field
        taskInput.value = '';
    }
}

    // Add an event listener to addButton
    addButton.addEventListener('click', function () {
        addTask();
    })

    // Add an event listener to taskInput
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })

    // Invoke the addTask function
    document.addEventListener('DOMContentLoaded', function () {
        addTask();
    })
})