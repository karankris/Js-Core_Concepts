//Types of Promise API's

/*
  1) - Promise.all();
  2) - Promise.allSettled();
  3) - Promise.race();
  4) - Promise.any();
*/

// (1) --- Promise.all() --- (Fail fast technique)

/*
     - Promise.all() has an ability to handle multiple api calls or to take make parallel api calls
     - It takes the input as an array(itterable)

Example :
 Case 1: Success case (resolved):
    There are three process [P1 ,P2 ,P3]

     Time taken to get completed:
        P1 -> 3 seconds
        P2 -> 1 second
        P3 -> 2 seconds

 Result:
     It makes an array as an output
       result = [val1, val2 ,val3] -> Time taken to complete all the 3 process is 3 seconds

       - It takes the maximum time taken for a process (or) It wait for all the process to get completed so the maximum time taken for the process 1 (P1) is 3 seconds so all the process will be completed and stored in the result only after 3 seconds.

 Case 2: Failure case (reject):

   Lets take the same example as it is in Case 1  ([P1,P2,P3])

    Time taken to get completed:
        P1 -> 3 seconds
        P2 -> 1 second
        P3 -> 2 seconds

   Failure case: If at all the process P2 gets rejected the api call will not distub the other api's such as P1 and P3 it will be as in a success state but in the Proimise.all() Result it will return an error thrown for P2 and in 1 second

   - In the case of failure of atleast on process in the array "it does not wait for other procees to get completetd and instantly after 1 seconds it will throws an error in the console"

  Result:
      "Error in fetching the process P2 in 1 seconds"
       */

/*---->
// Code examples of Promise.all()

// Dummy api calls with setTimeout()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 Success"), 3000);
  // In resolve case it wait for 3 seconds and throws the result inside an array for all p1,p2,p3
})
const p2 = new Promise(function (resolve, reject) {
  //setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 Failure"), 1000);
  // It throws an error after 1 second and does not return the output of other process
})
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
})

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.error(err);  // Best practice to handle an error (" Don't make a uncaught error")
  })
<<---*/

// ------------------------------------------------------------------------------------------ //

// (2) --- Promise.allSettled() ---

// Alternative to Promise.all():

/*
  If any one of the api's gets rejected from ([P1,P2,P3]) ie,. P2 , but we need the result for the other two api's  such as P1 and P3 then we must use Promise.allSettled() api for this.

      Time taken to get completed:
        P1 -> 3 seconds
        P2 -> 1 second
        P3 -> 2 seconds

  In Case 1: success case(resolve) --> It acts same as it is in the promise.all()

  In Case 2 : failure case(reject)

  - When the P2 gets failed in the promise.allSettled then it will wait for 3s to makes sure that all the process to get settled whether it is failure or a success the result will be displayed for all the process P1,P2,P3

  - Irrespective of success or a failure output will be same as the number of promises i.e., it throws both success and an error message.
*/

/*--->>
// Code examples of Promise.allSettled(); It is the safest option among all Promise to use in real time

// Dummy api calls with setTimeout()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 Success"), 3000);

})
const p2 = new Promise(function (resolve, reject) {
  //setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 Failure"), 1000);
  //Irrespectice of fail or pass it prints all in the result(fail -> rejected, success -> fullfill)
})
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
})

// The result will be returned as an array of objects

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.error(err);
  })
<<---*/
// ------------------------------------------------------------------------------------------ //

// (3) ---  Promise.race() ---

/*
    - Promise.race() as the name suggests the promise one who is executed in the least amount of time wil be displayed in the result at first (first who wons in the race)

 Case 1:  Success case(resolved):

    let us take same three process such as Promise.race([P1, P2, P3]);

      Time taken to get completed:
           P1 -> 3 seconds
           P2 -> 5 second
           P3 -> 2 seconds

           In this success case the one which has least time will be thrown to the result at first itself ans does not wait for other process to get completed

        Result:
           result = ([val3, val1, val2]) according to the minimum time it takes for each process

  Case 2:  Failure case(rejected):

     Let us take the same example timings for ([P1, P2, P3]) if the process P3 is rejected it again does not wait for other process to get completed irrespective of success or failure

     It means the all the result will be displayed in the output based upon the time interval which is first executed if at all it has an error it throws up an error also it does not wait for other process to get settled and remaining process will be executed and the result will be showed for (P1 and P2)

       Result:(Error, P1, P2);
*/

/*---->
// Code examples of Promise.race();

// Dummy api calls with setTimeout();
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 Success"), 3000);

})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p2 success"), 1000);
  // setTimeout(() => reject("p2 Failure"), 1000);

  // Irrespective of success or a failure it prints p2 in the console because Promise.race() takes the process which has less time taken to get executed (returns First settled promise in case of fullfill or rejected)

})
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p3 success"), 2000);
})
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.error(err);
  })
  <<---*/
// ------------------------------------------------------------------------------------------ //

// (4) ---  Promise.any() ---
/*
     - It is very similar to promise.race() it also throws the result of the process at first which is has the least timing

    - Major differences between the race() and any() promise api's are in the Promise.race() it does not wait for any other process to be completed irrespective weather it is reject or a resolved conditions

    - In Promise.any() it waits for the first success of the entire processes it will result only the success inside the output array and does not care about the failed or the reject process but in a case where all the process got failed it seems that it throws a list of errrors as an array for all the process involved in it.

  Case 1: Success case (Resolve case):

                 - It is very similar to promise.race() case

  Time taken to get completed:
     P1 -> 3 seconds
     P2 -> 5 second
     P3 -> 2 seconds

           In this success case the one which has least time will be thrown to the result at first itself ans does not wait for other process to get completed

        Result:
           result = ([val3, val1, val2]) according to the minimum time it takes for each process

       - Here the only thing is that it waits for the first success to get happen as soon as the process P3 got success the displayes the the val3 in the output array in the first as same as that what happen in the Promise.race() case

  Case 2:  Failure case(rejected):

     - Same time taken to complete as it is in the Case 1 for Promise.any([P1, P2, P3])

     Condition 1:
        - If the process P3 get failed it ignores the P3's result and wait for the first success to happen if at all the P2 as well the P1 got success then it will show the first success in the result and the next success in the result array.

        Result:
          result = ([P1 ,P2]) here the P1 has been completed in 2 seconds so it is in that order of success and also we must note that there is a error in the P3 but in Promise.race() it ignores the error conditions.

    Condition 2:
      - If all the process got failed like P1, P2, P3 got failed all in the same time the promise.any will throw the list of error (or) it is called as an Aggregate error

      Result :
        result = ([err1, err2 ,err3])
*/

// Code examples of Promise.any(); // It returns the first settled success

// Dummy api calls with setTimeout();
/*---->

const p1 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("p1 Success"), 1000);  // It returns the first success
  setTimeout(() => reject("p1 Fails"), 1000);
})
const p2 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("p2 success"), 1000);
  setTimeout(() => reject("p2 Fails"), 3000);

})
const p3 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("p3 success"), 2000);
  setTimeout(() => reject("p3 Fails"), 2000);
})
Promise.any([p1, p2, p3]).then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.error(err);
    console.log(err.errors); // To make the errors inside an array
  })
  <<---*/
// If there is atlest one success condtion it ignores all the failed case and print the result of the first sucess promise

// In a condition where all the promises p1, p2 ,p3  get fails it results in AggregateError: All promises were rejected

