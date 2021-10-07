{
  // 기존에 있는걸 이용하면서 다른걸로 변환!
  [1, 2].map(item => item * item); // [1, 4]... 
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    // []  for...in과 동일
    [P in keyof T]?: T[P]
  };

  type VideoOptionalMap = Optional<Video>;
  // 위는 아래 VideoOptional과 같다!

  type VideoOptional = {
    title?: string;
    author?: string;
    description?: string;
  };

  const videoOp: VideoOptionalMap = {
    // animal: 없는걸 사용하는건 에러
  };
  
  type VideoReadOnly = {
    readonly title?: string;
    readonly author?: string;
    readonly description?: string;
  };

  type Animal = {
    name: string;
    age: number;
  }

  const nimal: Optional<Animal> = {
    name: 'dog',
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  // 이 타입을 쓰는 오브젝트는 readonly만 되겄지 ㅎㅎ

  const videos: ReadOnly<Video> = {
    title: 'hi',
    author: 'minwoo',
    description: 'awsome',
  };

  //error -> videos.author = 'asda';

  type Nullable<T> = { [P in keyof T]: T[P] | null};
  const obj2: Nullable<Video> ={
    title: null,
    author: null,
    description: 'asd'
  }
  // 이러면 Video타입을 이용하고 null도 가능한 타입이 되는것!
}