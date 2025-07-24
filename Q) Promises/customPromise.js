const cart = ['Apple', 'Orange', 'Banana'];

const validateOrder = () => {
    return true;
}

const createOrder = (cart) => {
    const customPromise = new Promise((resolve, reject) => {
        if (!validateOrder(cart)) {
            const error = new Error("Your order is failed! Please Try again")
            reject(error);
        }
        const orderId = Math.floor(Math.random() * 9000) + 1000;
        if (orderId && validateOrder(cart)) {
            let countDown = 5
            const interval = setInterval(() => {
                if (countDown > 0) {
                    console.log(`Loading... (${countDown})`);
                    countDown--;
                }
                else {
                    clearInterval(interval);
                    resolve(orderId);
                }
            }, 1000);
        };
    });
    return customPromise;
}
const promise = createOrder(cart);
console.log(promise);
promise.then((orderId => console.log("Current orderId", orderId, "Your ordered items", cart)));


