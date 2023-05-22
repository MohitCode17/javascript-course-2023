/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 HIGHER ORDER FUNCTIONS PART02 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 FUNCTIONAL PROGRAMMING

// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.


// ✋ FOREACH

// forEach() iterate an array elements, we use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

const items = [1, 2, 3, 4, 5];

// ➡️ Iterate items array
items.forEach((item) => {
    // console.log(item);
})

// ➡️ Sum of all elements in items
let sum = 0;
items.forEach(item => sum += item);
//console.log(sum);

// ➡️ Iterate countries array and change elements in uppercase
const countries = ["India", "Denmark", "Sweden", "Norway", "Iceland"];

// countries.forEach(country => console.log(country.toUpperCase()));


// ✋ MAP

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5]

// ➡️ Iterate numbers array and return square of every element
const squareOfNum = numbers.map((num) => {
    return num * num;
});

// console.log(squareOfNum);


// ✋ FILTER

// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// ➡️ Iterate countries array and filter country which contains "land".

const contryIncludeLand = countries.filter((country) => {
    return country.includes("land");
})
// console.log(contryIncludeLand);


// ➡️ Filter score more than 80
const scores = [
  { name: 'Mohit', score: 95 },
  { name: 'Rohan', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Deeptika', score: 50 },
  { name: 'Rhena', score: 85 },
  { name: 'John', score: 100 },
]

const newScore = scores.filter((score) => {
    return score.score > 80;
})

// console.log(newScore);


// ✋ REDUCE

// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// aim : sum of all the numbers in array
const numArr = [2, 3, 4, 5, 6, 8];

const total = numArr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0);
// console.log(total);


const shopingCart = [
    {productId: 1, productName: "Samsung S23 Ultra", price: 145000},
    {productId: 2, productName: "Mac book", price: 102000},
    {productId: 3, productName: "Smart led", price: 45000},
]

const totalCartAmount = shopingCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0)

// console.log(totalCartAmount);


// ✋ EVERY

// Check if all the elements are similar in one aspect. It returns boolean

const names = ['Mohit', 'Mathew', 'Elias', 'Rohan'];
// const names = ['Mohit', 'Mathew', 'Elias', 123];
const areAllString = names.every((name) => typeof name === 'string');
// console.log(areAllString);

// 💯 As name suggest "every" if one of the type is not string return false.


// ✋ SOME

// some: Check if some of the elements are similar in one aspect. It returns boolean

// const names = ['Asabeneh', 4, 3, 2];
// const bools = [false, false, true, false]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true

// const areAllStr = names.some((name) => typeof name === 'string');
// console.log(areAllStr)


// ✋ FIND

// Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 14, 18, 10];
const findAge = ages.find((age) => age > 20);
// console.log(findAge);

// 💯 In filter method return array with having all the value which satisfied the condition as follow, but in find it will return only first satisfied element in an array.


// ✋ FINDINDEX

// findIndex: Return the position of the first element which satisfies the condition

const findAgeIndex = ages.findIndex((age) => age < 20)
// console.log(findAgeIndex);


// ✋ SORT

// The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
// console.log(products.sort());


const numberArr = [5,9,1200, 410, 3000];

numberArr.sort((a,b)=>{
return a-b;   // Sort in acending order
// return b-a;   // Sort in decending ooder
});
// console.log(numberArr);


// 1200,410
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4


// price lowToHigh HighToLow

const productsCart = [
  {productId: 1, produceName: "p1",price: 300 },
  {productId: 2, produceName: "p2",price: 3000 },
  {productId: 3, produceName: "p3",price: 200 },
  {productId: 4, produceName: "p4",price: 8000 },
  {productId: 5, produceName: "p5",price: 500 },
]

const lowToHigh = productsCart.slice(0).sort((a, b) => {
    return a.price - b.price;
});

// console.log(lowToHigh);