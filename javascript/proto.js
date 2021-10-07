const x= {};
const y = {};
// console.log(x);
// console.log(y);

// console.log(x.__proto__ === y.__proto__);

// const array = [];
// console.log(array);

function CoffeeMachine(beans){
  this.beans = beans;
  // Instance member level 
  // this.makeCoffee = shots => {
  //   console.log('making...');
  // }
}

function LatteMachine(milk){
  this.milk = milk;
}

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making from proto");
}

console.log(machine1);
console.log(machine2);
