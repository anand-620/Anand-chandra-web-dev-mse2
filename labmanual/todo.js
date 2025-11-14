// Get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Create delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";

    // Delete task
    delBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
