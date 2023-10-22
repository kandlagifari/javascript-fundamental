// // Sample 1 //
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
 
// /* output:
// Seafood
// Salad
// Nugget
// Soup
// */



// // Sample 2 //
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [ , , thirdFood ] = favorites;
 
// console.log(thirdFood);
 
// /* output:
// Nugget
// */



// // Sample 3: Destructuring Assignment //
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// let myFood = "Ice Cream";
// let herFood = "Noodles";
 
// [myFood, herFood] = favorites;
 
// console.log(myFood);
// console.log(herFood);
 
// /* output:
// Seafood
// Salad
// */



// // Sample 4: Destructuring Assignment 2 //
// var a = 1;
// var b = 2;
// var temp;
 
// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
 
// temp = a;
// a = b;
// b = temp;
 
// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
 
// /* output
// Sebelum swap
// Nilai a: 1
// Nilai b: 2
// Setelah swap
// Nilai a: 2
// Nilai b: 1
// */



// Sample 5: Destructuring Assignment 3 //
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/



// Sample 6: Default Values //
const favorites = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/