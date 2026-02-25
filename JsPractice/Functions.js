// 1. Function Declaration

function add(a,b){
    return a + b;
}

function print()
{
    console.log("Hi, this is 35")
}

const sum = add ( 5 , 6);
console.log(sum);

print();

// 2: Function Expressions:
const multiply = function(x,y){
    return x*y;

}
const mul = multiply(5,6)
console.log(mul);

// 3. Arrow function expression:
const divide = (t1,t2) => t1/t2;
const div = divide(20,2);
console.log(div);

// 4. function constructor :
const substract = new Function('a','b', 'return a - b;');
const subs = substract(10,2);

console.log(subs);

// 5. IIFE (Immedietly Invoked Function Expression);
(function(){
    console.log("Server is up n running on port 3000");
}) ();

// 6. Generator Function :
// Function and yield Keyword
function generateedNumberSeqence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const generator = generateedNumberSeqence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); 
console.log(generator.next().value);
console.log(generator.next().value);
