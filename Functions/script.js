'use strict';


/*

Task 1
Create a function will read the name and surName that the user will
enter and print: “Welcome, name surName”

*/

// function enterNameSurname(){
//     let name = prompt("Enter the name:");
//     let sureName = prompt("Enter the surename:");
//     console.log(`Welcome ${name} ${sureName}`);
// }

//enterNameSurname();





/*
    Task 2
    Create a function that for a given number of hours and number of minutes will convert them in seconds.
    The default values for hours and minutes to be 0.
*/

// function converHoursMinutesToSecond(hours=0,minutes=0){
//     console.log(hours*60*60+minutes*60);
// }

//converHoursMinutesToSecond(1,30);





//Task 3
// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));
//
// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
//
// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;
//
//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         console.log(i);
//     }
// }





/*
Task 4
Create a recursive function to calculate the factorial of a given number.
    The formula for n factorial is:
    n! = n × (n - 1)!
*/

// var input = Number(prompt("Enter number"));
//
// if(!Number.isNaN(input)){
//     let sum=input*(--input);
//
//     factorial(--input);
//
//     function factorial(input){
//         sum = sum * input;
//         if(input>2)
//             factorial(--input);
//     }
//     console.log(sum);
// }





/*
Task 5
Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.Example:
add_ly = add_suffix("ly")
add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞ "totally"
add_less = add_suffix("less")
add_less("fear") ➞ "fearless"

*/



// var add_suffix = function(suffix){
//     return function (input){
//         return input+suffix;
//     }
// }
//
// add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));
// console.log(add_ly("total"));
//
// add_less = add_suffix("less");
// console.log(add_less("fear"));






/*
Task 6
Write a function takes 2 numbers that represent range and returns an anonymous function , which will say if the age is in that range.
    Example:
isChild = checkAge(0, 18)
isAdult = checkAge(18, 70)
isElderly = checkAge(70, 100)

isChild(19) ➞ false
*/


// var checkAge = function(input1,input2){
//     return function (input){
//         if(input>input1&&input<input2)
//             return true;
//         else
//             return false;
//     }
// }
//
// var age = Number(prompt("Enter a age:"));
//
// isChild = checkAge(0,18);
// console.log(`isChild with ${age} years: ${isChild(age)}`);
//
// isAdult = checkAge(18,70);
// console.log(`isAdult with ${age} years: ${isAdult(age)}`);
//
// isElderly = checkAge(70,100);
// console.log(`isElderly with ${age} years: ${isElderly(age)}`);