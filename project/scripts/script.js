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
            taskItem.remove();
            console.log("Task deleted!");
        }
    }
});

