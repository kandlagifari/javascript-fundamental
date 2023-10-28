// //  Apabila fungsi hanya memiliki satu parameter
// const sayName = name => {
//     console.log(`Nama saya ${name}`)
// }

// sayName("Leia");

// /* output
// Nama saya Leia
// */



// //  Apabila fungsi sama sekali tidak membutuhkan parameter
// const sayHello = () => {
//     console.log("Selamat pagi semuanya!")
// };

// sayHello();

// /* output
// Selamat pagi semuanya!
// */



// // Ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal
// const sayName = name => console.log(`Nama saya ${name}`);
// sayName("Leia");

// const sayHello = () => console.log("Selamat pagi semuanya!");
// sayHello();

// /* output
// Nama saya Leia
// Selamat pagi semuanya!
// */



// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
*/