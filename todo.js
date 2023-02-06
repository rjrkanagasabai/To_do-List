window.addEventListener("load", function () {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const taskList = this.document.querySelector("#tasks");
  const hidden = document.querySelector(".hidden");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value;
    hidden.style.display = "block";
    if (!task) {
      alert("Please fill your task");
      hidden.style.display = "none";
      return;
    }
    /**create div element during submit the form
     * after creating the div element manipulate by classList API
     */
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    taskElement.appendChild(taskContent);

    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    //set text into read only attribute
    taskInput.setAttribute("readonly", "readonly");
    taskContent.appendChild(taskInput);
    // create element to edit and delete
    const taskActions = document.createElement("div");
    taskActions.classList.add("actions");

    const taskEdit = document.createElement("button");
    taskEdit.classList.add("edit");
    taskEdit.innerHTML = "Edit";

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("delete");
    taskDelete.innerHTML = "Delete";

    taskActions.appendChild(taskEdit);
    taskActions.appendChild(taskDelete);

    taskElement.appendChild(taskActions);
    taskList.appendChild(taskElement);

    input.value = "";

    taskEdit.addEventListener("click", function () {
      if (taskEdit.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        taskEdit.innerText = "save";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        taskEdit.innerText = "Edit";
      }
    });

    taskDelete.addEventListener("click", function () {
      taskList.removeChild(taskElement);
    });
  });
});
