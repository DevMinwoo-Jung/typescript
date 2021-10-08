// this는 호출한 사람의 문맥을 나타낸당
'use strict';
console.log(this); // window

function simpleFunc(){
  console.log(this);
}

simpleFunc(); // window 왜냐면 밑과 같은 것이라
// window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // class Counter
const callerFunc = counter.increase;
callerFunc(); // undefined다 왜냐하면 let과 const로 선언한 변수는 window에 등록되지 않기 때문이다.

const callerFunc2 = counter.increase.bind(counter);
callerFunc2();
// undefined가 안되려면 bind로 할 수 있다. 아니면 그냥 class 안에서 arrow function을 쓰면 된다.
class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // bob이 호출했기 때문에 class counter가 아닌 class bob이 된당.