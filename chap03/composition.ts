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
    makeMilk(cup: CoffeeCup):CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;

  }

  class CoffeeMachine implements CoffeeMaker{    
    
    private coffeeBeans:number; 
    private static BEANS_GRAM_PER_SHOT:number;


    public constructor(
      coffeeBeans:number, 
      private milk: MilkFrother,
      private sugar: SugarProvider){
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots:number):CoffeeCup{
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
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


    public runMachine():void{
      console.log("커피 머신 작동시작....");
      this.makeCoffee(shots);
      this.clean();
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

class NoMilk implements MilkFrother {
  makeMilk(cup: CoffeeCup): CoffeeCup {
    return cup;
  }
}

class NoSugar implements SugarProvider {
  addSugar(cup: CoffeeCup): CoffeeCup{
    return cup;
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




  
  // 우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  // 설탕
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 커피들
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, noSugar);
  const sweetMachine = new CoffeeMachine(12, noMilk,sugar);
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldMachine = new CoffeeMachine(12, coldMilkMaker, sugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
  
  
}