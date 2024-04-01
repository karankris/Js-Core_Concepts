// Closure is a function that binds together along with its lexical scope
/*<<--- Closure Example 1:
function x(){
    var a=10;
    function y(){   //--> Function y was binded to varibles of x along with its parent's i.e,(x) lexical scope
        console.log(a);
    }
    y();
}
x();
       ---->>*/

/***----------------------------------------------------------------------------------------------***/

//Closure Example 2 (What happens when we return a function):
/* <<---
function x(){
    var a=10; // ---> remember the variable even after the function is popped out
    function y(){
        console.log(a);
    }
    return y; //---> it returns entire function y to x
}
var z = x();  //---> x() function has finished executed and poped out of the call stack
console.log(z);
z(); // y() function in js remembers it's parent's lexical environmet i.e (x)

// The return of a function can be written in a another way like
function x(){
    var a=10;
   return function y(){
        console.log(a);
    }
}
       ---->>*/
/***----------------------------------------------------------------------------------------------***/
// Example:3 change the value of the reference variable inside the function x()
/* <<---
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100; //--> Changes the reference value to 100 in the console **NOTE :'a' does not refereces to a value !! It's only the reference of the function is been returned here**
    return y;
}
var z = x();
console.log(z);
z();
     ---->>*/
/***----------------------------------------------------------------------------------------------***/
// Example:4 Three function closure example
/* <<---
function i() {
    var a = 10;
    function j() {
        var b = 20;
        function k() { //--> if i return  this function else where it will retains the value of it and would not have be garbage collected
            console.log(a, b); //--> k() forms a clousure along with the scope function i() and j() i.e, means it gets binds along with its lexical scope (Refer to image 1.3)
        }
        k();
    }
    j();

}
i();
      ---->>*/
/***-------------------------------------------------------------------------***/

// -->> ADDITIONAL EXAMPLES <<---
/*----
//Example 5;
function outer() {
    let a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
var callInner = outer(); //or outer()();
callInner();
            -----*/

/*-------------------------------------------------------------------------------------------***/

/*----
//Example 6:
function outest() {
    function outer(b) {
        var a = 10;
        function inner() {
            console.log(a,b);
        }
        return inner;
    }
    return outer;
}
var close = outest()("Hello");
close();
// EXPLAINATION
//---> outest() will call the outer function and outest()() will return the outest and close() returns the inner function this is how closure works
          -----*/

/**--------------------------------------------------------------------------------------------***/

//Example 7: Data encapsulation and data hiding using closures using counter
/*----
function counter() {
    let count = 0;   //---> count is inside the counter it is been hidden can be accessed
    return function incrementCounter() {
        count++;
        console.log(count);
    }
    //return incrementCounter; Standared way to return a function
}
// /console.log(count); //--> We cannot access the count outside the function so the count variable is encapsulated inside a function

console.log("----- Counter 1 ------");
var counter1 = counter();
counter1();//--> increments the value one by one when the incrementCounter() is returned
counter1();
counter1();
counter1();

console.log("----- Counter 2 ------");
//-> When we decleare the counter again using another variable then it behaves as a new counter "It again forms a clousure and it creates a new copy 'count"
var counter2 = counter();
counter2();
counter2();
counter2();


/**--------------------------------------------------------------------------------------------***/

//Example 8: Counter increment and decrement using constructor function 
/*----
function Counter() {
    let count = 0;
    this.incrementCounter = function () {  //--> constructor function 
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {  //--> constructor function 
        count--;
        console.log(count);
    }
}
var counts = new Counter();
counts.incrementCounter(); //--> increments the value 
counts.incrementCounter();
counts.decrementCounter(); //--> decrements the value 
counts.decrementCounter();
       -----*/

/**--------------------------------------------------------------------------------------------***/

/* <<---
Important Uses of Closures:
- Module Design Pattern
— Currying
— Functions like once
— memoize
— maintaining state in async world
— setTimeouts
— Iterators

Disadvantages of Closures:
- Over consumption of memory when we create a lot of closures those variables are not garbage collected untill the program expires 
- If the closures are not handled correctly it may lead to memory leaks and may freeze the browser

         ---->>*/
