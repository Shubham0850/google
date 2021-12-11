class Node {
  constructor(prev, value, next) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    (this.head = null), (this.length = 0);
  }

  append(data) {
    const newNode = new Node(null, data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    const newNode = new Node(value, null);
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.insertAtHead(value);

    let prevNode = this.getByIndex(index - 1);
    if (prevNode === null) return null;

    prevNode.next = new Node(value, prevNode.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.removeHead();

    let prevNode = this.getByIndex(index - 1);
    if (prevNode === null) return null;

    prevNode.next = prevNode.next.next;
    this.length--;
  }

  print() {
    let output = ``;

    let current = this.head;
    while (current) {
      output = `${output}${current.value} --> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

DoublyLinkedList.createList = function (...values) {
  const newLinkedList = new DoublyLinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    newLinkedList.append(values[i]);
  }
  return newLinkedList;
};

module.exports = DoublyLinkedList;
