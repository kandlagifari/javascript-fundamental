// Sample 1: Array Map //
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */



// Sample 2.1: Array Filter //
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */



// // Sample 2.2: Array Filter //
// const students = [
//     {
//       name: 'Harry',
//       score: 60,
//     },
//     {
//       name: 'James',
//       score: 88,
//     },
//     {
//       name: 'Ron',
//       score: 90,
//     },
//     {
//       name: 'Bethy',
//       score: 75,
//     }
// ];

// const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

// console.log(eligibleForScholarshipStudents);

// /**
//  * output:
//  * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
//  * 
//  */



// // Sample 3: Array Reduce //
// const students = [
//     {
//       name: 'Harry',
//       score: 60,
//     },
//     {
//       name: 'James',
//       score: 88,
//     },
//     {
//       name: 'Ron',
//       score: 90,
//     },
//     {
//       name: 'Bethy',
//       score: 75,
//     }
// ];

// const totalScore = students.reduce((acc, student) => acc + student.score, 0);

// console.log(totalScore);

// /**
//  * output:
//  * 313
//  * 
//  */



// Sample 4: Array some //
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/



// Sample 5: Array find //
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

/**
 output
{ name: 'James', score: 88 }
**/



// // Sample 6.1: Array sort //
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // output: [ 'Dec', 'Feb', 'Jan', 'March' ]

// const array1 = [1, 30, 4, 1000, 101, 121];
// array1.sort();
// console.log(array1);
// // output: [ 1, 1000, 101, 121, 30, 4 ]



// Sample 6.2: Array sort //
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
 output
[ 1, 4, 30, 1000 ]
**/



// Sample 7: Array every //
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/



// // Sample 8.1: Array forEach Imperative//
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}!`);
// }
 
// /**
//  * output:
//  * Hello, Harry!
//  * Hello, Ron!
//  * Hello, Jeff!
//  * Hello, Thomas!
//  * 
//  */



// Sample 8.2: Array forEach Declarative//
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */



// // Sample 8.3: Array forEach //
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//   if(names[i] === 'Jeff') continue; // Bisa!
  
//   console.log(`Hello, ${names[i]}!`);
// }
 
// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });