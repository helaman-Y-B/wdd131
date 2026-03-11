const { createElement } = require("react");

let input = document.getElementById("favchap");
let btn = document.getElementsByTagName("button");
let list = document.getElementById("list");

function createLi() {
    const item = list.createElement("li")
    item.textContent = input.value;
    list.appendChild(item);
    createDeleteBtn(item);
}

function createDeleteBtn(item) {
    const deleteBtn = createElement(button, {"class": "deleteBtn", "aria-label": "Close"})
    deleteBtn.textContent = "❌";
    item.append(deleteBtn);
}