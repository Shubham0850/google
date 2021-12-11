class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queues {
  constructor() {
    (this.first = null), (this.last = null), (this.length = 0);
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.last = null;
    }
    const tempPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return tempPointer;
  }
}

Queues.addValues = function (...values) {
  let newQueues = new Queues();
  for (let i = 0; i < values.length; i++) {
    newQueues.enqueue(values[i]);
  }
  return newQueues;
};

const newQueues = Queues.addValues("goole", "youtube", "dentway", "linkedin");
newQueues.dequeue();
newQueues.dequeue();
console.log(newQueues.peek());
