
{

type CoffeeCup = {
  shots: number,
  hasMilk: boolean,
}

const BEANS_GRAM_PER_SHOT:number = 7;
let coffeeBeans: number = 0;

let shots:number = 0;
function makeCoffee(shots:number):CoffeeCup{
  if(coffeeBeans < shots * BEANS_GRAM_PER_SHOT){
    throw new Error("Not enough coffe beans!");
  }

  coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

  return {
    shots, // key 랑 value 이름이 같으면 생략 가능
    hasMilk: false,
  };

}
coffeeBeans = 30;
const coffee = makeCoffee(2);
console.log(coffee);

}