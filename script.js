const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
 
inputBox.addEventListener('keydown', addTaskEnter);

function addTask(){
    if(inputBox.value === ''){
        alert('Заполни поле');
    }
    else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function addTaskEnter(e){
    if(e.key === 'Enter'){
        e.preventDefault(); // Отменяем стандартное поведение Enter
        addTask(); // Вызываем функцию добавления задачи при нажатии Enter
    }
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);  
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data'); 
}

showTask();
