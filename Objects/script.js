'use strict';

/*
    Task 1
    Find the element * return position 2:1
*/

// // array iteration example
// let arr = [
//     [1, 2, 3],
//     [3, 4,5],
//     [2, '*'],
//     [1, 3, 4]
// ];
//
// arr.forEach((item, index) => {
//     let startIndex = item.findIndex(item1 => item1 === '*');
//     if(startIndex != -1)
//         console.log(`Element * find on the position row:${index} col:${startIndex}`);
// });




/*
    Task 2
    Print the following format:
    The owner ‘name’ of age ‘age’, has the following cars:
    ‘car name’ with models: ‘mode1’, ‘model2’...
*/

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// }
//
// let print = ({name,age,cars}) => {
//     console.log(`The owner ${name} of age ${age}, has the following cars:`);
//     cars.forEach(item =>{
//         console.log(`${item.name} with models: ${item.models.join(" | ")}`);
//     });
// }
//
// print(myObj);





/*

Task2
Print the following output, example:
Already read 'The Road Ahead' by Bill Gates.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/

// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
//     { author: 'Walter Isaacson', title: 'Steve Jobs', readingStatus: true },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus:false}
// ];
//
// print(library);
//
// function print(input){
//     input.forEach((item,index) => {
//         if(item.readingStatus)
//             console.log(`${index}. Already read '${item.title}' by ${item.author}`);
//         else
//             console.log(`${index}. You still need to read '${item.title}' by ${item.author}`);
//     });
//
// }





/*
Task 3
Create a function that determines whether a shopping order is eligible for free shipping
An order is eligible for free shipping if the total cost of items purchased exceeds $50.00

*/

// function freeShipping(input){
//     let sum=0;
//     let products = Object.keys(input);
//     products.map(x => input[x]).forEach(item => sum+=item);
//     return sum >= 50;
// }
//
//
// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); // ➞ \false
// console.log(freeShipping({ "Flatscreen TV": 399.99 })); // ➞  true
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })); // ➞ true




/*

Task4

Print the following output, example:
Already read 'The Road Ahead' by Bill Gates.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/


/*

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Walter Isaacson', title: 'Steve Jobs', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus:false}
];

print(library);

function print(input){
    input.forEach((item,index) => {
        console.log(item.readingStatus ? `${index}. Already read '${item.title}' by ${item.author}`
                                       : `${index}. You still need to read '${item.title}' by ${item.author}`);
    });
}

*/



/*
Task 4

1. Create a javascript object that represents a food store product.
    The item should contain a name, description, bulk price, and consumer price.
2. Create a method for printing the above object's name and description.
3. Create another method on the object that returns a product's price
with a discount applied
Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25

*/

/*

var foodStoreProduct = {
    name: "Product1",
    description: "Product1 description",
    builPrice: 5,
    customerPrice:5,
    print() {
        console.log(`${this.name} ${this.description}`);
    },
    productDiscount(){
        return this.customerPrice*((100-15)/100);
    }
}


console.log(foodStoreProduct.print());
console.log(foodStoreProduct.productDiscount());

*/



/*

Task 5
Create a function to check whether two arrays have the same elements

*/

/*

var checkTwoArray = (arr1,arr2) => {
    if(arr2.length != arr1.length)
        return false;
    arr1.sort();
    arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i])
            return false;
    }
    return true;
}

var arr1 = [1,4,2,5];
var arr2 = [1,5,2,4];

console.log(checkTwoArray(arr1,arr2) ? "Arrays have the same elements" : "Arrays haven't the same elements");

*/




/*

Task 6
For a given array with cars, list the values on the screen in the following format:
    A large minivan,
    A medium station wagon ...

* The size depends on the capacity
* The text will have the cars color

small car = 1-3 people
medium car = 4-5 people
large car = 6-9 people

*/


/*

let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "capacity": 5
    },
    {
        "color": "blue",
        "type": "cabrio",
        "capacity": 2
    },
]


cars.forEach(car => {
    let element = document.getElementById("containerCars");
    let p = document.createElement("p");
    p.style.fontSize = '16px';
    p.style.color = car.color;
    p.innerText = `A ${carSize(car.capacity)} ${car.type}`;
    element.appendChild(p);
});


function carSize(capacity) {
    if(capacity < 0 && capacity > 10 )
        return "Not a valid capacity";
    if(capacity < 4)
        return "small";
    if(capacity < 6)
        return "medium";
    return "large";
};

*/
