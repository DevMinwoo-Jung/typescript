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
    
    private coffeeBeans:number; 
    private static BEANS_GRAM_PER_SHOT:number;

    constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    get getCoffeeBeans() {
      return this.coffeeBeans;
    }

    set setCoffeeBeans(value:number){
      this.coffeeBeans = value;
    }


    // 인터페이스를 쓸거면 인터페이스에 있는 함수를 반드시 써야한다 그렇지 않다면 에러가 발생!
    makeCoffee(shots:number):CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    private grindBeans(shots: number){
      console.log(`grinding nbeans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
        throw new Error ('Not Enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      console.log("커피 콩 가는중...!");
    }

    private preheat():void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }
    
    clean () {
      console.log('cleaning machine..');
    }

    fillCoffeeBeans(coffeeBeans: number){
      if(coffeeBeans < 0){
        throw new Error(`value for beans should be greater than 0`);
      }
      this.coffeeBeans += coffeeBeans;
    }

    static newCoffeeMachine(coffeeBeans:number):CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    public runMachine():void{
      console.log("커피 머신 작동시작....");
      this.makeCoffee(shots);
      this.clean();
    }

  }

  class VariateyMachine extends CoffeeMachine {
    private coffeeCup:CoffeeCup;
    private coffeeName:string;

    constructor(coffeeBeans:number, coffeeName:string, hasMilk:boolean){
      super(coffeeBeans);
      this.coffeeName = coffeeName;
      this.coffeeCup = {
        shots: coffeeBeans,
        hasMilk: hasMilk,
      }
    }

    runMachine():void{
      console.log(`${this.coffeeName} 머신 작동중!...`);
      if(this.coffeeCup.hasMilk === false){
        console.log("우유가 들어가지 않은 커피입니다..!")
      } else {
        console.log("우유가 들어간 커피입니다..!")
      }
      this.makeCoffee(shots);
      this.clean();
    }
  }

  let americano = new VariateyMachine(100, '아메리카노', false);
  americano.fillCoffeeBeans(100);
  americano.runMachine();
  
  let latte = new VariateyMachine(100, '라떼', true);
  latte.fillCoffeeBeans(100);
  latte.runMachine();  

}