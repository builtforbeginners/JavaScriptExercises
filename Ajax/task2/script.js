'use strict';

var todo = document.getElementById("tablearea");
var todoItem = document.getElementById("todoItem");
var addTodo = document.getElementById("addTodo");
var todoItems = JSON.parse(localStorage.getItem("todos")) || [];
var item = {};
// var checkBox = document.createElement("input");
var table = document.createElement('table');
var tablearea = document.getElementById("tablearea");
var count=0;

disableAdd();
//generatePreviousToDos();

function generatePreviousToDos() {
    todoItems.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        todo.append(li);
    })
}

function disableAdd() {
    addTodo.disabled = !todoItem.value;
}

function addToDo() {
    if(document.querySelectorAll("table > tr").lenght === 'undefined')
        count=1;
    else
        count++;
    let value = todoItem.value;
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");

    let tr = document.createElement('tr');
    tr.setAttribute("id",count);

    tr.addEventListener('click', (event) =>{
        console.log(event);
    })

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    let description = document.createTextNode(value);
    td1.appendChild(description);
    td2.appendChild(checkBox);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    tablearea.appendChild(table);

    // let value = todoItem.value;
    // let li = document.createElement("li");
    // li.innerText = value;
    // todo.append(li);
    // checkBox.setAttribute("type","checkbox");
    // todo.append(checkBox);
    todoItem.value = '';
    disableAdd();

    item.id = count;
    item.value = value;
    item.checkBox = false;

    todoItems.push(item);
    localStorage.setItem("todos", JSON.stringify(todoItems));
}