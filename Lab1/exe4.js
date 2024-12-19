const prompt= require("prompt-sync")({sigint: true});

// addition of two number
console.log("////////////Addition//////////");
const n1 = parseFloat(prompt("Enter the first number: "));
const n2 = parseFloat(prompt("Enter the second number: "));
const add = n1 + n2;
console.log("the addition of number is " + add);

//subtraction of two number
console.log("////////////Subtraction//////////");
const n3 = parseFloat(prompt("Enter the first number: "));
const n4 = parseFloat(prompt("Enter the second number: "));
const subtract = n4 - n3;
console.log("the subtraction of number is " + subtract);

//multiplication of two number
console.log("////////////Multiplication//////////");
const n5 = parseFloat(prompt("Enter the first number: "));
const n6 = parseFloat(prompt("Enter the second number: "));
const multi = n5 * n6;
console.log("the multiplication of number is " + multi);

// Division of two number
console.log("////////////Division//////////");
const n7 = parseFloat(prompt("Enter the first number: "));
const n8 = parseFloat(prompt("Enter the second number: "));
const div = n8/n7;
console.log("the division of number is " + div);