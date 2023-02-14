'use strict';


/*

Task 1
Create a calculator program that will read two numbers and an operator
and will return the calculation of the mathematical operation

*/


// var firstNumber = Number(prompt("Enter the first number:"));
// var secondNumber = Number(prompt("Enter the second number:"));
// var operator = prompt("Enter the mathematical operator:");
//
// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//
//     switch (operator) {
//         case "+":
//             console.log(`The sum of the two numbers is: ${firstNumber + secondNumber}`);
//             break;
//         case "-":
//             console.log(`The subtraction from the two numbers is: ${firstNumber - secondNumber}`);
//             break;
//         case "/":
//             console.log(`The division of the two numbers is: ${firstNumber / secondNumber}`);
//             break;
//         case "*":
//             console.log(`The multiplication of the two numbers is: ${firstNumber * secondNumber}`);
//             break;
//         default:
//             console.log("Not a valid operator");
//     }
// } else {
//     console.log("Insert the number");
// }




/*

Task 2
1. Create a program that will print all the numbers from 30 to 100
2. Create a program that will print all the numbers from 100 to 30
3. Create a program that will print all the even numbers from 1 to 50

*/


// console.log("Create a program that will print all the numbers from 30 to 100");
// for (let i = 30; i < 100; i++) {
//     console.log(i);
// }
// console.log("Create a program that will print all the numbers from 100 to 30");
// for (let i = 100; i >= 30; i--) {
//     console.log(i);
// }
// console.log("Create a program that will print all the even numbers from 1 to 50");
// for (let i = 1; i <= 50; i++) {
//     if(i % 2 == 0)
//         console.log(i);
// }




/*

Task 3
Create a program that will read numbers that the user will enter and
will determine which one is the max and which one is the min.
    Numbers are entered until the user enters a character.

*/


// let min = 0;
// let max = 0;
// let firstNumber=0;
// let secondNumber=0;
//
// while(!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)){
//     firstNumber = prompt("Enter the first number:");
//     secondNumber = prompt("Enter the second number:");
//     if(firstNumber>secondNumber)
//     {
//         max=firstNumber;
//         min=secondNumber;
//     }
//     else if(secondNumber>firstNumber){
//         max=secondNumber;
//         min=firstNumber;
//     }
//     else{
//         min = firstNumber;
//         max = secondNumber;
//         console.log("first number is equal with second number.");
//     }
//     if(max>0||min>0){
//         console.log(`Max number is: ${max}`);
//         console.log(`Min number is: ${min}`);
//     }
//
// }
//
// console.log("END PROGRAM");




/*

Task 4
Create a program that will read numbers that the user will enter and will determine:
    •the number of numbers that are divisible by 3
    •the number of numbers that when dividing by 3 have a remainder of 1
    •the number of numbers that when dividing by 3 have a remainder of 2
    Numbers are entered until the user enters a * character.\

*/

// var number;
// var countRemainder0=0;
// var countRemainder1=0;
// var countRemainder2=0;
//
// while(number != "*"){
//     number = prompt("Enter the number");
//     if(number%3==0){
//         countRemainder0++;
//         console.log("dividing by 3 have a remainder of 0");
//     }
//     else if(number%3==1){
//         countRemainder1++;
//         console.log("dividing by 3 have a remainder of 1");
//     }
//     else {
//         countRemainder2++;
//         console.log("dividing by 3 have a remainder of 2");
//     }
// }
//
// console.log(`Numbers deviding by 3 have a ramainder of 0 is: ${countRemainder0}`);
// console.log(`Numbers deviding by 3 have a ramainder of 1 is: ${countRemainder1}`);
// console.log(`Numbers deviding by 3 have a ramainder of 2 is: ${countRemainder2}`);
//
// console.log("disconect");




/*


Task 5
Create a program that will read numbers that the user will enter and
calculate the average of the entered numbers in the range [5; 10];
Numbers are entered until the user enters the word ‘stop’.


*/

// var input;
// var count=0;
// var sum = 0;
// do{
//     input = prompt("Enter the number with range 5 to 10");
//     if((input>=5 && input <=10) && !Number.isNaN(Number(input))){
//         count++;
//         sum += Number(input);
//     }
//
// }while(input.trim() != 'stop')
//
// console.log(`Average of the entered numbers is: ${sum/count}`);



/*

    Task 6
    Create a program using different loops to construct the following pattern:
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *

*/

// console.log("----WITH FOR----");
// var star = "*";
// console.log(star);
// for (let i = 1; i < 6; i++) {
//     star += "*";
//     console.log(star);
// }
//
// console.log("----END FOR------");
//
//
// console.log("----WITH WHILE----");
//
// star = "*";
// console.log(star);
// var i=1;
// while(i<6){
//     star += "*";
//     console.log(star);
//     i++;
// }
//
// console.log("----END WHILE------");
//
//
// console.log("----WITH DO WHILE----");
//
// star = "*";
// console.log(star);
// var i=1;
// do{
//     star += "*";
//     console.log(star);
//     i++;
// }while(i<6)
//
// console.log("----END DO WHILE------");
