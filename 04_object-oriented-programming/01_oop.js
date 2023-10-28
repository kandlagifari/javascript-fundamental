// // Sample 1 //
// const car = {
//     // properties
//     brand: 'Ford',
//     color: 'red',
//     maxSpeed: 200,
//     chassisNumber: 'f-1',
//     // methods
//     drive: () => {
//         console.log('driving');
//     },
//     reverse: () => {
//         console.log('reversing');
//     },
//     turn: () => {
//         console.log('turning');
//     }
// }

// console.log(car.brand); // Ford
// console.log(car.color); // red
// console.log(car.maxSpeed); // 200
// console.log(car.chassisNumber); // f-1
// car.drive(); // driving
// car.reverse(); // reversing
// car.turn(); // turning



// Sample 2 //
/*
Bagaimana jika Anda ingin membuat objek dua mobil baru dengan nilai yang berbeda? 
Haruskah Anda mendefinisikan properti dan method yang sama secara berulang seperti contoh kode di bawah ini?
*/
const car = {
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

const myCar = {
    brand: 'Tesla',
    color: 'black',
    maxSpeed: 250,
    chassisNumber: 't-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

const yourCar = {
    brand: 'BMW',
    color: 'white',
    maxSpeed: 300,
    chassisNumber: 'b-1',
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}