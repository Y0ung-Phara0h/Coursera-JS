

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearTasksBtn = document.getElementById("clearTasksBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
};

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
};


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
};

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
};

function clearAllTasks(){
    if(tasks.length != 0){
        if(window.confirm("Are you sure you would like to delete all tasks?")){
            tasks=[];
        }else{
            alert("Tasks Remain untouched as they are");
        }
    }
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearTasksBtn.addEventListener("click", clearAllTasks);
displayTasks();


