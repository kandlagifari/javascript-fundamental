// // Sample 1 //
// function greeting() {
//     console.log("Good Morning!")
// }

// greeting();

// /* output
// Good Morning!
// */



// // Sample 2 //
// function greeting(name, language) {
//     if(language === "English") {
//         console.log(`Good Morning ${name}!`);
//     } else if (language === "French") {
//         console.log(`Bonjour ${name}!`);
//     } else {
//         console.log(`Selamat Pagi ${name}!`);
//     }
// }

// greeting("Harry", "French");

// /* output
// Bonjour Harry!
// */



// // Sample 3 //
// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(10, 2)
// console.log(result)

// /* output
// 20
// */



// // Sample 4 //
// function greeting(name, language) {
//     if(language === "English") {
//         return `Good Morning ${name}!`
//     } else if (language === "French") {
//         return `Bonjour ${name}!`;
//     } else {
//         return `Selamat Pagi ${name}!`;
//     }
// }

// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);

// /* output
// Bonjour Harry!
// */



// Sample 5 //
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}
  
console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
*/