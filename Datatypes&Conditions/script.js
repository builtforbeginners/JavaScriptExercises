'use strict';

import {
    whichIsBigger,
    checkPalindrome
} from './sharedFile.js';



/*
TASK 1
Create a program that will read the user name, surname & age and will
print:
    Hello Name Surname, in 10 years you will be X years old!

*/

// var name = prompt("Enter the name:");
// var surname = prompt("Enter the surname:");
// var age = prompt("Enter the age:");
//
// console.log(`Hello ${name} ${surname}, in 10 years you will be ${Number(age) + 10} years old!`);


/*

Task 2
Create a program that will read the amount of money a user have and
will print, for example for 3:
You have $3.00 in your bank account
3.1 needs to become $3.10

*/


// var amount = prompt("Enter amount of money: ");
// console.log(Number.isNaN(Number(amount)) ? "Enter the number" : Number(amount).toFixed(2));



/*

Task 3
If time is less than 10:00, create a "Good morning" greeting,
if not, but time is less than 20:00, create a "Good day" greeting,
    otherwise a "Good evening".

*/

// var time = prompt("Enter the clock");
//
// if (!Number.isNaN(Number(time))) {
//     if (time <= 10)
//         console.log("Good morning");
//     else if (time < 20)
//         console.log("Good day");
//     else if (time > 20)
//         console.log("Good evening");
// } else {
//     console.log("Enter the number");
// }



/*
Task 4
Create a program that will read one number that the user will enter and:
    • write if it’s positive or negative
    • write if it contains only one digit
    • write if it’s even or odd
*/


// // TODO: Ne e dopraveno za negativni broevi
//
// var number = prompt("Enter the number:");
// number = Number(number);
//
// if (!Number.isNaN(number)) {
//     console.log(`Number is: ${number < 0 ? "negative" : "positive"}`);
//     console.log(`Number contains ${(number >= 0 && number < 10) || (number > -9 && number < 0) ? "only one digit" : "more digit"}`);
//     console.log(`Number is: ${number % 2 === 0 ? "even" : "odd"}`);
// } else {
//     console.log("Enter the number");
// }




/*

Task 5
Create a program that will read two numbers that the user will enter and:
    • write which number is bigger
    • write the sum of the numbers
    • write the average of the numbers
    * add a check if the user has entered stings

*/


// var firstNumber = Number(prompt("Enter the first number:"));
// var secondNumber = Number(prompt("Enter the second number:"));
//
// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//     console.log(whichIsBigger(firstNumber, secondNumber));
//     console.log(`Sum of the numbers: ${firstNumber + secondNumber}`);
//     console.log(`Average of the numbers: ${(firstNumber + secondNumber) / 2}`);
// } else {
//     console.log("Enter the number")
// }




/*

Task 6
Create a program that will read two coordinates of a point that the user will enter.
    Print out if the point is on a quadrant or axis.
    If it is a point that lies on the coordinate system, print the corresponding message.

*/

// var x = prompt("Enter the x :");
// var y = prompt("Enter the y :");
//
// if (x == 0 && (y > 0 || y < 0)) {
//     console.log(`Y on axis: ${y}`);
// } else if (y == 0 && (x > 0 || x < 0)) {
//     console.log(`X on axis: ${x}`);
// } else if (x > 0 && y > 0) {
//     console.log("Quadrant I");
// } else if (x > 0 && y < 0) {
//     console.log("Quadrant IV");
// } else if (x < 0 && y > 0) {
//     console.log("Quadrant II");
// } else if (x < 0 && y < 0) {
//     console.log("Quadrant III");
// }




/*

    Task 7
    Create a program that will read a 3 digit number that the user will enter
    and will print out if the number is palindrome

*/

// console.log(checkPalindrome(prompt("Enter the number")));




/*
Task 8
Create a program that will read how many points does a student have on
a test and will generate the appropriate grade

*/

// var points = prompt("How many points does a student have on a test!!!");
//
// if(!Number.isNaN(points)){
//     if (points >= 50 && points < 60) {
//         console.log("You have passed your grade 6");
//     } else if (points >= 60 && points < 70) {
//         console.log("You have passed your grade 7");
//     } else if (points >= 70 && points < 80) {
//         console.log("You have passed your grade 8");
//     } else if (points >= 80 && points < 90) {
//         console.log("You have passed your grade 9");
//     } else if (points >= 90 && points <= 100) {
//         console.log("You have passed your grade 10");
//     }
// }
// else{
//     console.log("Not a number, Enter the number");
// }