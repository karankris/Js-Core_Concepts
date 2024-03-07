// Higher Order Functions
// A function which takes another function as an argument or returns a function from it
/*--->>
   Basic Example 1:
function x() { //--> Callback function
    console.log("karan");
}
function y(x) { // (y) is the higher order function which takes an argument x into it
    x();
}
y(x);

      <<------*/

/*<<----------------------------------------------------------------------------------->>*/

//Example 2 : Radius of the four circles given and find the area, circumference, diameter of all the four circles

// This is Non-Efficient code and dosen't follow DRY (Don't repeat yourself rule):
/*--->>
const radius = [3, 1, 2, 4];

const getArea = function (radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])

    }
    return output

}
console.log("Area", getArea(radius));

const getCircumference = function (radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i])

    }
    return output

}
console.log("Circumference", getCircumference(radius));

const getDiameter = function (radius) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);

    }
    return output

}
console.log("Diameter", getDiameter(radius));
    <<------*/

/*<<----------------------------------------------------------------------------------->>*/

//Approach for efficent code: (Functional Programming)
/*--->>
To achive the DRY principle
         - Make use of generic function
         - Abstract the logic of calculation out
         - The Repeated code will be now only written once and the not repeated code would be abstracted and been called from out of the function as genric function and been used inside the repeated code
         - Make the small reusable components i.e functions
<<------*/


//Optimized code
/*--->>
const radius = [3, 1, 2, 4];

// Area
const area = function (radius) {      //-->Logic of the  Function is been abstracted out
    return Math.PI * radius * radius;
}

// Circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius
}

//Diameter
const diameter = function (radius) {
    return 2 * radius
}
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output
}
console.log("Area", calculate(radius, area));
console.log("Circumference", calculate(radius, circumference));
console.log("Diameter", calculate(radius, diameter));

<<------*/

/*--->>
// To make our function calculate similar to map use Array.prototype
//--> The function calculate will be available in on all the Arrays
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));  // The this over here represents the radius array
    }
    return output;
}
// Syntax similar to map function
console.log("Area", radius.calculate(area));  //--> this in the calculate function will point to the radius over here
 <<------*/

/*<<----------------------------------------------------------------------------------->>*/

// <<-----Map function  ------>>
// Write the process of whole "calculate" function() using map function
//console.log("Map Area", radius.map(area));


/*--->>
Featues of Map
          - Map create a new array 
          - Itterate each and every element inside radius 
          -returns the output
          <<------*/
