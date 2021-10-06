{
  interface BadEither {
    left: () => number;
    right: () => number;
  }



  class SimpleEither implements BadEither {
    constructor(private leftValue: number, private rightValue: number){
    }
    
    left(): number {
      return this.leftValue;
    }

    right(): number {
      return this.rightValue;
    }
  }

  const example: BadEither = new SimpleEither(9, 3);
  example.left(); //9
  example.right(); //3

  //파라미터 2개를 받을 수 있는 클래스가 있는데
  //동일한 타입뿐만 아니라 각기 다른 타입을 받으려면
  //Generic을 써야한다.

  interface GenericEither<L,R> {
    left: () => L;
    right: () => R;
  }

  class GenericEitherClass<L,R> implements GenericEither<L,R> {
    constructor(private leftValue: L, private rightValue: R){
    }
    
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either: GenericEither<number, number> = new GenericEitherClass(4, 5);
  console.log(either);

  const either2 = new GenericEitherClass('goood', true);
  console.log(either2);

  const either3 = new GenericEitherClass({name:'minwoo'}, true);
  console.log(either3);
  // 숫자 뿐만 아니라 문자, boolean으로도 클래스를 생성할 수 있다.
  
}


