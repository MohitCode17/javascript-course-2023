/*
🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ARRAY DATA TYPE 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

An array is an ordered collection of data, stored at contiguous positions known as indexes. An array has the capability of storing multiple values under one hood. The individual values of an array are formally called elements.
Array elements can be of any data type. They could be number, strings, Booleans — simply anything. They could even be arrays.
*/

// 👉 Way of creating an array

// ➡️ Using Array Constructor

// let myArr = new Array();

// ➡️ Using Square Brackets

// let myArr = []; // this is most simplest or widely used way to declare an array

// console.log(myArr);


// 👉 Access element of an array

// We can get an element by its number in square brackets:

let webTech = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'];

// console.log(webTech[2]);  // JS
// console.log(webTech[webTech.length - 1]);  // MongoDB


// 👉 We can replace an element:

// webTech[4] = 'Express'; // modify original array
// console.log(webTech);



// 👉 Common Methods of Array

// ➡️ fill(): Fill all the array elements with static value

// const fillWithZero = Array(8).fill(0);  // 8 is length of array
// console.log(fillWithZero);


// ➡️ indexof(): Return first occurence of value in array, or -1 if not present.

// const numArr = [1, 2, 3, 4, 5, 3];
// console.log(numArr.indexOf(3));


// ➡️ lastIndexof(): Return last occurence of value in array, or -1 if not present.

// const numArr = [1, 2, 3, 4, 5, 3];
// console.log(numArr.lastIndexOf(3));


// ➡️ includes(): Determine whether an array includes certain element, return true or false as appropiate.

// console.log(webTech.includes("React"));


// ➡️ join(): Adds all the elements of an array into a string, separated by the specified separator string

// const names = ['Mohit', 'Rohan', 'Akash', 'Aman'];
// console.log(names.join());
// console.log(names.join(''));
// console.log(names.join(' '));
// console.log(names.join(' '));
// console.log(names.join(','));
// console.log(names.join('#'));


// ➡️ slice(): Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

// console.log(names.slice(0));
// console.log(names.slice(0, 2)); // end will not included
// console.log(names.slice(-2));


// ➡️ toString(): Convert array into a string

// console.log(names.toString());


// ➡️ Array.isArray(): Check if the data type is an array.

// console.log(Array.isArray(names));


// ➡️ concat(): Concate two arrays.

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const fullList = firstList.concat(secondList);
// console.log(fullList);


// ➡️ split(): Split a string into substrings using the specified separator and return them as an array.

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(',')
// console.log(companies);


// ➡️ Array.from() – Used to create an array from any other object.

// const demo = Array.from("Mohit");
// console.log(demo);



// 👉 Important Methods of Array

// ➡️ push(): Appends new elements to the end of an array, and returns the new length of the array.

// webTech.push("Express");
// console.log(webTech);


// ➡️ pop(): Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// webTech.pop();
// console.log(webTech);


// ➡️ unshift(): Inserts new elements at the start of an array, and returns the new length of the array.

// webTech.unshift("UI/UX");
// console.log(webTech);


// ➡️ shift(): Remove elements at the start of an array, and returns the deleted element the array.

// webTech.shift();
// console.log(webTech);


// ➡️ splice(): Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// webTech.splice(0, 0, 'Ui/Ux');
// console.log(webTech);


// ➡️ reverse(): Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// webTech.reverse();
// console.log(webTech);


// ➡️ sort(): Sorts an array in place. This method mutates the array and returns a reference to the same array.

// @param compareFn

// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

// webTech.sort();
// console.log(webTech);

// const num = [20, 14, 23, 54, 1, 10];
// num.sort((a, b) => a - b);   // accending order
// num.sort((a, b) => b - a);   // decending order

// console.log(num);