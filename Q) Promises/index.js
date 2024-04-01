// Promises
// It is used to handle async operations in javascript
// Definitions:  A promise is an object representing the eventual completion or failure of an asynchronous operation

//const cart = ["shirt", "pant", "shoes"];

//--> It creates an order and returns us the orderId and then it will call the proceedTopayment and it may result in Inversion of control problem (Refer 16. Callback Hell)

// CASE 1:
// We were passing the callback function into another function

/*----->>

createOrder(cart, function (orderId) { //--> callback  function
    proceedToPayment(orderId);
});
<<-----*/

// Solution for the above code

//CASE 2:
// We were attaching a callback function to a promise object and promises gives us the control because only when he createOrder(cart) api is ready it will fill the promise object with the data into it and as soon as it filled the call back function proceedToPayment() inside the createOrder api will be called only once.

/*----->>
const promise = createOrder(cart) //--> it will returns a promise

// {data : orderDetails} after the data is filled with it the callback function inside the promise object will be automatically called

promise.then(function (orderId) {
    proceedToPayment(orderId);
});
<<-----*/

// promise is an empty object {data: undefined}  it holds the data that createOrder api returns and initially it holds an empty value called undefined and after some time inside the data the createOrder(cart) API will returns the value and stored inside the data and it will have {data : orderDetails} and after we must attach the callback function to our object

// real API example
// Fetch makes us the API call and it is one of the WEB API and it also returns us a promise


// const API = "https://api.github.com/users/karankris"

// const users = fetch(API);   //--> The promise objects and states are shown in the refer (image 1.8)

// console.log(users);  //-> Initially it prints in browser as pending (appending state) and after that inside that it would be fulfilled

/*--->>

- state of a promise  --> What state the promise is (1) pending state (2) fulfilled state (3) rejected state
- result of a promise --> Stores the data which is been returned

// Promise objects are immutable cannot be edited

<<---*/

// Callback Hell refer (16. Callback Hell) can be handled using promise chaining

// Callback hell (Inconsistent code)
/*--->>
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance()
        })
    });
});

//--> Promise chaining (Consistent code)
// !! Note that the date flow from one chain to another will occour only when we return a promise from one to another

//const cart = ["shirt", "pant", "shoes"];

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return ShowOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    });

// it can also be writtend by using the arrow function

createOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo))
    <<---*/
//  Creating a Promise, Chaining & Error Handling

// Creating a Promise

/*------->
const cart = ["shirt", "pant", "shoes"];

//Created a promise object
const promise = CreateOrder(cart);
console.log(promise); // It wil be in the pending state because the setTimeout is executed at last

promise.then(function (orderId) {  //promise order is attached with this function
    console.log(orderId);
    //ProceedToPayment(OrderId);
})
    .catch(function (err) {
        console.log(err.message);
    }) // We can write a failure callback for proper error handling


//Producer end (Creating a promise)

function CreateOrder(cart) {
    //Creating a promise constructor

    const pr = new Promise(function (resolve, reject) { // By default the promise constructor function has two parameters(resolve,reject)
        //CreateOrder
        //ValidateCart
        //OrderId
        if (!validateCart(cart)) {
            const err = new Error("The cart is been rejected"); //Proper error handling shoud be done
            reject(err);
        }
        //logic for createOrder
        const orderId = "karan1234";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}
//Defining validateCart
function validateCart(cart) {
    return false; // Make true for orderId to be generated
}
<<---------*/

//Promise chaining
/*------>>
const cart = ["shirt", "pant", "shoes"];

// Note: in promise chaining we must return the promise from one level and to handle in the next level of the chain
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId
    })

    // .catch(function (err) {
    //     console.log(err.message);  // It only handles the error for the cart and not for the remaining and others will be executed even createOrder has an error i.e the then after a catch will be executed for sure
    // })

    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message); // If there is any error on any point of our chain our error will be handled when it is decleared atlast
    })

function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Your cart is been rejected");
            reject(err);
        }
        if (validateCart(cart)) {
            const orderId = "karan0930"
            resolve(orderId);
        }
    })

}
function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {  // Another way of returning the function
        resolve("payment successfull");
    })
}
function validateCart(cart) {
    return true;
}

<<----*/
// Additional promise Examples

//createOrder,proceedToPayment, showOrderSummary, updateWallet

/*------>>
const cart = ["shirt", "pant", "shoes"]

createOrder(cart)
    .then(function (orderId) {
        console.log("Order ID:", orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return paymentInfo;
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSumary) {
        console.log(orderSumary);
    })
    .then(function (orderSumary) {
        return updateWallet(orderSumary);
    })
    .then(function (walletStatus) {
        console.log(walletStatus);
        return walletStatus;
    })
    .catch(function (err) {
        console.log(err.message);
    })

//Producer end (creating promise API)
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!isValidateCart(cart)) {
            const err = new Error("Cart is not valid, Failed to generate orderId");
            reject(err);
        }
        else if (isValidateCart(cart)) {
            const orderId = "orderV1";
            resolve(orderId);
        }
    })
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (!orderVerification(orderId)) {
            const err = new Error("OrderId is not Verfied, Payment Rejected");
            reject(err)
        }
        else if (orderVerification(orderId)) {
            resolve("Payment is proceeded for OrderId " + orderId)
        }
    })
}

function showOrderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        if (!orderStatus(paymentInfo)) {
            const err = new Error("Order summary cannot be displayed");
            reject(err);
        }
        else if (orderStatus(paymentInfo)) {
            resolve("Order placed successfully!! Upadating your wallet..");
        }
    })
}

function updateWallet(paymentInfo) {
    return new Promise(function (resolve, reject) {
        if (!walletBalance(paymentInfo)) {
            const err = new Error("Wallet cannot be updated");
            reject(err);
        }
        else if (walletBalance(paymentInfo)) {
            resolve("Your wallet is been updated ")
        }
    })
}

function isValidateCart(cart) {
    return true;
}
function orderVerification(orderId) {
    return true;
}
function orderStatus(paymentInfo) {
    return true;
}
function walletBalance(paymentInfo) {
    return true;
}
<<----*/

