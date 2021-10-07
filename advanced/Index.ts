{
  const obj = {
    name: 'ellie',
  }
  obj.name; //ellie
  obj['name']; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'] // string
  // const text: Name = 12; //error
  const textString: Name = 'minwoo';

  type Gender = Animal['gender']; // 'male' | 'femal'

  type Keys = keyof Animal; // name ~ gender가 union타입으로 된다!
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'minwoo',
    gender: 'male',
  }

}