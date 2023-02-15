'use strict';
var image = false;


/*
*
*   Task 1
*
* */


function showMoreText() {
    document.getElementById('showText').innerText += ' When clicking the Read More button an additional text will be displayed and the button will be hidden.';
    document.getElementById('showMore').style.visibility = 'hidden';
}

/*
*
*   Task 2
*
* */

function calcAvg() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sum = (firstNumber + secondNumber) / 2; //TODO: divide by 2
    document.getElementById('showResult').innerText += "\n" + sum;
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('calcAvg').disabled = true;
}

function disableButton(){
    document.getElementById('calcAvg').disabled = document.getElementById('firstNumber').value == ''
                                                           || document.getElementById('secondNumber').value == '';
}


/*
*
*   Task 3
*
* */


let imageShow = document.getElementById('changeImage');
function changeImage(){
    imageShow.src = image ? "./image/image1.jpg" : "./image/image2.jpg";
    image = !image;
}

/*
*
*   Task 4
*
* */

window.addEventListener("resize", resizeImg);

function resizeImg() {
    document.getElementById("resizeImage").src = window.innerWidth > 900 ? "./image/image1.jpg"
                                                                                  : "./image/image2.jpg";
}
resizeImg();




/*
*
*   TASK 5
*
* */


document.querySelectorAll('ul.Ingredients1 > li').forEach((item)=> {
    item.addEventListener("click", (event) =>{
        console.log(`You just clicked on ${event.target.innerText}`)
    });
});


/*
*
*   TASK 5
*
* */

var clickElement;
let selectItem = (event) => {
    if(clickElement === event.target)
        return;

    if(clickElement)
        clickElement.style.color = 'black';

    clickElement = event.target;
    event.target.style.color = 'red';
}









