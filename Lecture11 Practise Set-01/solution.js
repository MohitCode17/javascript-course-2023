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
const a = '10';
const b = 10;

const result = a === parseInt(b) ? true : false;
console.log(result);

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