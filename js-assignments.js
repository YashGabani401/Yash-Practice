                                                //   ===== JavaScript Assignments =====
console.log('\n1. js-introduction');
// 1
// alert('1. Welcome to JavaScript Class')

// 2
let name = 'yash';
let age = 21;
let city = 'surat';

console.log('2. ' + name);
console.log('2. ' + age);
console.log('2. ' + city);


console.log('\n2. variables-datatype')
// 1, 2, 3
let name1 = 'yash';
let age1 = 21;
let isStudent = true;
let marks = 72;
let city1 = 'surat';

marks = 50; 

console.log('1,2,3. ' + name);
console.log('1,2,3. ' + age);
console.log('1,2,3. ' + isStudent);
console.log('1,2,3. ' + marks);
console.log('1,2,3. ' + city);

// 4
const name2 = 'yash';
let age2 = 21;
var marks1 = 99;

{
    const name1 = 'someone';
    let age1 = 15;
    var marks1 = 14;
}

console.log('4. ' + name1);
console.log('4. ' + age1);
console.log('4. ' + marks1);

// 5
let student = {
    name: 'yash',
    age: 21,
    city: 'surat'
}

console.log('5. ' + student);


console.log('\n3. loops');
// 1. print numbers from 1 to 10 using all three loops
console.log('1. for loop');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('\n2. while loop');
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// console.log('\n3. do... while loop');
// let i2 = 1;

// do {
//     console.log(i);
//     i++;
// } while (i2 !== 10);