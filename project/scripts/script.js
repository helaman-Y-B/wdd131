// Navigation Toggle
const navbutton = document.getElementById('navBtp');
const liLinks = ["home.html", "feedback.html", "remember.html"]; // List of links to be added to the nav
const nav = document.querySelector('nav ul');
    
navbutton.addEventListener('click', () => {
    // Check if the nav has content, if not add the links, otherwise clear it
    nav.innerHTML == "" ?  liLinks.forEach(link => {
        // add the link to the nav and set the button text to 'X'
            nav.innerHTML += `
                <li><a href="${link}">${link.charAt(0).toUpperCase() + link.slice(1, -5)}</a></li>
            `;
            navbutton.textContent = 'X';
    }) : (nav.innerHTML = "" , navbutton.textContent = '--'); // Clear the nav and set the button text to '--'
});

const taskList = document.querySelector("#tasks ul");

// Event Delegation
taskList.addEventListener("click", (e) => {
    // Check if the clicked element has the class "deleteBtn"
    if (e.target.classList.contains("deleteBtn")) {
        
        // Find the closest tasks and remove it
        const taskItem = e.target.closest(".task");
        
        if (taskItem) {
            // Get the task ID from the data attribute and delete it from local storage
            const taskId = Number(taskItem.dataset.id);
            deleteTaskFromLocal(taskId);
            taskItem.remove();
            console.log(`Task deleted with ID: ${taskId}`);
        }
    }
});

function deleteTaskFromLocal(id) {
    // Get list if exists
    let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

    tasks = tasks.filter(task => task.id !== id);

    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Handles the checkbox change event
taskList.addEventListener("change", (e) => {
    // Check if the changed element is a checkbox
  if (e.target.classList.contains("checkbox")) {
    const taskItem = e.target.closest(".task");
    const taskId = Number(taskItem.dataset.id);
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        // Update the completed status of the task and save it back to local storage
      task.completed = e.target.checked;
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }
});



