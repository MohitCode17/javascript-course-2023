// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 ITERABLES 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// Iterable objects are objects that can be iterated over with for..of loop.

// Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

// Example-1
const firstName = "Mohit";

for (let char of firstName){
  console.log(char);
}

// Example-2
const myArray = ["item1","item2","item3"];
for(let elem of myArray){
  console.log(elem);
}

// 💯 Simply, object which has length property and can be access using index called iterables.











// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 SETS 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// Set is a collection of elements, that can contains only unique elements. Let us see how to create a set in the section below.

// 👉 Creating a set

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];

const set = new Set(languages);
console.log(set);

// ✋ Set is an iterable object and we can iterate through each elements.

for(let language of set) {
    console.log(language)
}


// 👉 Add Element to set

const companies = new Set();

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Microsoft');
companies.add('Netflix');

console.log(companies);


// 👉 Size property of set
console.log(companies.size);


// 👉 Delete element from a set

// We can delete an element from a set using a delete method.

companies.delete('Google');
console.log(companies);


// 👉 Has method in set

// The has method can help to know if a certain element exists in a set.

// console.log(companies.has('Apple')) // false
// console.log(companies.has('Facebook')) // true


// 👉 Clear set

// It removes all the elements from a set.

// companies.clear()
// console.log(companies)










// 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 Map 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// 👉 Different between maps and objects

// objects can only have string or symbol as key
// In maps you can use anything as key like array, number, string


// 👉 Creating a map

const person = new Map();

person.set('firstName', 'mohit');
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree');
person.set({1: 'one'},'onetwothree');
console.log(person);

console.log(person.get(1));

console.log(person.keys);

for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of person){
    console.log(key, value)
}

const person1 = {
    id: 1,
    firstName: "mohit"
}

const person2 = {
    id: 2,
    firstName: "deep"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);





// 👉 OPTIONAL CHAINING

// The optional chaining operator ( ?. ) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

const user  = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);