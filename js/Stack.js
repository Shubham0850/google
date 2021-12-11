class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Stack {
  constructor() {
    (this.top = null), (this.bottom = null), (this.length = 0);
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let tempPointer = this.top;
      this.top = newNode;
      this.top.next = tempPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }

  //   print() {
  //     let output = ``;
  //     let current = this.top;
  //     while (current) {
  //       console.log("1");
  //       output = `| ${current.value} | \n`;
  //       current = current.next;
  //     }
  //     console.log(output);
  //   }
}

Stack.addValues = function (...values) {
  let newStack = new Stack();
  for (let i = 0; i < values.length; i++) {
    newStack.push(values[i]);
  }
  return newStack;
};

const newStack = Stack.addValues("goole", "youtube", "shubham");
console.log(newStack);
newStack.pop();
newStack.pop();
console.log(newStack.peek());
