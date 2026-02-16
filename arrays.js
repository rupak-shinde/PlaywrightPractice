let myArray =[]; // Empty Array

let flot_= [3.4, 7.0,9.6];  // Array with float

let char = ['A', 'B', 'C']; // Array witth characters 

let lang = ["Java", "Python", " Js"];
// 1. push: // Add elements at the end of array
lang.push("Ruby","HTML");
console.log(lang);


//2. Pop : // remove last element of an array
let numbers = [1, 2, 3, 4, 5]; // Array with Numbers
numbers.pop();
console.log(numbers);

//3. Shift:  // remove first element of array and also return/ print that removed element 
let fruits = ["apple", "banana", "orange"]; // Array with strings
let firstfruit = fruits.shift();
console.log(firstfruit);
console.log(fruits);

//4. unshift: Add element at 1st position of array
let colors = ['red','green','black','white'];
console.log(colors.length);
colors.unshift('blue','pink');
console.log(colors);
console.log(colors.length);

//5. Splice: 
let animals = ['dog','cat','bird','fish']; // Array contains four string values 
animals.splice(1,2,'bear','elephant');
console.log(animals);

//6. slice :
let pop = [1,2,3,4,5];
let newPop = pop.slice(1,4)
console.log(newPop);

// 7. Concat:
let fr = ['apple', 'banana','orange'];
let num = [1,2,3,4]
let mixedArray = fr.concat(num);
console.log(mixedArray);

//8. indexOf:
let color = ['black','red','green','blue','red'];
let indexRed = color.indexOf("red");
console.log(indexRed);
let naveenIndex = color.indexOf("naveen");
console.log(naveenIndex);

// 2nd red index:
let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
console.log(redSecondIndex);

// 9. includes:
let test = ["admin","customer","seller","vendor"]
let flag = test.includes("seller","Rupak");
console.log(flag);

// 10 firEach:
let n = [1,2,3,4,5,6,7];
n.forEach((e)=> {
    console.log(e*2);
})