{

  // 상속의 문제점
  // 상속이 깊어지면서 코드가 꼬일 수 있다.
  // 예를 들어 coffeeMachine을 상속한  CaffeLatteMachine,SweetCoffeeMaker 클래스의 기능을 동시에 쓰고 싶다면
  // 두개 다 상속하면 되는 것 아니냐라고 할 수 있는데 그렇게 못한다.
  // 그래서 composition이라는 것을 쓴다.

  let shots:number;
  type CoffeeCup = {
    shots: number,
    hasMilk?: boolean,
    hasSugar?: boolean,
  };

  interface CoffeeMaker {
    makeCoffee(shots:number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarPrivider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CandySugarMixer implements SugarProvider{

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

  //  // 설탕 제조기쓰
  //  class CandySugarMixer {
  //   private getSugar(){
  //     console.log('Getting some sugar from jar..');
  //     return true;
  //   }

  //   addSugar(cup: CoffeeCup): CoffeeCup{
  //     const sugar = this.getSugar();
  //     return {
  //       ...cup,
  //       hasSugar: sugar,
  //     } 
  //   }
  // }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans:number,
      public serialNumber: string, 
      private milkFother: CheapMilkSteamer
      ){
      super(beans);
    }
    
    private steamMilk():void{
      console.log("steaming some milk...");
    }
    
    makeCoffee(shots:number):CoffeeCup{
      const coffee = super.makeCoffee(shots);
      // super로 부모의 함수를 쓴다!
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number,private sugar: CandySugarMixer){
      super(beans);
    }

    makeCoffee(shots:number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  // 싸구려 커피머신~
  class CheapMilkSteamer {
    private steamMilk():void{
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup):CoffeeCup{
      this.steamMilk();
      return {
        ...cup,
        hasMilk:true,
      };
    }
  }
 

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
    private beans: number, 
    private milk: CheapMilkSteamer, 
    private sugar: CandySugarMixer
    ){
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);  
      return this.milk.makeMilk(sugarAdded);

    }
  }
  
  const cheapMilkMaker = new CheapMilkSteamer();
  const candySugar = new CandySugarMixer();
  const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  const latteMachine = new CaffeLatteMachine(12, 'ss', cheapMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);

  // 위처럼하면 재사용성이 떨어진다구...?
}