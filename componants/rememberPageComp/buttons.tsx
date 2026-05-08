import { useState } from 'react';

function Buttons() {
    const [isOpenAdd, setAddTaskIsOpen] = useState(false);
    const [isOpenEdit, setEditTaskIsOpen] = useState(false);


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
            html = "No tasks available to edit.";
        }
        return html;
    }

    // Gets data based on ID, then returns the data as an object.
    function getDataForEditTaskInLocal(id) {
        let data = localStorage.getItem("myTasks");
        if (data === null) {
            console.log("No data found");
            return
        } else {
            data = JSON.parse(data);
            if (data.length === 1) {
                return data[0];
            } else if (data.length > 1) {
                for (let i = 0; i < data.length; i++) {
                    let task = String(data[i].id)
                    if (task === id) {
                        return data[i];
                    }
                }
            };
        }
        
    }

    return (
        <div id="menu">
            <div className='setForm'>
                <button id="add-task" onClick={() => setAddTaskIsOpen(true)}>Add Task</button>
                {isOpenAdd ? 
                <form action="post" className='task-form'>
                    <fieldset>
                        <legend>Enter task</legend>
                        <input type="text" id="task-input" placeholder="Buy..." required />
                    </fieldset>
                    <fieldset>
                        <legend>Due date</legend>
                        <input type="date" id="due-date" required />
                    </fieldset>
                    <fieldset>
                        <legend>Notes</legend>
                        <textarea id="task-notes" name="message" placeholder="Additional notes..."></textarea>
                    </fieldset>
                    <button id="submit-task" type="button">Add</button>
                    <button id="cancel-task" type="button" onClick={() => setAddTaskIsOpen(false)} >Cancel</button>
                </form>
                : null}
            </div>
            <div className='setForm'>
                <button id="edit-task" onClick={() => setEditTaskIsOpen(true)}>Edit Task</button>
                {isOpenEdit ? 
                <form action="post" className='task-form'>
                    <fieldset id="select-task-fieldset">
                        {createInputTasks()}
                    </fieldset>
                    <fieldset>
                        <legend>Due date</legend>
                        <input type="date" id="due-date" required />
                    </fieldset>
                    <fieldset>
                        <legend>Notes</legend>
                        <textarea id="task-notes" name="message" placeholder="Additional notes..."></textarea>
                    </fieldset>
                    <button id="save-task" type="button">Save</button>
                    <button id="cancel-task" type="button" onClick={() => setEditTaskIsOpen(false)}>Cancel</button>
                </form>
                : null}
            </div>
            
        </div>
    )
}

export default Buttons;