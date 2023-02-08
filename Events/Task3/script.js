
// TODO: Done

function createTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    let count=0;

    for(let i=0; i<17;i++){
        const row = document.createElement("tr");

        for (let j=0; j<6;j++){

            const cell = document.createElement("td");
            const cellText = document.createTextNode(count.toString());

            if(isPrime(count))
                cell.classList.add('prime');
            else if(count%2===0)
                cell.classList.add('even');
            else if(count%2===1)
                cell.classList.add('odd');

            count++;
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "0");
    tbl.setAttribute("cellpadding","10");
    tbl.setAttribute("cellspacing","2");
}
createTable();

function isPrime(inputNumber){
    if(inputNumber===1 || inputNumber ===0)
        return false;
    for(let i=2; i<inputNumber;i++){
        if(inputNumber%i===0)
            return false;
    }
    return true;
}




