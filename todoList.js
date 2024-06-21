document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                  <span>${taskText}</span>
                  <div>
                      <button class="complete"><i class="fas fa-check"></i></button>
                      <button class="delete"><i class="fas fa-trash-alt"></i></button>
                  </div>
              `;
      taskList.appendChild(li);
      taskInput.value = "";

      li.querySelector(".complete").addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
      });
    } else {
      alert("Enter an item please!");
      taskInput.focus();
    }
  }
});
