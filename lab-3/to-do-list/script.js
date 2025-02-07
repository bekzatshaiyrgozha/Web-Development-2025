function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Add new task!");
        return;
    }

    let taskList = document.getElementById("taskList");


    let li = document.createElement("li");
    li.textContent = taskText;
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            taskList.addEventListener(li);
        }
    });
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });



    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";

}