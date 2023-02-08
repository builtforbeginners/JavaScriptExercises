
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
    if(firstName.value && lastName.value)
    {
        count++;
        const row = document.createElement("tr");
        document.getElementById('displayMessage').style.opacity = "0";
        for (let j = 0; j < 3; j++)
        {
            let cellText;

            const cell = document.createElement("td");
            const btn = document.createElement("button");
            btn.innerHTML = "Remove";
            btn.classList.add("deleteButton");

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
        tbl.setAttribute("border", "2");
        tbl.setAttribute("cellspacing","0");
        tbl.setAttribute("cellpadding","10");
        document.getElementById("table").appendChild(tbl);
    }
    else{
        document.getElementById('displayMessage').style.opacity = "1";
    }

}
