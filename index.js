"use strict"
let obj = {
    a: 'mahima',
    b: 'namibiar',
    c: 'chakma'
}


obj["b"] = 'hamid'

console.log(obj);

// a=345
// console.log(a);

// function foo(a,a) {
//     console.log(a,a);
    
// }


let obj1 = {
    name: "Alice",
    name: "Bob" // This will cause a syntax error in strict mode
};

console.log(obj1.name); // This line will not be reached due to the error

