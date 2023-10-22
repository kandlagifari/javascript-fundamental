// // Sample 1: Assignment Operator //
// let x = 10;
// let y = 5

// x += y;

// console.log(x);

// /* output
// 15
// */



// // Sample 2: Comparison Operator //
// let a = 10;
// let b = 12;

// console.log(a < b);
// console.log(a > b);

// /* output
// true
// false
// */


// // Perbedaan antara “Sama” (==) dan “Identik” (===)
// const aString = '10';
// const aNumber = 10

// console.log(aString == aNumber) // true, karena nilainya sama-sama 10
// console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// /* output
// true
// false
// */



// Sample 3: Logical Operator //
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/