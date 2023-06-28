// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 CONSOLE OBJECT 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// We use console object methods to show output on the browser console and we use document.write to show output on the browser document(view port). Both methods used only for testing and debugging purposes. The console method is the most popular testing and debugging tool on the browser.

// In addition to the famous, console.log() method, the console provides other more methods.

// 👉 console.log()

// We use console.log() to show output on the browser console..

// console.log('I am Mohit Gupta')

// 👉 console.warn()

// We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.

// console.warn('This is a warning')
// console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!');

// 👉 console.error()

// The console.error() method shows an error messages.

// console.error('This is an error message')
// console.error('We all make mistakes')

// 👉 console.table()

// The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

// const employeDetails = [
//   {
//     id: 1,
//     name: "Mohit Gupta",
//     designation: "Jr. Developer",
//     salary: 45000,
//   },
//   {
//     id: 2,
//     name: "Rohan Mehra",
//     designation: "Intern",
//     salary: 25000,
//   },
//   {
//     id: 3,
//     name: "Rahul Gupta",
//     designation: "Sr. Developer",
//     salary: 75000,
//   },
// ];

// console.table(employeDetails);


// 👉 console.time()

// Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.

// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]

// console.time('Regular for loop')

// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1])
// }
// console.timeEnd('Regular for loop')


// console.time('for of loop')
// for (const [name, city] of countries) {
//   console.log(name, city)
// }
// console.timeEnd('for of loop')

// console.time('forEach loop')
// countries.forEach(([name, city]) => {
//   console.log(name, city)
// })
// console.timeEnd('forEach loop')

// According the above output the regular for loop is slower than for of or forEach loop.


// 👉 console.info()

// It displays information message on browser console.

// console.info('30 Days Of JavaScript challenge is trending on Github')


// 👉 console.assert()

// The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed.

// console.assert(4 > 3, '4 is greater than 3') // no result
// console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4


// 👉 console.clear()

// The console.clear() cleans the browser console.