// Callback function in js
// When we a pass a function inside another function it is called as callback function
// Async tasks (executed through call stack)
/*----->>>
setTimeout(function(){ //--> the function inside the setTimeout is the callback function and called after 5 seconds
console.log("timer"); 
},5000)   // Js dosen't wait for 5 seconds instead it moves on to another function

function a(b) { // --> When a is needed to callback the function a it does it
console.log("a");  //---> a executed first
b();
}
a(function b() {  //----> Callback function i.e the function b is handed over to the function a
console.log("b");
});
  <<------*/
// js has only one call stack or otherwise it is called as main thread
// If any operation blocks the call stack it is called as blocking the main thread

// ------------------------------------------------------------------------------------------------------------------- //

// Event listeners
/*----->>>
document.getElementById("clickMe")
    .addEventListener("click", function x() {  //--> callback function when js pick the element clickMe and it add a eventListener to it when the event occour the callback function is called here again
        console.log("Clicked");
    });
  <<------*/
// Make a count inside a event listeners with the help of closures
/*
function attachEventListener(){
    let count  = 0; 
document.getElementById("clickMe")
    .addEventListener("click", function x() {   //--> the callback function forms a closure and remember the where the count is present
        console.log("Clicked", ++count);    //--> each and every time it increases the count and forms a closure with its parent (Refer to callstack image 1.4)
    
        //   --- see more about the button element in index.html  ---
    });
}
attachEventListener();
*/
// EventListeners and garbage collector  

//EventListener must be removed or garbage collected after use because it is heavy in its memory
// When lots of buttons with eventListeners are there it makes our page slow so a good practice would to free up the memory or to be garbage collected after it been used up

