class StackItem<T> {
  value: T;
  // элемент под текущим
  nextItem: StackItem<T> | null;

  constructor(value: T, nextItem: StackItem<T> | null = null) {
    this.value = value;
    this.nextItem = nextItem;
  }
}

class Stack<T> {
  private top: StackItem<T> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  push(value: T): void {
    this.top = new StackItem(value, this.top);
    this._size++;
  }

  pop(): T | undefined {
    if (!this.top) {
      return undefined;
    }

    const value = this.top.value;
    this.top = this.top.nextItem;
    this._size--;

    return value;
  }

  peek(): T | undefined {
    return this.top?.value;
  }

  isEmpty(): boolean {
    return this.top === null;
  }
}

const stack = new Stack<number>();

stack.push(123);
stack.push(456);
stack.push(789);

console.log(stack.size); // 3
console.log(stack.peek()); // 789
console.log(stack.pop()); // 789
console.log(stack.pop()); // 456
console.log(stack.peek()); // 123
console.log(stack.isEmpty()); // false
