// // Sample 1 //
// const numberSet = new Set([1, 4, 6, 4, 1]);

// console.log(numberSet);

// /* output
// Set(3) { 1, 4, 6 }
// */



// // Sample 2 //
// const numberSet = new Set([1, 4, 6, 4, 1]);
// numberSet.add(5);
// numberSet.add(10);
// numberSet.add(6);

// console.log(numberSet);

// /* output
// Set(5) { 1, 4, 6, 5, 10 }
// */



// Sample 3 //
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

/* output
Set(4) { 1, 6, 5, 10 }
*/