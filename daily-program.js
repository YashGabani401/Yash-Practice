                                        // ===== daily program =====
console.log('day 1: 31/10/26');
console.log('1. odd or even number');
const oddEven = 1;

if (typeof oddEven === 'number') {
    if (oddEven % 2 === 0) {
        console.log(oddEven + ' is a even number');
    } else {
        console.log(oddEven + ' is a odd number')
    }
} else {
    console.log('enter a valid number');
}

console.log('\n2. multi-tier grading system');
const studentScore = 1;

if (typeof studentScore === 'number') {
    if (studentScore >= 90) {
        console.log('Grade: A');
    } else if (studentScore >= 80 && studentScore < 90) {
        console.log('Grade: B');
    } else if (studentScore >= 70 && studentScore <= 79) {
        console.log('Grade: C');
    } else if (studentScore >= 60 && studentScore <= 69) {
        console.log('Grade: D');
    } else if (studentScore < 60) {
        console.log('Grade: F (Fail)');
    } 
} else {
    console.log('enter a valid number');
}

console.log('\n3. login authentication');
const storedUsername = 'admin123';
const storedPassword = 'secretPassword';

let inputUsername = null;
let inputPassword = null;

if (inputUsername === storedUsername && inputPassword === storedPassword) {
    console.log('Access Granted');
} else {
    console.log('Access Denied');
}

console.log('\n4. age group classifier');
let age = 21;

if (typeof age === 'number') {
    if (age > 0 && age <= 12) {
        console.log('Child');
    } else if (age >= 13 && age <= 19) {
        console.log('Teenager');
    } else if (age >= 20 && age <= 64) {
        console.log('Adult');
    } else if (age >= 65) {
        console.log('Senior Citizen');
    } else {
        console.log('Invalid Age');
    }
} else {
    console.log('enter a valid number');
}

console.log('\n5. basic operation switchboard');
const num1 = 1;
const num2 = 2;

let operation = '+';

if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch(operation) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        default:
            console.log('enter a valid operator from (+, -, *, /)');
    }
} else {
    console.log('enter a valid number');
}


console.log('\nday 2: 01/11/26');
console.log('1. positive, negative or zero checker');
const num = 1;

if (typeof num === 'number') {
    if (num > 0) {
        console.log(num + ' is a positive number');
    } else if (num < 0) {
        console.log(num + ' is a negative number');
    } else {
        console.log(num + ' is a zero');
    }
} else {
    console.log('enter a valid number');
}

console.log('\n2. voting eligibility & registration check');
let votingAge = 21;
const isRegistered = true;

if (typeof votingAge === 'number') {
 if (typeof isRegistered === 'boolean') {
    if (votingAge >= 18 && isRegistered === true) {
        console.log('you can vote!');
    } else {
        console.log('you are not eligibile to vote.');
    }
 } else {
    console.log('enter valid value between (true/false');
 }
} else {
    console.log('enter a valid number');
}

console.log('\n3. day of the week selector');
let dayNumber = 1;

if (typeof dayNumber === 'number') {
    switch (dayNumber) {
        case 1:
            console.log('sunday');
            break;
        case 2:
            console.log('monday');
            break;
        case 3:
            console.log('tuesday');
            break;
        case 4:
            console.log('wednesday');
            break;
        case 5:
            console.log('thursday');
            break;
        case 6:
            console.log('friday');
            break;
        case 7:
            console.log('saturday');
            break;
        default:
            console.log('enter a valid number between (1-7)');
    }
} else {
    console.log('enter a valid number')
}

console.log('\n4. shopping discount tier');
const totalPurchase = 1000;

if (typeof totalPurchase === 'number') {
    if (totalPurchase >= 1000) {
        console.log('20% discount applied');
    } else if (totalPurchase >=500 && totalPurchase <= 999) {
        console.log('10% discount applied');
    } else if (totalPurchase < 500) {
        console.log('no discount available');
    }
} else {
    console.log('enter a valid number');
}

console.log('\n5. password length validator');
const password = 'admin123';

if (typeof password === 'string') {
    if (password.length >= 8) {
        console.log('password is strong enough');
    } else {
        console.log('password must be at least 8 characters long');
    }
} else {
    console.log('enter a valid string character');
}
 
console.log('\nday 3: 02/11/26');
console.log('1. number sequence & total sum');
console.log('failed to do');
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }