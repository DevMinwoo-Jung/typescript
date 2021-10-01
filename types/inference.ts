{

  /**
   * Type Inference
   */

  // 처음 변수를 할당할 때 type을 명시하지 않고 할당값을 string으로 쓰면 string이 되고 number를 쓰면 number가 된다
  let text = 'hello';
  // text = 1; 에러

  let number = 1;
  //  number = '바보'; 에러

  function print(message){
    console.log(message);
  }
  // 함수의 경우에는 any가 type으로 돼서
  print('hi');
  print(1); 
  // 도 가능하다
  // function print(message:string = 'hello'){
  //   console.log(message);
  // } 이렇게하면 print는 에러가 남

  function add(x: number, y: number){
    return x + y;
  }
  // 위의 경우에는 number와 number를 더하기 때문에 inference가 number로 된다
  // 그래서 아래의 경우에도 result는 number로 inference한다

  const result = add(1,2);

  // 그럼 이렇게 inference를 써도 될까?? 웬만하면 명시를 하는 것이 좋다!
}