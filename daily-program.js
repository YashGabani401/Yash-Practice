                                        // ===== daily program =====
console.log('day 1: 31/10/26');
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

console.log('\nday 2: 01/11/26');
// 1. positive, negative or zero checker
const num = 1;

if (typeof num === 'number') {
    if (num > 0) {
        console.log('1. ' + num + ' is a positive number');
    } else if (num < 0) {
        console.log('1. ' + num + ' is a negative number');
    } else {
        console.log('1. ' + num + ' is a zero');
    }
} else {
    console.log('1. enter a valid number');
}

// 2. voting eligibility & registration check
let votingAge = 21;
const isRegistered = true;

if (typeof votingAge === 'number') {
 if (typeof isRegistered === 'boolean') {
    if (votingAge >= 18 && isRegistered === true) {
        console.log('2. you can vote!');
    } else {
        console.log('2. you are not eligibile to vote.');
    }
 } else {
    console.log('2. enter valid value between (true/false');
 }
} else {
    console.log('2. enter a valid number');
}

// 3. day of the week selector
let dayNumber = 1;

if (typeof dayNumber === 'number') {
    switch (dayNumber) {
        case 1:
            console.log('3. sunday');
            break;
        case 2:
            console.log('3. monday');
            break;
        case 3:
            console.log('3. tuesday');
            break;
        case 4:
            console.log('3. wednesday');
            break;
        case 5:
            console.log('3. thursday');
            break;
        case 6:
            console.log('3. friday');
            break;
        case 7:
            console.log('3. saturday');
            break;
        default:
            console.log('3. enter a valid number between (1-7)');
    }
} else {
    console.log('3. enter a valid number')
}

// 4. shopping discount tier
const totalPurchase = 1000;

if (typeof totalPurchase === 'number') {
    if (totalPurchase >= 1000) {
        console.log('4. 20% discount applied');
    } else if (totalPurchase >=500 && totalPurchase <= 999) {
        console.log('4. 10% discount applied');
    } else if (totalPurchase < 500) {
        console.log('4. no discount available');
    }
} else {
    console.log('4. enter a valid number');
}

// 5. password length validator
const password = 'admin123';

if (typeof password === 'string') {
    if (password.length >= 8) {
        console.log('5. password is strong enough');
    } else {
        console.log('5. password must be at least 8 characters long');
    }
} else {
    console.log('5. enter a valid string character');
}