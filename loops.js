// for loop:
// 1 to 10:

for (let i = 1; i <= 10 ; i++){
    console.log(i); // 1 2 3 4 ....10
}

console.log("-------------");

// for .... of loop:
const array = [1,2,3,4,5];  // 0 to 5 => 5
for (const e of array){
    console.log(e);
}
console.log("-------------");
//
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
// while 1 to 10
console.log("-------------");
let p = 1;
while(p<=10){
    console.log(p);
    p++;
}
console.log("-------------");

let l = 2;
while (l<=10)
{
    console.log(l);
    l = l + 2;
}
console.log("-------------");

// do while
let h = 1;

do{
    console.log(h);
    h = h+1;
}
while(h <= 10);
