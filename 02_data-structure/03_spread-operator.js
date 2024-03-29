// // Sample 1 //
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// console.log(...favorites);

// /* output
// Seafood Salad Nugget Soup
// */



// // Sample 2 //
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [favorites, others];

// console.log(allFavorites);

// /* output
// [
//   [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
//   [ 'Cake', 'Pie', 'Donut' ]
// ]
// */



// Sample 3 //
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/



// Sample 4 //
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/