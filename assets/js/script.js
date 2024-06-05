// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const dayjs = require('dayjs')
  //import dayjs from 'dayjs' // ES 2015
  dayjs().format()
  
// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (!nextId) nextId = 1;
    return nextId++;
}
console.log(generateTaskId());
console.log(generateTaskId());
console.log(generateTaskId());

// Todo: create a function to create a task card
function createTaskCard(task) {
    const dueDate = dayjs(task.dueDate);
    const now = dayjs();
    let cardColor = 'bg-white';

    if (dueDate.isBefore(now)) {
        cardColor = 'bg-danger';
    } else if (dueDate.diff(now, 'day') < 3) {
        cardColor = 'bg-warning';
    }
    return `
    <div class="card task-card ${cardColor}" data-id="${task.id}">
        <div class="card-body">
            <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <p class="card-text">Due: ${task.dueDate}</p>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    </div>`;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $( function() {
        $( "#datepicker" ).datepicker();
      } );



});
