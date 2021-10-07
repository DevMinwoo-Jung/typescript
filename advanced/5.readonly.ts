{
  type ToDo = {
    title: string;
    description: string;
  };

  function displayBad(todo: ToDo){
    todo.title = 'update';
    // 가변하는 type을 여기저기 옮기면 위험쓰
  }

  function displayGood(todo: Readonly<ToDo>){
    // todo.title = 'update';
    // readonly이므로 변할 수 없다!
  }
}