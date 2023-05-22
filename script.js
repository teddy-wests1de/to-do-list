const taskList = document.querySelector(".task-list");
const newTask = document.querySelector(".task-input");
const addTask = document.querySelector(".btn-add");
const description = document.querySelector(".subheading");
const listItems = []; // Array to keep track of total tasks.
let items = "items";
const setDate = document.querySelector(".date");

const initSetup = function () {
  document.querySelector(".subheading").innerText =
    "You have 0 items to do today. 🥳";
  newTask.innerText = "";
};
initSetup();

const updateSubheading = function (checked) {
  if (checked) {
    listItems.pop();
    items = listItems.length > 1 ? "items" : "item";
  } else {
    listItems.push(1);
  }
  console.log(listItems.length);
  return (description.innerText = `You have ${listItems.length} ${items} to do today.`);
};
// updateSubheading(true);
// ------------------ Button to add task to list -------------------------------------------------
addTask.addEventListener("click", function () {
  let task = document.createElement("div");

  // Add label to click
  let taskLabel = document.createElement("label");
  taskLabel.classList.add("task-label");
  task.append(taskLabel);

  // Add task check button
  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-regular fa-circle"></i>';
  checkBtn.classList.add("check-btn");
  task.append(checkBtn);

  // Add task description
  let li = document.createElement("li");
  li.innerText = `${newTask.value}`;
  task.append(li);

  // Add task delete button
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  delBtn.classList.add("delete-btn");
  task.append(delBtn);

  // Add Task with description, checkbox and button to list
  taskList.append(task);
  task.classList.add("task-item");
  //   listItems.push(li);
  //   items = listItems.length > 1 ? "items" : "item";
  //   description.innerText = `You have ${listItems.length} ${items} to do today.`;
  updateSubheading(false);
  newTask.innerText = "";

  // Click on div to check off a task.
  task.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    updateSubheading(true);
  });

  // Click delete button to remove task
  delBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
    updateSubheading(true);
  });
});
// -----------------------------------------------------------------------------------
