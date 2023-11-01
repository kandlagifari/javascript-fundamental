// // Sample 1.1: Pure Function //
// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//   return PI * (jariJari * jariJari); 
// }

// console.log(hitungLuasLingkaran(4)); // 50.24

// PI = 5; // tidak sengaja nilai PI berubah

// console.log(hitungLuasLingkaran(4)); // 80



// Sample 1.2: Pure Function //
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96



// // Sample 1.3: Pure Function //
// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
// };

// const person = {
//     name: 'Bobo'
// };

// const newPerson = createPersonWithAge(18, person);

// console.log({
//     person,
//     newPerson
// });

// /**
//  * Output:
//  *  {
//     person: { name: 'Bobo', age: 18 },
//     newPerson: { name: 'Bobo', age: 18 }
//     }
// */



// Sample 1.4: Pure Function //
const createPersonWithAge = (age, person) => {
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
 */



// // Sample 2.1: Immutability //
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log({
//     names,
//     newNamesWithExcMark,
// });

// /**
//  * {
//      names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
//      newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
//    }
//  */



// // Sample 2.2: Immutability //
// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }

// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName;
// }

// renameLastNameUser('Potter', user);

// console.log(user);

// /**
//  * output:
//  * { firstname: 'Harry', lastName: 'Potter' }
//  * 
//  */



// Sample 2.3: Immutability //
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */



// // Sample 3.1: Rekursif //
// const countDown = start => {
//     do {
//         console.log(start);
//         start -=1;
//     }
//     while(start > 0);
// };

// countDown(10);



// Sample 3.2: Rekursif //
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};

countDown(10);



// Sample 4.1: Higher-Order Function //
const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */



// Sample 4.2: Higher-Order Function //
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */