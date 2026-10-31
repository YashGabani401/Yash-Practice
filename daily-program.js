// ===== daily program =====
// 1. odd or even number
const oddEven = 1;

if (typeof oddEven === 'number') {
    if (oddEven % 2 === 0) {
        console.log('1. ' + oddEven + ' is a even number');
    } else {
        console.log('1. ' + oddEven + ' is a odd number')
    }
} else {
    console.log('1. enter a valid number');
}

// 1. multi-tier grading system
const studentScore = 1;

if (typeof studentScore === 'number') {
    if (studentScore >= 90) {
        console.log('2. Grade: A');
    } else if (studentScore >= 80 && studentScore < 90) {
        console.log('2. Grade: B');
    } else if (studentScore >= 70 && studentScore <= 79) {
        console.log('2. Grade: C');
    } else if (studentScore >= 60 && studentScore <= 69) {
        console.log('2. Grade: D');
    } else if (studentScore < 60) {
        console.log('2. Grade: F (Fail)');
    } 
} else {
    console.log('2. enter a valid number');
}

// 3. login authentication
const storedUsername = 'admin123';
const storedPassword = 'secretPassword';

let inputUsername = null;
let inputPassword = null;

if (inputUsername === storedUsername && inputPassword === storedPassword) {
    console.log('3. Access Granted');
} else {
    console.log('3. Access Denied');
}

// 4. age group classifier
let age = 21;

if (typeof age === 'number') {
    if (age > 0 && age <= 12) {
        console.log('4. Child');
    } else if (age >= 13 && age <= 19) {
        console.log('4. Teenager');
    } else if (age >= 20 && age <= 64) {
        console.log('4. Adult');
    } else if (age >= 65) {
        console.log('4. Senior Citizen');
    } else {
        console.log('4. Invalid Age');
    }
} else {
    console.log('4. enter a valid number');
}

// 5. basic operation switchboard
const num1 = 1;
const num2 = 2;

let operation = '+';

if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch(operation) {
        case '+':
            console.log('5. ' + (num1 + num2));
            break;
        case '-':
            console.log('5. ' + (num1 - num2));
            break;
        case '*':
            console.log('5. ' + (num1 * num2));
            break;
        case '/':
            console.log('5. ' + (num1 / num2));
            break;
        default:
            console.log('5. enter a valid operator from (+, -, *, /)');
    }
} else {
    console.log('5. enter a valid number');
}