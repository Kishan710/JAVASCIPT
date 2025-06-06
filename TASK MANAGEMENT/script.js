let tasks = [];

window.onload = () => {
  let storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
  displayTasks();
};

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").value = "medium";
}

function addTask() {
  let title = document.getElementById("title").value.trim();
  let desc = document.getElementById("description").value.trim();
  let due = document.getElementById("dueDate").value;
  let priority = document.getElementById("priority").value;

  if (!title || !due) {
    alert("Enter all details");
    return;
  }

  let newTask = {
    id: Date.now(),
    title: title,
    description: desc,
    dueDate: due,
    priority: priority
  };

  tasks.push(newTask);
  saveTasks();
  displayTasks();
  clearForm();
}

function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let filter = document.getElementById("filterPriority").value;
  let search = document.getElementById("searchBox").value.toLowerCase();

  let filtered = tasks.filter(task => {
    return (filter === "all" || task.priority === filter) &&
           task.title.toLowerCase().includes(search);
  });

  filtered.forEach(task => {
    let div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
      <div class="actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    taskList.appendChild(div);
  });
}

function editTask(id) {
  let task = tasks.find(t => t.id === id);
  if (!task) return;

  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("priority").value = task.priority;

  deleteTask(id);
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  displayTasks();
}
