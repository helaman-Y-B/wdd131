const subByn = document.querySelector("#sendFeedback");

subByn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    saveInLocal(data);

    // For demonstration, we'll just log the values to the console
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Message:", data.message);
})

// In the future, this function will send an email to the owner of the website with the feedback, but for now it just saves it in local storage.
function saveInLocal (data) {
    // Checks if theres already data inside the localStorage
    const existingTasks = JSON.parse(localStorage.getItem("feedback")) || [];

    existingTasks.push(data);

    localStorage.setItem("feedback", JSON.stringify(existingTasks));
}