const prompt= require("prompt-sync")({sigint: true});
const n1 = parseFloat(prompt("Enter the first number: "));
const n2 = parseFloat(prompt("Enter the second number: "));

// addition of two number
console.log("////////////Addition//////////");
const add = n1 + n2;
console.log("the addition of number is " + add);

//subtraction of two number
console.log("////////////Subtraction//////////");
const subtract = n2 - n1;
console.log("the subtraction of number is " + subtract);

//multiplication of two number
console.log("////////////Multiplication//////////");
const multi = n1 * n2;
console.log("the multiplication of number is " + multi);

// Division of two number
console.log("////////////Division//////////");
const div = n1/n2;
console.log("the division of number is " + div);