{
  interface Stack<T> {
    readonly size: number;
    push(value: T):void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImple<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    // 내부에서만 쓰이는 변수의 경우에는 보통 _를 붙인다
    // _를 붙이는 것이 있다면 getter나 setter를 이용해 외부(public)에서 접근 가능한 것이 있다고 생각하면 좋다
    get size() {
      return this._size;
    }
    push(value: T){
      const node: StackNode<T> = {value, next: this.head}
      this.head = node;
      this._size++;
    }

    pop(): T {
      if(this.head == null){
        throw new Error('Stack is empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImple<string>();

  stack.push('Minwoo 1');
  stack.push('Minwoo 2');
  stack.push('Minwoo 3');

  while(stack.size !== 0) {
    console.log(stack.pop());
  };

  const stack2 = new StackImple<number>();

  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while(stack2.size !== 0) {
    console.log(stack2.pop());
  };
}

