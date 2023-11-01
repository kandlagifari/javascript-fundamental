import {  coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}
 
displayStock(stock); // using alias `as`

console.log(stock); // using alias `as`
console.log(isCoffeeMachineReady);