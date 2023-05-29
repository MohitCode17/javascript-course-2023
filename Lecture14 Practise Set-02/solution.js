// Sol-1

const statement = 'He earns 600000 rupee from salary per year, 10000 rupee annual bonus, 150000 rupee from stock market per year.';

const numbers = statement.match(/\d+/g).map(Number);
const totalAnnualIncome = numbers.reduce((acc, currVal) => acc + currVal, 0);
// console.log(`Total Annual Income is ${totalAnnualIncome}.`);


// Sol-2

// let sideA = +prompt('Enter side A of triangle');
// let sideB = +prompt('Enter side B of triangle');
// let sideC = +prompt('Enter side C of triangle');

function perimeterOfTriangle(a, b, c) {
    return a + b + c;
}
// console.log(perimeterOfTriangle(sideA, sideB, sideC));


// Sol-3

function checkPassword(pass) {
    if(pass.length > 6 && pass.includes("@")) {
        console.log('Password is Secured');
    }else{
        console.log('Password is not secured!!');
    }
}

// const password = prompt('Enter any password');
// checkPassword(password);


// Sol-4

function dateFormat() {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const currDate = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${month}-${currDate} ${hour}:${minute}`
}
// console.log(dateFormat());


// Sol-5

const str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(str.split(','));


// Sol-6

// for(let i=1; i<=10; i++) {
//     console.log(`${i} x ${i} = ${i*i}`);
// }


// Sol-7

function calculateSums(n) {
    let sumEven = 0, sumOdd = 0;
    for(let i=0; i<=n; i++){
        if(i % 2 === 0) {
            sumEven += i;
        }else {
            sumOdd += i;
        }
    }
    const sumArray = [sumEven, sumOdd];
    return sumArray;
}
// console.log(calculateSums(100));


// Sol-8

function generatePassword() {
    const chars = "34789AFGHIJRZabcdefnopxyz@#$%&*!";
    let randomPassword = "";
    for(let i=0; i<chars.length; i++) {
        let random = Math.floor(Math.random() * chars.length)
        randomPassword += chars[random];
    }
    console.log(randomPassword);
}
// generatePassword();


// Sol-9

function rgbColorGenerator() {
    // calculate at only 255
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    console.log(`rgb(${red}, ${green}, ${blue})`);
}

// rgbColorGenerator();


// Sol-10

function checkEvenOrOdd(num) {
    if(num % 2 === 0) {
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
// checkEvenOrOdd(10);
// checkEvenOrOdd(13);


// Sol-10

let students = [
    { name: "Mohit", rollNumber: 21, marks: 87},
    { name: "Rohan", rollNumber: 14, marks: 92},
    { name: "Vikrant", rollNumber: 7, marks: 60},
    { name: "Dillo Bajwa", rollNumber: 28, marks: 57},
    { name: "Deeptika", rollNumber: 58, marks: 27},
];

const nameOfStudents = students.map(student => student.name.toUpperCase());
const scoredMoreThan60 = students.filter(student => student.marks > 60);
const filterStudent = students.filter((student) => {
    return student.marks > 60 && student.rollNumber > 15;
});

const sumMarks = students.map((student) => {
    return student.marks;
}).reduce((acc, currVal) => {
    return acc + currVal
},0)

const studentName = students.filter((student) => {
    return student.marks > 60;
}).map((name) => {
    return name.name;
})

const totalMarks = students.filter((student) => {
    return student.marks < 60;
}).map((marks) => {
    return marks.marks + 20;
}).reduce((acc, currVal) => {
    return acc + currVal;
}, 0);
console.log(totalMarks);


/*
Q.10 
1. Return array containing only name of students in capital letter:-
2. Return only details of those who scored more than 60
3. More than 60 marks and rollnumber greater than 15
4. Sum of marks of all students
5. Return only name of students who scored more than 60
6. Return total marks of students with marks less than 60, after 20 marks have been addded to those who scored less than 60.

*/