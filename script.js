document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        var taskText = taskInput.ariaValueMax.trim();

        if (taskText.length === 0) {
            alert('Enter a task!');
        } else {
            const listItem = document.createElement('li')
            listItem.textContent = taskText;
            const removeButton = document.createElement('button')
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-button'
            removeButton.addEventListener('click', function () {
                listItem.pop();
            })
            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
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