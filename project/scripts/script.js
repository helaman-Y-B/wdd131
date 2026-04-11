// Navigation Toggle
const navbutton = document.getElementById('navBtp');
const navItems = document.querySelectorAll('nav ul li');
    
navbutton.addEventListener('click', () => {
    navItems.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
            navbutton.textContent = '--';
        } else {
            item.style.display = 'block';
            navbutton.textContent = 'X';
        }
    });
});

const taskList = document.querySelector("#tasks ul");

// Event Delegation
taskList.addEventListener("click", (e) => {
    // Check if the clicked element has the class "deleteBtn"
    if (e.target.classList.contains("deleteBtn")) {
        
        // Find the closest tasks and remove it
        const taskItem = e.target.closest(".task");
        
        if (taskItem) {
            const taskId = Number(taskItem.dataset.id);
            deleteTaskFromLocal(taskId)
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
  if (e.target.classList.contains("checkbox")) {
    const taskItem = e.target.closest(".task");
    const taskId = Number(taskItem.dataset.id);
    const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = e.target.checked;
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }
});
