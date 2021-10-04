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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup):CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;

  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans:number,
      public serialNumber: string, 
      private milkFother: MilkFrother
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

    // 싸구려 커피머신~
  class CheapMilkSteamer implements MilkFrother{
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

  class FancyMilkSteamer implements MilkFrother{
    private steamMilk():void{
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup):CoffeeCup{
      this.steamMilk();
      return {
        ...cup,
        hasMilk:true,
      };
    }
}
class ColdMilkSteamer implements MilkFrother{
  private steamMilk():void{
    console.log("Cold Steaming some milk...");
  }
  makeMilk(cup: CoffeeCup):CoffeeCup{
    this.steamMilk();
    return {
      ...cup,
      hasMilk:true,
    };
  }
}

    // 설탕 제조기쓰
  class CandySugarMixer implements SugarProvider {
      private getSugar(){
        console.log('Getting some sugar from..');
        return true;
      }
  
      addSugar(cup: CoffeeCup): CoffeeCup{
        const sugar = this.getSugar();
        return {
          ...cup,
          hasSugar: sugar,
        } 
      }
    }

    class SugarMixer implements SugarProvider {
      private getSugar(){
        console.log('Getting some sugar from jar..');
        return true;
      }
  
      addSugar(cup: CoffeeCup): CoffeeCup{
        const sugar = this.getSugar();
        return {
          ...cup,
          hasSugar: sugar,
        } 
      }
    }



  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number,private sugar: SugarProvider){
      super(beans);
    }

    makeCoffee(shots:number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
    private beans: number, 
    private milk: MilkFrother, 
    private sugar: SugarProvider
    ){
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);  
      return this.milk.makeMilk(sugarAdded);

    }
  }
  
  // 우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  // 설탕
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  // 커피들
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const latteMachine = new CaffeLatteMachine(12, 'SS', cheapMilkMaker);
  const coldMachine = new CaffeLatteMachine(12, 'SS', coldMilkMaker);
  const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);
  
  
}