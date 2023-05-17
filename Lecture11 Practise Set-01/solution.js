// Sol-1
const challenge = "JavaScript is most popular programming language";
console.log(challenge.toUpperCase());

// Sol-2
console.log(challenge.substring(0, 10));

// Sol-3
if(challenge.includes('popular')){
    console.log(true);
}else{
    console.log(false);
}

// Sol-4
const itCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(itCompanies.split(","));

// Sol-5
if(challenge.startsWith('JavaScript')){
    console.log(true);
}else{
    console.log(false);
}

// Sol-6
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3);  // false

// Explanation: You can’t be sure. it might print out 0.3 and true, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.


// Sol-7
function randomString(){
    const character = "JavaScript";
    let randomStr = "";

    for(let i=0; i<character.length; i++){
        const random = Math.floor(Math.random() * character.length);
        randomStr += character[random];
    }
    return randomStr;
}
console.log(randomString());

// Sol-8
// const age = prompt('Enter your age:');

// if(age >= 18){
//     console.log('You are old enough to drive')
// }else{
//     let yearLeft = 18 - age;
//     console.log(`You are left with ${yearLeft} years to drive.`);
// }


// Sol-9
function checkEvenNumber(n){
    if(n % 2 === 0){
        return `${n} is even number`;
    }else{
        return `${n} is not a even number`;
    }
}

console.log(checkEvenNumber(7));

// Sol-10
function assignGrade(score){
    let grade;

    switch(true){
        case score >= 90 && score <= 100:
        grade = "A"
        break;

        case score >= 70 && score <= 89:
        grade = "B"
        break;

        case score >= 60 && score <= 69:
        grade = "C"
        break;

        case score >= 50 && score <= 59:
        grade = "D"
        break;

        case score >= 0 && score <= 49:
        grade = "E"
        break;

        default:
        grade = "Invalid Score"
        break;
    }

    return grade;
}
console.log(assignGrade(99));

// Sol-11

console.log( 10 < 20 < 30 );    // (10 < 20) --> true (1) --> (1 < 30) => Output true
console.log( 30 > 20 > 10 );    // (30 > 20) --> true (1) --> (1 > 10) => Output false

// Sol-12

const itCompaniesArray = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

console.log(itCompaniesArray[0]);    // first company
console.log(itCompaniesArray[Math.floor(itCompaniesArray.length / 2)]);    // Middle company
console.log(itCompaniesArray[itCompaniesArray.length - 1]);    // last company

// Sol-13

function moreThanZerosComapanies(arr){
    let newCompaniesArr = [];
    for(let company of itCompaniesArray){
        if(company.includes("oo")){
            newCompaniesArr.push(company);
        }
    }
    return newCompaniesArr;
}
console.log(moreThanZerosComapanies(itCompaniesArray));