const inputTask = document.getElementById('input-task');
const list = document.getElementById('list-task');
var taskId=0;
function register(){
    console.log(inputTask.value + taskId);
    const newItem = document.createElement('li');
    newItem.innerHTML = `${inputTask.value} <button onclick="deleteTask(${taskId});" class="btn btn-success"> X </button>`;
    newItem.setAttribute('class','list-group-item');
    newItem.setAttribute('id',taskId);
    taskId +=1; 
    list.appendChild(newItem);
    clear();
    
}

function clear() {
    inputTask.value="";
}

function deleteTask(id){
    var deleted = document.getElementById(id);
    deleted.remove();
}