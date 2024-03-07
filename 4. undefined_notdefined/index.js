//Condition to cheack weather a variable is undefined or notdefined
 var a;
console.log(a); 
// a=5;  // --> until a value is assigned to a variable it will set as undefined for a
if(a === undefined){
    console.log("a is undefined");
    console.log(a);
}
else{
    console.log("a is not defined");
    console.log(a);
}

// Js is a Loosly typed program because it does not attach its variable to any other datatypes
// loosly typed or weakly typed
var a;
console.log(a);
var a=10;
console.log(a);
var a="Karan";
console.log(a);
var a=21;
console.log(a);

// Wrong assignment or wrong practice in js

// var b = undefined;  // --> undefined is like a placeholder while allocating memory to a variable so need not to assign it is a undefined
// console.log(b);