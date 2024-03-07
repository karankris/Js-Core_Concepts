// -----Let vs var---
// console.log(b);// b can be set to undefined before initialization
// console.log(a);//a is hoisted but throw a error a is not yet initialized

let a=10;   // let is hoisted and memory is allocated but it not allocated in global space it is allocated in seperate memory space
var b=100;   // var is present in global object i.e, window/this we can access through it but we can't access let through these global object which display undefined (check for image reference 1.1)
// console.log(a);
// console.log(b);

/* ------------------------------------------------------------------------------------------*/
/*
// -----let vs const-----
// let and const are similar when it comes to temporal deadzone and hoisting but there is a difference like const are more strict than let

// Example 1 SYNTAX ERROR:
let x;
x=200;
console.log(x);// In case of let the variables can be initialized seperately and assigned to a value seperatly

/*const y; // In case of const the initialization and assignment should be done at the same place
y=200;     //Uncaught SyntaxError: Missing initializer in const declaration (at index.js:17:7)*/

// Example 2 TYPE ERROR:
// let i = 20;
// i=400;
// console.log(i); // In case if let it can be re-assigned weather even the variable is already decleared
/*const j=10; 
j=1000;  // We can't re-assign a variable in case of const throws TYPE ERROR
index.js:29 Uncaught TypeError: Assignment to constant variable. at index.js:29:2 */


/* ------------------------------------------------------------------------------------------*/
// Difference between SyntaxError vs TypeError vs ReferenceError

/* <------- 

TYPE ERROR: If there is a const initialiation, the initialization and decleration must be done together in case of const else it throws a TypeError

SYNTAX ERROR: If there is a keyword const then the variable must be initialized or else it has a error in its syntax and in case of let and const the variables must not be duplicated in case of declaration else it throws a SyntaxError

 REFRENCE ERROR: When the js engine search for a variable or a function inside the global space if the varible was not found and in case of let and const if the variable is in the temporal deadzone then there is a ReferenceError 
                                                                                      ---------->*/

/* ------------------------------------------------------------------------------------------*/
// ------IMPORTANT NOTES-----
/* Temporal Dead zone is a time when let variable is hoisted and till assigns some value for let is called as temporal deadzones
To avoid temporal dead zones declare the variables on the top of the code
let variable declearion cannot be duplicated once a variable is already assigned and it throws a syntax error
For example: 
let a=10;
let a=100;
Syntax error:'a' has already been decleared */