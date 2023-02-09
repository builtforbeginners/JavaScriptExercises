
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
let count=0;

// TODO: Копчето Delete не е доправено

function insertTable()
{
    //TODO: change like this:
    // if (!firstName.value || !lastName.value) {
    //     document.getElementById('displayMessage').style.opacity = "1";
    //     return;
    // }
    // continue with the code without the below if

    if(firstName.value && lastName.value)
    {
        count++; // TODO: you can use the table children array to check how many items you have, don't need an additional variable, now with the delete button it wouldn't work
        const row = document.createElement("tr");
        document.getElementById('displayMessage').style.opacity = "0";
        for (let j = 0; j < 3; j++)
        { //TODO: add this in another function for creating table cells
            let cellText;

            const cell = document.createElement("td");
            const btn = document.createElement("button"); // TODO: here you are creating the button 3 times and only adding it 1
            btn.innerHTML = "Remove";
            btn.classList.add("deleteButton");
            // btn.addEventListener('click', () => row.remove()); delete function
            if(j===0)
                cellText = document.createTextNode(firstName.value);
            else if(j===1)
                cellText = document.createTextNode(lastName.value);
            else
                cellText = btn;

            cell.appendChild(cellText);
            row.appendChild(cell);
            if(count>5){
                document.getElementsByTagName("table")[0].rows[0].remove();
                count--;
            }
        }
        tblBody.appendChild(row);

        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2"); // TODO: add a class for these styles
        tbl.setAttribute("cellspacing","0");
        tbl.setAttribute("cellpadding","10");
        document.getElementById("table").appendChild(tbl);
    }
    else{
        document.getElementById('displayMessage').style.opacity = "1";
    }

}
