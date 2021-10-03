{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  }

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{    
    
    // 인터페이스를 쓸거면 인터페이스에 있는 함수를 반드시 써야한다 그렇지 않다면 에러가 발생!
    public makeCoffee(shots:number):CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean () {
      console.log('cleaning machine..');
    }

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

    grindBeans(shots: number){
      console.log(`grinding nbeans for ${shots}`);
      if(this._coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error ('Not Enough coffee beans!');
      }
      this._coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    preheat():void {
      console.log('heating up...');
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }
 

  }

  let coffeeEx:CoffeeMachine = new CoffeeMachine(100);
  coffeeEx.fillCoffeeBeans(32);
  coffeeEx.makeCoffee(2);

  
  let coffeeEx2:CoffeeMaker = new CoffeeMachine(100);
  // coffeeEx2.fillCoffeeBeans(32);
  // interface CoffeeMaker를 사용하면 그 인터페이스 있는 것만 사용할 수 있기 때문에
  // fillCoffeeBeans를 사용할 수 없다!
  // 즉 개발자가 사용할 수 있는 범위를 한정지을 수 있다.
  coffeeEx2.makeCoffee(2);
  
  // 지금까지 위처럼 code를 짜면 개발자가 어떤걸 어떻게 써야할지 감이 안잡힌다...!!
  // 이럴 때 abstraction이 빛을 발휘한다. 
  // abstraction은 simple하게 사용할수 있게 도와준다!!
  // encapsulation, interface등으로 추상화를 한다.
  // encapsulation은 함수를 private을 쓰면 된다.

    // interface CoffeeMaker를 사용하면 그 인터페이스 있는 것만 사용할 수 있기 때문에
  // fillCoffeeBeans를 사용할 수 없다!
  // 즉 개발자가 사용할 수 있는 범위를 한정지을 수 있다.

  let coffeeEx3:CommercialCoffeeMaker = new CoffeeMachine(100);
  coffeeEx3.fillCoffeeBeans(32);
  coffeeEx3.clean();
  coffeeEx2.makeCoffee(2);

  class AmatuerUser {
    constructor(private machine: CoffeeMaker){}
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  
  let maker:CoffeeMachine = new CoffeeMachine(100);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const amature = new AmatuerUser(maker);
  const pro = new ProBarista(maker);
  amature.makeCoffee();
}