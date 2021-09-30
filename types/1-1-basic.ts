{

  
  // old: var
  var age = 5;
  age = 1;
  // shit don't use
  
  // let
  let name = 'hello';
  name = 'hi';

  // const
  // const age = 5;
  // age = 5;


}


{
 // JavaScript
 // Primitive: number, string, boolean, bigInt, symbol, null, undefined
 // Object: function, array....

 //typeScript
 // 한번 정의한 타입에는 다른 타입 정의 불가능
 const num:number = 1;

 // string
 const str:string = 'hello';

 // boolean 
 const boad:boolean = true;

// undefined 값이 있는지 없는지 결정 안됨
// let name:undefined = 1; 요렇게는 안쓴데 그러면 undefined만 할당 할 수 있기 때문
let age: number | undefined = 29;
age = undefined;
// 위와같이 한다.

// null은 확실히 비었다.
// 이것도 undefiend와 마찬가지로
let person: string | null;
// 이런 식으로 한다.

function find(): number | undefined {
  return;
}


// unknown 어떤 타입이라도 할당할 수 있어 안쓰는게 좋지만
// 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 떄문이다.
let notSure: unknown = 0;
notSure = 'he';
notSure = true;

// any 얘도 가능하면 쓰지 않는게 좋다!
let anything: any = 0;
anything = 'hellow';

// void 아래 함수와 같이 함수내에서 return 하는 것이 없을 때 void이다. void의 경우네는 생략 할 수 있다.
function print(): void {
  console.log('hello');
  return;
}

// void는 변수의 경우에는 undefined밖에 할 수 없어 사용하지 않는다.
let unusable: void = undefined;

// never 아래 함수처럼 return되는 경우가 없는 case에만 쓴다. error를 서버에 던지거나 while문을 계속 true로 돌릴 때
function throwError(message: string):never {
 // message -> server (log)
  throw new Error(message);
  // while(true){

  // }

}

// objet 원시 타입을 제외한 모든 object 타입을 전달 할 수 있다.
// 그래서 이것 또한 웬만하면 쓰지 않는것이 좋다.
let obj: object;
function acceptSomeObject(obj: object){

}
acceptSomeObject({name: 'minwoo'});
acceptSomeObject({animal: 'dog'});
acceptSomeObject(['minwoo']);

}