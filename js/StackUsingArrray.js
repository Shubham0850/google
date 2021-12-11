class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
  }
}

const newStack = new Stack();
newStack.push("google");
newStack.push("udemy");
newStack.push("youtube");

console.log(newStack.peek());
