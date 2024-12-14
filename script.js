// Get references to the DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to create a new task element
const createTaskElement = (taskContent) => {
  const li = document.createElement("li");

  // Task text
  const taskText = document.createElement("span");
  taskText.textContent = taskContent;
  li.appendChild(taskText);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(deleteButton);

  return li;
};

// Add task to the list
const addTask = () => {
  const taskContent = taskInput.value.trim();

  if (taskContent) {
    const taskElement = createTaskElement(taskContent);
    taskList.appendChild(taskElement);
    taskInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a task.");
  }
};

// Add task when the "Add Task" button is clicked
addTaskButton.addEventListener("click", addTask);

// Optional: Add task using Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
