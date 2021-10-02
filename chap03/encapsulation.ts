{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  }

  class CoffeeMachine{        
    private _coffeeBeans:number; 
    private static BEANS_GRAM_PER_SHOT:number;

    constructor(coffeeBeans:number){
      this._coffeeBeans = coffeeBeans;
    }

    get getCoffeeBeans() {
      return this._coffeeBeans;
    }

    set setCoffeeBeans(value:number){
      this._coffeeBeans = value;
    }

    fillCoffeeBeans(coffeeBeans: number){
      if(coffeeBeans < 0){
        throw new Error(`value for beans should be greater than 0`);
      }
      this._coffeeBeans += coffeeBeans;
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
  console.log("  asd"+coffeeEx.getCoffeeBeans);
  coffeeEx.setCoffeeBeans = 150;
  console.log(coffeeEx.getCoffeeBeans);

  // encapsulations를 해야하는 이유 아래처럼 외부서 coffeeBeans에 접근 가능할 경우 잘못 된 값을 넣으면 프로그램이 중지된다
  // coffeeEx.cofeeBeans = 123;

  // class User {
  //   firstName: string;
  //   lastName: string;
  //   fullName: string;
  //   constructor(firstNmae: string, lastName: string){
  //     this.firstName = firstNmae;
  //     this.lastName = lastName;
  //     this.fullName =`${firstNmae} ${lastName}`;
  //   }
  // }

  class User {
    get fullName():string{
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(private firstName: string, private lastName: string){}

    private internalAge = 5;
    get age():number{
      return this.internalAge;
    }
    set age(age:number){
      this.internalAge = age;
    }
  }

  const user = new User('james','carrey');
  console.log(user.fullName);
  console.log(user.fullName);
  // getter를 쓰지 않으면 james carrey가 두번 나온다.
  // 이유는 fullName은 바뀐 firstName이 아니라 바뀌기 전 firstName을 가지고 있기 때문이다
  // 그렇지만 get을 쓰면 바뀐 것을 가지고 올 수 있다. 함수지만 변수처럼 접근해야한다.
  console.log(user.fullName);
}