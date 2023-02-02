const formTodo = document.querySelector('#newToDoForm');
const input = document.querySelector('#task');
const results = document.querySelector('#todoList');

const savedTasks = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedTasks.length; i++) {
    let newTask = document.createElement('li');
    newTask.innerText = savedTasks[i].task;
    newTask.isCompleted = savedTasks[i].isCompleted ? true : false; 
    if(newTask.isCompleted) {
        newTask.style.textDecoration = 'line-through';
    }
    results.appendChild(newTask);
}



formTodo.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTask = document.createElement('li');
    newTask.innerText = input.value; 
    input.value = '';

   /* let taskValue = document.getElementById('task').value;
    newTask.innerText = taskValue;
    newTask.isCompleted = false;*/
    formTodo.reset();

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'UnTask';
    
    results.appendChild(newTask);  
    newTask.appendChild(removeBtn);

    savedTasks.push({ task: newTask.innerText, isCompleted: false});
    localStorage.setItem('todos', JSON.stringify(savedTasks));


});


results.addEventListener('click', function(e) {
    const taskDone = e.target.tagName.toLowerCase();
    if(taskDone === 'li') {
        e.target.style.textDecoration = 'line-through';
    } else if(e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    } 
    
});




