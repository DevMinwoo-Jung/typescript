{

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
  }

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }


  class CoffeeMachine implements CoffeeMaker{    
    
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
    constructor(beans:number, public serialNumber: string){
      super(beans);
    }
    
    private steamMilk():void{
      console.log("steaming some milk...");
    }
    
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      // super로 부모의 함수를 쓴다!
      this.steamMilk();
      return {
        ...coffee,
        hasMilk:true,
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const newMachine = new VariateyMachine(23, 'asdasd');
  const coffee = newMachine.makeCoffee(1);
  console.log(coffee);
  console.log(newMachine.serialNumber);
}