/*
What is async ?
What is await ?
How async await works behind the scenes?
Examples of using async/await
Error Handling
 Async await vs Promise. then/.catch
 */

/*
async:
   Async is a keyword used before a function to create a async function
   - async function will always returns a promise if in a case where  we return a value instead of a promise it wraps the value inside a promise and return only as a promise
*/

// Example:
/* -->
const pr = new Promise((resolve, reject) => {
    resolve("Promise resolved data!!")
    // const err = new Error("Promise has an error");
    // reject(err);
})

async function getData() {
    return pr;
}
const dataPromise = getData();

dataPromise
    .then((res) => console.log(res)) // The original data can be fetched by using .then methord
    .catch((err) => {
        console.log(err.message);
    })
console.log(dataPromise);  //->> returns a promise
<<---*/

// Async along with await
// Async and await combo is used to handle promises

// Comparision with and without async await function


// With async and await to handle a promise inside a async function we need a await infront of the promise
// Note : await is a keyword that can be only used inside a async function and await must also be placed in front of a promise

/*
// Promise 1:
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 5000)

});

// Promise 2:
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 10000)
});

async function handlePromise() {
    // JS engine waiting for the promise to be resolved and then goes to the next line

    console.log("hello world");     // before the promise everything will be printed as it is
    const val = await p1;           // Way to handle the promise
    console.log("async inner");
    console.log(val);               // First it will wait for the promise and then after 5 seconds it prints "async inner" and then "promise resolved is been printed.

    // Case 1: Two different promises handled together in a diffeerent time interval

    const val2 = await p2;
    console.log("async inner 2");
    console.log(val2);
}
handlePromise();
*/
// Explanation:
// When there is two different promises after 10 seconds the second promise is printed even though it is been resolved (or) if the first promise has less timing to resolve than the second promise then it is done in order after 5 seconds the first promise is printed and then after second promise is resolved after 10 seconds


// Case 2: When there a single promise is called twice

// After 10 seconds both the promises resolved together parallely at same time when there is same promise p1 is handled
/*
const val_same = await p1;
console.log("async inner 2");
console.log(val_same);
*/



// Case 2: Explanation with the callstack:

/*
Stage 1: Call Stack is empty:
p1 p2 --> Async two promises to be resolved at any point of time

Stage 2:
1) console.log("hello world"); is printed at first
2) Reached to handlePromise(); function --> pushed it inside the call stack

Stage 3:
1) When the js sees the await p1 function execution suspends the handle promise() execution will wait untill the p1 is resolved

2)After 5 seconds after the p1 is resolved the handle promise function will again come into the call stack and starts executing from where it is left

Stage 4:
1) When the js sees the await p3 function execution suspends the handle promise() execution will wait untill the p2 is been resolved

2) After 10 seconds after the p2 is resolved the handle promise function will again come into the call stack and starts executing from where it is left
*/




// Case 3:  Without async and await:
/*
function getData() {
    // Js engine will not wait for the promise to be resolved
    p.then((res) =>
        console.log(res));
    console.log("Without async");
    // First the "without async" will be printed and after 5 seconds then the "Promise is resolved is printed in it"
}
getData();
*/

// Real world examples of async await

//const API_URL = "https://api.github.com/users/karankris";

// way 1 error handling using try catch
/*---->
async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const json_data = await data.json();
        console.log(json_data);
    }
    catch (err) {  //-->> error handling
        console.log(err);
        alert("API ERROR")
    }
}
handlePromise();
<<--*/
// way 2 error handling
// error handling without try catch
/*---->
async function handlePromise() {
    const data = await fetch(API_URL);
    const json_data = await data.json();
    console.log(json_data);
}
handlePromise().catch(err => console.log(err));
<<--*/
// What does fetch() does:
// fetch() => it is basically a promise when promise is resolved it returns a response object and these response body is a readable stream to convert this readable stream to json format then response.json() and this is again a promise and when this is resolved then it will gives you a json values response.json() => json value 

