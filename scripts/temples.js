const nav = document.querySelector("nav");

nav.addEventListener("click", function () {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(item => {

        if (item.style.display === "") {
            item.style.display = "block";
        } else if (item.style.display === "block") {
            item.style.display = "";
        }

    });
})