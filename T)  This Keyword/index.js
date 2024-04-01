// This Keyword
"use strict"; //--> Made the entire code to strict mode
// "this" in global space

// console.log(this);
// points to a window object i.e., this in global space represent the global Object which means in browser it is window object in Node.js the value will be global

//this keyword inside a function
//the value of "this" keyword depends upon how the function is called
/*---
function x(){
    // the value inside the function depends on strict / non strict mode
    console.log(this);
}
x(); // when the x is called without any reference than it will be substituted undefined
window.x(); //--> returns a globalObject
-----*/

// this keyword work differently in strict mode and in non strict mode

// "this" in strict mode (this substitution)

// if the value of "this" is undefined or null then the "this" will be replaced by globalObject(window) only in non-strict mode

// ----------------------------------------------------- //

// "this" inside a object's methord

/*---->>
// A function inside an object is called as a methord
const obj = {
    a: 10,
    x: function () {        //--> x is a methord of an object obj
        console.log(this);  //--> the value of "this" keyword in this methord is an object when it comes to function
    },
}
obj.x();
<<----*/

// call() apply() and bind() methords (sharing methords) to modify the this keyword or set the values inside this keyword

//Methord 1:  Not commonly used methord is keeping the methord inside the object to be resued

/*-->>

const project1 = {
    name: "Student management erp",
    dataPrint: function (pval, tech) {
        console.log(this.name + " project ID " + pval + " tech stack used " + tech);
    }
}
project1.dataPrint.call(project1, "P01", "MERN STACK");

const project2 = {
    name: "food order app",
}
project1.dataPrint.call(project2, "P02", "MEAN STACK");

<<---*/

// Methord 2 : by keeing those function outside seperatly from the object making it fit for resuability
/*-->>
const student1 = {
    name: "karan",
}

// function can be used outside the object as methord and it is most commonly used one

let printName = function (district, stream) {
    console.log(this.name + " is studing in " + district + " degree " + stream);
}

printName.call(student1, "villupuram", "B.E");

const student2 = {
    name: "krishna"
}

printName.call(student2, "cuddalore", "B.com"); // value of this = student2

//Explanation (function borrowing)
// Inside the printName() methord the value of "this" will be the one which is inside the call methord i.e the student2 data, it basically overrides the value of "this keyword" inside the printName function

<-----*/
// The apply methord:
// The only difference is the way that how we pass the arguments in it

/*---->
const student1 = {
    name: "karan",
}

let printName = function (district, stream) {
    console.log(this.name + " is studing in " + district + " degree " + stream);
}

printName.apply(student1, ["villupuram", "B.E"]); // Pass the second argumet as a Array list

const student2 = {
    name: "krishna"
}
printName.apply(student2, ["cuddalore", "B.com"]); // The second argument is the list to the argument that we pass


// Bind methord

//It binds with the object and returns as the copy of that exact methord which can be altered later
let myData = printName.bind(student1, "villupuram", "B.E");

// It directly dosen't call the methord directly like call() rather than it returns as a methord which can be called later

console.log(myData); // It is a function which can be invoked later (returns the function in the console)
myData();

<<-- */

// this keyword inside a arrow function

// Arrow function does not have their own "this" binding associated to it instead they retains the value of "this" from the enclosing lexical context

// Keywords -->>  "enclosing lexical context" // lexical means where the object is lexically present inside the code i.e., (Global space)


// In the case of arrow function the value of this will not be the object


//console.log(this); // The console log inside the object as a arrow functtion behaves simliar like when "this" keyword is printed outside the object in case of arrow function
/*--->
const obj = {
    a: "karan",
    x: () => {
        console.log(this);
    },
}
obj.x()
 <<---*/
//Explanation in case of arrow function
// The value of this will not be the object insted it will be its enclosing lexical context Result:(The value will be the "window object" i.e., (Global object) because it is enclosed inside the lexical context)

// Arrow function inside a methord
/*--->
let obj2 = {
    a: 20,
    x: function () {
        const y = () => {
            console.log(this); // --> Now this arrow function is not a methord of this object so it returns the output which the function does beacause the arrow function is enclosed inside another function i.e (lexically enclosed).
        }
        y();
    },
};
obj2.x();
 <<---*/
// this keyword inside the dom => reference to the HTML element (refer index.html)

