//Function Statement
/*----->>
function a() {  //--> a is created inside a menory and function assigned to a
    console.log("a is called");
}
a();
 ---------->>*/

//Function Expression or // Function Decleration
//Function can act like a value
     /*------->>
var b = function () {  // b is undefined and untill the code executes this line and then the b is set to the function 
    console.log("b is called");
}
b();

     ---------->>*/
     
//Anonymous function
//Anonymous function does and have its identity and result to a syntax error
//It can be only used as a value similar to function expression

// function(){
//     Uncaught SyntaxError: Function statements require a function name (at index.js:16:1)
// }

//Named function expression
/*------->>

var x = function y(){
    console.log(y); //y will print a the function inside the local scope
}
x(); //--> it will result in output
y(); //--> It will result in an error (index.js:31 Uncaught ReferenceError: y is not defined)
// Reasons: The y is not a function in the global scope it is inside the local scope as a local varible

      ---------->>*/

//Diference between Parameters and Arguments
// Parameters are otherwise called as Idendtifer or labels which are used to get those argument
/*------->>

function a(param1 ,param2){ //--> parameters are local varibles inside a function we cannot access it outside a function
    console.log("params and agrs",param1,param2);
}
a(10,20); //--> value inside a function are a argument

     ---------->>*/

// First class function 
// The ability to use function as values and can be passed as a argument and passed as weel as returned from another function
//Fucntion can be even passed as a value inside of another function argument
    /*------->>
function a(param1){  //--> Passing another function inside a function
    console.log(param1);
}
a(function b(){

});
// or
function x(param1){  //--> Passing another function inside a function
    console.log(param1);
}
function y(){

}
a(y);
 
// We can also return a anonymous function from inside a function
function a(){
  return  function xyz(){
      
    }
}
console.log(a());

 ---------->>*/
 // Function are first class citizens the ability of first class function makes it as a first class citizens
