// // Sample 1 //
// const user = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 19,
//     isJedi: true,
// };

// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
// console.log(`Umur saya ${user.age} tahun`);



// Sample 2 //
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/



// // Sample 3 //
// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
// };

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// console.log(spaceship);

// /* output
// {
//     name: 'Millenium Falcon',
//     manufacturer: 'Corellian Engineering Corporation',
//     maxSpeed: 1300,
//     color: 'Glossy red'
// }
// */



// // Sample 4 //
// const spaceship = {
//     name: "Millenium Falcon",
//     manufacturer: "Corellian Engineering Corporation",
//     maxSpeed: 1200,
//     color: "Light gray"
// };

// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// spaceship.class = "Light freighter";

// console.log(spaceship);

// /* output
// {
//     name: 'Millenium Falcon',
//     manufacturer: 'Corellian Engineering Corporation',
//     maxSpeed: 1300,
//     color: 'Glossy red',
//     class: 'Light freighter'
// }
// */



// Sample 4 //
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
*/