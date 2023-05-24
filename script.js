const taskList = document.querySelector(".task-list");
const newTask = document.querySelector(".task-input");
const addTask = document.querySelector(".btn-add");
const description = document.querySelector(".subheading");
const listItems = []; // Array to keep track of total tasks.
let items = "items";
const setDate = document.querySelector(".date");

const initSetup = function () {
  document.querySelector(".subheading").innerText =
    "You have 0 things to do today. 🥳";
  newTask.value = "";
};
initSetup();

const updateSubheading = function (checked, value) {
  if (checked) {
    listItems.splice(value, 1);
  } else {
    listItems.push(value);
  }
  items = listItems.length > 1 ? "things" : "thing";
  return (description.innerText = `You have ${listItems.length} ${items} to do today.`);
};
// updateSubheading(true);
// ------------------ Button to add task to list -------------------------------------------------
addTask.addEventListener("click", function () {
  let task = document.createElement("div");

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
  delBtn.id = `${newTask.value}`;

  task.append(delBtn);

  // Add Task with description, checkbox and button to list
  taskList.append(task);
  task.classList.add("task-item");
  updateSubheading(false, `${newTask.value}`);
  console.log(`${newTask.value}`);
  newTask.value = "";
  newTask.focus();

  // Click on div to check off a task.
  task.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  });

  // Click delete button to remove task
  delBtn.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
    updateSubheading(true, listItems.indexOf(target.parentElement.id));
    console.log(target.parentElement.id);
  });
});
// -----------------------------------------------------------------------------------
