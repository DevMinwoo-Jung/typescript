{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk?: boolean,
    hasSugar?: boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }


  abstract class CoffeeMachine implements CoffeeMaker{    
    
    private coffeeBeans:number; 
    private static BEANS_GRAM_PER_SHOT:number;


    public constructor(coffeeBeans:number){
      this.coffeeBeans = coffeeBeans;
    }

    get getCoffeeBeans() {
      return this.coffeeBeans;
    }

    set setCoffeeBeans(value:number){
      this.coffeeBeans = value;
    }

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

    protected abstract extract(shots: number): CoffeeCup;
    
    clean () {
      console.log('cleaning machine..');
    }

    fillCoffeeBeans(coffeeBeans: number){
      if(coffeeBeans < 0){
        throw new Error(`value for beans should be greater than 0`);
      }
      this.coffeeBeans += coffeeBeans;
    }

    // static newCoffeeMachine(coffeeBeans:number):CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    public runMachine():void{
      console.log("커피 머신 작동시작....");
      this.makeCoffee(shots);
      this.clean();
    }

  }

  class VariateyMachine extends CoffeeMachine {
    constructor(beans:number, public serialNumber: string){
      super(beans);
    }
    
    private steamMilk():void{
      console.log("steaming some milk...");
    }
    
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: false,
      }
    }
  }


  const machines: CoffeeMaker[] = [
    new VariateyMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach(machine => {
    console.log('------------------');
    machine.makeCoffee(1);
  });
}

// abstract클래스는 object를 생성할 수 없다.
// 각 클래스마다 조금씩 달라져야 하는 함수가 있다면 abstract method로 쓰면 된다.