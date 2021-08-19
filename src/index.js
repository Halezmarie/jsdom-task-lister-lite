document.addEventListener("DOMContentLoaded", () => {
  // Selecting the form


const taskForm = document.getElementById("create-task-form");

taskForm.addEventListener("submit", handleSubmit);
// listen for submit of the form 

// what to do with the form when it is submitted 
function handleSubmit(event){
  event.preventDefault(); // prevent the default of autoloading
  console.log('the event value is:', event.value);
  const newTask = document.getElementById("new-task-description").value;
  // create elements with the form data
  // add those elements inside the list div
  tasks.innerHTML +=`
  <li>
  ${newTask}
  </li>` 
// create new task

taskForm.reset(); // clears the values of the form elements for a better user experience 
}
});