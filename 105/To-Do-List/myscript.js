const inputTask = document.getElementById('input-task');
const list = document.getElementById('list-task');

function register(){
    console.log(inputTask.value);
    const newItem = document.createElement('li');
    newItem.innerHTML = `${inputTask.value}`;
    list.appendChild(newItem);
    
}