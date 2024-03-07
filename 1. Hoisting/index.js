// ---- hoisting---
// getName() 
// getName2()

getOriginal();
console.log(x);
console.log(getName);
var x = 7;
// -----> variable function decleration
var getName2 = function () {
    console.log("hi");
}
// ----> arrow function
var getName = () => {
    console.log("welcome");
}
function getOriginal() {
    console.log("Hello");
}


// -- call stack Example--
// var x=4;
// function square(n){
//     var ans = n*n;
//     return ans;
// }
// var square2 = square(x);
// var square3 =square(2);
// console.log(square2);
// console.log(square3);
