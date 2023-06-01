/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ASYNCHRONOUS JAVASCRIPT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

// 👉 Synchronous programming

/*
Considered the example below:
1. Register
2. Send Welcome email
3. Login
4. Get user data
5. Display user data

All the process should be run one after another.
*/

// function register() {
//     console.log('Register Done!!');
// };

// function sendMail() {
//     console.log('Email send to mail...');
// };

// function login() {
//     console.log('Login succesfully');
// };

// function getUserData() {
//     console.log('Fetch user data...');
// };

// function displayData() {
//     console.log('Data fetched.. Display to screen');
// };

// register();
// sendMail();
// login();
// getUserData();
// displayData();

// console.log('Other application work!!');


// We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line. That makes this a synchronous program. By default JavaScript is Synchronous and single thread language.

// This creates lot of problems. For example, We request to server for "register" or "login" api and it takes some time to execute suppose 10 seconds or 20 seconds, then other application work won't be able to execute until it's finished, causing delays.


// 👉 What is Asynchronous Programming ?

// With asynchronous code, multiple tasks can execute at the same time while tasks in the background finish. This is what we call non-blocking code. The execution of other code won't stop while an asynchronous task finishes its work.

// Function for delay the execution

// function register() {
//     setTimeout(() => {
//         console.log('Register Done!!');
//     }, 2000);
// };

// function sendMail() {
//     setTimeout(() => {
//         console.log('Email send to mail...');
//     }, 2000);
// };

// function login() {
//     setTimeout(() => {
//         console.log('Login succesfully');
//     }, 2000);
// };

// function getUserData() {
//     setTimeout(() => {
//         console.log('Fetch user data...');
//     }, 2000);
// };

// function displayData() {
//     setTimeout(() => {
//         console.log('Data fetched.. Display to screen');
//     }, 2000);
// };

// register();
// sendMail();
// login();
// getUserData();
// displayData();

// console.log('Other application work!!');


// As you see above code where all function takes 2 second delay to execute the code, but it won't stop the other application work.




// In real world we cannot calculate or assume timing to execute the api request. May be one api takes 2 seconds or another may exeucte in 1 seconds it depends. We cannot do such things in above code if we delay time the process will not same as we want. To do so callback function comes in the picture.


// 👉 What is Callback Functions in JavaScript ?

// "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."


// function register(callback) {
//     setTimeout(() => {
//         console.log('Register Done!!');
//         callback();
//     }, 3000);
// };

// function sendMail(callback) {
//     setTimeout(() => {
//         console.log('Email send to mail...');
//         callback();
//     }, 2000);
// };

// function login(callback) {
//     setTimeout(() => {
//         console.log('Login succesfully');
//         callback();
//     }, 3000);
// };

// function getUserData(callback) {
//     setTimeout(() => {
//         console.log('Fetch user data...');
//         callback();
//     }, 2000);
// };

// function displayData() {
//     setTimeout(() => {
//         console.log('Data fetched.. Display to screen');
//     }, 1000);
// };

// callback hell

// register(function(){
//     sendMail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayData();
//             });
//         });
//     });
// });


// ☝️ Welcome to Callback Hell

// Callbacks are great, but you don't want to use them excessively. If you do, you'll get something called "callback hell". This happens when you nest callbacks within callbacks many levels deep.

// The shape of callback hell is like a pyramid and is also called the “pyramid of doom”. It makes the code very difficult to maintain and understand.

// We can escape this callback hell using something call Promises in asynchronous JavaScript.



// 👉 Promises in JavaScript

// We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// ➡️ A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.


// ✋ Promise constructor

// We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.

// syntax

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })

// - resolve(value) — if the job is finished successfully, with result value.
// - reject(error) — if an error has occurred, error is the error object.


// Example of promise

// const bucket = ["vegetable", "rice", "salt", "coffee", "sugar", "tea-powder"];

// const biryaniPromise = new Promise((resolve, reject) => {
//     if(bucket.includes('vegetable') && bucket.includes('rice') && bucket.includes('salt')) {
//         resolve('Biryani');
//     }else{
//         reject(`Couldn't make sorry`);
//     }
// })


// biryaniPromise.then((value) => {
//     console.log('Lets eat', value);
// }).catch((err) => {
//     console.log(err);
// });



function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register Done!!');
            resolve();
        }, 3000);
    })
};

function sendMail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email send to mail...');
            resolve();
        }, 2000);
    })
};

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject('Invalid Email or Password !!');
            console.log('Login succesfully');
            // resolve();
        }, 3000);
    });
};

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetch user data...');
            resolve();
        }, 2000);
    });
};

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched.. Display to screen');
            resolve();
        }, 1000);
    });
};

register()
    .then(sendMail)
    .then(login)
    .then(getUserData)
    .then(displayData)
    .catch((err) => {
        console.log(err);
    });