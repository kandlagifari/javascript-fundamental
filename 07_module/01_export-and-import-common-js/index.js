const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

console.log(coffeeStock);
console.log(isCoffeeMachineReady);

makeCoffee("robusta", 80);
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
Kopi berhasil dibuat!
*/