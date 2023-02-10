/*The following values are always falsy:

false
0 (zero)
-0 (minus zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN

Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

*/

const firstName = document.getElementById('inputName');
const lastName = document.getElementById('inputSurname');
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");



function insertTable() {

    if (!firstName.value || !lastName.value) {
        document.getElementById('displayMessage').style.opacity = "1";
        return;
    }

    const row = document.createElement("tr");
    document.getElementById('displayMessage').style.opacity = "0";
    createCell(row);
}


function createCell(row) {

    for (let j = 0; j < 3; j++) {

        let cellText;
        let rowCount = document.querySelectorAll("tbody > tr").length;

        const cell = document.createElement("td");
        var btnRemove = document.createElement("button"); // TODO: here you are creating the button 3 times and only adding it 1
        var text = document.createTextNode("Remove");
        btnRemove.appendChild(text);


        btnRemove.addEventListener('click', function(event) {
            //console.log(document.querySelectorAll("tbody > tr#id"));                // TODO: The Remove button doesn't work
            //document.querySelectorAll("tbody > tr")[++rowCount].remove();
        });

        if (j === 0)
            cellText = document.createTextNode(firstName.value);
        else if (j === 1)
            cellText = document.createTextNode(lastName.value);
        else
            cellText = btnRemove;

        cell.appendChild(cellText);
        row.appendChild(cell);
        rowCount >= 5 ? document.querySelectorAll("tbody > tr")[0].remove() : false;
    }
    tblBody.appendChild(row);

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.classList.add("table");
    document.getElementById("table").appendChild(tbl);

}


