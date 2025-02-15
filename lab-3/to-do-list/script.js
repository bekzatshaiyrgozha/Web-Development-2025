function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Add new task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let tasklist2 = document.getElementById("history")




    let li = document.createElement("li");
    li.textContent = taskText;




    li.addEventListener("click", function() {
        tasklist2.appendChild(li)
        li.classList.toggle("completed");
    });


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        tasklist2.appendChild(li)
        taskList.removeChild(li);
    });





    li.appendChild(deleteBtn);
    li.appendChild(deleteBtn)
    taskList.appendChild(li);
    tasklist2.appendChild(li)

    taskInput.value = "";

}