{
  type StackType = {
    queue: string | number,
  }

  interface Stack {
    addStack(variable:string):StackType,
    deleteStack():StackType
  }

  class StackClass implements Stack {

    private stackQueue:string[] = [];

    constructor(){
      this.stackQueue = this.stackQueue;
    }

    addStack(variable:string):StackType{
      return {
        queue: this.stackQueue[this.stackQueue.length] = variable
      }
    }
    deleteStack():StackType{
      return {
        queue: this.stackQueue.length = this.stackQueue.length - 1
      }
    }
  }

  const answer = new StackClass();
  answer.addStack("민우");
  answer.addStack("민우1");
  answer.addStack("민우2");
  
  console.log(answer);
  answer.deleteStack();
  console.log(answer);
  answer.deleteStack();
  console.log(answer);


}