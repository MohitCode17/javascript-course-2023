// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ALL ABOUT STRINGS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟


// A string is a sequence of textual characters, It can contain alphanumeric characters, symbols, spaces, newlines, emoticons, characters from other languages etc. A string can be denoted using a pair of single quotes (''), or a pair of double quotes ("").

// const firstName ="Mohit";
// console.log(firstName);


/*
👉 STRING INDEXING AND LENGTH

Each character in a string sits at a given position, formally known as its index.
Indexes begin at 0. This means that the first character is at index 0, the second one is at 1 and so on and so forth.
The total number of characters in a string is referred to as its length.
*/

// console.log(firstName[0]);  // Print "M"
// console.log(firstName.length);  // Print 5


/*
// 👉 ESCAPE SEQUENCE

In JavaScript and other programming languages "\" followed by some characters is an escape sequence.

\n: new line
\t: Tab, means spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

*/

// console.log("My favorite programming languare is JavaScript.\nWhat's your ?");
// console.log("Three fundamental topic for web developement.\nHTML\tCSS\t\tJavaScript");


// 👉 STRING IMMUTIBILITY

// Sting is immutable data type, so we can not change its value.

// let course = "favaScript";
// course[0] = "J";    // can't modified
// console.log(course);



// 👉 COMMON METHODS OF STRING

// ➡️ Connecting two or more strings together is called concatenation. We use (+) operator to connect one or more strings.

// const firstName = "Mohit";
// const lastName = "Gupta";
// const fullName = firstName + " " + lastName;
// console.log(fullName);


// ➡️ concat(): Joins two or more strings

// const firstName = "Mohit";
// const lastName = "Gupta";
// const fullName = firstName.concat(lastName);
// console.log(fullName);


// ➡️ trim(): Removes whitespace from both sides of a string

// const demoString = "                 hello world                   ";
// console.log(demoString);
// console.log(demoString.trim());


// ➡️ indexOf(): Returns the index of the first occurrence of a specified text in a string. if not found, it will return -1.

// const favCricker = "Rohit Sharma";
// console.log(favCricker.indexOf("Sharma"))   // Return 6th index


// ➡️ lastIndexOf(): Return the last index number of the searched charactered with in the string.

// const greets = "Hello viewers, I'm Mohit Gupta. My channel is Mohit codes";
// console.log(greets.lastIndexOf("Mohit"));   // Return 46th index


// ➡️ search(): Searches a string for a specified value and returns the position of the match. if not found return -1.

// const greets = "Welcome viewer, Hope you are well";
// console.log(greets.search("Hope"));


// ➡️ split(): Splits a string into substring, and returns an array containing each element.

// const aboutJs = 'JavaScript is most popular language is the world in 2023';
// console.log(aboutJs.split());
// console.log(aboutJs.split(' '));

// const countries = 'India, America, Russia, Canada';
// console.log(countries.split(','))


// ➡️ slice(): Returns a substring of the string based on the "start" and "end" index , it will not include the "end" index itself.

// let language = "English";
// let mystr= language.slice(0)    // English
// mystr= language.slice(0,5)      // Engli
// mystr = language.slice(-3);     // ish
// console.log(mystr)

// Note: The original string will not be changed.


// ➡️ substring(): Returns the characters in a string between “from” and “to” indexes. It will not include “to” inself.

// let myString = 'javascript Programming';
// myString = myString.substring(0,9);
// console.log(myString)


// ➡️ replace(): Replaces a specified value with another value in a string. It replace only the first occurence.

// let greet = "hii! I'm your mohit, I hope you all are enjoying";
// console.log(greet.replace("mohit", "Mohit"));
// console.log(greet);

// Note: Original string will not be changed.


// ➡️ toUpperCase(): Change string character into uppercase.

// let fullName = "mohit gupta";
// console.log(fullName.toUpperCase());


// ➡️ toLowerCase(): method change string character into lowercase.

// let fullName = "MOHIT GUPTA";
// console.log(fullName.toLowerCase());


// ➡️ includes(): It takes a substring argument, includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

// let string2 = 'JavaScript is most popular language.';
// console.log(string2.includes('popular'))     // true
// console.log(string2.includes('Popular'))     // false


// ➡️ charAt(): Takes index and it returns the value at that index

// let string2 = 'JavaScript is most popular language.';
// console.log(string2.charAt(0));      // J


// ➡️ startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

// let string = 'Love is the best to in this world'
// console.log(string.startsWith('Love'));
// console.log(string.startsWith('world'))


// ➡️ endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

// let string = 'Love is the most powerful feeling in the world'
// console.log(string.endsWith('world'))
// console.log(string.endsWith('in the world'))




// 👉 TEMPLATE LITERALS IN JS

// ES6 template literals provide the syntax that allows you to work with strings in a much cleaner way. In ES6, we can create a template literal by wrapping the string in backticks.

const greet = "Good Morning, Welcome";
const channelName = "mohitCodes";

// Expected ---> Hello Everyone Good Morning, Welcome to mohitCodes. Lets learn and Fun together.

// const statement = "Hello Everyone" +" "+ greet + " "+ "to" +" "+ channelName+". Lets learn and fun together";

const statement = `Hello Everyone ${greet} to ${channelName}. Lets learn and fun together`;
console.log(statement);