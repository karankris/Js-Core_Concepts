// Functions working sample code
var x = 1;
a();     //---> (1) calls a() x is undefined, (3) a is poped out when the function is done its execution
b();
console.log(x);
function a() {  //----> (2) a() pushed into call stack assign x=10 display 10 in console
  var x = 10;
  console.log(x);
}
function b() {
  var x = 20;
  console.log(x);
}
