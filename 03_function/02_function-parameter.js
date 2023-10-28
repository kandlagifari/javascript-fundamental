// // Sample 1 //
// const user = {
//     id: 24,
//     displayName: 'kren',
//     fullName: 'Kylo Ren',
// };

// function introduce({displayName, fullName}) {
//     console.log(`${displayName} is ${fullName}`);
// }

// introduce(user);

// /* output
// kren is Kylo Ren
// */



// // Sample 2: Default Parameters //
// function exponentsFormula(baseNumber, exponent) {
//     const result = baseNumber ** exponent;
//     console.log(`${baseNumber}^${exponent} = ${result}`);
// }

// exponentsFormula(2);

// /* output
// 2^undefined = NaN
// */



// // Sample 3: Default Parameters 2 //
// function exponentsFormula(baseNumber, exponent = 2) {
//     const result = baseNumber ** exponent;
//     console.log(`${baseNumber}^${exponent} = ${result}`);
// }

// exponentsFormula(3);

// /* output
// 3^2 = 9
// */



// Sample 4: Rest Parameter //
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/