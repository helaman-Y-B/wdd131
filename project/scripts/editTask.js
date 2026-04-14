const editTaskBtn = document.getElementById("edit-task");
let editFormCount = 0; //Counts the amount of forms.

editTaskBtn.addEventListener("click", () => {
    const editTaskForm = document.createElement("form");
    editTaskForm.id = "task-form";
    editTaskForm.method = "post";
    editTaskForm.onsubmit = (e) => e.preventDefault(); // Prevent form submission for now
    const formPlace = document.getElementById("menu");

    if (editFormCount > 0) {
        alert("Please complete the existing form before edditing a task.");
        return;
    }

    editTaskForm.innerHTML = `
        <fieldset id="select-task-fieldset">
            ${createInputTasks()}
        </fieldset>
        <fieldset>
            <legend>Due date</legend>
            <input type="date" id="due-date" required>
        </fieldset>
        <fieldset>
            <legend>Notes</legend>
            <textarea id="task-notes" name="message" rows="5" placeholder="Additional notes..."></textarea>
        </fieldset>
        <button id="save-task" type="button">Save</button>
        <button id="cancel-task" type="button">Cancel</button>
    `;
    formPlace.appendChild(editTaskForm);
    editFormCount++;

    // Add Cancel Functionality
    const cancelTaskBtn = document.getElementById("cancel-task");
    cancelTaskBtn.addEventListener("click", () => {
        editFormCount--;
        formPlace.removeChild(document.getElementById("task-form"));
    });
});

// Creates tasks from local storage and creates radio buttons for each task.
function createInputTasks() {
    const tasks = document.querySelectorAll(".task");
    let html = "";

    // Check if there's only one task
    if (tasks.length === 1) {
        const task = tasks[0];
        const taskId = task.getAttribute("data-id");
        const taskData = getDataForEditTaskInLocal(taskId); // Get the task data based on the ID
        html += `
            <label for="${taskId}">${taskData.task} <input type="radio" id="${taskId}" name="select-task" value="${taskData.task}"></label>
        `;

    } else if (tasks.length > 1) {
        tasks.forEach(task => {
        // Get the task ID from the data attribute
        const taskId = task.getAttribute("data-id");
        const taskData = getDataForEditTaskInLocal(taskId);
        html += `
                <label for="${taskId}">${taskData.task} <input type="radio" id="${taskId}" name="select-task" value="${taskData.task}"></label>
            `;
        });
    } else {
        html = "<p>No tasks available to edit.</p>";
    }
    return html;
}

// Gets data based on ID, then returns the data as an object.
function getDataForEditTaskInLocal(id) {
    let data = localStorage.getItem("myTasks");
    data = JSON.parse(data);
    if (data.length === 1) {
        return data[0];
    } else if (data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return data[i];
            }
        }
    };
}
