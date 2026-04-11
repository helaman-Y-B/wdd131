import { dueStyle } from "./rememberForm.js";

// Gets data from local storage
function getDataFromLocalStorage() {
    const data = localStorage.getItem("myTasks");
    return data ? JSON.parse(data) : [];
}

// Displays data from local storage into the html
document.addEventListener("DOMContentLoaded", () => {
    const tasks = getDataFromLocalStorage();

    tasks.forEach(task => {
        const taskList = document.querySelector("#tasks ul");
        taskList.innerHTML += `
                <li class="task" data-id="${task.id}">
                ${task.task[0].toUpperCase() + task.task.slice(1)}
                    <div>
                        <span class="due-date">Due: ${task.date}</span>
                        <span class="notes">Notes: ${task.notes}</span>
                        <button class="deleteBtn">Delete</button>
                        <input type="checkbox" class="checkbox" name="check-task" ${task.completed ? "checked" : ""}>
                    </div>
                </li>
            `;
    });
    dueStyle();
})

