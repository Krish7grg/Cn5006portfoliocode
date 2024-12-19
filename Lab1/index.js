//exercise 1
console.log("Welcome to the class!");

// exercise 2
const a = 5;
const b = 2;
const sum = a + b;
console.log("the sum of two number is " + sum);



//exercise 3
console.log("  Area and Perimeter of Rectangle export, arrow")

let rect = require('./Rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if(l <= 0 || b <= 0) {
        console.log("Rectangle dimension should be greater than zero: l= " + l + ", and b= " + b);
        
    }
    else{
        console.log("The area of the rectangle is " + rect.area(l,b));
        console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
    console.log(" ");
}
solveRect(2,3);
solveRect(0,1);
solveRect(-1,2);