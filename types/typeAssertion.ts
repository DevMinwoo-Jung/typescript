{

  /**
   * Type Assertions => shit
   */

  function jsStrFunc(): any {
    return 'someString';
  }

  const result = jsStrFunc();
  // 이거 같은 경우에는 result는 any인데 jsStrFunc는 반드시 string을 return 한다는 것을 안다.
  // 그렇지만 result가 any이기 때문에 string에 관한 api를 사용할 수 없다.
  // 이럴 떄는 asseertion을 사용한다.
  console.log((result as string).length);
  console.log((<string>result).length);
  // 둘다 같다

  // 그런데 만약 return에 string이 아닌 number를 쓰면 compiler는 error를 뱉지는 않지만
  // 프로그램이 동작하면 undefined를 return한다.
  
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 이건 에러가 난다
  

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2);
  // !를 붙이면 값을 장답할 때만 써라.
  const numbers2 = findNumbers()!;
  numbers2.push(2);
}