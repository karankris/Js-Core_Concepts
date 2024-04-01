// ---- Hoisting --- //

//Example of hoisting:

//--> The output here for x will be undefined because the variable is present in the global environment and x variable is initialized only after x is been used up so according to hoisting we must declare the functions and varibles at the top of the respective scopes.

/*--->>

console.log(x);
console.log(getName);
var x = 7;

<<---*/

// Functions examples

/*--->>

// -----> variable function decleration

var getName2 = function () {
    console.log("hi");
}
getName2();

// ----> arrow function
var getName = () => {
    console.log("welcome");
}
getName();

function getOriginal() {
    console.log("Hello");
}
getOriginal();

<<---*/

// -- call stack Example program --

/*---

var x = 4;
function square(n) {
    var ans = n * n;
    return ans;
}
var square2 = square(x);
var square3 = square(2);
console.log(square2);
console.log(square3);

---*/
