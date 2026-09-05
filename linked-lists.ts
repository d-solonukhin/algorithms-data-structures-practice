class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: NodeItem<T> | null;
  tail: NodeItem<T> | null;
  length: number;

  constructor() {
    // первый узел
    this.head = null;

    // последний узел
    this.tail = null;

    this.length = 0;
  }

  // вставить в начало
  prepend(value: T): void {
    const node = new NodeItem(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.length++;
  }

  // вставить в конец
  append(value: T): void {
    const node = new NodeItem(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  get(index: number) {
    let current = this.head;
    let i = 0;

    while (current) {
      if (i === index) {
        return current.value;
      }

      // перейти к следующему узлу
      current = current.next;
      i++;
    }

    return undefined;
  }
}

const list = new LinkedList<string>();

list.append("123");
list.append("2123");
list.prepend("555");

console.log(list.get(0));
console.log(list.get(1));
