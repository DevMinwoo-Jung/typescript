{
  function checkNotNullBad(arg: number | null): number {
    if(arg == null){
      throw new Error('Not Valid Number');
    }

    return arg;
  }

  // 지금 이 함수는 인수가 number인지 null 인지만 체크 가능하다
  // 그래서 string인지 확인하고 싶다면 또 함수를 만들어야 한다
  // 이러면 코드가 늘어나니 구리지

  const result = checkNotNullBad(123);
  console.log(result);
  
  const result2 = checkNotNullBad(null);
  console.log(result2);

  // 그러면 any로 하면 괜찮을까??
  function checkNotNullAnyBad(arg: any | null): any {
    if(arg == null){
      throw new Error('Not Valid Number');
    }

    return arg;
  }

  const result3 = checkNotNullAnyBad(123);
  console.log(result3);
  // 아니다. 이렇게하면 any가 return되기 때문에 type에 대한 정보를 알 수 없다.
  // 그러면 무엇이 좋냐?? Generic이 좋다!
  // 장점 1) 어떤 타입도 받을 수 있고 2) 쓸 떄 타입이 결정되어 타입이 보장된다.

  function checkNotNull<T>(arg: T | null): T {
    if(arg == null){
      throw new Error('Not Valid Number');
    }

    return arg;
  }

  const result4 = checkNotNull(123);
  console.log(result4);

  const result5: boolean = checkNotNull(true);
  console.log(result5);
}