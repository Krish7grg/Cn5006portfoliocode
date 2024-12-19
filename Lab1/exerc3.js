const prompt = require ("prompt-sync")({sigint: true});

const num = parseInt(prompt("Enter a number ")); //input from user

// check if the number is greater than 0
if(num > 0){

    console.log("the number is positive");

// check if the number is zero
}else if(num == 0){

    console.log("the number is zero");

//check if the number is less than 0
}else{
    console.log("the number is negative");
}