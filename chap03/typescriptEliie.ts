{
  interface Stack {
    readonly size: number;
    push(value: string):void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  }

  class StackImple implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    // 내부에서만 쓰이는 변수의 경우에는 보통 _를 붙인다
    // _를 붙이는 것이 있다면 getter나 setter를 이용해 외부(public)에서 접근 가능한 것이 있다고 생각하면 좋다
    get size() {
      return this._size;
    }
    push(value: string){
      const node: StackNode = {value, next: this.head}
      this.head = node;
      this._size++;
    }

    pop():string {
      if(this.head == null){
        throw new Error('Strack is empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImple();

  stack.push('Minwoo 1');
  stack.push('Minwoo 2');
  stack.push('Minwoo 3');
  while(stack.size !== 0) {
    console.log(stack.pop());
  };
}

