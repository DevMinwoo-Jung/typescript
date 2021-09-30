{
  // union이 한가지만 선택하는 것 이라면 intersection Types는 &이다

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker){
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'minwoo',
    score: 1,
    empolyeeId: 0,
    work: () => {},
  })
}