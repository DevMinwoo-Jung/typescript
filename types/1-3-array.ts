{
  // Array
  // 배열을 정의하는 방법은 이렇게 두 가지가 있다.
  const fruits: string[] = ['가','나'];
  const scores: Array<number> = [1,3,4];
  // 이 둘의 차이점은 위는 readonly로 작성이 가능하나 아래 것은 안된다.
  function printArray(fruits: readonly string[]){
    
  }

  // Tuple = 새로 다른 타입의 배열 -> interface, type alias, class를 사용하는게 좋다.
  let students: [string, number];
  students = ['name', 123];
  students[0] // name
  students[1] // 123
  // 이거는 별로 안좋은데 0과 1이 뭘 의미하는지 알기 어렵기 때문이다.
  // 그래서 const [name, age] = students; 이런 식으로 사용할 수 있지만 그래도 위에 interface 등을 사용하는게 좋다.

  
}