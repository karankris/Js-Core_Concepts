// --- setTimeout -----
/*-------
function a(){

    var i=10;
    setTimeout(function(){ //--> It forms a closure. setTimeout takes this callback function seperatly stores it in a seperate place and attaches a timer to it
        console.log(i);
    }, 3000)
   console.log("karan");// -->setTimeout does not wait for this line and prints at first and prints 'i' after 3 seconds
}
a();
      -------*/

// **----------------------------------------------------------------------------------------** //

//Example problem print 1,2,3,4,5 using timer

// Cases:
//    1 prints after 1 second
//    2 prints after 2 seconds
//    3 prints after 2 seconds ... upto 5

// TEST CASE 1 using let
/*-------
function t() {
    for (let i = 1; i <= 5; i++) { //--> In using let it is a block scope each and every time the value of i inside the loop will be stored in a seperate memory and refered to different location
        setTimeout(function () { //-->It forms a closure each and every time with a new variable
            console.log(i); //--> Each and every time the loop is runned there will be a new copy of i own identity of i
        }, i * 1000)
    }
    console.log("hello js");
}
t();
        -------*/

//**_______EXPLANTION WITH VAR DECLERATION_____***//

//for (var i = 1; i <= 5; i++){} --> when we use this for loop which is decleared as var then it prints output as '6 6 6 6 6' with the correct time interval but here the var i=0 is not a block scope and the setTimeout() function will make a refrence to the same copy i=6 each and every time when it prints i.e after 5 the loop goes to i++ means it is 6 and prints 6 each and every time untill the time gets exhausted

// **----------------------------------------------------------------------------------------** //

// TEST CASE 2 using var

// !!! Note that each and every time a new reference must be crreated to the function setTimeout() to achive the output

/*Approach for solving:
                1) Wrap the setTimeout with another function
                2) Make a closure with that wrapped function
                3) Pass the variable 'i' or any varibale inside the wrapped function to make a new copy each and every time when the fuction time() is called */
/*-------
function time() {
  for (var i = 1; i <= 5; i++) {
      function close(x) //---> Each and every time a new copy of x is created and stored as a reference
      {
          setTimeout(function () {
              console.log(x);
          }, x * 1000)
      }
      close(i);
  }
}
time();
     -------*/

// TRUST ISSUES WITH setTimeout()

// EXAMPLE 1: (Million lines of code or blocking the main thread):

/*-------
console.log("start");

setTimeout(function cb() {
    console.log("Callback")
}, 5000);

console.log("end");

//million lines of code example to block the main thred (i.e) block main thread for 10 seconds


let startTime = new Date().getTime(); // get time in milliseconds
let endTime = startTime;
while (endTime < startTime + 10000) {
    endTime = new Date().getTime();

    //console.log("start:  " + startTime, "end:  " + endTime); --> uncommnet when the condtions in while is not understandabe Refer...(C1) for Explantion
}
console.log("While Expires");

             -------*/

/*-------
`millions of lines of code `

Explanation condition (C1):

while (endDate < startDate + 10000) {endDate = new Date().getTime(); } the condition here is we have fixed the startTime to Time + 10 second more and now the endTime is also equals startTime here so we have add up 10 seconds to start time inside the while condition untill or unless the EndTime reach more than the startTime the loop will breaks i.e (After 10 seconds "10000ms = 10s" ) and untill the setTimeout timer waits more than the time it has specified in it (i.e 5 seconds)

  -------*/

//Senario Case 1:
// Let us assume that when we have `millions of lines of code refer...(C1)` after this console.log("end") line and it takes 10 seconds to execute that millions of lines of code

//What happens ? :
/*-------
        The function cb() is pushed inside the "callback queue" and wait's for the callStack to become empty so that the cb() is pushed inside the callStack by EventLoop when the callStack is empty (if(callStack == NULL && CallbackQueue != NULL) then push the function cb()) inside the callStack but Here in our "senario case 1" the callStack is now busy for 10 seconds for the execution of the million's of lines of code (C1) meanwhile the setTimeout for fucntion cb() has got expired but it will wait for 10 seconds or delayed due to the busy CallStack and after 10 seconds, then only the the cb() function is executed only after 10 seconds.

Result/Output :
       The cb() will execute only after 10 seconds and after it prints Callstack inside the console but we have mentioned only 5 seconds in our setTimeout function so we can say that setTimeout has some trust issues

       OUTPUT:
          Start
          End
          While Expires ---> Only after 10 seconds
          Callback  ----> waits more than 5 seconds and after While Expires after 10 seconds it will instantly prints out Callback inside the console
           -------*/

// Example 2: Setting timer to 0 seconds
/*-------
console.log("start");

setTimeout(function cb() {
    console.log("Callback")
}, 0); //--> setting timer to 0 seconds

console.log("end");
     -------*/
// Order of execution 
/*-------
   Initially the start will be printed in the console and after that end will be printed and atlast the Callback will be printed

   // Reasons:
        As we know that SetTimeout() having a call back function cb() and setTimeout() is also an web API which waits inside the callBack queue and the EventLoop will let that to print atlast , "(if(callStack == NULL && CallbackQueue != NULL) then push the function cb())"" because the callStack needs to be empty for the callBack queue tasks to be assigned on the callStack and hence it is executed atlast.

   //Output
           start
           end
           Callback

   // UseCases of Setting timer to 0 seconds:
      When you want to make a peice of code to be differed from other code or make a code less prioritize then other code we can fix the setTimeout (0) to 0 seconds
 -------*/