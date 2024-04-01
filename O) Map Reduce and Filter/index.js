// Map Reduce and Filter are Higher order functions

// --- Map ----
/*--------
  Map is used to tranform an array for example
     const arr = [1,2,3,6,5]
            - Make a new array and form a double of it using arr[] i.e double - [2,4,6,12,10]
            - Make a triple array [3,6,9,18,15]
            - Find binary ["1","10","11","110","101"]
-----*/
/*--------
const arr = [1, 2, 3, 6, 5]

function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
function binary(x) {
    return x.toString(2);
}

// ---- Diffrent ways of writting the map function ---

// Way 1:

//let output1 = arr.map(double); //---> the map itterates each value and store in output 1

console.log("Double", arr.map(double));
console.log("Triple", arr.map(triple));
console.log("Binary", arr.map(binary));

// Way 2;

// These can be written in other format in terms of higher order function like passing the condition function inside the map function.

const output = arr.map(function binary(x) {
    return x.toString(2);
});
console.log("Binary_HigherOrderWay", output);

// Way 3;

// By using arrow function

const output_arrow = arr.map((x) => x.toString(2)); //--> each and every value of x inside the map is been transformed into binary
console.log("Binary_ArrowFunctionWay", output_arrow);

-----*/

/*<<----------------------------------------------------------------------------------->>*/

// --- Filter ----
// It is used to filter the values inside an array
// It can also be used in 3 ways which similar to map functions

/*--------

const arr = [1, 2, 3, 4, 5];
// way 1
const odd_output = arr.filter((x) => x % 2)  //--> it filters the array arr accordind to the condition and then stores in the output array
const even_output = arr.filter((x) => x % 2 === 0)  // for even numbers
const greater_four = arr.filter((x) => x > 4)   // for numbers which is greater than 4

console.log("odd", odd_output)
console.log("Even", even_output)
console.log("greater_than_four", greater_four)

// way 2
function isEven(x) {
    return x % 2 === 0;
}
console.log("even", arr.filter(isEven));

//way 3
const odd_output1 = arr.filter(function isOdd(x) {
    return x % 2;
})
console.log("odd_way_3", odd_output1);

-----*/

/*<<----------------------------------------------------------------------------------->>*/

// --- Reduce ----

// Take all the elements out of the array and make up a single element with them

// Find sum or max element in an array

// Non Functional manner
/*--------
const arr = [1, 2, 3];

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));
-----*/

// Code in functional manner using reduce function
/*--------
About reduce function

 - Inside the reduce function it takes two parameters one is accumulator(acc) and another one is current(curr) , (curr) current -> It represents the value which itterates inside the reduce function ,(acc) accumulate -> it stores or accumulate the result that what we get out the values in the array

 - The reduce function has two arguments one is the callback function which has two parameter (acc,current) and the second argument is the initilizer for the first parameter i.e the accumulator (acc)
-----*/

// Find sum

/*--------
const arr = [1, 2, 3, 4, 5];

const output_sums = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0) //--> Intilization of the accumulator value to 0
console.log("sum", output_sums);

// Arrow function methord
const output_sums1 = arr.reduce((curr, acc) => curr + acc)
console.log(output_sums1)
-----*/


// Find max
/*--------
const arr = [1, 2, 3, 4, 5];

const output_max = arr.reduce(function (max, curr) {
    if (max < curr) {
        max = curr;
    }
    return max;
}, 0)  // setting the max value to 0
console.log("Max", output_max)

// Arrow function methord

const arrow_max = arr.reduce((max, curr) => max < curr ? max = curr : max, 0);
console.log("arrow_max", arrow_max);
-----*/

/*<<----------------------------------------------------------------------------------->>*/

// Real world examples with map reduce and filter

/*--------
const users = [
    { firstName: "karan", lastName: "ravi", age: 21 },
    { firstName: "krishna", lastName: "sarathy", age: 19 },
    { firstName: "akila", lastName: "vijayakumar", age: 41 },
    { firstName: "jayasri", lastName: "rangaramanujam", age: 21 },
];

// Example cases:
// 1. Make the list of full names, use:map
//For example 1 the output be like["karan ravi, jayasri rangaramanujam" ....]

const output_fullname = users.map((x) => x.firstName + ' ' + x.lastName);
console.log(output_fullname);



// 2. Count the ages of similar people and print the count, use:reduce
//sample output [21:2,41:1...]


const output_age = users.reduce(function (acc, curr) {  //-> curr(current will be pointing initialy to the first point)
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];  // Each time the value of the age is been increment when the age is in acc
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});  //--> Initialy the accumulator object is empty when the if founds that there is alreay the same age present then it increments the value of that object
console.log("Age and its occurance", output_age);



// Chaining the map filter and reduce
// 3. Find the firstname whose age is less than 30 use:filter

const output_ageFilter = users.filter((x) => x.age < 30).map((x) => x.firstName) // first it filters and maps to the first name whose age is less than 30 (Chaining filter and map) i.e the map will be running on the output of the filter
console.log("Map-Reduce filter", output_ageFilter)

//4.  make this by using reduce

const output_filter_reduce = users.reduce(function (acc, curr) {
    if (curr.age < 40) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log("filter_age_reduce", output_filter_reduce);

// acc will be the empty object at last and curr is the current value inside the user array
     -----*/
 