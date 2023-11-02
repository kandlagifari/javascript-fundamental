import _ from 'lodash';

// Without Lodash //
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);
 
/* output
10
*/



// Without Lodash //
const myArray2 = [1, 2, 3, 4];
let sum2 = myArray2.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum2);
 
/* output
10
*/



// With Lodash //
 
const myArray3 = [1, 2, 3, 4];
const sum3 = _.sum(myArray3);
 
console.log(sum3);
 
/* output
10
*/