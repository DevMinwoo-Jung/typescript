{
  /**
   *  Type Aliases
   *  새로운 타입을 개발자가 정의할 수 있다.
   */
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string,
    age: number;
  };
  const student: Student = {
    // animal: '오류',
    name: 'minwoo',
    age: 29,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

}