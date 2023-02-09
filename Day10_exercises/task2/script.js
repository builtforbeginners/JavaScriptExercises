const description = document.getElementById('description');
const checkBoxToDo = document.getElementById('checkBoxToDo');
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
let count=0;
var listToDo = [];

function insertTable()
{
    count++;
    var temp = { id: count, description: description.value, checkBoxToDo: checkBoxToDo.checked};
    listToDo.push(temp);
    localStorage.setItem("ToDo",JSON.stringify(listToDo));
    //let temp1 = localStorage.setItem("description",JSON.stringify(temp));
    //console.log(Object.keys(temp1));
   // console.log(localStorage.getItem("description"));
    // localStorage.setItem("toDo",checkBoxToDo.checked);

   /* const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
        let cellText;

        const cell = document.createElement("td");
        const btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.classList.add("deleteButton");

        if (j === 0)
            cellText = document.createTextNode(description.value);
        else if (j === 1)
            cellText = document.createTextNode(checkBoxToDo.checked ? "DONE" : "IN PROGRESS");
        else
            cellText = btn;

        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.classList.add("table");
    document.getElementById("table").appendChild(tbl);*/

}
