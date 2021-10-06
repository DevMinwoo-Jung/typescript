{
  // Generic에 조건
  interface Employee {
    pay(): void;
  }


  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full Time');
    }
    workFullTime(){
      console.log("야호!");
    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part Time`);
    }

    workPartTime(){
      console.log("야호");
    }
  }

  // 세부적인 타입을 인자로 받아서 광범위하게 리턴하는건 구리다.
  function payBad(employee: Employee){
    employee.pay();
    return employee;
  }

  // function payGood<T>(employee: T):T{
  //   // 이렇게만 하면 pay함수를 쓸수 없다
  //   // 이 이점에서는 employee가 뭔지 모르기 때문에
  //   // 그러나 아래처럼 extends를 쓰면 가능하다!
  //   console.log(`pay good function!`);
  //   return employee;
  // }

  function payGood<T extends Employee>(employee: T):T{
    employee.pay(); //
    console.log(`pay good function!`);
    return employee;
  }

  const minwoo = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  minwoo.workFullTime();
  bob.workPartTime();

  const minwooAfterPay = payBad(minwoo);
  const bobAfterPay = payBad(bob);
  /**  위처럼 코드를 짜면 pay함수를
   *  사용했을 경우 type이 interface Employee가 되기 때문에
   * 각 클래스에 있던 workPartTime, workfullTime을 호출 할 수 없게 된다
  */
  minwooAfterPay.pay();

  // const minwoo2 = new FullTimeEmployee();
  // const bob2 = new PartTimeEmployee();
  // minwoo2.workFullTime();
  // bob2.workPartTime();
  // const minwooAfterPay2 = payGood(minwoo);
  // const bobAfterPay2 = payGood(bob);
  // minwooAfterPay2.workFullTime();
  // bobAfterPay2.workPartTime();
  
  const obj = {
    name: 'minwoo',
    age: 20,
  };



  function badGetValue<T>(value: any, key: any){
    
    const result = value[key];
    return result;
  }

  console.log(badGetValue(obj,"age"));

  function getValue<T, K extends keyof T>(obj: T, key: K):T[K]{
    return obj[key];
  }

  console.log(getValue(obj,"age"));

}