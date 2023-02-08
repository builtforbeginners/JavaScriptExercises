'use strict';
var image = false;

function showMoreText() {
    document.getElementById('showText').innerText += ' When clicking the Read More button an additional text will be displayed and the button will be hidden.';
    document.getElementById('showMore').style.visibility = 'hidden';
}


function calcAvg() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sum = firstNumber+secondNumber;
    document.getElementById('showResult').innerText += "\n" + sum;
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('calcAvg').disabled = true;
}
/*--------*/

function disableButton(){
    if (document.getElementById('firstNumber').value == '' || document.getElementById('secondNumber').value == '')
    {
        document.getElementById('calcAvg').disabled = true;
    }
    else{
        document.getElementById('calcAvg').disabled = false;
    }
}

let imageShow = document.getElementById('changeImage');
function changeImage(){
    imageShow.src = image ? "./image/image1.jpg" : "./image/image2.jpg";
    image = !image;
}

/*--------*/

window.addEventListener("resize", resizeImg);

function resizeImg() {
    const img = document.getElementById("resizeImage");
    img.src = window.innerWidth > 900 ? "./image/image1.jpg" : "./image/image2.jpg";
}
resizeImg();

/*--------*/


let listItems = document.querySelectorAll('ul.Ingredients1 > li');
// console.log(listItems);

listItems.forEach((item)=> {
   item.addEventListener("click", (event) =>{
     console.log(`You just clicked on ${event.target.innerText}`)
   });
});

var clickElement;
let selectItem = (event) => {
    if(clickElement === event.target)
        return;

    if(clickElement)
        clickElement.style.color = 'black';

    clickElement = event.target;
    event.target.style.color = 'red';
}


/*
*   Task5
* */







