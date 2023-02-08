const regularPrice = 10;
const overtimePrice = 15;
let inputField = document.getElementsByTagName("input");

function calcSalary()
{
    let neto=0;
    for (let i=0; i<inputField.length; i++)
    {
        if(!Number.isNaN(Number(inputField[i].value))){
            switch (inputField[i].name)
            {
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    neto +=  calculateSum(inputField[i].value,false);
                    break;
                case 'saturday':
                    neto += calculateSum(inputField[i].value,true);
                    break;
                default:
                    console.log("Disconect");
                    break;
            }
        }
        else{
            console.log('Insert a number in input fields');
            break;
        }
    }
    console.log(`Neto: ${neto}`);
}

let calculateSum = (hours,weekend) => {
    let neto=0;
    if(hours>=9)
        neto += ((hours%8) * overtimePrice) + (8 * regularPrice);
    else if(hours===8)
        neto += 8*regularPrice;
    else
        neto += hours*regularPrice;
     return weekend ? neto*2 : neto;
}