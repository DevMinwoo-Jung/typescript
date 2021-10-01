{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  }

  class CoffeeMachine{        
    private _coffeeBeans:number; 
    static BEANS_GRAM_PER_SHOT:number;

    constructor(coffeeBeans:number){
      this._coffeeBeans = coffeeBeans;
    }

    get getCoffeeBeans() {
      return this._coffeeBeans;
    }

    set setCoffeeBeans(value:number){
      this._coffeeBeans = value;
    }

    static newCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    
    public makeCoffee(shots:number):CoffeeCup{
      if(this._coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error("Not enough coffe beans!");
      }
      this._coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots, 
        hasMilk: false,
      };
    }

  }

  let coffeeEx:CoffeeMachine = new CoffeeMachine(100);
  
  console.log(coffeeEx.makeCoffee(5));
  console.log(CoffeeMachine.newCoffeeMachine(10));
  // class안에 static으로 함수를 만들면 새로운 인스턴스를 생성하지 않고 위처럼 함수에 접근할 수 있다.
  // 다른 예를 들자면 Math.random과 같은 것들이 있다. Math.random도 인스턴스를 생성하지 않고 하자너
  console.log("  asd"+coffeeEx.getCoffeeBeans);
  coffeeEx.setCoffeeBeans = 150;
  console.log(coffeeEx.getCoffeeBeans);
}