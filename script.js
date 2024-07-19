function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');

    const task = taskInput.value;
    const date = dateInput.value;

    if (task && date) {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.innerHTML = `
            ${task} (${date})
            <div class="task-buttons">
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="complete" onclick="completeTask(this)">Complete</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);

        taskInput.value = '';
        dateInput.value = '';
    }
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.childNodes[0].textContent.split(' (')[0];
    const dateText = li.childNodes[0].textContent.split(' (')[1].slice(0, -1);

    document.getElementById('taskInput').value = taskText;
    document.getElementById('dateInput').value = dateText;

    li.remove();
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.style.textDecoration = 'line-through';
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
