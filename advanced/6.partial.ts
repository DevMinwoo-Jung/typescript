{
  type ToDo = {
    title: string;
    description: string;
    lable: string;
    prioirty: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>){
    return {...todo, ...fieldsToUpdate};
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    lable: 'study',
    prioirty: 'high',
  };

  console.log(  updateTodo(todo, {prioirty: 'low'}));

}