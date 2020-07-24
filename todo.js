var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todoList')) || [];

function renderToDos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var index = todos.indexOf(todo);
        linkElement.setAttribute('style', 'margin-left: 5px;')
        linkElement.setAttribute('onclick', 'deleteToDo(' + index + ')');
        linkElement.setAttribute('href', '#');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderToDos();

function addToDo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';

    renderToDos();
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(index) {
    todos.splice(index, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todos));
}