// Opens a form to add a task when the "Add Task" button is clicked
const addTaskBtn = document.getElementById("add-task");
let formCount = 0; //Counts the amount of forms.

addTaskBtn.addEventListener("click", () => {
    const taskForm = document.createElement("form");
    taskForm.id = "task-form";
    taskForm.method = "post";
    taskForm.onsubmit = (e) => e.preventDefault(); // Prevent form submission for now
    const formPlace = document.getElementById("menu");

    if (formCount > 0) {
        alert("Please complete the existing form before adding a new task.");
        return;
    }

    taskForm.innerHTML = `
        <fieldset>
            <legend>Enter task</legend>
            <input type="text" id="task-input" placeholder="Buy..." required>
        </fieldset>
        <fieldset>
            <legend>Due date</legend>
            <input type="date" id="due-date" required>
        </fieldset>
        <fieldset>
            <legend>Notes</legend>
            <textarea id="task-notes" name="message" rows="5" placeholder="Additional notes..."></textarea>
        </fieldset>
        <button id="submit-task" type="button">Add</button>
        <button id="cancel-task" type="button">Cancel</button>
    `;
    formPlace.appendChild(taskForm);
    formCount++;

    // Add Cancel Functionality
    const cancelTaskBtn = document.getElementById("cancel-task");
    cancelTaskBtn.addEventListener("click", () => {
        formCount--;
        formPlace.removeChild(document.getElementById("task-form"));
    });

    // Add Task Functionality
    const submitTaskBtn = document.getElementById("submit-task");
    const id = Date.now();
    submitTaskBtn.addEventListener("click", () => {
        const taskInput = document.getElementById("task-input").value;
        if (taskInput) {
            const taskListDiv = document.querySelector("#tasks ul");
            taskListDiv.innerHTML += `
                <li class="task" data-id="${id}">
                ${taskInput[0].toUpperCase() + taskInput.slice(1)}
                    <div>
                        <span class="due-date">Due: ${document.getElementById("due-date").value}</span>
                        <span class="notes">Notes: ${document.getElementById("task-notes").value}</span>
                        <button class="deleteBtn">Delete</button>
                        <label for="check-task-${id}">Completed?</label>
                        <input id="check-task-${id}" type="checkbox" class="checkbox" name="check-task">
                    </div>
                </li>
            `;
            saveInLocal(taskInput, id)
            dueStyle();
            formCount--;
            formPlace.removeChild(document.getElementById("task-form"));
        }
    });
})

function dueStyle() {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {

        // Parse the due date from the text content and compare it with today's date
        const dueDate = task.querySelector(".due-date").textContent;
        const taskDate = dueDate.split("Due: ")[1]; // Extract the date part
        compareDates(taskDate, task);
    })
}

// Helper function to get today's date in YYYY-MM-DD format for comparison
function getDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

// Function to compare due date with today's date and set the appropriate class for styling
function compareDates(dueDate, task) {
    const today = getDate(); // Returns YYYY-MM-DD format
    const [todayYear, todayMonth, todayDay] = today.split("-");// Split today's date into components
    // Converts to numbers for comparison
    const todayYearNum = parseInt(todayYear);
    const todayMonthNum = parseInt(todayMonth);
    const todayDayNum = parseInt(todayDay);

    const [dueYear, dueMonth, dueDay] = dueDate.split("-");// Split due date into components
    // Converts to numbers for comparison
    const dueYearNum = parseInt(dueYear);
    const dueMonthNum = parseInt(dueMonth);
    const dueDayNum = parseInt(dueDay);

    if (dueYearNum < todayYearNum) {
        // Task is past due
        task.className = "task past"; 
        return; // Exit the function after setting the class
    } else if (dueYearNum > todayYearNum) {
        // Task is due in the future
        task.className = "task due";
        return;
    } else {
        if (dueMonthNum < todayMonthNum) {
            // Task is past due
            task.className = "task past";
            return;
        } else if (dueMonthNum > todayMonthNum) {
            // Task is due in the future
            task.className = "task due";
            return;
        } else {
            if (dueDayNum < todayDayNum) {
                // Task is past due
                task.className = "task past";
                return;
            } else if (dueDayNum > todayDayNum) {
                // Task is due in the future
                task.className = "task due";
                return;
            } else {
                // Task is due today
                task.className = "task today";
                return;
            }
        }
    }
}

function saveInLocal (data, id) {
    // Checks if theres already data inside the localStorage
    const existingTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const newTask = {
        id: id,
        task: data[0].toUpperCase() + data.slice(1),
        date: document.getElementById("due-date").value,
        notes: document.getElementById("task-notes").value,
        completed: false
    };

    existingTasks.push(newTask);

    localStorage.setItem("myTasks", JSON.stringify(existingTasks));
}

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
                        <label for="check-task-${task.id}">Completed?</label>
                        <input id="check-task-${task.id}" type="checkbox" class="checkbox" name="check-task" ${task.completed ? "checked" : ""}>
                    </div>
                </li>
            `;
    });
    dueStyle();
});