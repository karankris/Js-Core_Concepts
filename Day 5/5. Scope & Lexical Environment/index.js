// Lexical environment is a local memory along with lexical environment of its parent
// scope is where you can access specific variable or function inside your code
// lexical means order or sequence
 function a(){
    var x=10;
    b(); // can access the variable x from function a() to b()  
    function b(){
        console.log(x);
    }
 }

 a();// function invoke
 