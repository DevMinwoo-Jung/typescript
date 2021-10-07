{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterace {
    x: number;
    y: number;
  }

  // 둘다 가능한것 = object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterace = {
    x: 1,
    y: 1,
  };
  // class도 마찬가지로 둘 다 구현 가능
    class Pos1 implements PositionType {
      x: number;
      y: number;
    };
  
    class Pos2 implements PositionInterace {
      x: number;
      y: number;
    };
    
    // Extends도 가능
    interface ZPositionInterace extends PositionInterace {
      z: number;
    }

    type ZPositionType =PositionType & { z: number};

    // only interface can be merged.
    // interface PositionInterace {
    //   z: number;
    // } 
    // 타입은 안됨!

    // Type aliases can use computed properties

    type Person = {
      name: string,
      age: number
    }

    type Name = Person['name']; // string
    type NumberType = number;
    type Direction = 'left' | 'right'

    // interface는 위의 것들을 할 수 없다!
    

    // 근데 타입스크립트는 업데이트가 빈번한 언어고 이들은 처음에는
    // 구현할 수 있는 것들이 많이 달랐지만 점점 비슷해지고 있는 추세
  }


