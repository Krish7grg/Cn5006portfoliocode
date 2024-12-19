// Exercise 1   Function example
function EmployInfo(name, salary)
{
 console.log(" Welcome " + name + " Your monthly salary is " + salary)
}
console.log("This is my first function program.")

var employname= "ROCK"
var employsalary= "50000000 pound"

EmployInfo(employname, employsalary)   // calling the function EmployInfo  for inserting the value.

console.log(" ")

// exercise 2 
console.log("//arrow function example ")
const empskill= (skill) => {
    console.log("Experts in " + skill)
}

empskill("Java")

console.log(" ")

//Exercise 3 
console.log("//Creating Local Module example ")

const student= require('./Studentinfo')    //const readfile= require('./FileModule')

console.log("student name: " + student.getName())  //because getName is the function so
//we should use()

console.log(`${student.location()}`)  //$: used to show the value of variable.
console.log("University name: " + student.location())
console.log("Date of Birth : " + student.dob)
console.log(student.Stdgrade())
console.log("grade is " + student.Stdgrade(55))

console.log(" ")

//creating new person       using module.export for this!!
const person= require('./person')
person1= new person(" tony", "31 ", "Ironman@gmail.com" )
console.log("Using person module " + person1.getpersoninfo())
console.log("Program Ended")



console.log(" ")
//exercise 4
// NodeJS   core module

os= require("os")
const util=require('util')
console.log("temporary directory" + os.tmpdir())
console.log("hostname: " + os.hostname())
console.log("OS: " + os.platform() + "release: " + os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userlnfo" + util.inspect(os.userlnfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000+ "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networklnterfaces()))