let form = document.querySelector(".todo-form");
let taskList = document.querySelector(".task-list");

let workInput = document.querySelector("#work");
let dateInput = document.querySelector("#date");
let dayInput = document.querySelector("#day");

let tasks = [];

form.addEventListener("submit" , function(e){
    e.preventDefault();

    let task = {
        work : workInput.value,
        date : dateInput.value,
        day : dayInput.value,
    };

    tasks.push(task);

    savelocalStorage();

    renderUi();

    form.reset();
});


function renderUi(){
    taskList.innerHTML = "";

    tasks.forEach(function(task,index){
        let li = document.createElement("li");

        li.textContent = `${task.work} | ${task.date} | ${task.date}`;

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        delBtn.addEventListener("click" , function(){
            deleteTask(index);
        });
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });

    
}

function deleteTask(index){
    tasks.splice(index,1);
    renderUi();
    savelocalStorage();
}

function savelocalStorage(){
    localStorage.setItem("tasks" , JSON.stringify(tasks));
}

let savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  renderUi();
}
