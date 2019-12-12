const inputTask = document.getElementById('input-task');
const list = document.getElementById('list-task');
var taskId=0;
function register(){
    console.log(inputTask.value + taskId);
    const newItem = document.createElement('li');
    newItem.innerHTML = `${inputTask.value} <button onclick="deleteTask(${taskId});" class="btn btn-success"> Remove </button>`;
    newItem.setAttribute('class','list-group-item');
    taskId +=1;
    newItem.setAttribute('Id',taskId);
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