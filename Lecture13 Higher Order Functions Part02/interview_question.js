/*
👉 MAP V/S FILTER V/S REDUCE

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

The reduce() method executes a reducer function on each element of the array and returns a single output value.
*/



// 👇 Example of Map

// Create new array, In which multiply each element with 3 without modifiying existing array.

// ➡️ Traditional way to do

// const multiplyArr = [];
// for(let i=0; i<numsArr.length; i++){
//     multiplyArr.push(numsArr[i] * 3);
// }
// console.log(numsArr);
// console.log(multiplyArr);


// ➡️ Using map method
const numsArr = [1, 2, 3, 4, 5, 6, 7];

const multiplyArr = numsArr.map((num) => {
    return num * 3;
});

// console.log(multiplyArr);



// 👇 Example of Filter

// Create new array, In which return elements that will greater than 3.

const numGreaterThanThree = numsArr.filter((num) => num > 3);
// console.log(numGreaterThanThree);



// 👇 Example of Reduce

// Sum of each elements in numsArr and reduce it in single output.

const sumofAll = numsArr.reduce((acc, currVal) => {
    return acc + currVal;
}, 0);

// console.log(sumofAll);




// 👉 POLYFILLS OF MAP

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//   // return element for newArray, after executing something
// });

Array.prototype.customMap = function(cb){
    // Create new array populated with result
    const tempArr = [];

    // 'this' refers to the array on which customMap is called
    for(let i=0; i<this.length; i++){
        tempArr.push(cb(this[i], i, this));
    }

    return tempArr;
}

// const demoArr = [1, 2, 3, 4, 5];
// const outputArr = demoArr.customMap((num, i, arr) => {
//     return num * 3;
// });

// console.log(outputArr);



// 👉 POLYFILLS OF FILTER

// let newArray = arr.filter(callback(currentValue[, index[, array]]) {
//    // return element for newArray, if true
// });


Array.prototype.customFilter = function (cb) {
    const tempArr = [];

    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            tempArr.push(this[i]);
        }
    }
    return tempArr;
};

// const demoArr = [1, 2, 3, 4, 5];
// const greaterThanThree = numsArr.customFilter((num, i, arr) => {
//     return num > 3;
// })
// console.log(greaterThanThree);




// 👉 POLYFILLS OF REDUCE

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

Array.prototype.customReduce = function(cb, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

// const demoArr = [1, 2, 3, 4, 5];
// const sumArr = demoArr.customReduce((acc, num, i, arr) => {
//     return acc + num;
// }, 0);
// console.log(sumArr);