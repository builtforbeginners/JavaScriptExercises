'use strict';


/*
Task 1
Create a function that for a given array of numbers, will return their average
Example: let numbers = [1, 34, 56, null, 12, true];
*/

/*
const numberArr = [1,34,56,null, 12, true];
let calcAvg = numberArr => {
    let sum=0, count=0;

    for(let i=0; i<=numberArr.length;i++) {
        if (typeof numberArr[i] == 'number') {
            sum += numberArr[i];
            count++;
        }
    }
    return sum/count;
}


let calcAvgWithForeach = numberArr => {
    let sum=0, count=0;

    numberArr.forEach(function (value){
        if (typeof value == 'number') {
            sum += value;
            count++;
        }
    });

    return sum/count;
}


console.log(calcAvg(numberArr));
console.log(calcAvgWithForeach(numberArr));
*/




/*
Task 2
Create a function that will read а sentence that the user will enter. Write the largest word from the sentence.
*/

/*
var findLargerstWord = input => {
    input = input.split(" ");
    let temp='';
    for (const word of input) {
        if(temp.length<word.length)
            temp = word;
    }
    return temp;
}

var findLargerstWord2 = input => {
    input = input.split(" ");
    let temp='';
    input.forEach(function (value, index, array){
        if(temp.length<item.length)
            temp = item;
    })
    return temp;
}

var sentenceInput = prompt("Insert the sentence!!!");
console.log(findLargerstWord2(sentenceInput));
*/





/*
Task 3
Create a function that will remove all 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
*/

// let inputArr = [2, true, false, 'text', undefined, null, 0, '0', "''", NaN, [], {test: 'data'}];
// console.log(inputArr.filter(item => item));



/*

The following values are always falsy:

false,
0 (zero),
-0 (minus zero),
0n (BigInt zero),
'',
"",
`` (empty string),
null,
undefined,
NaN


Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

*/




/*
Task 4
Create a function that will remove all duplicates in array, ignore case sensitivity

*/




// var array = [1,2,'Test',1,2,'petar','test',0,5,'Petar',2];

// Solution 1
// var array = ['Test','petar','test','Petar'];
// console.log(array);
/*var newArray=[];
array.map((item) => item.toLocaleLowerCase()).forEach(item=> {
    if(!newArray.includes(item))
        newArray.push(item);
});*/


// Solution 2

// var newArray1 = array.filter((item,index) => array.indexOf(item) === index);

// console.log(newArray);
// console.log(array);
// console.log(newArray1);


/*
Task 5
Create a function that will remove all duplicates in array, ignore case sensitivity
 */


/*

const array1 = [1,0,2,3,4,13,1];
const array2 = [3,5,6,7,8,13];

function calcSum(arr1,arr2) {
    if(arr1.length>=arr2.length){
        return arr1.map((item, index) => {
            if(arr2[index] != undefined)
                return item+arr2[index];
            else
                return item;
        });
    }
    else {
        return arr2.map((item, index) => {
            if(arr1[index] != undefined)
                return item+arr1[index];
            else
                return item;
        });
    }
}

console.log(calcSum(array1,array2));

*/



/*
Task 6
Create a function that will print the most frequent item of an array and how many times it’s shown
*/



/*

var testData = [1,2,3,1,2,2,4,3,3];
mostFrequentItem(testData);

function mostFrequentItem(arr) {
    let count=1;
    let value=testData[0];
    arr.forEach((item,index) => {
        let arrTemp = arr.forEach(x => x === item);
        if(arrTemp.length >= count){
            value = arrTemp[0];
            count = arrTemp.length;
        }
    });
    console.log(value,count);
}

*/




/*
Task 7
Create a function that for a given an integer array, it transforms that array into a mirror

mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

*Do not repeat the last item of the given array

*/

//var arr = [0,2,4,6];
// var arr = [1,2,3,4,5,6];
//
// for (let i = arr.length-2; i >= 0; i--) {
//     arr.push(arr[i]);
// }
//
// console.log(arr);

