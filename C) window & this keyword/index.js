// This & Window Keyword
// window == this
var a=10;
function b(){
    var x =20;
}  
console.log(window.a); // a is in global space
console.log(this.a); // window and this are same
console.log(a);     // when a variable or function is accessed without anything left it consider it as in global space
console.log(x);   // search a variable x in global space but it is not defined in global space 