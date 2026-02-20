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

console.log("-------------");
// break:

// 1 to 100: Print the hi when you see multplication of 5 and break:
let num = 0;

while(num <= 100){
    console.log(num);
    if(num % 5 === 0){// 5%5=0
        console.log("hi--- bye");
        break;
    }
    num++;
}
console.log("-------------");

// 
const browser = ["chrome", "edge", "safari", "firefox"];
for (const e of browser){
  //  console.log(e);
    if(e === "edge"){
        console.log("launch edge browser");
        break;
    }
}
console.log("-------------");

// for ---- in loop with object:
const user = {
    name: "john Doe",
    age: 30,
    city: "new york city"
};
for (const key in user){
    console.log(key+ ": "+ user[key]); // user [name]
}
console.log("-------------");

const br = ["chrome", "edge", "safari", "firefox"];
for (const ele in br){
    console.log(ele + ": " + br[ele]);
}
