// 1. Every()
let num = [1,2,3,4,5,98];
let flag = num.every((e)=>e<10);

console.log(flag);

// 2. some ():
let number = [1,2,3,4,5];
let fg =  number.some((e)=>e>20 );
console.log(fg); 

// 3. find ()
let total = [1,2 ,7,9];
let fe = total.find((e)=>e % 2 === 0);
console.log(fe);

// 4. IndexOf()
let array =  ['apple','banana','mango','pear'];
let indexof_str = array.indexOf('mango');
// - 1 if not found in
console.log("index of msngo", indexof_str);

// 5. lastIndexof()
let fruits = ['apple','apple','banana','mango','pear'];
let lastapple = fruits.lastIndexOf('apple');
console.log(lastapple);

// 6. reverse()
let fruts = ['apple','apple','banana','mango','pear'];
let revfruits = fruts.reverse();
console.log(revfruits);

// 7. sort ();
let products = ['machbook','imac','samsung','cnannon','assus', '123test', 'Tshirt'];
let prosort = products.sort();
console.log(prosort);

