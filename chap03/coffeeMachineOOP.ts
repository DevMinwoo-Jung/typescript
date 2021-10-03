{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  }

  class CoffeeMachine{        
    coffeeBeans:number; // instance(object) level
    static BEANS_GRAM_PER_SHOT:number; // class level

    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
      // this.BEANS_GRAM_PER_SHOT = BEANS_GRAM_PER_SHOT;
      // 상수면 static을 붙여서 오브젝트가 생성될 때마다 데이터를 소모하지 않게 해주자.
    }

    // constructor(coffeeBeans:number, BEANS_GRAM_PER_SHOT:number, shots:number){
    //   this.coffeeBeans = coffeeBeans;
    //   // this.BEANS_GRAM_PER_SHOT = BEANS_GRAM_PER_SHOT;
    //   // 상수면 static을 붙여서 오브젝트가 생성될 때마다 데이터를 소모하지 않게 해주자.
    //   this.shots = shots;
    // }

    static newCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    
    makeCoffee(shots:number):CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error("Not enough coffe beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots, // key 랑 value 이름이 같으면 생략 가능
        hasMilk: false,
      };
    }

  }

  let coffeeEx:CoffeeMachine = new CoffeeMachine(100);
  
  console.log(coffeeEx);
  console.log(coffeeEx.makeCoffee(5));
  console.log(CoffeeMachine.newCoffeeMachine(10));
  // class안에 static으로 함수를 만들면 새로운 인스턴스를 생성하지 않고 위처럼 함수에 접근할 수 있다.
  // 다른 예를 들자면 Math.random과 같은 것들이 있다. Math.random도 인스턴스를 생성하지 않고 하자너

}