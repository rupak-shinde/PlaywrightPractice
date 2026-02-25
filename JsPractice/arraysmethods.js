// 1. map:
let numbers = [ 1,2,3];
let doubleNumbers = numbers.map((e)=> e * 2);
console.log(doubleNumbers); // [2,4,6]

// F -> c
// (F-32) * (5/9)
let fahTemp = [32, 68, 86, 104, 212]

function fahToCel(fah)
{
    return(fah - 32) * (5/9);
}
let celTemp = fahTemp.map(fahToCel);
console.log(celTemp);

// 2. Filter:

let num = [ 1,2,3,4,5,6,7,8,9,10]
    let evenNum = num.filter((e)=> e % 2 == 0);
    console.log(evenNum);

let employee = [
    {name:"john", age:30, gender:"male"},
    {name:"Bob", age:35,gender:"male"},
    {name:"Lisa", age:40,gender:"female"},
    {name:"Priya", age:25,gender:"female"},
    {name:"Peter", age:55,gender:"male"}
];
let femaleOver30 = employee.filter((e)=>{
    return e.gender === "female" && e.age > 20;
})

console.log(femaleOver30);

// 3. reduce:
let numb = [ 1,2,3,4,5]; // 15
let sum = numb.reduce((acc,num)=>acc+num, 0);//  1
console.log(sum);
// 1st -> 0+1=1
// 2nd 1+2=3
// 3rd 3+3=6
// 4rd 6+4 = 10
// 5th 10+5= 15

// Max number in the array:

let top = [10, 5 , 25, 8, 30,15]; // 30
let maxnum = top.reduce((max,num)=>  {// max = 10, num = 25
    if ((num > max ))
    {
        return num ; // 25
    }else{
        return max ;
    }
}, top [0]);

console.log(maxnum);

let low = [10, 5 , 25, 8, 30,15]; // 30
let minMum = top.reduce((min,num)=>  {// max = 10, num = 25
    if ((num < min ))
    {
        return num ; // 25
    }else{
        return min ;
    }
}, top [0]);

console.log(minMum);

// cart : name , price 
let cartItems = [
    {name: "Jeans", price: 500},
    {name:"Shirt", price:300},
    {name:"ShoeHats", price:1000},
    {name:"Shirt", price:100},
    {name:"T-shirt", price:400}
];

let totalCost = cartItems.reduce((total, iteam)=> total + iteam.price, 0);
console.log(totalCost);