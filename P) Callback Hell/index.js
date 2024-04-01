//IMPORTANCE OF CALLBACK
// Callback function plays a vital role in writing asynchronous code in javascript

// basic example
/*---->>
console.log("start");

setTimeout(function () {
    console.log("callback")
}, 5000);

console.log("end");
    <<---*/

/*Issues in callback
      - callback hell
      - inversion of control */
      
/*<<----------------------------------------------------------------------------------->>*/

//ISSUE : 1
// CALLBACK HELL
/*  E-commerce cart example
    - create a order
    - proceed to payment 
    - Show order summary
    - Update the wallet
     Condition : After we create an order then only it must proceed to payment and after payment it show the order summary altast it must update the wallet*/
/*---->>

const cart = ["shirt", "pant", "shoes"];

api.createOrder(cart, function () {  //--> Callback function after the order is created then it callbacks to the payment function
   api.proceedToPayment(function () { // After the payment is done it again callbacks the summary api function
       api.showOrderSummary(function () {
           api.updateWallet()   // Atlast after showed the summary it should update the wallet
       })
   });
});
 <<---*/
// When the api's are dependent one after the another i.e one callback inside a another callback and so on leads to Callback Hell and own code become umaintainable and unreadable  (code starts to grow horizontally and not vertically) and it makes the code structure like "PYRAMID OF DOOM"

/*<<----------------------------------------------------------------------------------->>*/

//ISSUE : 2
//INVERSION OF CONTROL problem which occours due to callback
//It states that we can loose our control in our code while we are using callbacks

/*---->>
const cart = ["shirt", "pant", "shoes"];

api.createOrder(cart, function () {
    api.proceedToPayment()
})
 <<---*/
//Problem in this code:
    
//There may be cases that our callback function would not haven't called we blindly trust the createOrder API and if at all the API createOrder is not written properly and has a lot of bugs so we can have a problem of calling back the payment function twice inside the createOrder 



