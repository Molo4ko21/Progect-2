"use strict";

let num = 20;

function showeFirstMassage(text) {
   console.log(text);
   let num = 10; 
   console.log(num);
}

showeFirstMassage("Hello World!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5,6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello!");

};

logger();

const calc = (a, b) => a + b;