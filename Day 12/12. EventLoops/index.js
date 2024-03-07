// To make a javascript program to wait for some time i.e., for 5 seconds so wee need "Web API's" to access the timer and other functionality of the javascript

// Some of the Web API's which are not the part of javascript are :
/*----->>
We can use these api through global object i.e window but we can use it without the window keyword before the API's beacuse everything is present inside the global object

    - setTimeout()
    - DOM API's
    - fetch()
    - localStorage
    - console
    - location
         <<-----*/

// Example 1
/*----->>
console.log("Start");
setTimeout(function cb() {
  console.log("callback");
}, 5000)
console.log("End");
    <<-----*/
//Explanation
// setTimeout(function cb() {},5000) after the timer expires it must go inside the callback queue to be placed again inside the global execution context and the event loop is to cheack the functions of the callback queue and puts it inside the call stack (check if(callback!= NULL) and if its push it inside the stack)

// Example 2
/*----->>
console.log("start");

document.getElementById("clickMe").addEventListener("click", function cb() {
console.log("callback")
})
console.log("End");
<<-----*/

// Explanation:
//document.getElementById("clickMe").addEventListener("click", function cb() { }) --> It Register the callback methord into it and attaches a "click" event to it but the event handler will stay inside the web API environment and it never goes off untill we explicitly close the browser, When the user clicks the button the cb() goes into callback queue and wait for it to place inside the call stack Event loop is only job is to monitor the callstack ass weel as the call back queue

//Fetch() API
// Fetch basically request an API call fetch returns a promise on after then the callback is executed it is placed inside the microtask queue (All the callback fucntion through promises comes to microtask queue and it has a higher prirority)

console.log("start");

document.getElementById("clickMe").addEventListener("click", function cbT() {
    console.log("Callback Timer");
})

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function cbF() {
        console.log("Callback Function")
    })

console.log("end");

// Callback Queue is otherwise called as "task queue", when all the task in the microtask queue have been completed that the event loop will now put the task insides the callback queue into the call stack

// !! When there are more number of sub-microtasks which is generated from microtasks inside the microtask queue it will result in "STARVATION" beacause it does not leave the task inside the call stack queue to be executed !!