Array.prototype.map = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    return res;
}

console.log(['karan', 'balaji'].map(data => data + 'Dev'));


Array.prototype.filter = function (callback) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) res.push(this[i]);
    }
    return res;
}

console.log([0, 1, 2, 3].filter(data => data % 2 === 0));

// arr = [1,2,3] ; i = 0
Array.prototype.reduce = function (callback, intial) {
    let acc = intial !== undefined ? intial : this[0]; // setting accumulator based on intial value
    let i = intial !== undefined ? 0 : 1;    // setting the index based on the intital value

    for (; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;

} 

console.log([1,2,3].reduce((acc,curr) => acc + curr,0));


function deepFlatten (arr) {
   return arr.reduce((acc,val) => {
    return Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val); 
   },[]);
}

console.log(deepFlatten([1,2,[1,4] ,[[2,4],[4.4]]]));